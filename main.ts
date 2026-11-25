// Museum of the Year 3000 — entry program.
// Writes the single-line museum label to /output/entry.txt, then reads it
// back to prove the file holds exactly that line.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Robot vacuum, 2026. A flat disc that wandered the house, eating dust, bumping into walls, feared by cats.";

// The bounty gate: /output/entry.txt must be UTF-8 text of 1 to 200 chars.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${ENTRY.length}`);
}

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the entry line");
}
