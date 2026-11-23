// Entry program for make.fun's post-x-promote-make-your-own-bounty-01.
// The entry itself is a public post on X (named in POST.json). This program
// copies POST.json into the output directory, where the house reads the
// post's address and writes the post's engagement counts beside it.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const destination = join(outputDir, "POST.json");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
