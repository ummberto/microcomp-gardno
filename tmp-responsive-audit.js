const { chromium } = require('playwright');
const fs = require('fs');
const widths = [320, 360, 375, 390, 430, 768, 1024, 1280, 1440];
const base = 'http://127.0.0.1:3003/';
(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  for (const width of widths) {
    const height = width < 768 ? 844 : width === 768 ? 1024 : 900;
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1, isMobile: width < 768 });
    const consoleErrors = [];
    page.on('console', msg => { if (['error','warning'].includes(msg.type())) consoleErrors.push(`${msg.type()}: ${msg.text()}`); });
    page.on('pageerror', err => consoleErrors.push(`pageerror: ${err.message}`));
    await page.goto(base + `?qa=${width}`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `/tmp/microcomp-${width}.png`, fullPage: false, animations: 'disabled', timeout: 60000 });
    const data = await page.evaluate((width) => {
      const rect = (sel) => { const el = document.querySelector(sel); if (!el) return null; const r = el.getBoundingClientRect(); return {x:+r.x.toFixed(1), y:+r.y.toFixed(1), w:+r.width.toFixed(1), h:+r.height.toFixed(1), right:+r.right.toFixed(1), bottom:+r.bottom.toFixed(1)}; };
      const elements = [...document.body.querySelectorAll('*')];
      const overflowEls = elements.map(el => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > innerWidth + 1 || r.left < -1)) {
          return { tag: el.tagName, cls: el.className?.toString().slice(0,80), text: (el.innerText || '').replace(/\s+/g,' ').slice(0,80), x: Math.round(r.x), w: Math.round(r.width), right: Math.round(r.right) };
        }
      }).filter(Boolean).slice(0,10);
      const linksButtons = [...document.querySelectorAll('a,button')].map(el => {
        const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
        return { text: (el.innerText || el.getAttribute('aria-label') || '').replace(/\s+/g,' ').trim().slice(0,60), display: cs.display, visible: cs.display !== 'none' && r.width > 0 && r.height > 0, x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) };
      }).filter(x => x.visible && x.y < innerHeight + 100);
      const smallTargets = linksButtons.filter(x => (x.w < 44 || x.h < 44) && x.text && x.y < innerHeight);
      const h1 = document.querySelector('h1');
      const mobileBtn = document.querySelector('.mobile-menu-btn');
      const photo = document.querySelector('.home-hero-mobile-photo');
      const spline = document.querySelector('.home-hero-spline');
      return {
        width, title: h1?.innerText, h1: rect('h1'), hero: rect('.home-hero'), visual: rect('.home-hero-visual'),
        bodyScrollWidth: document.documentElement.scrollWidth, viewportWidth: innerWidth,
        horizontalOverflow: document.documentElement.scrollWidth > innerWidth + 1, overflowEls,
        mobileBtnDisplay: mobileBtn ? getComputedStyle(mobileBtn).display : null, mobileBtn: rect('.mobile-menu-btn'),
        photoDisplay: photo ? getComputedStyle(photo).display : null, splineDisplay: spline ? getComputedStyle(spline).display : null,
        firstCta: rect('main a[href^="tel:"]'), smallTargets: smallTargets.slice(0,8), topLinks: linksButtons.slice(0,12)
      };
    }, width);
    data.consoleErrors = consoleErrors.slice(0,10);
    results.push(data);
    await page.close();
  }
  await browser.close();
  fs.writeFileSync('/tmp/microcomp-responsive-audit.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results.map(r => ({width:r.width, overflow:r.horizontalOverflow, h1:r.h1, heroH:r.hero?.h, mobileBtn:r.mobileBtnDisplay, photo:r.photoDisplay, spline:r.splineDisplay, smallTargets:r.smallTargets.length, errors:r.consoleErrors.length})), null, 2));
})();
