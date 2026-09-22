# Architecture

## Current
Dependency-light static web app. index.html contains UI, CSS, JavaScript and baseline curriculum data. Browser localStorage stores progress and notes.

## Target
Git repository stores canonical learning/project content. Web application provides the learning interface. Optional managed backend stores account-specific progress and collaboration state.

## Data boundary
GitHub: curriculum, resources, project strategy, research, decisions and changelog.
Database: users, personal progress, personal notes, study sessions and collaboration state.

## Safety
Never silently discard localStorage. Any schema/storage change needs migration or an explicit safe compatibility path.

## Technology flexibility
Vercel/Supabase are candidate providers, not fixed requirements. Choose the simplest current architecture that satisfies the product requirements.