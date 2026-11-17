
//extract words from a text
export function getWords(text: string): string[] {
    const extracted = text.trim().split(/\s+/).filter(Boolean);
    console.log(extracted)
    return extracted;
}
//counts the total of words
export function getWordsCount(words: string[]): number {
    console.log(words.length)
    return words.length;
}