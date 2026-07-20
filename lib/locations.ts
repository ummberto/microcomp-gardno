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
    description: "Siedziba główna Microcomp. Obsługujemy klientów z Gardna i najbliższych miejscowości od 1997 roku.",
    metaTitle: "Microcomp Gardno — IT, Monitoring, Alarmy w Gardnie",
    metaDescription:
      "Microcomp w Gardnie. IT dla firm, monitoring, alarmy, strony WWW. Siedziba firmy w Gardnie, obsługa całego powiatu gryfickiego.",
    primaryKeyword: "Microcomp Gardno",
    intro: "Gardno to nasz dom — tutaj wszystko się zaczęło. Od 1997 roku zajmujemy się informatyką, a od 2000 roku prowadzimy firmę Microcomp w Gardnie. Od ponad 25 lat obsługujemy firmy i instytucje z Gardna oraz okolicznych miejscowości. Znamy tutejszy teren, specyfikę lokalnego rynku i potrzeby mieszkańców. Monitoring na posesjach, sieci w lokalnych firmach, strony WWW dla przedsiębiorców — to nasz codzienny kontakt z Gardnem i okolicami.",
    stats: [
      { value: "2000", label: "rok założenia firmy" },
      { value: "25+", label: "lat w branży IT" },
      { value: "50+", label: "lokalnych klientów" },
      { value: "100%", label: "lokalny serwis" },
    ],
    highlights: [
      { icon: "Monitor", title: "Monitoring na miejscu", description: "Szybki dojazd w każde miejsce w Gardnie — zwykle tego samego dnia." },
      { icon: "Network", title: "Sieci lokalne", description: "Okablowanie, WiFi, serwery — wszystko dla firm i instytucji w Gardnie." },
      { icon: "Laptop", title: "Serwis bez kolejek", description: "Komputery i laptopy naprawiamy na miejscu — bez wysyłania do serwisu." },
    ],
    services: ["monitoring-cctv", "it-dla-firm", "strony-internetowe", "sieci-komputerowe", "backup-danych"],
    image: "/gardno.jpg",
  },
  {
    slug: "szczecin",
    name: "Szczecin",
    description: "Realizujemy projekty IT, monitoring i strony WWW dla firm ze Szczecina i okolic. Szybki dojazd z Gardna.",
    metaTitle: "IT dla Firm Szczecin — Monitoring, Sieci, Strony WWW | Microcomp",
    metaDescription:
      "Usługi IT dla firm w Szczecinie. Monitoring, sieci komputerowe, strony WWW, backup. Dojazd z Gardna w 40 min.",
    primaryKeyword: "IT dla firm Szczecin",
    intro: "Szczecin to największe miasto w regionie i ważny rynek dla Microcomp. Dojeżdżamy z Gardna w około 40 minut, więc możemy sprawnie obsługiwać firmy szczecineckie również na miejscu. Realizujemy tam projekty monitoringowe, sieciowe i WWW dla klientów z różnych branż — od handlu po produkcję.",
    stats: [
      { value: "40 min", label: "dojazd z Gardna" },
      { value: "30+", label: "klientów w Szczecinie" },
      { value: "24h", label: "reakcja serwisowa" },
      { value: "4K", label: "kamery dostępne" },
    ],
    highlights: [
      { icon: "Briefcase", title: "IT dla firm szczecineckich", description: "Outsourcing IT, administracja siecią, wsparcie użytkowników — dla firm z każdej branży." },
      { icon: "Globe", title: "Strony WWW dla firm", description: "Nowoczesne strony internetowe dla szczecineckich przedsiębiorców — pozycjonowane w Google." },
      { icon: "Database", title: "Backup i bezpieczeństwo", description: "Automatyczne kopie zapasowe, ochrona danych — zgodność z RODO dla firm w Szczecinie." },
    ],
    services: ["monitoring-cctv", "it-dla-firm", "strony-internetowe", "sieci-komputerowe", "oprogramowanie-biurowe", "backup-danych"],
    image: "/szczecin.jpg",
  },
  {
    slug: "gryfice",
    name: "Gryfice",
    description: "Monitoring, IT i serwis komputerów dla firm i mieszkańców Gryfic. Znajomi rejon, szybka obsługa.",
    metaTitle: "Monitoring Gryfice — IT, Alarmy, Sieci Komputerowe | Microcomp",
    metaDescription:
      "Monitoring, IT i serwis w Gryficach. Kamery CCTV, alarmy, sieci, strony WWW. Szybka obsługa z Gardna.",
    primaryKeyword: "monitoring Gryfice",
    intro: "Gryfice to nasz najbliższy sąsiad — stąd pochodzi wielu naszych klientów i tu znamy się najlepiej. Powiat gryficki to teren, na którym działamy od początku istnienia firmy. Monitoring w lokalnych firmach, sieci w urzędach, serwis PC dla mieszkańców — Gryfice i okolice to nasz backyard.",
    stats: [
      { value: "15 min", label: "dojazd z Gardna" },
      { value: "60+", label: "klientów w powiecie" },
      { value: "25+", label: "lat w regionie" },
      { value: "24/7", label: "monitoring zdalny" },
    ],
    highlights: [
      { icon: "Shield", title: "Monitoring i alarmy", description: "Kamery CCTV i systemy alarmowe dla firm i domów w Gryficach — od projektu po uruchomienie." },
      { icon: "BookOpen", title: "ERP dla firm", description: "Wdrożenia Comarch ERP Optima i XL dla gryfickich przedsiębiorstw — handlowych, produkcyjnych." },
      { icon: "Laptop", title: "Serwis i backup", description: "Naprawa komputerów, odzyskiwanie danych i konfiguracja kopii zapasowych bez zbędnego odsyłania sprzętu." },
    ],
    services: ["monitoring-cctv", "it-dla-firm", "strony-internetowe", "sieci-komputerowe", "backup-danych"],
    image: "/gryfice.jpg",
  },
  {
    slug: "nowogard",
    name: "Nowogard",
    description: "Obsługujemy firmy i klientów indywidualnych z Nowogardu. IT, monitoring, serwis komputerów i backup danych.",
    metaTitle: "IT i Monitoring Nowogard — Sieci, WWW, Serwis i Backup | Microcomp",
    metaDescription:
      "IT dla firm w Nowogardzie. Monitoring, sieci komputerowe, strony internetowe, serwis komputerów i backup danych. Szybka reakcja z Gardna.",
    primaryKeyword: "IT dla firm Nowogard",
    intro: "Nowogard to miasto powiatowe położone około 20 km na wschód od Gardna — dojeżdżamy tam w 20-25 minut. Obsługujemy zarówno lokalne firmy, jak i klientów indywidualnych. Monitoring posesji, konfiguracja sieci firmowych, naprawa komputerów — Nowogard jest w naszym zasięgu bez problemu.",
    stats: [
      { value: "20 min", label: "dojazd z Gardna" },
      { value: "25+", label: "klientów w Nowogardzie" },
      { value: "1 dzień", label: "typowy czas realizacji" },
      { value: "180 zł", label: "stawka godzinowa netto" },
    ],
    highlights: [
      { icon: "Network", title: "Sieci komputerowe", description: "Okablowanie LAN, WiFi enterprise, konfiguracja switchy — dla firm i instytucji w Nowogardzie." },
      { icon: "Monitor", title: "Monitoring CCTV", description: "Systemy monitoringu dla firm i domów — od 4 do 32 kamer, podgląd z telefonu." },
      { icon: "Laptop", title: "Serwis i backup", description: "Naprawa PC i laptopów, odzyskiwanie danych oraz konfiguracja kopii zapasowych — szybko i konkretnie." },
    ],
    services: ["monitoring-cctv", "it-dla-firm", "strony-internetowe", "sieci-komputerowe", "backup-danych"],
    image: "/nowogard.jpg",
  },
  {
    slug: "kamien-pomorski",
    name: "Kamień Pomorski",
    description: "Realizacje IT i monitoring w Kamieniu Pomorskim. Wsparcie dla firm turystycznych i portowych.",
    metaTitle: "IT i Monitoring Kamień Pomorski — Sieci, Alarmy, Strony WWW | Microcomp",
    metaDescription:
      "Usługi IT w Kamieniu Pomorskim. Monitoring, alarmy, sieci komputerowe, strony WWW dla firm i domów.",
    primaryKeyword: "monitoring Kamień Pomorski",
    intro: "Kamień Pomorski to miejscowość nad morzem, w sezonie turystycznym bardzo dynamiczna. Firmy z branży HoReCa, obiekty turystyczne i portowe — to nasi klienci w Kamieniu. Monitoring kamerami, systemy alarmowe i szybki internet to podstawa ich działalności, zwłaszcza latem. Dojeżdżamy sprawnie, a 80% problemów rozwiązujemy zdalnie.",
    stats: [
      { value: "35 min", label: "dojazd z Gardna" },
      { value: "15+", label: "klientów w Kamieniu" },
      { value: "80%", label: "problemów zdalnie" },
      { value: "Sezon", label: "priorytet: turystyka" },
    ],
    highlights: [
      { icon: "Monitor", title: "Monitoring dla turystyki", description: "Kamery wokół obiektów noclegowych, restauracji, parkingów — z podglądem live 24/7." },
      { icon: "Network", title: "WiFi dla gości", description: "Sieci WiFi w pensjonatach, hotelach i lokalach gastronomicznych — z oddzielną siecią dla gości." },
      { icon: "Globe", title: "Strony dla turystyki", description: "Strony internetowe dla obiektów noclegowych — z integracją rezerwacji i galerią." },
    ],
    services: ["monitoring-cctv", "it-dla-firm", "strony-internetowe", "sieci-komputerowe", "oprogramowanie-biurowe"],
    image: "/kamien-pomorski.jpg",
  },
  {
    slug: "powiat-gryficki",
    name: "Powiat Gryficki",
    description: "Obsługujemy cały powiat gryficki: Gryfice, Trzebiatów, Pyrzyce, Maszewo i okolice.",
    metaTitle: "IT dla Firm Powiat Gryficki — Monitoring, Sieci, Backup | Microcomp",
    metaDescription:
      "Kompleksowe usługi IT dla firm w powiecie gryfickim. Monitoring, sieci, backup, strony WWW. Szybka obsługa.",
    primaryKeyword: "IT dla firm powiat gryficki",
    intro: "Powiat gryficki to nasz dom — tutaj zaczynaliśmy i tutaj mamy najsilniejsze korzenie. Obejmujemy swym zasięgiem Gryfice, Trzebiatów, Pyrzyce, Maszewo i dziesiątki mniejszych miejscowości. Monitoring w lokalnych firmach, IT dla samorządów, sieci w szkołach i urzędach — znamy specyfikę regionu i potrafimy się tu poruszać.",
    stats: [
      { value: "6", label: "gmin w powiecie" },
      { value: "100+", label: "klientów w regionie" },
      { value: "25+", label: "lat w powiecie" },
      { value: "0 km", label: "optymalizacja zdalna" },
    ],
    highlights: [
      { icon: "Shield", title: "Bezpieczeństwo dla samorządów", description: "Monitoring, IT i backup dla urzędów, szkół i jednostek publicznych w powiecie." },
      { icon: "Briefcase", title: "IT dla małych firm", description: "Outsourcing działu IT dla przedsiębiorstw z całego powiatu gryfickiego — od 600 zł/mc." },
      { icon: "Globe", title: "Cyfryzacja gmin", description: "Strony internetowe dla urzędów i jednostek samorządowych — zgodne z wymogami dostępności." },
    ],
    services: ["monitoring-cctv", "it-dla-firm", "strony-internetowe", "sieci-komputerowe", "backup-danych", "oprogramowanie-biurowe"],
    image: "/powiat-gryficki.jpg",
  },
];

export const LOCATION_SLUGS = LOCATIONS.map((l) => l.slug);
