import { getFrequency } from "./core/frequency.js";
import { getInspection } from "./core/inspection.js";
import { getStatistic } from "./core/statistic.js";

 //for quick test purposes
function main() {
    getStatistic("Hello you!");
    getFrequency("Hello to you. have a very very good day.");
    getInspection("hello to you new world")
}
main();