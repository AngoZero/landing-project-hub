import { mkdirSync } from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const APP_URL = 'http://127.0.0.1:1420';
const STORAGE_KEY = 'project-hub-browser-store';
const OUT_DIR = path.resolve(process.cwd(), 'public/screenshots');
const VIEWPORT = { width: 1480, height: 920 };

mkdirSync(OUT_DIR, { recursive: true });

function translateCopy(lang, copy) {
  return copy[lang];
}

function createMockStore(theme, lang, hasCompletedOnboarding) {
  const now = new Date().toISOString();
  const roots = hasCompletedOnboarding
    ? [
        {
          id: 'root-1',
          path: '/workspace/mock-lab',
          label: translateCopy(lang, { en: 'Mock Lab', es: 'Laboratorio Demo' }),
          maxDepth: 3,
          createdAt: now,
          childRules: [],
        },
        {
          id: 'root-2',
          path: '/workspace/demo-ops',
          label: translateCopy(lang, { en: 'Demo Ops', es: 'Operaciones Demo' }),
          maxDepth: 2,
          createdAt: now,
          childRules: [],
        },
      ]
    : [];

  const workspaces = hasCompletedOnboarding
    ? [
        { id: 'ws-1', name: translateCopy(lang, { en: 'product-suite', es: 'suite-producto' }), path: '/workspace/mock-lab/product-suite' },
        { id: 'ws-2', name: translateCopy(lang, { en: 'client-demos', es: 'demos-cliente' }), path: '/workspace/mock-lab/client-demos' },
        { id: 'ws-3', name: translateCopy(lang, { en: 'ops-lab', es: 'laboratorio-ops' }), path: '/workspace/demo-ops/ops-lab' },
      ]
    : [];

  const projects = hasCompletedOnboarding
    ? [
        {
          id: 'project-1',
          source: 'scanned',
          name: translateCopy(lang, { en: 'Atlas Console', es: 'Consola Atlas' }),
          path: '/workspace/mock-lab/product-suite/atlas-console',
          description: translateCopy(lang, {
            en: 'Operations cockpit for campaign status, alerts, and rollout tracking.',
            es: 'Centro de control para estado de campañas, alertas y seguimiento de despliegues.',
          }),
          tags: lang === 'en' ? ['dashboard', 'mock'] : ['panel', 'demo'],
          client: translateCopy(lang, { en: 'Northwind Demo', es: 'Northwind Demo' }),
          projectType: 'frontend',
          stack: ['React', 'TypeScript', 'Vite'],
          detectedStack: ['React', 'TypeScript', 'Vite'],
          favorite: true,
          lastAccessedAt: now,
          createdAt: now,
          updatedAt: now,
          status: 'active',
          quickCommands: [
            {
              id: 'command-1',
              name: translateCopy(lang, { en: 'Start dev server', es: 'Iniciar servidor dev' }),
              command: 'npm run dev',
              description: translateCopy(lang, {
                en: 'Run the local preview server for the sample console.',
                es: 'Ejecuta el servidor local de preview para la consola de muestra.',
              }),
            },
          ],
          localUrls: [{ id: 'url-1', label: translateCopy(lang, { en: 'Local app', es: 'App local' }), url: 'http://localhost:4173' }],
          notes: {
            nextStep: translateCopy(lang, { en: 'Polish the dashboard filters.', es: 'Pulir los filtros del panel.' }),
            reminders: translateCopy(lang, { en: 'Review release copy before the demo.', es: 'Revisar el copy del release antes del demo.' }),
            claudePrompt: translateCopy(lang, {
              en: 'Review the dashboard hierarchy and highlight visual noise.',
              es: 'Revisa la jerarquía del panel y detecta ruido visual.',
            }),
            codexPrompt: translateCopy(lang, {
              en: 'Implement the next UX pass using the current conventions.',
              es: 'Implementa la siguiente iteración de UX usando las convenciones actuales.',
            }),
            pending: translateCopy(lang, {
              en: '- QA the filters\n- Verify empty states',
              es: '- QA de filtros\n- Verificar estados vacíos',
            }),
          },
          detectedFiles: ['package.json', 'vite.config.ts', '.git'],
          git: { isRepo: true, branch: 'main', dirty: false },
          pathExists: true,
          workspaceId: 'ws-1',
          subProjects: [
            {
              name: translateCopy(lang, { en: 'marketing-site', es: 'sitio-marketing' }),
              path: '/workspace/mock-lab/product-suite/atlas-console/apps/marketing-site',
              stack: ['Astro', 'TypeScript'],
              projectType: 'frontend',
              detectedFiles: ['package.json', 'astro.config.mjs'],
              git: { isRepo: true, branch: 'main', dirty: false },
            },
          ],
        },
        {
          id: 'project-2',
          source: 'scanned',
          name: translateCopy(lang, { en: 'Mercury API', es: 'API Mercury' }),
          path: '/workspace/mock-lab/product-suite/mercury-api',
          description: translateCopy(lang, {
            en: 'Backend for inventory sync, auth handoff, and internal reporting.',
            es: 'Backend para sincronización de inventario, handoff de auth y reportes internos.',
          }),
          tags: lang === 'en' ? ['api', 'mock'] : ['api', 'demo'],
          client: translateCopy(lang, { en: 'Northwind Demo', es: 'Northwind Demo' }),
          projectType: 'backend',
          stack: ['Node', 'TypeScript', 'Docker'],
          detectedStack: ['Node', 'TypeScript', 'Docker'],
          favorite: false,
          lastAccessedAt: now,
          createdAt: now,
          updatedAt: now,
          status: 'active',
          quickCommands: [],
          localUrls: [{ id: 'url-2', label: 'API', url: 'http://localhost:4100' }],
          notes: {
            nextStep: '',
            reminders: '',
            claudePrompt: '',
            codexPrompt: '',
            pending: '',
          },
          detectedFiles: ['package.json', 'Dockerfile', '.git'],
          git: { isRepo: true, branch: 'develop', dirty: true },
          pathExists: true,
          workspaceId: 'ws-1',
          subProjects: [],
        },
        {
          id: 'project-3',
          source: 'scanned',
          name: translateCopy(lang, { en: 'Nova Mobile', es: 'Nova Mobile' }),
          path: '/workspace/mock-lab/client-demos/nova-mobile',
          description: translateCopy(lang, {
            en: 'Client demo app for account alerts and quick status updates.',
            es: 'App demo para alertas de cuenta y actualizaciones rápidas de estado.',
          }),
          tags: lang === 'en' ? ['mobile', 'demo'] : ['móvil', 'demo'],
          client: translateCopy(lang, { en: 'Signal Studio', es: 'Signal Studio' }),
          projectType: 'mobile',
          stack: ['Flutter', 'Dart'],
          detectedStack: ['Flutter', 'Dart'],
          favorite: true,
          lastAccessedAt: now,
          createdAt: now,
          updatedAt: now,
          status: 'active',
          quickCommands: [],
          localUrls: [],
          notes: {
            nextStep: '',
            reminders: '',
            claudePrompt: '',
            codexPrompt: '',
            pending: '',
          },
          detectedFiles: ['pubspec.yaml', '.git'],
          git: { isRepo: true, branch: 'main', dirty: false },
          pathExists: true,
          workspaceId: 'ws-2',
          subProjects: [],
        },
        {
          id: 'project-4',
          source: 'scanned',
          name: translateCopy(lang, { en: 'Orbit CMS', es: 'CMS Orbit' }),
          path: '/workspace/mock-lab/client-demos/orbit-cms',
          description: translateCopy(lang, {
            en: 'Content platform with editorial review, media versioning, and delivery hooks.',
            es: 'Plataforma de contenido con revisión editorial, versionado de medios y hooks de entrega.',
          }),
          tags: ['cms'],
          client: translateCopy(lang, { en: 'Orbit Demo', es: 'Orbit Demo' }),
          projectType: 'backend',
          stack: ['Laravel', 'Docker'],
          detectedStack: ['Laravel', 'Docker'],
          favorite: false,
          lastAccessedAt: now,
          createdAt: now,
          updatedAt: now,
          status: 'paused',
          quickCommands: [],
          localUrls: [],
          notes: {
            nextStep: '',
            reminders: '',
            claudePrompt: '',
            codexPrompt: '',
            pending: '',
          },
          detectedFiles: ['composer.json', 'Dockerfile', '.git'],
          git: { isRepo: true, branch: 'main', dirty: false },
          pathExists: true,
          workspaceId: 'ws-2',
          subProjects: [],
        },
        {
          id: 'project-5',
          source: 'scanned',
          name: translateCopy(lang, { en: 'Pulse UI', es: 'Pulse UI' }),
          path: '/workspace/demo-ops/ops-lab/pulse-ui',
          description: translateCopy(lang, {
            en: 'Token library and documentation shell for product delivery teams.',
            es: 'Librería de tokens y shell de documentación para equipos de producto.',
          }),
          tags: lang === 'en' ? ['ui', 'design'] : ['ui', 'diseño'],
          client: translateCopy(lang, { en: 'Internal Sandbox', es: 'Sandbox Interno' }),
          projectType: 'frontend',
          stack: ['React', 'TypeScript', 'Vite'],
          detectedStack: ['React', 'TypeScript', 'Vite'],
          favorite: false,
          lastAccessedAt: now,
          createdAt: now,
          updatedAt: now,
          status: 'archived',
          quickCommands: [],
          localUrls: [],
          notes: {
            nextStep: '',
            reminders: '',
            claudePrompt: '',
            codexPrompt: '',
            pending: '',
          },
          detectedFiles: ['package.json', '.git'],
          git: { isRepo: true, branch: 'main', dirty: false },
          pathExists: true,
          workspaceId: 'ws-3',
          subProjects: [],
        },
      ]
    : [];

  return {
    version: 3,
    roots,
    projects,
    workspaces,
    preferences: {
      theme,
      catalogLayout: 'grid',
      sortBy: 'lastAccessed',
      rootScanDepth: 3,
      showArchived: true,
      language: lang,
      hasCompletedOnboarding,
    },
  };
}

