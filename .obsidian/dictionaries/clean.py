import unicodedata
import sys

def remove_breve(text: str) -> str:
    """
    Removes the breve (U+0306, COMBINING BREVE) accent from an Ancient Greek string.

    The function works by normalizing the text to NFD (Normalization Form D),
    which decomposes characters with accents (like precomposed breve characters)
    into a base character and separate combining diacritics. It then filters
    out the specific breve combining character (U+0306) before recomposing
    the remaining characters back to NFC (Normalization Form C).

    Args:
        text: The input Ancient Greek text string.

    Returns:
        The text string with all breve accents removed.
    """
    # Define the Unicode character for the Combining Breve
    COMBINING_BREVE = '\u0306'

    # 1. Normalize the text to NFD (Decomposed form).
    # This splits precomposed characters (like 'α with breve') into
    # a base character ('α') and the combining accent ('\u0306').
    nfd_text = unicodedata.normalize('NFD', text)

    # 2. Filter out the breve combining character.
    filtered_text = "".join(char for char in nfd_text if char != COMBINING_BREVE)

    # 3. Normalize the result back to NFC (Composed form) for cleaner output,
    # combining remaining accents with their base characters.
    nfc_text = unicodedata.normalize('NFC', filtered_text)

    return nfc_text

# --- Example Usage ---
if __name__ == "__main__":
    f = open("grc_wiktionary.json")
    text = f.read()
    f.close()
    text_without_breves = remove_breve(text)
    out = open("grc_wiktionary.json","wt")
    out.write(text_without_breves)
    out.close()
