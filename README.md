# OpenCode Onboarding

Guided, installable onboarding for learning how to use OpenCode safely inside OpenCode.

This project is designed for non-technical and technical-adjacent learners who may be new to AI, unsure how agents work, or nervous about using AI in an enterprise setting. The goal is to teach safe, practical use in the same place where the work will actually happen: OpenCode desktop or the terminal.

## What This Is

This repository is a testable onboarding runtime for OpenCode with:

- a facilitator-led learning flow
- modular lessons with enterprise guard rails
- interactive exercises for early modules
- local-only learner state, ratings, and feedback
- manual feedback export for survey workflows
- redacted diagnostics export for break/fix support
- org-level placeholders for MCPs, escalation paths, and internal guidance

## Why This Approach

Most AI onboarding is either too technical, too abstract, or too hype-heavy. This project is built around a different idea:

- teach in the same environment where the learner will work
- explain the mental model before configuration
- make governance part of the product, not a separate appendix
- keep the human in the loop
- help beginners practice, not just read

## Current Experience

The current version includes:

- a guided facilitator loop you can run locally
- lesson modules covering AI basics, agents, local vs web, MCP, markdown guidance, tokens, guard rails, and first workflows
- interactive exercises for the first three modules
- side-question handling with return-to-lesson guidance
- org-aware stubs for internal policy boundaries

## Quick Start

### Requirements

- Node.js 20+

### Run The Onboarding

```bash
git clone https://github.com/fairley46/opencode-onboarding.git
cd opencode-onboarding
npm run onboarding
```

### Run Tests

```bash
npm test
```

## What Testing Looks Like

Inside the interactive session, you can:

- move through modules
- start an interactive exercise with `exercise`
- ask plain-language questions
- leave feedback with `feedback`
- export survey-ready feedback with `export-feedback`
- export a redacted diagnostics bundle with `export-diagnostics`

A good first test path is:

```text
restart
show
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
What is MCP?
quit
```

## What The Onboarding Teaches

- what AI is doing in OpenCode
- the difference between an assistant and an agent
- local versus web execution
- what MCP is and why it matters
- how markdown shapes behavior and context
- how to ask questions across approved tools and sources
- how to think about tokens in practical terms
- how permissions, review, and least privilege work in practice

## Project Structure

```text
docs/           implementation notes, testing, customization, references
modules/        lesson content
exercises/      exercise definitions and prompts
facilitator/    tone, interaction rules, and warm error copy
org/            org-specific stubs and templates
src/            runtime and facilitator logic
test/           automated tests
```

## Enterprise Customization

The repo ships with PH placeholder data so the onboarding can be tested safely right away. Before real rollout, you should replace the stub org files with your actual enterprise guidance:

- `org/org-context.md`
- `org/approved-mcps.json`
- `org/escalation.md`

The running checklist of required inputs is in [CUSTOMIZATION_BACKLOG.md](docs/CUSTOMIZATION_BACKLOG.md).

## Security Posture

This project is intentionally safe by default:

- no hidden telemetry
- no install hooks
- local-only learner state by default
- read-only-first training patterns
- manual feedback export
- redacted diagnostics export

See:

- [SECURITY.md](SECURITY.md)
- [THREAT_MODEL.md](THREAT_MODEL.md)
- [SAFE_DEFAULTS.md](SAFE_DEFAULTS.md)

## Industry Grounding

The teaching approach is being shaped by external guidance from:

- Anthropic on effective agent design
- the official Model Context Protocol docs
- OpenAI prompt guidance
- GitHub Copilot model guidance
- NIST AI RMF
- OWASP guidance for LLM applications

References are tracked in [INDUSTRY_REFERENCES.md](docs/INDUSTRY_REFERENCES.md).

## Useful Docs

- [DESKTOP_TEST_RUNBOOK.md](docs/DESKTOP_TEST_RUNBOOK.md)
- [IMPLEMENTATION_SPEC.md](docs/IMPLEMENTATION_SPEC.md)
- [TEST_STRATEGY.md](docs/TEST_STRATEGY.md)
- [CUSTOMIZATION_BACKLOG.md](docs/CUSTOMIZATION_BACKLOG.md)

## Current Status

This is an actively evolving v0.1 scaffold. The strongest next improvements are:

- more interactive exercises across the full curriculum
- more polished presentation inside the facilitator flow
- better OpenCode-native entrypoint wiring for the eventual `/onboarding` experience
- richer org overlays and real MCP-backed practice paths

