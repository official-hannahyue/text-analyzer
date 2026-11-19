
import { describe, it, expect } from "vitest";
import { analyzeText } from "./analyze.js";

describe("analyzeText", () => {
    it("should return the complete analysis result", () => {
        const result = analyzeText("hello world hello");

        expect(result).toEqual({
            statistics: {
                wordCount: 3,
                characterCount: 17,
                characterCountWithoutSpaces: 15,
                sentencesCount: 1,
                paragraphCount: 1,
                averageWordLength: 5,
                averageSentenceLength: 3
            },
            frequency: {
                totalWords: 3,
                uniqueWords: ["hello", "world"],
                duplicatedWords: ["hello"],
                frequency: {
                    hello: 2,
                    world: 1
                }
            },
            inspection: {
                duplicatedWords: ["hello"],
                mostFrequentWords: "hello",
                longestWord: "hello",
                shortestWord: "hello",
                uniqueWords: ["hello", "world"]
            }
        });
    });

    it("should return correct statistics", () => {
        const result = analyzeText("hello world");

        expect(result.statistics).toEqual({
            wordCount: 2,
            characterCount: 11,
            characterCountWithoutSpaces: 10,
            sentencesCount: 1,
            paragraphCount: 1,
            averageWordLength: 5,
            averageSentenceLength: 2
        });
    });

    it("should return correct frequency analysis", () => {
        const result = analyzeText("apple banana apple orange banana apple");

        expect(result.frequency).toEqual({
            totalWords: 6,
            uniqueWords: ["apple", "banana", "orange"],
            duplicatedWords: ["apple", "banana"],
            frequency: {
                apple: 3,
                banana: 2,
                orange: 1
            }
        });
    });

    it("should return correct inspection results", () => {
        const result = analyzeText("hi programming world programming");

        expect(result.inspection).toEqual({
            duplicatedWords: ["programming"],
            mostFrequentWords: "programming",
            longestWord: "programming",
            shortestWord: "hi",
            uniqueWords: ["hi", "programming", "world"]
        });
    });

    it("should handle an empty string", () => {
        const result = analyzeText("");

        expect(result).toEqual({
            statistics: {
                wordCount: 0,
                characterCount: 0,
                characterCountWithoutSpaces: 0,
                sentencesCount: 0,
                paragraphCount: 0,
                averageWordLength: 0,
                averageSentenceLength: 0
            },
            frequency: {
                totalWords: 0,
                uniqueWords: [],
                duplicatedWords: [],
                frequency: {}
            },
            inspection: {
                duplicatedWords: [],
                mostFrequentWords: null,
                longestWord: null,
                shortestWord: null,
                uniqueWords: []
            }
        });
    });

    it("should handle a single word", () => {
        const result = analyzeText("programming");

        expect(result.statistics.wordCount).toBe(1);
        expect(result.frequency.totalWords).toBe(1);
        expect(result.inspection.longestWord).toBe("programming");
        expect(result.inspection.shortestWord).toBe("programming");
        expect(result.inspection.mostFrequentWords).toBe("programming");
    });

    it("should handle multiple paragraphs", () => {
        const result = analyzeText("Hello world.\n\nHow are you?");

        expect(result.statistics.paragraphCount).toBe(2);
        expect(result.statistics.wordCount).toBe(5);
    });

    it("should handle repeated words", () => {
        const result = analyzeText("hello hello hello hello");

        expect(result.frequency.frequency).toEqual({
            hello: 4
        });

        expect(result.inspection.duplicatedWords).toEqual(["hello"]);
        expect(result.inspection.mostFrequentWords).toBe("hello");
    });
});
