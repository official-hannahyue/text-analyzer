export function getWords(text: string): string[] {
    const extracted = text.trim().split(/\s+/).map(word => word.replace(/[.,!?;:]/g, "")).filter(Boolean);
    return extracted;
};

export function getWordsCount(words: string | string[]): number {
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
    const sentences = text
        .trim()
        .split(/[.!?]+/)
        .filter(sentence => sentence.trim().length > 0);

    return sentences.length;
}

export function getParagraphCount(text: string): number {
    if (!text.trim()) return 0;

    const paragraphs = text
        .trim()
        .split(/\n\s*\n/)
        .filter(Boolean);

    return paragraphs.length;
}
export function getAverage(total: number, count: number): number {
    if (count === 0) return 0;
    const avg = Number((total / count).toFixed(2));
    return avg;
}