/* DKC CCS hero — axonometric CAD engine (Canvas 2D, no dependencies).
 * Draws a coal-fired host plant, the plant–CCS interfaces, twin capture towers, and CO2 compression & storage as a
 * wireframe; each stage moves the camera, strokes the new members line by line, fills them from the bottom up, and
 * places two-segment leader labels anchored to 3D points.
 * Shared by the website (components/ccs/CcsHero.tsx) and the standalone prototype (dkc-ccs-hero.html).
 */

export const STAGE_SECONDS = 4.8;

const INK = [30, 27, 23];
const COL = {
  A: { rgb: [51, 78, 104], a: 0.28 }, // slate blue — host plant
  B: { rgb: [217, 119, 6], a: 0.44 }, // amber — interfaces
  C: { rgb: [13, 148, 136], a: 0.35 }, // emerald — capture towers
  D: { rgb: [13, 148, 136], a: 0.35 }, // emerald — compression & storage
};

// ───────────────────────────────────────── stages (camera, groups, labels)
export const STAGES = [
  {
    key: "host",
    cam: { az: -128, el: 24 },
    show: ["A"], ghost: [], add: ["A"], fill: ["A"], focus: ["A"],
    calls: [
      { at: [-31, -6, 39], text: "Boiler / CFBC", dir: "nw" },
      { at: [-24, 9, 16.5], text: "Steam Turbine", dir: "ne" },
      { at: [-58, 18, 26], text: "Cooling Tower", dir: "nw" },
      { at: [6, 40, 22], text: "Switchyard", dir: "ne" },
    ],
  },
  {
    key: "interfaces",
    cam: { az: -104, el: 33 },
    show: ["A", "B"], ghost: ["C", "D"], add: ["B"], fill: ["B"], focus: ["A", "B", "C"],
    calls: [
      { at: [-8, -8, 31.5], text: "Flue Gas Duct", dir: "nw" },
      { at: [6, 1, 12.6], text: "LP Steam Extraction", dir: "ne" },
      { at: [20, 14, 8.3], text: "Auxiliary Power", dir: "e" },
      { at: [-24, 12, 1.6], text: "Cooling Water", dir: "sw" },
    ],
  },
  {
    key: "ccs",
    cam: { az: -58, el: 25 },
    show: ["A", "B", "C", "D"], ghost: [], add: ["C", "D"], fill: ["C", "D"], focus: ["B", "C", "D"],
    calls: [
      { at: [18, -6, 42], text: "Twin Absorber Towers", dir: "nw" },
      { at: [37, -8, 11.5], text: "CO₂ Compression", dir: "ne" },
      { at: [41, 9, 15], text: "Liquefaction & Storage", dir: "e" },
      { at: [68, -8, 1.5], text: "Transport Pipeline", dir: "ne" },
    ],
  },
  {
    key: "bankable",
    cam: { az: -140, el: 40 },
    show: ["A", "B", "C", "D"], ghost: [], add: [], fill: [], focus: ["A", "B", "C", "D"],
    calls: [
      { at: [-31, -6, 39], text: "Technical Management", dir: "w", conv: true },
      { at: [4, -8, 20], text: "Commercial & Contracts", dir: "sw", conv: true },
      { at: [41, 9, 15], text: "Project Finance", dir: "e", conv: true },
    ],
    converge: "Single Baseline",
  },
];

