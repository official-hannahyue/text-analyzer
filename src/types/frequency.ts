export interface FrequencyResult {
    totalWords: number,
    uniqueWords: string[],
    duplicatedWords: string[],
    frequency: Record<string, number>
}