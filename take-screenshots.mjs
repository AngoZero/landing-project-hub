import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT = './public/screenshots';
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1480, height: 920 },
  colorScheme: 'dark',
});
const page = await ctx.newPage();

// ── Phase A: Capture onboarding (first-run state) ──────────
await page.goto('http://localhost:1420');
await page.evaluate(() => localStorage.clear());
await page.reload();
await page.waitForTimeout(2000);

// Onboarding view (before folder selection)
await page.screenshot({ path: `${OUT}/onboarding.png`, type: 'png' });
console.log('✓ onboarding.png');

// ── Phase B: Skip onboarding, capture main views ───────────
// Mark onboarding as complete so the app shows the main UI with sample data
await page.evaluate(() => {
  const raw = localStorage.getItem('project-hub-store');
  if (raw) {
    const store = JSON.parse(raw);
    store.preferences = { ...store.preferences, hasCompletedOnboarding: true };
    localStorage.setItem('project-hub-store', JSON.stringify(store));
  }
});
await page.reload();
await page.waitForTimeout(2000);

// 1. Catalog view
await page.screenshot({ path: `${OUT}/catalog.png`, type: 'png' });
console.log('✓ catalog.png');

// 2. Click on first project to open detail
await page.click('.project-card', { timeout: 5000 });
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/detail.png`, type: 'png' });
console.log('✓ detail.png');

// 3. Close detail modal and go to Roots
await page.keyboard.press('Escape');
await page.waitForTimeout(300);
await page.click('.sidebar__nav-item:nth-child(2)');
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/roots.png`, type: 'png' });
console.log('✓ roots.png');

// 4. Settings view
await page.click('.sidebar__nav-item:nth-child(3)');
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/settings.png`, type: 'png' });
console.log('✓ settings.png');

await browser.close();
console.log('Done!');
