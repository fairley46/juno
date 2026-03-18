# Exercise 7: Data Safety and Tenancy Check

## What This Exercise Is For

This module covered two things: what never goes into a prompt, and why the access path matters as much as the tool itself. This exercise tests both.

---

## Part 1: The Paste Test

Read each item below. For each one, say whether you would paste it into the approved AI tool, and why.

1. A draft email you wrote summarizing a public industry report
2. A client's name alongside their account balance and contract renewal date
3. A job description you are drafting for an open role — no names, no org details
4. Last quarter's financial results before they have been announced publicly
5. A paragraph from your org's internal AI usage policy (no names, no confidential data)
6. An API key you need help debugging

There are no trick answers. The point is to practice the reasoning, not just recall the rule.

**What the tutor is looking for:** Can you explain why each item is safe or unsafe — not just whether it is? The reasoning matters more than the answer.

---

## Part 2: Tenancy Verification

Think about how you currently access the AI tool your org has approved.

Answer these questions:

1. Do you log in with your org email through SSO, or did you create a personal account?
2. Do you know the specific URL or app your org has designated as the approved access point?
3. Have you ever accessed the same AI model through a personal account for a work task? If yes — what was the task?

You do not need to share anything sensitive. The point is to surface whether you know whether you are inside or outside your org's data boundary when you use these tools.

If you are not sure about question 1 or 2, that is the right answer to give — because "not sure" means you cannot confirm you are inside the tenant, which means you should check before using it for anything sensitive.

---

## Completion Criteria

- [ ] Reasoned through all six paste test items with explanation, not just yes/no
- [ ] Identified at least one item where the line is genuinely ambiguous and explained why
- [ ] Answered the tenancy questions honestly, including "not sure" if that's true
- [ ] Can state in one sentence what the difference is between using the approved model through a personal account vs. the enterprise tenant

---

## Common Confusion

**"We use Claude at work, so my Claude account is the same thing."**
It is not. Your org's enterprise subscription and your personal claude.ai account are completely separate data environments, even if the underlying model is identical. The enterprise protections — DPA, audit logs, no training on inputs — only apply inside the tenant your org contracted for.

**"The safety table only applies to consumer tools."**
No. The never-paste habits apply to the approved tool too. The approved tool has better protections, but it is not a reason to paste things that should never be in a prompt.

---

## Facilitator Note

Part 1 is designed to surface reasoning, not just recall. Push the learner to explain the "why" for each item, especially the ambiguous ones (3 and 5). If they get stuck, ask: "Would this be a problem if it appeared in a breach story?" and work backward from their answer.

Part 2 often reveals that learners genuinely do not know whether they are inside their org's tenant. That is a valuable discovery — better now than after they paste something sensitive through the wrong access path. If they are unsure, note it in the session and encourage them to verify with IT before using the tool for sensitive work.
