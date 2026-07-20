import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { COMPANY, SCHEMA_LOCAL_BUSINESS } from "@/lib/facts";
import { SERVICES, getIcon } from "@/lib/services";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    alternates: { canonical: `https://microcomp.co/uslugi/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceIndex = SERVICES.findIndex((s) => s.slug === slug);
  const Icon = getIcon(service.iconName);

  // Related services from service data
  const relatedServicesList = SERVICES.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  const jsonLd = JSON.stringify({
    ...SCHEMA_LOCAL_BUSINESS,
    name: `Microcomp — ${service.title}`,
    description: service.description,
    url: `https://microcomp.co/uslugi/${slug}`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Header />
      <main>
        {/* ─── HERO ─── */}
        {/* ─── HERO with image ─── */}
        <section
          style={{
            position: "relative",
            paddingTop: 120,
            paddingBottom: 80,
            overflow: "hidden",
          }}
        >
          {/* Background image */}
          <img
            src={service.image}
            alt={service.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(11, 24, 41, 0.82)",
            }}
          />
          {/* Grid pattern */}
          <div
            className="grid-pattern"
            style={{ position: "absolute", inset: 0, opacity: 0.3 }}
          />
          <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
            <ScrollReveal>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                <Link
                  href="/#uslugi"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: 13,
                    fontFamily: "var(--font-heading)",
                    textDecoration: "none",
                  }}
                >
                  Usługi
                </Link>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
                  /
                </span>
                <span
                  style={{
                    color: "var(--color-green)",
                    fontSize: 13,
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                  }}
                >
                  {service.title}
                </span>
              </div>
            </ScrollReveal>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 28,
              }}
            >
              <ScrollReveal delay={60}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 16,
                    background: "rgba(13,159,110,0.15)",
                    border: "1px solid rgba(13,159,110,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-green)",
                  }}
                >
                  {Icon && <Icon size={32} />}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={120}>
              <h1
                style={{
                  color: "white",
                  fontSize: "clamp(32px, 5vw, 52px)",
                  fontWeight: 700,
                  marginBottom: 20,
                  letterSpacing: "-0.02em",
                  maxWidth: 700,
                }}
              >
                {service.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "clamp(16px, 2vw, 19px)",
                  lineHeight: 1.7,
                  maxWidth: 640,
                  marginBottom: 36,
                }}
              >
                {service.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={280}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="btn-primary"
                >
                  <Phone size={17} />
                  Zadzwoń teraz
                </a>
                <Link href="/kontakt" className="btn-secondary">
                  Poproś o wycenę
                  <ArrowRight size={17} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── INTRO ─── */}
        <section
          className="section-padding"
          style={{ background: "white" }}
        >
          <div className="container-main">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
                alignItems: "start",
              }}
            >
              <ScrollReveal>
                <h2
                  style={{
                    fontSize: "clamp(22px, 3vw, 32px)",
                    fontWeight: 700,
                    color: "var(--color-navy)",
                    marginBottom: 20,
                  }}
                >
                  Co oferujemy
                </h2>
                <p
                  style={{
                    color: "var(--color-slate-600)",
                    fontSize: 16,
                    lineHeight: 1.8,
                    marginBottom: 16,
                  }}
                >
                  {service.intro}
                </p>
                <p
                  style={{
                    color: "var(--color-slate-500)",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  Realizujemy usługi dla klientów{" "}
                  <strong style={{ color: "var(--color-navy)" }}>
                    w Gardnie i całym województwie zachodniopomorskim
                  </strong>{" "}
                  — dojeżdżamy do Szczecina, Gryfic, Nowogardu, Kamienia
                  Pomorskiego i okolicznych miejscowości.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <h2
                  style={{
                    fontSize: "clamp(22px, 3vw, 32px)",
                    fontWeight: 700,
                    color: "var(--color-navy)",
                    marginBottom: 28,
                  }}
                >
                  Co zyskujesz
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                      }}
                    >
                      <CheckCircle
                        size={20}
                        style={{
                          color: "var(--color-green)",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      />
                      <span
                        style={{
                          color: "var(--color-slate-600)",
                          fontSize: 15,
                          lineHeight: 1.6,
                        }}
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── STATS BAR ─── */}
        <section
          style={{
            background: "var(--color-navy)",
            padding: "56px 0",
          }}
        >
          <div className="container-main">
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 32,
                textAlign: "center",
              }}
            >
              {service.stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 60}>
                  <div
                    style={{
                      color: "var(--color-green)",
                      fontSize: "clamp(28px, 4vw, 40px)",
                      fontWeight: 700,
                      fontFamily: "var(--font-heading)",
                      letterSpacing: "-0.02em",
                      marginBottom: 6,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: 13,
                      fontFamily: "var(--font-heading)",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section
          className="section-padding"
          style={{ background: "var(--color-slate-50)" }}
        >
          <div className="container-main">
            <ScrollReveal>
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 34px)",
                  fontWeight: 700,
                  color: "var(--color-navy)",
                  marginBottom: 12,
                  textAlign: "center",
                }}
              >
                Jak działamy
              </h2>
              <p
                style={{
                  color: "var(--color-slate-500)",
                  textAlign: "center",
                  marginBottom: 48,
                  maxWidth: 520,
                  margin: "0 auto 48px",
                  fontSize: 16,
                }}
              >
                Przejrzysty proces — od pierwszego kontaktu po realizację i
                wsparcie.
              </p>
            </ScrollReveal>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 24,
              }}
            >
              {service.howItWorks.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 80}>
                  <div
                    style={{
                      background: "white",
                      borderRadius: 16,
                      padding: "28px 24px",
                      border: "1px solid var(--color-slate-200)",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "rgba(13,159,110,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-green)",
                        fontSize: 13,
                        fontWeight: 700,
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {i + 1}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: 16,
                        color: "var(--color-navy)",
                        marginBottom: 10,
                        paddingRight: 40,
                      }}
                    >
                      {step.step}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-slate-500)",
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── USE CASES ─── */}
        <section className="section-padding" style={{ background: "white" }}>
          <div className="container-main">
            <ScrollReveal>
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 34px)",
                  fontWeight: 700,
                  color: "var(--color-navy)",
                  marginBottom: 40,
                }}
              >
                Dla kogo
              </h2>
            </ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
              }}
            >
              {service.useCases.map((uc, i) => (
                <ScrollReveal key={uc.title} delay={i * 80}>
                  <div
                    style={{
                      padding: "28px 28px",
                      background: "var(--color-slate-50)",
                      borderRadius: 16,
                      border: "1px solid var(--color-slate-200)",
                      height: "100%",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: 17,
                        color: "var(--color-navy)",
                        marginBottom: 10,
                      }}
                    >
                      {uc.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-slate-500)",
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      {uc.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section
          className="section-padding"
          style={{ background: "var(--color-slate-50)" }}
        >
          <div className="container-main">
            <ScrollReveal>
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 34px)",
                  fontWeight: 700,
                  color: "var(--color-navy)",
                  marginBottom: 40,
                  textAlign: "center",
                }}
              >
                Często zadawane pytania
              </h2>
            </ScrollReveal>
            <div
              style={{
                maxWidth: 760,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {service.faq.map((item, i) => (
                <ScrollReveal key={item.question} delay={i * 40}>
                  <details
                    style={{
                      background: "white",
                      borderRadius: 10,
                      border: "1px solid var(--color-slate-200)",
                      overflow: "hidden",
                    }}
                  >
                    <summary
                      style={{
                        padding: "18px 24px",
                        cursor: "pointer",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        fontSize: 15,
                        color: "var(--color-navy)",
                        listStyle: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {item.question}
                      <span
                        style={{
                          color: "var(--color-green)",
                          fontSize: 18,
                          flexShrink: 0,
                        }}
                      >
                        +
                      </span>
                    </summary>
                    <div
                      style={{
                        padding: "0 24px 18px",
                        color: "var(--color-slate-600)",
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.answer}
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RELATED SERVICES ─── */}
        {relatedServicesList.length > 0 && (
          <section className="section-padding" style={{ background: "white" }}>
            <div className="container-main">
              <ScrollReveal>
                <h2
                  style={{
                    fontSize: "clamp(24px, 3vw, 34px)",
                    fontWeight: 700,
                    color: "var(--color-navy)",
                    marginBottom: 8,
                  }}
                >
                  Powiązane usługi
                </h2>
                <p
                  style={{
                    color: "var(--color-slate-500)",
                    marginBottom: 40,
                  }}
                >
                  Sprawdź również inne usługi, które mogą Cię zainteresować.
                </p>
              </ScrollReveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 16,
                }}
              >
                {relatedServicesList.map((s) => {
                  const RelatedIcon = getIcon(s.iconName);
                  return (
                    <ScrollReveal key={s.slug}>
                      <Link
                        href={`/uslugi/${s.slug}`}
                        className="card-hover"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          padding: "20px 24px",
                          borderRadius: 12,
                          background: "var(--color-slate-50)",
                          textDecoration: "none",
                          border: "1px solid var(--color-slate-200)",
                        }}
                      >
                        <div
                          style={{
                            color: "var(--color-green)",
                            flexShrink: 0,
                          }}
                        >
                          {RelatedIcon && <RelatedIcon size={24} />}
                        </div>
                        <div>
                          <div
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontWeight: 600,
                              fontSize: 15,
                              color: "var(--color-navy)",
                            }}
                          >
                            {s.title}
                          </div>
                        </div>
                        <ArrowRight
                          size={16}
                          style={{
                            color: "var(--color-green)",
                            marginLeft: "auto",
                            flexShrink: 0,
                          }}
                        />
                      </Link>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ─── CTA ─── */}
        <section
          style={{
            background:
              "linear-gradient(135deg, var(--color-green) 0%, var(--color-green-dark) 100%)",
            padding: "88px 0",
          }}
        >
          <div className="container-main" style={{ textAlign: "center" }}>
            <ScrollReveal>
              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 40px)",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 20,
                }}
              >
                Potrzebujesz {service.title}?
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.82)",
                  fontSize: 18,
                  maxWidth: 480,
                  margin: "0 auto 40px",
                  lineHeight: 1.6,
                }}
              >
                Zadzwoń lub napisz — odpowiadamy w ciągu 2 godzin. Bezpłatna
                konsultacja i wycena.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
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
      </main>
      <Footer />
    </>
  );
}
