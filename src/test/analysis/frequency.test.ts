
import { describe, it, expect } from "vitest";
import {
    getUniqueWords,
    getDuplicatedWords,
    getWordFrequency,
    getFrequency
} from "./frequency.js";

describe("getUniqueWords", () => {
    it("should return unique words", () => {
        expect(getUniqueWords("hello world hello")).toEqual([
            "hello",
            "world"
        ]);
    });

    it("should return an empty array for empty text", () => {
        expect(getUniqueWords("")).toEqual([]);
    });

    it("should preserve the original word order", () => {
        expect(getUniqueWords("apple banana apple orange")).toEqual([
            "apple",
            "banana",
            "orange"
        ]);
    });

    it("should return one word when all words are identical", () => {
        expect(getUniqueWords("hello hello hello")).toEqual(["hello"]);
    });
});

describe("getDuplicatedWords", () => {
    it("should return duplicated words", () => {
        expect(getDuplicatedWords("hello world hello world")).toEqual([
            "hello",
            "world"
        ]);
    });

    it("should return an empty array when there are no duplicates", () => {
        expect(getDuplicatedWords("hello world")).toEqual([]);
    });

    it("should return an empty array for empty text", () => {
        expect(getDuplicatedWords("")).toEqual([]);
    });

    it("should return each duplicated word only once", () => {
        expect(getDuplicatedWords("hello hello hello world")).toEqual([
            "hello"
        ]);
    });
});

describe("getWordFrequency", () => {
    it("should calculate word frequencies", () => {
        expect(getWordFrequency("hello world hello")).toEqual({
            hello: 2,
            world: 1
        });
    });

    it("should return an empty object for empty text", () => {
        expect(getWordFrequency("")).toEqual({});
    });

    it("should count words appearing multiple times", () => {
        expect(getWordFrequency("apple apple apple banana")).toEqual({
            apple: 3,
            banana: 1
        });
    });

    it("should count every unique word", () => {
        expect(getWordFrequency("one two three")).toEqual({
            one: 1,
            two: 1,
            three: 1
        });
    });
});

describe("getFrequency", () => {
    it("should return the correct frequency result", () => {
        expect(getFrequency("hello world hello")).toEqual({
            totalWords: 3,
            uniqueWords: ["hello", "world"],
            duplicatedWords: ["hello"],
            frequency: {
                hello: 2,
                world: 1
            }
        });
    });

    it("should handle an empty string", () => {
        expect(getFrequency("")).toEqual({
            totalWords: 0,
            uniqueWords: [],
            duplicatedWords: [],
            frequency: {}
        });
    });

    it("should accept an array of words", () => {
        expect(getFrequency(["hello", "world", "hello"])).toEqual({
            totalWords: 3,
            uniqueWords: ["hello", "world"],
            duplicatedWords: ["hello"],
            frequency: {
                hello: 2,
                world: 1
            }
        });
    });

    it("should handle an empty array", () => {
        expect(getFrequency([])).toEqual({
            totalWords: 0,
            uniqueWords: [],
            duplicatedWords: [],
            frequency: {}
        });
    });

    it("should handle an array with one word", () => {
        expect(getFrequency(["hello"])).toEqual({
            totalWords: 1,
            uniqueWords: ["hello"],
            duplicatedWords: [],
            frequency: {
                hello: 1
            }
        });
    });
});
