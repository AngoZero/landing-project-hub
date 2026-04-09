import { getInitialLang, applyLanguage, type Lang } from './i18n';
import { getInitialTheme, applyTheme, type Theme } from './theme';

// ── Scroll reveal with stagger ────────────────────────
const reveals = document.querySelectorAll<HTMLElement>('.reveal');

if ('IntersectionObserver' in window) {
  const staggerDelays = new Map<Element, number>();
  const grids = document.querySelectorAll('.features__grid, .screenshots__grid, .download__grid');

  for (const grid of grids) {
    const children = grid.querySelectorAll('.reveal');
    children.forEach((child, i) => staggerDelays.set(child, i * 80));
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const delay = staggerDelays.get(entry.target) ?? 0;
          if (delay > 0) {
            setTimeout(() => entry.target.classList.add('reveal--visible'), delay);
          } else {
            entry.target.classList.add('reveal--visible');
          }
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1 },
  );

  for (const el of reveals) {
    observer.observe(el);
  }
} else {
  for (const el of reveals) {
    el.classList.add('reveal--visible');
  }
}

// ── Mobile nav toggle ─────────────────────────────────
const burger = document.querySelector<HTMLButtonElement>('.site-header__burger');
const header = document.querySelector<HTMLElement>('.site-header');

if (burger && header) {
  burger.addEventListener('click', () => {
    header.classList.toggle('site-header--open');
  });

  const navLinks = header.querySelectorAll<HTMLAnchorElement>('.site-header__nav a');
  for (const link of navLinks) {
    link.addEventListener('click', () => {
      header.classList.remove('site-header--open');
    });
  }
}

// ── i18n ──────────────────────────────────────────────
let currentLang: Lang = getInitialLang();
applyLanguage(currentLang);

document.getElementById('lang-toggle')?.addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  applyLanguage(currentLang);
});

// ── Theme ─────────────────────────────────────────────
let currentTheme: Theme = getInitialTheme();
applyTheme(currentTheme);

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    currentTheme = e.matches ? 'dark' : 'light';
    applyTheme(currentTheme);
  }
});
