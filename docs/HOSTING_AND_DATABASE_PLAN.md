# Hosting, Sharing, Database and Deployment Plan

## Target architecture
GitHub repository -> web host such as Vercel -> application -> managed backend such as Supabase when cloud sync is needed.

This is a candidate architecture, not a permanent provider lock. Codex must verify current pricing, limits, compatibility and free-tier availability before committing to a provider.

## Hosting
The current static site can be deployed by a static-capable host. For authentication, server-side features and a database, Codex may migrate to a framework-based app when that materially improves maintainability.

The host should support Git-based deployment, preview environments, environment variables, production deployments and future server/API needs.

Vercel is one candidate. Its documented preview-deployment workflow supports branch-based previews, and its environment settings support separate environment scopes. Verify current behavior before implementation.

References:
https://vercel.com/academy/svelte-on-vercel/preview-deployments
https://vercel.com/academy/vercel-foundations/vercel-settings

## Database
A managed Postgres backend is appropriate when account-backed progress and cross-device synchronization become necessary. Supabase is one candidate because it combines Postgres and Auth with additional backend capabilities.

References:
https://supabase.com/docs/guides/auth
https://supabase.com/docs/guides/database/overview
https://supabase.com/docs/guides/database/postgres/row-level-security
https://supabase.com/docs/guides/realtime/authorization

## Security
If browser clients access database tables directly:
- enable RLS on every exposed table;
- create explicit policies;
- test allowed and denied operations;
- never expose server/service secrets in browser code.

Use server-side/edge functions for privileged operations.

## Suggested data domains
profiles; user_progress; phase_progress; study_sessions; user_notes; user_projects; project_members; project_tasks; public_shares.

Canonical curriculum and project documentation remain in GitHub.

## Public sharing
Possible modes:
1. public curriculum;
2. public read-only project showcase;
3. private personal dashboard;
4. authenticated shared project workspace.

Public URLs must never expose private notes or personal progress accidentally.

## Realtime
Realtime is optional. Use it only when simultaneous multi-user updates actually require it.

## Deployment workflow
1. GitHub is source of truth.
2. Main represents production-ready code.
3. Meaningful work uses branches.
4. Preview is tested before merge where supported.
5. Merge to main.
6. Production deploys.
7. Database migrations are applied in a controlled, versioned way.
8. Verify production.

## Secrets
Never commit database passwords, service-role keys, private API keys or signing secrets. Keep provider configuration in environment variables with safe local placeholders.