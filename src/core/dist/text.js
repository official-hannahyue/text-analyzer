"use strict";
exports.__esModule = true;
exports.getSentenceCount = exports.getCharacterCountWithoutSpaces = exports.getCharacterCount = exports.getWordsCount = exports.getWords = void 0;
//extract words from a text
function getWords(text) {
    var extracted = text.trim().split(/\s+/).filter(Boolean);
    console.log(extracted);
    return extracted;
}
exports.getWords = getWords;
;
//counts the total of words
function getWordsCount(words) {
    console.log(words.length);
    return words.length;
}
exports.getWordsCount = getWordsCount;
function getCharacterCount(text) {
    var characters = text.length;
    console.log(characters);
    return characters;
}
exports.getCharacterCount = getCharacterCount;
function getCharacterCountWithoutSpaces(text) {
    var textWithoutSpaces = text.replace(/\s/, "");
    var characters = textWithoutSpaces.length;
    console.log(characters);
    return characters;
}
exports.getCharacterCountWithoutSpaces = getCharacterCountWithoutSpaces;
function getSentenceCount(text) {
    var sentences = text.trim().split(".").filter(Boolean);
    var sentenceCount = sentences.length;
    console.log(sentences, sentenceCount);
    return sentenceCount;
}
exports.getSentenceCount = getSentenceCount;
