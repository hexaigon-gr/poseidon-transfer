// Compress oversized hero / about / tour images.
// Usage: node scripts/compress-images.mjs
//
// Targets (input → output, in-place):
//   public/images/hero-greece.jpg     2.9 MB  → ~300 KB AVIF (writes hero-greece.avif AND keeps hero-greece.jpg compressed)
//   public/images/about-greece.jpg    2.8 MB  → ~250 KB AVIF
//   public/images/tours/*.jpg         varies  → ≤200 KB AVIF
//
// Originals are backed up to public/images/_originals/ before any overwrite.
//
// Requires: sharp (already transitively available via tailwindcss).

import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd(), "public/images");
const BACKUP = path.join(ROOT, "_originals");

const targets = [
  { input: path.join(ROOT, "hero-greece.jpg"), maxWidth: 1920, jpegQ: 78, avifQ: 50 },
  { input: path.join(ROOT, "about-greece.jpg"), maxWidth: 1600, jpegQ: 78, avifQ: 50 },
  { input: path.join(ROOT, "tours/athens_unveiled.jpg"), maxWidth: 1600, jpegQ: 80, avifQ: 55 },
  { input: path.join(ROOT, "tours/delphi_delights.jpg"), maxWidth: 1600, jpegQ: 80, avifQ: 55 },
  { input: path.join(ROOT, "tours/nafplio_nouveau.jpg"), maxWidth: 1600, jpegQ: 80, avifQ: 55 },
  { input: path.join(ROOT, "tours/corinthian_wonders.jpg"), maxWidth: 1600, jpegQ: 80, avifQ: 55 },
  { input: path.join(ROOT, "tours/greek_food_tour.jpg"), maxWidth: 1600, jpegQ: 80, avifQ: 55 },
  { input: path.join(ROOT, "tours/olympian_odyssey.jpg"), maxWidth: 1600, jpegQ: 80, avifQ: 55 },
  { input: path.join(ROOT, "tours/meteora_monasteries.jpg"), maxWidth: 1600, jpegQ: 80, avifQ: 55 },
  { input: path.join(ROOT, "tours/poseidon_haven.jpg"), maxWidth: 1600, jpegQ: 80, avifQ: 55 },
  { input: path.join(ROOT, "tours/athenian_marvels.jpg"), maxWidth: 1600, jpegQ: 80, avifQ: 55 },
  { input: path.join(ROOT, "tours/epic_encounters.jpg"), maxWidth: 1600, jpegQ: 80, avifQ: 55 },
  { input: path.join(ROOT, "tours/athens_unveiled.jpg"), maxWidth: 1600, jpegQ: 80, avifQ: 55 },
];

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function backup(file) {
  const rel = path.relative(ROOT, file);
  const dest = path.join(BACKUP, rel);
  await ensureDir(path.dirname(dest));
  try {
    await fs.access(dest);
    return;
  } catch {
    await fs.copyFile(file, dest);
  }
}

async function processOne({ input, maxWidth, jpegQ, avifQ }) {
  try {
    const before = (await fs.stat(input)).size;
    await backup(input);

    const buf = await fs.readFile(input);
    const meta = await sharp(buf).metadata();
    const targetWidth = Math.min(maxWidth, meta.width || maxWidth);

    const jpegBuf = await sharp(buf)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .jpeg({ quality: jpegQ, mozjpeg: true, progressive: true })
      .toBuffer();
    await fs.writeFile(input, jpegBuf);

    const avifPath = input.replace(/\.jpe?g$/i, ".avif");
    const avifBuf = await sharp(buf)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .avif({ quality: avifQ, effort: 4 })
      .toBuffer();
    await fs.writeFile(avifPath, avifBuf);

    const afterJ = jpegBuf.length;
    const afterA = avifBuf.length;
    console.log(
      `${path.relative(ROOT, input)}  ${(before / 1024).toFixed(0)}KB → JPEG ${(
        afterJ / 1024
      ).toFixed(0)}KB · AVIF ${(afterA / 1024).toFixed(0)}KB`
    );
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`skip (missing): ${path.relative(ROOT, input)}`);
    } else {
      console.error(`error processing ${input}:`, err.message);
    }
  }
}

const seen = new Set();
const unique = targets.filter((t) => {
  if (seen.has(t.input)) return false;
  seen.add(t.input);
  return true;
});

await ensureDir(BACKUP);
for (const t of unique) {
  await processOne(t);
}
console.log(`\nDone. Originals backed up to ${path.relative(process.cwd(), BACKUP)}/`);
