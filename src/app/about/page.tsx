'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-16">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container-site max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-medium" aria-current="page">
              About
            </span>
          </nav>
        </div>
      </div>

      {/* Main Container */}
      <main className="container-site max-w-4xl pt-8 sm:pt-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 lg:p-12 shadow-xs space-y-10 sm:space-y-12">
          
          {/* Header */}
          <header className="border-b border-gray-100 pb-8 sm:pb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-primary border border-blue-100 mb-4">
              <i className="bi bi-shield-check text-[#f77f00]" />
              <span>Civic Tech Movement</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
              About BetterGov.ph
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 font-normal">
              A community-run portal for the Philippines
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="https://bettergov.ph/join-us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f77f00] hover:bg-[#e07200] text-white font-semibold text-sm transition-all shadow-xs"
              >
                <i className="bi bi-heart-fill text-white/90" />
                <span>Join Us</span>
              </a>
              <a
                href="https://bettergov.ph/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all border border-slate-200"
              >
                <i className="bi bi-envelope-fill text-slate-600" />
                <span>Contact Us</span>
              </a>
            </div>
          </header>

          {/* Section 1: Our Mission */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-2 h-6 rounded-full bg-primary inline-block" />
              Our Mission
            </h2>
            <div className="text-base sm:text-lg text-slate-700 leading-relaxed space-y-3">
              <p>
                BetterGov is a volunteer-led tech initiative committed to creating #civictech projects aimed at making government more transparent, efficient, and accessible to citizens.
              </p>
              <p className="font-medium text-slate-900">
                Our goal is to <strong className="font-bold text-primary">support, promote, consolidate, and empower</strong> citizen builders!
              </p>
            </div>
          </section>

          {/* Section 2: Our goals include */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-2 h-6 rounded-full bg-[#f77f00] inline-block" />
              Our goals include
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0 m-0">
              {[
                'Building a volunteer-run website that reflects Filipino values and culture',
                'Open Source and Open Data projects for better collaboration',
                'Creating intuitive navigation and search functionality',
                'Ensuring accessibility for all citizens, including those with disabilities',
                'Providing accurate, up-to-date information about government services',
                'Establishing a model for how government digital services can and should work',
              ].map((goal, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm sm:text-base text-slate-700 leading-snug"
                >
                  <i className="bi bi-check-circle-fill text-emerald-600 shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: What We Provide */}
          <section className="space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-blue-600 inline-block" />
                What We Provide
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                To support citizen builders in building impactful civic tech projects:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: 'bi-hdd-network',
                  color: 'text-blue-600 bg-blue-50',
                  title: 'Infrastructure & Tools',
                  desc: 'Servers, AI credits, development tools, and more!',
                },
                {
                  icon: 'bi-code-slash',
                  color: 'text-amber-600 bg-amber-50',
                  title: 'Tech Hackathons',
                  desc: 'Regular events to collaborate and build together',
                },
                {
                  icon: 'bi-database-check',
                  color: 'text-emerald-600 bg-emerald-50',
                  title: 'Data & APIs',
                  desc: 'Access to government data and API endpoints',
                },
                {
                  icon: 'bi-people',
                  color: 'text-purple-600 bg-purple-50',
                  title: 'Find Your Team',
                  desc: 'Connect with the right people and resource persons',
                },
                {
                  icon: 'bi-mortarboard',
                  color: 'text-indigo-600 bg-indigo-50',
                  title: 'Industry Mentorship',
                  desc: 'Guidance from seasoned tech and startup veterans',
                },
                {
                  icon: 'bi-building',
                  color: 'text-rose-600 bg-rose-50',
                  title: 'Office Space',
                  desc: 'Physical workspace for collaboration and meetings',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-xs transition-all"
                >
                  <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mb-3 text-lg`}>
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Why We're Building This Project */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-2 h-6 rounded-full bg-slate-700 inline-block" />
              Why We&apos;re Building This Project
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              The current state of Philippine government websites, particularly the main portal{' '}
              <a
                href="https://www.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                www.gov.ph
              </a>{' '}
              , presents numerous challenges for citizens:
            </p>

            <ul className="space-y-2.5 list-none p-0 m-0">
              {[
                'It would benefit from regular content updates to ensure citizens have access to the most current information and services.',
                "There's an opportunity to improve user navigation by reviewing and updating links, as well as streamlining pathways to help visitors find what they need more easily.",
                'Implementing consistent design standards and formatting across all pages could create a more cohesive and professional user experience.',
                'Enhancing accessibility features and overall user experience would make government services more inclusive and user-friendly for all citizens.',
                'These improvements could serve as a model for other government agency websites, creating a more unified and effective digital government presence.',
              ].map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-2">
              These issues create barriers for citizens trying to access essential government services and information.
            </p>
          </section>

          {/* Section 5: Our Commitment */}
          <section className="rounded-2xl bg-gradient-to-br from-[#0e3755] to-[#07243a] p-6 sm:p-8 md:p-10 text-white shadow-md relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                <i className="bi bi-fire" />
                <span>Our Commitment</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                &ldquo;WE&apos;RE DONE WAITING.&rdquo;
              </h3>

              <div className="space-y-3 text-sm sm:text-base text-slate-200 leading-relaxed">
                <p>
                  We&apos;re angry. You&apos;re angry. But we can contribute in our own ways —{' '}
                  <strong className="text-white font-semibold">no matter how little it is</strong>.
                </p>
                <p>
                  We can do <strong className="text-white font-semibold">amazing things</strong> together.{' '}
                  <span className="text-yellow-300 font-semibold">Grassroots style. Open source. No permission needed.</span>
                </p>
                <p>
                  We are committed to putting{' '}
                  <strong className="text-white font-semibold">time, resources, and money</strong> into this initiative. We will keep building{' '}
                  <strong className="text-yellow-300 font-semibold">relentlessly</strong> without anyone&apos;s permission. Open source, public,{' '}
                  <strong className="text-white font-semibold">high quality</strong> sites.
                </p>
              </div>

              <div className="pt-4 border-t border-white/15">
                <p className="text-[#f77f00] font-black text-base sm:text-lg tracking-wide uppercase">
                  WE&apos;RE LOOKING FOR PEOPLE SMARTER THAN US!
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: License */}
          <section className="border-t border-gray-100 pt-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                <i className="bi bi-cc-circle text-lg" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">License</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  This project is released under the{' '}
                  <a
                    href="https://creativecommons.org/publicdomain/zero/1.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-semibold"
                  >
                    Creative Commons CC0
                  </a>{' '}
                  dedication. This means the work is dedicated to the public domain and can be freely used by anyone for any purpose without restriction under copyright law.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Ready to Make a Difference? */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Ready to Make a Difference?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
              Join our community of builders, dreamers, and changemakers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://bettergov.ph/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-colors shadow-2xs"
              >
                <i className="bi bi-envelope-fill" />
                <span>Contact Us</span>
              </a>
              <a
                href="https://bettergov.ph/join-us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors"
              >
                <i className="bi bi-people-fill text-primary" />
                <span>Join Us</span>
              </a>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
