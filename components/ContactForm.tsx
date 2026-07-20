"use client";

import { Send } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        // Placeholder — podłącz API endpoint lub e-mail
        console.log("Form data:", Object.fromEntries(data));
        alert("Dziękujemy za wiadomość! Odpowiemy najpóźniej następnego dnia roboczego.");
        form.reset();
      }}
      style={{ display: "flex", flexDirection: "column", gap: 18 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label htmlFor="contact-name" style={{ display: "block", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, color: "var(--color-navy)", marginBottom: 6 }}>
            Imię i nazwisko *
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="np. Jan Kowalski"
            required
            style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1px solid var(--color-slate-200)", fontSize: 15, color: "var(--color-navy)", outline: "none", fontFamily: "inherit", boxSizing: "border-box", background: "white" }}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" style={{ display: "block", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, color: "var(--color-navy)", marginBottom: 6 }}>
            Telefon
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="np. 502 568 438"
            style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1px solid var(--color-slate-200)", fontSize: 15, color: "var(--color-navy)", outline: "none", fontFamily: "inherit", boxSizing: "border-box", background: "white" }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" style={{ display: "block", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, color: "var(--color-navy)", marginBottom: 6 }}>
          E-mail *
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="np. jan@firma.pl"
          required
          style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1px solid var(--color-slate-200)", fontSize: 15, color: "var(--color-navy)", outline: "none", fontFamily: "inherit", boxSizing: "border-box", background: "white" }}
        />
      </div>
      <div>
        <label htmlFor="contact-company" style={{ display: "block", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, color: "var(--color-navy)", marginBottom: 6 }}>
          Nazwa firmy
        </label>
        <input
          id="contact-company"
          type="text"
          name="company"
          placeholder="np. Inwest Bud Sp. z o.o."
          style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1px solid var(--color-slate-200)", fontSize: 15, color: "var(--color-navy)", outline: "none", fontFamily: "inherit", boxSizing: "border-box", background: "white" }}
        />
      </div>
      <div>
        <label htmlFor="contact-topic" style={{ display: "block", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, color: "var(--color-navy)", marginBottom: 6 }}>
          Zakres zainteresowania
        </label>
        <select
          id="contact-topic"
          name="topic"
          style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1px solid var(--color-slate-200)", fontSize: 15, color: "var(--color-navy)", outline: "none", fontFamily: "inherit", boxSizing: "border-box", background: "white" }}
        >
          <option value="">Wybierz temat</option>
          <option value="obsuga-it">Obsługa IT dla firm</option>
          <option value="monitoring">Monitoring CCTV</option>
          <option value="sieci">Sieci komputerowe</option>
          <option value="erp">Systemy ERP / Comarch</option>
          <option value="strony-www">Strony internetowe</option>
          <option value="serwis-backup">Serwis komputerów i backup danych</option>
          <option value="inne">Inne</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" style={{ display: "block", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, color: "var(--color-navy)", marginBottom: 6 }}>
          Wiadomość *
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Opisz krótko swoją sytuację lub pytanie..."
          required
          rows={5}
          style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1px solid var(--color-slate-200)", fontSize: 15, color: "var(--color-navy)", outline: "none", fontFamily: "inherit", boxSizing: "border-box", resize: "vertical", background: "white" }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <input type="checkbox" name="consent" id="consent" required style={{ marginTop: 3, flexShrink: 0 }} />
        <label htmlFor="consent" style={{ color: "var(--color-slate-500)", fontSize: 13, lineHeight: 1.5 }}>
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na wiadomość.{" "}
          <Link href="/polityka-prywatnosci" style={{ color: "var(--color-green)", textDecoration: "none" }}>
            Polityka prywatności
          </Link>
          .
        </label>
      </div>
      <button
        type="submit"
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--color-green)", color: "white", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, padding: "16px 32px", borderRadius: 10, border: "none", cursor: "pointer", marginTop: 4 }}
      >
        <Send size={16} />Wyślij wiadomość
      </button>
    </form>
  );
}
