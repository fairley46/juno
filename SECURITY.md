# Security Notes

This onboarding package is designed to be safe by default.

## Safe Defaults

- no hidden network calls
- no telemetry
- no `postinstall` scripts
- no secret collection
- no automatic MCP enablement
- no writes outside the local onboarding state without explicit user action

## Data Handling

- learner progress, ratings, and feedback are stored locally on the learner's machine
- survey submission is manual by copy and paste
- diagnostics export is opt-in and should be redacted by default
- exported feedback should contain learner comments and light module context only

## Sensitive Data Rules

Do not store or export:

- API keys
- tokens
- credentials
- raw internal documents
- full tool payloads
- prompt transcripts unless explicitly approved later

## Release Requirements

- keep dependencies minimal
- pin versions when dependencies are introduced
- run tests before publishing
- review sample configs to ensure they are templates, not live credentials

