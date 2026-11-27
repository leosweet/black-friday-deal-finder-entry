// Black Friday Beacon — the hand-in program (Node 22, standard library only).
// It copies this repository's app/ and screenshots/ into the output
// directory and writes dossier.json with the kit's vendored library, exactly
// as the competition's rules describe. Outside the grader, the output
// directory is MAKEFUN_OUTPUT_DIR instead of /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The dossier is byte for byte what buildDossier writes from app/ and
// screenshots/, so the scorer can rebuild it and compare. Leave
// vendor/makefun-frontend.ts untouched: the gate requires the same copy.

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const repoRoot = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
cpSync(join(repoRoot, 'app'), join(outputDir, 'app'), { recursive: true });

const shotsDir = join(outputDir, 'screenshots');
mkdirSync(shotsDir, { recursive: true });
if (existsSync(join(repoRoot, 'screenshots'))) {
  cpSync(join(repoRoot, 'screenshots'), shotsDir, { recursive: true });
}

// The gate's own caps, as the starter's main.ts states them: the dossier
// text is capped at 160 KiB, at most 4 screenshots of at most 256 KiB each,
// app/ at most 993 files and directories and 16 MiB in all.
writeFileSync(
  join(outputDir, 'dossier.json'),
  buildDossier(outputDir, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 16777216,
  }),
);
