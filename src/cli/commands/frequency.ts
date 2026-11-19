import { getFrequency } from "../../core/frequency.js";
import { readTextFile } from "../../utils/file-reader.js";

export async function frequencyCommand(file: string) {
    console.log(`Analyzing frequency in ${ file }...`);

    const text = await readTextFile(file);
    const result = getFrequency(text);

    console.log(result)
}