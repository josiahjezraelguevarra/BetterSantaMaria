'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ActionBar() {
  const { language, setLanguage, t } = useLanguage();
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

  // Close volunteer modal on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVolunteerOpen) {
        setIsVolunteerOpen(false);
      }
    },
    [isVolunteerOpen]
  );

  useEffect(() => {
    if (isVolunteerOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isVolunteerOpen, handleKeyDown]);

  return (
    <>
      <section
        className="w-full bg-white text-site-text text-xs select-none border-b border-gray-200 py-1.5"
        role="region"
        aria-label="Civic Action Bar"
      >
        <div className="container-site">
          <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-5">
            {/* About Page Link (Navigates directly to /about) */}
            <Link
              href="/about"
              className="text-slate-700 hover:text-primary text-xs font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-[#f77f00] rounded px-1.5 py-0.5 inline-flex items-center gap-1"
              title="About BetterSantaMaria.org"
            >
              <i className="bi bi-info-circle-fill text-xs" aria-hidden="true" />
              <span>{t('actionbar-about') || 'About'}</span>
            </Link>

            {/* Help build this site / Join Us */}
            <button
              type="button"
              onClick={() => setIsVolunteerOpen(true)}
              className="text-slate-700 hover:text-primary text-xs font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-[#f77f00] rounded px-1.5 py-0.5 inline-flex items-center gap-1 cursor-pointer"
              aria-haspopup="dialog"
              aria-expanded={isVolunteerOpen}
            >
              <span>{t('actionbar-join') || '🚀 Join Us'}</span>
            </button>

            {/* Official city website */}
            <a
              href="https://santamariabulacan.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-primary text-xs font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-[#f77f00] rounded px-1.5 py-0.5 inline-flex items-center gap-1"
              title="Official Government Website of Santa Maria, Bulacan"
            >
              <span>{t('actionbar-city-site') || 'Official City website'}</span>
              <i className="bi bi-box-arrow-up-right text-[10px] opacity-75" aria-hidden="true" />
            </a>

            {/* Language Toggle: English / Filipino */}
            <div
              className="inline-flex items-center rounded-full bg-slate-100 p-0.5 border border-slate-200"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-[#f77f00] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-pressed={language === 'en'}
                aria-label="Switch language to English"
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('fil')}
                className={`px-3 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  language === 'fil'
                    ? 'bg-[#f77f00] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-pressed={language === 'fil'}
                aria-label="Switch language to Filipino / Tagalog"
              >
                Filipino
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer / Join Us Modal */}
      {isVolunteerOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="volunteer-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsVolunteerOpen(false);
          }}
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative text-site-text border border-gray-100 animate-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setIsVolunteerOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close dialog"
            >
              <i className="bi bi-x-lg text-lg" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                <i className="bi bi-heart-fill text-[#f77f00] text-xs" />
                Community & Open Source
              </span>
            </div>

            <h2 id="volunteer-modal-title" className="text-xl sm:text-2xl font-bold text-site-text mb-2">
              Help build BetterSantaMaria.org
            </h2>
            <p className="text-sm text-site-text-muted mb-5 leading-relaxed">
              BetterSantaMaria.org is a volunteer-led, open-source civic initiative. We are building a modern, transparent digital gateway to municipal services and public information for every resident of Santa Maria, Bulacan.
            </p>

            <div className="space-y-3 mb-6">
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <i className="bi bi-code-slash text-base" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-site-text">Software Developers</h3>
                  <p className="text-xs text-site-text-muted">Next.js 15, React, TypeScript, Tailwind CSS, accessibility, and offline PWA.</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="bi bi-palette text-base" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-site-text">UI/UX & Graphic Designers</h3>
                  <p className="text-xs text-site-text-muted">Accessible interfaces, municipal identity, icons, and visual guides.</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="bi bi-file-earmark-text text-base" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-site-text">Content & Civic Researchers</h3>
                  <p className="text-xs text-site-text-muted">Verifying citizen charter requirements, municipal ordinances, and local data.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="mailto:volunteer@bettersantamaria.org?subject=Volunteer%20for%20BetterSantaMaria.org"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors shadow-sm"
              >
                <i className="bi bi-envelope-heart-fill" />
                <span>Join as a Volunteer</span>
              </a>
              <button
                type="button"
                onClick={() => setIsVolunteerOpen(false)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-sm font-medium text-site-text-muted hover:text-site-text hover:bg-gray-100 transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Re-export as HotlineBar for backwards compatibility
export { ActionBar as HotlineBar };
