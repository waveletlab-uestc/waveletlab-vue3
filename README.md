# ICCWAMTIP 2026 Vue3 Site

This folder contains the Vue 3 refactor of the original static HTML conference site.

## Stack

- Vue 3
- Vite
- Vue Router
- Element Plus

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static assets from the original site are copied into `public/`, including `images/`, `doc/`, `acceptance-notifications/`, `booklet.pdf`, and `CNAME`.

The GitHub Pages workflow is defined at `.github/workflows/deploy-vue3-site.yml` in the repository root.
