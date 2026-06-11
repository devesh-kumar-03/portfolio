const fs = require("fs");
const path = require("path");

const OUTPUT_FILE = "project-export.txt";

const ALLOWED_EXTENSIONS = new Set([
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".css",
    ".scss",
    ".json"
]);

const IGNORE_DIRS = new Set([
    "node_modules",
    ".next",
    ".git",
    "dist",
    "build",
    "coverage",
    ".vercel",
    "out"
]);

const IGNORE_FILES = new Set([
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",
    OUTPUT_FILE
]);

function walk(dir, files = []) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (IGNORE_DIRS.has(item)) continue;
            walk(fullPath, files);
            continue;
        }

        if (IGNORE_FILES.has(item)) continue;

        const ext = path.extname(item);

        if (!ALLOWED_EXTENSIONS.has(ext)) continue;

        files.push(fullPath);
    }

    return files;
}

const files = walk(process.cwd());

let output = "";

for (const file of files) {
    const relative = path.relative(process.cwd(), file);

    output += `
====================================================================================================
FILE: ${relative}
====================================================================================================

`;

    output += fs.readFileSync(file, "utf8");
    output += "\n\n";
}

fs.writeFileSync(OUTPUT_FILE, output);

console.log(`✅ Exported ${files.length} files`);
console.log(`📄 Created: ${OUTPUT_FILE}`);