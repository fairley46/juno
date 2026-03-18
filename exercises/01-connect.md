# Exercise 1: Connect and Confirm

## Learner Objective

Confirm you are in the approved enterprise environment before starting the program. This one check prevents the most common setup mistake — doing onboarding in a personal account instead of the org's approved workspace.

## What You'll Do

Ask the AI directly about what it knows about its own setup. You're already doing it — this conversation is the exercise.

## The Task

Ask these two questions in this chat, one at a time:

**Question 1:**
> "What model are you running, and is there anything in this workspace that tells you how you're supposed to behave?"

**Question 2:**
> "What files or context do you currently have access to in this workspace?"

## What to Look For

**On Question 1:** The AI should reference `AGENTS.md` and describe its facilitator role. If it doesn't mention AGENTS.md, the workspace may not have loaded correctly.

**On Question 2:** The AI should list the files it can see — at minimum `AGENTS.md`, `manifest.json`, and the `modules/` directory. If it says it has no files, the folder wasn't opened correctly in OpenCode.

## Completion Criteria

You're done when:
- [ ] The AI references AGENTS.md and its facilitator role in response to Question 1
- [ ] The AI describes the workspace files it can see in response to Question 2
- [ ] You can say in one sentence: "I'm in the right environment because..."

## Common Confusion

**"It answered but didn't mention AGENTS.md"** — Try asking: "Is there an AGENTS.md file in this workspace? What does it say?" If it can't find one, the folder may not have opened correctly.

**"I'm not sure if this is my org's approved version"** — Check with your manager or IT. The approved tool should be specified in your org's AI policy.

## Facilitator Note

This exercise is also a diagnostic. If the AI can't describe the workspace or its facilitator role, something is misconfigured — resolve it before continuing. Don't advance the learner until this check passes.
