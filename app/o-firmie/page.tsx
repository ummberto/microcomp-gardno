import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { Phone, Mail, Calendar, Shield, Users, Award, CheckCircle, ArrowRight, Star } from "lucide-react";
import { COMPANY, SCHEMA_LOCAL_BUSINESS } from "@/lib/facts";

export const metadata: Metadata = {
  title: "O Firmie — Microcomp Gardno. IT i zabezpieczenia od 2000 roku",
  description:
    "Poznaj Microcomp — firma IT z Gardna (woj. zachodniopomorskie). Od 2000 roku świadczymy usługi IT dla firm: monitoring, alarmy, sieci, Comarch Optima, strony WWW. Autoryzowany partner Comarch, PcBiznes, Microsoft.",
  alternates: { canonical: "https://microcomp.co/o-firmie" },
};

export default function OFirmiePage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── HERO ─── */}
        <section style={{ position: "relative", paddingTop: 120, paddingBottom: 80, overflow: "hidden" }}>
          <img src="/about-office-realistic.png" alt="Realistyczne zdjęcie biura IT Microcomp" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(11, 24, 41, 0.82)" }} />
          <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
          <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
            <ScrollReveal>
              <p style={{ color: "var(--color-green)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                O firmie
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h1 style={{ color: "white", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, marginBottom: 20, letterSpacing: "-0.02em", maxWidth: 680 }}>
                Twój partner IT i zabezpieczeń z Gardna, z tradycją od 1997 roku
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, maxWidth: 600 }}>
                Microcomp to firma z ponad 25-letnim doświadczeniem w obsłudze informatycznej firm i instytucji. Specjalizujemy się w systemach monitoringu, alarmach, sieciach komputerowych, wdrożeniach Comarch Optima i tworzeniu stron WWW.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── NUMBERS BAR ─── */}
        <section style={{ background: "var(--color-navy)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="container-main">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              {[
                { value: "1997", label: "Początki działalności IT", icon: <Calendar size={24} /> },
                { value: "2000", label: "Rok założenia Microcomp", icon: <Users size={24} /> },
                { value: "3", label: "Autoryzowani partnerzy", icon: <Award size={24} /> },
                { value: "4.9/5", label: "Ocena Google", icon: <Star size={24} /> },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 60}>
                  <div style={{ textAlign: "center", padding: "40px 20px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <div style={{ color: "var(--color-green)", marginBottom: 12, display: "flex", justifyContent: "center" }}>{stat.icon}</div>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(28px, 3vw, 40px)", color: "white", lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginTop: 8, fontFamily: "var(--font-heading)" }}>{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INTRO + FOUNDER ─── */}
        <section className="section-padding" style={{ background: "white" }}>
          <div className="container-main">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "center" }}>
              <ScrollReveal>
                <img
                  src="/dariusz-kmiecinski.jpg"
                  alt="Dariusz Kmieciński"
                  style={{ width: "100%", maxWidth: 360, aspectRatio: "1", objectFit: "cover", borderRadius: 20 }}
                />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p style={{ color: "var(--color-green)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                  Założyciel
                </p>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "var(--color-navy)", marginBottom: 20 }}>
                  Dariusz Kmieciński
                </h2>
                <p style={{ color: "var(--color-slate-600)", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                  Absolwent informatyki na Politechnice Szczecińskiej. Od 1997 roku zajmuje się profesjonalną obsługą informatyczną firm w regionie zachodniopomorskim.
                </p>
                <p style={{ color: "var(--color-slate-600)", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                  Specjalizuje się w projektowaniu sieci komputerowych, wdrożeniach systemów ERP Comarch oraz kompleksowej administracji IT dla małych i średnich przedsiębiorstw.
                </p>
                <p style={{ color: "var(--color-slate-600)", fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
                  Właściciel pozostaje w bezpośrednim kontakcie z klientami — każda sprawa jest prowadzona indywidualnie.
                </p>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                  <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-green)", fontFamily: "var(--font-heading)", fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
                    <Phone size={16} />{COMPANY.phone}
                  </a>
                  <a href={`mailto:${COMPANY.email}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-green)", fontFamily: "var(--font-heading)", fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
                    <Mail size={16} />{COMPANY.email}
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── WHY US ─── */}
        <section className="section-padding" style={{ background: "var(--color-slate-50)" }}>
          <div className="container-main">
            <ScrollReveal>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "var(--color-navy)", marginBottom: 12, textAlign: "center" }}>
                Dlaczego Microcomp?
              </h2>
              <p style={{ color: "var(--color-slate-500)", fontSize: 16, marginBottom: 48, textAlign: "center" }}>
                7 powodów, dla których firmy z regionu nam ufają.
              </p>
            </ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {[
                { title: "Lokalność", desc: "Siedziba w Gardnie, ale działamy w całym woj. zachodniopomorskim. Znamy specyfikę regionu." },
                { title: "Doświadczenie", desc: "Od 1997 roku na rynku. 20+ lat to setki wdrożonych systemów i zadowolonych klientów." },
                { title: "Stały kontakt", desc: "Jedna umowa, jeden opiekun. Nie musisz się przekopywać przez menu голосового automatu." },
                { title: "Szybka reakcja", desc: "Reagujemy zdalnie w 30 minut. Na miejscu — tego samego dnia dla klientów abonamentowych." },
                { title: "Autoryzowane partnerstwa", desc: "Jesteśmy partnerem Comarch, PcBiznes i Microsoft — rozwiązania są objęte pełnym wsparciem producenta." },
                { title: "Przejrzyste ceny", desc: "Nigdy nie doliczamy ukrytych kosztów. Każda wycena jest szczegółowa i zrozumiała." },
                { title: "Kompleksowość", desc: "Jedna firma — całe IT: monitoring, sieci, ERP, strony WWW, serwis PC, backup." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 60}>
                  <div style={{ padding: "28px 24px", background: "white", borderRadius: 14, border: "1px solid var(--color-slate-200)", height: "100%" }}>
                    <CheckCircle size={22} style={{ color: "var(--color-green)", marginBottom: 14 }} />
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: "var(--color-navy)", marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ color: "var(--color-slate-500)", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── VALUES ─── */}
        <section className="section-padding" style={{ background: "white" }}>
          <div className="container-main">
            <ScrollReveal>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "var(--color-navy)", marginBottom: 40, textAlign: "center" }}>
                Nasze wartości
              </h2>
            </ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
              {[
                { title: "Rzetelność", desc: "Robimy to, co obiecujemy. Jeśli mówimy, że przyjedziemy w czwartek — przyjeżdżamy w czwartek." },
                { title: "Zrozumiałość", desc: "Tłumaczymy technologię językiem zrozumiałym dla każdego. Bez żargonu." },
                { title: "Odpowiedzialność", desc: "Bierzemy odpowiedzialność za swoje rozwiązania. Jeśli coś nie działa — naprawiamy." },
                { title: "Długoterminowość", desc: "Nie chcemy jednorazowych transakcji. Budujemy relacje na lata." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 70}>
                  <div style={{ textAlign: "center", padding: "32px 20px" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(13,159,110,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                      <Shield size={24} style={{ color: "var(--color-green)" }} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 17, color: "var(--color-navy)", marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ color: "var(--color-slate-500)", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── GOOGLE REVIEWS ─── */}
        <section className="section-padding" style={{ background: "var(--color-navy)" }}>
          <div className="container-main">
            <ScrollReveal>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "white", marginBottom: 12, textAlign: "center" }}>
                Co mówią o nas klienci
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginBottom: 48, textAlign: "center" }}>
                Ocena na Google Maps — 4.9/5 na podstawie 28 opinii
              </p>
            </ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
              {[
                { name: "Marek W.", role: "Właściciel hurtowni, Gryfice", text: "Pan Dariusz obsługuje naszą firmę od 12 lat. Monitoring, sieć, serwer — wszystko na głowie Microcomp. Jak dotychczas zero problemów.", rating: 5 },
                { name: "Anna K.", role: "Księgowa, biuro rachunkowe", text: "Comarch ERP Optima wdrożony perfekcyjnie. Przeszliśmy ze starego programu bezboleśnie. Wszystkie dane na miejscu.", rating: 5 },
                { name: "Tomasz R.", role: "Dyrektor, firma produkcyjna", text: "Zleciliśmy instalację kamer w hali — 16 sztuk, ANPR na wjeździe. Ekipa sprawna, terminowo, w budżecie. Polecam.", rating: 5 },
              ].map((review, i) => (
                <ScrollReveal key={review.name} delay={i * 80}>
                  <div style={{ padding: "28px 24px", background: "rgba(255,255,255,0.05)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} size={14} style={{ color: "#FBB800", fill: "#FBB800" }} />
                      ))}
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, color: "white" }}>{review.name}</div>
                      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>{review.role}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TIMELINE ─── */}
        <section className="section-padding" style={{ background: "var(--color-slate-50)" }}>
          <div className="container-main">
            <ScrollReveal>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "var(--color-navy)", marginBottom: 48, textAlign: "center" }}>
                Historia firmy
              </h2>
            </ScrollReveal>
            <div style={{ maxWidth: 700, margin: "0 auto" }}>
              {[
                { year: "1997", event: "Początki działalności Dariusza Kmiecińskiego w branży IT. Pierwsze instalacje sieci komputerowych i serwis PC dla firm w regionie gryfickim." },
                { year: "2000", event: "Założenie firmy Microcomp Dariusz Kmieciński w Gardnie. Rozpoczęcie kompleksowej obsługi informatycznej firm — sprzęt, oprogramowanie, serwisy." },
                { year: "2005", event: "Rozbudowa działu systemów zabezpieczeń. Pierwsze instalacje monitoringu CCTV dla firm i instytucji publicznych." },
                { year: "2010", event: "Nawiązanie autoryzowanego partnerstwa z Comarch. Pierwsze wdrożenia Comarch Optima dla małych i średnich przedsiębiorstw." },
                { year: "2015", event: "Poszerzenie oferty o strony internetowe i hosting. Autoryzowane partnerstwo z Microsoft." },
                { year: "2024", event: "Kompleksowa obsługa IT dla ponad 200 firm w regionie. Monitoring, alarmy, sieci, ERP, strony WWW — jedna firma, pełne wsparcie." },
              ].map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 80}>
                  <div style={{ display: "flex", gap: 24, paddingBottom: i < 5 ? 32 : 0 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--color-green)", flexShrink: 0, marginTop: 4 }} />
                      {i < 5 && <div style={{ width: 2, flex: 1, background: "var(--color-slate-200)", minHeight: 40, marginTop: 8 }} />}
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: "var(--color-green)", marginBottom: 4 }}>{item.year}</div>
                      <p style={{ color: "var(--color-slate-600)", fontSize: 15, lineHeight: 1.6 }}>{item.event}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PARTNERS ─── */}
        <section className="section-padding" style={{ background: "white" }}>
          <div className="container-main">
            <ScrollReveal>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "var(--color-navy)", marginBottom: 12, textAlign: "center" }}>
                Nasi partnerzy
              </h2>
              <p style={{ color: "var(--color-slate-500)", fontSize: 16, marginBottom: 48, textAlign: "center" }}>
                Autoryzowani partnerzy wiodących producentów rozwiązań IT.
              </p>
            </ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
              {[
                { name: "Comarch", since: "Partner autoryzowany", desc: "Systemy ERP dla małych i średnich przedsiębiorstw. Comarch Optima, ERP XL — wdrożenie, migracja, szkolenia.", highlights: ["Comarch Optima", "Comarch ERP XL", "Migracja danych", "Szkolenia i wsparcie techniczne"] },
                { name: "PcBiznes", since: "Partner autoryzowany", desc: "Automatyzacja pracy, systemy do zarządzania firmą. Programy do fakturowania, magazynu i księgowości.", highlights: ["Automatyzacja pracy", "Programy do fakturowania", "Moduły magazynowe", "Integracja z urzędami"] },
                { name: "Microsoft", since: "Partner autoryzowany", desc: "Rozwiązania Microsoft 365, Azure, Windows Server. Licencje, wdrożenia i wsparcie dla firm.", highlights: ["Microsoft 365", "Azure", "Windows Server", "SharePoint i Teams"] },
              ].map((partner, i) => (
                <ScrollReveal key={partner.name} delay={i * 100}>
                  <div style={{ padding: "32px 28px", borderRadius: 16, border: "1px solid var(--color-slate-200)", background: "var(--color-slate-50)" }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: "var(--color-navy)", marginBottom: 4 }}>{partner.name}</div>
                    <div style={{ color: "var(--color-green)", fontSize: 12, fontFamily: "var(--font-heading)", fontWeight: 600, marginBottom: 14 }}>{partner.since}</div>
                    <p style={{ color: "var(--color-slate-500)", fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{partner.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {partner.highlights.map((h) => (
                        <div key={h} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <CheckCircle size={13} style={{ color: "var(--color-green)", flexShrink: 0 }} />
                          <span style={{ color: "var(--color-slate-600)", fontSize: 13 }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="section-padding" style={{ background: "var(--color-slate-50)" }}>
          <div className="container-main">
            <ScrollReveal>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "var(--color-navy)", marginBottom: 40, textAlign: "center" }}>
                Często zadawane pytania
              </h2>
            </ScrollReveal>
            <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { q: "Czy obsługują Państwo klientów spoza Gardna?", a: "Tak. Działamy w całym województwie zachodniopomorskim. Na miejscu dojeżdżamy w promieniu 60 km. Na odległość — zdalnie, 80% problemów rozwiązujemy przez internet." },
                { q: "Czy można zlecić pojedyncze zadanie bez umowy abonamentowej?", a: "Tak. Oferujemy współpracę zadaniową — płacisz za rozwiązanie konkretnego problemu. Stawka godzinowa: 180 zł netto." },
                { q: "Jak szybko reagują Państwo na awarie?", a: "Krytyczne awarie — reakcja zdalna do 30 min w godzinach pracy (8:00–18:00). Na miejscu — w tym samym dniu dla klientów abonamentowych." },
                { q: "Czy są Państwo partnerem producenta, czy tylko odsprzedawcą?", a: "Jesteśmy autoryzowanym partnerem — instalowane rozwiązania są objęte pełnym wsparciem producenta, a my mamy dostęp do certyfikacji i pomocy technicznej." },
              ].map((item, i) => (
                <ScrollReveal key={item.q} delay={i * 40}>
                  <details style={{ background: "white", borderRadius: 10, border: "1px solid var(--color-slate-200)", overflow: "hidden" }}>
                    <summary style={{ padding: "18px 24px", cursor: "pointer", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 15, color: "var(--color-navy)", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                      {item.q}
                      <span style={{ color: "var(--color-green)", fontSize: 18 }}>+</span>
                    </summary>
                    <div style={{ padding: "0 24px 18px", color: "var(--color-slate-600)", fontSize: 14, lineHeight: 1.7 }}>
                      {item.a}
                    </div>
                  </details>
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
                Chcesz poznać nas bliżej?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 18, maxWidth: 480, margin: "0 auto 40px" }}>
                Zadzwoń i porozmawiaj z nami o swoich potrzebach IT.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "var(--color-green-dark)", fontWeight: 700, fontFamily: "var(--font-heading)", fontSize: 16, padding: "16px 32px", borderRadius: 10, textDecoration: "none" }}>
                  <Phone size={18} />{COMPANY.phone}
                </a>
                <Link href="/kontakt" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", fontWeight: 600, fontFamily: "var(--font-heading)", fontSize: 16, padding: "16px 32px", borderRadius: 10, textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)" }}>
                  Napisz do nas <ArrowRight size={18} />
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
