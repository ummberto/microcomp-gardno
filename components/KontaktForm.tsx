"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { COMPANY } from "@/lib/facts";

export default function KontaktForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "48px 40px",
          background: "white",
          borderRadius: 16,
          border: "1px solid var(--color-slate-200)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(13,159,110,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            color: "var(--color-green)",
          }}
        >
          <Send size={28} />
        </div>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 22,
            color: "var(--color-navy)",
            marginBottom: 12,
          }}
        >
          Wiadomość wysłana!
        </h3>
        <p style={{ color: "var(--color-slate-500)", fontSize: 15, lineHeight: 1.6 }}>
          Odpowiemy w ciągu 2 godzin w godzinach pracy (08:00–18:00).
        </p>
        <p style={{ color: "var(--color-slate-400)", fontSize: 14, marginTop: 8 }}>
          W sprawach pilnych dzwoń:{" "}
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            style={{ color: "var(--color-green)", fontWeight: 600, textDecoration: "none" }}
          >
            {COMPANY.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "40px",
        background: "white",
        borderRadius: 16,
        border: "1px solid var(--color-slate-200)",
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <label
          style={{
            display: "block",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 13,
            color: "var(--color-navy)",
            marginBottom: 6,
          }}
        >
          Imię i nazwisko *
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="np. Jan Kowalski"
          style={{
            width: "100%",
            padding: "12px 16px",
            border: "1px solid var(--color-slate-300)",
            borderRadius: 8,
            fontSize: 15,
            color: "var(--color-navy)",
            outline: "none",
            boxSizing: "border-box",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--color-green)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--color-slate-300)")}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 13,
              color: "var(--color-navy)",
              marginBottom: 6,
            }}
          >
            Telefon *
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="np. 501 234 567"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid var(--color-slate-300)",
              borderRadius: 8,
              fontSize: 15,
              color: "var(--color-navy)",
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-green)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-slate-300)")}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 13,
              color: "var(--color-navy)",
              marginBottom: 6,
            }}
          >
            E-mail
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="np. jan@firma.pl"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid var(--color-slate-300)",
              borderRadius: 8,
              fontSize: 15,
              color: "var(--color-navy)",
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-green)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-slate-300)")}
          />
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <label
          style={{
            display: "block",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 13,
            color: "var(--color-navy)",
            marginBottom: 6,
          }}
        >
          Wiadomość *
        </label>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Opisz krótko swoją potrzebę..."
          rows={5}
          style={{
            width: "100%",
            padding: "12px 16px",
            border: "1px solid var(--color-slate-300)",
            borderRadius: 8,
            fontSize: 15,
            color: "var(--color-navy)",
            outline: "none",
            boxSizing: "border-box",
            resize: "vertical",
            fontFamily: "inherit",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--color-green)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--color-slate-300)")}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          background: "var(--color-green)",
          color: "white",
          fontWeight: 700,
          fontFamily: "var(--font-heading)",
          fontSize: 15,
          padding: "16px 28px",
          borderRadius: 10,
          border: "none",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => ((e.target as HTMLElement).style.background = "var(--color-green-dark)")}
        onMouseOut={(e) => ((e.target as HTMLElement).style.background = "var(--color-green)")}
      >
        <Send size={16} />
        Wyślij wiadomość
      </button>

      <p style={{ color: "var(--color-slate-400)", fontSize: 12, marginTop: 12, textAlign: "center" }}>
        W sprawach pilnych zadzwoń:{" "}
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
          style={{ color: "var(--color-green)", fontWeight: 600, textDecoration: "none" }}
        >
          {COMPANY.phone}
        </a>
      </p>
    </form>
  );
}
