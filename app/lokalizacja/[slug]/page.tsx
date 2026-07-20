import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { COMPANY } from "@/lib/facts";
import { LOCATIONS, LOCATION_SLUGS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `https://microcomp.co/lokalizacja/${slug}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const locServices = SERVICES.filter((s) => loc.services.includes(s.slug));
  const otherLocs = LOCATIONS.filter((l) => l.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* ─── HERO ─── */}
        <section style={{ position: "relative", paddingTop: 120, paddingBottom: 80, overflow: "hidden" }}>
          <img
            src={loc.image}
            alt={loc.name}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(11, 24, 41, 0.82)" }} />
          <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
          <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
            <ScrollReveal>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <Link href="/lokalizacja" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontFamily: "var(--font-heading)", textDecoration: "none" }}>Lokalizacja</Link>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>/</span>
                <span style={{ color: "var(--color-green)", fontSize: 13, fontFamily: "var(--font-heading)", fontWeight: 600 }}>{loc.name}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                <MapPin size={36} style={{ color: "var(--color-green)" }} />
                <h1 style={{ color: "white", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  {loc.name}
                </h1>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, maxWidth: 580, marginBottom: 36 }}>
                {loc.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="btn-primary">
                  <Phone size={17} />Zadzwoń
                </a>
                <Link href="/kontakt" className="btn-secondary">
                  Napisz do nas <ArrowRight size={17} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── INTRO ─── */}
        <section className="section-padding" style={{ background: "white" }}>
          <div className="container-main">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <ScrollReveal>
                <img
                  src={loc.image}
                  alt={loc.name}
                  style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", borderRadius: 16 }}
                />
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "var(--color-navy)", marginBottom: 20 }}>
                  IT i monitoring w {loc.name}
                </h2>
                <p style={{ color: "var(--color-slate-600)", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                  {loc.intro}
                </p>
                <p style={{ color: "var(--color-slate-500)", fontSize: 14, lineHeight: 1.7 }}>
                  Realizujemy usługi dla klientów w {loc.name} i okolicach — dojeżdżamy sprawnie, a 80% problemów rozwiązujemy zdalnie.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section style={{ background: "var(--color-navy)" }}>
          <div className="container-main">
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${loc.stats.length}, 1fr)` }}>
              {loc.stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 60}>
                  <div style={{ textAlign: "center", padding: "40px 20px", borderRight: i < loc.stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(26px, 3vw, 38px)", color: "var(--color-green)", lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginTop: 8, fontFamily: "var(--font-heading)" }}>{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HIGHLIGHTS ─── */}
        <section className="section-padding" style={{ background: "var(--color-slate-50)" }}>
          <div className="container-main">
            <ScrollReveal>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "var(--color-navy)", marginBottom: 40 }}>
                Co możemy dla Ciebie zrobić w {loc.name}
              </h2>
            </ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
              {loc.highlights.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div style={{ padding: "28px 24px", background: "white", borderRadius: 14, border: "1px solid var(--color-slate-200)", height: "100%" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: "var(--color-navy)", marginBottom: 10 }}>{item.title}</h3>
                    <p style={{ color: "var(--color-slate-500)", fontSize: 14, lineHeight: 1.7 }}>{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section className="section-padding" style={{ background: "white" }}>
          <div className="container-main">
            <ScrollReveal>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "var(--color-navy)", marginBottom: 8 }}>
                Usługi w {loc.name}
              </h2>
              <p style={{ color: "var(--color-slate-500)", fontSize: 16, marginBottom: 40 }}>
                Realizujemy projekty IT bezpośrednio w {loc.name} i okolicach.
              </p>
            </ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {locServices.map((svc, i) => (
                <ScrollReveal key={svc.slug} delay={i * 60}>
                  <Link
                    href={`/uslugi/${svc.slug}`}
                    style={{ display: "block", padding: "28px", borderRadius: 14, background: "var(--color-slate-50)", textDecoration: "none", border: "1px solid var(--color-slate-200)", height: "100%" }}
                  >
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 17, color: "var(--color-navy)", marginBottom: 10 }}>{svc.title}</h3>
                    <p style={{ color: "var(--color-slate-500)", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{svc.description.substring(0, 120)}...</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-green)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 14 }}>
                      Zobacz zakres <ArrowRight size={14} />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── OTHER LOCATIONS ─── */}
        <section className="section-padding" style={{ background: "var(--color-slate-50)" }}>
          <div className="container-main">
            <ScrollReveal>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "var(--color-navy)", marginBottom: 40, textAlign: "center" }}>
                Inne lokalizacje
              </h2>
            </ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
              {otherLocs.map((l, i) => (
                <ScrollReveal key={l.slug} delay={i * 60}>
                  <Link
                    href={`/lokalizacja/${l.slug}`}
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "18px 20px", borderRadius: 10, background: "white", textDecoration: "none", border: "1px solid var(--color-slate-200)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 15, color: "var(--color-navy)" }}
                  >
                    <MapPin size={16} style={{ color: "var(--color-green)", flexShrink: 0 }} />
                    {l.name}
                    <ArrowRight size={14} style={{ color: "var(--color-green)", marginLeft: "auto" }} />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section style={{ background: "linear-gradient(135deg, var(--color-green) 0%, var(--color-green-dark) 100%)", padding: "88px 0" }}>
          <div className="container-main" style={{ textAlign: "center" }}>
            <ScrollReveal>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "white", marginBottom: 20 }}>
                Potrzebujesz wsparcia IT w {loc.name}?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 18, maxWidth: 480, margin: "0 auto 40px" }}>
                Odpowiadamy w ciągu 2 godzin. Bezpłatna konsultacja i wycena.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "var(--color-green-dark)", fontWeight: 700, fontFamily: "var(--font-heading)", fontSize: 16, padding: "16px 32px", borderRadius: 10, textDecoration: "none" }}>
                  <Phone size={18} />{COMPANY.phone}
                </a>
                <Link href="/kontakt" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", fontWeight: 600, fontFamily: "var(--font-heading)", fontSize: 16, padding: "16px 32px", borderRadius: 10, textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)" }}>
                  <Mail size={18} />Napisz do nas
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
