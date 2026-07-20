# Microcomp — lokalny QA / web quality audit

Data: 2026-05-14
Zakres: lokalny Next.js dev server + statyczny export.
Adresy testowe:
- Dev: http://127.0.0.1:3004
- Static export: http://127.0.0.1:3005

## Co sprawdzone

- 44 kombinacje strona × viewport.
- Viewporty: mobile 320, mobile 390, tablet 768, desktop 1440.
- Kluczowe ścieżki: `/`, `/kontakt`, `/o-firmie`, `/lokalizacja`, lokalizacje, główne usługi, blog.
- Linki wewnętrzne.
- Obrazki.
- Console/page errors.
- Overflow poziomy na mobile/desktop.
- Formularz kontaktowy: walidacja pustego formularza + poprawne wysłanie testowe.
- Build produkcyjny i statyczny export.
- robots.txt, sitemap.xml, canonical/meta/H1.

## Wynik po poprawkach

- Build: OK (`npm run build`).
- Statyczny export: OK.
- Linki 404: 0.
- Console errors: 0.
- Broken images: 0.
- Unlabeled form controls: 0.
- Horizontal overflow: 0.
- Formularz: walidacja działa, wymagane pola blokują pusty submit, poprawny submit pokazuje alert.
- robots.txt: OK.
- sitemap.xml: OK, zawiera główne strony/usługi/lokalizacje/blog.
- JSON-LD LocalBusiness: obecny.

## Naprawione w trakcie QA

1. Linki lokalizacji z homepage prowadziły do nieistniejących URL-i:
   - `kamień-pomorski` zamiast `kamien-pomorski`
   - Gryfino/Goleniów/Stargard/Police/Pyrzyce/Trzebiatów/Karlino nie miały stron docelowych.
   - Naprawa: istniejące lokalizacje mają poprawne URL-e, reszta kieruje na `/lokalizacja`.

2. Brak strony polityki prywatności:
   - Link w formularzu i footerze prowadził do 404.
   - Naprawa: dodana `/polityka-prywatnosci`.

3. Formularz miał labelki bez `htmlFor/id`:
   - Technicznie działał, ale accessibility było słabsze.
   - Naprawa: dodane powiązane `id` + `htmlFor` dla pól formularza.

4. Static export generował katalogi bez `.html` przy `trailingSlash: false`:
   - Na zwykłym hostingu statycznym mogło to dawać 404 bez dopisania `/`.
   - Naprawa: `trailingSlash: true`.

## Co jeszcze brakuje / warto zrobić krok po kroku

### Krok 1 — Formularz produkcyjny
Obecnie formularz pokazuje alert i loguje dane w konsoli. To jest dobre do demo, ale nie do prawdziwego leada.

Do zrobienia:
- podpiąć realną wysyłkę: mail/API/Formspree/Netlify Forms/endpoint,
- dodać komunikat sukcesu w UI zamiast `alert`,
- dodać obsługę błędu wysyłki,
- usunąć `console.log('Form data')` przed produkcją.

Priorytet: wysoki.

### Krok 2 — Performance kontaktu / mapy Google
Strona kontaktu ładuje embed Google Maps i odpala dużo requestów zewnętrznych.

Do zrobienia:
- zamienić mapę na statyczny placeholder + przycisk „Otwórz w Google Maps”, albo
- lazy-load mapy dopiero po kliknięciu.

Priorytet: średni/wysoki, szczególnie mobile.

### Krok 3 — Pełny Lighthouse na docelowym hostingu
Lokalne pomiary Playwright są OK do bugów, ale Core Web Vitals trzeba sprawdzić na prawdziwym hostingu HTTPS.

Do zrobienia po deployu:
- Lighthouse mobile/desktop dla `/`, `/kontakt`, `/uslugi/monitoring-cctv`, `/lokalizacja/szczecin`,
- sprawdzić LCP/CLS/INP,
- poprawić największe assety, jeśli wynik spadnie.

Priorytet: średni.

### Krok 4 — Dopiąć sitemap po zmianie trailing slash
Sitemap działa, ale przy `trailingSlash: true` warto zdecydować jeden standard URL-i.

Do zrobienia:
- albo zostawić canonical bez `/` i mieć redirect na hostingu,
- albo zaktualizować sitemap/canonical do wersji z `/`.

Priorytet: średni, żeby nie mieszać sygnałów SEO.

### Krok 5 — Rozbudować SEO lokalizacji, jeśli celem jest całe województwo
Aktualnie pełne landing pages są dla kilku lokalizacji, a część miast z homepage kieruje ogólnie na `/lokalizacja`.

Do zrobienia:
- jeśli chcesz rankować na Gryfino/Goleniów/Stargard/Police/Pyrzyce/Trzebiatów/Karlino — stworzyć osobne strony,
- jeśli nie — zostawić jako obszar działania bez osobnych landingów.

Priorytet: biznesowo wysoki, technicznie średni.

### Krok 6 — UI polish przed pokazaniem klientowi
Nie znalazłem blokujących bugów, ale warto zrobić szybki manualny przegląd wizualny.

Do zrobienia:
- przejrzeć screenshoty w `/tmp/microcomp-dogfood/screenshots`,
- szczególnie homepage mobile 320/390, kontakt mobile, lokalizacje i usługi,
- ocenić, czy sekcje nie są za długie i czy CTA są wystarczająco mocne.

Priorytet: średni.

## Evidence

- Raw QA JSON: `/tmp/microcomp-dogfood/raw-results.json`
- Screenshoty: `/tmp/microcomp-dogfood/screenshots`
- Test formularza z poprawnym submit: `/tmp/microcomp-dogfood/screenshots/form-valid-submit.png`

## Krótki werdykt

Strona jest technicznie w stanie do pokazania po poprawkach QA. Największy realny brak przed produkcją to prawdziwa wysyłka formularza i decyzja, czy robimy pełne landing pages dla dodatkowych miast.
