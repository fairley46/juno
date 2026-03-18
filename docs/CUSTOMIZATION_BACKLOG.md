# Open Backlog

Things still to do before this is fully production-ready. Ordered by priority.

For customization instructions (how to add modules, fill in org config, etc.) see [CUSTOMIZATION.md](../CUSTOMIZATION.md).

---

## Must Do Before First Real Learner

### 1. Fill in org config

The three live org config files still contain placeholder instructions. The AI reads these at the start of every session — without real values, learners get unhelpful responses on policy questions.

- [ ] `org/org-context.md` — approved uses, disallowed uses, governance notes
- [ ] `org/escalation.md` — real names and contact info for AI, policy, and security questions
- [ ] `org/approved-mcps.json` — approved MCP servers, or empty array if none yet

See `org/*.template.*` files for the expected format.

### 2. End-to-end facilitator test

The tutor protocol in AGENTS.md has been significantly upgraded but hasn't been cold-tested with the new behavioral instructions in place.

- [ ] Open the folder in OpenCode with no prior context
- [ ] Verify the AI elicits prior knowledge before starting the first module
- [ ] Verify it names the wrong model before the right one in at least one section
- [ ] Complete module 1, verify PROGRESS.md updates and further reading is offered
- [ ] Test the live research offer — ask about industry context mid-module, verify it's framed as exploration not training
- [ ] Ask a side question mid-module, verify tutor tone and return-to-module behavior
- [ ] Test escalation routing — ask a policy question, verify it routes to org/escalation.md contacts
- [ ] Test with placeholder org config (AI should note contacts aren't configured yet)
- [ ] Test the terminal handoff in exercise 06

### 3. Verify further_reading URLs

The `further_reading` links in `manifest.json` were added in bulk. A few point to URLs that may not resolve exactly as written (OpenCode docs in particular). Verify each link resolves before distributing.

- [ ] Check all 15 modules' `further_reading` URLs
- [ ] Replace any dead or redirected links
- [ ] Add the OpenCode docs URL once confirmed (currently using `https://opencode.ai/docs` as placeholder)

---

## Medium Priority

### Tool-agnostic architecture

Currently framed as an OpenCode product. The AGENTS.md approach works in any AI tool that reads context files at session start — Claude.ai projects, Cursor, Windsurf, Copilot Workspace. Reframing as tool-agnostic would significantly expand the addressable market.

- [ ] Audit AGENTS.md for OpenCode-specific references — most are in the curriculum content, not the facilitator protocol
- [ ] Update module 05 (OpenCode Modes) to be the one tool-specific module, clearly labeled as such
- [ ] Consider renaming the product or creating a tool-agnostic variant
- [ ] Test the workspace in Claude.ai Projects (reads AGENTS.md natively)

### Distribution model

The current distribution (fork a repo, run npm setup, open in OpenCode) is good for technical teams but creates friction for non-technical enterprise buyers.

- [ ] Consider a hosted option — a shareable link that opens a pre-configured workspace
- [ ] Evaluate whether setup.js should generate a ready-to-share archive
- [ ] Think through multi-learner deployment — right now each learner forks; an admin-push model might be more enterprise-friendly

### Update SECURITY.md and THREAT_MODEL.md

Both files were written for the old CLI architecture. Some sections reference diagnostics exports and local state file paths that no longer apply.

- [ ] Review both files against current architecture
- [ ] Remove CLI-era references
- [ ] Add notes on the live research / web search surface area

### Module 13 — Tokens: add a worked example

The sizing table and rule of thumb are solid. A worked token budget example would make it more concrete — e.g., deciding what to include vs. exclude when preparing a long document for a prompt.

### Org config templates — consider consolidating

`org/` currently has both live files and `*.template.*` files side by side. An `org/templates/` subdirectory would make it clearer which files admins should edit. Requires updating `setup.js` copy logic.

---

## Low Priority / Nice to Have

### Evergreen industry context sections in fast-moving modules

Modules 05 (OpenCode Modes), 06 (Local vs Web), and 09 (MCP) would benefit from an "Industry Context" section covering the landscape, tensions, and debates around each topic. Not "recent events" — evergreen framing that doesn't go stale. This gives the live research layer something stable to build on.

### Example completed org config

A filled-in fictional example of `org/org-context.md` and `org/escalation.md` (clearly marked as example) would help admins understand the expected depth and format faster than reading the templates alone.

### AGENTS.md tone variants

The tutor tone is set for a general enterprise audience. Some orgs may want a more technical tone for engineering teams or a gentler tone for less tech-comfortable staff. Could ship as alternative AGENTS.md templates in `org/templates/`.

### Completion export

PROGRESS.md is the only record of completion. Some orgs may want a lightweight plain-text export showing modules completed with dates. Could be a simple `npm run export` addition to setup.js.

### Module 11 — org-specific workflow examples

The multi-source prompting examples in module 11 are currently generic. Orgs could replace them with examples specific to their actual approved tools and workflows once org config is filled in.

---

## Resolved

**Tutor upgrade (completed 2026-03-18):**
- ✅ AGENTS.md: reframed agent as tutor, not facilitator
- ✅ Elicit-prior-knowledge step added to module protocol
- ✅ Connect-backward step — each module opens by linking to the previous
- ✅ Name-the-wrong-model-first instruction added
- ✅ Find-their-analogy instruction added
- ✅ "Does that make sense?" replaced with explain-it-back and diagnostic scenario checks
- ✅ Read-engagement step — agent slows down and tries a different approach when learner seems lost

**Further reading layer (completed 2026-03-18):**
- ✅ `further_reading` array added to all 15 modules in manifest.json
- ✅ Each entry has title, URL, and one-line description of why it matters
- ✅ AGENTS.md: agent offers further reading after module rating, clearly optional

**Live research layer (completed 2026-03-18):**
- ✅ AGENTS.md: agent offers live research after further reading
- ✅ Framed explicitly as exploration, not training — "current context from the world, not part of the course"
- ✅ Conditional on web search being available; agent discloses honestly if it isn't
- ✅ Live Research section added to AGENTS.md covering mid-session research requests

**Docs (completed 2026-03-18):**
- ✅ README rewritten to reflect three-layer architecture and tutor experience
- ✅ CUSTOMIZATION.md updated to match current architecture

**Content (completed 2026-03-18):**
- ✅ Module 01: job security framing + psychological safety sections
- ✅ Module 03 (new): When to Trust AI Output — two-question framework, hallucination patterns, verification matrix
- ✅ Module 05 (new): OpenCode Modes — plan/edit/agent control ladder, governance framing
- ✅ Module 07 (new): Data Safety and Shadow AI — never-paste table, shadow AI explainer
- ✅ Module 09: concrete MCP setup steps (where to click, fields, verification)
- ✅ Module 10: guidance file template added
- ✅ Module 11: full rewrite — concrete worked example, four-element framework, conflicting sources section
- ✅ Module 12: annotated policy-lookup.js with design rationale
- ✅ Module 13: ~300 tokens/page rule of thumb and sizing table
- ✅ Module 14: rewritten with four-part prompt framework and 3 copy-and-adapt templates
- ✅ All 15 module H1 headers corrected to match file numbering
- ✅ Visuals added to module 03 (verification matrix) and module 07 (safety table)

**Exercises (completed 2026-03-18):**
- ✅ Exercise 01: full rewrite — two-question diagnostic, completion criteria, facilitator note
- ✅ Exercise 02: full rewrite — boundary mapping, test a boundary, completion criteria
- ✅ Exercise 03: full rewrite — four-part task, prerequisite gate, completion criteria
- ✅ Exercise 04: rewritten with concrete deliverable (create CONTEXT.md) and completion checklist
- ✅ Exercise 06: rewritten with 3-part structure and terminal handoff instructions
- ✅ Terminal handoff protocol added to AGENTS.md exercise section

**Repo (completed 2026-03-18):**
- ✅ Curriculum expanded: 12 → 15 modules, ~90 min → ~2 hours
- ✅ CONTRIBUTING.md and LICENSE (MIT) added
- ✅ Removed CLI-era docs: DESKTOP_TEST_RUNBOOK.md, TEST_STRATEGY.md
- ✅ Removed orphaned directories: examples/, schemas/, facilitator/
- ✅ package.json version bumped to 0.3.0
- ✅ Removed erroneous `npm run onboarding` script (CLI was deliberately archived)
