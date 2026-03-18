# Module 8: Guard Rails and Permissions

## Why This Matters

Guard rails and permissions are not obstacles. They are what make it safe to give the AI more access over time. Without them, the only way to stay safe is to give the AI almost nothing — which defeats the point. With them, you can expand access deliberately, with confidence that boundaries exist.

Understanding what permissions your workspace has — and why — is part of being a responsible user, not just a technical detail for IT.

## The Simple Picture

**Permissions** define what OpenCode can access or do: which files it can read, which tools it can call, which actions it can take.

**Guard rails** define the rules around how that access should be used: what it should refuse, what it should flag, what requires human approval.

Together, they create a boundary around what the AI is allowed to do — and that boundary is what makes review possible.

## Least Privilege: The Core Principle

The phrase you'll hear most in enterprise AI governance is **least privilege**. In plain language: give the tool only the access it actually needs for the current job.

Not the access it might need someday. Not the broadest access that's convenient. The minimum access that lets it do the specific task at hand.

**Why this matters in practice:**

If you give OpenCode access to your entire file system to answer a question about one document, you've created exposure that didn't need to exist. If something goes wrong — a mistake in the output, a misread file, an unexpected action — the blast radius is larger than it needed to be.

If you give it access to the one folder with the relevant documents, the same task gets done and the exposure is contained.

## What a Healthy Permission Setup Looks Like

For most non-technical users doing early AI work, a good setup looks like:

| Access | Why |
|--------|-----|
| Read approved documents and workspace files | Needed to do useful work |
| Use one or two approved read-only MCPs | Extends capability within safe bounds |
| Write to local workspace files (with confirmation) | Needed for exercises and drafting |
| No write access to shared systems | Too broad for early use |
| No access to credentials, keys, or auth systems | Never appropriate without specific governance |

If your setup includes something in that last category, ask your admin why it's there.

## What Review Actually Looks Like

Guard rails only work if someone reviews what the AI did. Here is what that looks like in practice:

**Before a task:** Check what mode you're in. Plan Mode shows you what the AI intends before it acts. Use it for anything unfamiliar.

**During a task:** If the AI asks for permission to do something unexpected, read the request carefully before approving. "The AI asked permission" is not the same as "this is fine."

**After a task:** Read the output. Check what files were changed. If the AI used a tool, understand what it queried and what it returned.

Most of the time this takes less than two minutes. The habit is more important than the time.

## Common Mistakes

**Granting broad access because it's easier.** Access is easier to give than to take back. Start narrow and expand when there's a clear reason.

**Approving permission requests without reading them.** Click-through approval is how guard rails fail. If you don't know what you're approving, pause.

**Assuming the AI won't do something because you didn't ask it to.** If access exists, the AI may use it to fulfill a request in ways you didn't anticipate. Scope the access, not just the prompt.

**Treating guard rails as IT's problem.** Your org's IT and security teams set the outer boundaries. Within those, the permissions you configure for your own tasks are your responsibility.

## The Review Habit in One Line

If a task changes data, touches a sensitive system, or could create compliance risk — review before it happens, not after.

## Safety Check

Governance is not a one-time setup. As you do more with OpenCode, periodically check: what access does this workspace have, and does the current task actually need it?

## What To Remember

Least privilege, deliberate review, and explicit approval on meaningful actions. Safe AI use is not "trust it and hope" — it is "scope it, guide it, check it."