// ───────────────────────────────────────── vector helpers
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const nrm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ease = (x) => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
const eio = (x) => { x = clamp(x, 0, 1); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
const ramp = (t, s, d) => clamp((t - s) / d, 0, 1);
const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

// ───────────────────────────────────────── scene
function buildScene() {
  const parts = [];
  const part = (g) => { const m = { g, faces: [], edges: [], revs: [], pipes: [] }; parts.push(m); return m; };
  const quad = (m, a, b, c, d) => m.faces.push([a, b, c, d]);
  const edge = (m, a, b) => m.edges.push([a, b]);
  const poly = (m, pts, closed) => { for (let i = 0; i < pts.length - 1; i++) edge(m, pts[i], pts[i + 1]); if (closed) edge(m, pts[pts.length - 1], pts[0]); };

  function hexa(m, c) { // c = 8 corners: bottom 0-3, top 4-7
    const [a, b, cc, d, e, f, g, h] = c;
    quad(m, a, b, cc, d); quad(m, e, f, g, h); quad(m, a, b, f, e); quad(m, b, cc, g, f); quad(m, cc, d, h, g); quad(m, d, a, e, h);
    poly(m, [a, b, cc, d], true); poly(m, [e, f, g, h], true); edge(m, a, e); edge(m, b, f); edge(m, cc, g); edge(m, d, h);
  }
  function box(m, x0, y0, z0, x1, y1, z1) {
    hexa(m, [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]]);
  }
  function beam(m, p0, p1, w, h) {
    const a = nrm(sub(p1, p0));
    const ref = Math.abs(a[2]) > 0.9 ? [1, 0, 0] : [0, 0, 1];
    const s = nrm(cross(a, ref)), t = cross(s, a);
    const q = (c) => [add(add(c, mul(s, -w / 2)), mul(t, -h / 2)), add(add(c, mul(s, w / 2)), mul(t, -h / 2)),
      add(add(c, mul(s, w / 2)), mul(t, h / 2)), add(add(c, mul(s, -w / 2)), mul(t, h / 2))];
    const A = q(p0), B = q(p1);
    hexa(m, [A[0], A[1], A[2], A[3], B[0], B[1], B[2], B[3]]);
  }
  function revolve(m, cx, cy, prof, n, ringsAt) {
    n = n || 24;
    const ring = (z, r) => { const out = []; for (let i = 0; i < n; i++) { const t = (i / n) * Math.PI * 2; out.push([cx + r * Math.cos(t), cy + r * Math.sin(t), z]); } return out; };
    const R = prof.map(([z, r]) => ring(z, r));
    for (let k = 0; k < R.length - 1; k++) for (let i = 0; i < n; i++) { const j = (i + 1) % n; quad(m, R[k][i], R[k][j], R[k + 1][j], R[k + 1][i]); }
    m.faces.push(R[R.length - 1].slice());
    (ringsAt || [0, R.length - 1]).forEach((k) => poly(m, R[k], true));
    m.revs.push({ cx, cy, prof });
  }
  const cylV = (m, cx, cy, z0, z1, r0, r1, n) => revolve(m, cx, cy, [[z0, r0], [z1, r1 == null ? r0 : r1]], n);
  const pipe = (m, pts, r) => { for (let i = 0; i < pts.length - 1; i++) m.pipes.push({ a: pts[i], b: pts[i + 1], r }); };
  function lattice(m, cx, cy, h, b0, b1, arm) { // transmission tower, lines only
    const lv = [0, h * 0.35, h * 0.62, h * 0.82, h];
    const sq = (z) => { const k = b0 + (b1 - b0) * (z / h); return [[cx - k, cy - k, z], [cx + k, cy - k, z], [cx + k, cy + k, z], [cx - k, cy + k, z]]; };
    const S = lv.map(sq);
    for (let i = 0; i < 4; i++) for (let k = 0; k < S.length - 1; k++) { edge(m, S[k][i], S[k + 1][i]); edge(m, S[k][i], S[k + 1][(i + 1) % 4]); }
    S.forEach((s) => poly(m, s, true));
    [h * 0.82, h].forEach((z, i) => { const L = arm * (i ? 0.75 : 1); poly(m, [[cx - L, cy, z], [cx + L, cy, z]]); });
  }

  // A — host power plant
  { const m = part("A");
    box(m, -66, -20, 0, -52, -6, 2.5); // coal yard
    beam(m, [-53, -12, 3], [-38, -8, 24], 1.8, 1.6); // inclined conveyor gallery
    [[-49, -11.1, 8.6], [-45, -10, 13.1], [-41, -8.8, 18]].forEach((p) => poly(m, [[p[0], p[1], 0], p])); }
  { const m = part("A"); box(m, -38, -14, 0, -24, 2, 38); box(m, -36, -12, 38, -26, 0, 41); } // boiler / CFBC house
  { const m = part("A"); cylV(m, -20.5, -10, 16, 34, 2.3, 2.0, 18); cylV(m, -20.5, -3.5, 16, 34, 2.3, 2.0, 18); } // cyclones
  { const m = part("A"); cylV(m, -31, -21, 0, 54, 2.2, 1.6, 20); } // stack
  { const m = part("A"); box(m, -38, 4, 0, -14, 14, 16); box(m, -14, 6, 0, -7, 12, 8.5); } // turbine hall + generator
  { const m = part("A"); revolve(m, -58, 18, [[0, 10], [7, 8.4], [15, 6.6], [21, 6.4], [27, 7.0]], 30, [0, 3, 4]); } // cooling tower
  { const m = part("A"); box(m, -10, 18, 0, 10, 32, 0.6);
    [-6, 0, 6].forEach((x) => { poly(m, [[x, 20, 0.6], [x, 20, 9], [x, 30, 9], [x, 30, 0.6]]); });
    lattice(m, -2, 38, 22, 2.2, 0.6, 4); lattice(m, 6, 44, 22, 2.2, 0.6, 4); poly(m, [[-6, 38, 18], [-2 - 4, 38, 18.04]]); }

  // B — plant–CCS interfaces
  { const m = part("B"); // pipe rack portals
    for (let x = -10; x <= 22; x += 4) { poly(m, [[x, 0, 0], [x, 0, 13]]); poly(m, [[x, 6, 0], [x, 6, 13]]); poly(m, [[x, 0, 13], [x, 6, 13]]); }
    poly(m, [[-10, 0, 13], [22, 0, 13]]); poly(m, [[-10, 6, 13], [22, 6, 13]]); }
  { const m = part("B"); beam(m, [-24, -8, 31.5], [4, -8, 31.5], 3, 3); beam(m, [4, -8, 33], [4, -8, 9], 3, 3); beam(m, [5.5, -8, 10.5], [8.8, -6.5, 10.5], 2.6, 2.6); } // flue gas duct
  { const m = part("B"); pipe(m, [[-14, 9, 12.6], [-6, 9, 12.6], [-6, 1, 12.6], [21, 1, 12.6], [21, -3.5, 12.6]], 0.55); } // LP steam
  { const m = part("B"); pipe(m, [[0, 20, 8.3], [0, 14, 8.3], [32, 14, 8.3], [32, -2, 8.3]], 0.3); } // auxiliary power
  { const m = part("B"); pipe(m, [[-50, 12, 1.6], [16, 12, 1.6], [16, -2, 1.6]], 0.8); } // cooling water

  // C — twin absorber & regenerator towers
  { const m = part("C"); revolve(m, 12, -6, [[0, 3.6], [42, 3.6]], 26); [14, 28].forEach((z) => revolve(m, 12, -6, [[z, 5.0], [z + 0.4, 5.0]], 26)); }
  { const m = part("C"); revolve(m, 24, -6, [[0, 2.8], [34, 2.8]], 24); [12, 24].forEach((z) => revolve(m, 24, -6, [[z, 4.2], [z + 0.4, 4.2]], 24)); }
  { const m = part("C"); beam(m, [15.6, -6, 36], [21.2, -6, 36], 1.6, 1.4); pipe(m, [[12, -6, 42.2], [12, -6, 44], [24, -6, 44], [24, -6, 34.2]], 0.45); box(m, 27, -10, 0, 31, -4, 5); }

  // D — compression, liquefaction, storage, pipeline
  { const m = part("D"); box(m, 30, -14, 0, 44, -2, 11); box(m, 33, -11, 11, 41, -5, 13); }
  { const m = part("D"); [32, 38, 44].forEach((x) => revolve(m, x, 9, [[0, 2.7], [13, 2.7], [15, 1.4]], 22)); }
  { const m = part("D"); pipe(m, [[44, -8, 1.5], [52, -8, 1.5], [52, -8, 1.5], [70, -8, 1.5]], 0.6); pipe(m, [[38, -2, 2], [38, 6.3, 2]], 0.4);
    [[55, -8], [60, -8], [65, -8]].forEach(([x, y]) => box(m, x - 0.7, y - 0.7, 0, x + 0.7, y + 0.7, 3)); }

  // ground / site outline (context only)
  const ground = { g: "G", faces: [], edges: [], revs: [], pipes: [] };
  [[[-70, -26, 0], [74, -26, 0]], [[74, -26, 0], [74, 50, 0]], [[74, 50, 0], [-70, 50, 0]], [[-70, 50, 0], [-70, -26, 0]]].forEach((e) => ground.edges.push(e));
  parts.push(ground);

  parts.forEach((m) => {
    const pts = [];
    m.faces.forEach((f) => f.forEach((p) => pts.push(p)));
    m.edges.forEach((e) => { pts.push(e[0], e[1]); });
    m.pipes.forEach((p) => pts.push(p.a, p.b));
    m.pts = pts;
    m.zmin = Math.min(...pts.map((p) => p[2]));
    m.zmax = Math.max(...pts.map((p) => p[2]));
    m.plen = m.pipes.reduce((s, p) => s + Math.hypot(...sub(p.b, p.a)), 0);
  });
  return parts;
}

