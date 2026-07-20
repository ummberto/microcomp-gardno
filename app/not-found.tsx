import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/facts";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section
          style={{
            background: "var(--color-navy)",
            minHeight: "calc(100vh - 72px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="grid-pattern"
        >
          <div className="container-main" style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "clamp(100px, 20vw, 180px)",
                color: "rgba(13,159,110,0.15)",
                lineHeight: 1,
                marginBottom: 0,
                letterSpacing: "-0.04em",
              }}
            >
              404
            </div>
            <h1
              style={{
                color: "white",
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 700,
                marginBottom: 16,
                marginTop: -24,
              }}
            >
              Strona nie została znaleziona
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 17,
                maxWidth: 440,
                margin: "0 auto 40px",
                lineHeight: 1.6,
              }}
            >
              Być może strona została przeniesiona lub nie istnieje. Wróć do strony głównej lub skontaktuj się z nami.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--color-green)",
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "14px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                Strona główna
              </Link>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "14px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <Phone size={16} />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
