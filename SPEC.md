# SPEC.md — Microcomp Gardno

## 1. Concept & Vision

Profesjonalna strona firmowa dla Microcomp — lokalnego dostawcy IT z Gardna (woj. zachodniopomorskie). Strona ma jedno zadanie: zdobyć zaufanie i wygenerować lead (telefon lub formularz). Wizualnie: poważny partner technologiczny, nie startup ani nie amatorski serwis. Kolorystyka ciemna (navy + zielony akcent) sygnalizuje bezpieczeństwo i stabilność. Strona ma być szybka, responsywna i przekonująca dla właściciela firmy, który szuka godnego zaufania dostawcy IT na lata.

## 2. Design Language

### Aesthetic direction
"Trust & Authority" — ciemny, profesjonalny, zielony akcent sygnalizujący bezpieczeństwo (jak lock/verified). Inspiracja: enterprise security companies, not "creative agency".

### Color palette
- Primary (navy): `#0F172A`
- Primary light: `#1E293B`
- Accent (green): `#16A34A`
- Accent light: `#22C55E`
- Background: `#F8FAFC`
- Surface (white sections): `#FFFFFF`
- Border: `#E2E8F0`
- Muted text: `#64748B`
- Body text: `#1E293B`

### Typography
- Headings: **Poppins** (600, 700) — Google Fonts
- Body: **Open Sans** (400, 500, 600) — Google Fonts
- Scale: 14/16/18/20/24/30/36/48/60px

### Spatial system
- Base unit: 8px
- Sections: 80px–120px vertical padding (desktop), 48px–64px (mobile)
- Container max-width: 1200px
- Grid: 12-column, gap 24px

### Motion philosophy
- Entrance: `opacity:0 → 1` + `translateY(24px → 0)`, 600ms ease-out
- Stagger: 100ms delay between sibling elements
- Hover: subtle lift (`translateY(-4px)`) + shadow deepen
- CTAs: scale(1.02) on hover, 200ms

### Visual assets
- Icons: Lucide React (SVG, stroke 1.5)
- Images: Unsplash (security/tech/office context), lazy loaded
- Decorative: subtle grid pattern in hero, green gradient accents on key elements
- Grain overlay: 2.5% opacity fixed overlay for depth

## 3. Layout & Structure

### Page types
1. **Homepage** (`/`) — full landing with all service previews
2. **Service pages** (`/uslugi/[slug]`) — 7 static pages
3. **Location pages** (`/lokalizacja/[miasto]`) — 6 city pages

### Homepage structure (top to bottom)
1. **Header** — sticky, navy background, logo left, nav center, CTA right
2. **Hero** — full-width navy bg, H1 + subtext + dual CTA (tel + form), trust badges
3. **Trust bar** — light gray bg, 4 stats (20+ lat, 4.9★ Google, obsługiwane miasta, realizacje)
4. **Usługi** — white bg, 6 service cards w/ icons, hover lift
5. **Dlaczego My** — navy bg, 4 USP w/ icons
6. **Lokalizacja** — white bg, mapa regionu + lista miast
7. **Opinie** — light gray bg, 3 testimonial cards
8. **CTA section** — green gradient bg, wezwij do działania
9. **Footer** — navy bg, 4-column grid, contact info, links

### Responsive strategy
- Mobile-first breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Nav: hamburger < 1024px, full horizontal >= 1024px
- Cards: 1 col mobile, 2 col tablet, 3 col desktop
- Hero: stacked on mobile, side-by-side on lg

## 4. Features & Interactions

### Navigation
- Sticky header, blur backdrop on scroll
- Mobile hamburger → full-screen overlay menu
- Active page indicator (green underline)
- CTA button "Zamów rozmowę" always visible

### Hero section
- H1: "IT i Monitoring dla Firm z Gardna i Okolic"
- Subtext: krótki USP paragraph
- Dual CTA: "Zadzwoń teraz" (tel: link) + "Poproś o wycenę" (scroll to form)
- Trust badges below CTAs: 20+ lat, 4.9★ Google, 7 dni/wydział

### Service cards
- Icon + H3 + short description + "Dowiedz się więcej →" link
- Hover: lift + shadow + green border-left accent
- Cards link to `/uslugi/[slug]`

### Contact form
- Fields: Imię i nazwisko, Email, Telefon, Usługa (select), Wiadomość
- Validation: required fields, email format, phone format
- Submit: loading state → success message
- Error state: field-level error messages

### FAQ accordion
- Click to expand/collapse
- Plus/minus icon indicator
- Smooth height animation
- Only one open at a time

