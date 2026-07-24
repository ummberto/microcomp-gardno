"use client";

/**
 * HeroCinematic — scroll-controlled cinematic hero for Microcomp.
 *
 * Desktop: a pinned 100vh canvas whose displayed frame is driven by scroll
 * position (deterministic image-sequence scrub). Frames are the optimized
 * JPEG sequences extracted from the OpenArt clips (chapters A/B/C).
 *
 * Mobile / prefers-reduced-motion: a lightweight static hero (single screen,
 * one poster image) that keeps every message and CTA as real HTML — no scrub,
 * no heavy frame download.
 *
 * All headlines, callouts and CTAs are real, accessible HTML layered above the
 * visual. The canvas is decorative and hidden from assistive tech.
 */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BASE = "/hero-cinematic/frames";

// Ordered chapters → flat frame list (A: exterior→office IT, B: →school IT, C: full ecosystem finale)
const CHAPTERS = [
  { dir: "a", prefix: "a", count: 52 },
  { dir: "b", prefix: "b", count: 42 },
  { dir: "c", prefix: "c", count: 50 },
] as const;

const FRAME_URLS: string[] = [];
for (const ch of CHAPTERS) {
  for (let i = 1; i <= ch.count; i++) {
    FRAME_URLS.push(`${BASE}/${ch.dir}/${ch.prefix}_${String(i).padStart(3, "0")}.jpg`);
  }
}
const TOTAL = FRAME_URLS.length;
// Poster / resting frame / static background = the first frame (exterior dusk establishing).
const POSTER = FRAME_URLS[0];
const FINAL_IMG = FRAME_URLS[TOTAL - 1];

// Scroll length of the pinned experience.
const SCROLL_VH = 460;

// Per-chapter service callouts, keyed to scroll progress [0..1].
// Windows are aligned to the frame chapters (A ≈ 0–0.357, B ≈ 0.357–0.650,
// C ≈ 0.657–1.0) so each callout holds for the whole reveal it labels.
const CALLOUTS: { from: number; to: number; title: string; sub: string }[] = [
  { from: 0.15, to: 0.35, title: "Obsługa IT dla firm", sub: "Sieci, sprzęt, oprogramowanie i bieżące wsparcie." },
  { from: 0.4, to: 0.645, title: "Obsługa informatyczna szkół", sub: "Sprawna technologia dla administracji, nauczycieli i uczniów." },
  { from: 0.67, to: 0.785, title: "Serwis komputerów", sub: "Diagnostyka, naprawa i modernizacja sprzętu." },
  { from: 0.785, to: 0.875, title: "Monitoring i bezpieczeństwo", sub: "Stały podgląd i ochrona firmy lub placówki." },
  { from: 0.875, to: 0.95, title: "Strony internetowe i opieka WWW", sub: "Projektowanie, hosting, aktualizacje i bieżąca obsługa." },
];

// The four headline services, each linking to its category page.
const MAIN_SERVICES: { label: string; href: string }[] = [
  { label: "Obsługa IT dla firm i szkół", href: "/uslugi/it-dla-firm" },
  { label: "Serwis komputerów", href: "/uslugi/backup-danych" },
  { label: "Monitoring i bezpieczeństwo", href: "/uslugi/monitoring-cctv" },
  { label: "Strony internetowe i opieka WWW", href: "/uslugi/strony-internetowe" },
];

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Trapezoidal fade: 0 outside [from,to], ramps in/out over `edge` of the window.
function windowOpacity(p: number, from: number, to: number, edge = 0.04) {
  if (p <= from || p >= to) return 0;
  if (p < from + edge) return (p - from) / edge;
  if (p > to - edge) return (to - p) / edge;
  return 1;
}

export default function HeroCinematic() {
  const [mode, setMode] = useState<"scrub" | "static" | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 1023px)").matches;
    setMode(reduce || small ? "static" : "scrub");
  }, []);

  // Render the static hero on first paint (SSR-safe) so the headline + CTA are
  // always in the HTML even before JS decides the mode / if JS never runs.
  if (mode === "scrub") return <ScrubHero />;
  return <StaticHero />;
}

/* ────────────────────────────  SCRUB (desktop)  ──────────────────────────── */

