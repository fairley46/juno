# Industry References

This file captures external guidance shaping the onboarding approach so the lessons stay aligned with credible industry practice.

## Core References

### 1. Anthropic: Building Effective Agents

Source:

- [Building Effective AI Agents](https://www.anthropic.com/research/building-effective-agents)

Key takeaways for this onboarding:

- start with simple, composable patterns rather than complex agent frameworks
- distinguish clearly between workflows and more autonomous agent behavior
- design agents around real tasks and clear boundaries, not hype

### 2. Model Context Protocol

Source:

- [Understanding MCP clients](https://modelcontextprotocol.io/docs/learn/client-concepts)

Key takeaways for this onboarding:

- keep the host, client, and server roles understandable
- teach learners that MCP is a structured connection layer, not "the AI"
- make tool boundaries visible so learners know what is connected and why

### 3. OpenAI Prompting Guidance

Source:

- [Prompt engineering best practices](https://platform.openai.com/docs/guides/prompt-engineering)

Key takeaways for this onboarding:

- clear instructions matter more than clever phrasing
- context should be deliberate, scoped, and testable
- reusable instructions and evaluation are part of safe quality control

### 4. GitHub Copilot Model Guidance

Sources:

- [Model comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison)
- [Changing the AI model for GitHub Copilot coding agent](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/changing-the-ai-model)

Key takeaways for this onboarding:

- different models can be better for different tasks
- model choice should be framed as practical task fit, not prestige
- learners may encounter multiple models in enterprise subscriptions, so onboarding should explain that calmly

### 5. NIST AI Risk Management Framework

Source:

- [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)

Key takeaways for this onboarding:

- trustworthiness and risk management should be built into design, use, and evaluation
- governance belongs in the operating model, not as an afterthought
- learners should understand that safe AI use includes review, oversight, and accountability

### 6. OWASP Top 10 for LLM Applications

Source:

- [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)

Key takeaways for this onboarding:

- excessive agency is a real risk, so agent capability should stay bounded
- prompt/context abuse and sensitive information exposure should be treated as normal design concerns
- "safe by default" matters even for training and sandbox experiences

## How To Use These References

- use them to refine lesson content and facilitator wording
- prefer plain-English teaching first, technical language second
- keep examples practical and enterprise-aware
- update this file when the package adopts new external guidance

