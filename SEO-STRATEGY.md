<!-- Wygenerowano: 2026-07-23 · /seo-plan · plan skondensowany (bez płatnych pobrań MCP) -->
# Strategia SEO — Microcomp (microcomp.co)

> Kompleksowy plan strategiczny dla lokalnego biznesu IT (typ: **Local Service — hybrydowy**: siedziba + obszar obsługi).
> Oparty na kodzie serwisu (Next.js) i realiach firmy. Dane „live" (pozycje, GBP, backlinki, wolumeny) **nie były pobierane** — patrz *Założenia i ograniczenia*.

---

## 1. Streszczenie wykonawcze

**Microcomp Dariusz Kmieciński** — usługi IT dla firm, instytucji i szkół od **1997 r.** (firma od 2000). Siedziba: `ul. Niepodległości 69/3, 74-100 Gardno`, powiat gryfiński, woj. zachodniopomorskie. Tel. `+48 502 568 438`. 6 usług, 6 stron lokalizacji, obszar obsługi 10 miast.

**Pozycja wyjściowa:** solidny fundament on-page (unikalne strony lokalizacji, poprawny `LocalBusiness`, mapa na `/kontakt`, NAP spójny w schema, brak cyrylicy/zdublowanych tytułów — naprawione ostatnim commitem). Szacowany on-page/local: **~70/100** (wzrost z 64 po naprawach).

**Największe dźwignie wzrostu (kolejność wg ROI):**
1. **Google Business Profile + opinie + cytowania** — dla local pack to ~⅔ efektu; dziś zero sygnałów off-page.
2. **Strony usługa × miasto** (np. „monitoring CCTV Szczecin") — największa nisza długiego ogona przy niskiej konkurencji regionalnej.
3. **Schema: `Service` + `FAQPage` + `BreadcrumbList` + `Article`** — treść FAQ już istnieje w danych, brakuje markupu → szybkie rich-resultsy.
4. **Widoczny NAP w stopce + `sameAs`** — podstawowy, brakujący sygnał lokalny/AEO.
5. **Treść blogowa + E-E-A-T (autor Dariusz Kmieciński, 27 lat w IT)** — buduje temat i cytowalność w AI.

**Cel 12 mies.:** wejście do local pack (top-3) dla fraz rdzeniowych w Gardnie/powiecie gryfińskim i widoczność top-10 organicznie dla „usługa + miasto" w 5 miastach obszaru; podwojenie ruchu organicznego i telefonów z organic.

---

## 2. Discovery

**Typ biznesu:** lokalny usługodawca IT, model **hybrydowy** (siedziba w Gardnie + obsługa wyjazdowa/zdalna w regionie). Schema `LocalBusiness` jest tu poprawny.

**Ideal Customer Profile (ICP):**
- Mikro/małe firmy 5–50 stanowisk w powiecie gryfińskim i Szczecinie (biura, handel, produkcja, logistyka).
- Instytucje i **szkoły** (nowy nacisk hero) — administracja, pracownie komputerowe.
- Właściciele posesji/domów (monitoring, serwis).

**Intencje i konwersja:** wysokie, lokalne, szybka decyzja. Główna konwersja = **telefon** i formularz. Zachowanie mobile-first.

**Cele biznesowe:** więcej zapytań (telefon/formularz) z Gardna, powiatu gryfińskiego i Szczecina; kontrakty abonamentowe IT; sprzedaż monitoringu i stron WWW.

**KPI (do śledzenia):** pozycje w local pack, telefony z organic (call tracking), żądania trasy, wyświetlenia/akcje w GBP Insights, liczba i średnia opinii, ruch organiczny, liczba zaindeksowanych i rankujących stron „usługa+miasto".

---

## 3. Analiza konkurencji (oparta na wiedzy — bez pobrań live)

> Do potwierdzenia realnymi danymi (uber/DataForSEO: `serp_analysis`, `competitors`, `keyword_metrics`) — opcja „Plan + dane MCP".

**Krajobraz:** rynek lokalny IT w zachodniopomorskiem jest rozdrobniony — mieszanka jednoosobowych „informatyków", firm od monitoringu/alarmów oraz agencji WWW. **Rzadko kto łączy wszystkie 4 obszary** (IT + serwis + monitoring + WWW) pod jedną marką z lokalnym targetowaniem — to przewaga pozycjonująca Microcomp („jeden zaufany partner").

**Typowe archetypy konkurentów:**
| Archetyp | Mocne | Słabe (luka dla Microcomp) |
|---|---|---|
| Instalatorzy monitoringu/alarmów (Szczecin) | GBP + opinie, zdjęcia realizacji | wąska oferta, brak IT/WWW, słaby content |
| Agencje WWW/IT (Szczecin) | domena/authority, blog | brak lokalnego local-pack pod mniejsze miasta, brak monitoringu |
| Jednoosobowi informatycy | cena, elastyczność | brak marki, schema, treści, skalowalności |

