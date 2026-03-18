# Security

## Safe Defaults

This repo is designed to be safe by default:

- No telemetry
- No hidden network calls
- No `postinstall` scripts
- No secret collection
- No automatic MCP enablement
- No writes outside the learner's local machine

## Data Handling

Learner progress is stored in `PROGRESS.md` on the learner's local machine. It is gitignored and never leaves the machine. No data is transmitted to any external service by this repo.

Live research (when the tutor searches the web during a session) uses whatever web search capability the AI tool provides. That data path is governed by the AI tool's own privacy policy — not this repo.

## Sensitive Data Rules

Do not store in any file in this repo:

- API keys, tokens, or credentials
- Real learner names or personal data beyond what the learner puts in PROGRESS.md
- Internal org documents
- Prompt transcripts

The `org/` config files are designed for policy descriptions, not sensitive data. Treat them accordingly.

## Release Checklist

Before tagging a release:

- Review `org/*.template.*` files to ensure they contain no live credentials or real org data
- Confirm `PROGRESS.md` is in `.gitignore`
- Keep runtime dependencies minimal — `setup.js` should require no packages beyond Node.js built-ins
