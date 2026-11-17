
//extract words from a text
export function getWords(text: string): string[] {
    const extracted = text.trim().split(/\s+/).filter(Boolean);
    console.log(extracted)
    return extracted;
};

//counts the total of words
export function getWordsCount(words: string[]): number {
    console.log(words.length)
    return words.length;
}

export function getCharacterCount(text: string): number {
    const characters = text.length;
    console.log(characters);
    return characters;
}

export function getCharacterCountWithoutSpaces(text: string): number {
    const textWithoutSpaces = text.replace(/\s/, "");
    const characters = textWithoutSpaces.length
    console.log(characters);
    return characters;
}

export function getSentenceCount(text: string) {
    const sentences = text.trim().split(".").filter(Boolean);
    const sentenceCount = sentences.length;
    console.log(sentences, sentenceCount);
    return sentenceCount;
}