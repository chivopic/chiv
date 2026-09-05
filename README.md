# Chiv personal site scaffold

Minimal Next.js App Router personal site with TypeScript, Tailwind CSS, MDX, and syntax highlighting. No database, CMS, or auth.

DNS note: chiv.blog is not connected yet. The canonical URL in lib/site.ts is the Vercel placeholder https://chiv-chivopic.vercel.app until a custom domain is wired up.

## Structure

- app/ — routes (App Router)
- components/ — SiteHeader, SiteFooter, ThemeToggle, lists, Prose
- content/projects/ — project stubs (Markdown + frontmatter)
- content/writing/ — writing stubs (Markdown/MDX + frontmatter)
- lib/ — site config + content/MDX helpers
- public/ — static assets

## Commands

1. Install dependencies
2. Start the development server (port 3000)
3. Run a production build, then start the server

Package scripts: install, run:dev, run:build, start — see package.json.

## Add a project

Create content/projects/my-project.md with frontmatter: title, summary, tags, optional github/demo, optional featured. Featured projects show on the home page; all appear on /projects.

## Add a writing post

Create content/writing/my-post.md (or .mdx) with title, date (YYYY-MM-DD), summary, then the body. Visit /writing/my-post. The RSS feed at /feed.xml updates from the same files.

## Theme and site config

Dark/light mode via next-themes (components/ThemeToggle.tsx). Edit name, links, and exploring tags in lib/site.ts.

## Copy into a git repo

This scaffold is plain files (no git init here). Copy the tree excluding dependency folders and build output into chivopic/chiv (or another repo), then install and build there. Prefer copying into an existing clone rather than pushing from this machine.
