# AGENTS.md

## Scope

These instructions apply to the entire repository. This is the Vue 3 source for the bilingual ICCWAMTIP 2026 conference website deployed to GitHub Pages.

Read `维护指南.md` for the human-facing maintenance workflow. Treat the repository's current files and scripts as the source of truth if documentation and code ever disagree.

## Project facts

- Stack: Vue 3, Vite, Vue Router, Element Plus.
- Required CI runtime: Node.js 22 with npm.
- Default branch: `main`.
- Production domain: `https://waveletlab.cn/`.
- Content languages: English (`messages.en`) and Chinese (`messages.zh`).
- Content and most conference data: `src/i18n/index.js`.
- CI/CD workflow: `.github/workflows/deploy.yml`.
- Build output: `dist/`; never edit or commit it.

## Start every task this way

1. Read the user's request and inspect `git status --short` before editing.
2. Preserve pre-existing user changes. Do not discard, overwrite, reformat, or stage unrelated work.
3. Search the repository for the old value, related dates, filenames, links, and translation keys before deciding the change scope. Prefer `rg` and `rg --files`.
4. Inspect the consumer component or page before changing a data shape.
5. Make the smallest coherent change that satisfies the request.

If the request is ambiguous, use repository evidence to make safe, local assumptions. Ask before acting only when different interpretations would materially change published content or require external authority.

## Repository map

| Path | Purpose |
| --- | --- |
| `src/i18n/index.js` | English/Chinese copy, news, dates, people, shared links, download URLs |
| `src/pages/*.vue` | Page-specific structure |
| `src/components/*.vue` | Shared header, footer, sidebar, tables, banners, and layout |
| `src/assets/styles.css` | Global and responsive styles |
| `src/router/index.js` | Vue Router routes and localized page titles |
| `scripts/copy-routes.mjs` | Generates `404.html` and legacy `.html` entries after Vite builds |
| `public/` | Small static files copied to the deployed site |
| `.github/workflows/deploy.yml` | PR CI and `main` GitHub Pages deployment |
| `维护指南.md` | Complete human maintenance and release guide |

## Content editing rules

### Bilingual data

- Keep `messages.en` and `messages.zh` object shapes and keys aligned.
- Update both languages for user-visible copy, dates, news, navigation, speakers, and page data unless the user explicitly requests one language only.
- Use existing ISO date formatting (`YYYY-MM-DD`) for news item `date` fields.
- Keep `latestNews` in reverse chronological order.
- Do not rewrite historical news merely to match the current deadline. Historical entries record what was announced at that time.
- After date or text changes, search for old English and Chinese variants and report intentionally retained occurrences.
- Preserve `t()` for scalar translated values and `tm()` for arrays/objects unless a structural refactor is explicitly needed.

### Shared values

Prefer the existing shared constants near the top of `src/i18n/index.js` instead of duplicating language-independent data:

- `sharedConferenceLinks`: email, phone, CMT URL, instructions;
- `catalogNumbers`: publication identifiers;
- `speakerImages`: speaker image paths;
- `committeeMembers`: shared member lists;
- `assetCdnBase`, `latexTemplateUrl`, `bookletUrl`: external assets.

Search for hard-coded duplicates after changing a shared value.

### Pages, components, and routes

- Reuse shared components rather than duplicating markup across pages.
- Follow the existing Vue Composition API and `<script setup>` patterns.
- Preserve accessibility attributes, semantic elements, localized labels, and keyboard/focus behavior.
- Put broadly shared styling in `src/assets/styles.css` and follow existing responsive breakpoints.
- When adding a `.html` page route, update all relevant locations:
  1. create the page in `src/pages/`;
  2. register it in `src/router/index.js`;
  3. add matching English and Chinese route/navigation data;
  4. add the filename to `scripts/copy-routes.mjs`;
  5. verify the built `dist/<route>.html` exists.

## Static asset rules

- Keep only small, site-critical assets in `public/`, such as logos, speaker photos, `CNAME`, and the existing local instruction PDF.
- Do not add large PDFs, archived conference material, or frequently versioned downloads to this repository.
- Public downloads belong in `waveletlab-uestc/oos`, organized by year/type where possible.
- Use immutable URLs pinned to a full commit SHA. Do not publish jsDelivr URLs using `@main`.
- Use jsDelivr for GitHub-hosted files smaller than 20 MB:
  `https://cdn.jsdelivr.net/gh/<owner>/<repo>@<full-sha>/<path>`
- jsDelivr returns 403 for individual files over 20 MB. Use a full-SHA GitHub Raw URL or an approved object store for those files.
- When replacing a resource, use a versioned filename, validate HTTP status/file type/size, and search for the old filename and SHA.
- `public/CNAME` must remain `waveletlab.cn` unless the user explicitly requests and authorizes a domain migration.

Network checks may require user approval in restricted environments. Do not claim a remote URL was verified if it was not actually checked.

## Validation

For every code or content change, run from the repository root:

```bash
npm run build
git diff --check
git status --short
git diff -- <changed-files>
```

Also perform task-specific checks:

- Dates/text: `rg` for old and new English/Chinese variants.
- Links/assets: check remaining old filenames/SHAs and validate remote responses when access is available.
- New routes: verify the corresponding `dist/*.html` file exists after building.
- Layout changes: inspect affected pages at desktop/mobile sizes and in both languages when browser tooling is available.
- Dependency changes: ensure both `package.json` and `package-lock.json` are correct. Pure content changes must not modify dependency files.

There is currently no separate automated test or lint script. Do not report tests or lint as passing unless such scripts are added and actually run. The production build is the required baseline check.

## CI/CD behavior

`.github/workflows/deploy.yml` is both CI and CD:

- Pull requests targeting `main`: install with `npm ci`, build, and verify the production entry; do not upload or deploy Pages.
- Pushes to `main`: perform the same build, upload `dist`, then deploy the `github-pages` environment.
- `workflow_dispatch`: allows a manual build and deployment.

Do not commit `dist/`, replace the Pages workflow with branch-directory publishing, weaken production verification, change Pages permissions, or change the deployment branch unless the task explicitly requires it.

## Git and safety boundaries

- Do not commit, push, open/merge PRs, delete branches, or change remote state unless the user explicitly asks.
- Never push directly to `main` or force-push unless the user gives explicit, specific authorization.
- Do not discard dirty work with `git reset --hard`, `git checkout --`, `git restore`, cleaning commands, or destructive file deletion.
- Do not modify unrelated files just to reformat or modernize them.
- Do not add secrets, tokens, local environment files, `node_modules/`, or `dist/`.
- Use `apply_patch` for manual file edits. Treat generated outputs as verification artifacts only.
- For a rollback, prefer a reviewed `git revert`/revert PR over rewriting shared history.

## Completion report

At the end of a task, state concisely:

1. what changed and which files contain the change;
2. which verification commands were run and whether they passed;
3. any old values intentionally retained and why;
4. anything not verified, especially remote links or visual behavior;
5. the next human action, such as reviewing the diff, opening a PR, or checking the Pages deployment.

Never say a site is deployed merely because the local build succeeded. Deployment is complete only after the relevant `main` GitHub Actions run succeeds and the production URL is checked.