**Luki treściowe/keywordowe do zajęcia (długi ogon, niska konkurencja):**
- „monitoring CCTV {miasto}", „montaż kamer {miasto}", „alarm {miasto}"
- „informatyk / obsługa IT {miasto}", „outsourcing IT {miasto}", „serwis komputerów {miasto}"
- „strony internetowe {miasto}", „Comarch Optima wdrożenie {region}"
- „obsługa informatyczna szkół zachodniopomorskie" (mała konkurencja, wyraźna intencja B2I)
- transakcyjno-informacyjne: „ile kosztuje monitoring 4 kamery", „backup dla firmy cena", „ERP dla małej firmy"

**E-E-A-T konkurentów:** przeciętnie słabe (brak autorów, referencji, certyfikatów na stronie). Microcomp może wygrać **Experience/Trust**: 27 lat w IT, autoryzacje (Comarch/PcBiznes/Microsoft), realne realizacje i opinie.

---

## 4. Architektura serwisu

**Stan obecny (OK jako baza):**
```
/                         (LocalBusiness + OfferCatalog)
/uslugi/[slug]            × 6 (monitoring-cctv, it-dla-firm, strony-internetowe,
                                sieci-komputerowe, oprogramowanie-biurowe, backup-danych)
/lokalizacja              (hub) + /lokalizacja/[slug] × 6
/o-firmie   /kontakt (mapa)  /blog + /blog/[slug] ×3   /polityka-prywatnosci
```

**Rekomendowane rozszerzenia (wg szablonu local-service, z bramkami jakości):**
```
/uslugi/{usluga}-{miasto}     ← NOWE: strony usługa×miasto (najpierw 6 usług × 3 miasta = 18)
/realizacje  (lub /portfolio) ← dowód „Experience": zdjęcia wdrożeń, case studies
/opinie                       ← agregat opinii (podłączony pod realne źródło) → dopiero wtedy AggregateRating
/faq                          ← hub FAQ + FAQPage schema (treść FAQ już jest w danych usług)
/blog                         ← kadencja publikacji (rozwój)
```

**Bramki jakości (twarde limity):**
- Strony lokalizacji: ⚠️ ostrzeżenie ≥30, 🛑 stop ≥50. Dziś **6** — bezpiecznie.
- Strony „usługa×miasto": każda **min. 500 słów, ≥40% unikalnej treści** (lokalny kontekst, realizacje z miasta, lokalne FAQ). **Nie generować masowo** doorway pages — najpierw 3 miasta o największym potencjale (Szczecin, Gryfino, Stargard), skalować po walidacji rankingów.
- Strony usług: min. 800 słów, 100% unikalne (już spełnione — bogate `intro/howItWorks/faq`).

**Linkowanie wewnętrzne:**
- Home → 6 usług (jest w finale hero — duże linki) + hub lokalizacji.
- Każda usługa → 3–4 powiązane usługi (`relatedServices` już w danych) + odpowiednie strony „usługa×miasto".
- Każda lokalizacja → wszystkie usługi w tym mieście + siedziba (`/lokalizacja/gardno`).
- Blog → docelowe strony usług (kontekstowe, w treści).

---

## 5. Strategia treści

**Priorytet wysoki (najpierw):**
1. Dokończyć/utrzymać 6 stron usług (są mocne) + dodać do każdej **sekcję FAQ z markupem `FAQPage`** (treść istnieje w `lib/services.ts → faq`).
2. **18 stron „usługa×miasto"** (6 usług × Szczecin/Gryfino/Stargard) — szablon z lokalnym wstępem, 2–3 lokalnymi realizacjami/argumentami, lokalnym FAQ, CTA telefon.
3. Strona `/realizacje` — 6–10 case studies (branża, problem, rozwiązanie, efekt) — najsilniejszy sygnał E-E-A-T i materiał do cytowań AI.

**Priorytet średni:** `/faq`, strona zespołu/autora (Dariusz Kmieciński — bio, doświadczenie 1997, certyfikaty), `/opinie`.

**Blog — kadencja i tematy (2–3 wpisy/mies.):**
- Sezonowe/poradnikowe: „Jak wybrać firmę do monitoringu", „Znaki, że firma potrzebuje outsourcingu IT", „Backup 3-2-1 dla małej firmy krok po kroku".
- Cenowe/transakcyjne (magnesy na long-tail): „Ile kosztuje monitoring {4/8/16} kamer 2026", „Cennik obsługi IT dla firm", „Comarch Optima — koszt wdrożenia".
- Lokalne/B2I: „Obsługa informatyczna szkół — co obejmuje", „Monitoring w firmie w Szczecinie — od czego zacząć".
- Aktualizować istniejący wpis „…CCTV w 2024" → **2026** (świeżość).

