# Open Backlog

Things still to do. Ordered by priority.

For customization instructions see [CUSTOMIZATION.md](../CUSTOMIZATION.md).

---

## Must Do Before Rolling Out to a Real Team

### 1. Fill in org config

The three live org config files still contain placeholder text. Juno reads these at the start of every session — without real values, learners get unhelpful responses on policy questions.

- [ ] `org/org-context.md` — approved uses, disallowed uses, governance notes
- [ ] `org/escalation.md` — real names and contact info
- [ ] `org/approved-mcps.json` — approved MCP servers, or empty array if none yet

### 2. Verify further_reading URLs

All 15 modules have `further_reading` entries in `manifest.json`. A few URLs need verification before distributing:

- [ ] Confirm OpenCode docs URL resolves (`https://opencode.ai/docs`)
- [ ] Confirm OpenCode extensions URL resolves (`https://opencode.ai/docs/extensions`)
- [ ] Confirm OpenCode community URL resolves (`https://opencode.ai/community`)
- [ ] Consider adding links from OpenAI, Google Gemini, and other providers where relevant — learners benefit from seeing the broader ecosystem, not just Anthropic sources

---

## Medium Priority

### Evergreen industry context sections

Modules 05, 06, and 09 cover topics that move fast. Adding an "Industry Context" section to each would give learners the landscape around the topic — not recent news, but the debates, tensions, and trends that make the module matter in the bigger picture. These sections don't go stale because they're framed around forces, not events.

- **Module 05 (OpenCode Modes)** — the industry-wide shift toward agentic AI and why the control question (plan vs edit vs agent) is becoming central to governance conversations everywhere, not just in OpenCode
- **Module 06 (Local vs Web)** — the evolving landscape of data residency, on-premise AI models, edge deployment, and how regulations (GDPR, EU AI Act) are reshaping where enterprises are allowed to run AI
- **Module 09 (MCP)** — why connector ecosystems always fragment, how to evaluate them, and where the MCP ecosystem is heading as it becomes the dominant integration pattern for AI tools

### Tool-agnostic variant

The current repo is OpenCode-focused but the architecture works in any AI tool that reads context files — Claude.ai Projects, Cursor, Windsurf, others. Validating in Claude.ai Projects first (in progress) before building anything.

- [ ] Test full 15-module run in Claude.ai Projects
- [ ] Identify what breaks or needs adjustment
- [ ] Determine if a separate variant is needed or if one repo handles both

### Distribution model

Current distribution (fork repo → npm setup → open in OpenCode) works for technical teams. For broader enterprise rollout, a lower-friction path may be needed.

- [ ] Evaluate hosted option — shareable link that opens a pre-configured workspace
- [ ] Consider admin-push model vs each learner setting up themselves

---

## Low Priority / Nice to Have

### Example completed org config

A filled-in fictional example of `org/org-context.md` and `org/escalation.md` (clearly marked as example) would help admins understand the expected depth faster than reading the templates.

### AGENTS.md tone variants

The tutor tone is set for a general enterprise audience. Some orgs may want a more technical tone for engineering teams. Could ship as alternative AGENTS.md templates.

### Completion export

PROGRESS.md is the only record of completion. Some orgs may want a plain-text export showing modules completed with dates. Could be a simple `npm run export` addition.

### Module 13 — Tokens: add a worked example

The sizing table is solid. A worked token budget example would make it more concrete — deciding what to include vs. exclude when preparing a long document for a prompt.

---

## Resolved

**Juno (completed 2026-03-18):**
- ✅ Tutor named Juno — introduces herself by name at session start

**Tutor upgrade (completed 2026-03-18):**
- ✅ AGENTS.md: reframed agent as tutor (Juno), not facilitator
- ✅ Elicit-prior-knowledge step added to module protocol
- ✅ Connect-backward step — each module opens by linking to the previous
- ✅ Name-the-wrong-model-first instruction added
- ✅ Find-their-analogy instruction added
- ✅ "Does that make sense?" replaced with explain-it-back and diagnostic scenario checks
- ✅ Read-engagement step — Juno slows down and tries a different approach when learner seems lost
- ✅ Visual aids instruction — Juno draws diagrams proactively for relational concepts
- ✅ Module 01: "How This Program Works" orientation section added
- ✅ Session start: Juno explains her teaching approach before beginning Module 1
- ✅ Learner agency reminders added — Juno tells learners their options at pause points
- ✅ "What This Doesn't Mean" (job replacement framing) replaced with "What Gets Better"
- ✅ AGENTS.md Don'ts: no bullet summaries, no invented commands

**Three-layer architecture (completed 2026-03-18):**
- ✅ `further_reading` array added to all 15 modules in manifest.json
- ✅ AGENTS.md: Juno offers further reading after module rating (optional)
- ✅ AGENTS.md: Juno always offers live research after further reading
- ✅ Live research framed as exploration, not training — clearly separate from golden path
- ✅ Live Research section added to AGENTS.md for mid-session research requests
- ✅ Fixed: live research offer was conditional on agent knowing search capability — now unconditional

**Content (completed 2026-03-18):**
- ✅ Module 07: enterprise tenancy section added — org tenant vs personal account, comparison table, verification steps
- ✅ Exercise 07: rewritten from stub with paste test and tenancy verification
- ✅ Module 01: "What Gets Better" reframe — acceleration and capability, not job security
- ✅ Modules 04, 06, 08, 15 expanded to substantive depth
- ✅ Modules 03, 05, 07 added (curriculum expanded 12 → 15 modules)
- ✅ All 15 module H1 headers corrected
- ✅ Exercises 01, 02, 03, 04 rewritten from stubs

**Repo (completed 2026-03-18):**
- ✅ README rewritten to world-class standard: badges, quick start at top, scannable table, single diagram
- ✅ SECURITY.md updated — removed CLI-era references, reflects current architecture
- ✅ THREAT_MODEL.md updated — removed CLI-era references, added tenancy and wrong-access-path risks
- ✅ GitHub repo About section: description, topics, homepage
- ✅ v0.3.0 release published with full release notes
- ✅ Tutor named Juno
