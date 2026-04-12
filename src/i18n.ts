export type Lang = 'es' | 'en';

const translations: Record<Lang, Record<string, string>> = {
  es: {
    'meta.title': 'Project Hub — Herramienta Local para Desarrolladores',
    'meta.description': 'Escanea, organiza y lanza cada proyecto en tu máquina. Datos locales, sin nube, brutalmente rápido.',
    'meta.og.title': 'Project Hub — Herramienta Local para Desarrolladores',
    'meta.og.description': 'Escanea, organiza y lanza cada proyecto en tu máquina.',
    'nav.features': 'Funciones',
    'nav.screenshots': 'Capturas',
    'nav.releases': 'Versiones',
    'nav.download': 'Descarga',
    'toggle.lang': 'EN',
    'hero.eyebrow': 'HERRAMIENTA LOCAL PARA DESARROLLADORES',
    'hero.title': 'Tus proyectos.<br/>Un centro de mando.',
    'hero.sub': 'Escanea, organiza y lanza cada proyecto en tu máquina. Datos locales, sin nube, brutalmente rápido.',
    'hero.cta.mac': 'Descargar para macOS',
    'hero.cta.win': 'Descargar para Windows',
    'hero.pill': 'v0.1.5 — macOS & Windows',
    'hero.preview.alt': 'Vista del catálogo de Project Hub mostrando proyectos organizados por workspace con búsqueda y filtros',
    'features.eyebrow': 'FUNCIONES',
    'features.title': 'Todo lo que necesitas. Nada que no.',
    'feature.local.title': 'Local-First',
    'feature.local.desc': 'Todos los datos se quedan en tu máquina. Sin cuentas, sin nube, sin telemetría. Tus proyectos, tus reglas.',
    'feature.scan.title': 'Escaneo Inteligente',
    'feature.scan.desc': 'Detecta automáticamente estructura, frameworks y stacks tecnológicos en segundos. React, Node, Rust, Laravel, Docker y más.',
    'feature.workspace.title': 'Jerarquía de Workspaces',
    'feature.workspace.desc': 'Organiza con niveles de Raíz, Workspace, Proyecto y Subproyecto. Tabs por workspace, agrupación automática.',
    'feature.actions.title': 'Acciones Rápidas',
    'feature.actions.desc': 'Lanza Terminal, VS Code, Claude o Codex directamente desde el contexto de cualquier proyecto. Un click, directorio correcto.',
    'feature.catalog.title': 'Catálogo y Filtros',
    'feature.catalog.desc': 'Busca, filtra por cliente, tipo, stack o estado. Alterna entre vista grid y lista. Favoritos siempre arriba.',
    'feature.ai.title': 'Integración con IA',
    'feature.ai.desc': 'Prompts de Claude y Codex enfocados al contexto de cada proyecto. Desarrollo asistido por IA, integrado.',
    'feature.cross.title': 'Multiplataforma',
    'feature.cross.desc': 'Rendimiento nativo en macOS y Windows vía Tauri 2. Ligero, arranque rápido, huella mínima.',
    'feature.themes.title': 'Temas Claro y Oscuro',
    'feature.themes.desc': 'Dos temas cuidadosamente diseñados con cambio automático según el sistema. Neo-brutalista en ambos.',
    'feature.i18n.title': 'Bilingüe',
    'feature.i18n.desc': 'Interfaz completa en inglés y español. Detección del idioma del sistema con override manual.',
    'feature.onboarding.title': 'Onboarding Guiado',
    'feature.onboarding.desc': 'Asistente de primer uso que elige tu carpeta raíz, escanea la estructura y clasifica workspaces vs. proyectos antes del primer escaneo.',
    'screenshots.eyebrow': 'EN ACCIÓN',
    'screenshots.title': 'Míralo tú mismo.',
    'screenshot.catalog': 'Catálogo de Proyectos',
    'screenshot.catalog.alt': 'Catálogo de proyectos en vista grid, tabs de workspace, búsqueda y filtros de stack tecnológico',
    'screenshot.detail': 'Detalle del Proyecto',
    'screenshot.detail.alt': 'Panel de detalle del proyecto mostrando metadata, pills de stack, acciones rápidas y prompts de IA',
    'screenshot.roots': 'Carpetas Raíz',
    'screenshot.roots.alt': 'Vista de configuración de carpetas raíz con profundidad de escaneo y gestión de directorios',
    'screenshot.settings': 'Ajustes',
    'screenshot.settings.alt': 'Panel de ajustes con toggle de tema, selector de idioma, preferencias de layout y profundidad de escaneo',
    'screenshot.onboarding': 'Onboarding',
    'screenshot.onboarding.alt': 'Asistente de onboarding de primer uso con selección de carpeta raíz y revisión de estructura',
    'releases.eyebrow': 'VERSIONES',
    'releases.title': 'Qué cambió recientemente.',
    'releases.sub': 'Un historial corto de builds públicos para saber qué estás descargando.',
    'releases.latest.badge': 'Latest',
    'releases.latest.date': '12 abr 2026',
    'releases.latest.summary': 'Release corregida con descargables consistentes para macOS y Windows, versionado real del app y pipeline de publicación ajustado.',
    'releases.latest.item1': 'Instaladores actualizados para macOS Apple Silicon y Windows.',
    'releases.latest.item2': 'Release pipeline alineado al tag publicado.',
    'releases.latest.item3': 'Links de descarga estables desde GitHub Releases.',
    'releases.cta': 'Ver todas en GitHub',
    'releases.initial.date': '9 abr 2026',
    'releases.initial.summary': 'Primera release pública con instaladores sin firmar para probar Project Hub localmente.',
    'download.eyebrow': 'EMPIEZA YA',
    'download.title': 'Descarga Project Hub',
    'download.sub': 'Gratuito, open-source y listo para usar.',
    'download.mac.desc': 'Apple Silicon e Intel',
    'download.mac.btn': 'Descargar .dmg',
    'download.win.desc': 'Windows 10+',
    'download.win.btn': 'Descargar .msi',
    'download.source': 'O <a href="https://github.com/AngoZero/project-hub">compilar desde el código fuente en GitHub</a>',
    'download.note': 'Builds sin firmar — se esperan avisos de macOS Gatekeeper y Windows SmartScreen.',
    'tech.label': 'Hecho con',
    'footer.copy': '© 2026 angozero. Todos los derechos reservados.',
  },
  en: {
    'meta.title': 'Project Hub — Local-First Developer Tool',
    'meta.description': 'Scan, organize, and launch every development project on your machine. Local data, zero cloud, brutally fast.',
    'meta.og.title': 'Project Hub — Local-First Developer Tool',
    'meta.og.description': 'Scan, organize, and launch every development project on your machine.',
    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.releases': 'Releases',
    'nav.download': 'Download',
    'toggle.lang': 'ES',
    'hero.eyebrow': 'LOCAL-FIRST DEVELOPER TOOL',
    'hero.title': 'Your projects.<br/>One command center.',
    'hero.sub': 'Scan, organize, and launch every project on your machine. Local data, zero cloud, brutally fast.',
    'hero.cta.mac': 'Download for macOS',
    'hero.cta.win': 'Download for Windows',
    'hero.pill': 'v0.1.5 — macOS & Windows',
    'hero.preview.alt': 'Project Hub catalog view showing projects organized by workspace with search and filters',
    'features.eyebrow': 'FEATURES',
    'features.title': 'Everything you need. Nothing you don\'t.',
    'feature.local.title': 'Local-First',
    'feature.local.desc': 'All data stays on your machine. No accounts, no cloud, no telemetry. Your projects, your rules.',
    'feature.scan.title': 'Smart Scanning',
    'feature.scan.desc': 'Auto-detects project structure, frameworks, and tech stacks in seconds. React, Node, Rust, Laravel, Docker and more.',
    'feature.workspace.title': 'Workspace Hierarchy',
    'feature.workspace.desc': 'Organize with Root, Workspace, Project, and SubProject levels. Tabs per workspace, automatic grouping.',
    'feature.actions.title': 'Quick Actions',
    'feature.actions.desc': 'Launch Terminal, VS Code, Claude, or Codex directly from any project\'s context. One click, right directory.',
    'feature.catalog.title': 'Catalog & Filters',
    'feature.catalog.desc': 'Search, filter by client, type, stack, or status. Switch between grid and list views. Favorites always on top.',
    'feature.ai.title': 'AI Integration',
    'feature.ai.desc': 'Claude and Codex prompts scoped to each project\'s context. AI-assisted development, built in.',
    'feature.cross.title': 'Cross-Platform',
    'feature.cross.desc': 'Native performance on macOS and Windows via Tauri 2. Lightweight, fast startup, small footprint.',
    'feature.themes.title': 'Dark & Light Themes',
    'feature.themes.desc': 'Two carefully crafted themes with system-aware switching. Neo-brutalist either way.',
    'feature.i18n.title': 'Bilingual',
    'feature.i18n.desc': 'Full English and Spanish interface built in. System language detection with manual override.',
    'feature.onboarding.title': 'Guided Onboarding',
    'feature.onboarding.desc': 'First-run wizard picks your root folder, scans the structure, and auto-classifies workspaces vs. projects before the first scan.',
    'screenshots.eyebrow': 'IN ACTION',
    'screenshots.title': 'See it for yourself.',
    'screenshot.catalog': 'Project Catalog',
    'screenshot.catalog.alt': 'Project catalog with grid view, workspace tabs, search, and technology stack filters',
    'screenshot.detail': 'Project Details',
    'screenshot.detail.alt': 'Project detail panel showing metadata, tech stack pills, quick actions, and AI prompts',
    'screenshot.roots': 'Root Folders',
    'screenshot.roots.alt': 'Root folders configuration view with scan depth and directory management',
    'screenshot.settings': 'Settings',
    'screenshot.settings.alt': 'Settings panel with theme toggle, language selector, layout preferences and scan depth',
    'screenshot.onboarding': 'Onboarding',
    'screenshot.onboarding.alt': 'First-run onboarding wizard with root folder selection and structure review',
    'releases.eyebrow': 'RELEASES',
    'releases.title': 'What changed recently.',
    'releases.sub': 'A short history of public builds so you know exactly what you are downloading.',
    'releases.latest.badge': 'Latest',
    'releases.latest.date': 'Apr 12, 2026',
    'releases.latest.summary': 'Corrected release with consistent downloads for macOS and Windows, real app versioning, and an adjusted publishing pipeline.',
    'releases.latest.item1': 'Updated installers for macOS Apple Silicon and Windows.',
    'releases.latest.item2': 'Release pipeline aligned with the published tag.',
    'releases.latest.item3': 'Stable download links from GitHub Releases.',
    'releases.cta': 'View all on GitHub',
    'releases.initial.date': 'Apr 9, 2026',
    'releases.initial.summary': 'First public release with unsigned installers for testing Project Hub locally.',
    'download.eyebrow': 'GET STARTED',
    'download.title': 'Download Project Hub',
    'download.sub': 'Free, open-source, and ready to run.',
    'download.mac.desc': 'Apple Silicon & Intel',
    'download.mac.btn': 'Download .dmg',
    'download.win.desc': 'Windows 10+',
    'download.win.btn': 'Download .msi',
    'download.source': 'Or <a href="https://github.com/AngoZero/project-hub">build from source on GitHub</a>',
    'download.note': 'Unsigned builds — macOS Gatekeeper and Windows SmartScreen warnings are expected.',
    'tech.label': 'Built with',
    'footer.copy': '© 2026 angozero. All rights reserved.',
  },
};

export function getInitialLang(): Lang {
  const stored = localStorage.getItem('lang') as Lang | null;
  if (stored === 'es' || stored === 'en') return stored;
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function applyLanguage(lang: Lang): void {
  const dict = translations[lang];
  document.documentElement.lang = lang;

  for (const el of document.querySelectorAll<HTMLElement>('[data-i18n]')) {
    const key = el.dataset.i18n!;
    if (dict[key]) el.textContent = dict[key];
  }

  for (const el of document.querySelectorAll<HTMLElement>('[data-i18n-html]')) {
    const key = el.dataset.i18nHtml!;
    if (dict[key]) el.innerHTML = dict[key];
  }

  for (const el of document.querySelectorAll<HTMLElement>('[data-i18n-alt]')) {
    const key = el.dataset.i18nAlt!;
    if (dict[key]) el.setAttribute('alt', dict[key]);
  }

  for (const el of document.querySelectorAll<HTMLElement>('[data-i18n-content]')) {
    const key = el.dataset.i18nContent!;
    if (!dict[key]) continue;
    if (el.tagName === 'TITLE') {
      el.textContent = dict[key];
    } else {
      el.setAttribute('content', dict[key]);
    }
  }

  localStorage.setItem('lang', lang);
}
