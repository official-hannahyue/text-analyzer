import { getAverage, getCharacterCount, getCharacterCountWithoutSpaces, getParagraphCount, getSentenceCount, getWords, getWordsCount } from "./core/text.js";

const main = async () => {
    getWords('hello to you user');
    getWordsCount(['hello', 'to', 'you', 'user']);
    getCharacterCount("hello world");
    getCharacterCountWithoutSpaces("hello world");
    getSentenceCount("hello world. hello you.");
    getParagraphCount("Hello\n\nWorld");
    getAverage(13, 3);
}

main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
})