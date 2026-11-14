'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
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
              {isFil ? 'Tungkol sa Amin' : 'About'}
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <header className="bg-gradient-to-b from-blue-50/60 to-slate-50 border-b border-gray-200 py-10 lg:py-14">
        <div className="container-site max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <i className="bi bi-patch-check-fill text-accent" />
            <span>{isFil ? 'Inisyatibong Civic Tech ng Komunidad' : 'Community-Powered Civic Tech Initiative'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-site-text tracking-tight mb-4">
            {isFil ? 'Tungkol sa BetterSantaMaria.org' : 'About BetterSantaMaria.org'}
          </h1>

          <p className="text-base sm:text-lg text-site-text-muted leading-relaxed max-w-2xl mx-auto mb-6">
            {isFil
              ? 'Isang volunteer-led, open-source na civic portal para sa Bayan ng Santa Maria, Bulacan — bahagi ng pambansang kilusan ng BetterGov.ph upang gawing mas mabilis, malinaw, at accessible ang serbisyo publiko para sa bawat mamamayan.'
              : 'A volunteer-led, open-source civic portal for the Municipality of Santa Maria, Bulacan — part of the nationwide BetterGov.ph movement making local government more transparent, efficient, and accessible to every citizen.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:volunteer@bettersantamaria.org?subject=Volunteer%20for%20BetterSantaMaria.org"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all shadow-sm"
            >
              <i className="bi bi-heart-fill text-accent" />
              <span>{isFil ? 'Sumali Bilang Volunteer' : 'Join as a Volunteer'}</span>
            </a>
            <a
              href="https://github.com/josiahjezraelguevarra/BetterSantaMaria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-site-text font-semibold text-sm transition-all border border-gray-300 shadow-2xs"
            >
              <i className="bi bi-github" />
              <span>{isFil ? 'Buksan sa GitHub' : 'View on GitHub'}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="container-site max-w-4xl pt-10 space-y-12">
        {/* Mission Statement */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <i className="bi bi-compass-fill text-xl" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                {isFil ? 'Ang Aming Misyon' : 'Our Mission'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-site-text">
                {isFil ? 'Pinasusulong ang Bawat Mamamayan' : 'Empowering Citizen Builders'}
              </h2>
            </div>
          </div>

          <blockquote className="border-l-4 border-accent pl-4 sm:pl-5 py-1 text-site-text text-base sm:text-lg italic leading-relaxed my-4">
            &ldquo;
            {isFil
              ? 'Ang BetterSantaMaria ay isang inisyatibong pinangungunahan ng mga boluntaryo na nakatuon sa paggawa ng mga proyektong civic tech upang gawing mas transparent, mabilis, at bukas ang lokal na pamahalaan para sa lahat. Ang aming layunin ay suportahan, itaguyod, at bigyang-kapangyarihan ang mga mamamayang tagabuo!'
              : 'BetterSantaMaria is a volunteer-led tech initiative committed to creating #civictech projects aimed at making government more transparent, efficient, and accessible to citizens. Our goal is to support, promote, consolidate, and empower citizen builders!'}
            &rdquo;
          </blockquote>

          <p className="text-sm text-site-text-muted leading-relaxed">
            {isFil
              ? 'Binuo ito bilang independiyenteng civic platform sa pakikipagtulungan ng BetterGov.ph ecosystem, upang magkaroon ang Santa Maria ng modernong digital public infrastructure nang walang anumang gastos sa kaban ng bayan.'
              : 'Built as an independent civic platform aligned with the nationwide BetterGov.ph ecosystem, giving Santa Maria modern digital public infrastructure at zero cost to taxpayers.'}
          </p>
        </section>

        {/* Our Goals */}
        <section>
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              {isFil ? 'Mga Layunin' : 'Core Objectives'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-site-text">
              {isFil ? 'Kabilang sa Aming mga Layunin' : 'Our Goals Include'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs hover:border-primary/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-3">
                <i className="bi bi-people-fill" />
              </div>
              <h3 className="text-sm font-bold text-site-text mb-1">
                {isFil ? 'Gawa ng Komunidad, Para sa Komunidad' : 'Community-Driven & Locally Rooted'}
              </h3>
              <p className="text-xs text-site-text-muted leading-relaxed">
                {isFil
                  ? 'Pagbuo ng portal na pinamamahalaan ng mga volunteer na sumasalamin sa kultura, kasaysayan, at pangangailangan ng Santa Maria, Bulacan.'
                  : 'Building a volunteer-run website that reflects Filipino civic values, local history, and the everyday needs of Santa Maria residents.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs hover:border-primary/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-accent flex items-center justify-center mb-3">
                <i className="bi bi-unlock-fill" />
              </div>
              <h3 className="text-sm font-bold text-site-text mb-1">
                {isFil ? 'Open Source at Open Data' : 'Open Source and Open Data'}
              </h3>
              <p className="text-xs text-site-text-muted leading-relaxed">
                {isFil
                  ? 'Lahat ng code at mga pampublikong datos ay bukas para sa kolaborasyon, pagsusuri, at kapakinabangan ng publiko.'
                  : 'Open Source and Open Data projects designed for transparency, collaboration, and collective civic audit.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs hover:border-primary/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <i className="bi bi-search" />
              </div>
              <h3 className="text-sm font-bold text-site-text mb-1">
                {isFil ? 'Mabilis at Direktang Paghahanap' : 'Intuitive Navigation & Search'}
              </h3>
              <p className="text-xs text-site-text-muted leading-relaxed">
                {isFil
                  ? 'Malinaw na direktoryo ng higit 21 mga serbisyo ng munisipyo na may step-by-step na mga gabay, bayarin, at kinakailangang dokumento.'
                  : 'Creating intuitive navigation and instant search functionality across 21+ municipal services and citizen charters.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs hover:border-primary/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <i className="bi bi-universal-access" />
              </div>
              <h3 className="text-sm font-bold text-site-text mb-1">
                {isFil ? 'Aksesibilidad Para sa Lahat' : 'Universal Accessibility (WCAG 2.1 AA)'}
              </h3>
              <p className="text-xs text-site-text-muted leading-relaxed">
                {isFil
                  ? 'Tinitiyak na ang bawat mamamayan, kabilang ang mga may kapansanan at senior citizens, ay madaling makakagamit sa anumang device.'
                  : 'Ensuring accessibility for all citizens, including persons with disabilities and seniors, across all screen sizes and connections.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs hover:border-primary/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <i className="bi bi-check2-circle" />
              </div>
              <h3 className="text-sm font-bold text-site-text mb-1">
                {isFil ? 'Tumpak at Napapanahong Impormasyon' : 'Accurate, Up-to-Date Information'}
              </h3>
              <p className="text-xs text-site-text-muted leading-relaxed">
                {isFil
                  ? 'Patuloy na sinusuri at ina-update ang mga kinakailangan para sa mga sertipiko, permits, buwis, at emergency hotlines.'
                  : 'Providing verified, current information about government services, procedures, offices, and official local contacts.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs hover:border-primary/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
                <i className="bi bi-award-fill" />
              </div>
              <h3 className="text-sm font-bold text-site-text mb-1">
                {isFil ? 'Modelo ng Modernong Serbisyong Publiko' : 'A Model for Modern Civic Digital Services'}
              </h3>
              <p className="text-xs text-site-text-muted leading-relaxed">
                {isFil
                  ? 'Nagsisilbing patunay at inspirasyon kung paano dapat tumakbo ang digital na serbisyo ng gobyerno: mabilis, libre, at maganda.'
                  : 'Establishing a gold standard model for how local government digital public infrastructure can and should work.'}
              </p>
            </div>
          </div>
        </section>

        {/* What We Provide */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              {isFil ? 'Para sa mga Builder at Komunidad' : 'Supporting Citizen Builders'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-site-text">
              {isFil ? 'Ang Aming Ibinibigay' : 'What We Provide'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-2">
                <i className="bi bi-hdd-network-fill" />
              </div>
              <h3 className="text-sm font-bold text-site-text mb-1">
                {isFil ? 'Modernong Imprastraktura' : 'Infrastructure & Tools'}
              </h3>
              <p className="text-xs text-site-text-muted">
                {isFil
                  ? 'Next.js 15, React, Tailwind CSS, offline PWA, mabilis na hosting, at automation.'
                  : 'High-speed hosting, modern framework, offline PWA capabilities, and zero bloated trackers.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                <i className="bi bi-database-fill-check" />
              </div>
              <h3 className="text-sm font-bold text-site-text mb-1">
                {isFil ? 'Datos at mga API' : 'Data & Open APIs'}
              </h3>
              <p className="text-xs text-site-text-muted">
                {isFil
                  ? 'Pampublikong badyet, mga ordinansa, resolusyon, at demographic data ng 24 barangay.'
                  : 'Structured municipal datasets, fiscal budget transparency, ordinances, and barangay records.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2">
                <i className="bi bi-code-square" />
              </div>
              <h3 className="text-sm font-bold text-site-text mb-1">
                {isFil ? 'Kolaborasyon at Hackathons' : 'Hackathons & Collaboration'}
              </h3>
              <p className="text-xs text-site-text-muted">
                {isFil
                  ? 'Mga pagkakataon para sa developers, designers, at researchers na magkasamang bumuo.'
                  : 'Opportunities for developers, designers, and researchers to build high-impact civic solutions.'}
              </p>
            </div>
          </div>
        </section>

        {/* Why We're Building This */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              {isFil ? 'Dahilan ng Proyekto' : 'Our Motivation'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-site-text">
              {isFil ? 'Bakit Namin Ito Binuo' : "Why We're Building This Project"}
            </h2>
          </div>

          <p className="text-sm text-site-text-muted leading-relaxed mb-4">
            {isFil
              ? 'Karaniwang napapansin ng mga mamamayan ang mga hamon sa mga tradisyonal na government portal: mabagal na paglo-load, hindi gumaganang mga link, mahirap basahin sa mobile phone, at nakakalitong impormasyon. Nakatutok ang BetterSantaMaria sa mga sumusunod na pagpapabuti:'
              : 'Citizens frequently encounter friction on traditional public portals: slow load times, broken links, lack of mobile responsiveness, and confusing layouts. BetterSantaMaria focuses directly on solving these civic hurdles:'}
          </p>

          <ul className="space-y-3 text-sm text-site-text-muted">
            <li className="flex items-start gap-3">
              <i className="bi bi-check-circle-fill text-accent text-base shrink-0 mt-0.5" />
              <span>
                <strong className="text-site-text font-semibold">
                  {isFil ? 'Regular na Pag-update ng Nilalaman: ' : 'Regular Content Updates: '}
                </strong>
                {isFil
                  ? 'Tinitiyak na ang mga mamamayan ay may access sa pinakabagong impormasyon sa serbisyo.'
                  : 'Ensuring citizens always have immediate access to the most current requirements and fees.'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <i className="bi bi-check-circle-fill text-accent text-base shrink-0 mt-0.5" />
              <span>
                <strong className="text-site-text font-semibold">
                  {isFil ? 'Pinadaling Navigasyon at mga Link: ' : 'Streamlined Navigation & Verified Links: '}
                </strong>
                {isFil
                  ? 'Mas mabilis na paghahanap at walang sirang mga link papunta sa mga tanggapan.'
                  : 'Reviewed pathways that help visitors find services in seconds without dead-ends.'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <i className="bi bi-check-circle-fill text-accent text-base shrink-0 mt-0.5" />
              <span>
                <strong className="text-site-text font-semibold">
                  {isFil ? 'Pare-parehong Design Standards: ' : 'Consistent Modern Design Standards: '}
                </strong>
                {isFil
                  ? 'Isang propesyonal, malinis, at mapagkakatiwalaang karanasan sa bawat pahina.'
                  : 'A cohesive, distraction-free visual design standard optimized for speed and clarity.'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <i className="bi bi-check-circle-fill text-accent text-base shrink-0 mt-0.5" />
              <span>
                <strong className="text-site-text font-semibold">
                  {isFil ? 'Pinahusay na Aksesibilidad: ' : 'Universal Inclusivity & Accessibility: '}
                </strong>
                {isFil
                  ? 'Dinisenyo para sa lahat ng mamamayan, kabilang ang mga gumagamit ng screen reader o mahinang internet.'
                  : 'Designed to work smoothly on budget smartphones, screen readers, and low-bandwidth connections.'}
              </span>
            </li>
          </ul>
        </section>

        {/* Commitment: WE'RE DONE WAITING */}
        <section className="bg-gradient-to-br from-[#0e3755] to-[#082236] rounded-2xl p-6 sm:p-9 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#f77f00] text-white mb-3">
              {isFil ? 'Tapos na Kaming Maghintay' : "We're Done Waiting"}
            </span>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 text-white">
              &ldquo;WE&apos;RE DONE WAITING.&rdquo;
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-gray-200 leading-relaxed mb-6">
              <p>
                {isFil
                  ? 'Naiinip ka. Naiinip din kami. Ngunit maaari tayong mag-ambag sa sarili nating mga paraan — gaano man ito kaliit.'
                  : "We're impatient. You're impatient. But everyday citizens can contribute in their own meaningful ways — no matter how small."}
              </p>
              <p>
                {isFil
                  ? 'Kaya nating gumawa ng mga kamangha-manghang bagay nang magkakasama. Estilong grassroots. Open source. Walang kailangang permiso.'
                  : 'We can do amazing things together. Grassroots style. Open source. No permission needed.'}
              </p>
              <p className="font-semibold text-white">
                {isFil
                  ? 'NAGHAHANAP KAMI NG MGA TAONG MAS MATALINO KAYSA SA AMIN!'
                  : "WE'RE LOOKING FOR PEOPLE SMARTER THAN US!"}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:volunteer@bettersantamaria.org?subject=Joining%20BetterSantaMaria%20Initiative"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f77f00] hover:bg-[#e07200] text-white font-bold text-sm transition-all shadow-sm"
              >
                <i className="bi bi-envelope-fill" />
                <span>{isFil ? 'Makiisa sa Kilusan' : 'Join the Initiative'}</span>
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/20"
              >
                <i className="bi bi-grid-fill" />
                <span>{isFil ? 'Tingnan ang mga Serbisyo' : 'Browse Services'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* License, Cost & Dedication */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <i className="bi bi-cash-stack text-emerald-600 text-lg" />
                <h3 className="text-base font-bold text-site-text">
                  {isFil ? 'Gastos sa mga Mamamayan' : 'Cost to Citizens'}
                </h3>
              </div>
              <p className="text-xs text-site-text-muted leading-relaxed mb-4">
                {isFil
                  ? 'Lahat ng serbisyo, code, at imprastraktura ay pinondohan at boluntaryong binuo ng mga mamamayan.'
                  : 'All portal code, design, and hosting are developed through volunteer civic contributions.'}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold self-start">
              <i className="bi bi-shield-check" />
              <span>{isFil ? 'Gastos sa Santa Maria = ₱0' : 'Cost to the People of Santa Maria = ₱0'}</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <i className="bi bi-award text-primary text-lg" />
                <h3 className="text-base font-bold text-site-text">
                  {isFil ? 'Lisensya at Karapatan' : 'License & Rights'}
                </h3>
              </div>
              <p className="text-xs text-site-text-muted leading-relaxed mb-4">
                {isFil
                  ? 'Inilaan sa ilalim ng Creative Commons CC0 (Public Domain) at MIT Open Source License. Maaaring gamitin at i-angkop ng sinuman nang walang restriksyon.'
                  : 'Dedicated under Creative Commons CC0 (Public Domain) & MIT Open Source license. Free for any LGU or community to adapt and reuse.'}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-primary border border-blue-200 text-xs font-bold self-start">
              <i className="bi bi-code-slash" />
              <span>CC0 1.0 Universal | MIT Open Source</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
