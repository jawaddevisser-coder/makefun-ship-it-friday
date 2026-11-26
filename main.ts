// Ship It Friday — u-mgwals-ship-it-friday-30bd407a
// Writes one Ship-it-Friday line (1-159 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = {
  limit: 159,
  text: "We shipped it on Friday at 4:59 p.m. The rollback plan is a prayer, a Post-it, and one engineer who hasn't blinked since.",
};

const line = ENTRY.text;
const problems: string[] = [];
if (line.length < 1) problems.push("empty");
if (line.length > ENTRY.limit) problems.push(`too long: ${line.length}`);
if (line.trim() !== line) problems.push("stray surrounding space");
if (line.split("\n").length !== 1) problems.push("not one line");
if (problems.length > 0) throw new Error(problems.join("; "));
if (!/friday/i.test(line)) throw new Error("line must be about Friday");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
