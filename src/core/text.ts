
//extract words from a text
export function getWords(text: string): string[] {
    const extracted = text.trim().split(/\s+/).filter(Boolean);
    console.log(extracted)
    return extracted;
}