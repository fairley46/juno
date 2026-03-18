# OpenCode Onboarding

An AI-facilitated onboarding program for teams adopting OpenCode. Designed for non-technical and technical-adjacent learners who need practical habits, not a lecture.

The experience runs entirely inside OpenCode — no separate app, no browser, no slides. You open a folder, the AI greets you, and you go through 12 short modules together at your pace.

---

## What It Looks Like

When a learner opens this folder in OpenCode:

1. The AI reads `AGENTS.md` and understands it's a facilitator
2. It checks `PROGRESS.md` and picks up where the learner left off
3. It introduces itself, explains the program, and asks if they're ready to start
4. It presents each module conversationally — summarizing, inviting questions, running exercises
5. After each module it updates `PROGRESS.md` and moves on

The learner never has to type a command. They just talk to the AI.

---

## For Learners: Getting Started

### Requirements

- OpenCode (desktop or terminal)
- Node.js 20+ (one-time setup only)

### Setup

```bash
git clone https://github.com/fairley46/opencode-onboarding.git
cd opencode-onboarding
npm run setup
```

Then open the `opencode-onboarding` folder in OpenCode. That's it.

`npm run setup` copies org config templates and creates your `PROGRESS.md`. It runs once. After that, everything happens inside OpenCode.

---

## For Admins: Rolling Out to Your Team

### 1. Fill in org config

Before giving this to learners, edit three files:

| File | What it controls |
|------|-----------------|
| `org/org-context.md` | Approved use, disallowed use, governance notes |
| `org/escalation.md` | Who learners contact for policy, AI, and security questions |
| `org/approved-mcps.json` | Which MCP servers learners are allowed to use |

The `org/*.template.*` files show the expected format. The AI facilitator reads these at the start of every session.

### 2. Share the repo

Fork or copy this repo, fill in the org config, then share it with learners. Each learner runs `npm run setup` themselves — their `PROGRESS.md` is local and gitignored, so it won't conflict across users.

### 3. Adding your own modules

One markdown file + one line in `manifest.json`. No code changes. See [CUSTOMIZATION.md](CUSTOMIZATION.md).

---

## Curriculum

12 modules, ~90 minutes total. Each has a short exercise.

| # | Module | Focus |
|---|--------|-------|
| 1 | Welcome and Safety | What this program is; human accountability |
| 2 | What AI Is Doing Here | Plain-language model of how OpenCode works |
| 3 | Agent vs Assistant | The difference; why it matters for trust |
| 4 | Local vs Web Execution | What runs where; what leaves the machine |
| 5 | Guard Rails and Permissions | Least privilege; review habits |
| 6 | What MCP Is and Why It Matters | Connectors; how to add one; what to check |
| 7 | Using Markdown to Shape Behavior | Guidance files; AGENTS.md; real template |
| 8 | Asking Questions Across Tools | Getting useful answers from multiple sources |
| 9 | Build a Tiny Helper Tool | Hands-on: read-only policy search in ~70 lines |
| 10 | Tokens and Practical Limits | ~300 tokens/page; practical sizing heuristics |
| 11 | First Useful Workflows | Concrete workflows learners can use immediately |
| 12 | Troubleshooting and Next Steps | When things go wrong; where to go next |

---

## How It Works

This is a workspace-context program, not a CLI or a web app. The key insight: OpenCode already reads context files at session start. This repo uses that to make OpenCode a facilitator.

- **`AGENTS.md`** — the orchestration file. Tells OpenCode its role, the curriculum, how to run exercises, the tone to use, org policy routing, and when to escalate. Edit this to change facilitator behavior.
- **`modules/`** — the content. Plain markdown. OpenCode reads and presents each one conversationally.
- **`org/`** — org-specific context. Fill these in before rollout.
- **`PROGRESS.md`** — learner state. Created by setup, updated by OpenCode, human-readable and human-editable.
- **`manifest.json`** — the module list. Add an entry here to add a module.

---

## Project Structure

```
AGENTS.md               Facilitator instructions — OpenCode reads this first
CUSTOMIZATION.md        How to add modules, customize org config, roll out
PROGRESS.md             Learner progress (created by setup, gitignored)
manifest.json           Ordered module list with time estimates
setup.js                One-time scaffolding (copies templates, creates PROGRESS.md)
modules/                12 lesson files
exercises/              Exercise prompts + templates/helper-tool example
org/                    Org config files + templates (fill in before rollout)
docs/                   Implementation notes and open backlog
```

---

## Security

- No telemetry, no install hooks, no external network calls
- Local-only learner state
- Read-only-first training patterns throughout

See [SECURITY.md](SECURITY.md) and [THREAT_MODEL.md](THREAT_MODEL.md) for full details.
