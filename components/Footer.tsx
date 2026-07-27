"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/facts";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-navy)",
        color: "white",
        paddingTop: 72,
        paddingBottom: 40,
      }}
    >
      <div className="container-main">
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 48,
            paddingBottom: 56,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 20,
                letterSpacing: "0.08em",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  background: "var(--color-green)",
                  color: "white",
                  padding: "3px 7px",
                  borderRadius: 5,
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                IT
              </span>
              MICROCOMP
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 280,
              }}
            >
              Twój zaufany partner IT w Gardnie i okolicach. Kompleksowa obsługa, doświadczenie i bezpieczeństwo od 2000 roku.
            </p>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                gap: 16,
              }}
            >
              <span
                style={{
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: 6,
                  fontFamily: "var(--font-heading)",
                }}
              >
                Microsoft Partner
              </span>
              <span
                style={{
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: 6,
                  fontFamily: "var(--font-heading)",
                }}
              >
                Comarch Partner
              </span>
              <span
                style={{
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: 6,
                  fontFamily: "var(--font-heading)",
                }}
              >
                PcBiznes Partner
              </span>
            </div>
          </div>

          {/* Usługi */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 20,
              }}
            >
              Usługi
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["Monitoring CCTV", "/uslugi/monitoring-cctv"],
                ["IT dla firm", "/uslugi/it-dla-firm"],
                ["Strony internetowe", "/uslugi/strony-internetowe"],
                ["Sieci komputerowe", "/uslugi/sieci-komputerowe"],
                ["Comarch ERP", "/uslugi/oprogramowanie-biurowe"],
                ["Serwis i backup", "/uslugi/backup-danych"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => ((e.target as HTMLElement).style.color = "white")}
                    onMouseOut={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lokalizacja */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 20,
              }}
            >
              Lokalizacja
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Gardno (siedziba)", "/lokalizacja/gardno"],
                ["Szczecin", "/lokalizacja/szczecin"],
                ["Gryfino", "/lokalizacja/gryfino"],
                ["Stargard", "/lokalizacja/stargard"],
                ["Pyrzyce", "/lokalizacja/pyrzyce"],
                ["Powiat gryfiński", "/lokalizacja/powiat-gryfinski"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => ((e.target as HTMLElement).style.color = "white")}
                    onMouseOut={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 20,
              }}
            >
              Kontakt
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => ((e.target as HTMLElement).style.color = "var(--color-green-light)")}
                onMouseOut={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
              >
                <Phone size={15} style={{ color: "var(--color-green)", flexShrink: 0 }} />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => ((e.target as HTMLElement).style.color = "var(--color-green-light)")}
                onMouseOut={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
              >
                <Mail size={15} style={{ color: "var(--color-green)", flexShrink: 0 }} />
                {COMPANY.email}
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 14,
                }}
              >
                <MapPin
                  size={15}
                  style={{ color: "var(--color-green)", flexShrink: 0, marginTop: 2 }}
                />
                <span>
                  {COMPANY.address}
                  <br />
                  {COMPANY.city}, {COMPANY.county}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
            © {year} {COMPANY.fullName}. Wszystkie prawa zastrzeżone.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <Link
              href="/polityka-prywatnosci"
              style={{
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                fontSize: 13,
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
              onMouseOut={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.35)")}
            >
              Polityka prywatności
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>|</span>
            <Link
              href="/kontakt"
              style={{
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                fontSize: 13,
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
              onMouseOut={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.35)")}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
