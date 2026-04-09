import { getInitialLang, applyLanguage } from './i18n';
import { getInitialTheme, applyTheme } from './theme';
function updateScreenshots(theme, lang) {
    const nextAttr = `shot${theme === 'dark' ? 'Dark' : 'Light'}${lang === 'en' ? 'En' : 'Es'}`;
    for (const image of document.querySelectorAll('[data-shot-dark-en][data-shot-dark-es][data-shot-light-en][data-shot-light-es]')) {
        const nextSrc = image.dataset[nextAttr];
        if (nextSrc && image.getAttribute('src') !== nextSrc) {
            image.setAttribute('src', nextSrc);
        }
    }
}
// ── Scroll reveal with stagger ────────────────────────
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const staggerDelays = new Map();
    const grids = document.querySelectorAll('.features__hero, .features__core, .features__extras, .screenshots__grid, .download__grid');
    for (const grid of grids) {
        const children = grid.querySelectorAll('.reveal');
        children.forEach((child, i) => staggerDelays.set(child, i * 80));
    }
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const delay = staggerDelays.get(entry.target) ?? 0;
                if (delay > 0) {
                    setTimeout(() => entry.target.classList.add('reveal--visible'), delay);
                }
                else {
                    entry.target.classList.add('reveal--visible');
                }
                observer.unobserve(entry.target);
            }
        }
    }, { threshold: 0.1 });
    for (const el of reveals) {
        observer.observe(el);
    }
}
else {
    for (const el of reveals) {
        el.classList.add('reveal--visible');
    }
}
// ── Mobile nav toggle ─────────────────────────────────
const burger = document.querySelector('.site-header__burger');
const header = document.querySelector('.site-header');
if (burger && header) {
    burger.addEventListener('click', () => {
        header.classList.toggle('site-header--open');
    });
    const navLinks = header.querySelectorAll('.site-header__nav a');
    for (const link of navLinks) {
        link.addEventListener('click', () => {
            header.classList.remove('site-header--open');
        });
    }
}
// ── i18n ──────────────────────────────────────────────
let currentLang = getInitialLang();
applyLanguage(currentLang);
document.getElementById('lang-toggle')?.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyLanguage(currentLang);
    updateScreenshots(currentTheme, currentLang);
});
// ── Theme ─────────────────────────────────────────────
let currentTheme = getInitialTheme();
applyTheme(currentTheme);
updateScreenshots(currentTheme, currentLang);
document.getElementById('theme-toggle')?.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    updateScreenshots(currentTheme, currentLang);
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        currentTheme = e.matches ? 'dark' : 'light';
        applyTheme(currentTheme);
        updateScreenshots(currentTheme, currentLang);
    }
});
