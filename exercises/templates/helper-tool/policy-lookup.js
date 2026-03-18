#!/usr/bin/env node
// policy-lookup.js — A tiny read-only policy search helper
//
// What it does:
//   Searches a local folder of markdown files for a keyword.
//   Returns matching lines plus the source filename.
//
// What it can't do:
//   - Write, modify, or delete any file
//   - Access the network
//   - Read outside the target folder
//
// Usage:
//   node policy-lookup.js <search-term> [folder]
//   node policy-lookup.js "approved use"
//   node policy-lookup.js "data retention" ./policies

const fs = require("fs");
const path = require("path");

// --- Configuration ---

// The folder to search. Default: ./policies relative to this script.
// Change this to point at your actual policies folder.
const DEFAULT_FOLDER = path.join(__dirname, "policies");

// How many characters of context to show around a match
const CONTEXT_LENGTH = 120;

// --- Main ---

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Usage: node policy-lookup.js <search-term> [folder]");
    console.log('Example: node policy-lookup.js "approved use"');
    process.exit(1);
  }

  const searchTerm = args[0].toLowerCase();
  const targetFolder = args[1] ? path.resolve(args[1]) : DEFAULT_FOLDER;

  // Safety check: confirm the folder exists
  if (!fs.existsSync(targetFolder)) {
    console.log(`Folder not found: ${targetFolder}`);
    console.log("Create a 'policies' folder next to this script and add some .md or .txt files.");
    process.exit(1);
  }

  // Read all .md and .txt files in the folder (no subdirectories)
  const files = fs.readdirSync(targetFolder).filter((f) => {
    return f.endsWith(".md") || f.endsWith(".txt");
  });

  if (files.length === 0) {
    console.log(`No .md or .txt files found in: ${targetFolder}`);
    process.exit(1);
  }

  const results = [];

  for (const filename of files) {
    const filePath = path.join(targetFolder, filename);
    const content = fs.readFileSync(filePath, "utf8");
    const lines = content.split("\n");

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].toLowerCase().includes(searchTerm)) {
        results.push({
          file: filename,
          lineNumber: i + 1,
          line: lines[i].trim(),
        });
      }
    }
  }

  // Output results
  if (results.length === 0) {
    console.log(`No results for "${searchTerm}" in ${files.length} file(s).`);
    return;
  }

  console.log(`\nFound ${results.length} match(es) for "${searchTerm}":\n`);

  for (const result of results) {
    console.log(`[${result.file} — line ${result.lineNumber}]`);
    const preview = result.line.length > CONTEXT_LENGTH
      ? result.line.slice(0, CONTEXT_LENGTH) + "..."
      : result.line;
    console.log(`  ${preview}`);
    console.log();
  }
}

main();
