const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const base = process.env.QA_BASE || 'http://127.0.0.1:3003';
const outDir = '/tmp/microcomp-dogfood';
fs.mkdirSync(`${outDir}/screenshots`, { recursive: true });

const pages = [
  '/',
  '/kontakt',
  '/o-firmie',
  '/lokalizacja',
  '/lokalizacja/gardno',
  '/lokalizacja/szczecin',
  '/uslugi/monitoring-cctv',
  '/uslugi/it-dla-firm',
  '/uslugi/strony-internetowe',
  '/blog',
  '/blog/monitoring-cctv-ceny-2024'
];
const viewports = [
  {name:'mobile-320', width:320, height:844, isMobile:true},
  {name:'mobile-390', width:390, height:844, isMobile:true},
  {name:'tablet-768', width:768, height:1024, isMobile:true},
  {name:'desktop-1440', width:1440, height:900, isMobile:false},
];

function uniq(a){return [...new Set(a)]}
function cleanConsole(msgs){
  return msgs.filter(m => !m.includes('GroupMarkerNotSet') && !m.includes('GL Driver Message') && !m.includes('GPU stall') && !m.includes('Automatic fallback to software WebGL')).slice(0,20);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  const linkStatuses = {};

  for (const vp of viewports) {
    for (const route of pages) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, isMobile: vp.isMobile, deviceScaleFactor: 1 });
      page.setDefaultTimeout(45000);
      const consoleMsgs = [];
      const failedReqs = [];
      page.on('console', msg => { if (['error','warning'].includes(msg.type())) consoleMsgs.push(`${msg.type()}: ${msg.text()}`); });
      page.on('pageerror', err => consoleMsgs.push(`pageerror: ${err.message}`));
      page.on('requestfailed', req => failedReqs.push(`${req.failure()?.errorText || 'failed'} ${req.url()}`));
      const url = base + route;
      let status = null, loadMs = null;
      const t0 = Date.now();
      try {
        const resp = await page.goto(url, { waitUntil:'networkidle', timeout:45000 });
        status = resp?.status() || null;
        loadMs = Date.now() - t0;
        await page.waitForTimeout(900);
      } catch (e) {
        results.push({ vp: vp.name, route, status, fatal: String(e), console: cleanConsole(consoleMsgs), failedReqs });
        await page.close();
        continue;
      }
      const shotPath = `${outDir}/screenshots/${vp.name}-${route.replace(/[^a-z0-9]+/gi,'-') || 'home'}.png`;
      await page.screenshot({ path: shotPath, fullPage: false, animations: 'disabled', timeout: 60000 }).catch(()=>{});
      const data = await page.evaluate(() => {
        const $$ = s => [...document.querySelectorAll(s)];
        const text = el => (el?.innerText || el?.textContent || '').replace(/\s+/g,' ').trim();
        const meta = n => document.querySelector(`meta[name="${n}"], meta[property="${n}"]`)?.getAttribute('content') || '';
        const all = $$('body *');
        const overflowEls = all.map(el=>{const r=el.getBoundingClientRect(); return (r.width>0 && (r.right>innerWidth+1 || r.left<-1)) ? {tag:el.tagName, cls:String(el.className).slice(0,80), text:text(el).slice(0,90), x:Math.round(r.x), w:Math.round(r.width), right:Math.round(r.right)} : null}).filter(Boolean).slice(0,12);
        const visibleLinks = $$('a').filter(a=>{const r=a.getBoundingClientRect(); const cs=getComputedStyle(a); return r.width>0 && r.height>0 && cs.visibility!=='hidden' && cs.display!=='none'});
        const smallTargets = [...$$('a,button,input,select,textarea')].map(el=>{const r=el.getBoundingClientRect(); return {tag:el.tagName, text:text(el)||el.getAttribute('aria-label')||el.getAttribute('name')||'', w:Math.round(r.width), h:Math.round(r.height), y:Math.round(r.y), visible:r.width>0&&r.height>0}}).filter(x=>x.visible && (x.w<44 || x.h<44) && x.y < innerHeight).slice(0,20);
        const imgs = $$('img').map(img=>({src: img.currentSrc || img.src, alt: img.alt, complete: img.complete, nw: img.naturalWidth, nh: img.naturalHeight}));
        const brokenImgs = imgs.filter(i=>!i.complete || i.nw===0);
        const unlabeledControls = $$('input,textarea,select').filter(el=>{
          if (el.type === 'hidden') return false;
          const id = el.id;
          return !(el.getAttribute('aria-label') || el.getAttribute('aria-labelledby') || (id && document.querySelector(`label[for="${CSS.escape(id)}"]`)) || el.closest('label'));
        }).map(el=>({tag:el.tagName, type:el.getAttribute('type'), name:el.getAttribute('name'), placeholder:el.getAttribute('placeholder')}));
        const links = visibleLinks.map(a=>({href:a.href, text:text(a), target:a.target}));
        const buttons = $$('button').map(b=>({text:text(b)||b.getAttribute('aria-label')||'', disabled:b.disabled}));
        const h1s = $$('h1').map(text);
        const perf = performance.getEntriesByType('navigation')[0];
        return {
          title: document.title,
          metaDescription: meta('description'),
          canonical: document.querySelector('link[rel="canonical"]')?.href || '',
          h1s,
          bodyTextLen: text(document.body).length,
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth,
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          overflowEls,
          smallTargets,
          brokenImgs,
          missingAltImgs: imgs.filter(i=>!i.alt).slice(0,20),
          unlabeledControls,
          links,
          buttons,
          navTiming: perf ? {domContentLoaded: Math.round(perf.domContentLoadedEventEnd), load: Math.round(perf.loadEventEnd), transferSize: perf.transferSize} : null,
        };
      });
      results.push({ vp: vp.name, route, url, status, loadMs, screenshot: shotPath, console: cleanConsole(consoleMsgs), failedReqs: cleanConsole(failedReqs), ...data });
      await page.close();
    }
  }

  // link audit for internal links visible on desktop home/contact pages
  const context = await browser.newContext();
  const page = await context.newPage();
  for (const route of ['/', '/kontakt']) {
    await page.goto(base + route, { waitUntil: 'networkidle' });
    const hrefs = await page.evaluate(() => [...document.querySelectorAll('a[href]')].map(a=>a.href).filter(h=>h.startsWith(location.origin)));
    for (const href of uniq(hrefs)) {
      if (linkStatuses[href] !== undefined) continue;
      try {
        const resp = await page.goto(href, { waitUntil:'domcontentloaded', timeout:15000 });
        linkStatuses[href] = resp?.status() || null;
      } catch(e) { linkStatuses[href] = `ERR ${String(e).slice(0,80)}`; }
    }
  }
  await context.close();

  // contact form behavior on /kontakt
  const formTests = [];
  for (const vp of [{name:'mobile-390', width:390, height:844, isMobile:true},{name:'desktop-1440', width:1440, height:900, isMobile:false}]) {
    const p = await browser.newPage({ viewport:{width:vp.width,height:vp.height}, isMobile:vp.isMobile });
    const dialogs = [];
    p.on('dialog', async d => { dialogs.push({type:d.type(), message:d.message()}); await d.accept(); });
    await p.goto(base + '/kontakt', {waitUntil:'networkidle'});
    await p.locator('input,textarea,select,button').first().waitFor({timeout:10000}).catch(()=>{});
    const before = await p.locator('form').count().catch(()=>0);
    const requiredCount = await p.locator('input[required], textarea[required], select[required]').count().catch(()=>0);
    await p.locator('button[type="submit"]').first().click().catch(()=>{});
    await p.waitForTimeout(300);
    const invalidCount = await p.evaluate(() => [...document.querySelectorAll('input,textarea,select')].filter(el => !el.checkValidity()).length).catch(()=>null);
    const firstInvalidName = await p.evaluate(() => { const el=[...document.querySelectorAll('input,textarea,select')].find(el=>!el.checkValidity()); return el?.getAttribute('name') || el?.placeholder || null; }).catch(()=>null);
    formTests.push({vp:vp.name, beforeForms:before, requiredCount, emptySubmitInvalidCount:invalidCount, firstInvalidName, dialogs});
    await p.close();
  }

  await browser.close();
  const report = { base, date: new Date().toISOString(), pages, viewports: viewports.map(v=>v.name), results, linkStatuses, formTests };
  fs.writeFileSync(`${outDir}/raw-results.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify({
    pages: results.length,
    overflow: results.filter(r=>r.overflow).map(r=>`${r.vp} ${r.route}`),
    consoleIssues: results.filter(r=>r.console?.length).map(r=>({vp:r.vp, route:r.route, console:r.console.slice(0,2)})).slice(0,20),
    brokenImgs: results.filter(r=>r.brokenImgs?.length).map(r=>`${r.vp} ${r.route}`),
    unlabeledControls: results.filter(r=>r.unlabeledControls?.length).map(r=>({vp:r.vp, route:r.route, count:r.unlabeledControls.length, sample:r.unlabeledControls.slice(0,3)})),
    badLinks: Object.entries(linkStatuses).filter(([u,s])=>typeof s==='number' && s>=400),
    formTests
  }, null, 2));
})();
