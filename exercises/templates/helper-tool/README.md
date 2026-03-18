# Policy Lookup — Helper Tool Example

This is the example helper tool from Module 9.

## What it does

Searches a local folder of `.md` and `.txt` files for a keyword. Returns matching lines and source filenames. Nothing else.

## How to try it

1. Create a `policies` folder next to this file.
2. Add a few `.md` or `.txt` files with some text (copy a paragraph from an internal policy doc, or make something up for practice).
3. Run the search:

```bash
node policy-lookup.js "approved use"
node policy-lookup.js "data retention" ./policies
```

## Why each design choice matters

| Choice | Why |
|--------|-----|
| Read-only (`readFileSync` only, no writes) | Limits blast radius — the tool literally cannot change anything |
| One folder, no subdirectories | Keeps the boundary visible and easy to audit |
| No network calls | Nothing leaves the machine |
| Shows source filename + line number | Makes it easy to verify and cite the source |
| No ML, no inference | Just text search — the human decides what the result means |

## How to customize it

- **Change the target folder:** Edit `DEFAULT_FOLDER` at the top of the script, or pass a folder path as the second argument.
- **Change file types:** Update the `.filter()` line to include `.docx`, `.json`, etc. (you'll need a parser for non-text formats).
- **Add subdirectory search:** Change `readdirSync` to a recursive walk — but think about whether you want that scope expansion before doing it.

## What this teaches

A useful tool does not need to be large. This one is ~70 lines, has no dependencies, cannot break anything, and solves a real problem: "I want to find something in our policies without reading every document manually."

The goal of Module 9 is to show that this is a legitimate, valuable tool — not a toy waiting to become something bigger.
