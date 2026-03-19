# Exercise: What Can Go in the Prompt?

**Module:** 06 — Local vs Web Execution

## Learner Objective

Correctly classify information as safe or not safe to include in an AI prompt, and explain the reasoning using data residency and privacy principles.

## What You'll Do

Review a list of information types and classify each one. Then handle an ambiguous case.

## The Task

For each item below, say: **Safe to include** or **Do not include** in an AI prompt (using your org's enterprise AI environment), and give one sentence explaining why.

1. A publicly available industry report you downloaded from a vendor website
2. A client's name and account number from a recent invoice
3. The text of a company-wide internal memo about a new expense policy
4. Meeting notes that include a client's strategic plans discussed in confidence
5. A draft proposal you're writing for internal review — no client data included
6. An anonymized version of a client scenario where you've replaced all names with placeholders

Now answer this:

**Which of the six was hardest to classify? What made it ambiguous, and what would you do before including it in a prompt?**

## Completion Criteria

- [ ] Each item is classified and includes a one-sentence rationale
- [ ] Items 2 and 4 are correctly classified as "Do not include"
- [ ] The learner has engaged with the ambiguous case and described a specific action (not just "I'd check")
- [ ] The learner can explain in one sentence the difference between "internal" and "client" data

## Common Confusion

**"Item 6 is fine — the names are replaced."** Anonymization is harder than it looks. A description of "a financial services client in the midwest managing $400M in assets" may still be identifiable. When in doubt about client data — even anonymized — check with your privacy team before including it.

**"Item 3 is internal so it's fine."** Internal memos are usually fine in enterprise AI environments. The question is whether "internal" at your org means something different — some orgs classify certain internal documents as Confidential, which may have different rules. The exercise is developing the habit of asking, not assuming.

## Facilitator Note

Item 6 is the deliberate ambiguity. The point is not that anonymized data is always off-limits — it's that learners should pause and check rather than assume anonymization is sufficient. If the learner says "it's fine because the names are gone," ask: "What other details in that description might identify the client?"
