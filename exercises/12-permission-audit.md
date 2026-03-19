# Exercise: Design Your Permission Setup

**Module:** 08 — Guard Rails and Permissions

## Learner Objective

Apply the least privilege principle to a realistic task scenario by specifying what access to grant, what to withhold, and what review step to add.

## What You'll Do

Read a task scenario and design the permission setup you'd use before letting the AI work on it.

## The Task

**The scenario:**

Your manager asks you to use OpenCode to help prepare a weekly report. The task: review email threads from the past 7 days, pull out any action items mentioned, and draft a summary with owners and due dates.

To do this, the AI would need access to your email.

Answer these questions in this chat:

**Question 1:** What is the minimum access the AI needs to complete this task? Be specific — what can it read, what can it write, what can it send?

**Question 2:** What access would you explicitly withhold, even if the AI asked for it?

**Question 3:** What is one thing you'd check or review before the AI produces the final summary?

**Question 4:** Before you approve any of this access — what one question would you ask your IT or AI program team to confirm this setup is approved?

## Completion Criteria

- [ ] Question 1 includes specific access (not just "read email" — read what, from where, for how long?)
- [ ] Question 2 names something specific to withhold and explains why
- [ ] Question 3 is a specific review step, not "I'd read it over"
- [ ] Question 4 names a real question worth asking (not "is this okay?")

## Common Confusion

**"Least privilege means no access."** No — least privilege means minimum access for the specific task. For this task, some email access is necessary. The principle is about scoping it appropriately, not refusing it entirely.

**"I'd just give it access to my whole inbox — it's easier."** Easier access is harder to limit later. If something goes wrong, you want to know exactly what the AI could have seen. "My whole inbox" is a large blast radius.

## Facilitator Note

This exercise surfaces whether the learner has internalized "least privilege" as a practical principle or just a phrase. If their answer to Question 1 is broad ("access to my email"), ask: "What does that mean specifically — all folders? All dates? Sent items? Contacts?" The granularity of the answer shows the depth of understanding.
