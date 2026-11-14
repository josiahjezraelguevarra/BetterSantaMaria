'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const [version, setVersion] = useState('');

  useEffect(() => {
    fetch('/version.json')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.version) setVersion(data.version);
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="bg-[#0b1526] text-white pt-10 pb-8 mt-auto border-t border-white/5" role="contentinfo">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <img
              src="/assets/images/logo/better-santamaria-logo-white.svg"
              alt="BetterSantaMaria.org logo"
              className="h-14 w-auto self-start object-contain"
            />
            <p className="text-sm text-gray-300 leading-relaxed m-0">{t('footer-tagline')}</p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://github.com/josiahjezraelguevarra/BetterSantaMaria"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{t('footer-quick-links')}</h4>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-sm">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">{t('footer-about')}</a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">{t('nav-services')}</a>
              </li>
              <li>
                <a href="/government" className="text-gray-300 hover:text-white transition-colors">{t('nav-government')}</a>
              </li>
              <li>
                <a href="/statistics" className="text-gray-300 hover:text-white transition-colors">{t('nav-statistics')}</a>
              </li>
              <li>
                <a href="/budget" className="text-gray-300 hover:text-white transition-colors">{t('nav-transparency')}</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-white transition-colors">{t('footer-terms')}</a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">{t('footer-privacy')}</a>
              </li>
              <li>
                <a href="/accessibility" className="text-gray-300 hover:text-white transition-colors">{t('footer-accessibility')}</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{t('footer-resources')}</h4>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-sm">
              <li>
                <a href="https://data.gov.ph" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer-open-data')}
                </a>
              </li>
              <li>
                <a href="https://www.foi.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer-foi')}
                </a>
              </li>
              <li>
                <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer-blgf')}
                </a>
              </li>
              <li>
                <a href="https://cmci.dti.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer-cmci')}
                </a>
              </li>
            </ul>
          </div>

          {/* Transparency & Community */}
          <div className="flex flex-col items-start">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-3"
              role="status"
              aria-label="Cost to the People of Santa Maria: Zero Pesos"
            >
              <span>{t('footer-cost')}</span>
              <span className="font-bold text-white">₱0</span>
            </div>
            <a
              href="https://github.com/josiahjezraelguevarra/BetterSantaMaria"
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i> {t('footer-contribute')}
            </a>
            <div className="pt-2">
              <span className="block text-xs text-gray-400 mb-2">Supported by</span>
              <a
                href="https://bettergov.ph"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BetterGov.ph"
                className="opacity-80 hover:opacity-100 transition-opacity inline-block"
              >
                <img
                  src="/assets/images/logo/bettergov-footer.svg"
                  alt="BetterGov.ph"
                  className="h-7 w-auto object-contain"
                  width="120"
                  height="28"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
            <span>&copy; {currentYear} {t('footer-copyright-text')}</span>
            <span className="text-white/30">•</span>
            <span className="font-mono text-gray-300">MIT | CC BY 4.0</span>
            <span className="text-white/30">•</span>
            <span>{t('footer-copyright-disclaimer')}</span>
          </div>
          {version && (
            <div className="inline-flex items-center gap-1.5 font-mono text-gray-400">
              <i className="bi bi-boxes"></i>
              <span>Ver. {version}</span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
