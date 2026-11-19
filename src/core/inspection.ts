import type { InspectionResult } from "../types/inspection.js";
import { getDuplicatedWords, getFrequency, getUniqueWords } from "./frequency.js";
import { getWords } from "./text.js";

export function getLongestWord(text: string): string | null {
    const words = getWords(text);
    if (words.length === 0) return null;

    const longestWord = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    });
    return longestWord;
}

export function getShortestWord(text: string): string | null {
    const words = getWords(text);
    if (words.length === 0) return null;

    const shortestWord = words.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    });
    return shortestWord;
}
export function getMostFrequentWord(text: string): string | null {
    const result = getFrequency(text);
    const entries = Object.entries(result.frequency);

    if (entries.length === 0) return null;

    return entries.reduce((mostFrequent, current) => {
        return current[1] > mostFrequent[1]
            ? current
            : mostFrequent;
    })[0];
}
export function getInspection(text: string): InspectionResult {
    const result = {
        duplicatedWords: getDuplicatedWords(text),
        mostFrequentWords: getMostFrequentWord(text),
        longestWord: getLongestWord(text),
        shortestWord: getShortestWord(text),
        uniqueWords: getUniqueWords(text)
    };
    return result;
}