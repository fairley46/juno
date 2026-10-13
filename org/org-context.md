# Organization Context

> **EXAMPLE DEFAULTS.** Edit before production rollout.

The AI facilitator reads this file at the start of every session. The rules below are the working defaults for this program.

---

## Approved Use

OpenCode is approved for the work in this list. If a task is not listed, ask the AI Program Lead before you start.

### Document work

You may use OpenCode on internal documents in these ways.

- Summarize an internal report, meeting notes, or research you are allowed to share.
- Draft a first version of an internal note, proposal, or procedure.
- Compare two versions of a document and list the differences.
- Explain an internal document in plain language.

### Research and analysis

You may use OpenCode on source material in these ways.

- Summarize a public article or a public manual that you paste into the prompt.
- Answer a factual question from source text you provide in the prompt.
- Draft an analysis outline or a list of decision criteria.
- Compare options. A person reviews the comparison before anyone acts on it.
- Answer a question about internal documentation only through an MCP server listed in `org/approved-mcps.json`, and only after your organization replaces the sample example entries.

### Code and technical work

Any learner may draft code for a person to review.

- Draft, review, and explain code in an approved repository.
- Draft tests and debug failures. A person reviews the change before it merges.
- Draft boilerplate. A person reviews it before it is committed.

### Communication

You may draft the items below. A person reviews each item before it is sent.

- Email, chat messages, and meeting agendas.
- Talking points and presentation outlines for internal use.

### Learning

You may use OpenCode to complete the exercises in this onboarding program.

---

## Disallowed Use

The uses below are not approved. If you are unsure, pause and ask the AI Program Lead or your manager before you continue.

### Personal and client data

Do not put these items in a prompt.

- Personal data and account numbers
- A client name, or any detail that identifies a client
- A customer record, unless a reviewed workflow already covers that task

### Commercial and legal material

Do not put these items in a prompt.

- Unreleased financial results, forecasts, pricing, or deal plans
- Legal documents. Ask Legal before a prompt includes one.
- Material labeled Confidential or Restricted, unless a reviewed workflow already covers that task

### Conduct

These actions are not approved.

- Do not generate content meant to deceive a reader about a fact or about who wrote the text.
- Do not present AI-written material as work you wrote alone when your team requires you to disclose the tool.
- Do not let the tool make a business, legal, security, or financial decision. A person makes that decision.
- Do not let the tool send a message, spend money, change a permission, or delete a record before a person has reviewed that action.

### Tools

Follow these limits.

- Do not use a personal consumer AI account for work.
- Do not connect the sample example entries in `org/approved-mcps.json`, or any MCP server that is not listed in that file.
- Do not use a data source the AI Program Lead has not approved.

---

## Internal Escalation

Questions this onboarding does not answer go to `org/escalation.md`.

That file names who to contact for AI onboarding, policy and governance, security, and technical issues. It also names contacts for data handling, legal and compliance, and ownership of AI decisions. If you are not sure which contact fits, start with the AI Program Lead listed there.

---

## Internal Guidance Notes

### Data classification

A reviewed workflow is a written path the AI Program Lead has approved for that kind of data.

Use these four labels.

- **Public.** People outside the organization may see it. You may put it in a prompt.
- **Internal.** People inside the organization may see it. You may put it in a prompt. Do not publish it outside the organization.
- **Confidential.** A named group may see it. Do not put it in a prompt unless a reviewed workflow covers the task.
- **Restricted.** A named group may see it. Do not put it in a prompt until a reviewed workflow exists and a named person has approved that workflow.

If you cannot name the label, treat the material as Confidential. Ask the Privacy Team before you paste it.

### Review accountability

You review AI output before you act on it. You stay accountable for the message you send and for the decision you make. AI output is a draft until a person approves it.

A manager approves customer-facing material before anyone sends it.

### Approved MCP servers

The rows in `org/approved-mcps.json` are sample example entries. Do not connect them until your organization replaces them with real approved servers.

After your organization replaces those rows, connect only the servers listed in that file. Ask the AI Program Lead listed in `org/escalation.md` before you add a server. A server without an explicit write approval stays read-only.

### Personal consumer AI accounts

Do not use a personal consumer AI account for any work task. Use the OpenCode environment your organization provisions. The rules in this file apply to that environment.

Ask the AI Program Lead how that environment handles prompt data. Do not assume a personal account works the same way.

This program teaches general habits for working with AI. Training on one product is a separate course.
