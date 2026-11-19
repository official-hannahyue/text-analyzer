# Text Analyzer

A command-line tool for analyzing text, extracting insights, and comparing documents. Built with TypeScript.

## Features

* Text statistics and analysis
* Word frequency analysis
* Readability reports
* Duplicate word detection
* Keyword extraction
* Text file comparison

## Installation

Install globally using npm:

```
npm install -g text-analyzer
```

## Usage

```
text-analyzer <command> <file>
```

## Commands


| Command                   | Description                   |
| ------------------------- | ----------------------------- |
| `analyze <file>`          | Complete text analysis        |
| `frequency <file>`        | Analyze word frequency        |
| `readability <file>`      | Generate a readability report |
| `duplicates <file>`       | Find repeated words           |
| `keywords <file>`         | Extract keywords              |
| `compare <file1> <file2>` | Compare two text files        |

## Examples

```
text-analyzer analyze ./article.txt
text-analyzer frequency ./article.txt
text-analyzer readability ./article.txt
text-analyzer duplicates ./article.txt
text-analyzer keywords ./article.txt
text-analyzer compare ./article1.txt ./article2.txt
```

## Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request.

## License

MIT License. See [LICENSE](LICENSE) for details.
