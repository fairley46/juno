# Exercise: Trim the Prompt

**Module:** 13 — Tokens and Practical Limits

## Learner Objective

Identify unnecessary context in an over-stuffed prompt and cut it to improve performance and reduce cost.

## What You'll Do

Read a bloated prompt and trim it down to what actually matters.

## The Task

Here is a prompt someone wrote to summarize a short policy document:

---

> "Hi! I'm [Name], a project manager at Acme Corp. I've been with the company for 6 years. I work on the operations team and we handle internal logistics and vendor relationships. I'm preparing for a meeting next Thursday with our legal team about our vendor contract renewal process. I usually do this kind of work in Google Docs but today I'm trying OpenCode for the first time. I've heard AI is supposed to be helpful for this kind of thing but I'm not totally sure yet. Anyway, here's what I need: I have a document called Vendor Contract Policy v2.1 that our procurement team updated last quarter. It's about 12 pages. I only really care about the sections on renewal timelines and auto-renewal clauses. Can you summarize those two sections in plain language for me? Keep it simple — I don't have a legal background. Also, my manager is named Sarah and she's going to want to review whatever I produce, so make sure it's something she can read quickly. I think that's everything. Let me know if you need anything else!"

---

**Question 1:** What information in this prompt is necessary for the AI to do the task?

**Question 2:** What information is unnecessary — not wrong, just takes up space and doesn't help the output?

**Question 3:** Write a trimmed version of this prompt. Aim for under 60 words.

## Completion Criteria

- [ ] Question 1 correctly identifies the essential elements (document reference, what to summarize, format, audience)
- [ ] Question 2 identifies at least 3 pieces of unnecessary context
- [ ] The trimmed prompt in Question 3 contains all essential elements and is under 60 words
- [ ] The learner can explain in one sentence why a shorter prompt often produces a better response

## Common Confusion

**"More context is always better."** Not always. Unnecessary context adds noise, increases token cost, and can cause the AI to try to address things you didn't need addressed. A focused prompt typically produces a more focused answer.

**"But the extra context is friendly and polite."** The AI doesn't have feelings to consider — politeness in the prompt doesn't improve the output. Save the social warmth for human communication.

## Facilitator Note

The essential elements of this prompt are: (1) document name/reference, (2) which sections to summarize, (3) plain language format, (4) brief enough for a non-expert to read. Everything else is noise. If the learner's trimmed version is still over 80 words, ask them to cut one more thing and explain why they chose it.
