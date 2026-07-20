import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePageContent from "./HomePageContent";
import { SCHEMA_LOCAL_BUSINESS } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Microcomp Gardno — IT, Monitoring, Alarmy, Strony WWW dla Firm i Domów",
  description:
    "Kompleksowa obsługa IT dla firm i domów w Gardnie i okolicach. Monitoring, alarmy, sieci komputerowe, Comarch ERP, strony WWW. Ponad 20 lat doświadczenia.",
  alternates: { canonical: "https://microcomp.co" },
};

export default function HomePage() {
  const jsonLd = JSON.stringify(SCHEMA_LOCAL_BUSINESS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <Header />
      <main>
        <HomePageContent />
      </main>
      <Footer />
    </>
  );
}
