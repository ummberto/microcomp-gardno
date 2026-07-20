export interface Location {
  slug: string;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  // Rozszerzony content SEO
  intro: string;
  stats: { value: string; label: string }[];
  highlights: { icon: string; title: string; description: string }[];
  services: string[];
  image: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: "gardno",
    name: "Gardno",
    description: "Siedziba główna Microcomp. Obsługujemy klientów z Gardna i całego powiatu gryfińskiego od 1997 roku.",
    metaTitle: "IT, Monitoring, Alarmy w Gardnie",
    metaDescription:
      "Microcomp w Gardnie (gmina Gryfino). IT dla firm, monitoring, alarmy, strony WWW. Siedziba firmy, obsługa powiatu gryfińskiego i Szczecina.",
    primaryKeyword: "Microcomp Gardno",
    intro: "Gardno w gminie Gryfino to nasz dom — tutaj wszystko się zaczęło. Od 1997 roku zajmujemy się informatyką, a od 2000 roku prowadzimy firmę Microcomp. Od ponad 25 lat obsługujemy firmy i instytucje z Gardna, Gryfina oraz okolicznych miejscowości, a dzięki bliskości Szczecina łatwo docieramy do klientów w całej aglomeracji. Monitoring na posesjach, sieci w lokalnych firmach, strony WWW dla przedsiębiorców — to nasz codzienny kontakt z regionem.",
    stats: [
      { value: "2000", label: "rok założenia firmy" },
      { value: "25+", label: "lat w branży IT" },
      { value: "50+", label: "lokalnych klientów" },
      { value: "100%", label: "lokalny serwis" },
    ],
    highlights: [
      { icon: "Monitor", title: "Monitoring na miejscu", description: "Szybki dojazd w każde miejsce w Gardnie i gminie Gryfino — zwykle tego samego dnia." },
      { icon: "Network", title: "Sieci lokalne", description: "Okablowanie, WiFi, serwery — wszystko dla firm i instytucji w Gardnie i okolicy." },
      { icon: "Laptop", title: "Serwis bez kolejek", description: "Komputery i laptopy naprawiamy na miejscu — bez wysyłania do serwisu." },
    ],
    services: ["monitoring-cctv", "it-dla-firm", "strony-internetowe", "sieci-komputerowe", "backup-danych"],
    image: "/gardno.jpg",
  },
  {
    slug: "szczecin",
    name: "Szczecin",
    description: "Realizujemy projekty IT, monitoring i strony WWW dla firm ze Szczecina i okolic. Szybki dojazd z Gardna.",
    metaTitle: "IT dla Firm Szczecin — Monitoring, Sieci, Strony WWW",
    metaDescription:
      "Usługi IT dla firm w Szczecinie. Monitoring, sieci komputerowe, strony WWW, backup. Dojazd z Gardna w ok. 25 min.",
    primaryKeyword: "IT dla firm Szczecin",
    intro: "Szczecin to największe miasto w regionie i kluczowy rynek dla Microcomp. Z Gardna dojeżdżamy w około 25 minut, więc sprawnie obsługujemy firmy szczecińskie również na miejscu. Realizujemy tam projekty monitoringowe, sieciowe i WWW dla klientów z różnych branż — od handlu i usług po produkcję.",
    stats: [
      { value: "25 min", label: "dojazd z Gardna" },
      { value: "30+", label: "klientów w Szczecinie" },
      { value: "24h", label: "reakcja serwisowa" },
      { value: "4K", label: "kamery dostępne" },
    ],
    highlights: [
      { icon: "Briefcase", title: "IT dla firm szczecińskich", description: "Outsourcing IT, administracja siecią, wsparcie użytkowników — dla firm z każdej branży." },
      { icon: "Globe", title: "Strony WWW dla firm", description: "Nowoczesne strony internetowe dla szczecińskich przedsiębiorców — pozycjonowane w Google." },
      { icon: "Database", title: "Backup i bezpieczeństwo", description: "Automatyczne kopie zapasowe, ochrona danych — zgodność z RODO dla firm w Szczecinie." },
    ],
    services: ["monitoring-cctv", "it-dla-firm", "strony-internetowe", "sieci-komputerowe", "oprogramowanie-biurowe", "backup-danych"],
    image: "/szczecin.jpg",
  },
  {
    slug: "gryfino",
    name: "Gryfino",
    description: "Monitoring, IT i serwis komputerów dla firm i mieszkańców Gryfina. Nasz najbliższy rejon, szybka obsługa.",
    metaTitle: "Monitoring Gryfino — IT, Alarmy, Sieci Komputerowe",
    metaDescription:
      "Monitoring, IT i serwis w Gryfinie. Kamery CCTV, alarmy, sieci, strony WWW. Szybka obsługa z pobliskiego Gardna.",
    primaryKeyword: "monitoring Gryfino",
    intro: "Gryfino to nasz najbliższy sąsiad i stolica powiatu, w którym mamy siedzibę — Gardno leży w gminie Gryfino. Stąd pochodzi wielu naszych klientów i tu znamy teren najlepiej. Monitoring w lokalnych firmach, sieci w urzędach, serwis PC dla mieszkańców — Gryfino i okolice to nasz codzienny obszar działania, z dojazdem w kilkanaście minut.",
    stats: [
      { value: "15 min", label: "dojazd z Gardna" },
      { value: "60+", label: "klientów w powiecie" },
      { value: "25+", label: "lat w regionie" },
      { value: "24/7", label: "monitoring zdalny" },
    ],
    highlights: [
      { icon: "Shield", title: "Monitoring i alarmy", description: "Kamery CCTV i systemy alarmowe dla firm i domów w Gryfinie — od projektu po uruchomienie." },
      { icon: "BookOpen", title: "ERP dla firm", description: "Wdrożenia Comarch ERP Optima i XL dla gryfińskich przedsiębiorstw — handlowych i produkcyjnych." },
      { icon: "Laptop", title: "Serwis i backup", description: "Naprawa komputerów, odzyskiwanie danych i konfiguracja kopii zapasowych bez zbędnego odsyłania sprzętu." },
    ],
    services: ["monitoring-cctv", "it-dla-firm", "strony-internetowe", "sieci-komputerowe", "backup-danych"],
    image: "/gryfino.jpg",
  },
  {
    slug: "stargard",
    name: "Stargard",
    description: "Obsługujemy firmy i klientów indywidualnych ze Stargardu. IT, monitoring, serwis komputerów i backup danych.",
    metaTitle: "IT i Monitoring Stargard — Sieci, WWW, Serwis i Backup",
    metaDescription:
      "IT dla firm w Stargardzie. Monitoring, sieci komputerowe, strony internetowe, serwis komputerów i backup danych. Szybka reakcja z Gardna.",
    primaryKeyword: "IT dla firm Stargard",
    intro: "Stargard to jedno z większych miast regionu, dobrze skomunikowane ze Szczecinem i naszą siedzibą — dojeżdżamy tam w około 35 minut. Obsługujemy zarówno lokalne firmy, jak i klientów indywidualnych. Monitoring posesji, konfiguracja sieci firmowych, naprawa komputerów — Stargard jest w naszym zasięgu bez problemu.",
    stats: [
      { value: "35 min", label: "dojazd z Gardna" },
      { value: "25+", label: "klientów w Stargardzie" },
      { value: "1 dzień", label: "typowy czas realizacji" },
      { value: "180 zł", label: "stawka godzinowa netto" },
    ],
    highlights: [
      { icon: "Network", title: "Sieci komputerowe", description: "Okablowanie LAN, WiFi enterprise, konfiguracja switchy — dla firm i instytucji w Stargardzie." },
      { icon: "Monitor", title: "Monitoring CCTV", description: "Systemy monitoringu dla firm i domów — od 4 do 32 kamer, podgląd z telefonu." },
      { icon: "Laptop", title: "Serwis i backup", description: "Naprawa PC i laptopów, odzyskiwanie danych oraz konfiguracja kopii zapasowych — szybko i konkretnie." },
    ],
    services: ["monitoring-cctv", "it-dla-firm", "strony-internetowe", "sieci-komputerowe", "backup-danych"],
    image: "/stargard.jpg",
  },
  {
    slug: "pyrzyce",
    name: "Pyrzyce",
    description: "Realizacje IT i monitoring w Pyrzycach i okolicy. Wsparcie dla firm, gospodarstw i instytucji.",
    metaTitle: "IT i Monitoring Pyrzyce — Sieci, Alarmy, Strony WWW",
    metaDescription:
      "Usługi IT w Pyrzycach. Monitoring, alarmy, sieci komputerowe, strony WWW dla firm i domów. Szybka obsługa z Gardna.",
    primaryKeyword: "monitoring Pyrzyce",
    intro: "Pyrzyce to miasto powiatowe na południe od Szczecina, w naszym naturalnym zasięgu — dojeżdżamy w około 30 minut. Obsługujemy tamtejsze firmy, gospodarstwa i instytucje: monitoring kamerami, systemy alarmowe, sieci i szybki serwis komputerów. Większość spraw rozwiązujemy zdalnie, a gdy trzeba — jesteśmy na miejscu tego samego dnia.",
    stats: [
      { value: "30 min", label: "dojazd z Gardna" },
      { value: "15+", label: "klientów w Pyrzycach" },
      { value: "80%", label: "problemów zdalnie" },
      { value: "1 dzień", label: "reakcja na miejscu" },
    ],
    highlights: [
      { icon: "Monitor", title: "Monitoring dla firm i gospodarstw", description: "Kamery wokół obiektów, magazynów i posesji — z podglądem live 24/7." },
      { icon: "Network", title: "Sieci i internet", description: "Konfiguracja sieci LAN/WiFi oraz łączy internetowych dla firm i instytucji." },
      { icon: "Globe", title: "Strony internetowe", description: "Strony WWW dla lokalnych firm — nowoczesne, szybkie i widoczne w Google." },
    ],
    services: ["monitoring-cctv", "it-dla-firm", "strony-internetowe", "sieci-komputerowe", "oprogramowanie-biurowe"],
    image: "/pyrzyce.jpg",
  },
  {
    slug: "powiat-gryfinski",
    name: "Powiat Gryfiński",
    description: "Obsługujemy cały powiat gryfiński: Gryfino, Gardno, Chojnę, Widuchową, Banie i okolice.",
    metaTitle: "IT dla Firm Powiat Gryfiński — Monitoring, Sieci, Backup",
    metaDescription:
      "Kompleksowe usługi IT dla firm w powiecie gryfińskim. Monitoring, sieci, backup, strony WWW. Szybka obsługa.",
    primaryKeyword: "IT dla firm powiat gryfiński",
    intro: "Powiat gryfiński to nasz dom — tutaj mamy siedzibę (Gardno w gminie Gryfino) i najsilniejsze korzenie. Obejmujemy zasięgiem Gryfino, Chojnę, Widuchową, Banie, Stare Czarnowo i dziesiątki mniejszych miejscowości, a dzięki bliskości Szczecina obsługujemy też firmy z całej aglomeracji. Monitoring w lokalnych firmach, IT dla samorządów, sieci w szkołach i urzędach — znamy specyfikę regionu i potrafimy się tu poruszać.",
    stats: [
      { value: "5", label: "gmin w powiecie" },
      { value: "100+", label: "klientów w regionie" },
      { value: "25+", label: "lat w powiecie" },
      { value: "0 km", label: "optymalizacja zdalna" },
    ],
    highlights: [
      { icon: "Shield", title: "Bezpieczeństwo dla samorządów", description: "Monitoring, IT i backup dla urzędów, szkół i jednostek publicznych w powiecie." },
      { icon: "Briefcase", title: "IT dla małych firm", description: "Outsourcing działu IT dla przedsiębiorstw z całego powiatu gryfińskiego — od 600 zł/mc." },
      { icon: "Globe", title: "Cyfryzacja gmin", description: "Strony internetowe dla urzędów i jednostek samorządowych — zgodne z wymogami dostępności." },
    ],
    services: ["monitoring-cctv", "it-dla-firm", "strony-internetowe", "sieci-komputerowe", "backup-danych", "oprogramowanie-biurowe"],
    image: "/powiat-gryfinski.jpg",
  },
];

export const LOCATION_SLUGS = LOCATIONS.map((l) => l.slug);
