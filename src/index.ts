import { getCharacterCount, getCharacterCountWithoutSpaces, getSentenceCount, getWords, getWordsCount } from "./core/text.js";

const main = async () => {
    getWords('hello to you user');
    getWordsCount(['hello', 'to', 'you', 'user']);
    getCharacterCount("hello world");
    getCharacterCountWithoutSpaces("hello world");
    getSentenceCount("hello world. hello you.")

}

main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
})