import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Polityka prywatności strony microcomp.co: zakres danych, cel kontaktu, administrator i prawa użytkownika.",
  alternates: { canonical: "https://microcomp.co/polityka-prywatnosci" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "var(--color-navy)", paddingTop: 120, paddingBottom: 72 }}>
          <div className="container-main">
            <p style={{ color: "var(--color-green)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Dokument informacyjny
            </p>
            <h1 style={{ color: "white", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", maxWidth: 760 }}>
              Polityka prywatności
            </h1>
          </div>
        </section>

        <section className="section-padding" style={{ background: "white" }}>
          <div className="container-main" style={{ maxWidth: 860 }}>
            <div style={{ color: "var(--color-slate-600)", fontSize: 16, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 24 }}>
                Administratorem danych osobowych przekazywanych przez formularz kontaktowy, telefonicznie lub mailowo jest {COMPANY.fullName}, {COMPANY.address}, {COMPANY.city}.
              </p>

              {[
                [
                  "Jakie dane przetwarzamy?",
                  "Dane podane dobrowolnie w formularzu kontaktowym: imię i nazwisko, telefon, adres e-mail, nazwa firmy, temat sprawy oraz treść wiadomości.",
                ],
                [
                  "W jakim celu?",
                  "Dane wykorzystujemy wyłącznie po to, aby odpowiedzieć na zapytanie, przygotować ofertę lub obsłużyć zgłoszenie serwisowe.",
                ],
                [
                  "Podstawa prawna",
                  "Podstawą przetwarzania jest prawnie uzasadniony interes administratora polegający na obsłudze zapytań i kontaktu z klientami.",
                ],
                [
                  "Jak długo przechowujemy dane?",
                  "Dane z korespondencji przechowujemy przez czas potrzebny do obsługi sprawy, a następnie przez okres wymagany przepisami lub zabezpieczeniem ewentualnych roszczeń.",
                ],
                [
                  "Prawa użytkownika",
                  "Masz prawo dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu oraz skargi do Prezesa UODO.",
                ],
                [
                  "Kontakt w sprawie danych",
                  `W sprawach związanych z prywatnością napisz na ${COMPANY.email} albo zadzwoń: ${COMPANY.phone}.`,
                ],
              ].map(([title, body]) => (
                <section key={title} style={{ marginBottom: 28 }}>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: "var(--color-navy)", marginBottom: 10 }}>
                    {title}
                  </h2>
                  <p>{body}</p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
