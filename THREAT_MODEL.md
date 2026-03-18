# Threat Model

## Assets

- onboarding content and facilitator instructions
- local learner progress and feedback
- org overlay configuration
- diagnostics export files

## Trust Boundaries

- workspace package content is shared and updateable
- learner state is local to the user's machine
- survey submission is outside the package and user initiated
- MCP connectivity is controlled by approved org configuration

## Primary Risks

1. Supply chain risk from package distribution
2. Accidental storage of secrets in feedback or diagnostics
3. Overly broad MCP examples leading to unsafe access
4. Confusing local versus remote execution boundaries
5. Drift between package guidance and real enterprise policy

## Mitigations

- content-first package design with minimal runtime code
- local-only storage by default
- redacted diagnostics export
- approved MCP template allowlist
- org overlay for internal policy
- explicit human escalation guidance
- tests for state handling and export redaction boundaries