// clip a 3D polygon to z <= level
function clipZ(poly, level) {
  const out = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], ina = a[2] <= level, inb = b[2] <= level;
    if (ina) out.push(a);
    if (ina !== inb) { const t = (level - a[2]) / (b[2] - a[2]); out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, level]); }
  }
  return out;
}

// ───────────────────────────────────────── engine
export function createCcsEngine(canvas, opts) {
  opts = opts || {};
  const ctx = canvas.getContext("2d");
  const parts = buildScene();
  const groups = {};
  parts.forEach((p) => { (groups[p.g] = groups[p.g] || []).push(p); });
  const gz = {};
  Object.keys(groups).forEach((g) => { gz[g] = [Math.min(...groups[g].map((p) => p.zmin)), Math.max(...groups[g].map((p) => p.zmax))]; });

  let W = 0, H = 0, dpr = 1;
  let stage = 0, t0 = performance.now() / 1000, paused = false, raf = 0, alive = true;
  let camFrom = null, camNow = null;
  const ptr = { x: 0, y: 0, sx: 0, sy: 0 };
  const reduce = !!opts.reducedMotion;
  const fitCache = {};

  const area = () => (opts.getArea ? opts.getArea(W, H) : { x: W * 0.4, y: 40, w: W * 0.58, h: H - 220 });

  function basis(az, el) {
    const A = (az * Math.PI) / 180, E = (el * Math.PI) / 180;
    const f = [Math.cos(E) * Math.cos(A), Math.cos(E) * Math.sin(A), Math.sin(E)];
    const r = [-Math.sin(A), Math.cos(A), 0];
    const u = cross(f, r);
    return { f, r, u };
  }
  function fitFor(i) {
    const k = i + ":" + Math.round(W) + "x" + Math.round(H);
    if (fitCache[k]) return fitCache[k];
    const st = STAGES[i], b = basis(st.cam.az, st.cam.el), ar = area();
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    st.focus.forEach((g) => groups[g].forEach((p) => p.pts.forEach((q) => {
      const x = dot(q, b.r), y = -dot(q, b.u); x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
    })));
    const s = Math.min(ar.w / (x1 - x0), ar.h / (y1 - y0)) * 0.9;
    return (fitCache[k] = { az: st.cam.az, el: st.cam.el, s, wx: (x0 + x1) / 2, wy: (y0 + y1) / 2, cx: ar.x + ar.w / 2, cy: ar.y + ar.h / 2 });
  }
  const lerpCam = (a, b, q) => { const o = {}; for (const k in b) o[k] = a[k] + (b[k] - a[k]) * q; return o; };

  function resize() {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    canvas.width = Math.max(1, Math.round(W * dpr)); canvas.height = Math.max(1, Math.round(H * dpr));
    for (const k in fitCache) delete fitCache[k];
  }

  // pause = stop auto-advancing; the current stage still finishes drawing and then holds
  function localT() { return performance.now() / 1000 - t0; }

  function go(i) {
    camFrom = camNow || fitFor(i);
    stage = ((i % STAGES.length) + STAGES.length) % STAGES.length;
    t0 = performance.now() / 1000;
    if (opts.onStage) opts.onStage(stage);
  }

  function frame() {
    if (!alive) return;
    let t = localT();
    if (opts.freeze) { if (stage !== opts.freeze.stage) { stage = opts.freeze.stage; camFrom = null; if (opts.onStage) opts.onStage(stage); } t = opts.freeze.t; }
    else if (!paused && !reduce && t >= STAGE_SECONDS) { go(stage + 1); t = 0; }
    draw(reduce ? STAGE_SECONDS : Math.min(t, STAGE_SECONDS));
    if (opts.onTick) opts.onTick(stage, clamp(t / STAGE_SECONDS, 0, 1), paused);
    raf = requestAnimationFrame(frame);
  }

  function draw(t) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const st = STAGES[stage];
    // camera
    ptr.sx += (ptr.x - ptr.sx) * 0.06; ptr.sy += (ptr.y - ptr.sy) * 0.06;
    const target = fitFor(stage);
    const q = eio(ramp(t, 0, 1.0));
    const base = camFrom ? lerpCam(camFrom, target, q) : target;
    camNow = base;
    const cam = Object.assign({}, base, { az: base.az + ptr.sx * 5, el: base.el - ptr.sy * 3 });
    const b = basis(cam.az, cam.el);
    const P = (p) => [cam.cx + (dot(p, b.r) - cam.wx) * cam.s, cam.cy + (-dot(p, b.u) - cam.wy) * cam.s, dot(p, b.f)];

    // which groups are drawn already (earlier stages), animating now, ghosted
    const drawnBefore = new Set(); STAGES.slice(0, stage).forEach((s) => s.add.forEach((g) => drawnBefore.add(g)));
    const lp = ramp(t, 0.55, 1.8), fp = ease(ramp(t, 2.1, 1.4));

    // ground
    ctx.lineWidth = 0.7; ctx.strokeStyle = rgba(INK, 0.1); ctx.setLineDash([4, 5]);
    groups.G.forEach((m) => m.edges.forEach(([a, c]) => { const A = P(a), C = P(c); ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(C[0], C[1]); ctx.stroke(); }));
    ctx.setLineDash([]);

    // fills (far to near)
    const fillJobs = [];
    st.show.forEach((g) => {
      const col = COL[g]; if (!col) return;
      let level, alpha;
      if (st.fill.includes(g)) { level = gz[g][0] - 0.5 + (gz[g][1] - gz[g][0] + 1) * fp; alpha = col.a; }
      else if (drawnBefore.has(g) || stage === 3) { level = 1e9; alpha = col.a * (stage === 3 ? 0.9 : 0.55); }
      else return;
      const along = st.fill.includes(g) ? fp : 1;
      groups[g].forEach((m) => {
        m.faces.forEach((f) => {
          const c = clipZ(f, level); if (c.length < 3) return;
          const pp = c.map(P); fillJobs.push({ d: pp.reduce((s, p) => s + p[2], 0) / pp.length, pp, col: col.rgb, a: alpha });
        });
        m.pipes.forEach((pi) => {
          // pipes fill along their length (each run in sequence)
          const k = m.pipes.indexOf(pi), n = m.pipes.length, local = clamp(along * n - k, 0, 1); if (local <= 0) return;
          const A = P(pi.a), B = P(add(pi.a, mul(sub(pi.b, pi.a), local)));
          const dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy) || 1, ox = (-dy / L) * pi.r * cam.s, oy = (dx / L) * pi.r * cam.s;
          fillJobs.push({ d: (A[2] + B[2]) / 2, pp: [[A[0] + ox, A[1] + oy], [B[0] + ox, B[1] + oy], [B[0] - ox, B[1] - oy], [A[0] - ox, A[1] - oy]], col: col.rgb, a: Math.min(0.85, alpha * 1.6) });
        });
      });
    });
    fillJobs.sort((a, b2) => a.d - b2.d).forEach((j) => {
      ctx.fillStyle = rgba(j.col, j.a); ctx.beginPath(); j.pp.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill();
    });

    // lines
    const strokeGroup = (g, prog, style) => {
      const ms = groups[g], K = ms.length;
      ms.forEach((m, k) => {
        const pr = clamp((prog - (k / K) * 0.55) / 0.45, 0, 1); if (pr <= 0) return;
        ctx.strokeStyle = style.c; ctx.lineWidth = style.w;
        const segs = [];
        m.edges.forEach(([a, c]) => segs.push([P(a), P(c)]));
        m.revs.forEach((r) => { // silhouettes
          [cam.az + 90, cam.az - 90].forEach((deg) => {
            const th = (deg * Math.PI) / 180, pts = r.prof.map(([z, rr]) => P([r.cx + rr * Math.cos(th), r.cy + rr * Math.sin(th), z]));
            for (let i = 0; i < pts.length - 1; i++) segs.push([pts[i], pts[i + 1]]);
          });
        });
        m.pipes.forEach((pi) => {
          const A = P(pi.a), B = P(pi.b), dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy) || 1, ox = (-dy / L) * pi.r * cam.s, oy = (dx / L) * pi.r * cam.s;
          segs.push([[A[0] + ox, A[1] + oy], [B[0] + ox, B[1] + oy]], [[A[0] - ox, A[1] - oy], [B[0] - ox, B[1] - oy]]);
        });
        const n = segs.length, upto = pr * n;
        ctx.beginPath();
        for (let i = 0; i < n && i < upto; i++) {
          const [A, B] = segs[i], f = Math.min(1, upto - i);
          ctx.moveTo(A[0], A[1]); ctx.lineTo(A[0] + (B[0] - A[0]) * f, A[1] + (B[1] - A[1]) * f);
        }
        ctx.stroke();
      });
    };
    st.ghost.forEach((g) => { ctx.setLineDash([3, 4]); strokeGroup(g, 1, { c: rgba(INK, 0.18), w: 0.7 }); ctx.setLineDash([]); });
    st.show.forEach((g) => {
      const isNew = st.add.includes(g), prog = isNew ? lp : 1;
      const active = isNew || stage === 3;
      const c = g === "B" && (stage === 1 || stage === 3) ? "rgba(180,83,9,0.95)" : rgba(INK, active ? 0.82 : 0.34);
      strokeGroup(g, prog, { c, w: active ? (g === "B" ? 1.35 : 1.1) : 0.8 });
    });

    // leader labels
    drawCalls(st, t, P);
  }

  const DIRS = { n: [0.35, -1], ne: [1, -1], nw: [-1, -1], e: [1, -0.45], w: [-1, -0.45], s: [0.35, 1], se: [1, 0.9], sw: [-1, 0.9] };
  function label(x, y, text, align, alpha, strong) {
    ctx.font = (strong ? "700 " : "600 ") + "12.5px Lato, 'Helvetica Neue', Arial, sans-serif";
    const w = ctx.measureText(text).width + 12, h = 21;
    const lx = align === "right" ? x - w : x;
    ctx.globalAlpha = alpha;
    ctx.fillStyle = strong ? "rgba(11,37,69,0.96)" : "rgba(248,249,250,0.94)";
    ctx.strokeStyle = strong ? "rgba(11,37,69,1)" : rgba(INK, 0.28); ctx.lineWidth = 0.8;
    ctx.fillRect(lx, y - h / 2, w, h); ctx.strokeRect(lx, y - h / 2, w, h);
    ctx.fillStyle = strong ? "#fff" : rgba(INK, 0.9); ctx.textBaseline = "middle";
    ctx.fillText(text, lx + 6, y + 0.5);
    ctx.globalAlpha = 1;
    return { x: lx, w };
  }
  function drawCalls(st, t, P) {
    const ar = area();
    const ends = [];
    st.calls.forEach((c, i) => {
      const s0 = (st.converge ? 0.9 : 3.0) + i * 0.15, q = ease(ramp(t, s0, 0.55)), qa = ease(ramp(t, s0 + 0.35, 0.4));
      if (q <= 0) return;
      const A = P(c.at);
      let d = DIRS[c.dir] || DIRS.ne;
      ctx.font = "600 12.5px Lato, 'Helvetica Neue', Arial, sans-serif";
      const lw = ctx.measureText(c.text).width + 12;
      const len1 = 34, len2 = 24;
      // keep the label on the canvas: flip sides when it would run off an edge
      if (d[0] >= 0 && A[0] + len1 + len2 + lw + 12 > W) d = [-Math.abs(d[0]) || -1, d[1]];
      else if (d[0] < 0 && A[0] - len1 - len2 - lw - 12 < 0) d = [Math.abs(d[0]) || 1, d[1]];
      const L = Math.hypot(d[0], d[1]), sx = d[0] >= 0 ? 1 : -1;
      const B = [A[0] + (d[0] / L) * len1, A[1] + (d[1] / L) * len1], C = [B[0] + sx * len2, B[1]];
      ctx.strokeStyle = rgba(INK, 0.72); ctx.lineWidth = 0.9;
      ctx.fillStyle = rgba(INK, 0.9); ctx.beginPath(); ctx.arc(A[0], A[1], 2.3, 0, Math.PI * 2); ctx.fill();
      const q1 = clamp(q * 2, 0, 1), q2 = clamp(q * 2 - 1, 0, 1);
      ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(A[0] + (B[0] - A[0]) * q1, A[1] + (B[1] - A[1]) * q1);
      if (q2 > 0) ctx.lineTo(B[0] + (C[0] - B[0]) * q2, C[1]);
      ctx.stroke();
      if (qa > 0) label(C[0] + sx * 3, C[1], c.text, sx > 0 ? "left" : "right", qa, false);
      ends.push(A);
    });
    if (st.converge && ends.length) {
      const mx = ends.reduce((s, p) => s + p[0], 0) / ends.length;
      const top = Math.min(...ends.map((p) => p[1]));
      const X = clamp(mx, ar.x + 80, ar.x + ar.w - 80), Y = Math.max(ar.y + 24, top - 70);
      const q = ease(ramp(t, 2.0, 0.9)), qa = ease(ramp(t, 2.7, 0.5));
      ctx.strokeStyle = "rgba(14,124,134,0.9)"; ctx.lineWidth = 1.2; ctx.setLineDash([5, 3.5]);
      ends.forEach((A) => {
        const M = [A[0], Y + 14];
        ctx.beginPath(); ctx.moveTo(A[0], A[1]);
        const q1 = clamp(q * 2, 0, 1), q2 = clamp(q * 2 - 1, 0, 1);
        ctx.lineTo(A[0], A[1] + (M[1] - A[1]) * q1);
        if (q2 > 0) ctx.lineTo(M[0] + (X - M[0]) * q2, M[1] + (Y + 14 - M[1]) * q2);
        ctx.stroke();
      });
      ctx.setLineDash([]);
      if (qa > 0) { ctx.font = "700 12.5px Lato, Arial, sans-serif"; const w = ctx.measureText(st.converge.toUpperCase()).width + 12; label(X - w / 2, Y, st.converge.toUpperCase(), "left", qa, true); }
    }
  }

  // ── public API
  const onMove = (e) => {
    const r = canvas.getBoundingClientRect();
    ptr.x = clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1);
    ptr.y = clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1);
  };
  const onLeave = () => { ptr.x = 0; ptr.y = 0; };
  resize();
  window.addEventListener("resize", resize);
  (opts.pointerTarget || canvas).addEventListener("pointermove", onMove);
  (opts.pointerTarget || canvas).addEventListener("pointerleave", onLeave);
  if (reduce) stage = 3;
  if (opts.onStage) opts.onStage(stage);
  raf = requestAnimationFrame(frame);

  return {
    goTo(i) { go(i); },
    next() { go(stage + 1); },
    pause() { paused = true; },
    play() { paused = false; },
    toggle() { if (paused) this.play(); else this.pause(); return paused; },
    isPaused: () => paused,
    stage: () => stage,
    resize,
    destroy() { alive = false; cancelAnimationFrame(raf); window.removeEventListener("resize", resize); (opts.pointerTarget || canvas).removeEventListener("pointermove", onMove); (opts.pointerTarget || canvas).removeEventListener("pointerleave", onLeave); },
  };
}
