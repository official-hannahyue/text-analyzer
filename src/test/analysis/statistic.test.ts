import { describe, it, expect } from "vitest";
import { getStatistic } from '../../core/statistic';

describe("getStatistic", () => {
    it("should return correct statistics for a simple text", () => {
        const result = getStatistic("Hello world");

        expect(result).toEqual({
            wordCount: 2,
            characterCount: 11,
            characterCountWithoutSpaces: 10,
            sentencesCount: 1,
            paragraphCount: 1,
            averageWordLength: 5,
            averageSentenceLength: 2
        });
    });
    it("should calculate statistics for multiple sentences", () => {
        const result = getStatistic("Hello world. How are you?");
        expect(result.sentencesCount).toBe(2);
    });

    it("should calculate statistics for multiple paragraphs", () => {
        const result = getStatistic("Hello world.\n\nHow are you?");
        expect(result.paragraphCount).toBe(2);
    });
    it("should handle an empty string", () => {
        const result = getStatistic("");

        expect(result.wordCount).toBe(0);
        expect(result.characterCount).toBe(0);
        expect(result.averageWordLength).toBe(0);
        expect(result.averageSentenceLength).toBe(0);
    });

    it("should handle text with only spaces", () => {
        const result = getStatistic("     ");

        expect(result.wordCount).toBe(0);
    });

    it("should handle a single word", () => {
        const result = getStatistic("Programming");

        expect(result.wordCount).toBe(1);
        expect(result.averageWordLength).toBe(11);
    });
});
