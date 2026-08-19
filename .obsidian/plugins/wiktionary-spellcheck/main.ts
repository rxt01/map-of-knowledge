import { Plugin, Editor, Notice, MarkdownView, debounce, App, Setting, TFile, PluginSettingTab, MetadataCache, Menu } from "obsidian";
import { EditorView, Decoration, DecorationSet, ViewPlugin, ViewUpdate, Range } from "@codemirror/view";

// --- API CONSTANTS ---
const GEMINI_API_KEY = ""; 
const GEMINI_MODEL = 'gemini-2.5-flash-preview-05-20';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
const MAX_RETRIES = 5;

// --- PLUGIN SETTINGS ---

interface PluginSettings {
    dictionaryPaths: Record<string, string>; 
    defaultLanguages: string; // Changed to comma-separated string (e.g., 'en,fr')
    ignoredWords: Record<string, string[]>; 
}

const DEFAULT_SETTINGS: PluginSettings = {
    dictionaryPaths: {
        'en': '.obsidian/dictionaries/en_wiktionary.json',
        'fr': '.obsidian/dictionaries/fr_wiktionary.json', 
    },
    defaultLanguages: 'en', // Default is just 'en'
    ignoredWords: {
        'en': [],
        'fr': [],
    },
}

// --- DICTIONARY SIMULATION (Base list for fallback) ---
const DEFAULT_DICTIONARY_WORDS: Record<string, Set<string>> = {
    'en': new Set([
        "the", "quick", "brown", "fox", "jumps", "over", "lazy", "dog", "obsidian",
        "wiktionary", "plugin", "typescript", "concept", "example", "dictionary",
        "word", "check", "function", "loading", "data", "simple", "editor", "note",
        "misspelled", "misspellings", "words", "text", "test", "successful", "running",
        "apple", "apply", "applies", "app", "application", "aple", "aplie", "apples",
        "Māori", "Aotearoa", "ergo", "ergō", // Added 'ergō' to ensure strict check works when correct.
        "ἀγὼν", "Ἀθήνη", // Sample ancient Greek words with accents
    ]),
    'fr': new Set([
        "le", "la", "un", "une", "est", "et", "vous", "je", "il", "elle", "nous", "les", "des",
        "ceci", "est", "test", "de", "spell", "check", "en", "francais", "résumé", "français", 
        "été", "voilà", "Māori", "Aotearoa", "ergo"
    ])
};


// --- UTILITY FUNCTIONS ---

/**
 * Implements exponential backoff for API calls.
 */
async function fetchWithRetry(url: string, payload: object, retries: number): Promise<Response> {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.status === 429 || response.status >= 500) {
                // Rate limit or server error - retry
                const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
                await new Promise(resolve => setTimeout(resolve, delay));
                continue;
            }

            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status} ${response.statusText}`);
            }

            return response;

        } catch (error) {
            if (i === retries - 1) {
                throw new Error(`Failed to fetch after ${retries} attempts: ${error instanceof Error ? error.message : "Unknown Error"}`);
            }
            // Wait for the next retry
            const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    // Should be unreachable, but required for strict return type
    throw new Error("Exceeded max retries.");
}


/**
 * Uses the Gemini API with Google Search grounding to find the correction 
 * and definition for a potentially misspelled word.
 * Note: Since this is an API call, it uses the first active language for the search context.
 */
async function fetchWiktionaryCorrection(misspelledWord: string, langCode: string): Promise<{ correction: string | null, definition: string, source: string | null }> {
    const userQuery = `Find the correct spelling and a concise definition for the word "${misspelledWord}" in ${langCode}. Prioritize information from Wiktionary or reliable dictionary sources.`;
    const systemPrompt = `Act as a precise lexicographer and spellchecker. Based on the provided search results, determine the correct spelling for the user's query. Your output MUST be in a single paragraph. Start the paragraph with the **Corrected Word** in bold, followed by a semicolon, then the definition, and finally, a source link in parentheses if available. If no correction is needed, provide the definition. DO NOT include introductory or concluding phrases.`;

    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        tools: [{ "google_search": {} }], // Enable Google Search grounding
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        },
    };
    
    // Fallback/Parsing structure
    const fallback = { correction: null, definition: "Could not find a reliable correction or definition.", source: null };

    try {
        const response = await fetchWithRetry(GEMINI_API_URL, payload, MAX_RETRIES);
        const result = await response.json();
        const candidate = result.candidates?.[0];

        if (!candidate || !candidate.content?.parts?.[0]?.text) {
             throw new Error("No content received from API.");
        }

        const text = candidate.content.parts[0].text.trim();
        
        // --- 1. Extract Grounding Source (URL and Title) ---
        let sourceUri: string | null = null;
        const groundingMetadata = candidate.groundingMetadata;
        if (groundingMetadata && groundingMetadata.groundingAttributions) {
            const firstSource = groundingMetadata.groundingAttributions.find(a => a.web?.uri);
            if (firstSource) {
                sourceUri = firstSource.web?.uri || null;
            }
        }
        
        // --- 2. Parse the formatted response text ---
        const correctionMatch = text.match(/^\*\*([^*]+)\*\*/);
        let finalCorrection: string | null = null;
        let definitionText: string = text;
        
        if (correctionMatch) {
            const rawCorrection = correctionMatch[1].trim();
            finalCorrection = rawCorrection; 
            definitionText = text.replace(correctionMatch[0], '').trim();
        } else {
             new Notice("Warning: API response format unexpected. Showing raw text.", 3000);
        }
        
        if (definitionText.startsWith(';')) {
            definitionText = definitionText.substring(1).trim();
        }
        
        // Simple heuristic: if the bolded correction is exactly the input word, it wasn't corrected.
        if (finalCorrection?.toLowerCase() === misspelledWord.toLowerCase()) {
            finalCorrection = null; 
        }
        
        return {
            correction: finalCorrection,
            definition: definitionText,
            source: sourceUri,
        };

    } catch (error) {
        console.error("Gemini API Error:", error);
        return fallback;
    }
}


