// Builds the standalone, offline hero prototype (dkc-ccs-hero.html) from the same modules the website uses:
// components/ccs/engine.js, content.js, styles.js. No external libraries, fonts, or CDNs.
// usage: node scripts/build-hero-prototype.mjs <out.html> [siteBaseUrl]
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, "..", "components", "ccs");
const strip = (f) => fs.readFileSync(path.join(dir, f), "utf8").replace(/^export /gm, "");
const out = process.argv[2] || "dkc-ccs-hero.html";
const base = (process.argv[3] || "https://dk-consultant.vercel.app").replace(/\/$/, "");

const controller = `
(function () {
  const root = document.getElementById("hero");
  const C = HERO_COPY;
  root.innerHTML = \`
    <canvas class="ccs-cv" aria-hidden="true"></canvas>
    <div class="ccs-band"><span>\${C.band.left}</span><span class="ccs-band-r">\${C.band.right}</span>
      <button type="button" class="ccs-state"><i class="a"></i> <span>AUTO LOOP</span></button></div>
    <div class="ccs-panel">
      <p class="ccs-tag">\${C.tag}</p><h1 class="ccs-h1">\${C.headline}</h1><p class="ccs-sub">\${C.sub}</p>
      <div class="ccs-ctas"><a class="ccs-btn pri" href="${base}\${C.ctaPrimary.href}">\${C.ctaPrimary.label}</a>
        <a class="ccs-btn sec" href="${base}\${C.ctaSecondary.href}">\${C.ctaSecondary.label}</a></div>
      <div class="ccs-pills" role="tablist">\${STAGE_CONTENT.map((s, i) => '<button type="button" role="tab" class="ccs-pill" data-i="' + i + '"><b>' + s.no + '</b> ' + s.pill + '<span class="ccs-bar"><span></span></span></button>').join("")}</div>
    </div>
    <div class="ccs-tb" aria-live="polite">
      <div class="ccs-cell"><p class="ccs-hd">\${C.heads[0]}</p><div class="slot1"></div></div>
      <div class="ccs-cell"><p class="ccs-hd">\${C.heads[1]}</p><div class="slot2"></div></div>
      <div class="ccs-cell ccs-c3"><p class="ccs-hd">\${C.heads[2]}</p><div class="slot3"></div></div>
      <div class="ccs-cell ccs-c4"><p class="ccs-hd">\${C.heads[3]}</p><div class="slot4"></div></div>
    </div>\`;
  const $ = (s) => root.querySelector(s);
  const pills = [...root.querySelectorAll(".ccs-pill")], bars = pills.map((p) => p.querySelector(".ccs-bar span"));
  const state = $(".ccs-state");
  let cur = -1;
  function setStage(i) {
    if (i === cur) return; cur = i;
    const s = STAGE_CONTENT[i];
    pills.forEach((p, k) => { p.classList.toggle("on", k === i); p.setAttribute("aria-selected", k === i); });
    $(".slot1").innerHTML = '<div class="ccs-in"><p class="ccs-no">' + s.no + '</p><p class="ccs-tt">' + s.title + '</p></div>';
    $(".slot2").innerHTML = '<div class="ccs-in">' + s.metrics.map((m) => '<div class="ccs-met"><p class="v">' + m.v + '</p><p class="n">' + m.n + '</p></div>').join("") + '</div>';
    $(".slot3").innerHTML = '<div class="ck">' + chartSvg(s.chart) + '</div>';
    $(".slot4").innerHTML = '<div class="ccs-in"><p class="ccs-ds">' + s.desc + '</p></div>';
  }
  function showPaused(p) { state.querySelector("i").className = p ? "p" : "a"; state.querySelector("span").textContent = p ? "PAUSED" : "AUTO LOOP"; }
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const eng = createCcsEngine($(".ccs-cv"), {
    reducedMotion: reduced, pointerTarget: root,
    getArea: (W, H) => {
      const tb = $(".ccs-tb").offsetHeight, panel = $(".ccs-panel");
      if (W < 900) { const top = panel.offsetTop + panel.offsetHeight + 8; return { x: 16, y: top, w: W - 32, h: Math.max(160, H - top - tb - 16) }; }
      return { x: W * 0.41, y: 64, w: W * 0.57, h: H - tb - 92 };
    },
    onStage: setStage,
    onTick: (i, p) => bars.forEach((b, k) => { b.style.width = k < i ? "100%" : k === i ? (p * 100).toFixed(1) + "%" : "0%"; }),
  });
  if (reduced) { eng.pause(); showPaused(true); }
  pills.forEach((p, i) => p.addEventListener("click", () => {
    if (i === cur) { showPaused(eng.toggle()); return; }
    eng.goTo(i); eng.pause(); showPaused(true);
  }));
  state.addEventListener("click", () => showPaused(eng.toggle()));
  new ResizeObserver(() => eng.resize()).observe(root);
})();`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>DK Consultants — CCS Hero Prototype</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#F8F9FA;font-family:'Helvetica Neue',Arial,sans-serif}
a{text-decoration:none}
${strip("styles.js").replace(/^[\s\S]*?const HERO_CSS = `/, "").replace(/`;\s*$/, "")}
.ccs-hero{margin-top:0}
.ccs-h1,.ccs-no,.ccs-tt,.ccs-met .v{font-family:Georgia,'Times New Roman',serif}
${strip("content.js").match(/CHART_CSS = `([\s\S]*?)`;/)[1]}
</style>
</head>
<body>
<section id="hero" class="ccs-hero" aria-label="DKC power plant and carbon capture advisory"></section>
<script>
${strip("engine.js")}
${strip("content.js")}
${controller}
</script>
</body>
</html>
`;
fs.writeFileSync(out, html);
console.log("written", out, (html.length / 1024).toFixed(1) + " KB");
