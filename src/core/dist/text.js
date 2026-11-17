"use strict";
exports.__esModule = true;
exports.getAverage = exports.getParagraphCount = exports.getSentenceCount = exports.getCharacterCountWithoutSpaces = exports.getCharacterCount = exports.getWordsCount = exports.getWords = void 0;
function getWords(text) {
    var extracted = text.trim().split(/\s+/).filter(Boolean);
    return extracted;
}
exports.getWords = getWords;
;
function getWordsCount(words) {
    return words.length;
}
exports.getWordsCount = getWordsCount;
function getCharacterCount(text) {
    var characters = text.length;
    return characters;
}
exports.getCharacterCount = getCharacterCount;
function getCharacterCountWithoutSpaces(text) {
    var textWithoutSpaces = text.replace(/\s+/, "");
    var characters = textWithoutSpaces.length;
    return characters;
}
exports.getCharacterCountWithoutSpaces = getCharacterCountWithoutSpaces;
function getSentenceCount(text) {
    var sentences = text.trim().split(".").filter(Boolean);
    var sentenceCount = sentences.length;
    return sentenceCount;
}
exports.getSentenceCount = getSentenceCount;
function getParagraphCount(text) {
    var paragraphs = text.trim().split(/\n\s*\n/).filter(Boolean);
    var paragraphsCount = paragraphs.length;
    return paragraphsCount;
}
exports.getParagraphCount = getParagraphCount;
function getAverage(total, count) {
    if (count === 0)
        return 0;
    var avg = Number((total / count).toFixed(2));
    return avg;
}
exports.getAverage = getAverage;