/**
 * Utility function to tokenize text and clean up words.
 * Returns both the word text (in its original form) and its starting offset.
 * * CRITICAL FIX: The regex now explicitly includes \p{M} (Unicode Marks, i.e., diacritics)
 * to ensure that decomposed characters (like o + combining macron) are captured 
 * as a single token, which is then correctly normalized later.
 */
function tokenizeWithOffset(text: string): { word: string, index: number }[] {
    // Matches sequences of Unicode Letters (\p{L}), Marks (\p{M}), and Digits (\d) allowing 
    // internal separators (', -, /).
    const tokenRegex = /([\p{L}\p{M}\d]+(?:['\-\/][\p{L}\p{M}\d]+)*)/gu; 
    
    const tokens: { word: string, index: number }[] = [];
    let match: RegExpExecArray | null;

    while ((match = tokenRegex.exec(text)) !== null) {
        if (match[0].length > 0) {
            tokens.push({
                word: match[0], 
                index: match.index
            });
        }
    }
    return tokens;
}

/**
 * The core logic for checking a word against the loaded dictionary and ignore list.
 * CRITICAL FIX: This performs a STRICT check, meaning the word must match exactly,
 * including any diacritics, to be considered correct.
 */
function isWordCorrect(word: string, dictionary: Set<string>, ignoredWords: Set<string>): boolean {
    
    // 1. Primary Check (STRICT): The word must exist in the dictionary or the ignore list
    // in its exact normalized, lowercased form (including accents/macrons).
    if (dictionary.has(word) || ignoredWords.has(word)) {
        return true;
    }

    // No fallback check is performed, ensuring that only correctly accented words pass.
    return false;
}

/**
 * Reads the frontmatter of the active note to determine the desired languages.
 * Supports 'lang: en' (string) or 'langs: [en, fr]' (array) in frontmatter.
 */
function getNoteLanguages(app: App, view: MarkdownView, defaultLangsSetting: string): string[] {
    const file = view.file;
    // Default languages from settings (split comma-separated string)
    const defaultLangs = defaultLangsSetting.split(',').map(l => l.trim().toLowerCase()).filter(l => l.length > 0);
    if (!file) return defaultLangs;

    const metadata = app.metadataCache.getFileCache(file);
    let langFromFrontmatter: string | string[] | undefined;
    
    // Check for 'lang' key first (can be string like "en,fr")
    langFromFrontmatter = metadata?.frontmatter?.lang; 

    // Check for a plural 'langs' key as a fallback/alternative (often an array)
    if (!langFromFrontmatter) {
         langFromFrontmatter = metadata?.frontmatter?.langs;
    }

    if (langFromFrontmatter) {
        let languages: string[] = [];
        if (typeof langFromFrontmatter === 'string') {
            // Handle single string like "en, fr" or "en"
            languages = langFromFrontmatter.split(/[ ,]+/).map(l => l.trim().toLowerCase()).filter(l => l.length > 0);
        } else if (Array.isArray(langFromFrontmatter)) {
            // Handle array like [ "en", "fr" ]
            languages = langFromFrontmatter.map(l => String(l).trim().toLowerCase()).filter(l => l.length > 0);
        }
        
        // Return unique languages found in frontmatter
        if (languages.length > 0) {
            return Array.from(new Set(languages));
        }
    }

    // Fallback to defaults from settings
    return defaultLangs;
}


// --- LEVENSHTEIN DISTANCE AND SUGGESTION LOGIC (Local Dictionary) ---

/**
 * Removes diacritics (like macrons, accents, combining marks) from a string.
 * This is used ONLY for distance calculation to prioritize base word matches.
 */
function removeDiacritics(str: string): string {
    // Normalizes to NFD (Decomposition Form) which separates base characters from diacritical marks,
    // then strips the marks using the Unicode range \u0300-\u036f (Combining Diacritical Marks).
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Checks if two characters are equivalent if macrons/diacritics are ignored.
 */
function isMacronSubstitution(charA: string, charB: string): boolean {
    const strippedA = removeDiacritics(charA.toLowerCase());
    const strippedB = removeDiacritics(charB.toLowerCase());
    
    return strippedA === strippedB;
}

/**
 * Calculates the Levenshtein distance between two strings, penalizing
 * macron/diacritic substitutions less than full letter substitutions.
 */
function levenshteinDistance(a: string, b: string): number {
    const an = a.length;
    const bn = b.length;
    if (an === 0) return bn;
    if (bn === 0) return an;

    const matrix: number[][] = [];
    for (let i = 0; i <= an; i++) matrix[i] = [i];
    for (let j = 1; j <= bn; j++) matrix[0][j] = j; 

    for (let i = 1; i <= an; i++) {
        const charA = a[i - 1]; 

        for (let j = 1; j <= bn; j++) {
            const charB = b[j - 1]; 
            
            let cost = (charA === charB) ? 0 : 1; 

            // If characters are different, check if they are diacritic substitutions
            if (cost === 1 && isMacronSubstitution(charA, charB)) {
                cost = 0.3; // Macrons/diacritics are cheap to substitute during suggestion calculation
            }

            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,      // Deletion
                matrix[i][j - 1] + 1,      // Insertion
                matrix[i - 1][j - 1] + cost // Substitution
            );
        }
    }

    return matrix[an][bn];
}

/**
 * Finds the closest words in the local dictionary using Levenshtein distance.
 */
function getClosestWords(misspelledWord: string, dictionary: Set<string>): { word: string, distance: number }[] {
    const MAX_DISTANCE = 2.0; 
    const MAX_SUGGESTIONS = 5; 
    const candidates: { word: string, distance: number }[] = [];
    
    const dictionaryArray = Array.from(dictionary);
    const misspelledLength = misspelledWord.length; 
    
    for (let i = 0; i < dictionaryArray.length; i++) {
        const correctWord = dictionaryArray[i];

        if (Math.abs(misspelledLength - correctWord.length) > 2) {
            continue;
        }

        const distance = levenshteinDistance(misspelledWord, correctWord);

        if (distance > 0 && distance <= MAX_DISTANCE) {
            candidates.push({ word: correctWord, distance: distance });
        }
    }

    // Sort by distance (ascending) then word (alphabetical)
    candidates.sort((a, b) => {
        if (a.distance !== b.distance) {
            return a.distance - b.distance;
        }
        return a.word.localeCompare(b.word);
    });

    return candidates.slice(0, MAX_SUGGESTIONS);
}


// --- CODE MIRROR STYLING AND DECORATION ---

// Define the CSS style for the error mark (squiggly red underline)
const EDITOR_THEME = EditorView.baseTheme({
    ".cm-spellcheck-error": {
        backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAzIj48cGF0aCBkPSJNMCAzdjIuOWgzLjlMMTcuNS4xIDAgMC42eiIgZmlsbD0icmVkIi8+PC9zdmc+') !important",
        backgroundRepeat: "repeat-x !important",
        backgroundPosition: "bottom !important",
        backgroundSize: "12px 3px !important", 
        paddingBottom: "1px !important",
        opacity: "1 !important"
    }
});

/**
 * The function that generates the actual CodeMirror Decorations, dynamically selecting the dictionary.
 * (Now only processes the visible ranges - performance fix 1).
 */
function getSpellcheckDecorations(view: EditorView, app: App, plugin: WiktionarySpellcheckPlugin): DecorationSet {
    const activeView = app.workspace.getActiveViewOfType(MarkdownView);
    if (!activeView || !activeView.file) return Decoration.none;

    // Get the array of active languages for this note
    const langCodes = getNoteLanguages(app, activeView, plugin.settings.defaultLanguages);
    if (langCodes.length === 0) return Decoration.none;

    // Aggregate ALL dictionaries and ignored words into combined Sets for O(1) lookup
    const allDictionaries: Set<string> = new Set();
    const allIgnoredWords: Set<string> = new Set();
    
    for (const code of langCodes) {
        const dict = plugin.dictionaries.get(code);
        if (dict) {
            dict.forEach(word => allDictionaries.add(word));
        }
        
        const ignoredArray = plugin.settings.ignoredWords[code] || [];
        ignoredArray.map(w => w.normalize('NFD').toLowerCase()).forEach(word => allIgnoredWords.add(word));
    }

    if (allDictionaries.size === 0) return Decoration.none;

    const widgets: Range<Decoration>[] = [];
    
    for (const { from, to } of view.visibleRanges) { 
        // Slice the content of the visible range
        const lineText = view.state.doc.sliceString(from, to);
        const tokens = tokenizeWithOffset(lineText);

        for (const token of tokens) {
            const originalWord = token.word; 
            
            // Calculate global document offsets by adding the range's 'from' offset
            const start = from + token.index; 
            const end = start + originalWord.length; 

            if (originalWord.length <= 2) continue;
            
            // Ensure the word for lookup is **NFD normalized** and lowercased.
            const wordForLookup = originalWord.normalize('NFD').toLowerCase(); 

            // Check against the combined dictionaries and ignore lists
            if (!isWordCorrect(wordForLookup, allDictionaries, allIgnoredWords)) {
                
                const mark = Decoration.mark({ class: "cm-spellcheck-error" });
                widgets.push(mark.range(start, end));
            }
        }
    }

    return Decoration.set(widgets, true);
}

/**
 * The ViewPlugin that manages the decorations lifecycle.
 * FIX: Debounces the expensive `getSpellcheckDecorations` call to prevent lag on keypress.
 */
const spellcheckViewPlugin = (plugin: WiktionarySpellcheckPlugin) => {
    
    // Define the debounced calculation function outside the class instance for singleton management
    const debouncedRecalculate = debounce((view: EditorView, instance: { decorations: DecorationSet }) => {
        // 1. Calculate the new decorations (using the existing, optimized function)
        const newDecorations = getSpellcheckDecorations(view, plugin.app, plugin);

        // 2. Update the synchronous decorations property on the ViewPlugin instance
        instance.decorations = newDecorations;
        
        // 3. Dispatch an empty transaction to force CodeMirror to re-read the decorations accessor.
        // This is the critical step to prevent synchronous lag on input, while ensuring the
        // view eventually updates when the user pauses typing.
        view.dispatch({}); 
    }, 1000, false); // 300ms delay, not immediate.

    return ViewPlugin.fromClass(
        class {
            // Decorations are stored on the instance to be accessed synchronously
            decorations: DecorationSet;
            
            constructor(view: EditorView) {
                // Initial synchronous calculation (needed for first load/initial view)
                this.decorations = getSpellcheckDecorations(view, plugin.app, plugin);
            }

            update(update: ViewUpdate) {
                // If only content or viewport changed, trigger the debounced calculation.
                // The synchronous decorations getter below will return the *old* decorations 
                // until the debounced function runs and forces a redraw. This prevents lag.
                if (update.docChanged || update.viewportChanged) {
                    // Pass the view and the instance itself to the debounced function
                    debouncedRecalculate(update.view, this); 
                }
            }
        },
        {
            // Decoration source getter - always returns the last computed decoration set
            decorations: instance => instance.decorations,
        }
    );
}

// --- SETTINGS TAB CLASS ---

class SpellcheckSettingTab extends PluginSettingTab {
    plugin: WiktionarySpellcheckPlugin;

    constructor(app: App, plugin: WiktionarySpellcheckPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        containerEl.createEl('h2', { text: 'Wiktionary Spellcheck Settings' });
        
        // --- 1. DEFAULT LANGUAGES SETTING (Updated for multiple) ---

        new Setting(containerEl)
            .setName('Default Languages')
            .setDesc('Comma-separated list of language codes (e.g., "en, fr"). These are used if the note is missing the "lang" or "langs" frontmatter property.')
            .addText(text => text
                    .setValue(this.plugin.settings.defaultLanguages)
                    .setPlaceholder('en, fr, de')
                    .onChange(async (value) => {
                        this.plugin.settings.defaultLanguages = value;
                        await this.plugin.saveSettings();
                        this.plugin.refreshEditorView();
                    }));

        containerEl.createEl('h3', { text: 'Configured Dictionaries' });
        
        // --- 2. LIST EXISTING DICTIONARY PATHS ---
        const pathKeys = Object.keys(this.plugin.settings.dictionaryPaths).sort();

        for (const langCode of pathKeys) {
            const path = this.plugin.settings.dictionaryPaths[langCode];
            const status = this.plugin.dictionaries.get(langCode) ? 
                `Loaded: ${this.plugin.dictionaries.get(langCode)?.size || 0} words` : 
                'Not Loaded';

            new Setting(containerEl)
                .setName(`${langCode.toUpperCase()} Dictionary Path`)
                .setDesc(`${status}. File path for the '${langCode}' language.`)
                .addText(text => text
                    .setValue(path)
                    .onChange(async (newPath) => {
                        this.plugin.settings.dictionaryPaths[langCode] = newPath;
                        await this.plugin.saveSettings();
                        await this.plugin.loadDictionaryFromFile(newPath, langCode);
                        this.plugin.refreshEditorView();
                        this.display();
                    }))
                .addButton(button => button
                    .setIcon('refresh-cw')
                    .setTooltip(`Reload ${langCode} dictionary`)
                    .onClick(async () => {
                        await this.plugin.loadDictionaryFromFile(path, langCode);
                        this.plugin.refreshEditorView();
                        this.display(); 
                    }))
                .addButton(button => button
                    .setIcon('trash')
                    .setTooltip(`Remove ${langCode} dictionary`)
                    .onClick(async () => {
                        if (this.plugin.settings.defaultLanguages.includes(langCode)) {
                            new Notice(`Cannot remove dictionary: ${langCode.toUpperCase()} is listed in Default Languages. Remove it there first.`, 4000);
                            return;
                        }
                        delete this.plugin.settings.dictionaryPaths[langCode];
                        this.plugin.dictionaries.delete(langCode);
                        delete this.plugin.settings.ignoredWords[langCode];
                        await this.plugin.saveSettings();
                        this.plugin.refreshEditorView();
                        this.display(); 
                    }));
        }

        containerEl.createEl('h3', { text: 'Add New Language' });

        // --- 3. ADD NEW LANGUAGE SETTING ---
        let newLangCode = '';
        let newPath = '';

        new Setting(containerEl)
            .setName('New Language Dictionary')
            .setDesc('Enter the language code (e.g., "es") and the file path.')
            .addText(text => text
                .setPlaceholder('Language Code (e.g., es)')
                .onChange(value => newLangCode = value.toLowerCase().trim()))
            .addText(text => text
                .setPlaceholder('File Path (e.g., dictionaries/es.json)')
                .onChange(value => newPath = value.trim()))
            .addButton(button => button
                .setButtonText("Add & Load")
                .setCta()
                .onClick(async () => {
                    if (newLangCode && newPath && !this.plugin.settings.dictionaryPaths[newLangCode]) {
                        this.plugin.settings.dictionaryPaths[newLangCode] = newPath;
                        this.plugin.settings.ignoredWords[newLangCode] = []; 
                        await this.plugin.saveSettings();
                        await this.plugin.loadDictionaryFromFile(newPath, newLangCode);
                        this.plugin.refreshEditorView();
                        this.display(); 
                    } else {
                        new Notice("Invalid language code, path, or language already exists.", 3000);
                    }
                }));
        
        // --- 4. IGNORED WORDS SETTING ---
        containerEl.createEl('h3', { text: 'Ignored Words' });
        containerEl.createEl('p', { text: 'Words in this list will be ignored by the spellchecker for all notes of the corresponding language. These words are stored in their **Decomposed Unicode form (NFD)** for robust matching.' });
        
        for (const langCode of pathKeys) {
            const ignoredWordsList = this.plugin.settings.ignoredWords[langCode] || []; 
            const ignoredWordsString = ignoredWordsList.join(', ');

            new Setting(containerEl)
                .setName(`${langCode.toUpperCase()} Ignore List`)
                .setDesc(`Comma-separated list of words to ignore for ${langCode.toUpperCase()}.`)
                .addText(text => text
                    .setPlaceholder('word1, word2, word3')
                    .setValue(ignoredWordsString)
                    .onChange(debounce(async (value) => { 
                        // CRITICAL FIX: Ensure ignored words are **NFD normalized** before saving
                        const words = value.split(',')
                                           .map(w => w.trim())
                                           .filter(w => w.length > 0)
                                           .map(w => w.normalize('NFD').toLowerCase());
                                           
                        this.plugin.settings.ignoredWords[langCode] = words;
                        await this.plugin.saveSettings();
                        this.plugin.refreshEditorView();
                    }, 500))); 
        }
    }
}


// --- MAIN PLUGIN CLASS ---

export default class WiktionarySpellcheckPlugin extends Plugin {

    public settings: PluginSettings;
    public dictionaries: Map<string, Set<string>> = new Map(); 

    async onload() {
        console.log('Wiktionary Spellcheck Plugin: Loading...');
        
        await this.loadSettings();

        // 1. Register the settings tab
        this.addSettingTab(new SpellcheckSettingTab(this.app, this));

        // 2. Register the CodeMirror extensions
        this.registerEditorExtension([
            EDITOR_THEME, 
            spellcheckViewPlugin(this)
        ]);

        // 3. Auto-load all dictionaries
        for (const [lang, path] of Object.entries(this.settings.dictionaryPaths)) {
            await this.loadDictionaryFromFile(path, lang, true); 
        }

        // 4. Register commands with updated logic
        this.addCommand({
            id: 'wiktionary-spellcheck-suggest-correction',
            name: 'Suggest Corrections (Local Dictionary, All Active Languages)',
            editorCallback: (editor: Editor) => {
                this.suggestCorrection(editor);
            }
        });

        this.addCommand({
            id: 'wiktionary-spellcheck-auto-correct',
            name: 'Auto-Correct (Local Dictionary, Best Combined Suggestion)',
            editorCallback: (editor: Editor) => {
                this.autoCorrectSelectedWord(editor);
            }
        });
        
        this.addCommand({
            id: 'wiktionary-spellcheck-ignore-word',
            name: 'Ignore Selected Word (Choose Language)',
            editorCallback: (editor: Editor) => {
                this.handleIgnoreOrAddToDictionary(editor, 'ignore');
            }
        });
        
        this.addCommand({
            id: 'wiktionary-spellcheck-add-word-to-dictionary',
            name: 'Add Selected Word to Dictionary File (Choose Language)',
            editorCallback: (editor: Editor) => {
                this.handleIgnoreOrAddToDictionary(editor, 'add');
            }
        });

        this.addCommand({
            id: 'wiktionary-spellcheck-live-lookup',
            name: 'Wiktionary Live Lookup & Correct (via Gemini API, Primary Lang)',
            editorCallback: (editor: Editor) => {
                this.liveLookupCorrection(editor);
            }
        });

        this.addCommand({
            id: 'wiktionary-spellcheck-open-wiktionary',
            name: 'Open Selected Word in Wiktionary (Browser, Primary Lang)',
            editorCallback: (editor: Editor) => {
                this.openInWiktionary(editor);
            }
        });

        // 5. Register context menu handler
        this.registerEvent(this.app.workspace.on('editor-menu', this.onEditorMenu.bind(this))); 
    }

    async onunload() {
        console.log('Wiktionary Spellcheck Plugin: Unloading.');
    }

    /**
     * Helper to get active languages and selected word for actions.
     */
    private getActionLanguages(view: MarkdownView): { langCodes: string[], selectedWord: string | null, selection: string } {
        const langCodes = getNoteLanguages(this.app, view, this.settings.defaultLanguages);
        
        let selection = view.editor.getSelection().trim();
        let selectedWord: string | null = null;
        
        if (selection && !/\s/.test(selection)) {
             // CRITICAL FIX: Ensure selected word is NFD normalized for consistency
             selectedWord = selection.normalize('NFD').toLowerCase();
        }
        
        return { langCodes, selectedWord, selection };
    }

    // --- Utility to force editor refresh ---
    refreshEditorView() {
        this.app.workspace.iterateAllLeaves(leaf => {
            if (leaf.view instanceof MarkdownView && leaf.view.editor) {
                leaf.view.editor.refresh(); 
            }
        });
    }
    
    // --- Open in Browser Logic ---
    private openInWiktionary(editor: Editor) {
        const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!activeView) {
            new Notice("Please focus on a Markdown note.", 3000);
            return;
        }

        const { selection, langCodes } = this.getActionLanguages(activeView);
        if (!selection) {
            new Notice("Please select a word to look up on Wiktionary.", 3000);
            return;
        }

        // Use the first active language as the default for the URL
        const langCode = langCodes[0] || this.settings.defaultLanguages.split(',')[0] || 'en';
        
        const wordForUrl = encodeURIComponent(selection); 
        const wiktionaryUrl = `https://${langCode}.wiktionary.org/wiki/${wordForUrl}`;

        window.open(wiktionaryUrl, '_blank');
        
        new Notice(`Opening Wiktionary for '${selection}' (using ${langCode.toUpperCase()}) in a new browser tab.`, 3000);
    }

    // --- Live Lookup Logic ---
    private async liveLookupCorrection(editor: Editor) {
        const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!activeView) {
            new Notice("Please focus on a Markdown note.", 3000);
            return;
        }

        const { selection, langCodes } = this.getActionLanguages(activeView);

        if (!selection) {
            new Notice("Please select a word for live lookup.", 3000);
            return;
        }

        // Use the first active language for the API call context
        const langCode = langCodes[0] || this.settings.defaultLanguages.split(',')[0] || 'en';
        const selectedWord = selection.toLowerCase();

        const loadingNotice = new Notice(`🔍 Searching Wiktionary via Gemini for '${selection}' in ${langCode.toUpperCase()}...`, 0); 

        try {
            const result = await fetchWiktionaryCorrection(selectedWord, langCode);

            setTimeout(() => { loadingNotice.hide(); }, 100); 

            let correctedWord = selection; // Default to original selection
            
            if (result.correction) {
                // Apply casing logic
                correctedWord = result.correction;
                if (selection.length > 0) {
                    if (selection === selection.toUpperCase()) {
                        correctedWord = result.correction.toUpperCase();
                    } else if (selection[0] === selection[0].toUpperCase()) {
                        correctedWord = result.correction.charAt(0).toUpperCase() + result.correction.slice(1);
                    }
                }

                editor.replaceSelection(correctedWord);
            }
            
            const action = result.correction ? `Corrected to '${correctedWord}'` : 'Definition Found';
            const sourceDisplay = result.source ? `\n\nSource: ${result.source}` : '';
            
            new Notice(
                `✅ Live Lookup Result for '${selection}':\n\n${action}\n\nDefinition: ${result.definition}${sourceDisplay}`, 
                15000
            );

        } catch (error) {
            setTimeout(() => { loadingNotice.hide(); }, 100); 
            new Notice(`❌ Live Lookup Failed: ${error instanceof Error ? error.message : "An unknown error occurred."}`, 7000);
        }
    }


    // --- Context Menu Handler (Updated for Multi-Language Actions) ---
    private onEditorMenu(menu: Menu, editor: Editor, view: MarkdownView) {
        const { selection, selectedWord: normalizedSelectedWord, langCodes } = this.getActionLanguages(view);
        
        if (!normalizedSelectedWord) {
            return;
        }

        // 1. --- Check Correction Status Across ALL Active Languages ---
        let isCorrectAnywhere = false;
        let dictionariesChecked = 0;
        
        for (const code of langCodes) {
            const dictionary = this.dictionaries.get(code);
            const ignoredWordsArray = this.settings.ignoredWords[code] || [];
            
            if (dictionary) {
                dictionariesChecked++;
                // Ensure ignored words set is also NFD normalized for comparison
                const ignoredWordsSet = new Set(ignoredWordsArray.map(w => w.normalize('NFD').toLowerCase())); 

                // Check using the robust isWordCorrect (STRICT MATCH)
                if (isWordCorrect(normalizedSelectedWord, dictionary, ignoredWordsSet)) {
                    isCorrectAnywhere = true;
                }
            }
        }
        
        // --- Always offer Live Lookup and Open in Wiktionary ---
        menu.addItem((item) => {
            item.setTitle(`Wiktionary Live Lookup & Correct (via API)`)
                .setIcon('globe')
                .onClick(() => this.liveLookupCorrection(editor));
        });
        
        menu.addItem((item) => {
            item.setTitle(`Open in Wiktionary (${(langCodes[0] || 'en').toUpperCase()})`)
                .setIcon('external-link')
                .onClick(() => this.openInWiktionary(editor));
        });

        // 2. --- Show spellcheck options ONLY if flagged as incorrect locally in ALL active dicts ---
        if (dictionariesChecked > 0 && !isCorrectAnywhere) {
            
            menu.addSeparator();
            
            // --- Helper for creating a language-specific submenu action ---
            const createLangSubmenu = (menuItem: Menu, title: string, icon: string, actionCallback: (code: string) => void) => {
                if (langCodes.length > 1) {
                    const submenu = menuItem.setTitle(`${title}...`).setIcon(icon).setSubmenu();
                    langCodes.forEach(code => {
                        submenu.addItem(subItem => {
                            subItem.setTitle(`${title} for ${code.toUpperCase()}`)
                                   .onClick(() => actionCallback(code));
                        });
                    });
                } else {
                    menuItem.setTitle(`${title} (${langCodes[0].toUpperCase()})`).setIcon(icon).onClick(() => actionCallback(langCodes[0]));
                }
            };
            
            // --- ADD TO DICTIONARY ---
            menu.addItem((item) => {
                createLangSubmenu(item, `Add "${selection}" to Dictionary`, 'book-plus', (code) => this.addWordToDictionary(editor, code));
            });
            
            // --- IGNORE WORD ---
            menu.addItem((item) => {
                createLangSubmenu(item, `Ignore "${selection}"`, 'eye-off', (code) => this.ignoreSelectedWord(editor, code));
            });

            // --- SUGGESTIONS (Combined) ---
            const allSuggestions = new Map<string, { word: string, distance: number }>(); 

            for (const code of langCodes) {
                const dictionary = this.dictionaries.get(code);
                if (dictionary) {
                    const suggestions = getClosestWords(normalizedSelectedWord, dictionary);
                    suggestions.forEach(s => {
                        if (!allSuggestions.has(s.word) || allSuggestions.get(s.word)!.distance > s.distance) {
                            allSuggestions.set(s.word, s);
                        }
                    });
                }
            }
            
            const combinedSuggestions = Array.from(allSuggestions.values()).sort((a, b) => {
                if (a.distance !== b.distance) {
                    return a.distance - b.distance;
                }
                return a.word.localeCompare(b.word);
            }).slice(0, 5); 

            if (combinedSuggestions.length > 0) {
                 const bestSuggestion = combinedSuggestions[0].word;
                 
                 // Auto-Correct Option 
                 menu.addItem((item) => {
                    item.setTitle(`Auto-Correct to "${bestSuggestion}" (Combined Local)`)
                        .setIcon('pencil')
                        .onClick(() => this.autoCorrectSelectedWord(editor, bestSuggestion));
                });
                
                // Suggestions Submenu
                let suggestionsSubmenu: Menu; 

                menu.addItem((item) => {
                    item.setTitle('Suggestions (Combined Local)...')
                        .setIcon('list-checks');
                    suggestionsSubmenu = item.setSubmenu(); 
                });
                
                combinedSuggestions.forEach(suggestion => {
                     suggestionsSubmenu.addItem(subItem => {
                        subItem.setTitle(`${suggestion.word} (Cost: ${suggestion.distance.toFixed(1)})`)
                               .setIcon('check')
                               .onClick(() => this.autoCorrectSelectedWord(editor, suggestion.word));
                     });
                });
            }
        }
    }
    
    // --- Helper for command palette to choose language for action ---
    private async handleIgnoreOrAddToDictionary(editor: Editor, action: 'ignore' | 'add') {
        const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!activeView) {
            new Notice("Please focus on a Markdown note.", 3000);
            return;
        }
        
        const { selection, selectedWord: normalizedSelectedWord, langCodes } = this.getActionLanguages(activeView);
        if (!selection) {
            new Notice("Please select a word.", 3000);
            return;
        }

        const availableLangs = langCodes.filter(code => this.dictionaries.has(code));

        if (availableLangs.length === 0) {
            new Notice("No dictionaries loaded for active languages. Check settings.", 4000);
            return;
        }

        if (availableLangs.length === 1) {
            // Only one language, act directly
            if (action === 'ignore') {
                await this.ignoreSelectedWord(editor, availableLangs[0]);
            } else {
                await this.addWordToDictionary(editor, availableLangs[0]);
            }
            return;
        }

        // Multiple languages, prompt the user
        const actionTitle = action === 'ignore' ? 'Ignore' : 'Add to Dictionary';
        const langCode = await new Promise<string | null>((resolve) => {
            const prompt = new Notice(`Select language for action: "${actionTitle} ${selection}"`, 0);
            
            const container = prompt.noticeEl.createDiv({ cls: 'wiktionary-lang-prompt-container' });
            container.style.display = 'flex';
            container.style.flexWrap = 'wrap';
            container.style.marginTop = '10px';

            availableLangs.forEach(code => {
                container.createEl('button', { 
                    text: code.toUpperCase(), 
                    cls: 'mod-cta' 
                }).onClick = () => {
                    prompt.hide();
                    resolve(code);
                };
            });
            
            // Allow escape/click outside to cancel
            setTimeout(() => {
                if (prompt.noticeEl.parentElement) {
                    prompt.hide();
                    resolve(null);
                }
            }, 10000); // Auto-cancel after 10 seconds
        });
        
        if (langCode) {
            if (action === 'ignore') {
                await this.ignoreSelectedWord(editor, langCode);
            } else {
                await this.addWordToDictionary(editor, langCode);
            }
        }
    }
    
    // --- Add to Dictionary Logic (Now accepts language code) ---
    private async addWordToDictionary(editor: Editor, langCode: string) {
        const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!activeView) return;

        const selection = editor.getSelection().trim();
        if (!selection) {
            new Notice("Please select a word to add to the dictionary.", 3000);
            return;
        }

        const selectedWord = selection.trim();
        // CRITICAL FIX: Ensure the word being added is **NFD normalized**
        const wordToAdd = selectedWord.normalize('NFD').toLowerCase();

        const filePath = this.settings.dictionaryPaths[langCode];

        const file = this.app.vault.getAbstractFileByPath(filePath);
        if (!file || !(file instanceof TFile)) {
            new Notice(`❌ Dictionary file not found at path: ${filePath}. Check settings.`, 7000);
            return;
        }

        try {
            const loadingNotice = new Notice(`Saving '${selectedWord}' to ${langCode.toUpperCase()} dictionary file...`, 0);

            const jsonContent = await this.app.vault.read(file);
            let wordList = JSON.parse(jsonContent) as string[];

            if (!Array.isArray(wordList)) {
                throw new Error("JSON content must be a flat array of strings (words).");
            }

            // Check against NFD normalized words in the existing list
            const wordSet = new Set(wordList.map(w => w.normalize('NFD').toLowerCase()));
            if (wordSet.has(wordToAdd)) {
                setTimeout(() => loadingNotice.hide(), 100); 
                new Notice(`'${selectedWord}' is already in the ${langCode.toUpperCase()} dictionary.`, 3000);
                return;
            }

            wordList.push(wordToAdd);
            // Re-sort the list for cleaner file management
            wordList.sort((a, b) => a.localeCompare(b)); 

            await this.app.vault.modify(file, JSON.stringify(wordList, null, 2));

            // Add to in-memory dictionary (which is NFD normalized)
            this.dictionaries.get(langCode)?.add(wordToAdd);
            
            setTimeout(() => loadingNotice.hide(), 100); 
            new Notice(`✅ '${selectedWord}' successfully added to the ${langCode.toUpperCase()} dictionary file!`, 5000);
            
            this.refreshEditorView();
            
        } catch (error) {
            new Notice(`❌ Failed to add word to dictionary: ${error instanceof Error ? error.message : "Unknown Error"}`, 7000);
            console.error("Error adding word to dictionary:", error);
        }
    }

    // --- Ignore Logic (Now accepts language code) ---
    private async ignoreSelectedWord(editor: Editor, langCode: string) {
        const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!activeView) return;
        
        const selection = editor.getSelection().trim();
        if (!selection) return;

        // CRITICAL FIX: Store the ignored word in its **NFD normalized** form
        const wordToIgnore = selection.normalize('NFD').toLowerCase();
        
        const ignoredWords = this.settings.ignoredWords[langCode] || [];
        if (ignoredWords.includes(wordToIgnore)) {
            new Notice(`'${selection}' is already in the ignore list for ${langCode.toUpperCase()}.`, 3000);
            return;
        }

        if (this.settings.ignoredWords[langCode]) {
            this.settings.ignoredWords[langCode].push(wordToIgnore);
        } else {
            this.settings.ignoredWords[langCode] = [wordToIgnore];
        }

        await this.saveSettings();
        this.refreshEditorView();
        new Notice(`'${selection}' added to the ignore list for ${langCode.toUpperCase()}.`, 5000);
    }

    // --- Suggestion Logic (Combined Local) ---
    private suggestCorrection(editor: Editor) {
        const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!activeView) {
            new Notice("Please focus on a Markdown note.", 3000);
            return;
        }

        const { selection, selectedWord: normalizedSelectedWord, langCodes } = this.getActionLanguages(activeView);

        if (!selection) {
            new Notice("Please select a word to get suggestions.", 3000);
            return;
        }
        
        // 1. Check if the word is correct in ANY active dictionary
        let isCorrectAnywhere = false;
        
        for (const code of langCodes) {
            const dictionary = this.dictionaries.get(code);
            const ignoredWordsArray = this.settings.ignoredWords[code] || [];
            if (dictionary) {
                 // Check against NFD normalized ignored words set
                 if (isWordCorrect(normalizedSelectedWord, dictionary, new Set(ignoredWordsArray.map(w => w.normalize('NFD').toLowerCase())))) {
                    isCorrectAnywhere = true;
                    break;
                }
            }
        }
        
        if (isCorrectAnywhere) {
            new Notice(`'${selection}' is correct or ignored in one of the active languages!`, 3000);
            return;
        }

        new Notice(`Searching for combined local corrections for '${normalizedSelectedWord}'...`, 2000);
        
        // 2. Collect and combine suggestions from all dictionaries
        const allSuggestions = new Map<string, { word: string, distance: number }>(); 

        for (const code of langCodes) {
            const dictionary = this.dictionaries.get(code);
            if (dictionary) {
                const suggestions = getClosestWords(normalizedSelectedWord, dictionary);
                suggestions.forEach(s => {
                    if (!allSuggestions.has(s.word) || allSuggestions.get(s.word)!.distance > s.distance) {
                        allSuggestions.set(s.word, s);
                    }
                });
            }
        }
        
        const combinedSuggestions = Array.from(allSuggestions.values()).sort((a, b) => {
            if (a.distance !== b.distance) {
                return a.distance - b.distance;
            }
            return a.word.localeCompare(b.word);
        }).slice(0, 5);


        if (combinedSuggestions.length > 0) {
            const suggestionList = combinedSuggestions.map((s, index) => 
                `${index + 1}. **${s.word}** (Cost: ${s.distance.toFixed(1)})`
            ).join('\n');

            new Notice(
                `Corrections (Combined Local Dictionary) for '${normalizedSelectedWord}':\n\n${suggestionList}`, 
                15000
            );
        } else {
            new Notice(`No close local suggestions found for '${normalizedSelectedWord}' (max 2 edits). Try the 'Live Lookup' command.`, 7000);
        }
    }
    
    // --- Auto-Correction Logic (Combined Local) ---
    private autoCorrectSelectedWord(editor: Editor, bestSuggestion?: string) {
        const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!activeView) {
            new Notice("Please focus on a Markdown note.", 3000);
            return;
        }

        const { selection, selectedWord: normalizedSelectedWord, langCodes } = this.getActionLanguages(activeView);

        if (!selection) {
            new Notice("Please select a word to auto-correct.", 3000);
            return;
        }

        // Use the passed suggestion if available (from context menu)
        let finalSuggestion = bestSuggestion;
        
        if (!finalSuggestion) {
            // Find the best suggestion if called from command palette

            let isCorrectAnywhere = false;
            for (const code of langCodes) {
                const dictionary = this.dictionaries.get(code);
                const ignoredWordsArray = this.settings.ignoredWords[code] || [];
                // Check against NFD normalized ignored words set
                if (dictionary && isWordCorrect(normalizedSelectedWord, dictionary, new Set(ignoredWordsArray.map(w => w.normalize('NFD').toLowerCase())))) {
                    isCorrectAnywhere = true;
                    break;
                }
            }
            if (isCorrectAnywhere) {
                 new Notice(`'${selection}' is already correct or ignored. No correction applied.`, 3000);
                 return;
            }

            const allSuggestions = new Map<string, { word: string, distance: number }>(); 
            for (const code of langCodes) {
                const dictionary = this.dictionaries.get(code);
                if (dictionary) {
                    const suggestions = getClosestWords(normalizedSelectedWord, dictionary);
                    suggestions.forEach(s => {
                         if (!allSuggestions.has(s.word) || allSuggestions.get(s.word)!.distance > s.distance) {
                             allSuggestions.set(s.word, s);
                         }
                    });
                }
            }
            const combinedSuggestions = Array.from(allSuggestions.values()).sort((a, b) => a.distance - b.distance);
            if (combinedSuggestions.length === 0) {
                 new Notice(`No good local correction found for '${selection}' (max 2 edits). Try the 'Live Lookup' command.`, 7000);
                 return;
            }
            finalSuggestion = combinedSuggestions[0].word;
        }
        
        // Apply the best suggestion
        let correctedWord = finalSuggestion;
        if (selection.length > 0) {
            if (selection === selection.toUpperCase()) {
                correctedWord = finalSuggestion.toUpperCase();
            }
            else if (selection[0] === selection[0].toUpperCase()) {
                correctedWord = finalSuggestion.charAt(0).toUpperCase() + finalSuggestion.slice(1);
            }
        }
        
        editor.replaceSelection(correctedWord);
        new Notice(`Auto-corrected '${selection}' to '${correctedWord}' (Local Dictionary).`, 4000);
    }


    // --- Settings Persistence & Dictionary Loading (UPDATED) ---

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
        
        for (const langCode of Object.keys(this.settings.dictionaryPaths)) {
            if (this.settings.ignoredWords[langCode] === undefined) {
                this.settings.ignoredWords[langCode] = [];
            }
        }
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    public async loadDictionaryFromFile(filePath: string, langCode: string, silent: boolean = false): Promise<void> {
        if (!silent) {
            new Notice(`Attempting to load ${langCode.toUpperCase()} dictionary from: ${filePath}...`, 3000);
        }
        
        try {
            const file = this.app.vault.getAbstractFileByPath(filePath);

            if (!file || !(file instanceof TFile)) {
                throw new Error("File not found or is a folder.");
            }

            const jsonContent = await this.app.vault.read(file);
            const wordList = JSON.parse(jsonContent) as string[];

            if (!Array.isArray(wordList)) {
                throw new Error("JSON content must be a flat array of strings (words).");
            }
            
            // CRITICAL FIX: Normalize all dictionary words to **NFD (Decomposed Form)**
            const newDictionary = new Set(wordList.map(w => w.normalize('NFD').toLowerCase()));
            this.dictionaries.set(langCode, newDictionary);

            this.settings.dictionaryPaths[langCode] = filePath;
            if (this.settings.ignoredWords[langCode] === undefined) {
                 this.settings.ignoredWords[langCode] = [];
            }
            await this.saveSettings();
            
            if (!silent) {
                new Notice(`Successfully loaded ${newDictionary.size} ${langCode.toUpperCase()} words!`, 5000);
            }
            console.log(`Wiktionary Spellcheck: Loaded ${newDictionary.size} words for ${langCode}.`);

        } catch (error) {
            const defaultDict = DEFAULT_DICTIONARY_WORDS[langCode];
            if (defaultDict) {
                // IMPORTANT: Ensure the default dictionary is also NFD normalized before use
                const normalizedDefault = new Set(Array.from(defaultDict).map(w => w.normalize('NFD').toLowerCase()));
                this.dictionaries.set(langCode, normalizedDefault); 
            } else {
                this.dictionaries.delete(langCode);
            }
           
            new Notice(`❌ Failed to load ${langCode.toUpperCase()} dictionary from file: ${error instanceof Error ? error.message : "Unknown Error"}. Using default list or removed.`, 7000);
            console.error(`Error loading ${langCode} dictionary file:`, error);
        }
    }
}
