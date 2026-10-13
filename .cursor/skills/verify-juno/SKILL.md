---
name: verify-juno
description: Drive Juno's real CLI surface (setup and export) and curriculum integrity checks. Use when proving setup, export, or README/quickstart changes for this AI onboarding tutor repo.
---

# Verify Juno

Juno is not a web app. The user-facing surface is a Node CLI (`npm run setup`, `npm run export`) plus a conversational tutor that an AI agent runs from `AGENTS.md`. This skill drives the CLI and curriculum files the way a fresh clone does.

## Launch

Work in an isolated copy so the developer's tree stays untouched:

```bash
RUN_ID=$(date +%s)
WORK=/tmp/juno-verify-$RUN_ID
git clone --depth 1 "file://$(pwd)" "$WORK"   # or clone the remote URL
cd "$WORK"
npm run setup
```

Ready means all of these exist and are non-empty:

- `PROGRESS.md`
- `org/org-context.md`
- `org/escalation.md`
- `org/approved-mcps.json`
- `org/golden-paths.md`

Teardown: `rm -rf "$WORK"` (never delete the proof directory).

## Doctor

From the isolated workdir:

```bash
node -c setup.js && node -c export.js
test -f PROGRESS.md && test -f assets/juno-logo.png
node scripts/ci-check.js
```

Exit code `0` means the instance is worth driving. Non-zero means stop and fix before Drive.

## Drive

Prefer stable handles: script names, file paths, and exact stdout phrases from `setup.js` / `export.js`.

1. Fresh setup: delete `PROGRESS.md` if present, run `npm run setup`, expect `created: PROGRESS.md` or `already exists: PROGRESS.md`.
2. Idempotent setup: run `npm run setup` again, expect `already exists` lines and exit `0`.
3. Export: run `npm run export`, expect `ONBOARDING COMPLETION REPORT` on stdout and an `onboarding-report-*.txt` file.
4. Curriculum: run `node scripts/ci-check.js` and require exit `0`.

## Evidence

Proof root: `/tmp/juno-verify-proof/` (or `.cursor/skills/verify-juno/artifacts/` when committing is unwanted). Keep proofs after cleanup.

Standards:

- Exercise the real `npm run setup` / `npm run export` path, not hand-written file copies.
- Capture command, exit code, and resulting files (action + state).
- Confirm `assets/juno-logo.png` is a readable PNG (`file` reports PNG).
- For README visual proof, open a local preview of the logo + README hero and screenshot it.

Suggested captures:

```bash
PROOF=/tmp/juno-verify-proof
mkdir -p "$PROOF"
npm run setup > "$PROOF/setup.out" 2>&1
npm run export > "$PROOF/export.out" 2>&1
cp PROGRESS.md "$PROOF/PROGRESS.md"
file assets/juno-logo.png > "$PROOF/logo.file.txt"
```

## Cleanup

Remove only the isolated workdir you created (`rm -rf /tmp/juno-verify-$RUN_ID`). Leave `$PROOF` in place. Kill only processes you started (for example a local static preview server by its PID).

## Helpers

- `node scripts/ci-check.js` — curriculum and script integrity (same checks CI runs).
- Invocation is shown in Doctor and Drive above.
