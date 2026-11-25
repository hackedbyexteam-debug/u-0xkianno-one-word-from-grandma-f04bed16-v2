// u-0xkianno-one-word-from-grandma-f04bed16-v2 — "Beepboop".
//
// The word a grandma would actually text about AI: not the name of a
// movie robot, but the sound she thinks robots make. She types the
// noise itself — warm, a little baffled, and funny with no caption
// needed. Gate: 1-30 characters; "Beepboop" is 8.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Beepboop";

// Guard: the bounty gate allows 1-30 characters.
if ([...ENTRY].length < 1 || [...ENTRY].length > 30) {
  throw new Error(`entry is ${[...ENTRY].length} chars, outside the 1-30 gate`);
}

// The grader sets MAKEFUN_OUTPUT_DIR; locally /output is the default.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY, "utf8");

console.log(`wrote entry.txt: ${ENTRY}`);
