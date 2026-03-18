# Desktop Test Runbook

Use this runbook to test the onboarding package inside OpenCode desktop before the true `/onboarding` entrypoint is wired in.

## Goal

Validate that the learner experience feels approachable, safe, and guided in the same place where work happens.

## Before You Start

- open [opencode-onboarding](/Users/bradfairley/Documents/Playground/opencode-onboarding) in OpenCode desktop
- confirm the PH stub org files are present:
- [org-context.md](/Users/bradfairley/Documents/Playground/opencode-onboarding/org/org-context.md)
- [approved-mcps.json](/Users/bradfairley/Documents/Playground/opencode-onboarding/org/approved-mcps.json)
- [escalation.md](/Users/bradfairley/Documents/Playground/opencode-onboarding/org/escalation.md)

## Start The Facilitator

```bash
cd /Users/bradfairley/Documents/Playground/opencode-onboarding
npm run onboarding
```

## Recommended First Test Path

In the interactive session, try:

```text
help
status
What is an agent?
exercise
I want to feel more confident using this safely.
done
Both, but the human still decides.
complete
rate 5
feedback
This felt easy to follow.
export-feedback
next
What if I have a question about our internal policy?
prev
export-diagnostics
quit
```

## What To Look For

- the tone feels warm and calm
- the module content is easy to follow
- side questions are answered simply
- internal-policy questions are redirected to org guidance
- ratings and feedback save locally
- feedback export creates a clean copy/paste block
- diagnostics export creates a redacted file

## Local Output Locations

Preferred:

- `~/.opencode/onboarding/<workspace-id>/`

Fallback when home is not writable:

- `.opencode-local/onboarding/<workspace-id>/`

## If Something Feels Off

- note the command you ran
- export diagnostics
- add a short feedback note
- capture the rough point in the flow that felt confusing
