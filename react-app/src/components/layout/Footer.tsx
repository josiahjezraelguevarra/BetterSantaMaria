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
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main-new">
          <div className="footer-brand">
            <img
              src="/assets/images/logo/better-santamaria-logo-white.svg"
              alt="BetterSantaMaria.org logo"
              className="footer-logo"
            />
            <p className="footer-tagline">{t('footer-tagline')}</p>
            <div className="footer-social-new">
              <a
                href="https://github.com/josiahjezraelguevarra/BetterSantaMaria"
                className="footer-social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>{t('footer-quick-links')}</h4>
            <ul className="footer-links-new">
              <li>
                <a href="/services">{t('nav-services')}</a>
              </li>
              <li>
                <a href="/government">{t('nav-government')}</a>
              </li>
              <li>
                <a href="/statistics">{t('nav-statistics')}</a>
              </li>
              <li>
                <a href="/budget">{t('nav-transparency')}</a>
              </li>
              <li>
                <a href="/terms">{t('footer-terms')}</a>
              </li>
              <li>
                <a href="/privacy">{t('footer-privacy')}</a>
              </li>
              <li>
                <a href="/accessibility">{t('footer-accessibility')}</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>{t('footer-resources')}</h4>
            <ul className="footer-links-new">
              <li>
                <a href="https://data.gov.ph" target="_blank" rel="noopener noreferrer">
                  {t('footer-open-data')}
                </a>
              </li>
              <li>
                <a href="https://www.foi.gov.ph/" target="_blank" rel="noopener noreferrer">
                  {t('footer-foi')}
                </a>
              </li>
              <li>
                <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer">
                  {t('footer-blgf')}
                </a>
              </li>
              <li>
                <a href="https://cmci.dti.gov.ph/" target="_blank" rel="noopener noreferrer">
                  {t('footer-cmci')}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <div
              className="footer-cost"
              role="status"
              aria-label="Cost to the People of Santa Maria: Zero Pesos"
            >
              {t('footer-cost')} <span className="footer-cost-value">₱0</span>
            </div>
            <a
              href="https://github.com/josiahjezraelguevarra/BetterSantaMaria"
              className="footer-contribute"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i> {t('footer-contribute')}
            </a>
            <div className="footer-partners">
              <a
                href="https://abakada.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abakada.org"
              >
                <img
                  src="/assets/images/logo/abakada-footer.svg"
                  alt="Abakada.org"
                  className="footer-partner-logo"
                  width="120"
                  height="28"
                  loading="lazy"
                />
              </a>
              <a
                href="https://hivcareph.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HIV Care Philippines"
              >
                <img
                  src="/assets/images/logo/hiv-care-logo-footer.svg"
                  alt="HIV Care Philippines"
                  className="footer-partner-logo"
                  width="120"
                  height="28"
                  loading="lazy"
                />
              </a>
              <a
                href="https://bettergov.ph"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BetterGov.ph"
              >
                <img
                  src="/assets/images/logo/bettergov-footer.svg"
                  alt="BetterGov.ph"
                  className="footer-partner-logo"
                  width="120"
                  height="28"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-new">
          <div className="footer-copyright">
            <span className="footer-copyright-text">
              &copy; {currentYear} {t('footer-copyright-text')}
            </span>
            <span className="footer-copyright-license">MIT | CC BY 4.0</span>
            <span className="footer-copyright-disclaimer">{t('footer-copyright-disclaimer')}</span>
            <span className="footer-version">
              <i className="bi bi-boxes"></i> {version ? `Ver. ${version}` : ''}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
