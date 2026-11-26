import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const IMAGE_PATH_RE = /^\/images\/[^\s"'`]+\.(?:png|jpe?g|webp|gif)$/i;

function walkJson(value, found) {
  if (typeof value === "string" && IMAGE_PATH_RE.test(value)) {
    found.add(value);
  } else if (Array.isArray(value)) {
    for (const item of value) walkJson(item, found);
  } else if (value && typeof value === "object") {
    for (const v of Object.values(value)) walkJson(v, found);
  }
}

/** Paths referenced in components but not in content JSON */
const EXTRA_CONTENT_IMAGE_PATHS = ["/images/yana/microscope.jpg"];

export function collectContentImagePaths() {
  const found = new Set(EXTRA_CONTENT_IMAGE_PATHS);
  const contentDir = path.join(root, "content", "data");
  for (const file of fs.readdirSync(contentDir, { withFileTypes: true })) {
    if (!file.isDirectory()) continue;
    const langDir = path.join(contentDir, file.name);
    for (const jsonFile of fs.readdirSync(langDir)) {
      if (!jsonFile.endsWith(".json")) continue;
      const data = JSON.parse(
        fs.readFileSync(path.join(langDir, jsonFile), "utf8")
      );
      walkJson(data, found);
    }
  }
  return [...found].sort();
}

export function resolvePublicImage(imagePath) {
  const rel = imagePath.replace(/^\//, "");
  return path.join(root, "public", rel);
}