# OpenCode Onboarding

`@ph/opencode-onboarding` is a starter package for a guided, installable onboarding experience that runs inside OpenCode in the desktop app or terminal.

## What This Scaffold Covers

- installable package structure for a future `/onboarding` entrypoint
- local-only learner state and feedback storage
- module manifest and content layout
- facilitator instructions and warm error copy
- org overlay templates for approved MCPs and internal guidance
- security, threat model, and testing documentation
- a small CLI scaffold for local state, feedback capture, and export flows

## Current Status

This is now a testable facilitator runtime scaffold. It provides:

- a manifest for the onboarding journey
- markdown modules and exercises
- a local state model under `~/.opencode/onboarding/<workspace-id>/`
- a safe workspace fallback under `.opencode-local/onboarding/` if the home directory is not writable
- feedback capture and export helpers
- diagnostics export scaffold
- an interactive facilitator loop for desktop or terminal testing

## Local Commands

```bash
npm run onboarding
node ./src/cli.js start
node ./src/cli.js resume
node ./src/cli.js show
node ./src/cli.js complete
node ./src/cli.js next
node ./src/cli.js prev
node ./src/cli.js status
node ./src/cli.js feedback "The explanation felt clear."
node ./src/cli.js rate 5
node ./src/cli.js export-feedback
node ./src/cli.js export-diagnostics
node ./src/cli.js restart
npm test
```

## Planned OpenCode Experience

- `/onboarding` starts or resumes the journey
- `/onboarding status` shows progress
- `/onboarding restart` restarts onboarding
- `/feedback` captures local feedback and offers an export block for survey submission
- `/onboarding export-diagnostics` creates a redacted bundle for break/fix support

## Files To Customize Later

- [org/org-context.template.md](/Users/bradfairley/Documents/Playground/opencode-onboarding/org/org-context.template.md)
- [org/approved-mcps.template.json](/Users/bradfairley/Documents/Playground/opencode-onboarding/org/approved-mcps.template.json)
- [org/escalation.template.md](/Users/bradfairley/Documents/Playground/opencode-onboarding/org/escalation.template.md)
- [manifest.json](/Users/bradfairley/Documents/Playground/opencode-onboarding/manifest.json)
- [CUSTOMIZATION_BACKLOG.md](/Users/bradfairley/Documents/Playground/opencode-onboarding/docs/CUSTOMIZATION_BACKLOG.md)
- [DESKTOP_TEST_RUNBOOK.md](/Users/bradfairley/Documents/Playground/opencode-onboarding/docs/DESKTOP_TEST_RUNBOOK.md)
- [INDUSTRY_REFERENCES.md](/Users/bradfairley/Documents/Playground/opencode-onboarding/docs/INDUSTRY_REFERENCES.md)

## Stub Org Data Included

For desktop testing, the package now includes placeholder org files that the runtime can load:

- [org-context.md](/Users/bradfairley/Documents/Playground/opencode-onboarding/org/org-context.md)
- [approved-mcps.json](/Users/bradfairley/Documents/Playground/opencode-onboarding/org/approved-mcps.json)
- [escalation.md](/Users/bradfairley/Documents/Playground/opencode-onboarding/org/escalation.md)

These are intentionally safe placeholders and should be replaced before real rollout.

## Next Step For OpenCode Desktop

To test the package in OpenCode desktop next, open this workspace and start the interactive facilitator:

```bash
cd /Users/bradfairley/Documents/Playground/opencode-onboarding
npm run onboarding
```

This is the quickest way to validate the flow, tone, local state behavior, and question-handling loop before wiring the real `/onboarding` entrypoint.
