import { describe, expect, it } from "vitest"
import { getAverage, getCharacterCount, getCharacterCountWithoutSpaces, getParagraphCount, getSentenceCount, getWords, getWordsCount } from '../../core/text';

describe("getWords", () => {
    it.each([
        ["Hello world", ["Hello", "world"]],
        ["    Hello world   ", ["Hello", "world"]],
        ["Hello    world", ["Hello", "world"]],
    ])("should extract words from %s", (input, expected) => {
        expect(getWords(input)).toEqual(expected);
    });
});

describe("getWordsCount", () => {
    it.each([
        [[], 0],
        [["Hello"], 1],
        [["Hello", "world"], 2],
        [["Hello", "world", "how", "are", "you"], 5],
        [["JavaScript", "TypeScript", "Node.js", "Vitest"], 4],
        [["a", "b", "c", "d", "e", "f"], 6],
    ])("should count words correctly", (words, expected) => {
        expect(getWordsCount(words)).toBe(expected);
    });
});

describe("getCharacterCount", () => {
    it.each([
        ["Hello", 5],
        ["Hello world", 11],
        ["", 0],
        ["JavaScript!", 11],
        ["   ", 3],
        ["Hello\nworld", 11],
        ["TypeScript 123", 14],
    ])("should count characters in %s", (input, expected) => {
        expect(getCharacterCount(input)).toBe(expected);
    });
});

describe("getCharacterCountWithoutSpaces", () => {
    it.each([
        ["Hello world", 10],
        ["Hello    world", 10],
        ["Hello", 5],
        ["", 0],
        ["   ", 0],
        ["Hello\nworld", 10],
        ["JavaScript is awesome", 19],
        ["  Hello world  ", 10],
    ])("should count characters without spaces in %s", (input, expected) => {
        expect(getCharacterCountWithoutSpaces(input)).toBe(expected);
    });
});

describe("getSentenceCount", () => {
    it.each([
        ["Hello world.", 1],
        ["Hello. How are you?", 2],
        ["Hello. How are you. I'm fine.", 3],
        ["", 0],
        ["   ", 0],
        ["Hello", 1],
        ["Hello... World.", 2],
        ["First sentence. Second sentence.", 2],
    ])("should count sentences in %s", (input, expected) => {
        expect(getSentenceCount(input)).toBe(expected);
    });
});


describe("getParagraphCount", () => {
    it.each([
        ["Hello world.", 1],
        ["First paragraph.\n\nSecond paragraph.", 2],
        ["First.\n\nSecond.\n\nThird.", 3],
        ["", 0],
        ["   ", 0],
        ["Hello\nworld", 1],
        ["Hello\n\n\nWorld", 2],
        ["  Hello world  ", 1],
    ])("should count paragraphs correctly", (input, expected) => {
        expect(getParagraphCount(input)).toBe(expected);
    });
});

describe("getAverage", () => {
    it.each([
        [10, 2, 5],
        [100, 4, 25],
        [0, 5, 0],
        [7, 2, 3.5],
        [10, 3, 3.33],
        [1, 3, 0.33],
        [100, 0, 0],
        [0, 0, 0],
        [5.5, 2, 2.75],
    ])("should calculate the average of %s / %s", (total, count, expected) => {
        expect(getAverage(total, count)).toBe(expected);
    });
});