# Module 10: Tokens and Practical Limits

## Why This Matters

Tokens sound technical, but the practical idea is simple: the system has a text budget. Understanding that budget helps learners work more clearly and efficiently.

## The Simple Picture

Every prompt, file snippet, tool result, and answer takes up room. The more room you use, the more the system has to process.

## Visual

```text
Small useful context  -> easier focus
Huge mixed context    -> more noise, more cost, slower answers
```

## A Practical Example

If you paste:

- a short task description
- one relevant file
- one targeted question

the system usually performs better than if you paste:

- five long documents
- raw logs
- vague instructions

## Why It Matters

Too much context can lead to:

- slower responses
- higher cost
- more noise
- weaker focus

## Safety Check

Large outputs can also increase risk because they pull in more information than the task really needs.

## What To Remember

Think focused, not maximal. Give the system the smallest useful working set.
