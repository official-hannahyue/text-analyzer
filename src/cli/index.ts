#!/usr/bin/env node
import { Command } from "commander"
import { analyzeCommand } from "./commands/analyze.js";

const program = new Command();

program
    .name("text-analyzer")
    .description("A CLI tool for analyzing text")
    .version("1.0.0");

program
    .command("analyze")
    .description("Analyze a text file")
    .argument("<file>", "Path to the text file")
    .action(analyzeCommand);

program.parse()