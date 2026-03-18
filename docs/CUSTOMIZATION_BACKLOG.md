# Customization Backlog

For how to customize this program, see [CUSTOMIZATION.md](../CUSTOMIZATION.md) at the repo root.

---

This file previously tracked pending enterprise configuration items for the original CLI-based architecture. That work is complete — the program now uses a workspace-context approach where customization happens by editing markdown files directly.

**What changed:**
- Org config is in `org/org-context.md`, `org/escalation.md`, `org/approved-mcps.json`
- Adding a module = one markdown file + one line in `manifest.json`
- Facilitator behavior is in `AGENTS.md`
- No code changes needed for any of these

See [CUSTOMIZATION.md](../CUSTOMIZATION.md) for the current rollout checklist and step-by-step instructions.
