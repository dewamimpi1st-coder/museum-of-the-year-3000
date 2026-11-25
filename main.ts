import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Robot vacuum, 2026. A flat disc that wandered the house, eating dust, bumping into walls, feared by cats.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
