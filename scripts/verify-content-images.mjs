#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  collectContentImagePaths,
  resolvePublicImage,
} from "./collect-content-image-paths.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

function fileExistsExactCase(absPath) {
  if (!fs.existsSync(absPath)) {
    return { ok: false, reason: "missing" };
  }
  const relFromPublic = path.relative(publicDir, absPath);
  const parts = relFromPublic.split(path.sep);
  let dir = publicDir;
  for (const part of parts) {
    const entries = fs.readdirSync(dir);
    const match = entries.find((e) => e === part);
    if (!match) {
      return { ok: false, reason: `case mismatch (expected exact segment ${part})` };
    }
    dir = path.join(dir, match);
  }
  return { ok: true };
}

const paths = collectContentImagePaths();
const errors = [];

for (const imagePath of paths) {
  const abs = resolvePublicImage(imagePath);
  const check = fileExistsExactCase(abs);
  if (!check.ok) {
    errors.push(`${imagePath}: ${check.reason}`);
  }
}

if (errors.length) {
  console.error("Content image verification failed:\n");
  for (const line of errors) console.error(`  - ${line}`);
  process.exit(1);
}

console.log(`Verified ${paths.length} content image path(s).`);