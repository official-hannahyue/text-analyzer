
export function getWords(text: string): string[] {
    const extracted = text.trim().split(/\s+/).filter(Boolean);
    return extracted;
};

export function getWordsCount(words: string[]): number {
    return words.length;
}

export function getCharacterCount(text: string): number {
    const characters = text.length;
    return characters;
}

export function getCharacterCountWithoutSpaces(text: string): number {
    const textWithoutSpaces = text.replace(/\s+/g, "");
    const characters = textWithoutSpaces.length
    return characters;
}

export function getSentenceCount(text: string): number {
    const sentences = text.trim().split(".").filter(Boolean);
    const sentenceCount = sentences.length;
    return sentenceCount;
}

export function getParagraphCount(text: string): number {
    const paragraphs = text.trim().split(/\n\s*\n/).filter(Boolean);
    const paragraphsCount = paragraphs.length;
    return paragraphsCount;
}

export function getAverage(total: number, count: number): number {
    if (count === 0) return 0;
    const avg = Number((total / count).toFixed(2));
    return avg;
}