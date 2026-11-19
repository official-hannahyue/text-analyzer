export interface InspectionResult {
    duplicatedWords: string[];
    mostFrequentWords: string | null;
    longestWord: string | null;
    shortestWord: string | null;
    uniqueWords: string[];
}