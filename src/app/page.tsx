'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import SearchAutocomplete from '@/components/SearchAutocomplete';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="home-hero-v2">
        <div className="container-site">
          <div className="home-hero-v2-inner">
            <div className="home-hero-v2-text">
              <h1>{t('hero-welcome')}</h1>
              <p>{t('hero-subtitle')}</p>
              <div className="home-hero-v2-actions">
                <Link href="/services" className="btn btn-primary">
                  {t('hero-browse-services')} <i className="bi bi-arrow-right"></i>
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  {t('hero-contact-us')}
                </Link>
              </div>
            </div>
            <div className="home-hero-v2-search">
              <div className="home-search-box">
                <h2>
                  <i className="bi bi-search"></i> {t('hero-find-service')}
                </h2>
                <form className="search-form" role="search" onSubmit={(e) => e.preventDefault()}>
                  <div className="search-input-wrapper">
                    <SearchAutocomplete placeholder={t('hero-search-placeholder')} />
                    <button type="submit" className="search-submit-btn" aria-label="Search">
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </form>
                <div className="home-search-tags">
                  <span>{t('hero-popular')}</span>
                  <Link href="/service-details/birth-certificate">
                    {t('hero-birth-certificate')}
                  </Link>
                  <Link href="/service-details/business-permits-licensing">
                    {t('hero-business-permit')}
                  </Link>
                  <Link href="/service-details/municipal-treasurer">
                    {t('hero-real-property-tax')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-8 sm:py-10 bg-white" aria-labelledby="popular-services-heading">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-primary uppercase mb-1">
                <i className="bi bi-stars"></i> Direct Civic Access
              </span>
              <h2 id="popular-services-heading" className="text-2xl sm:text-3xl font-bold text-site-text">
                {t('section-popular')}
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              <span>{t('btn-view-all-services')}</span>
              <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Certificates */}
            <Link
              href="/services/certificates"
              className="group p-5 rounded-2xl border border-gray-200/80 hover:border-primary/40 bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-3.5 group-hover:scale-105 transition-transform">
                  <i className="bi bi-file-earmark-text-fill"></i>
                </div>
                <h3 className="text-base font-semibold text-site-text group-hover:text-primary transition-colors">
                  {t('service-certificates')}
                </h3>
                <p className="text-xs sm:text-sm text-site-text-muted mt-1 leading-relaxed">
                  {t('service-certificates-desc')}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100 text-xs font-medium text-site-text-muted group-hover:text-primary transition-colors">
                <span>Civil Registry & PSA</span>
                <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
              </div>
            </Link>

            {/* Business Permits */}
            <Link
              href="/services/business"
              className="group p-5 rounded-2xl border border-gray-200/80 hover:border-primary/40 bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl mb-3.5 group-hover:scale-105 transition-transform">
                  <i className="bi bi-shop"></i>
                </div>
                <h3 className="text-base font-semibold text-site-text group-hover:text-primary transition-colors">
                  {t('service-business')}
                </h3>
                <p className="text-xs sm:text-sm text-site-text-muted mt-1 leading-relaxed">
                  {t('service-business-desc')}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100 text-xs font-medium text-site-text-muted group-hover:text-primary transition-colors">
                <span>BPLO Licensing</span>
                <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
              </div>
            </Link>

            {/* Tax Payments */}
            <Link
              href="/services/tax-payments"
              className="group p-5 rounded-2xl border border-gray-200/80 hover:border-primary/40 bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-3.5 group-hover:scale-105 transition-transform">
                  <i className="bi bi-cash-coin"></i>
                </div>
                <h3 className="text-base font-semibold text-site-text group-hover:text-primary transition-colors">
                  {t('service-tax')}
                </h3>
                <p className="text-xs sm:text-sm text-site-text-muted mt-1 leading-relaxed">
                  {t('service-tax-desc')}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100 text-xs font-medium text-site-text-muted group-hover:text-primary transition-colors">
                <span>Treasury Assessment</span>
                <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
              </div>
            </Link>

            {/* Social Services */}
            <Link
              href="/services/social-services"
              className="group p-5 rounded-2xl border border-gray-200/80 hover:border-primary/40 bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-3.5 group-hover:scale-105 transition-transform">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h3 className="text-base font-semibold text-site-text group-hover:text-primary transition-colors">
                  {t('service-social')}
                </h3>
                <p className="text-xs sm:text-sm text-site-text-muted mt-1 leading-relaxed">
                  {t('service-social-desc')}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100 text-xs font-medium text-site-text-muted group-hover:text-primary transition-colors">
                <span>MSWDO Assistance</span>
                <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
              </div>
            </Link>

            {/* Health Services */}
            <Link
              href="/services/health"
              className="group p-5 rounded-2xl border border-gray-200/80 hover:border-primary/40 bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl mb-3.5 group-hover:scale-105 transition-transform">
                  <i className="bi bi-heart-pulse-fill"></i>
                </div>
                <h3 className="text-base font-semibold text-site-text group-hover:text-primary transition-colors">
                  {t('service-health')}
                </h3>
                <p className="text-xs sm:text-sm text-site-text-muted mt-1 leading-relaxed">
                  {t('service-health-desc')}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100 text-xs font-medium text-site-text-muted group-hover:text-primary transition-colors">
                <span>Rural Health Units</span>
                <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
              </div>
            </Link>

            {/* View All Directory Card */}
            <Link
              href="/services"
              className="group p-5 rounded-2xl border border-dashed border-primary/30 hover:border-primary bg-primary/[0.03] hover:bg-primary/[0.06] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-3.5 group-hover:scale-105 transition-transform">
                  <i className="bi bi-grid-fill"></i>
                </div>
                <h3 className="text-base font-semibold text-primary">
                  {t('btn-view-all-services')}
                </h3>
                <p className="text-xs sm:text-sm text-site-text-muted mt-1 leading-relaxed">
                  {t('popular-browse-directory')}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-primary/10 text-xs font-semibold text-primary">
                <span>10 Municipal Sectors</span>
                <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Santa Maria at a Glance (Key Statistics) */}
      <section className="py-8 sm:py-10 bg-bg-alt border-y border-gray-200/60" aria-labelledby="stats-heading">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-primary uppercase mb-1">
                <i className="bi bi-bar-chart-fill"></i> Municipal Data
              </span>
              <h2 id="stats-heading" className="text-2xl sm:text-3xl font-bold text-site-text">
                {t('stats-at-a-glance')}
              </h2>
            </div>
            <Link
              href="/statistics"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              <span>{t('stats-view-statistics')}</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <Link
              href="/statistics"
              className="p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-primary/40 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center text-lg mb-3">
                <i className="bi bi-people-fill"></i>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-site-text tracking-tight">289,820</span>
                <span className="block text-sm font-semibold text-site-text mt-0.5">{t('stats-population-label')}</span>
                <span className="block text-xs text-site-text-muted mt-1">{t('stats-population-source')}</span>
              </div>
            </Link>

            <Link
              href="/government"
              className="p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-primary/40 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg mb-3">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-site-text tracking-tight">24</span>
                <span className="block text-sm font-semibold text-site-text mt-0.5">{t('stats-barangays-label')}</span>
                <span className="block text-xs text-site-text-muted mt-1">{t('stats-barangays-source')}</span>
              </div>
            </Link>

            <Link
              href="/budget"
              className="p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-primary/40 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg mb-3">
                <i className="bi bi-award-fill"></i>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-site-text tracking-tight">1st Class</span>
                <span className="block text-sm font-semibold text-site-text mt-0.5">{t('stats-municipality-label')}</span>
                <span className="block text-xs text-site-text-muted mt-1">{t('stats-municipality-source')}</span>
              </div>
            </Link>

            <Link
              href="/statistics"
              className="p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-primary/40 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg mb-3">
                <i className="bi bi-rulers"></i>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-site-text tracking-tight">90.92 km²</span>
                <span className="block text-sm font-semibold text-site-text mt-0.5">{t('stats-land-area-label')}</span>
                <span className="block text-xs text-site-text-muted mt-1">{t('stats-land-area-source')}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Civic Updates */}
      <section className="py-8 sm:py-10 bg-white" aria-labelledby="updates-heading">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-primary uppercase mb-1">
                <i className="bi bi-newspaper"></i> Civic Feed
              </span>
              <h2 id="updates-heading" className="text-2xl sm:text-3xl font-bold text-site-text">
                {t('section-updates')}
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              <span>{t('btn-view-all')}</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <article className="p-5 rounded-2xl border border-gray-200/80 bg-white hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                    {t('news-announcement')}
                  </span>
                  <span className="text-xs text-site-text-muted">Nov 28, 2025</span>
                </div>
                <h3 className="text-base font-semibold text-site-text leading-snug hover:text-primary transition-colors">
                  <Link href="/news">{t('news-business-permit-title')}</Link>
                </h3>
                <p className="text-xs sm:text-sm text-site-text-muted mt-2 leading-relaxed">
                  {t('news-business-permit-desc')}
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-gray-100">
                <Link href="/news" className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:underline">
                  <span>Read advisory</span>
                  <i className="bi bi-chevron-right text-[10px]"></i>
                </Link>
              </div>
            </article>

            <article className="p-5 rounded-2xl border border-gray-200/80 bg-white hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                    {t('news-project')}
                  </span>
                  <span className="text-xs text-site-text-muted">Nov 15, 2025</span>
                </div>
                <h3 className="text-base font-semibold text-site-text leading-snug hover:text-primary transition-colors">
                  <Link href="/news">{t('news-market-title')}</Link>
                </h3>
                <p className="text-xs sm:text-sm text-site-text-muted mt-2 leading-relaxed">
                  {t('news-market-desc')}
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-gray-100">
                <Link href="/news" className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:underline">
                  <span>Read update</span>
                  <i className="bi bi-chevron-right text-[10px]"></i>
                </Link>
              </div>
            </article>

            <article className="p-5 rounded-2xl border border-gray-200/80 bg-white hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700">
                    {t('news-advisory')}
                  </span>
                  <span className="text-xs text-site-text-muted">Nov 10, 2025</span>
                </div>
                <h3 className="text-base font-semibold text-site-text leading-snug hover:text-primary transition-colors">
                  <Link href="/news">{t('news-power-title')}</Link>
                </h3>
                <p className="text-xs sm:text-sm text-site-text-muted mt-2 leading-relaxed">
                  {t('news-power-desc')}
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-gray-100">
                <Link href="/news" className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:underline">
                  <span>Read advisory</span>
                  <i className="bi bi-chevron-right text-[10px]"></i>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Municipal Leadership */}
      <section className="py-8 sm:py-10 bg-bg-alt border-y border-gray-200/60" aria-labelledby="leadership-heading">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-primary uppercase mb-1">
                <i className="bi bi-person-badge"></i> Public Servants
              </span>
              <h2 id="leadership-heading" className="text-2xl sm:text-3xl font-bold text-site-text">
                {t('section-leadership')}
              </h2>
            </div>
            <Link
              href="/government"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              <span>{t('btn-view-officials')}</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Mayor Card */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
                  {t('title-mayor')}
                </span>
                <h3 className="text-xl font-bold text-site-text">Hon. Philip A. Dacayo</h3>
                <p className="text-xs text-site-text-muted mt-0.5">Municipal Mayor • Term: 2025–2028</p>
                <p className="text-sm text-site-text-light mt-3 leading-relaxed">
                  Executive governance, municipal programs, community development, and public administration of Santa Maria, Bulacan.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 pt-4 mt-4 border-t border-gray-100">
                <a
                  href="mailto:mayor@santamariabulacan.gov.ph"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-primary hover:text-white transition-colors text-site-text"
                >
                  <i className="bi bi-envelope"></i>
                  <span>mayor@santamariabulacan.gov.ph</span>
                </a>
                <a
                  href="tel:0783265002"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-primary hover:text-white transition-colors text-site-text"
                >
                  <i className="bi bi-telephone"></i>
                  <span>(078) 326-5002</span>
                </a>
              </div>
            </div>

            {/* Vice Mayor Card */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
                  {t('title-vice-mayor')}
                </span>
                <h3 className="text-xl font-bold text-site-text">Hon. Eduardo D. Tiongson</h3>
                <p className="text-xs text-site-text-muted mt-0.5">Vice Mayor & Sangguniang Bayan Presiding Officer</p>
                <p className="text-sm text-site-text-light mt-3 leading-relaxed">
                  Municipal legislation, ordinance enactment, resolutions, and legislative oversight of municipal services.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 pt-4 mt-4 border-t border-gray-100">
                <a
                  href="mailto:vicemayor@santamariabulacan.gov.ph"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-primary hover:text-white transition-colors text-site-text"
                >
                  <i className="bi bi-envelope"></i>
                  <span>vicemayor@santamariabulacan.gov.ph</span>
                </a>
                <a
                  href="tel:0783265003"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-primary hover:text-white transition-colors text-site-text"
                >
                  <i className="bi bi-telephone"></i>
                  <span>(078) 326-5003</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citizen Assistance & Municipal Hall Location */}
      <section className="py-8 sm:py-10 bg-white" aria-labelledby="contact-heading">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-primary uppercase mb-1">
                <i className="bi bi-geo-alt"></i> Here to Help
              </span>
              <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-site-text">
                {t('section-contact')}
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              <span>{t('btn-view-all')}</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Contact Details Column */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-3">
              <a
                href="tel:0788053581"
                className="group p-4 sm:p-5 rounded-2xl border border-gray-200/80 bg-white hover:border-primary/40 hover:shadow-xs transition-all flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-site-text group-hover:text-primary transition-colors">
                    {t('contact-phone')}
                  </h3>
                  <p className="text-base font-semibold text-site-text mt-0.5">(078) 805-3581</p>
                  <span className="text-xs text-site-text-muted">{t('contact-hours')}</span>
                </div>
              </a>

              <a
                href="mailto:lgusantamariabulacan@gmail.com"
                className="group p-4 sm:p-5 rounded-2xl border border-gray-200/80 bg-white hover:border-primary/40 hover:shadow-xs transition-all flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-site-text group-hover:text-primary transition-colors">
                    {t('contact-email')}
                  </h3>
                  <p className="text-base font-semibold text-site-text mt-0.5">lgusantamariabulacan@gmail.com</p>
                  <span className="text-xs text-site-text-muted">{t('contact-response')}</span>
                </div>
              </a>

              <div className="p-4 sm:p-5 rounded-2xl border border-gray-200/80 bg-white flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl shrink-0">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-site-text">{t('contact-address')}</h3>
                  <p className="text-base font-semibold text-site-text mt-0.5">{t('contact-municipal-hall')}</p>
                  <span className="text-xs text-site-text-muted">J.P. Rizal St., Poblacion, Santa Maria, Bulacan 3022</span>
                </div>
              </div>
            </div>

            {/* Municipal Hall Map Column */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="rounded-2xl border border-gray-200/80 overflow-hidden bg-white shadow-xs flex-1 flex flex-col">
                <div className="relative flex-1 min-h-[200px]">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=120.9310%2C14.7997%2C120.9910%2C14.8397&layer=mapnik&marker=14.8197%2C120.9610"
                    className="w-full h-full min-h-[220px] border-0"
                    title="Map of Santa Maria, Bulacan Municipal Hall"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-3 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-site-text-muted flex items-center gap-1">
                    <i className="bi bi-pin-map text-primary"></i>
                    <span>Municipal Hall, Poblacion</span>
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Santa+Maria+Municipal+Hall+Bulacan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Get Directions</span>
                    <i className="bi bi-box-arrow-up-right text-[10px]"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
