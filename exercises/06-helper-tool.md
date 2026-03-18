# Exercise 6: Build a Tiny Helper Tool

## Learner Objective

Understand how a small, read-only tool is built and why each design decision matters for safety and trustworthiness.

## What You'll Explore

The example tool is at `exercises/templates/helper-tool/policy-lookup.js`.

It is a working Node.js script (~70 lines, no external dependencies) that searches a local folder of text files for a keyword and returns matching lines with their source filename.

## The Task

### Part 1: Read and Understand

Open `exercises/templates/helper-tool/policy-lookup.js` and read through it with the facilitator. For each section, answer:

1. **What does this part do?**
2. **What can't it do because of how it's written?**

Focus on these three sections:
- The folder setup (line: `const DEFAULT_FOLDER = ...`)
- The file reading (line: `fs.readFileSync(filePath, "utf8")`)
- The output (the `results.push(...)` section)

### Part 2: Try It

If you have Node.js installed:

1. Create a `policies` folder inside `exercises/templates/helper-tool/`
2. Add one or two `.md` files with a few lines of text (make something up — it's just for practice)
3. Run: `node exercises/templates/helper-tool/policy-lookup.js "your search term"`

If you don't have Node.js, the facilitator can walk through what the output would look like.

### Part 3: Adapt It

Change one thing about the tool to match a real use case you might have. Options:
- Change `DEFAULT_FOLDER` to point at a folder you actually have
- Change the file type filter to look for `.txt` files instead of `.md`
- Add a line to the output that shows the total number of files searched

## Completion Criteria

You're done when you can answer all three of these:

- [ ] **What does this tool do?** (One sentence)
- [ ] **What are two things this tool cannot do?** (Because of how it's written, not policy)
- [ ] **What would you need to change to make it useful for your actual work?**

## Common Confusion

**"This feels too simple to be useful"** — That's the point. Simple means auditable. You can read the whole tool in two minutes and know exactly what it can and can't access. A useful tool doesn't need to be large.

**"I'd want it to also do X"** — Great instinct. Write down what X is. Then ask: does adding X change the access scope? Does it add a write operation? Those questions are the safety design conversation.

## Facilitator Note

Start small. One safe source and one useful question is enough. The goal here is not to ship a tool — it's to internalize the design decisions: narrow scope, read-only, visible boundaries, citable output.
