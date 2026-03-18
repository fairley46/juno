# Open Backlog

Things still to do before this is fully production-ready. Ordered roughly by priority.

For customization instructions (how to add modules, fill in org config, etc.) see [CUSTOMIZATION.md](../CUSTOMIZATION.md).

---

## High Priority

### Org config — fill in before any real learner uses this

The three live org config files still contain placeholder instructions. Without real values, learners will get unhelpful responses when they ask policy questions.

**What needs to be filled in:**
- [ ] `org/org-context.md` — approved uses, disallowed uses, governance notes for your org
- [ ] `org/escalation.md` — real names and contact info for AI questions, policy questions, security issues
- [ ] `org/approved-mcps.json` — actual approved MCP servers for your org (or empty array if none yet)

See `org/*.template.*` files for the expected format.

---

### End-to-end facilitator test

The full experience hasn't been cold-tested in OpenCode. Before rollout:

- [ ] Open the folder in OpenCode with no prior context
- [ ] Verify the AI greets correctly, explains the program, starts module 1
- [ ] Complete module 1 and verify PROGRESS.md updates
- [ ] Ask a side question mid-module, verify facilitator tone and return-to-module behavior
- [ ] Test escalation routing: ask a policy question, verify it routes to org/escalation.md contacts
- [ ] Test with placeholder org config (should note that contacts aren't configured yet)
- [ ] Test with filled-in org config
- [ ] Test terminal handoff exercises (06-helper-tool.md Part 2) — open terminal, run, come back, facilitator responds correctly

---

### Content gaps in modules 11 and 13

**Module 11 — Asking Questions Across Tools**
Currently thin. Needs a concrete example showing what "asking across tools" actually looks like — e.g., combining an approved MCP source with a local file and the AI's reasoning in a single answer. Should include a "what to watch for" note about conflicting sources.

**Module 13 — Tokens and Practical Limits**
Could use a worked example showing a real token budget decision — e.g., what to include vs. exclude when preparing a prompt for a long document.

---

## Medium Priority

### Org config rollout

The org config files (`org/org-context.md`, `org/escalation.md`, `org/approved-mcps.json`) still have placeholder instructions. Replace with real values before piloting with actual learners.

### Exercise 03 (Connect an Approved MCP)

Needs the same treatment as exercises 4 and 6 — currently just thin bullets with no concrete deliverable or completion criteria. Blocked until the org fills in `org/approved-mcps.json` with a real server.

### Exercises 1 and 2

Both are thin bullet-point stubs. Exercise 1 (Connect and Confirm) and Exercise 2 (Inspect) would benefit from the same rewrite exercises 4 and 6 got — concrete deliverable, completion criteria, common confusion section.

### Org config templates

Consider moving `org/templates/` to separate the reference format files from the live files more clearly — particularly if admins are confused about which files to edit. The `setup.js` copy logic would need to be updated accordingly.

---

## Low Priority / Nice to Have

### Completion certificate or export

Right now PROGRESS.md is the only record of completion. Some orgs may want a lightweight export (PDF or plain text) showing modules completed and dates.

### AGENTS.md tone variants

The facilitator tone is set for a general enterprise audience. Some orgs may want a more technical tone for engineering teams or a gentler tone for less tech-comfortable audiences. Could ship as alternative AGENTS.md templates.

### Example completed org config

A filled-in example of `org/org-context.md` and `org/escalation.md` (clearly marked as fictional) would help admins understand the expected depth and format faster than reading the templates.

### Module 11 workflow customization

Module 11 ("Asking Questions Across Tools") should eventually reflect workflows the specific org's learners actually use. This requires input from whoever is running the program.

---

## Resolved

- ✅ Module 01: added job security framing and psychological safety sections
- ✅ Module 03 (new): When to Trust AI Output — trust calibration, hallucination patterns, verification matrix
- ✅ Module 05 (new): OpenCode Modes: Plan, Edit, and Agent — control ladder, governance framing
- ✅ Module 07 (new): Data Safety and Shadow AI — never-paste table, approved tool rationale
- ✅ Module 14 (was 11): First Useful Workflows — rewritten with four-part prompt framework and 3 concrete templates
- ✅ Module 06: concrete MCP setup steps added
- ✅ Module 07 (was 07): guidance file template added
- ✅ Module 12 (was 09): annotated policy-lookup.js code added
- ✅ Module 13 (was 10): ~300 tokens/page rule of thumb and sizing table added
- ✅ Exercise 04: rewritten with concrete deliverable and completion checklist
- ✅ Exercise 06: rewritten with 3-part structure and terminal handoff instructions
- ✅ Repo cleanup: removed CLI-era docs, orphaned directories, added LICENSE and CONTRIBUTING.md
- ✅ Curriculum expanded: 12 → 15 modules, ~90 min → ~2 hours
