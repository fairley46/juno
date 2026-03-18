# Module 6: What MCP Is and Why It Matters

## Why This Matters

Sooner or later, learners ask, "How does OpenCode actually reach the tools and data I need?" MCP is one of the core answers to that question.

## The Simple Picture

MCP is a structured connector layer. It gives OpenCode a standard way to work with approved tools and information sources.

## Visual

```text
You
 |
 v
OpenCode host
 |
 v
MCP connection
 |
 v
Approved tool or data source
```

## A Practical Example

Instead of hard-coding every integration into the AI experience, an MCP server can expose a defined set of capabilities, such as:

- read approved documentation
- retrieve internal reference data
- run a narrow helper tool

That makes the connection more understandable and governable.

## Why It Helps

For the learner, MCP means they do not need to memorize technical plumbing. They need to know:

- what the MCP is for
- what it can access
- whether it is read-only or can make changes

## Safety Check

An MCP server is not automatically trustworthy just because it exists. In enterprise use, only approved MCPs should be presented as part of the supported path.

## What To Remember

The AI is the thinker. MCP is one way it reaches approved capabilities.
