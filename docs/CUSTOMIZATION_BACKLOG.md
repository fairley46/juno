# Customization Backlog

This is the running checklist of enterprise details still needed from PH before the onboarding package is ready for broader rollout.

## Needed From PH

### 1. Organization Guidance

- Replace the placeholder content in [org-context.md](/Users/bradfairley/Documents/Playground/opencode-onboarding/org/org-context.md)
- Confirm approved use cases for beginner onboarding
- Confirm disallowed use cases
- Confirm the exact language for human accountability and approval expectations

### 2. Escalation Paths

- Add the real onboarding support contact or channel
- Add the real internal business/policy contact or channel
- Add the real security contact or channel
- Decide whether the facilitator should name a person, team alias, Slack/Teams channel, or all three

### 3. Approved MCP Inventory

- List the MCP servers learners are allowed to use in onboarding
- For each MCP, provide:
- display name
- purpose
- access level
- whether it is read-only or can mutate data
- any data sensitivity limits
- whether it is safe for beginner use in V1

### 4. Data Sensitivity Rules

- Define allowed data classifications for onboarding exercises
- Confirm which content is safe to include in local examples
- Confirm whether diagnostics export needs extra redaction rules
- Confirm whether screenshots or copied outputs are allowed in support workflows

### 5. OpenCode Environment Details

- Confirm how learners will invoke the package in OpenCode desktop
- Confirm the intended package install path for real users
- Confirm whether custom slash commands are available or whether the entrypoint should begin as a documented prompt/command wrapper
- Confirm whether desktop and terminal should share one progress location or separate ones

### 6. Survey and Feedback

- Provide the real SurveyMonkey or feedback link
- Confirm whether the survey should be module-level, end-of-course, or both
- Confirm what metadata is acceptable for the learner to copy and paste

### 7. Starter Workflows

- Choose the first three real-world workflows learners should practice
- Confirm which workflow is best for non-technical staff
- Confirm which workflow is best for technical-adjacent staff
- Confirm which workflow should be avoided in V1

### 8. Beginner Tool Example

- Confirm the real data source for the tiny helper tool
- Confirm the safe permission boundary for that tool
- Confirm whether the first tool should stay read-only in all cases

### 9. Rollout and Support

- Decide who owns content updates
- Decide who reviews org guidance changes
- Decide who receives break/fix diagnostic bundles
- Decide whether this starts as a pilot or broad rollout

## Recommended Order

1. Fill in escalation contacts
2. Fill in approved MCPs
3. Fill in org guidance and disallowed use
4. Add the real survey link
5. Pick starter workflows
6. Confirm the tiny tool data source

## Ready-For-Desktop Test Checklist

- [ ] `org/org-context.md` reviewed
- [ ] `org/approved-mcps.json` reviewed
- [ ] `org/escalation.md` reviewed
- [ ] survey URL updated in [manifest.json](/Users/bradfairley/Documents/Playground/opencode-onboarding/manifest.json)
- [ ] first-run flow tested in desktop
- [ ] rating and feedback export tested in desktop
- [ ] diagnostics export tested once
- [ ] missing-config behavior reviewed for tone and clarity

