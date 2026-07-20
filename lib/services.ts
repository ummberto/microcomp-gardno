import {
  Monitor,
  Briefcase,
  Globe,
  Network,
  BookOpen,
  Database,
  Laptop,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  description: string;
  // Rozszerzony content SEO
  intro: string; // akapit wprowadzający pod hero (2-3 zdania)
  howItWorks: { step: string; description: string }[]; // sekcja "jak to działa"
  stats: { value: string; label: string }[]; // social proof / liczby
  iconName: string;
  benefits: string[];
  useCases: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  // Internal links do innych usług
  relatedServices: string[]; // slugi
  image: string; // public path to service hero image
}

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Briefcase,
  Globe,
  Network,
  BookOpen,
  Database,
  Laptop,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Monitor;
}

export const SERVICES: Service[] = [
  {
    slug: "monitoring-cctv",
    title: "Monitoring i Alarmy",
    shortTitle: "Monitoring CCTV",
    primaryKeyword: "monitoring Gardno",
    secondaryKeywords: [
      "monitoring CCTV Szczecin",
      "kamery przemysłowe zachodniopomorskie",
      "system monitoringu wizyjnego",
      "montaż kamer CCTV",
      "monitoring domu",
    ],
    metaTitle:
      "Monitoring CCTV Gardno — Kamery IP, TVI, CVI dla Firm i Domów | Microcomp",
    metaDescription:
      "Montaż i konfiguracja systemów monitoringu CCTV IP, TVI i CVI w Gardnie i okolicach. Kamery przemysłowe, alarmy, zabezpieczenia. Zadzwoń i zamów wycenę.",
    description:
      "Instalujemy profesjonalne systemy monitoringu wizyjnego CCTV dla firm, magazynów, biur i domów. Współpracujemy z kamerami IP, TVI i CVI — dobieramy rozwiązanie do Twojego budżetu i potrzeb.",
    intro:
      "System monitoringu to podstawa skutecznej ochrony mienia — zarówno w przypadku firm, jak i posesji prywatnych. W Microcomp projektujemy i instalujemy systemy CCTV od ponad 20 lat. Każde rozwiązanie dobieramy indywidualnie: liczba kamer, ich rozdzielczość, sposób nagrywania i integracja z alarmami zależą od specyfiki obiektu. Dzięki temu płacisz tylko za to, co faktycznie potrzebujesz — bez przepłacania za nadmiarowe funkcje.",
    howItWorks: [
      {
        step: "1. Audyt obiektu",
        description:
          "Przyjeżdżamy na miejsce, analizujemy układ przestrzenny, punktynewralgiczne i warunki oświetleniowe. Sporządzamy mapę pokrycia kamer.",
      },
      {
        step: "2. Projekt i wycena",
        description:
          "Przedstawiamy минимум 2 warianty rozwiązania z dokładną kalkulacją kosztów. Montaż może się zacząć w ciągu 5 dni roboczych od akceptacji.",
      },
      {
        step: "3. Montaż i konfiguracja",
        description:
          "Instalujemy kamery, okablowanie, rejestrator NVR. Konfigurujemy podgląd mobilny, powiadomienia i integrację z alarmami.",
      },
      {
        step: "4. Szkolenie i wsparcie",
        description:
          "Uczymy obsługi systemu. Oferujemy umowę serwisową z reakcją na awarie w 24h.",
      },
    ],
    stats: [
      { value: "200+", label: "zainstalowanych systemów" },
      { value: "20 lat", label: "doświadczenia w CCTV" },
      { value: "4.9/5", label: "ocena klientów Google" },
      { value: "24h", label: "czas reakcji serwisu" },
    ],
    image: "/monitoring-cctv.jpg",
    iconName: "Monitor",
    benefits: [
      "Detekcja ruchu i powiadomienia na telefon",
      "Podgląd online 24/7 z dowolnego miejsca",
      "Nagrywanie w chmurze lub lokalnie na dysk",
      "Integracja z systemami alarmowymi",
      "Rozpoznawanie tablic rejestracyjnych (ANPR)",
    ],
    useCases: [
      {
        title: "Firmy i magazyny",
        description:
          "Monitoring hal produkcyjnych, magazynów, parkingów i biur. Obniżenie kosztów ochrony fizycznej nawet o 40%.",
      },
      {
        title: "Dom i posesja",
        description:
          "Kamery wokół domu, wjazd na posesję, podgląd dzieci i zwierząt. Powiadomienia przy każdym ruchu na telefonie.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje monitoring na 4 kamery?",
        answer:
          "Kompletny system 4 kamer IP z rejestratorem NVR i dyskiem twardym to wydatek od 2800 zł netto. Dokładną wycenę przygotowujemy po bezpłatnym audycie obiektu — nie ma ukrytych kosztów.",
      },
      {
        question: "Czy kamery działają w nocy?",
        answer:
          "Tak. Kamery z diodami IR umożliwiają monitoring w całkowitej ciemności do 50 metrów. Oferujemy też kamery z kolorowym obrazem nocnym (ColorVu) — rozpoznajesz twarze i szczegóły nawet nocą.",
      },
      {
        question: "Czy mogę podglądać kamery z telefonu?",
        answer:
          "Tak. Aplikacja mobilna (iOS/Android) pozwala na podgląd live, odtwarzanie nagrań i powiadomienia push — bez żadnych opłat abonamentowych. Jedna aplikacja — wszystkie kamery.",
      },
      {
        question: "Jaki monitoring wybrać — IP, TVI czy CVI?",
        answer:
          "Kamery IP oferują najwyższą jakość obrazu 4K i elastyczną rozbudowę. TVI i CVI to rozwiązania analogowe nowej generacji — tańsze, łatwiejsze w instalacji, idealne gdy masz już okablowanie. Dobierzemy optymalny system do Twojej infrastruktury.",
      },
      {
        question: "Czy system można rozbudować później?",
        answer:
          "Tak. Każdy rejestrator NVR ma określoną liczbę kanałów. Możesz zacząć od 4 kamer i rozbudować do 16 lub więcej bez wymiany rejestratora — wystarczy dołożyć kamery.",
      },
    ],
    relatedServices: ["it-dla-firm", "sieci-komputerowe", "backup-danych"],
  },
  {
    slug: "it-dla-firm",
    title: "Usługi IT dla Firm",
    shortTitle: "IT dla Firm",
    primaryKeyword: "IT dla firm Gardno",
    secondaryKeywords: [
      "outsourcing IT zachodniopomorskie",
      "obsługa informatyczna firm Szczecin",
      "administracja siecią",
      "serwer dla firmy",
      "wsparcie IT małe firmy",
    ],
    metaTitle:
      "Usługi IT dla Firm Gardno — Outsourcing Informatyczny | Microcomp",
    metaDescription:
      "Kompleksowa obsługa informatyczna firm w Gardnie i okolicach. Sieci, serwis, backup, wsparcie IT. Abonament od 600 zł/mc. Zadzwoń po bezpłatną wycenę.",
    description:
      "Zewnętrzne wsparcie IT dla małych i średnich firm. Adminizacja sieci, zarządzanie serwerami, utrzymanie stacji roboczych, wsparcie użytkowników. Działasz sprawnie — my dbamy o to, żeby Twój IT działał.",
    intro:
      "Zamiast zatrudniać własnego IT-specjalistę, powierz obsługę informatyczną zewnętrznemu partnerowi. Z Microcomp masz stały kontakt z dedykowanym specjalistą, który zna Twoją infrastrukturę. Reagujemy zdalnie w 30 minut, na miejscu w 4 godziny — i nie musisz martwić się urlopami, sick days czy rotacją pracowników.",
    howItWorks: [
      {
        step: "1. Audyt infrastruktury",
        description:
          "Analizujemy obecną infrastrukturę IT: sieć, serwery, stacje robocze, oprogramowanie. Identifikujemy ryzyka i obszary do poprawy.",
      },
      {
        step: "2. Wdrożenie i przejęcie",
        description:
          "Przejmujemy obsługę istniejących systemów. Ustanawiamy monitoring, procedury backupu i kanały komunikacji.",
      },
      {
        step: "3. Bieżąca obsługa",
        description:
          "Codzienne wsparcie użytkowników, proaktywny monitoring, aktualizacje bezpieczeństwa, zarządzanie incydentami.",
      },
      {
        step: "4. Rozwój i optymalizacja",
        description:
          "Cykliczne przeglądy, rekomendacje modernizacji, planowanie rozwoju infrastruktury zgodnie z potrzebami firmy.",
      },
    ],
    stats: [
      { value: "40+", label: "obsługiwanych firm" },
      { value: "30 min", label: "średni czas reakcji zdalnej" },
      { value: "98%", label: "skuteczność usunięcia awarii" },
      { value: "600 zł", label: "abonament od / miesiąc" },
    ],
    iconName: "Briefcase",
    benefits: [
      "Stały kontakt z dedykowanym specjalistą",
      "Szybka reakcja — zdalnie w 30 min, na miejscu w 4h",
      "Pełna administracja siecią i serwerami",
      "Monitorowanie stanu infrastruktury 24/7",
      "Elastyczne formy współpracy — abonament lub zadaniowo",
    ],
    useCases: [
      {
        title: "Małe firmy (5–20 pracowników)",
        description:
          "Outsourcing całości działu IT. Jedna umowa, jeden kontakt, zero niespodzianek. Płacisz stałą miesięczną kwotę i masz spokój.",
      },
      {
        title: "Firmy produkcyjne i logistyczne",
        description:
          "Zarządzanie siecią OT/IT, integracja z systemami ERP, wsparcie działów handlowych i księgowości.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje obsługa IT dla firmy?",
        answer:
          "Abonament dla firmy 5–10 stanowisk to od 600 zł netto/miesiąc. W cenie: zdalne wsparcie, monitoring, aktualizacje, konsultacje. Na miejscu — według stawki godzinowej lub w ramach pakietu.",
      },
      {
        question: "Czy można zlecić pojedyncze zadanie?",
        answer:
          "Tak. Oferujemy też współpracę zadaniową — płacisz za rozwiązanie konkretnego problemu, bez umowy abonamentowej. Stawka godzinowa: 180 zł netto.",
      },
      {
        question: "Czy obsługujemy zdalnie?",
        answer:
          "Tak. 80% problemów rozwiązujemy zdalnie w ciągu 30 minut — bez konieczności dojazdu. Dojeżdżamy do klientów w promieniu 60 km od Gardna.",
      },
      {
        question: "Jak szybko reagują Państwo na awarie?",
        answer:
          "Krytyczne awarie — reakcja zdalna do 30 min w godzinach pracy (8:00–18:00). Na miejscu: w tym samym dniu dla klientów abonamentowych. Weekendy — zgodnie z umową SLA.",
      },
    ],
    relatedServices: [
      "sieci-komputerowe",
      "backup-danych",
      "oprogramowanie-biurowe",
    ],
    image: "/it-dla-firm.jpg",
  },
  {
    slug: "strony-internetowe",
    title: "Strony Internetowe",
    shortTitle: "Strony WWW",
    primaryKeyword: "strony internetowe Gardno",
    secondaryKeywords: [
      "strona www Szczecin",
      "tworzenie stron www zachodniopomorskie",
      "strona dla firmy",
      "sklep internetowy",
      "landing page",
    ],
    metaTitle:
      "Strony Internetowe Gardno — Tworzenie Stron WWW i Pozycjonowanie SEO | Microcomp",
    metaDescription:
      "Profesjonalne strony WWW dla firm z Gardna i okolic. Wizytówki, sklepy, landing page. Pozycjonowanie SEO. Od 1800 zł. Zamów bezpłatną wycenę.",
    description:
      "Tworzymy profesjonalne strony internetowe dla firm: wizytówki, sklepy, landing page. Każda strona jest responsywna, zoptymalizowana pod SEO i szybka. Dodatkowo oferujemy pozycjonowanie w Google.",
    intro:
      "Strona internetowa to wizytówka firmy w sieci — często pierwszy kontakt potencjalnego klienta z Twoją marką. Zlecając nam jej stworzenie, получаешь nowoczesny design, szybki czas ładowania i widoczność w wynikach Google. Реализуем страницы на основеNext.js — nowoczesna technologia, która zapewnia szybkość i bezpieczeństwo.",
    howItWorks: [
      {
        step: "1. Briefing i analiza",
        description:
          "Poznajemy Twoją firmę, grupę docelową i cele strony. Analizujemy konkurencję i wyznaczamy frazy kluczowe do pozycjonowania.",
      },
      {
        step: "2. Projekt i zatwierdzenie",
        description:
          "Przedstawiamy минимум 2 warianty layoutu. Po akceptacji projektu przechodzimy do kodowania.",
      },
      {
        step: "3. Kodowanie i SEO",
        description:
          "Tworzymy stronę w Next.js z optymalizacją pod Core Web Vitals. Każdy element kodu jest zoptymalizowany pod SEO techniczne.",
      },
      {
        step: "4. Uruchomienie i wsparcie",
        description:
          "Wdrażamy stronę na hostingu, konfigurujemy SSL, analytics i narzędzia SEO. Oferujemy miesięczne wsparcie i pozycjonowanie.",
      },
    ],
    stats: [
      { value: "150+", label: "zrealizowanych projektów" },
      { value: "98%", label: "klientów poleca nas dalej" },
      { value: "<1s", label: "czas ładowania strony" },
      { value: "1800 zł", label: "cena od" },
    ],
    iconName: "Globe",
    benefits: [
      "Responsywny design — świetnie wygląda na każdym urządzeniu",
      "Optymalizacja SEO — strona widoczna w Google",
      "Szybki hosting i SSL w cenie",
      "Intuicyjny panel do edycji treści",
      "Gwarancja na kod i wsparcie techniczne",
    ],
    useCases: [
      {
        title: "Strona wizytówka",
        description:
          "Profesjonalna strona dla firmy lokalnej. Kontakt, oferta, mapa dojazdu, galeria. Od 1800 zł netto. Czas realizacji: 10–14 dni.",
      },
      {
        title: "Landing page",
        description:
          "Strona docelowa pod kampanię reklamową lub nowy produkt. Konwersyjny design, formularz leadów, fast loading.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje strona internetowa?",
        answer:
          "Strona wizytówka (5 podstron) — od 1800 zł netto. Sklep internetowy — od 3500 zł netto. Landing page — od 1200 zł netto. Dokładną cenę podajemy po omówieniu zakresu w ciągu 24h.",
      },
      {
        question: "Czy strona będzie widoczna w Google?",
        answer:
          "Tak. Każdą stronę optymalizujemy pod kątem SEO: meta tagi, nagłówki, szybkość ładowania, dane strukturalne LocalBusiness. Dodatkowo oferujemy usługę pozycjonowania — gwarantujemy efekt.",
      },
      {
        question: "Czy mogę sam edytować treści?",
        answer:
          "Tak. Zakładamy panel CMS, który pozwala na edycję tekstów, dodawanie zdjęć i bloga bez znajomości programowania. Szkolimy z obsługi.",
      },
      {
        question: "Czy oferują Państwo hosting?",
        answer:
          "Tak. Hosting z SSL, kopiami zapasowymi i wsparciem technicznym — od 50 zł/miesiąc. Domena .pl lub .com w cenie pierwszego roku.",
      },
    ],
    relatedServices: ["it-dla-firm", "monitoring-cctv", "oprogramowanie-biurowe"],
    image: "/strony-internetowe.jpg",
  },
  {
    slug: "sieci-komputerowe",
    title: "Sieci Komputerowe",
    shortTitle: "Sieci",
    primaryKeyword: "sieci komputerowe Gardno",
    secondaryKeywords: [
      "instalacja sieci LAN Szczecin",
      "wifi dla firmy",
      "okablowanie strukturalne",
      "administracja sieci",
      "switch zarządzalny",
    ],
    metaTitle:
      "Sieci Komputerowe Gardno — Projekt, Instalacja, Administracja | Microcomp",
    metaDescription:
      "Projektowanie i instalacja sieci komputerowych LAN i WiFi dla firm w Gardnie i okolicach. Administracja, rozbudowa, diagnostyka. Zadzwoń po wycenę.",
    description:
      "Projektujemy i instalujemy sieci komputerowe dla firm: okablowanie strukturalne, switch'e, access pointy WiFi, firewalle. Obsługujemy istniejące instalacje i rozbudowujemy sieci.",
    intro:
      "Stabilna i szybka sieć komputerowa to podstawa sprawnego funkcjonowania każdej firmy. Niezależnie od tego, czy potrzebujesz sieci dla 5 czy 500 stanowisk, zaprojektujemy rozwiązanie dopasowane do Twoich potrzeb — z rezerwą na przyszły rozwój. Współpracujemy z sprzętem Ubiquiti, Cisco, HP i TP-Link.",
    howItWorks: [
      {
        step: "1. Analiza potrzeb",
        description:
          "Określamy liczbę stanowisk, wymagania przepustowości, potrzeby bezpieczeństwa i planowany wzrost.",
      },
      {
        step: "2. Projekt techniczny",
        description:
          "Tworzymy dokumentację projektową z topologią sieci, rozmieszczeniem punktów dostępowych i specyfikacją sprzętową.",
      },
      {
        step: "3. Instalacja",
        description:
          "Wykonujemy okablowanie kategorii 6A/7, montujemy switch'e, access pointy, konfigurujemy firewalle.",
      },
      {
        step: "4. Odbiór i dokumentacja",
        description:
          "Przekazujemy pełną dokumentację sieci, przeprowadzamy testy przepustowości i szkolimy użytkowników.",
      },
    ],
    stats: [
      { value: "15 lat", label: "doświadczenia w sieciach" },
      { value: "300+", label: "km pociągniętego kabla" },
      { value: "10 Gbps", label: "maksymalna przepustowość" },
      { value: "99.9%", label: "uptime sieci klientów" },
    ],
    iconName: "Network",
    benefits: [
      "Projekt sieci pod kątem przyszłego wzrostu",
      "Profesjonalne okablowanie kategorii 6A/7",
      "Sieć WiFi enterprise z roamowaniem",
      "Firewalle i segmentacja ruchu",
      "Dokumentacja i audyt istniejących instalacji",
    ],
    useCases: [
      {
        title: "Nowe biuro lub hala",
        description:
          "Kompletna infrastruktura sieciowa od projektu po uruchomienie. Okablowanie, switch'e, WiFi, serwerownia.",
      },
      {
        title: "Modernizacja istniejącej sieci",
        description:
          "Audyty, wymiana przełączników, rozbudowa WiFi, podział na VLAN'y. Sieć klasy firmowej w rozsądnej cenie dla małych i średnich firm.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje instalacja sieci w biurze?",
        answer:
          "Zależy od skali. Sieć dla 10 stanowisk z okablowaniem i switch'em — od 4000 zł netto. WiFi enterprise dla hali — od 6000 zł netto. Audyt istniejącej sieci — 500 zł.",
      },
      {
        question: "Czy wykonują Państwo audyt istniejącej sieci?",
        answer:
          "Tak. Audyt obejmuje pomiar przepustowości, analizę bezpieczeństwa, dokumentację aktualnej topologii i rekomendacje modernizacji. Wynik: szczegółowy raport z priorytetami.",
      },
      {
        question: "Czy można rozbudować sieć stopniowo?",
        answer:
          "Tak. Projektujemy sieć z rezerwą portów i przepustowości. Możesz zacząć od 10 stanowisk i rozbudować do 100 bez wymiany głównej infrastruktury.",
      },
    ],
    relatedServices: ["it-dla-firm", "monitoring-cctv", "backup-danych"],
    image: "/sieci-komputerowe.jpg",
  },
  {
    slug: "oprogramowanie-biurowe",
    title: "Oprogramowanie Biurowe",
    shortTitle: "Comarch ERP",
    primaryKeyword: "Comarch ERP Gardno",
    secondaryKeywords: [
      "Comarch ERP Optima Szczecin",
      "wdrożenie ERP",
      "system księgowy dla firmy",
      "fakturowanie online",
      "Comarch ERP XL",
    ],
    metaTitle:
      "Comarch ERP Gardno — Wdrożenie, Szkolenia, Serwis | Microcomp",
    metaDescription:
      "Wdrożenie i obsługa Comarch ERP Optima i ERP XL w firmach w Gardnie i okolicach. Autoryzowany partner Comarch. Zadzwoń i zamów wycenę.",
    description:
      "Jesteśmy autoryzowanym partnerem Comarch. Wdrażamy systemy ERP: Comarch ERP Optima (małe firmy) i ERP XL (średnie i większe). Szkolenia, migracja danych, bieżący serwis.",
    intro:
      "System ERP to serce cyfrowej operacji firmy — integruje księgowość, handel, magazyn i HR w jednym miejscu. Jako autoryzowany partner Comarch z 15-letnim doświadczeniem, wdrażamy i serwisujemy systemy ERP dla firm w całym województwie zachodniopomorskim. Nasi klienci to hurtownie, zakłady produkcyjne, firmy usługowe i biura rachunkowe.",
    howItWorks: [
      {
        step: "1. Analiza potrzeb",
        description:
          "Badamy strukturę firmy, procesy zachodzące w księgowości, handlu i magazynie. Określamy zakres wdrożenia i moduły.",
      },
      {
        step: "2. Konfiguracja i migracja",
        description:
          "Ustawiamy system, definiujemy słowniki, importujemy dane ze starego programu. Testujemy na danych próbnych.",
      },
      {
        step: "3. Szkolenie",
        description:
          "Szkolimy użytkowników na miejscu lub zdalnie. Szkolenie jest dopasowane do stanowiska — księgowa, handlowiec, magazynier.",
      },
      {
        step: "4. Uruchomienie i wsparcie",
        description:
          "Przejmujemy obsługę serwisową. Aktualizacje, wsparcie użytkowników, rozwiązywanie problemów — w cenie miesięcznego serwisu.",
      },
    ],
    stats: [
      { value: "15+", label: "lat partnerstwa Comarch" },
      { value: "80+", label: "wdrożonych systemów ERP" },
      { value: "500+", label: "przeszkolonych użytkowników" },
      { value: "99%", label: "skuteczność migracji danych" },
    ],
    iconName: "BookOpen",
    benefits: [
      "Autoryzowany partner Comarch",
      "Kompleksowe wdrożenie — od analizy po szkolenia",
      "Migracja danych z poprzednich systemów",
      "Szkolenia dla użytkowników na miejscu",
      "Bieżące wsparcie i aktualizacje",
    ],
    useCases: [
      {
        title: "Mała firma (księgowość + handel)",
        description:
          "Comarch ERP Optima — fakturowanie, księgowość, magazyn, CRM. Idealne dla firm do 20 użytkowników.",
      },
      {
        title: "Firma handlowa lub produkcyjna",
        description:
          "Comarch ERP XL — zaawansowane zarządzanie magazynem, produkcją, handlem, e-commerce.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje Comarch ERP Optima?",
        answer:
          "Licencja Comarch ERP Optima to od 2000 zł netto (zależy od liczby użytkowników i modułów). Wdrożenie — od 2500 zł netto. Miesięczny serwis — od 300 zł/mc.",
      },
      {
        question: "Czy można przenieść dane ze starego programu?",
        answer:
          "Tak. Migracja danych z Comarch ERP, Sage, Subiekt, innych systemów to standardowa usługa wdrożeniowa. Przenosimy kartoteki, dokumenty historyczne, stany magazynowe.",
      },
      {
        question: "Czy oferują Państwo szkolenia?",
        answer:
          "Tak. Szkolenia na miejscu u klienta lub zdalnie. Zakres dopasowany do potrzeb użytkowników — od podstaw obsługi po zaawansowane raportowanie.",
      },
    ],
    relatedServices: ["it-dla-firm", "strony-internetowe", "backup-danych"],
    image: "/oprogramowanie-biurowe.jpg",
  },
  {
    slug: "backup-danych",
    title: "Serwis komputerów i backup danych",
    shortTitle: "Serwis i backup",
    primaryKeyword: "serwis komputerów i backup danych Gardno",
    secondaryKeywords: [
      "kopia zapasowa danych Szczecin",
      "backup w chmurze dla firm",
      "odzyskiwanie danych",
      "serwis komputerów Gardno",
      "naprawa laptopów Szczecin",
      "backup SQL",
      "archiwizacja danych firmowych",
    ],
    metaTitle:
      "Serwis Komputerów i Backup Danych Gardno | Microcomp",
    metaDescription:
      "Serwis komputerów, naprawa laptopów, odzyskiwanie danych i automatyczne kopie zapasowe dla firm z Gardna, Szczecina i okolic.",
    description:
      "Naprawiamy komputery i laptopy oraz zabezpieczamy dane firmowe: odzyskiwanie plików, wymiana dysków, instalacja systemów, automatyczne backupy lokalne i chmurowe.",
    intro:
      "Awaria komputera i utrata danych zwykle przychodzą razem. Dlatego łączymy serwis sprzętu z realnym zabezpieczeniem plików: naprawiamy komputery, odzyskujemy dane, wymieniamy dyski, instalujemy systemy i ustawiamy automatyczne kopie zapasowe, żeby problem nie wrócił za miesiąc.",
    howItWorks: [
      {
        step: "1. Diagnostyka sprzętu i danych",
        description:
          "Sprawdzamy stan komputera, dysku, systemu i danych. Oceniamy, co trzeba naprawić od razu, co da się odzyskać i co powinno trafić do kopii zapasowej.",
      },
      {
        step: "2. Naprawa lub odzyskanie danych",
        description:
          "Wymieniamy uszkodzone podzespoły, przyspieszamy komputer, instalujemy system albo odzyskujemy pliki z uszkodzonego nośnika.",
      },
      {
        step: "3. Konfiguracja backupu",
        description:
          "Ustawiamy automatyczne kopie lokalne lub chmurowe, szyfrowanie, harmonogram i pierwsze testowe odtworzenie danych.",
      },
      {
        step: "4. Monitoring i testy",
        description:
          "Comiesięczne testy odtwarzania, raporty o stanie kopii, proaktywne powiadomienia o problemach.",
      },
    ],
    stats: [
      { value: "SSD", label: "wymiana i migracja danych" },
      { value: "3-2-1", label: "strategia backupu" },
      { value: "AES-256", label: "szyfrowanie danych" },
      { value: "1–2 dni", label: "typowa naprawa PC/laptopa" },
    ],
    iconName: "Laptop",
    benefits: [
      "Naprawa komputerów stacjonarnych i laptopów",
      "Wymiana dysków SSD, pamięci RAM i zasilaczy",
      "Odzyskiwanie danych z uszkodzonych nośników",
      "Automatyczne kopie zapasowe lokalnie i w chmurze",
      "Instalacja systemów, sterowników i zabezpieczeń",
    ],
    useCases: [
      {
        title: "Komputer po awarii dysku",
        description:
          "Wymiana dysku na SSD, odzyskanie plików, migracja danych i ustawienie kopii zapasowej na przyszłość.",
      },
      {
        title: "Firmy z ważnymi dokumentami",
        description:
          "Ochrona dokumentów, baz programów, poczty i plików księgowych przed awarią sprzętu, wirusem albo przypadkowym skasowaniem.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje serwis komputera albo backup?",
        answer:
          "Proste naprawy zaczynają się od kilkudziesięciu złotych, a backup firmowy wyceniamy po sprawdzeniu ilości danych i wymaganego poziomu zabezpieczenia.",
      },
      {
        question: "Czy dane zostaną zachowane przy naprawie?",
        answer:
          "Zawsze zaczynamy od ochrony danych. Jeśli nośnik jest uszkodzony, najpierw oceniamy szanse odzysku, a dopiero potem wykonujemy naprawę lub wymianę dysku.",
      },
      {
        question: "Czy można połączyć naprawę z kopią zapasową?",
        answer:
          "Tak — to najlepszy scenariusz. Po naprawie komputera konfigurujemy automatyczny backup, żeby kolejna awaria nie oznaczała utraty plików.",
      },
    ],
    relatedServices: ["it-dla-firm", "oprogramowanie-biurowe", "sieci-komputerowe"],
    image: "/backup-danych.jpg",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
