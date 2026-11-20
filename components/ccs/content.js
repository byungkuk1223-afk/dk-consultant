/* DKC CCS hero — stage text, title-block metrics, and animated mini charts.
 * Metrics follow the DKC corporate brochure. Rules (see 홈페이지_확인필요사항.md):
 *  - the Alaska project (TECC) is not named until the client agrees to publication;
 *  - experience gained by DKC people with previous employers is labelled "team experience";
 *  - external statistics carry their source.
 */

export const HERO_COPY = {
  band: { left: "DK CONSULTANTS · POWER PLANT & ENVIRONMENT", right: "OWNER-SIDE INTEGRATED ADVISORY · CCS & THERMAL" },
  tag: "INTEGRATED PROJECT DEVELOPMENT ADVISORY",
  headline: "Advancing Power & Environmental Projects, from Vision to Execution",
  sub: "Combining plant engineering, commercial structuring, and project finance in one team on the owner's side—resolving critical power-to-CCS interfaces before EPC award.",
  ctaPrimary: { label: "Explore Our Services", href: "/services" },
  ctaSecondary: { label: "Advisory Inquiry", href: "/contact" },
  heads: ["01 SYSTEM SCOPE", "02 KEY METRICS", "03 PROCESS / FLOW DIAGRAM", "04 DKC ADVISORY ROLE"],
};

export const STAGE_CONTENT = [
  {
    no: "01", pill: "Host Plant", title: "Host Power Plant",
    metrics: [
      { v: "Baseload", n: "Design basis for decades of dispatchable capacity" },
      { v: "4 × 550 MWe", n: "CFB boilers, Samcheok Green Power · team experience (KEPCO E&C AE)" },
    ],
    chart: "output",
    desc: "Defines site configuration, boiler / CFBC design basis, and EPC scope for decades of dispatchable baseload capacity.",
  },
  {
    no: "02", pill: "Interfaces", title: "Plant–CCS Interfaces",
    metrics: [
      { v: "4 Battery Limits", n: "Steam · Power · Flue gas · Water" },
      { v: "Pre-EPC", n: "Interfaces resolved before EPC award" },
    ],
    chart: "interfaces",
    desc: "Amber links govern net output, steam balance, and CAPEX—resolved across disciplines before the EPC tender award.",
  },
  {
    no: "03", pill: "CCS & Storage", title: "Capture & Storage",
    metrics: [
      { v: "1 Mt/yr", n: "Blue ammonia with CCS, Alberta · DKC-led feasibility study" },
      { v: "300 t/day", n: "CO₂ capture at an operating CHP plant, 99.9% purity · team experience (SGC Energy)" },
    ],
    chart: "process",
    desc: "Screens capture technologies against host-plant constraints and checks supplier guarantees, compression specifications, and storage readiness.",
  },
  {
    no: "04", pill: "Bankability", title: "Bankable Execution",
    metrics: [
      { v: "77 + 734", n: "CCS facilities operating + in development (Global CCS Institute, 2025)" },
      { v: "1 Baseline", n: "Three workstreams: technical, commercial, financial" },
    ],
    chart: "converge",
    desc: "Aligns technical scope, risk-allocated contracts, and lender financial models under one project director to reach financial close.",
  },
];

/* Mini charts: SVG markup with classes animated by CSS (.ck-grid, .ck-draw, .ck-rise, .ck-mark). viewBox 240 × 112. */
const AX = '<g class="ck-grid"><line x1="18" y1="96" x2="232" y2="96"/><line x1="18" y1="10" x2="18" y2="96"/>' +
  [30, 52, 74].map((y) => `<line class="ck-gl" x1="18" y1="${y}" x2="232" y2="${y}"/>`).join("") + "</g>";

