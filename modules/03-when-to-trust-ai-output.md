# Module 3: When to Trust AI Output

## Why This Matters

AI can produce confident-sounding answers that are wrong. This is not a bug that will be fixed — it is a property of how these systems work. The skill of knowing when to trust, verify, or push back on AI output is one of the most practically useful things you can learn.

## The Simple Picture

AI output quality varies by task type. Some tasks have low failure rates and low consequences if they fail. Others have high failure rates or high consequences. The right verification effort depends on where your task sits.

## A Framework: Two Questions

Before acting on any AI output, ask:

**1. How checkable is this?**
- High: factual claims you can verify (dates, names, references, calculations)
- Medium: summaries and comparisons you can spot-check against the source
- Low: opinions, predictions, or anything the AI generated entirely from pattern-matching

**2. What's the cost of being wrong?**
- Low stakes: you draft something, a person reviews it
- Medium stakes: you share it with colleagues
- High stakes: it goes to a client, regulator, or decision-maker

High verification effort is appropriate when *checkability is low* or *cost of being wrong is high*. For everything else, a quick spot-check is usually enough.

```text
                    COST OF BEING WRONG
                    Low              High
                 ┌─────────────────┬─────────────────┐
            High │  Quick          │  Spot-check     │
CHECKABILITY     │  scan only      │  key claims     │
                 ├─────────────────┼─────────────────┤
            Low  │  Spot-check     │  Full review    │
                 │  before sharing │  required       │
                 └─────────────────┴─────────────────┘
```

## What Hallucination Actually Looks Like

Hallucination is when an AI generates plausible-sounding content that isn't true. It appears in a few characteristic patterns:

- **Confident specifics that are wrong** — exact dates, names, statistics, citations that look real but aren't
- **Blended facts** — combines two real things into one wrong thing
- **Reasonable-sounding extrapolation** — takes what's true in general and applies it to a specific case where it doesn't hold
- **Missing context** — gives a technically correct answer that's wrong for your specific situation

The tell: it reads fluently and sounds authoritative. Wrong AI output does not look different from right AI output.

## Practical Verification Habits

- **For factual claims:** check at least one specific fact before forwarding. Names, dates, numbers, and citations are the highest-failure-rate elements.
- **For summaries:** read one section of the source and compare it to the summary. If the summary gets that section right, it's probably reliable. If not, read more.
- **For recommendations:** ask the AI to show its reasoning. Weak reasoning is often visible when surfaced. Also ask "what would change this answer?" — a good answer engages with that question.
- **For anything business-critical:** assume review is required. The AI is helping you produce a draft faster, not replacing the review step.

## The Source Attribution Habit

When the stakes are medium or higher, ask for sources:

> "Give me your answer and cite which part of the document each claim comes from."

This forces the AI to ground its answer in the actual material and gives you a fast way to verify the key claims.

## Safety Check

Trust scales with stakes, not with confidence. An AI that sounds certain is not more likely to be right than one that hedges.

## What To Remember

Fluent output is not verified output. Build the habit of one check before you act.
