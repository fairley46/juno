# Golden Paths

Golden paths are approved prompt templates your org has pre-built for common tasks. They encode the four-part prompt structure — goal, source, format, review boundary — so learners do not have to figure it out from scratch every time.

Juno will surface these during Module 14 and whenever a learner asks how to approach a task that matches one of these patterns.

**How to use this file:**
- The examples below are pre-filled starting points. Use them as-is or adapt them for your org.
- To add an org-specific path, copy the template format at the bottom and fill it in.
- To remove a path, delete its section.
- Changes take effect the next time a learner opens a session.

---

## Plain-Language Summary

**When to use:** You need to understand a long document quickly — a policy, a report, a contract section — before a meeting or a decision.

**The prompt:**
```
Read [document name or paste content here].
Summarize it in plain language for someone who has not read it.
Focus on: what it requires, what it prohibits, and what it leaves unclear.
Keep it under 200 words.
Do not make recommendations — I will decide what to do with it.
```

**Worked example:**
> Read the attached vendor agreement.
> Summarize it in plain language for someone who has not read it.
> Focus on: what it requires, what it prohibits, and what it leaves unclear.
> Keep it under 200 words.
> Do not make recommendations — I will decide what to do with it.

**What to check:** Compare the summary against the first and last sections of the source document. If those match, the summary is likely reliable.

---

## Side-by-Side Comparison

**When to use:** You have two versions of something — two policy drafts, two proposals, two contracts — and need to understand what changed or how they differ.

**The prompt:**
```
I am going to give you two documents. Compare them and tell me:
1. What is in Document A but not Document B?
2. What is in Document B but not Document A?
3. What changed in meaning, even if the words are similar?
List each difference with a one-sentence explanation of why it matters.
Do not recommend which is better — I will make that call.

Document A: [paste or describe]
Document B: [paste or describe]
```

**Worked example:**
> I am going to give you two documents. Compare them and tell me:
> 1. What is in the 2024 policy but not the 2025 policy?
> 2. What is in the 2025 policy but not the 2024 policy?
> 3. What changed in meaning, even if the words are similar?
> List each difference with a one-sentence explanation of why it matters.
> Do not recommend which is better — I will make that call.

**What to check:** Pick two specific differences the AI identified and verify them against the source documents directly.

---

## First Draft for Review

**When to use:** You need a written output — an email, a briefing note, a meeting summary — and want a solid first draft to react to rather than starting from blank.

**The prompt:**
```
Draft a [email / briefing note / meeting summary / status update] for [audience].
The purpose is: [one sentence].
Key points to include: [bullet list].
Tone: [formal / plain / direct].
Length: [one paragraph / one page / under 300 words].
This is a first draft for my review — flag anything you are uncertain about.
```

**Worked example:**
> Draft an email for the leadership team.
> The purpose is: summarize the outcome of last week's vendor review and the recommended next step.
> Key points to include: three vendors evaluated, two ruled out, one shortlisted, next step is a contract review.
> Tone: plain and direct.
> Length: under 200 words.
> This is a first draft for my review — flag anything you are uncertain about.

**What to check:** Read it as if you received it. AI drafts frequently get structure right but miss nuance. Edit accordingly — treat it as a starting point, not a final product.

---

## Policy or Compliance Check

**When to use:** You have a specific scenario or proposed action and want to check it against a policy, guideline, or set of rules before proceeding.

**The prompt:**
```
I am going to describe a scenario. Check it against the policy I will provide and tell me:
1. Does this scenario comply, partially comply, or not comply?
2. Which specific sections are relevant?
3. What questions should I ask before proceeding?
Do not give me a legal opinion — flag what I should look at and who I should consult.

Scenario: [describe what you plan to do]
Policy: [paste or describe]
```

**Worked example:**
> I am going to describe a scenario. Check it against the policy I will provide and tell me:
> 1. Does this scenario comply, partially comply, or not comply?
> 2. Which specific sections are relevant?
> 3. What questions should I ask before proceeding?
> Do not give me a legal opinion — flag what I should look at and who I should consult.
>
> Scenario: We want to share aggregated usage metrics with a third-party analytics vendor.
> Policy: [paste data handling policy]

**What to check:** Do not rely on this as a definitive compliance determination. Use it to identify the right questions and the right people to ask.

---

## Meeting Prep

**When to use:** You have an upcoming meeting and want to walk in prepared — clear on the context, the decisions needed, and the questions worth asking.

**The prompt:**
```
I have a meeting coming up. Help me prepare.
Here is the context: [paste agenda, notes, or background docs]
Tell me:
1. What are the key decisions or outcomes this meeting needs to produce?
2. What background do I need to understand before I walk in?
3. What are two or three questions worth raising?
Keep it brief — I need this to be scannable in five minutes.
```

**Worked example:**
> I have a vendor review meeting coming up. Help me prepare.
> Here is the context: [paste vendor proposal and internal notes]
> Tell me:
> 1. What are the key decisions or outcomes this meeting needs to produce?
> 2. What background do I need to understand before I walk in?
> 3. What are two or three questions worth raising?
> Keep it brief — I need this to be scannable in five minutes.

**What to check:** Make sure the AI's framing of "key decisions" matches your actual agenda. It will work from what you gave it — if you left something out, it will not know.

---

## Add Your Own

Copy this block for each golden path you want to add:

```
## [Name]

**When to use:** [One sentence — what situation does this address?]

**The prompt:**
[The template — use [BRACKETS] for fill-in-the-blank parts]

**Worked example:**
[A filled-in version showing what a real use of this prompt looks like]

**What to check:** [What should the learner verify before trusting the output?]
```