### Testimonials
- Google-style star rating (filled stars)
- Client name + company
- Quote text
- Carousel dots for mobile navigation (3 max so simple)

## 5. Component Inventory

### Header
- States: default (transparent on hero), scrolled (navy + shadow), mobile-open (overlay)
- Logo: "MICROCOMP" text mark in Poppins 700
- Nav links: hover underline slide-in from left
- CTA: green button, hover darken

### ServiceCard
- Default: white bg, border, rounded-xl
- Hover: translateY(-4px), deeper shadow, green left border (3px)
- Icon: 48px, green color
- Title: Poppins 600, 18px
- Description: Open Sans 400, muted color
- Link: "Dowiedz się więcej →" in green

### StatBadge
- Icon + number (large, Poppins 700) + label (Open Sans)
- Used in trust bar (horizontal) and stats grid (2x2 on mobile)

### TestimonialCard
- 5 stars (filled SVG)
- Quote text in italics
- Author: name bold + company
- White card, subtle shadow

### CTASection
- Green gradient background (from `#16A34A` to `#15803D`)
- White text H2 + subtext
- Two buttons: primary (white bg, green text) + secondary (transparent, white border)

### ContactForm
- Dark navy background (fits footer CTA section context)
- White labels above inputs
- Input: full-width, rounded-lg, border `#334155`, focus: border green + ring
- Select: custom styled dropdown
- Submit: full-width green button

### Footer
- Navy background `#0F172A`
- 4 columns: O nas, Usługi, Lokalizacje, Kontakt
- Logo + short description column
- Contact info: phone, email with icons
- Copyright + privacy link

## 6. Technical Approach

### Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (inline @theme in globals.css)
- **Fonts**: next/font/google — Poppins + Open Sans
- **Icons**: lucide-react
- **Language**: TypeScript

### File structure
```
src/
  app/
    layout.tsx          # Root layout, fonts, global CSS, Header, Footer
    page.tsx            # Homepage
    globals.css         # Tailwind @theme, utilities, animations
    uslugi/
      page.tsx          # Service listing
      [slug]/
        page.tsx        # 7 service pages (generateStaticParams)
    lokalizacja/
      [miasto]/
        page.tsx        # 6 location pages (generateStaticParams)
  components/
    Header.tsx          # Sticky nav, mobile menu (use client)
    Footer.tsx          # 4-col footer
    ServiceCard.tsx     # Reusable card
    StatBadge.tsx       # Trust stat display
    TestimonialCard.tsx # Quote + stars + author
    CTASection.tsx      # Green gradient CTA
    ContactForm.tsx     # Full form with validation
    FAQAccordion.tsx    # Expandable FAQ item
    MobileMenu.tsx      # Full-screen mobile overlay
  lib/
    services.ts         # Service data (title, slug, description, icon)
    locations.ts        # Location data (name, slug, description)
    schema.ts           # JSON-LD LocalBusiness schema
    facts.ts            # Company facts (phone, email, address)
```

### SEO
- `generateMetadata()` per page
- Primary/location keywords in H1, title, meta description
- Schema.org: LocalBusiness on homepage
- Canonical URLs
- Sitemap and robots.txt via Next.js metadata API

### Performance
- `next/image` for all images
- Font subsetting via next/font
- CSS only animations (no GSAP)
- Static generation for all pages (no SSR needed)
- Core Web Vitals target: LCP < 2.5s, CLS < 0.1

### Services (7)
1. `monitoring-cctv` — Monitoring i alarmy (CCTV IP, TVI, CVI)
2. `it-dla-firm` — Usługi IT dla firm (outsourcing, sieci, serwis)
3. `strony-internetowe` — Strony WWW i pozycjonowanie
4. `sieci-komputerowe` — Sieci komputerowe (projekt, instalacja)
5. `oprogramowanie-biurowe` — Comarch ERP, systemy FK
6. `backup-danych` — Kopie bezpieczeństwa, backup
7. `serwis-komputerow` — Serwis komputerów i urządzeń

### Locations (6)
1. `gardno` — siedziba
2. `szczecin`
3. `gryfino`
4. `goleniow`
5. `stargard`
6. `police`

### Local × Service pages (24 total, URL pattern: /[usluga]-[miasto])
Pattern: `monitoring-cctv-gardno`, `monitoring-cctv-szczecin`, etc.
H1: "Monitoring CCTV Gardno — Systemy CCTV dla Firm i Domów"
Meta: unikalna na każdej podstronie
