# Security Policy

## Core rules
- Do not commit credentials, tokens, passwords or private API keys.
- Do not expose Supabase service-role or equivalent privileged credentials to browser code.
- Protect every client-exposed database table with appropriate RLS policies.
- Test both allowed and denied access paths.
- Keep private notes/progress separate from public share data.
- Validate public-share permissions explicitly.
- Keep dependency versions maintained and review security advisories when making releases.

## Data safety
Never silently delete or overwrite user progress during migrations. Back up before destructive schema changes and provide a recoverable migration path.

## Reporting
Document security-relevant changes in the changelog and review them before production deployment.
