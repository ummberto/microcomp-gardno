"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY } from "@/lib/facts";

const NAV_LINKS = [
  { href: "/#uslugi", label: "Usługi" },
  { href: "/lokalizacja", label: "Lokalizacja" },
  { href: "/o-firmie", label: "O firmie" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          background: scrolled
            ? "rgba(11, 24, 41, 0.97)"
            : "rgba(11, 24, 41, 0.85)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 20,
              color: "white",
              textDecoration: "none",
              letterSpacing: "0.08em",
              display: "flex",
              alignItems: "center",
              minHeight: 44,
              gap: 10,
            }}
          >
            <span
              style={{
                background: "var(--color-green)",
                color: "white",
                padding: "4px 8px",
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              IT
            </span>
            MICROCOMP
          </Link>

          {/* Desktop nav */}
          <div className="desktop-nav">
            <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{ color: "rgba(255,255,255,0.82)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="desktop-cta">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "rgba(255,255,255,0.7)",
                fontSize: 14,
                textDecoration: "none",
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                minHeight: 44,
              }}
            >
              <Phone size={14} />
              {COMPANY.phone}
            </a>
            <Link
              href="/kontakt"
              className="btn-primary"
              style={{ fontSize: 14, padding: "12px 20px", marginLeft: 12 }}
            >
              Zamów rozmowę
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="mobile-menu-btn"
            aria-label="Otwórz menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "var(--color-navy)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Mobile menu header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 24px",
              height: 72,
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 20,
                color: "white",
                letterSpacing: "0.08em",
              }}
            >
              MICROCOMP
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Zamknij menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile nav links */}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "24px",
              paddingTop: 72,
              gap: 4,
              flex: 1,
              overflowY: "auto",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "white",
                  fontSize: 22,
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div
            style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "var(--color-green)",
                color: "white",
                fontWeight: 600,
                fontFamily: "var(--font-heading)",
                fontSize: 16,
                padding: "16px 24px",
                borderRadius: 10,
                textDecoration: "none",
              }}
            >
              <Phone size={18} />
              {COMPANY.phone}
            </a>
            <Link
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "rgba(255,255,255,0.08)",
                color: "white",
                fontWeight: 600,
                fontFamily: "var(--font-heading)",
                fontSize: 16,
                padding: "16px 24px",
                borderRadius: 10,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Formularz kontaktowy
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
