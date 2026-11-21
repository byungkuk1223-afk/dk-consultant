<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# BUILD RULE — English and Korean must change together (never skip)

The site is bilingual. English pages are at `/…`, Korean pages at `/ko/…`; both render the same components.
Displayed text goes through `tr()` and the Korean text is looked up **by the exact English string** in
`i18n/ko/*.json`. If an English string changes and its Korean entry does not, that line silently shows
in English on the Korean page. There is no runtime error.

Whenever you add or change any displayed English text (data files, page/component text, labels, alt text):

1. Add or update the Korean entry in `i18n/ko/*.json` in the same commit. The key is the new English
   string, character for character. Remove the old key if the old English text is gone.
   - Data files (`data/*.ts`, `data/insights/*.json`) → the matching `i18n/ko/<file>.json`
     (`projectProfiles.ts` → `profiles.json`); page and component text → `ui.json`.
   - Text deliberately kept in English on /ko (names, e-mail, company name) → `keep.json`.
   - Placeholders such as `{n}` and `{market}` must appear in the Korean text too.
2. Wrap new displayed strings in `tr(...)` and internal links in `lnk(...)` (from `useI18n()` in `lib/i18n.tsx`).
3. Run `npm run i18n:check` and fix everything it lists before pushing.
4. Open the changed page under `/ko` and look for leftover English. The check does not see plain strings
   in component constants that are rendered through `tr(x.field)`.
5. New pages: add `app/ko/<path>/page.tsx` that re-exports the English page
   (`export { default } from "@/app/(en)/<path>/page";`).
