# Database Schema Blueprint

Planning document only. Review before applying to production.

## Core relationships
Auth users -> profiles -> user progress, phase progress, study sessions, notes and projects.
Projects -> members, project tasks and optional public shares.

## Suggested tables

### profiles
id, display_name, created_at, updated_at

### user_progress
user_id, task_id, status, completed_at, notes, updated_at
Primary key: user_id + task_id

### phase_progress
user_id, phase_id, status, started_at, completed_at, updated_at
Primary key: user_id + phase_id

### study_sessions
id, user_id, phase_id, task_id, session_type, started_at, ended_at, minutes, notes, created_at

### user_notes
id, user_id, scope_type, scope_id, body, updated_at

### user_projects
id, owner_user_id, name, slug, description, visibility, created_at, updated_at

### project_members
project_id, user_id, role, created_at

### project_tasks
project_id, task_id, status, assignee_user_id, notes, updated_at

### public_shares
id, project_id, share_slug, permission, expires_at, enabled, created_at

## Security
Enable RLS for every client-exposed table. Policies should use auth.uid(), ownership and project membership/roles as appropriate. Public sharing must be explicitly scoped.

Every policy must be tested for allowed and denied select/insert/update/delete operations.

Do not ship a database layer without access-control tests.