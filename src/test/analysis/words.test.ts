import { describe, expect, it } from "vitest"
import { getWords } from '../../core/text';

describe("getWords", () => {
    it("should extract words from a text", () => {
        expect(getWords("Hello world"));
        expect(getWords("    Hello world   "));
        expect(getWords("Hello    world"));
    })
})