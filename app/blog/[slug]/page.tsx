import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/facts";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://microcomp.co/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Header />
      <main>
        <section style={{ background: "var(--color-navy)", paddingTop: 120, paddingBottom: 80 }} className="grid-pattern">
          <div className="container-main">
            <ScrollReveal>
              <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.5)", fontSize: 13, fontFamily: "var(--font-heading)", textDecoration: "none", marginBottom: 24 }}>
                <ArrowLeft size={14} /> Blog
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${post.color}22`, border: `1px solid ${post.color}44`, borderRadius: 100, padding: "6px 14px", marginBottom: 20 }}>
                <span style={{ color: post.color, fontSize: 12, fontWeight: 600 }}>{post.tag}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <h1 style={{ color: "white", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, marginBottom: 20, letterSpacing: "-0.02em", maxWidth: 700 }}>
                {post.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Calendar size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{post.date}</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding" style={{ background: "var(--color-slate-50)" }}>
          <div className="container-main">
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
              <ScrollReveal>
                <div
                  style={{
                    background: "white",
                    borderRadius: 16,
                    padding: "48px",
                    border: "1px solid var(--color-slate-200)",
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "var(--color-slate-700)",
                  }}
                >
                  <p style={{ fontSize: 18, fontWeight: 500, color: "var(--color-navy)", marginBottom: 20 }}>
                    {post.excerpt}
                  </p>
                  {post.content.map((para, i) => (
                    <p key={i} style={{ marginBottom: 16 }}>{para}</p>
                  ))}
                  <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--color-slate-200)" }}>
                    <p style={{ fontFamily: "var(--font-heading)", fontWeight: 600, color: "var(--color-navy)", marginBottom: 8 }}>
                      Potrzebujesz pomocy z tym tematem?
                    </p>
                    <p style={{ color: "var(--color-slate-500)", fontSize: 14 }}>
                      Skontaktuj się z nami — doradzimy bezpłatnie.
                    </p>
                    <Link href="/kontakt" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, background: "var(--color-green)", color: "white", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 14, padding: "12px 24px", borderRadius: 8, textDecoration: "none" }}>
                      Skontaktuj się
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {otherPosts.length > 0 && (
          <section className="section-padding" style={{ background: "white" }}>
            <div className="container-main">
              <ScrollReveal>
                <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "var(--color-navy)", marginBottom: 32 }}>
                  Więcej artykułów
                </h2>
              </ScrollReveal>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
                {otherPosts.map((p, i) => (
                  <ScrollReveal key={p.slug} delay={i * 80}>
                    <Link href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                      <div style={{ padding: "24px", borderRadius: 12, background: "var(--color-slate-50)", border: "1px solid var(--color-slate-200)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                          <span style={{ color: p.color, fontSize: 12, fontWeight: 600 }}>{p.tag}</span>
                          <span style={{ color: "var(--color-slate-400)", fontSize: 12 }}>· {p.date}</span>
                        </div>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 16, color: "var(--color-navy)", marginBottom: 8 }}>{p.title}</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-green)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13 }}>
                          Czytaj <ArrowLeft size={13} />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
