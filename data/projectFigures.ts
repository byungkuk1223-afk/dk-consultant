// DKC site-visit photos shown in the body of a project page (/projects/[id]), with a caption.
// Captions are display text: add the Korean caption to i18n/ko/ui.json (npm run i18n:check catches a missing one).
export const PROJECT_FIGURE: Record<number, { src: string; caption: string }> = {
  63: { src: "/img/site/dkc-alberta-co2-pipeline.jpg", caption: "DKC site visit, Alberta, July 2025: marker on an existing CO₂ pipeline route." },
};
