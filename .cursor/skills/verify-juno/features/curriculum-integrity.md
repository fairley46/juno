# Curriculum integrity

Curriculum integrity means every module listed in `manifest.json` has a lesson file and an exercise file on disk, and the logo asset is a real PNG.

## Sub-features

- `manifest-modules` resolves each module `file` under `modules/`.
- `manifest-exercises` resolves each module `exercise` under `exercises/` when present.
- `logo-png` confirms `assets/juno-logo.png` is PNG data.

## How to get to it (user POV)

- Open the curriculum from the README or start a tutoring session (agent reads `manifest.json`).
- CI runs the same check via `node scripts/ci-check.js`.

## Driving it with the shell

Preconditions:

- Repo files present (setup not required).

- **Run check.** Run `node scripts/ci-check.js`. Exit code `0`.
- **Proof.** Save stdout to `curriculum.out` in the proof directory. Optionally run `file assets/juno-logo.png` and save the line that says `PNG image data`.

## Gotchas

- `package.json` `version` must match `manifest.json` `version` for the version check inside `ci-check.js`.
- Extra exercise files are allowed. Missing ones for a listed module are not.