async function primeStore(page, store) {
  await page.goto(APP_URL, { waitUntil: 'domcontentloaded' });
  await page.evaluate(
    ({ key, value }) => {
      window.localStorage.clear();
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    { key: STORAGE_KEY, value: store },
  );
  await page.reload({ waitUntil: 'domcontentloaded' });
}

async function saveScreenshot(page, name, theme, lang) {
  const filePath = path.join(OUT_DIR, `${name}-${theme}-${lang}.png`);
  await page.screenshot({ path: filePath, type: 'png' });
  console.log(`✓ ${name}-${theme}-${lang}.png`);
}

async function openSidebarView(page, index) {
  await page.locator('button.sidebar__nav-item').nth(index).click();
}

async function captureVariant(theme, lang) {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    colorScheme: theme,
    locale: lang === 'es' ? 'es-MX' : 'en-US',
  });
  const page = await context.newPage();

  await primeStore(page, createMockStore(theme, lang, true));
  await page.waitForSelector('.project-card', { timeout: 15000 });
  await page.waitForTimeout(400);
  await saveScreenshot(page, 'catalog', theme, lang);

  await page.locator('.project-card').first().click();
  await page.waitForSelector('.modal--detail', { timeout: 10000 });
  await page.waitForTimeout(300);
  await saveScreenshot(page, 'detail', theme, lang);

  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);
  await openSidebarView(page, 1);
  await page.waitForSelector('.roots-view', { timeout: 10000 });
  await page.waitForTimeout(300);
  await saveScreenshot(page, 'roots', theme, lang);

  await openSidebarView(page, 2);
  await page.waitForSelector('.settings-view', { timeout: 10000 });
  await page.waitForTimeout(300);
  await saveScreenshot(page, 'settings', theme, lang);

  await primeStore(page, createMockStore(theme, lang, false));
  await page.waitForSelector('.onboarding-shell', { timeout: 10000 });
  page.once('dialog', async (dialog) => {
    await dialog.accept('/workspace/mock-lab');
  });
  await page.locator('.onboarding-step .button.button--primary').first().click();
  await page.waitForSelector('.onboarding-step__selection', { timeout: 10000 });
  await page.waitForTimeout(300);
  await saveScreenshot(page, 'onboarding', theme, lang);

  await browser.close();
}

for (const theme of ['dark', 'light']) {
  for (const lang of ['en', 'es']) {
    await captureVariant(theme, lang);
  }
}
console.log('All screenshots captured.');
