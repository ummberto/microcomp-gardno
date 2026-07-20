import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { COMPANY } from "@/lib/facts";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "IT dla Firm w Zachodniopomorskiem — Monitoring, Sieci, Strony",
  description:
    "Obsługujemy firmy w Szczecinie, Gryfinie, Stargardzie, Pyrzycach i całym woj. zachodniopomorskim. IT, monitoring, sieci komputerowe, strony WWW.",
  alternates: { canonical: "https://microcomp.co/lokalizacja" },
};

export default function LokalizacjaPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── HERO ─── */}
        <section style={{ background: "var(--color-navy)", paddingTop: 120, paddingBottom: 80 }} className="grid-pattern">
          <div className="container-main">
            <ScrollReveal>
              <p style={{ color: "var(--color-green)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Gdzie działamy
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h1 style={{ color: "white", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, marginBottom: 20, letterSpacing: "-0.02em", maxWidth: 700 }}>
                Obsługujemy całe woj. zachodniopomorskie
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, maxWidth: 580 }}>
                Siedziba w Gardnie, ale dojeżdżamy i działamy zdalnie w całym regionie. Ponad 200 firm nam ufa.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── STATS BAR ─── */}
        <section style={{ background: "var(--color-navy)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="container-main">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              {[
                { value: "6", label: "miejscowości" },
                { value: "200+", label: "obsługiwanych firm" },
                { value: "40 min", label: "max. dojazd" },
                { value: "80%", label: "zdalnych napraw" },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 60}>
                  <div
                    style={{
                      textAlign: "center",
                      padding: "36px 20px",
                      borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(26px, 3vw, 36px)", color: "var(--color-green)", lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginTop: 8, fontFamily: "var(--font-heading)" }}>{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── LOCATIONS GRID ─── */}
        <section className="section-padding" style={{ background: "white" }}>
          <div className="container-main">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
              {LOCATIONS.map((loc, i) => {
                const locServices = SERVICES.filter((s) => loc.services.includes(s.slug));
                return (
                  <ScrollReveal key={loc.slug} delay={i * 60}>
                    <div
                      style={{
                        padding: "32px",
                        borderRadius: 14,
                        background: "white",
                        border: "1px solid var(--color-slate-200)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                        <div>
                          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, color: "var(--color-navy)", marginBottom: 4 }}>
                            {loc.name}
                          </h2>
                          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-green)", fontSize: 13, fontFamily: "var(--font-heading)", fontWeight: 500 }}>
                            <MapPin size={13} />
                            woj. zachodniopomorskie
                          </div>
                        </div>
                        {loc.slug === "gardno" && (
                          <span style={{ background: "var(--color-green)", color: "white", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 100, fontFamily: "var(--font-heading)" }}>
                            Siedziba
                          </span>
                        )}
                      </div>
                      <p style={{ color: "var(--color-slate-500)", fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>
                        {loc.description}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                        {locServices.slice(0, 4).map((s) => (
                          <span key={s.slug} style={{ background: "var(--color-slate-100)", color: "var(--color-slate-600)", fontSize: 12, padding: "4px 10px", borderRadius: 6, fontFamily: "var(--font-heading)", fontWeight: 500 }}>
                            {s.shortTitle}
                          </span>
                        ))}
                        {locServices.length > 4 && (
                          <span style={{ color: "var(--color-slate-400)", fontSize: 12, padding: "4px 6px" }}>+{locServices.length - 4}</span>
                        )}
                      </div>
                      <Link
                        href={`/lokalizacja/${loc.slug}`}
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--color-green)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 14, textDecoration: "none", marginTop: "auto" }}
                      >
                        Szczegóły <ArrowRight size={14} />
                      </Link>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── WHY US ─── */}
        <section className="section-padding" style={{ background: "var(--color-slate-50)" }}>
          <div className="container-main">
            <ScrollReveal>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "var(--color-navy)", marginBottom: 40, textAlign: "center" }}>
                Dlaczego warto z nami?
              </h2>
            </ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { icon: <CheckCircle size={24} />, title: "Dojazd z Gardna", desc: "Szybki dojazd do Szczecina, Gryfina, Stargardu i okolic — zwykle do 40 minut." },
                { icon: <CheckCircle size={24} />, title: "Zdalnie wszędzie", desc: "80% problemów rozwiązujemy zdalnie — bez względu na odległość. Zero przestojów." },
                { icon: <CheckCircle size={24} />, title: "Znany rejon", desc: "Znamy specyfikę regionu: firmy produkcyjne, handel, samorządy i rolnictwo — od 1997 roku." },
                { icon: <CheckCircle size={24} />, title: "Stały kontakt", desc: "Jedna umowa, jeden opiekun. Nie musisz szukać kolejnego dostawcy IT — masz nas." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div style={{ padding: "28px 24px", background: "white", borderRadius: 12, border: "1px solid var(--color-slate-200)" }}>
                    <div style={{ color: "var(--color-green)", marginBottom: 14 }}>{item.icon}</div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 16, color: "var(--color-navy)", marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ color: "var(--color-slate-500)", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
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
                Potrzebujesz wsparcia IT?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 18, maxWidth: 480, margin: "0 auto 40px" }}>
                Zadzwoń lub napisz — odpowiadamy w ciągu 2 godzin.
              </p>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "white",
                  color: "var(--color-green-dark)",
                  fontWeight: 700,
                  fontFamily: "var(--font-heading)",
                  fontSize: 16,
                  padding: "16px 32px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                <Phone size={18} />
                {COMPANY.phone}
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
