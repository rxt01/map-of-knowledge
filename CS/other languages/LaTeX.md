---
tags:
  - "#computer-language"
  - tags
type:
  - markup language
creator: leslie lamport
date of creation: "1984"
---
# #english-note 

## classes
### article
## formating
### bold
```latex
\textbf{}
```
### italic
```latex
\textit{}
```
### emphatic
```latex
\emph{}
```
### underlined
```latex
\underline{}
```

## environments
### enumerate
numbered list
```latex
\begin{enumerate}
\item
\item
\end{enumerate}
```
### itemize
unnumbered list
```latex
\begin{itemize}
\item
\item
\end{itemize}
```
### matrix
matrix without exterior
```latex
$$\begin{matrix}
a && b \\
c && d
\end{matrix}$$
```

### bmatrix
matrix with square brackets
```

$$\begin{bmatrix}
a&&b \\
c&&d
\end{bmatrix}$$
```

## math mode
## packages
### biblatex
package for managing bibliography
#### commands
| command               | use                                       |
| --------------------- | ----------------------------------------- |
| `\addbibresource{#1}` | add file `#1` to the list of references   |
| `\printbibliography`  | print the bibliography                    |
| `\textcite{#1}`       | cite `#1` and adds it to the bibliography |
|                       |                                           |
### graphicx
handle images
#### commands
| command               | use                                  |
| --------------------- | ------------------------- |
| ` includes the image `#1`   `  `  `  `  `  `  `  `  `  `  `  |