export function chartSvg(type) {
  if (type === "output") {
    return `<svg viewBox="0 0 240 112" aria-hidden="true">${AX}
      <g class="ck-rise" style="--c:rgba(51,78,104,.55)">
        <rect x="40" y="22" width="34" height="74"/><rect x="104" y="72" width="34" height="24" style="fill:rgba(217,119,6,.55)"/><rect x="168" y="44" width="34" height="52"/>
      </g>
      <path class="ck-draw" pathLength="1" d="M30 22 L222 22"/>
      <g class="ck-mark"><text x="57" y="108" text-anchor="middle">Gross</text><text x="121" y="108" text-anchor="middle">Auxiliary</text><text x="185" y="108" text-anchor="middle">Net output</text>
      <text x="226" y="17" text-anchor="end">design basis</text></g></svg>`;
  }
  if (type === "interfaces") {
    const rows = [["Flue gas", 26], ["LP steam", 46], ["Aux. power", 66], ["Cooling water", 86]];
    return `<svg viewBox="0 0 240 112" aria-hidden="true">
      <g class="ck-grid"><rect x="8" y="14" width="56" height="84" rx="2"/><rect x="176" y="14" width="56" height="84" rx="2"/></g>
      ${rows.map(([t, y], i) => `<path class="ck-draw amber" pathLength="1" d="M64 ${y} L172 ${y}" style="animation-delay:${1.3 + i * 0.18}s"/><path class="ck-mark amberfill" d="M168 ${y - 3.5} L176 ${y} L168 ${y + 3.5}Z"/><text class="ck-mark" x="120" y="${y - 4}" text-anchor="middle">${t}</text>`).join("")}
      <g class="ck-mark"><text x="36" y="58" text-anchor="middle">Host</text><text x="36" y="70" text-anchor="middle">plant</text><text x="204" y="58" text-anchor="middle">Capture</text><text x="204" y="70" text-anchor="middle">plant</text></g></svg>`;
  }
  if (type === "process") {
    const d = "M20 92 L70 92 L70 70 L120 70 L120 48 L170 48 L170 26 L226 26";
    return `<svg viewBox="0 0 240 112" aria-hidden="true">${AX}
      <path class="ck-rise" d="${d} L226 96 L20 96 Z" style="--c:rgba(13,148,136,.32)"/>
      <path class="ck-draw teal" pathLength="1" d="${d}"/>
      <g class="ck-mark"><circle cx="70" cy="70" r="2.6"/><circle cx="120" cy="48" r="2.6"/><circle cx="170" cy="26" r="2.6"/>
      <text x="44" y="86" text-anchor="middle">Capture</text><text x="95" y="64" text-anchor="middle">Compress</text><text x="145" y="42" text-anchor="middle">Liquefy</text><text x="198" y="20" text-anchor="middle">Store</text></g></svg>`;
  }
  // converge
  return `<svg viewBox="0 0 240 112" aria-hidden="true">
    <path class="ck-draw" pathLength="1" d="M20 24 C110 24 140 56 196 56"/>
    <path class="ck-draw amber" pathLength="1" d="M20 56 L196 56" style="animation-delay:1.45s"/>
    <path class="ck-draw teal" pathLength="1" d="M20 88 C110 88 140 56 196 56" style="animation-delay:1.6s"/>
    <g class="ck-mark"><circle cx="200" cy="56" r="5" class="navy"/><text x="20" y="18">Technical</text><text x="20" y="50">Commercial</text><text x="20" y="104">Financial</text>
    <text x="236" y="76" text-anchor="end">single baseline</text></g></svg>`;
}

export const CHART_CSS = `
.ck svg{display:block;width:100%;height:auto;overflow:visible}
.ck text{font:600 8.6px Lato,Arial,sans-serif;fill:rgba(30,27,23,.72);letter-spacing:.02em}
.ck .ck-grid line,.ck .ck-grid rect{stroke:rgba(30,27,23,.5);stroke-width:.8;fill:none;opacity:0;animation:ckFade .5s ease .5s forwards}
.ck .ck-grid .ck-gl{stroke:rgba(30,27,23,.1);stroke-width:.5}
.ck .ck-draw{fill:none;stroke:rgba(11,37,69,.9);stroke-width:1.5;stroke-dasharray:1;stroke-dashoffset:1;animation:ckDraw 1.3s ease 1.3s forwards}
.ck .ck-draw.amber{stroke:rgba(217,119,6,.95)} .ck .ck-draw.teal{stroke:rgba(13,148,136,.95)}
.ck .ck-rise{fill:var(--c);transform-box:fill-box;transform-origin:50% 100%;transform:scaleY(0);animation:ckRise 1.3s ease 2.2s forwards}
.ck .ck-rise rect{fill:var(--c)}
.ck .ck-mark{opacity:0;animation:ckFade .5s ease 3s forwards}
.ck .amberfill{fill:rgba(217,119,6,.95)} .ck circle{fill:rgba(13,148,136,.95)} .ck circle.navy{fill:#0b2545}
@keyframes ckDraw{to{stroke-dashoffset:0}} @keyframes ckRise{to{transform:scaleY(1)}} @keyframes ckFade{to{opacity:1}}
@media (prefers-reduced-motion: reduce){.ck *{animation-duration:.01s!important;animation-delay:0s!important}}
`;
