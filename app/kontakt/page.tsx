import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/lib/facts";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — Zadzwoń lub napisz",
  description:
    "Skontaktuj się z Microcomp Gardno. Zadzwoń: +48 502 568 438, napisz: microcomp@microcomp.co. Odpowiadamy w ciągu 24h.",
  alternates: { canonical: "https://microcomp.co/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── HERO ─── */}
        <section style={{ position: "relative", paddingTop: 120, paddingBottom: 80, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, var(--color-navy) 0%, #0c2d1e 100%)" }} />
          <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
          <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
            <ScrollReveal>
              <p style={{ color: "var(--color-green)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Kontakt
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h1 style={{ color: "white", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, marginBottom: 20, letterSpacing: "-0.02em", maxWidth: 640 }}>
                Porozmawiajmy o Twoim IT
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, maxWidth: 560 }}>
                Zadzwoń, napisz lub wypełnij formularz. Odpowiadamy w ciągu 24 godzin — zwykle znacznie szybciej.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── CONTACT CARDS ─── */}
        <section className="section-padding" style={{ background: "white" }}>
          <div className="container-main">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20, marginTop: -100, position: "relative", zIndex: 3 }}>
              {[
                {
                  icon: <Phone size={24} />,
                  label: "Telefon",
                  value: COMPANY.phone,
                  href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
                  sub: "Pon–Pt 9:00–18:00",
                  color: "var(--color-green)",
                },
                {
                  icon: <Mail size={24} />,
                  label: "E-mail",
                  value: COMPANY.email,
                  href: `mailto:${COMPANY.email}`,
                  sub: "Odpowiadamy w 24h",
                  color: "#3B82F6",
                },
                {
                  icon: <MapPin size={24} />,
                  label: "Adres",
                  value: COMPANY.address,
                  href: "https://maps.google.com/?q=Niepodległości+69/3,+74-100+Gardno",
                  sub: `${COMPANY.city}, ${COMPANY.county}`,
                  color: "#8B5CF6",
                },
                {
                  icon: <Clock size={24} />,
                  label: "Godziny pracy",
                  value: "Pon–Pt 9:00–18:00",
                  href: null,
                  sub: "Wsparcie zdalne: 8:00–18:00",
                  color: "#F59E0B",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 70}>
                  <div style={{ background: "white", borderRadius: 16, padding: "28px 24px", border: "1px solid var(--color-slate-200)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", textAlign: "center" }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", background: `${item.color}18`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: item.color }}>
                      {item.icon}
                    </div>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 12, color: "var(--color-slate-400)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: "var(--color-navy)", textDecoration: "none", display: "block", marginBottom: 4 }}>
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: "var(--color-navy)", marginBottom: 4 }}>
                        {item.value}
                      </div>
                    )}
                    <div style={{ color: "var(--color-slate-400)", fontSize: 13 }}>
                      {item.sub}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FORM + INFO ─── */}
        <section className="section-padding" style={{ background: "var(--color-slate-50)" }}>
          <div className="container-main">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
              {/* ─── FORM ─── */}
              <ScrollReveal>
                <div style={{ background: "white", borderRadius: 20, padding: "40px 36px", border: "1px solid var(--color-slate-200)" }}>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 24, color: "var(--color-navy)", marginBottom: 8 }}>
                    Napisz do nas
                  </h2>
                  <p style={{ color: "var(--color-slate-500)", fontSize: 15, marginBottom: 32 }}>
                    Wypełnij formularz — odpowiemy najpóźniej następnego dnia roboczego.
                  </p>
              <ContactForm />
                </div>
              </ScrollReveal>

              {/* ─── INFO PANEL ─── */}
              <ScrollReveal delay={120}>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <div>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 24, color: "var(--color-navy)", marginBottom: 12 }}>
                      Jak dojechać
                    </h2>
                    <p style={{ color: "var(--color-slate-500)", fontSize: 15, lineHeight: 1.7 }}>
                      Siedziba Microcomp znajduje się w Gardnie (gmina Gryfino), przy ul. Niepodległości 69/3 — kilkanaście minut od Gryfina i około 25 minut od Szczecina.
                    </p>
                  </div>

                  {/* Mini map placeholder */}
                  <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--color-slate-200)", height: 220, background: "var(--color-slate-100)" }}>
                    <iframe
                      src="https://www.google.com/maps?q=53.265172,14.6142458&z=16&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa lokalizacji Microcomp Gardno"
                    />
                  </div>

                  <div style={{ padding: "28px 24px", background: "white", borderRadius: 16, border: "1px solid var(--color-slate-200)" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 17, color: "var(--color-navy)", marginBottom: 20 }}>
                      Obszar działania
                    </h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {COMPANY.serviceArea.map((city) => (
                        <span key={city} style={{ padding: "6px 14px", background: "var(--color-slate-50)", borderRadius: 100, fontSize: 13, color: "var(--color-slate-600)", fontFamily: "var(--font-heading)", fontWeight: 500 }}>
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: "28px 24px", background: "var(--color-navy)", borderRadius: 16 }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 17, color: "white", marginBottom: 16 }}>
                      Potrzebujesz szybkiej pomocy?
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                      Jeśli masz pilny problem techniczny — zadzwoń od razu. Odbieramy telefony od poniedziałku do piątku, 8:00–18:00.
                    </p>
                    <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--color-green)", color: "white", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, padding: "14px 24px", borderRadius: 10, textDecoration: "none", justifyContent: "center" }}>
                      <Phone size={18} />{COMPANY.phone}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── WHAT TO EXPECT ─── */}
        <section className="section-padding" style={{ background: "white" }}>
          <div className="container-main">
            <ScrollReveal>
              <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(22px, 3vw, 30px)", color: "var(--color-navy)", marginBottom: 12, textAlign: "center" }}>
                Czego się spodziewać po kontakcie
              </h2>
              <p style={{ color: "var(--color-slate-500)", fontSize: 16, marginBottom: 48, textAlign: "center" }}>
                Żadnego nacisku sprzedażowego. Szczegółowa odpowiedź, wycena bez zobowiązań.
              </p>
            </ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
              {[
                { step: "01", title: "Odpowiadamy", desc: "W ciągu 24h — zwykle w 2–3 godziny. W godzinach pracy często szybciej." },
                { step: "02", title: "Pytamy", desc: "Dopytamy o szczegóły, żeby zrozumieć sytuację i zaproponować realne rozwiązanie." },
                { step: "03", title: "Wycena", desc: "Przesyłamy szczegółową wycenę z zakresem prac, czasem i ceną — bez ukrytych kosztów." },
                { step: "04", title: "Decyzja", desc: "Zdecyduj bez presji. Możesz wybrać innego wykonawcę — rozumiemy." },
              ].map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 70}>
                  <div style={{ textAlign: "center", padding: "32px 20px" }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 40, color: "var(--color-green)", opacity: 0.25, marginBottom: 12, lineHeight: 1 }}>
                      {item.step}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 17, color: "var(--color-navy)", marginBottom: 10 }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "var(--color-slate-500)", fontSize: 14, lineHeight: 1.7 }}>
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