**E-E-A-T:**
- Podpisy autora (Dariusz Kmieciński) + bio z 27-letnim doświadczeniem i autoryzacjami przy wpisach i usługach.
- Realne zdjęcia realizacji/zespołu (nie stock) — także sygnał dla AI-local.
- Cytowalne, konkretne zdania z cenami/zakresami (GEO).

---

## 6. Fundament techniczny

**Schema (największy szybki zysk — treść już jest, brak markupu):**
- ✅ `LocalBusiness` (home/layout) — pojedynczy, spójny `@id`, geo 5 miejsc. Utrzymać.
- ➕ **`Service`** na każdej `/uslugi/[slug]` (name, provider=@id org, areaServed, offers) — dziś tylko `OfferCatalog` na home.
- ➕ **`FAQPage`** na stronach usług i `/faq` (mapować `faq` z `lib/services.ts`).
- ➕ **`BreadcrumbList`** na wszystkich podstronach (usługi, lokalizacje, blog).
- ➕ **`Article`/`BlogPosting`** na wpisach bloga (author, datePublished, image).
- ➕ **`LocalBusiness` z `geo`/`areaServed`** kontekstowo na stronach lokalizacji.
- ⏳ `AggregateRating` — **tylko po** podłączeniu realnych opinii i widgetu na stronie (dziś słusznie usunięty; nie przywracać „na sucho").

**NAP / cytowania / GBP:**
- **Dodać widoczny, tekstowy NAP w stopce** (`components/Footer.tsx`) i na `/kontakt` — dziś adres jest tylko w JSON-LD/mapie.
- **Wypełnić `sameAs`** (`lib/facts.ts`): URL do GBP, Facebooka, ew. wizytówek (Bing Places, Apple Business Connect). 3 z top-5 czynników widoczności AI-local to cytowania.
- **Google Business Profile:** poprawna kategoria główna + dodatkowe (Computer support/security system supplier), dokładne godziny (godziny otwarcia to top-5 czynnik rankingu local 2026), zdjęcia realizacji, regularne posty, strategia odpowiedzi na opinie, WhatsApp jako kanał wiadomości.
- **SAB (od VI 2025):** obszar obsługi jako **miasta/kody**, nie całe województwo.
- Założyć/uzupełnić **Bing Places** (zasila ChatGPT/Copilot) i **Apple Business Connect**.

**Core Web Vitals / wydajność:**
- Static export (Next.js) — dobra baza. Cel: LCP < 2.5 s, INP < 200 ms, CLS < 0.1.
- **Hero kinowy:** pilnować progresywnego ładowania klatek (poster-first, brak CLS) — obecnie ~12 MB desktop, mobile tylko poster. Monitorować LCP na stronie głównej (LCP = poster/H1, nie sekwencja).

**GEO / widoczność w AI:**
- Kompletny `LocalBusiness` (geo, openingHours, priceRange, areaServed) — częściowo jest.
- Cytowalne opisy usług + zakresy cen, sekcje FAQ, obecność na listach „best of"/w katalogach.
- Monitorować cytowania w ChatGPT/Perplexity dla zapytań lokalnych.

---

## 7. Roadmapa wdrożenia (4 fazy)

**Faza 1 — Fundament (tyg. 1–4)**
- Naprawy P0 (sekcja 9): widoczny NAP w stopce, `sameAs`, `Service`+`BreadcrumbList`+`Article`+`FAQPage` schema.
- GBP: weryfikacja (wideo), kategorie, godziny, 10+ zdjęć, pierwszy post.
- Analytics + Search Console + call tracking; baseline pozycji dla fraz rdzeniowych.

**Faza 2 — Rozbudowa (tyg. 5–12)**
- 18 stron „usługa×miasto" (Szczecin, Gryfino, Stargard) — partiami, z walidacją jakości.
- `/realizacje` (6–10 case studies) + zdjęcia realne.
- Blog: 6–8 wpisów (cenowe + poradnikowe + B2I szkoły); aktualizacja wpisu CCTV → 2026.
- Linkowanie wewnętrzne wg sekcji 4; `/faq` hub.
- Bing Places + Apple Business Connect; start pozyskiwania opinii (proces po realizacji).

**Faza 3 — Skala (mies. 4–6)**
- Kolejne miasta „usługa×miasto" **tylko** jeśli pierwsze rankują (walidacja przed skalą; log odrzuconych, by nie tworzyć doorway).
- Digital PR / „best of" lokalne + izba gospodarcza / lokalne media (największy czynnik cytowań AI).
- Optymalizacja CWV, doszlifowanie treści pod pozyskane frazy (GSC), rozbudowa FAQ.

**Faza 4 — Autorytet (mies. 7–12)**
- Thought leadership (Dariusz Kmieciński): eksperckie wpisy, wypowiedzi w lokalnych mediach.
- Wzmożone pozyskiwanie opinii → po pokryciu włączyć `AggregateRating` z widgetem.
- Zaawansowany schema (HowTo dla poradników, Video dla realizacji), ciągła optymalizacja.

---

## 8. Cele KPI

> Baseline „—" = do zmierzenia w Fazie 1 (GSC/GA4/GBP/rank tracker). Wartości docelowe = realistyczne dla lokalnej niszy zachodniopomorskiej.

| Metryka | Baseline | 3 mies. | 6 mies. | 12 mies. |
|---|---|---|---|---|
| Ruch organiczny (sesje/mies.) | — | +30–50% | ×2 | ×2.5–3 |
| Frazy w top-10 (lokalne+usługi) | — | 15–25 | 40–60 | 80–120 |
| Local pack top-3 (Gardno/pow. gryfiński, frazy rdzeniowe) | — | 2–3 frazy | 5–8 fraz | rdzeń + Szczecin dla wybranych |
| Telefony/formularze z organic | — | +25% | +60% | ×2 |
| Opinie Google (liczba / średnia) | — | +10 / ≥4.7 | +25 / ≥4.7 | +40 / ≥4.8 |
| Strony zaindeksowane i rankujące | ~18 | ~35 | ~55 | ~70 |
| Core Web Vitals (mobile, „good") | zmierzyć | wszystkie „good" | utrzymać | utrzymać |

---

## 9. Priorytetowe naprawy on-page (konkret, z plikami)

**P0 — szybkie, wysoki wpływ (Faza 1):**
1. **Widoczny NAP w stopce** — `components/Footer.tsx`: dodać tekst `ul. Niepodległości 69/3, 74-100 Gardno` + tel + godziny.
2. **`sameAs`** — `lib/facts.ts`: wpisać URL GBP/Facebook/Bing/Apple.
3. **`Service` schema** na `/uslugi/[slug]` — `app/uslugi/[slug]/page.tsx`.
4. **`FAQPage` schema** na usługach (mapa `faq` z `lib/services.ts`) + `/faq`.
5. **`BreadcrumbList`** na podstronach (usługi/lokalizacje/blog).
6. **`Article`/`BlogPosting`** na wpisach — `app/blog/[slug]/page.tsx`.

**P1 — średni nakład (Faza 2):**
7. Mapa Google również na `/lokalizacja/gardno` (jest tylko na `/kontakt`).
8. Sekcje FAQ **widoczne** na stronach usług (nie tylko schema).
9. Aktualizacja wpisu „…CCTV 2024" → 2026 + wewnętrzne linki do `/uslugi/monitoring-cctv`.
10. `/realizacje` + realne zdjęcia (E-E-A-T, GEO).

**P2 — poza kodem (Fazy 1–3):**
11. GBP: kategorie, godziny, zdjęcia, posty, opinie.
12. Bing Places + Apple Business Connect.
13. Digital PR / „best of" / izba gospodarcza.

---

## Ryzyka i mitigacja
- **Doorway pages** przy skalowaniu „usługa×miasto" → twarde bramki jakości + walidacja rankingu przed skalą; logować odrzucone miasta.
- **`AggregateRating` bez pokrycia** → nie przywracać, dopóki nie ma realnych opinii + widgetu (ryzyko kary za spam rich-snippet).
- **Zależność od 1 osoby (E-E-A-T)** → to też atut; budować markę wokół eksperta, ale dokumentować realizacje.
- **Brak danych live** → przed dużymi inwestycjami w treść potwierdzić wolumeny/konkurencję (uber/DataForSEO).

## Kryteria sukcesu
- Faza 1: wszystkie P0 wdrożone; GBP zweryfikowany; baseline zmierzony.
- Faza 2: 18 stron „usługa×miasto" + `/realizacje` live; pierwsze frazy w top-10; ≥10 nowych opinii.
- Faza 3–4: local pack top-3 dla rdzenia; ruch ×2; opinie ≥4.8; cytowania w AI dla zapytań lokalnych.

## Założenia i ograniczenia
Plan oparty o kod (`localhost`/repo) i wiedzę branżową. **Nie pobrano** danych live: realne pozycje, stan/velocity GBP i opinii, backlinki/DA, wolumeny i trudność fraz, faktyczni konkurenci w SERP. Aby zweryfikować i doprecyzować cele — uruchomić wariant „Plan + dane MCP" (uber/DataForSEO: `keyword_metrics`, `serp_analysis`, `competitors`, `domain_overview`, `pagespeed_audit`).
