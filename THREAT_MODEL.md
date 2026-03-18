# Threat Model

## Assets

- Tutor instructions (`AGENTS.md`) and curriculum content (`modules/`)
- Org configuration (`org/`) — policy, escalation contacts, approved MCPs
- Learner progress (`PROGRESS.md`) — local to each learner's machine

## Trust Boundaries

- Repo content is shared and version-controlled — treat it as public
- Learner state (`PROGRESS.md`) is local only — never committed or transmitted
- MCP connectivity is controlled by `org/approved-mcps.json` — org admins set this
- Live research uses the AI tool's web search — governed by that tool's privacy policy

## Primary Risks

**1. Supply chain risk**
A malicious fork or modified version of this repo could include harmful instructions in `AGENTS.md` or module files. Mitigations: use the canonical repo, review `AGENTS.md` before deploying to learners, pin to a release tag.

**2. Sensitive data in prompts**
Learners may paste sensitive data into the AI session despite module 07's guidance. Mitigation: org config reinforces data handling policy; the never-paste table in module 07 builds the habit.

**3. Overly broad MCP access**
If `org/approved-mcps.json` is misconfigured, learners may connect to tools with excessive permissions. Mitigation: review approved MCPs before rollout; module 09 teaches evaluation criteria.

**4. Policy drift**
`org/` config files may become stale as org policy evolves. Mitigation: assign an owner for the org config files; review at least annually or when AI policy changes.

**5. Wrong access path**
Learners may use a personal AI account instead of the org's enterprise tenant. Mitigation: module 07 covers enterprise tenancy explicitly, including how to verify you are in the right environment.

## Out of Scope

- AI model behavior (governed by the AI tool vendor's safety and usage policies)
- Enterprise tenant data isolation (governed by the org's contract with the AI vendor)
- Network-level security (this repo makes no network calls)
