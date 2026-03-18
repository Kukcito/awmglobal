# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

AWM Global corporate presentation — a React 19 + TypeScript SPA inside `awm-presentation/`. No backend, no database, no Docker required. All commands run from `awm-presentation/`.

### Commands reference

| Action | Command | Notes |
|--------|---------|-------|
| Install deps | `npm install` | Uses `package-lock.json` |
| Dev server | `npm run dev` | Vite on port 5173 |
| Lint | `npm run lint` | ESLint 9 flat config |
| Build | `npm run build` | `tsc -b && vite build` |
| Preview | `npm run preview` | Serves production build |

### Non-obvious notes

- The app is a single `awm-presentation/` directory inside the repo root; there is no root-level `package.json`. Always `cd awm-presentation` or set `working_directory` before running npm commands.
- No automated tests are configured (`package.json` has no `test` script). Validation is done via lint, build, and manual browser testing.
- The app loads Montserrat font and stock images from external CDNs (Google Fonts, Unsplash). If the VM has no internet access, the slides will render but with fallback fonts and broken images.
- PDF generation (`jsPDF` + `html2canvas`) processes all 27 slides sequentially and takes 1-2 minutes in the browser.
