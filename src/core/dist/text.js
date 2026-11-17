"use strict";
exports.__esModule = true;
exports.getWordsCount = exports.getWords = void 0;
//extract words from a text
function getWords(text) {
    var extracted = text.trim().split(/\s+/).filter(Boolean);
    console.log(extracted);
    return extracted;
}
exports.getWords = getWords;
//counts the total of words
function getWordsCount(words) {
    console.log(words.length);
    return words.length;
}
exports.getWordsCount = getWordsCount;
