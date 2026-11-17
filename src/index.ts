import { getWords } from "./core/text.js";

const main = async () => {
    getWords('hello to you user')
}

main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
})