function ScrubHero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const posterRef = useRef<HTMLImageElement | null>(null);
  const openingRef = useRef<HTMLDivElement | null>(null);
  const cueRef = useRef<HTMLDivElement | null>(null);
  const finalRef = useRef<HTMLDivElement | null>(null);
  const calloutRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const imgs: (HTMLImageElement | undefined)[] = new Array(TOTAL);
    const loaded: boolean[] = new Array(TOTAL).fill(false);
    let firstDrawn = false;

    // Sequential loader (concurrency-limited) — walks FRAME_URLS in order so the
    // opening chapter loads first, later chapters stream in progressively.
    let next = 0;
    const CONCURRENCY = 5;
    const pump = () => {
      while (next < TOTAL && inflight < CONCURRENCY) loadOne(next++);
    };
    let inflight = 0;
    const loadOne = (i: number) => {
      inflight++;
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        imgs[i] = img;
        loaded[i] = true;
        inflight--;
        if (!firstDrawn && i === 0) {
          firstDrawn = true;
          if (posterRef.current) posterRef.current.style.opacity = "0";
          drawFrame(0);
        }
        pump();
      };
      img.onerror = () => {
        inflight--;
        pump();
      };
      img.src = FRAME_URLS[i];
    };
    pump();

    const nearestLoaded = (idx: number) => {
      if (loaded[idx]) return idx;
      for (let d = 1; d < TOTAL; d++) {
        if (idx - d >= 0 && loaded[idx - d]) return idx - d;
        if (idx + d < TOTAL && loaded[idx + d]) return idx + d;
      }
      return -1;
    };

    let cw = 0;
    let ch = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cw = canvas.clientWidth;
      ch = canvas.clientHeight;
      canvas.width = Math.round(cw * dpr);
      canvas.height = Math.round(ch * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lastDrawn = -1; // force repaint at new size
    };

    const drawFrame = (idx: number) => {
      const img = imgs[idx];
      if (!img) return;
      const ir = img.width / img.height;
      const cr = cw / ch;
      let dw: number, dh: number, dx: number, dy: number;
      if (ir > cr) {
        dh = ch;
        dw = ch * ir;
        dx = (cw - dw) / 2;
        dy = 0;
      } else {
        dw = cw;
        dh = cw / ir;
        dx = 0;
        dy = (ch - dh) / 2;
      }
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    let displayed = 0;
    let lastDrawn = -1;
    let lastProgress = -1;

    const updateOverlay = (p: number) => {
      if (p === lastProgress) return;
      lastProgress = p;
      // Opening block: fully visible at start, fades out as we enter the reveal.
      const openOp = 1 - clamp((p - 0.06) / 0.08, 0, 1);
      if (openingRef.current) {
        openingRef.current.style.opacity = String(openOp);
        openingRef.current.style.pointerEvents = openOp < 0.15 ? "none" : "auto";
      }
      if (cueRef.current) cueRef.current.style.opacity = String(1 - clamp(p / 0.05, 0, 1));
      // Chapter callouts.
      for (let i = 0; i < CALLOUTS.length; i++) {
        const el = calloutRefs.current[i];
        if (el) el.style.opacity = String(windowOpacity(p, CALLOUTS[i].from, CALLOUTS[i].to));
      }
      // Final message + CTA.
      const finalOp = clamp((p - 0.94) / 0.05, 0, 1);
      if (finalRef.current) {
        finalRef.current.style.opacity = String(finalOp);
        finalRef.current.style.pointerEvents = finalOp > 0.5 ? "auto" : "none";
      }
    };

    const progress = () => {
      const scrollable = root.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return 0;
      return clamp(-root.getBoundingClientRect().top / scrollable, 0, 1);
    };

    let raf = 0;
    let active = true;
    const tick = () => {
      const p = progress();
      const target = p * (TOTAL - 1);
      displayed = lerp(displayed, target, 0.16);
      if (Math.abs(displayed - target) < 0.35) displayed = target;
      const idx = nearestLoaded(Math.round(displayed));
      if (idx >= 0 && idx !== lastDrawn) {
        drawFrame(idx);
        lastDrawn = idx;
      }
      updateOverlay(Math.round(p * 1000) / 1000);
      if (active) raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (active) return;
      active = true;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      active = false;
      cancelAnimationFrame(raf);
    };

    resize();
    window.addEventListener("resize", resize);
    // Only render while the hero is on screen and the tab is visible.
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(root);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    raf = requestAnimationFrame(tick);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label="Microcomp — kompleksowe wsparcie technologiczne firm i szkół"
      style={{ position: "relative", height: `${SCROLL_VH}vh`, background: "#0B1829" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#0B1829",
        }}
      >
        {/* Deterministic frame canvas (decorative) */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
        />
        {/* Immediate poster until the first frame paints */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={posterRef}
          src={POSTER}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity .5s ease",
          }}
        />
        {/* Restrained legibility scrim (left + top) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(6,14,22,0.62) 0%, rgba(6,14,22,0.30) 34%, rgba(6,14,22,0) 60%), linear-gradient(0deg, rgba(6,14,22,0.34) 0%, rgba(6,14,22,0) 26%)",
            pointerEvents: "none",
          }}
        />

        {/* ── Overlay content (real HTML) ── */}
        <div className="container-main" style={{ position: "relative", height: "100%" }}>
          {/* Opening block — headline + CTA, visible before any scroll */}
          <div
            ref={openingRef}
            className="heroc-opening"
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-46%)",
              maxWidth: 620,
            }}
          >
            <span className="heroc-badge">
              <span className="heroc-dot" /> Microcomp • technologia dla firm i szkół
            </span>
            <h1 className="heroc-h1">Technologia, która wspiera firmy i szkoły.</h1>
            <p className="heroc-sub">
              Kompleksowa obsługa IT, serwis komputerów, monitoring oraz tworzenie i opieka nad
              stronami WWW.
            </p>
            <p className="heroc-trust">Doświadczenie od 1997 roku.</p>
            <div className="heroc-cta-row">
              <Link href="/kontakt" className="heroc-btn heroc-btn-primary">
                Skontaktuj się z nami
              </Link>
              <a href="#uslugi" className="heroc-btn heroc-btn-ghost">
                Zobacz zakres usług
              </a>
            </div>
          </div>

          {/* Chapter callouts */}
          {CALLOUTS.map((c, i) => (
            <div
              key={c.title}
              ref={(el) => {
                calloutRefs.current[i] = el;
              }}
              className="heroc-callout"
              style={{ opacity: 0 }}
            >
              <span className="heroc-callout-kicker" />
              <h2 className="heroc-callout-title">{c.title}</h2>
              <p className="heroc-callout-sub">{c.sub}</p>
            </div>
          ))}

          {/* Final message + service links + CTA */}
          <div ref={finalRef} className="heroc-final" style={{ opacity: 0, pointerEvents: "none" }}>
            <h2 className="heroc-final-title">Cała technologia. Jeden zaufany partner.</h2>
            <ul className="heroc-final-services">
              {MAIN_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="heroc-final-link">
                    <span>{s.label}</span>
                    <span className="arr" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/kontakt" className="heroc-btn heroc-btn-primary">
              Skontaktuj się z nami
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div ref={cueRef} className="heroc-cue" aria-hidden="true">
          <span>Przewiń i zobacz, jak wspieramy Twoją organizację</span>
          <span className="heroc-cue-mouse" />
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────  STATIC (mobile / reduced motion)  ──────────────────────── */

function StaticHero() {
  return (
    <section className="heroc-static" aria-label="Microcomp — kompleksowe wsparcie technologiczne firm i szkół">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={POSTER} alt="" aria-hidden="true" className="heroc-static-bg" />
      <div aria-hidden="true" className="heroc-static-scrim" />
      <div className="container-main heroc-static-inner">
        <span className="heroc-badge">
          <span className="heroc-dot" /> Microcomp • od 1997 roku
        </span>
        <h1 className="heroc-h1">Technologia, która wspiera firmy i szkoły.</h1>
        <p className="heroc-sub">
          Kompleksowa obsługa IT, serwis komputerów, monitoring oraz tworzenie i opieka nad stronami
          WWW.
        </p>
        <p className="heroc-trust">Doświadczenie od 1997 roku.</p>
        <div className="heroc-cta-row">
          <Link href="/kontakt" className="heroc-btn heroc-btn-primary">
            Skontaktuj się z nami
          </Link>
          <a href="#uslugi" className="heroc-btn heroc-btn-ghost">
            Zobacz zakres usług
          </a>
        </div>
        <ul className="heroc-static-services">
          {MAIN_SERVICES.map((s) => (
            <li key={s.href}>
              <Link href={s.href}>{s.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
