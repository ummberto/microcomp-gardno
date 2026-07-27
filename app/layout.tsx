import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://microcomp.co"),
  title: {
    default: "Microcomp Gardno — IT, Monitoring, Alarmy, Strony WWW dla Firm i Domów",
    template: "%s | Microcomp Gardno",
  },
  description:
    "Kompleksowa obsługa IT dla firm w Gardnie i okolicach. Monitoring CCTV, alarmy, sieci komputerowe, Comarch Optima, strony WWW. Od 2000 roku.",
  keywords: [
    "serwis komputerowy Gardno",
    "monitoring Gardno",
    "IT dla firm Gardno",
    "strony internetowe Gardno",
    "alarmy Gardno",
    "sieci komputerowe Gardno",
    "backup danych Gardno",
    "Comarch ERP Gardno",
  ],
  authors: [{ name: "Microcomp Dariusz Kmieciński" }],
  creator: "Microcomp",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://microcomp.co",
    siteName: "Microcomp Gardno",
    title: "Microcomp Gardno — IT, Monitoring, Alarmy, Strony WWW dla Firm i Domów",
    description:
      "Kompleksowa obsługa IT dla firm w Gardnie i okolicach. Monitoring, alarmy, sieci komputerowe, Comarch Optima, strony WWW.",
    images: [{ url: "https://microcomp.co/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microcomp Gardno — IT, Monitoring, Alarmy, Strony WWW",
    description: "Kompleksowa obsługa IT dla firm w Gardnie i okolicach.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://microcomp.co/#organization",
    "name": "Microcomp Dariusz Kmieciński",
    "alternateName": "Microcomp",
    "url": "https://microcomp.co",
    "telephone": "+48502568438",
    "email": "microcomp@microcomp.co",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Niepodległości 69/3",
      "addressLocality": "Gardno",
      "addressRegion": "województwo zachodniopomorskie",
      "postalCode": "74-100",
      "addressCountry": "PL",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.265172,
      "longitude": 14.6142458,
    },
    "areaServed": [
      "Gardno",
      "Szczecin",
      "Chojna",
      "Widuchowa",
      "Banie",
      "Goleniów",
      "Gryfino",
      "Stargard",
      "Police",
      "Pyrzyce",
    ],
    "foundingDate": "2000",
    "priceRange": "$$",
    "image": "https://microcomp.co/about-office-realistic.png",
  };

  return (
    <html lang="pl" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <meta name="ICBM" content="53.265172, 14.6142458" />
        <meta name="geo.position" content="53.265172;14.6142458" />
        <meta name="geo.region" content="PL-32" />
        <meta name="geo.placename" content="Gardno, Niepodległości 69/3" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
