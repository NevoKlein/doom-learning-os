# Provider Setup Checklist

This checklist is for the future cloud transition. Provider choice must be re-verified at implementation time.

## Web host
- Connect the GitHub repository to the selected host.
- Set the production branch to main.
- Configure preview deployments for development branches where supported.
- Add environment variables through the provider dashboard.
- Verify production and preview environments separately.

## Supabase or equivalent backend
- Create the project.
- Apply version-controlled migrations.
- Enable and test RLS on every exposed table.
- Configure authentication providers.
- Add only safe browser-visible keys to the frontend environment.
- Keep privileged keys server-side.
- Test cross-user isolation.
- Test public-share isolation.

## Migration from static localStorage
- Detect existing localStorage progress.
- Let the signed-in user import/sync it once.
- Verify counts and notes.
- Keep a downloadable backup.
- Do not delete the local copy until cloud data is verified.

## Production verification
- Fresh account signup/login.
- Existing user migration.
- Progress sync on two devices.
- Notes sync.
- Sign-out/sign-in persistence.
- Private data cannot be read by another user.
- Public share exposes only explicitly shared information.
- Preview deployment works without exposing production secrets.
