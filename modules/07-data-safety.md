# Module 7: Data Safety and Shadow AI

## Why This Matters

The most common AI-related data incident is not a sophisticated attack. It is an employee pasting something confidential into a consumer AI tool without realizing the risk. This module is about building the habit that prevents that.

## What "Shadow AI" Means

Shadow AI refers to AI tools employees use without their organization's knowledge or approval — typically consumer tools like public ChatGPT, personal Claude, or other publicly accessible models.

It's widespread. Research consistently finds that 80%+ of workers use at least one unapproved AI tool at work. Most do it because the consumer tool is more accessible, feels more capable, or has less friction than the approved option.

The risk is specific: when you send a prompt to a consumer AI service, your input may be retained by the provider, used for model training, or accessible if that provider has a security incident. The approved tool your org provides has negotiated different terms — data handling controls, no training on your inputs, contractual protections.

## What Should Never Go Into a Prompt

This is the core habit. Before pasting anything into an AI tool — approved or not — ask: is this something that would be a problem if it appeared in a breach?

| Never paste (without explicit policy guidance) | Generally safe with the approved tool |
|------------------------------------------------|---------------------------------------|
| Client names, client data, PII | Public documents and published policies |
| Unreleased financial figures or forecasts | Your own draft work (no sensitive data) |
| Credentials, passwords, API keys, tokens | Anonymized or aggregated data |
| Legal documents under privilege or confidentiality | Openly available reference material |
| M&A information, strategic plans, anything under NDA | Internal docs with no restricted content (check policy) |
| Anything marked Confidential, Restricted, or Internal Only | |

## The Approved Tool Difference

Your org chose an approved AI tool and negotiated specific protections:
- Your prompts are not used to train the model
- Your data stays within contractual boundaries
- There is an audit trail
- If something goes wrong, there is a vendor accountability path

Consumer tools offer none of these protections by default. Using them for work isn't just against policy — it creates real exposure.

## Enterprise Tenancy — The Part Most People Miss

Here is where it gets subtle. The same AI model can be accessed through completely different data paths, and those paths have completely different safety properties.

When your org buys an enterprise subscription — Claude for Enterprise, Google Workspace with Gemini, Azure OpenAI, Microsoft 365 Copilot — they are not just buying access to a model. They are buying a **tenant**: a logically isolated environment where your org's data is separated from every other organization's data. The vendor signs a Data Processing Agreement (DPA) or Business Associate Agreement (BAA). Your admins have visibility into usage. SSO controls who can log in. Data retention and residency terms are contractually defined.

None of that applies when you access the same model through a personal account.

```
Enterprise tenant (approved path)          Personal account (not approved)
---------------------------------------    ---------------------------------------
SSO login with org credentials             Personal email login
Data covered by your org's DPA/BAA         Consumer terms of service
Admin visibility and audit logs            No org visibility
Data not used for model training           May be used for training
Contractual accountability if breach       Standard consumer recourse only
Data stays within contracted boundary      Outside your org's data boundary
```

The danger is that these look identical to the user. The chat interface is the same. The model is the same. There is no warning that you have stepped outside your org's data boundary. An employee who thinks "we use Claude at work so this is fine" may be using a personal account that shares nothing contractually with the enterprise subscription their org purchased.

**This is shadow AI even when it's the same model.**

### How to verify you are in the right environment

- You logged in with your org email through SSO, not a personal email
- Your admin or IT team confirmed the URL or app is the approved access point
- You see your org's branding, workspace, or tenant name in the interface
- When in doubt: ask. Do not assume that using the right model name means you are in the right place.

### Why this matters for the data you handle

Data you enter through a personal account is outside every protection your org negotiated. It is not covered by the DPA. Your org's legal team cannot compel the vendor to delete it under your enterprise agreement. If there is a breach, your org has no contractual standing. And your IT and security teams have no visibility that it happened.

The access path is part of the data control. Same model, wrong path — the protection disappears.

## The Inconvenience Trap

Shadow AI happens most when the approved tool is slower, harder to access, or less capable for a specific task. That friction is real. The right response is to flag it — tell your manager or AI program team that the approved tool doesn't meet your needs. That feedback changes what gets approved. Going around it just moves the risk.

## A Practical Test

Before pasting something into any AI tool, ask:

> "Would I be comfortable if this text appeared in a data breach story about our company?"

If no — don't paste it.

## Safety Check

The approved tool is not just a policy preference. It is a data protection control. Treat it that way.

## What To Remember

Two habits: use the approved tool, and never paste anything you wouldn't want public.
