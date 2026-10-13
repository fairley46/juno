# Completion export

Completion export reads `PROGRESS.md` and writes a plain-text onboarding report for the learner.

## Sub-features

- `export-missing` exits non-zero when `PROGRESS.md` is absent.
- `export-report` prints and saves a report when progress exists.

## How to get to it (user POV)

- Run `npm run export` after setup (and optionally after completing modules).

## Driving it with the shell

Preconditions:

- `PROGRESS.md` exists (run fresh setup first).
- No need to mark modules complete for a smoke proof.

- **Missing progress.** In a tree without `PROGRESS.md`, run `npm run export`. Exit code is `1` and stderr mentions `PROGRESS.md not found`.
- **Happy path.** After setup, run `npm run export`. Exit code `0`, stdout contains `ONBOARDING COMPLETION REPORT`, and an `onboarding-report-*.txt` file is written.
- **Proof.** Save `export.out` and one report file under the proof directory.

## Gotchas

- Report filenames include a timestamp. Glob `onboarding-report-*.txt` instead of hard-coding a name.
- Export does not modify `PROGRESS.md`.
