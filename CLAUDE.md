# CLAUDE.md

This is `juno` — "the AI tutor that lives inside your agent." Public Node.js project; ships an `AGENTS.md` that serves as the tutor's system prompt for any agent runtime that adopts it.

> **Note on this file vs. `AGENTS.md`:** Juno's `AGENTS.md` is the *published artifact* — the tutor system prompt that downstream consumers (other agent runtimes) read to install Juno's behavior. It is **not** the agentskills.io repo-collaboration contract. This `CLAUDE.md` is for Claude Code working ON the Juno repo itself (development), separate from any agent running Juno as a tutor.

## Think before coding

- Read the existing `AGENTS.md` to understand what Juno *does* — its behavioral spec is the product
- State the goal in one sentence before writing
- If the goal involves modifying `AGENTS.md`, ask before doing it — that file IS the product

## Simplicity first

- Prefer boring solutions to clever ones
- One concern per change
- No new dependencies in `package.json` without justification
- The tutor's pedagogical approach is intentionally minimal (one module at a time, conversational, no summarizing) — don't add gamification or shortcuts

## Surgical changes

- Don't refactor surrounding code without being asked
- Match existing patterns:
  - Module structure (one .md per module)
  - Conversational tone in module copy
  - Setup script is one-time (`npm run setup`); export is one-time (`npm run export`); nothing else automates learning
- `AGENTS.md` versioning: Juno is at v1.2.0 — coordinate with Brad on any behavioral changes to the tutor spec, including in the published doc

## Goal-driven execution

- Each commit advances a module, fixes a tutor-behavior bug, or improves the setup flow — name it in the commit subject
- Tests first when behavior is being added (note: there's no test framework yet; adding one is a separate decision)
- Frequent commits over large ones

## What this repo is for

The Juno tutor: an AI agent persona that teaches whatever curriculum lives in this repo. Currently 15 modules. Distributed by being clone-and-go (any agent runtime that reads AGENTS.md adopts the persona).

## What this repo is NOT for

- A generic agent framework — Juno is one specific persona, not a meta-system
- An LMS or quiz platform — Juno teaches conversationally; assessment is the learner's self-report
- The Crew's agent infrastructure (that's `~/the-crew/`)

## How to ship a change

1. Branch from `main` as `<your-id>/<short-feature>`
2. Edit the module / setup / docs
3. PR to `main`
4. CI runs (if added) + pre-commit hooks
5. Wait for human approval before merge

## Cross-system pointers

- Juno's AGENTS.md → also lives at `~/wiki/pages/juno-agents-md.md` (snapshot)
- CUSTOMIZATION.md → also at `~/wiki/pages/juno-customization-md.md`
- Crew project notes on Juno: see memory under `[[brad_portfolio_pattern]]`
