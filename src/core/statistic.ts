import type { StatisticResult } from "../types/statistics.js";

import {
    getAverage,
    getCharacterCount,
    getCharacterCountWithoutSpaces,
    getParagraphCount,
    getSentenceCount,
    getWords,
    getWordsCount
} from "./text.js";

export function getStatistic(text: string): StatisticResult {
    const words = getWords(text);

    const wordCount = getWordsCount(words);
    const characterCount = getCharacterCount(text);
    const sentencesCount = getSentenceCount(text);

    const result = {
        wordCount,
        characterCount: getCharacterCount(text),
        characterCountWithoutSpaces: getCharacterCountWithoutSpaces(text),
        sentencesCount,
        paragraphCount: getParagraphCount(text),
        averageWordLength: getAverage(characterCount, wordCount),
        averageSentenceLength: getAverage(wordCount, sentencesCount)
    };
    return result;
}