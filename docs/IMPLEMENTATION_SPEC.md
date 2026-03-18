# Implementation Spec

## Product Shape

This package is an installable onboarding experience for OpenCode users. It is designed to run inside the same environment where the learner will later do real work.

The experience should feel like a guided facilitator session instead of a separate training site.

## V1 Goals

- approachable for non-technical or AI-hesitant staff
- safe and enterprise-aware
- true parity between desktop app and terminal
- self-serve by default, facilitator-friendly if needed
- local learner state
- manual feedback export
- no hidden outbound behavior

## Core Entry Model

- `/onboarding`
- `/onboarding status`
- `/onboarding restart`
- `/feedback`
- `/onboarding export-diagnostics`

The CLI scaffold mirrors this flow for local development until the OpenCode-native entrypoint is wired in.

## Data Model

### Workspace Content

Stored in the workspace:

- manifest
- module content
- exercises
- facilitator instructions
- org templates

### Local Learner State

Stored under `~/.opencode/onboarding/<workspace-id>/`:

- `progress.json`
- `ratings.ndjson`
- `feedback.ndjson`
- `exports/`
- `diagnostics/`

If the learner's home directory is not writable, the runtime may fall back to a workspace-local path such as `.opencode-local/onboarding/<workspace-id>/`.

## Interaction Loop Per Module

1. orient the learner
2. explain the concept in plain language
3. run one short exercise
4. invite questions
5. recap the key idea
6. ask for a 1-5 rating
7. offer `/feedback`
8. offer export for survey submission
9. save progress

## Feedback Model

`/feedback` always writes locally first.

At module end, the facilitator can generate a clean copy/paste block for the survey link. Survey submission itself remains manual.

## Diagnostics Model

When onboarding breaks:

- preserve progress
- explain the issue warmly
- offer a redacted diagnostics export
- do not include secrets or raw internal data

## Security Design

- no automatic telemetry
- no install hooks
- read-only first exercises
- org overlay controls approved MCPs and internal escalation path
- diagnostics are opt-in and redacted

## Testing Priorities

- state initialization and resume
- restart and skip behavior
- rating and feedback persistence
- export formatting
- diagnostics redaction boundaries
- missing config and corrupt state recovery
