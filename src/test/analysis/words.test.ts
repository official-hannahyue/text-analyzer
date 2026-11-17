import { describe, expect, it } from "vitest"
import { getWords, getWordsCount } from '../../core/text';

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