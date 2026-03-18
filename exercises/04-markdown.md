# Exercise 4: Add a Guidance File

## Learner Objective

See how a short guidance file changes the focus and tone of AI responses.

## What You'll Create

A file called `CONTEXT.md` in this folder (the onboarding workspace root).

## The Task

Create `CONTEXT.md` with these three required sections:

```markdown
# My Work Context

## Goal
[Write one sentence describing a real task you do at work, or use the example below]
Example: "Help me review internal documents for plain-language clarity."

## Audience
[Who is the output for? What do they already know?]
Example: "Non-technical colleagues who are new to AI."

## Boundaries
[What should the AI NOT do in this context?]
Example: "Do not suggest rewrites unless I ask. Do not share confidential content outside this session."
```

You can add a **Tone** section too if you want ("Direct and warm, no jargon").

## Test It

Once you've created `CONTEXT.md`, try this prompt:

> "Read my CONTEXT.md and summarize what you know about how I want you to work in this session."

Then try asking a work-related question and see if the focus feels tighter than without the file.

## Completion Criteria

You're done when:
- [ ] `CONTEXT.md` exists in this folder with all three sections filled in
- [ ] You've asked OpenCode to read it and it reflected the right goal and audience back
- [ ] You can say in one sentence what the Boundaries section prevents

## Common Confusion

**"It sounds the same as without the file"** — Check that the Boundaries section is specific. "Be careful" doesn't constrain behavior. "Do not suggest actions that modify files" does.

**"How long should it be?"** — Aim for under 20 lines total. Longer guidance files are harder to review and maintain.

## Facilitator Note

Good guidance is short, specific, and practical. Ask the learner: "What is one thing you would NOT want the AI to do in your daily work?" That answer belongs in Boundaries.
