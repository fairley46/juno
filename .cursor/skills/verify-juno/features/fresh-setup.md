# Fresh setup

Fresh setup turns a clone into a learner-ready workspace by creating `PROGRESS.md` and any missing org config files from templates.

## Sub-features

- `setup-progress` creates `PROGRESS.md` from `PROGRESS.md.template` when missing.
- `setup-org` creates missing `org/*.md` and `org/approved-mcps.json` from templates.
- `setup-idempotent` leaves existing files untouched on a second run.

## How to get to it (user POV)

- Run `npm run setup` after cloning (README Quick Start).
- Run `node setup.js` directly.

## Driving it with the shell

Preconditions:

- Isolated workdir with repo files present and `PROGRESS.md` absent.
- Doctor passed.

- **Create progress.** Run `npm run setup`. Stdout includes `created: PROGRESS.md`. File exists and is non-empty.
- **Second run.** Run `npm run setup` again. Stdout includes `already exists: PROGRESS.md`. File contents unchanged.
- **Proof.** Copy `PROGRESS.md` and `setup.out` into the proof directory. Confirm `org/golden-paths.md` exists after the first successful setup.

## Gotchas

- Committed trees may already include some `org/*.md` files. Assert `already exists` for those and `created` only for missing ones.
- Do not run setup in a shared workdir that another agent still owns.
