"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import {
  Monitor,
  Briefcase,
  Globe,
  Network,
  Database,
  Laptop,
  Phone,
  Mail,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { COMPANY } from "@/lib/facts";
import { SERVICES } from "@/lib/services";

export default function HomePageContent() {
  const [showDesktopSpline, setShowDesktopSpline] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setShowDesktopSpline(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const stats = [
    { icon: <CheckCircle size={22} />, value: "20+", label: "lat doświadczenia" },
    { icon: <CheckCircle size={22} />, value: "200+", label: "obsługiwanych firm" },
    { icon: <CheckCircle size={22} />, value: "12", label: "miejscowości" },
    { icon: <CheckCircle size={22} />, value: "500+", label: "realizacji" },
  ];

  const usps = [
    {
      icon: <CheckCircle size={28} />,
      title: "Bezpieczeństwo na pierwszym miejscu",
      description:
        "Autoryzowany partner Comarch, PcBiznes i Microsoft. Systemy backupu, firewalle, szyfrowanie danych. Twoje dane i infrastruktura są chronione.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Szybka reakcja, zero przestojów",
      description:
        "Reagujemy w 30 min zdalnie, tego samego dnia na miejscu. Przestoje kosztują — my je minimalizujemy.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Jeden partner, całe IT",
      description:
        "Od monitoringu po ERP — nie musisz zarządzać kilkoma dostawcami. Jedna umowa, jeden kontakt, jedna odpowiedzialność.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Doświadczenie, nie teoria",
      description:
        "Od 1997 roku realizujemy projekty IT dla firm i instytucji w regionie. Znamy specyfikę zachodniopomorskiego.",
    },
  ];

  const testimonials = [
    {
      name: "Marek K.",
      company: "PHU Korus, Gryfino",
      quote:
        "Współpracujemy z Microcomp od 8 lat. Monitoring hali, sieć w biurze, serwer — wszystko na ich głowie. Zero problemów, szybka reakcja.",
      rating: 5,
    },
    {
      name: "Anna B.",
      company: "Gabinet Stomatologiczny, Szczecin",
      quote:
        "Potrzebowaliśmy systemu monitoringu i backupu danych pacjentów. Pan Dariusz zaproponował optymalne rozwiązanie, wszystko działa bezawaryjnie.",
      rating: 5,
    },
    {
      name: "Tomasz W.",
      company: "Firma transportowa, Stargard",
      quote:
        "Wdrożyli Comarch ERP Optima i skonfigurowali sieć w nowej siedzibie. Profesjonalnie, terminowo, bez niespodzianek.",
      rating: 5,
    },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    "monitoring-cctv": <Monitor size={28} />,
    "it-dla-firm": <Briefcase size={28} />,
    "strony-internetowe": <Globe size={28} />,
    "sieci-komputerowe": <Network size={28} />,
    "oprogramowanie-biurowe": <Database size={28} />,
    "backup-danych": <Laptop size={28} />,
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <div
        className="home-hero"
        style={{
          backgroundColor: "#07131f",
          backgroundImage:
            "radial-gradient(circle at 72% 38%, rgba(255,255,255,0.16), transparent 0 18%, transparent 36%), radial-gradient(circle at 86% 78%, rgba(8,45,28,0.45), transparent 0 24%, transparent 52%), linear-gradient(102deg, #07131f 0%, #0b1829 48%, #1B813E 48%, #176d36 100%)",
          minHeight: "680px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Single hero canvas — no image/card background stacking */}
        <div
          className="home-hero-overlay"
          aria-hidden="true"
        />

        <div
          className="home-hero-shell relative overflow-hidden"
          style={{
            width: "100%",
            maxWidth: 1240,
            margin: "0 auto",
            padding: "80px 24px 36px",
          }}
        >
          <div
            className="home-hero-grid relative overflow-hidden"
            style={{
              minHeight: 470,
              display: "flex",
            }}
          >
            <Spotlight
              className="-top-40 left-0 md:left-48 md:-top-20"
              fill="rgba(27,129,62,0.20)"
            />

            {/* Left content */}
            <div
              className="home-hero-copy"
              style={{
                flex: "1 1 50%",
                padding: "32px 56px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              <ScrollReveal delay={0}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(13,159,110,0.12)",
                    border: "1px solid rgba(13,159,110,0.25)",
                    borderRadius: 100,
                    padding: "5px 14px",
                    marginBottom: 28,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#0D9F6E",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      color: "#0D9F6E",
                      fontSize: 12,
                      fontWeight: 600,
                      fontFamily: "var(--font-heading)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    IT · Monitoring · Strony WWW
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <h1
                  className="home-hero-title"
                  style={{
                    color: "white",
                    fontSize: "clamp(32px, 4vw, 52px)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    maxWidth: 500,
                    marginBottom: 24,
                    letterSpacing: "-0.02em",
                  }}
                >
                  IT i monitoring firm
                  <span
                    style={{
                      display: "block",
                      color: "#0D9F6E",
                      background:
                        "linear-gradient(135deg, #0D9F6E, #34d399)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    woj. zachodniopomorskie
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <p
                  style={{
                    color: "rgba(255,255,255,0.58)",
                    fontSize: "clamp(15px, 1.5vw, 17px)",
                    lineHeight: 1.7,
                    maxWidth: 440,
                    marginBottom: 36,
                  }}
                >
                  Kompleksowa obsługa informatyczna firm i instytucji. Monitoring,
                  alarmy, sieci komputerowe, Comarch ERP, strony WWW. Ponad 20 lat
                  doświadczenia w woj. zachodniopomorskim.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={240}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 30 }}>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "#0D9F6E",
                      color: "white",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontSize: 14,
                      padding: "13px 24px",
                      borderRadius: 10,
                      textDecoration: "none",
                    }}
                  >
                    <Phone size={16} />
                    Zadzwoń teraz
                  </a>
                  <Link
                    href="/kontakt"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.8)",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontSize: 14,
                      padding: "13px 24px",
                      borderRadius: 10,
                      textDecoration: "none",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    Poproś o wycenę
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={320}>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                  {[
                    "20+ lat doświadczenia",
                    "Całe woj. zachodniopomorskie",
                  ].map((text) => (
                    <div
                      key={text}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        color: "rgba(255,255,255,0.45)",
                        fontSize: 12,
                        fontFamily: "var(--font-heading)",
                        fontWeight: 500,
                      }}
                    >
                      <CheckCircle
                        size={13}
                        style={{ color: "#0D9F6E", flexShrink: 0 }}
                      />
                      {text}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right content — 3D Spline scene */}
            <div
              className="home-hero-visual"
              style={{
                flex: "1 1 50%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "-8% -14% -10% -6%",
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                  maskImage: "radial-gradient(circle at 56% 48%, black, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "18%",
                  right: "10%",
                  bottom: 8,
                  height: 64,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(ellipse, rgba(7,19,31,0.66) 0%, rgba(7,19,31,0.34) 42%, rgba(7,19,31,0) 74%)",
                  filter: "blur(1px)",
                  transform: "perspective(520px) rotateX(58deg)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  width: "68%",
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.07) 38%, rgba(255,255,255,0) 70%)",
                  filter: "blur(1px)",
                  pointerEvents: "none",
                }}
              />
              <div
                className="home-hero-spline"
                style={{
                  width: "100%",
                  height: "min(480px, 54vw)",
                  minHeight: 390,
                  position: "relative",
                  zIndex: 1,
                  transform: "translateY(44px)",
                }}
              >
                {showDesktopSpline ? (
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full relative z-[1]"
                  />
                ) : null}
              </div>
              <div className="home-hero-mobile-photo" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* ─── STATS BAR ─── */}
      <section
        style={{
          background: "var(--color-slate-100)",
          borderBottom: "1px solid var(--color-slate-200)",
        }}
      >
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            }}
          >
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "32px 0",
                    borderRight: i < stats.length - 1 ? "1px solid var(--color-slate-200)" : "none",
                    paddingRight: i < stats.length - 1 ? 24 : 0,
                    marginRight: i < stats.length - 1 ? 24 : 0,
                  }}
                >
                  <div style={{ color: "var(--color-green)", flexShrink: 0 }}>{stat.icon}</div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: 28,
                        color: "var(--color-navy)",
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ color: "var(--color-slate-500)", fontSize: 13, marginTop: 4 }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USŁUGI ─── */}
      <section id="uslugi" className="section-padding" style={{ background: "white" }}>
        <div className="container-main">
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p
                style={{
                  color: "var(--color-green)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Nasze usługi
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 700,
                  color: "var(--color-navy)",
                  marginBottom: 16,
                }}
              >
                Kompleksowa obsługa IT w jednym miejscu
              </h2>
              <p
                style={{
                  color: "var(--color-slate-500)",
                  fontSize: 17,
                  maxWidth: 560,
                  margin: "0 auto",
                  lineHeight: 1.65,
                }}
              >
                Od monitoringu po wdrożenie ERP — realizujemy projekty całościowo,
                bez przerzucania odpowiedzialności między wykonawcami.
              </p>
            </div>
          </ScrollReveal>

          <div
            className="stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {SERVICES.map((service) => (
              <ScrollReveal key={service.slug}>
                <Link
                  href={`/uslugi/${service.slug}`}
                  className="card-hover"
                  style={{
                    display: "block",
                    padding: "32px 28px",
                    borderRadius: 14,
                    background: "white",
                    textDecoration: "none",
                    borderLeft: "3px solid transparent",
                  }}
                >
                  <div style={{ color: "var(--color-green)", marginBottom: 20 }}>
                    {iconMap[service.slug] || <Monitor size={28} />}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontSize: 18,
                      color: "var(--color-navy)",
                      marginBottom: 10,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-slate-500)",
                      fontSize: 14,
                      lineHeight: 1.6,
                      marginBottom: 20,
                    }}
                  >
                    {service.description.substring(0, 110)}...
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      color: "var(--color-green)",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    Zobacz zakres <ArrowRight size={14} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DLACZEGO MY ─── */}
      <section className="section-padding" style={{ background: "var(--color-navy)" }}>
        <div className="container-main">
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p
                style={{
                  color: "var(--color-green)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Dlaczego my
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Zaufanie budowane przez dekady
              </h2>
            </div>
          </ScrollReveal>

          <div
            className="stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {usps.map((usp) => (
              <ScrollReveal key={usp.title}>
                <div
                  style={{
                    padding: "32px 28px",
                    background: "var(--color-navy-light)",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ color: "var(--color-green)", marginBottom: 20 }}>{usp.icon}</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontSize: 17,
                      color: "white",
                      marginBottom: 10,
                    }}
                  >
                    {usp.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: 14,
                      lineHeight: 1.65,
                    }}
                  >
                    {usp.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOKALIZACJA ─── */}
      <section className="section-padding" style={{ background: "var(--color-slate-50)" }}>
        <div className="container-main">
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p
                style={{
                  color: "var(--color-green)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Gdzie działamy
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 700,
                  color: "var(--color-navy)",
                  marginBottom: 16,
                }}
              >
                Obsługujemy całe woj. zachodniopomorskie
              </h2>
              <p
                style={{
                  color: "var(--color-slate-500)",
                  fontSize: 17,
                  maxWidth: 520,
                  margin: "0 auto",
                }}
              >
                Siedziba w Gardnie, ale dojeżdżamy i działamy zdalnie w całym regionie.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {[
                { name: "Gardno", href: "/lokalizacja/gardno", highlight: true },
                { name: "Szczecin", href: "/lokalizacja/szczecin", highlight: false },
                { name: "Gryfino", href: "/lokalizacja/gryfino", highlight: false },
                { name: "Stargard", href: "/lokalizacja/stargard", highlight: false },
                { name: "Pyrzyce", href: "/lokalizacja/pyrzyce", highlight: false },
                { name: "Powiat gryfiński", href: "/lokalizacja/powiat-gryfinski", highlight: false },
                { name: "Chojna", href: "/lokalizacja", highlight: false },
                { name: "Goleniów", href: "/lokalizacja", highlight: false },
                { name: "Widuchowa", href: "/lokalizacja", highlight: false },
                { name: "Police", href: "/lokalizacja", highlight: false },
                { name: "Banie", href: "/lokalizacja", highlight: false },
                { name: "Kołbaskowo", href: "/lokalizacja", highlight: false },
              ].map((loc) => (
                <Link
                  key={loc.name}
                  href={loc.href}
                  style={{
                    padding: "10px 20px",
                    borderRadius: 8,
                    background: loc.highlight ? "var(--color-green)" : "white",
                    color: loc.highlight ? "white" : "var(--color-navy)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: "none",
                    border: loc.highlight ? "none" : "1px solid var(--color-slate-200)",
                  }}
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── OPINIE ─── */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-main">
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p
                style={{
                  color: "var(--color-green)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Opinie klientów
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 700,
                  color: "var(--color-navy)",
                }}
              >
                Co mówią o nas klienci
              </h2>
            </div>
          </ScrollReveal>

          <div
            className="stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {testimonials.map((t) => (
              <ScrollReveal key={t.name}>
                <div
                  className="card-hover"
                  style={{ padding: "32px 28px", borderRadius: 14, background: "white" }}
                >
                  <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} style={{ color: "#F59E0B", fill: "#F59E0B" }} />
                    ))}
                  </div>
                  <p
                    style={{
                      color: "var(--color-slate-600)",
                      fontSize: 15,
                      lineHeight: 1.7,
                      marginBottom: 24,
                      fontStyle: "italic",
                    }}
                  >
                    „{t.quote}"
                  </p>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "var(--color-navy)",
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ color: "var(--color-slate-500)", fontSize: 13, marginTop: 2 }}>
                      {t.company}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-green) 0%, var(--color-green-dark) 100%)",
          padding: "88px 0",
        }}
      >
        <div className="container-main" style={{ textAlign: "center" }}>
          <ScrollReveal>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: "white",
                marginBottom: 20,
              }}
            >
              Potrzebujesz wsparcia IT?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                fontSize: 18,
                maxWidth: 520,
                margin: "0 auto 40px",
                lineHeight: 1.6,
              }}
            >
              Zadzwoń lub napisz — odpowiadamy w ciągu 2 godzin. Bezpłatna
              konsultacja i wycena.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
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
              <Link
                href="/kontakt"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "white",
                  fontWeight: 600,
                  fontFamily: "var(--font-heading)",
                  fontSize: 16,
                  padding: "16px 32px",
                  borderRadius: 10,
                  textDecoration: "none",
                  border: "2px solid rgba(255,255,255,0.4)",
                }}
              >
                <Mail size={18} />
                Napisz do nas
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
