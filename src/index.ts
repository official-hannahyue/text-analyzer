import { getWords } from "./core/statistics.js";

const main = async () => {
    getWords('hello to you ')
}

main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
})