'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SurveyPage() {
  const { language } = useLanguage();
  const isFil = language === 'fil';

  return (
    <div className="bg-slate-50 min-h-screen text-site-text pb-16">
      {/* Breadcrumb Header */}
      <section className="bg-white border-b border-gray-200 py-3">
        <div className="container-site">
          <nav className="flex items-center gap-2 text-xs text-site-text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              {isFil ? 'Tahanan' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-site-text font-medium" aria-current="page">
              {isFil ? 'Sarbey ng Mamamayan' : 'Citizen Survey'}
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <header className="bg-gradient-to-b from-blue-50/60 to-slate-50 border-b border-gray-200 py-12 lg:py-16">
        <div className="container-site max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 border border-amber-500/20 mb-4">
            <i className="bi bi-hourglass-split" />
            <span>{isFil ? 'Paparating Na' : 'Module In Development'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-site-text tracking-tight mb-4">
            {isFil ? 'Sarbey at Puna ng Mamamayan' : 'Citizen Feedback & Survey'}
          </h1>

          <p className="text-base sm:text-lg text-site-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            {isFil
              ? 'Mahalaga ang iyong boses sa pagpapabuti ng Santa Maria. Kasalukuyan naming inihahanda ang opisyal na citizen satisfaction survey upang makalikom ng totoong datos at puna mula sa komunidad.'
              : 'Your voice shapes BetterSantaMaria. We are preparing our official citizen satisfaction survey to collect transparent, community-driven feedback on municipal services in Santa Maria, Bulacan.'}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-semibold text-xs border border-primary/20">
            <i className="bi bi-shield-check text-base text-accent" />
            <span>{isFil ? '100% Bukas at Ligtas para sa Mamamayan' : '100% Open, Anonymous & Civic Powered'}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-site max-w-3xl pt-10 space-y-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xs">
          <h2 className="text-xl font-bold text-site-text mb-4">
            {isFil ? 'Mga Saklaw ng Paparating na Sarbey' : 'Upcoming Survey Topics'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-2">
                <i className="bi bi-file-earmark-check" />
              </div>
              <h3 className="text-sm font-bold text-site-text mb-1">
                {isFil ? 'Bilis ng Serbisyo' : 'Service Efficiency'}
              </h3>
              <p className="text-xs text-site-text-muted">
                {isFil
                  ? 'Karanasan sa pagkuha ng birth certificate, business permit, at tax payments.'
                  : 'Experience securing civil certificates, business permits, and treasury payments.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                <i className="bi bi-eye" />
              </div>
              <h3 className="text-sm font-bold text-site-text mb-1">
                {isFil ? 'Transparensiya' : 'Transparency'}
              </h3>
              <p className="text-xs text-site-text-muted">
                {isFil
                  ? 'Access sa pampublikong badyet, mga ordinansa, at mga proyektong pang-imprastraktura.'
                  : 'Public access to LGU budgets, municipal ordinances, and local projects.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2">
                <i className="bi bi-chat-heart" />
              </div>
              <h3 className="text-sm font-bold text-site-text mb-1">
                {isFil ? 'Pangangailangan ng Barangay' : 'Barangay Needs'}
              </h3>
              <p className="text-xs text-site-text-muted">
                {isFil
                  ? 'Mga mungkahi para sa kalinisan, kalsada, kalusugan, at kabuhayan sa 24 barangay.'
                  : 'Suggestions for public health, sanitation, road safety, and livelihood in 24 barangays.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold text-primary mb-0.5">
                {isFil ? 'May paunang puna o mungkahi ka na ngayon?' : 'Have feedback or suggestions right now?'}
              </h4>
              <p className="text-xs text-site-text-muted">
                {isFil
                  ? 'Maaari kang mag-email nang direkta sa volunteer civic tech team.'
                  : 'Send thoughts directly to our volunteer civic team anytime.'}
              </p>
            </div>
            <a
              href="mailto:feedback@bettersantamaria.org?subject=Civic%20Feedback%20for%20BetterSantaMaria"
              className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-xs transition-colors shrink-0 shadow-2xs"
            >
              {isFil ? 'Mag-email ng Puna' : 'Submit Feedback'}
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <i className="bi bi-arrow-left" />
            <span>{isFil ? 'Bumalik sa Tahanan' : 'Return to Home'}</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
