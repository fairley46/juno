# Contributing

## Adding a Module

1. Create a markdown file in `modules/` with the next available number (e.g., `modules/16-your-topic.md`)
2. Add one entry to `manifest.json` with the module ID, title, file path, and `estimatedMinutes`
3. Optionally create a matching exercise in `exercises/`

No code changes needed. See [CUSTOMIZATION.md](CUSTOMIZATION.md) for the full walkthrough.

## Editing Facilitator Behavior

Edit `AGENTS.md`. This file controls the AI's role, tone, session protocol, and escalation routing. Changes take effect the next time a learner opens the folder in OpenCode.

## Editing Module Content

Module files are plain markdown in `modules/`. Edit them directly. The AI facilitator reads them and presents the content conversationally — there is no build step.

## Editing Org Config

The live org config files are in `org/`. Template versions showing the expected format are in `org/templates/`. Edit the live files for your org before rollout.

## Reporting Issues

Open an issue on GitHub describing what you expected, what happened instead, and which module or exercise the problem is in.

## Pull Requests

- Keep changes focused — one module, one fix, one improvement per PR
- Test by opening the folder in OpenCode and running through the affected module
- Run `npm test` to make sure the test suite still passes
- Update `manifest.json` if you add or rename a module file
