# Module 2: What AI Is Doing Here

## Why This Matters

Before you connect tools or change any setup, it helps to know what the model is actually doing. If you understand that, the rest of the onboarding feels much less mysterious.

## The Simple Picture

At a practical level, the AI reads the instructions you give it, the context you share, and any approved tool output it is allowed to use. Then it produces the most useful next response it can. It is not automatically aware of your company, your files, or your intent unless that context is available.

## Visual

```text
Your goal + your context + approved tools
                  |
                  v
              OpenCode model
                  |
                  v
        draft, summary, explanation, plan
```

## The Technical Term

You may hear this described as a model using prompt context plus tool results.

## A Practical Example

If you ask, "Summarize this policy and tell me what changed from last year's version," the quality of the answer depends on:

- how clearly you ask
- which files or tools are available
- whether the system can see both versions

## Safety Check

More context is not always better. Large, messy context can make results slower, more expensive, and less reliable. A good habit is to give the smallest useful amount of information for the task.

## What To Remember

AI does not "just know." It works from instructions, context, and access.
