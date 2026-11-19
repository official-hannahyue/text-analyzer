import type { FrequencyResult } from "../types/frequency.js";
import { getWords, getWordsCount } from "./text.js";

export function getUniqueWords(text: string): string[] {
    const words = getWords(text);

    return [...new Set(words)];
};

export function getDuplicatedWords(text: string): string[] {
    const words = getWords(text);
    const frequency = new Map<string, number>();

    for (const word of words) {
        frequency.set(word, (frequency.get(word) ?? 0) + 1)
    };
    return [...frequency].filter(([, count]) => count > 1).map(([word]) => word)
}

export function getWordFrequency(text: string): Record<string, number> {
    const words = getWords(text);
    const frequency: Record<string, number> = {};

    for (const word of words) {
        frequency[word] = (frequency[word] ?? 0) + 1;
    };
    return frequency;
}
export function getFrequency(input: string | string[]): FrequencyResult {
    const text = Array.isArray(input) ? input.join(" ") : input;
    const words = getWords(text);

    return {
        totalWords: words.length,
        uniqueWords: getUniqueWords(text),
        duplicatedWords: getDuplicatedWords(text),
        frequency: getWordFrequency(text)
    };
}