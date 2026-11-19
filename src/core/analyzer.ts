import {
    getStatistic,
    getFrequency,
    getInspection
} from "./index.js"

export function analyzeText(text: string) {
    return {
        statistics: getStatistic(text),
        frequency: getFrequency(text),
        inspection: getInspection(text)
    }
}