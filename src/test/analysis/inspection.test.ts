import { describe, expect, it } from "vitest";
import { getInspection, getLongestWord, getMostFrequentWord, getShortestWord } from '../../core/inspection';


describe("getInspection", () => {
    it("should return the correct inspection result", () => {
        const result = getInspection(
            "hello world hello programming"
        );

        expect(result).toEqual({
            duplicatedWords: ["hello"],
            mostFrequentWords: "hello",
            longestWord: "programming",
            shortestWord: "hello",
            uniqueWords: ["hello", "world", "programming"]
        });
    });

    it("should handle an empty string", () => {
        const result = getInspection("");

        expect(result).toEqual({
            duplicatedWords: [],
            mostFrequentWords: null,
            longestWord: null,
            shortestWord: null,
            uniqueWords: []
        });
    });
});

describe("getLongestWord", () => {
    it("should return the longest word", () => {
        expect(getLongestWord("hi programming world")).toBe("programming");
    });

    it("should return null for an empty string", () => {
        expect(getLongestWord("")).toBeNull();
    });

    it("should return the first word when multiple words have the same length", () => {
        expect(getLongestWord("hello world")).toBe("hello");
    });
});

describe("getShortestWord", () => {
    it("should return the shortest word", () => {
        expect(getShortestWord("hello to programming")).toBe("to");
    });

    it("should return null for an empty string", () => {
        expect(getShortestWord("")).toBeNull();
    });

    it("should return the first word when multiple words have the same length", () => {
        expect(getShortestWord("cat dog bird")).toBe("cat");
    });
});

describe("getMostFrequentWord", () => {
    it("should return the most frequent word", () => {
        expect(getMostFrequentWord("hello world hello")).toBe("hello");
    });

    it("should return null for an empty string", () => {
        expect(getMostFrequentWord("")).toBeNull();
    });

    it("should return the first word when frequencies are equal", () => {
        expect(getMostFrequentWord("hello world")).toBe("hello");
    });
});