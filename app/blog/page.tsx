import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Blog IT — Poradniki i Aktualności",
  description:
    "Poradniki IT, aktualności o bezpieczeństwie, monitoring i technologie. Pisane przez ekspertów Microcomp.",
  alternates: { canonical: "https://microcomp.co/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "var(--color-navy)", paddingTop: 120, paddingBottom: 80 }} className="grid-pattern">
          <div className="container-main">
            <ScrollReveal>
              <p style={{ color: "var(--color-green)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Blog
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h1 style={{ color: "white", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, marginBottom: 16 }}>
                Wiedza IT prosto od ekspertów
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.7 }}>
                Poradniki, aktualności i case studies z zakresu bezpieczeństwa IT, monitoringu i technologii.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding" style={{ background: "var(--color-slate-50)" }}>
          <div className="container-main">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
              {BLOG_POSTS.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 60}>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        background: "white",
                        borderRadius: 14,
                        overflow: "hidden",
                        border: "1px solid var(--color-slate-200)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          height: 180,
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: `linear-gradient(to top, rgba(11,24,41,0.6) 0%, transparent 60%)`,
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: 12,
                            left: 16,
                          }}
                        >
                          <span
                            style={{
                              background: post.color,
                              color: "white",
                              fontSize: 11,
                              fontWeight: 700,
                              padding: "3px 10px",
                              borderRadius: 100,
                              fontFamily: "var(--font-heading)",
                            }}
                          >
                            {post.tag}
                          </span>
                        </div>
                      </div>
                      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                          <Calendar size={12} style={{ color: "var(--color-slate-400)" }} />
                          <span style={{ color: "var(--color-slate-400)", fontSize: 12 }}>{post.date}</span>
                          <span style={{ color: post.color, fontSize: 12, fontWeight: 600 }}>{post.tag}</span>
                        </div>
                        <h2
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            fontSize: 17,
                            color: "var(--color-navy)",
                            marginBottom: 10,
                            lineHeight: 1.3,
                          }}
                        >
                          {post.title}
                        </h2>
                        <p style={{ color: "var(--color-slate-500)", fontSize: 13, lineHeight: 1.6, flex: 1 }}>
                          {post.excerpt}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            color: "var(--color-green)",
                            fontFamily: "var(--font-heading)",
                            fontWeight: 600,
                            fontSize: 13,
                            marginTop: 16,
                          }}
                        >
                          Czytaj dalej <ArrowRight size={13} />
                        </div>
                      </div>
                    </div>
                  </Link>
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
