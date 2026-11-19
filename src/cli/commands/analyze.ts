import { analyzeText } from "../../core/analyzer.js";
import { readTextFile } from "../../utils/file-reader.js";


export async function analyzeCommand(file: string) {
    console.log(`Analyzing ${ file }...`);
    const text = await readTextFile(file);

    const result = analyzeText(text);
    console.log(result)
}