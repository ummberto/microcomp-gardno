# Local SEO Analysis — microcomp.co (analiza lokalna: localhost:3003)

> Analiza **kodu / on-page** działającej lokalnie kopii strony (Next.js). Sygnały „live" (GBP, opinie Google, cytowania, pozycje w local pack) **nie mogły być zweryfikowane** — patrz Ograniczenia.

## Wynik: 64/100

| Wymiar | Waga | Ocena | Punkty |
|---|---|---|---|
| GBP Signals | 25% | Low — brak jakiejkolwiek integracji GBP/mapy na stronie | 8/25 |
| Reviews & Reputation | 20% | Partial — `aggregateRating` 4.9 (28) w schema, brak widgetu/opinii na stronie | 11/20 |
| Local On-Page SEO | 20% | Good — miasto w title/H1, 7 unikalnych stron lokalizacji, `tel:` | 16/20 |
| NAP & Citations | 15% | Partial — NAP spójny w schema, ale **brak widocznego adresu w treści/stopce**, `sameAs: []` | 8/15 |
| Local Schema | 10% | Partial — `LocalBusiness` OK, ale **geo 2 miejsca po przecinku** + konflikt @id | 6/10 |
| Local Links/Authority | 10% | Low — brak sygnałów (izba, BBB/lokalne, prasa, „best of") | 3/10 |

**Typ biznesu:** Hybrid (siedziba Willowa 4, Gardno 72-410 + `areaServed` 13 miast)
**Branża:** Home/IT Services (monitoring, sieci, ERP, WWW) → schema generyczny `LocalBusiness` jest tu poprawny.

---

## Krytyczne / szybkie do naprawy

**1. Konflikt schema (dwa bloki, ten sam `@id`, różny `@type`)**
`app/layout.tsx` wstrzykuje `Organization`, a `app/page.tsx` `LocalBusiness` — oba z `@id: https://microcomp.co/#organization`. Google dostaje sprzeczną definicję encji.
→ Wybierz jeden. Zostaw `LocalBusiness` (na home), a w layoucie usuń duplikat albo zmień na `WebSite`/nadrzędny `@id`.

**2. `geo` za mało precyzyjne + prawdopodobnie zaokrąglone**
`latitude: 53.85, longitude: 14.85` — 2 miejsca po przecinku. Wymagane min. 5. Podaj realne współrzędne Willowa 4, Gardno. Zaokrąglenie wskazuje na złą pozycję pinezki.
`lib/facts.ts` → `SCHEMA_LOCAL_BUSINESS.geo`

**3. Zdublowany suffix w tytułach podstron**
`template: "%s | Microcomp Gardno"` w `layout.tsx`, a `metaTitle` podstron (np. `/lokalizacja`) **już** kończy się na „| Microcomp Gardno" → wynik: `... | Microcomp Gardno | Microcomp Gardno`.
→ Usuń „| Microcomp Gardno" z `metaTitle` w `lib/locations.ts` / `lib/services.ts` **albo** ustaw `template: "%s"` dla stron z własnym pełnym tytułem.

**4. Wycieki cyrylicy w treści (AI-generated) — psują wiarygodność i język**
- `app/o-firmie/page.tsx:122` — „menu **голосового** automatu"
- `app/kontakt/page.tsx:196` — „zaproponować **реальне** rozwiązanie"
- `lib/services.ts:78,263,273` — „**минимум** 2 warianty", „**получаешь**", „**Реализуем** страницы", „na основеNext.js" (dodatkowo brak spacji)
→ Przejrzyj całość pod `[а-яА-Я]` i przepisz na polski:
```
grep -rn "[а-яА-Я]" app lib components
```

**5. Brak widocznego adresu NAP w stopce**
Stopka linkuje „Gardno (siedziba)" ale **nie pokazuje** „Willowa 4, 72-410 Gardno". Adres jest tylko w JSON-LD. Widoczny, tekstowy NAP (stopka + `/kontakt`) to podstawowy sygnał lokalny i zgodność z GBP.
`components/Footer.tsx`

---

## Warto zrobić (średni nakład)

6. **Osadź mapę Google** na `/kontakt` i `/lokalizacja/gardno` (lazy-load) — biznes hybrydowy z siedzibą powinien mieć pinezkę.
7. **`sameAs: []` jest puste** — dodaj URL do GBP, Facebooka, ew. wizytówek. 3 z top-5 czynników widoczności w AI to cytowania.
8. **`aggregateRating` bez pokrycia** — 4.9/28 w schema bez realnego źródła to ryzyko (Google może zignorować lub potraktować jako spam rich-snippet). Podłącz pod prawdziwe opinie GBP albo usuń ze schema, dopóki nie ma widgetu opinii na stronie.
9. **Q&A → sekcje FAQ** na stronach usług/lokalizacji (GBP Q&A wygaszone XII 2025).

## Wysoki wpływ (poza kodem)

10. **Załóż/uzupełnij: Apple Business Connect + Bing Places** (Bing zasila ChatGPT/Copilot). Bez tego zero widoczności w AI-local.
11. Lokalny digital PR / „best of" + izba gospodarcza — #1 czynnik cytowań w AI. Brak jakiegokolwiek sygnału na stronie.

---

## Co jest dobre

- Osobne, **unikalne** strony 7 lokalizacji (`intro`/`stats`/`highlights` różne per miasto) — przechodzą swap-test, bez doorway pages. <30 stron → brak ryzyka bramkowego.
- Miasto w `title` i `H1`, `tel:` na numer w nagłówku/CTA, `openingHoursSpecification`, `foundingDate`, `priceRange` w schema.
- NAP **spójny** między `layout` a `page` schema (Willowa 4 / Gardno / 72-410 / +48 502 568 438).

## Ograniczenia

Nie dało się ocenić z localhost: realna kategoria i stan GBP, liczba/świeżość/velocity opinii Google (reguła 18 dni), pozycje w local pack / geo-grid, obecność w katalogach (Yelp/BBB/Facebook), Domain Authority i backlinki. To wymaga danych live (GBP, BrightLocal/DataForSEO) i wdrożonej domeny — obecnie `microcomp.co` nie jest analizowany na żywo, tylko kod.
