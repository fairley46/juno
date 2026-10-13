# Juno verification map

Maintained source for verifying user-facing Juno behavior. Read this index, then the matching feature file.

## Baseline preconditions

- Use an isolated workdir (`/tmp/juno-verify-$RUN_ID`), never the developer's dirty tree.
- Node.js 20+.
- Run doctor (`node scripts/ci-check.js`) before Drive.
- Never drive a tree this run did not create or clone.

## Driving conventions

- Drive via `npm run setup`, `npm run export`, and `node scripts/ci-check.js`.
- Treat stdout phrases as literal (`created: PROGRESS.md`, `ONBOARDING COMPLETION REPORT`).
- Restore nothing into the developer's tree. Proof artifacts stay under `/tmp/juno-verify-proof/`.

## Features

- [Fresh setup](./fresh-setup.md) — clone → `npm run setup` → learner files exist.
- [Completion export](./completion-export.md) — `npm run export` writes a report from `PROGRESS.md`.
- [Curriculum integrity](./curriculum-integrity.md) — manifest modules and exercises resolve on disk.
