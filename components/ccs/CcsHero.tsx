"use client";
import { useEffect, useRef, useState } from "react";
import { createCcsEngine } from "./engine";
import { HERO_COPY, STAGE_CONTENT, chartSvg, CHART_CSS } from "./content";
import { HERO_CSS } from "./styles";

type Engine = ReturnType<typeof createCcsEngine>;

export default function CcsHero() {
  const rootRef = useRef<HTMLElement>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const tbRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const engRef = useRef<Engine | null>(null);
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const cv = cvRef.current, root = rootRef.current;
    if (!cv || !root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // ?heroStage=1&heroT=4.5 freezes one moment (for review screenshots)
    const qs = new URLSearchParams(window.location.search);
    const freeze = qs.has("heroStage") ? { stage: Number(qs.get("heroStage")), t: Number(qs.get("heroT") ?? "4.7") } : undefined;
    const eng = createCcsEngine(cv, {
      reducedMotion: reduced,
      freeze,
      pointerTarget: root,
      getArea: (W: number, H: number) => {
        const tb = tbRef.current?.offsetHeight ?? 190;
        if (W < 900) {
          const top = (panelRef.current?.offsetTop ?? 0) + (panelRef.current?.offsetHeight ?? 0) + 8;
          return { x: 16, y: top, w: W - 32, h: Math.max(160, H - top - tb - 16) };
        }
        return { x: W * 0.41, y: 64, w: W * 0.57, h: H - tb - 92 };
      },
      onStage: (i: number) => setStage(i),
      onTick: (i: number, p: number) => {
        barRefs.current.forEach((b, k) => { if (b) b.style.width = k < i ? "100%" : k === i ? `${(p * 100).toFixed(1)}%` : "0%"; });
      },
    });
    engRef.current = eng;
    if (reduced) { eng.pause(); setPaused(true); }
    const ro = new ResizeObserver(() => eng.resize());
    ro.observe(root);
    return () => { ro.disconnect(); eng.destroy(); };
  }, []);

  const pick = (i: number) => {
    const eng = engRef.current; if (!eng) return;
    if (i === stage) { setPaused(eng.toggle()); return; }
    eng.goTo(i); eng.pause(); setPaused(true);
  };
  const toggle = () => { const eng = engRef.current; if (eng) setPaused(eng.toggle()); };
  const sc = STAGE_CONTENT[stage];

  return (
    <section ref={rootRef} className="ccs-hero" aria-label="DKC power plant and carbon capture advisory">
      <canvas ref={cvRef} className="ccs-cv" aria-hidden="true" />

      <div className="ccs-band">
        <span>{HERO_COPY.band.left}</span>
        <span className="ccs-band-r">{HERO_COPY.band.right}</span>
        <button type="button" className="ccs-state" onClick={toggle} aria-label={paused ? "Resume auto loop" : "Pause auto loop"}>
          <i className={paused ? "p" : "a"} /> {paused ? "PAUSED" : "AUTO LOOP"}
        </button>
      </div>

      <div ref={panelRef} className="ccs-panel">
        <p className="ccs-tag">{HERO_COPY.tag}</p>
        <h1 className="ccs-h1">{HERO_COPY.headline}</h1>
        <p className="ccs-sub">{HERO_COPY.sub}</p>
        <div className="ccs-ctas">
          <a className="ccs-btn pri" href={HERO_COPY.ctaPrimary.href}>{HERO_COPY.ctaPrimary.label}</a>
          <a className="ccs-btn sec" href={HERO_COPY.ctaSecondary.href}>{HERO_COPY.ctaSecondary.label}</a>
        </div>
        <div className="ccs-pills" role="tablist" aria-label="Advisory stages">
          {STAGE_CONTENT.map((s, i) => (
            <button key={s.no} type="button" role="tab" aria-selected={i === stage} className={"ccs-pill" + (i === stage ? " on" : "")} onClick={() => pick(i)}>
              <b>{s.no}</b> {s.pill}
              <span className="ccs-bar"><span ref={(el) => { barRefs.current[i] = el; }} /></span>
            </button>
          ))}
        </div>
      </div>

      <div ref={tbRef} className="ccs-tb" aria-live="polite">
        <div className="ccs-cell">
          <p className="ccs-hd">{HERO_COPY.heads[0]}</p>
          <div key={"t" + stage} className="ccs-in">
            <p className="ccs-no">{sc.no}</p>
            <p className="ccs-tt">{sc.title}</p>
          </div>
        </div>
        <div className="ccs-cell">
          <p className="ccs-hd">{HERO_COPY.heads[1]}</p>
          <div key={"m" + stage} className="ccs-in">
            {sc.metrics.map((m) => (
              <div key={m.v} className="ccs-met"><p className="v">{m.v}</p><p className="n">{m.n}</p></div>
            ))}
          </div>
        </div>
        <div className="ccs-cell ccs-c3">
          <p className="ccs-hd">{HERO_COPY.heads[2]}</p>
          <div key={"c" + stage} className="ck" dangerouslySetInnerHTML={{ __html: chartSvg(sc.chart) }} />
        </div>
        <div className="ccs-cell ccs-c4">
          <p className="ccs-hd">{HERO_COPY.heads[3]}</p>
          <div key={"d" + stage} className="ccs-in"><p className="ccs-ds">{sc.desc}</p></div>
        </div>
      </div>

      <style>{CHART_CSS + HERO_CSS}</style>
    </section>
  );
}
