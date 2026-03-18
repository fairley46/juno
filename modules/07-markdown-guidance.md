# Module 7: Using Markdown to Shape Behavior

## Why This Matters

One of the easiest ways to make AI more useful is also one of the simplest: write down the context and rules you want it to follow.

## The Simple Picture

Markdown files can hold guidance like goals, audience, review rules, tone, and boundaries. In practice, that means you can make OpenCode more consistent without asking a human to re-explain everything every time.

## Visual

```text
Guidance file
  - goal
  - audience
  - boundaries
  - review rules
        |
        v
More consistent behavior across sessions
```

## A Practical Example

A good guidance file might say:

- explain in plain language first
- cite the source when answering policy questions
- do not expose secrets
- ask for approval before suggesting risky actions

That is much more helpful than a vague instruction like "be smart."

## Why It Matters For Governance

These files are not just convenience notes. They shape behavior repeatedly. That makes them part of your governance surface.

## Safety Check

Bad guidance scales bad behavior. Short, specific, reviewed guidance is safer than long, messy instruction dumps.

## What To Remember

Markdown is not "just documentation" here. It is part of how behavior and context are shaped.
