'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCategory {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
  href?: string;
  services: {
    nameKey: string;
    descKey: string;
    feeKey: string;
    timeKey: string;
    officeKey: string;
  }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'certificates',
    titleKey: 'service-certificates',
    descKey: 'service-certificates-desc',
    icon: 'bi-file-earmark-text',
    services: [
      {
        nameKey: 'Birth Certificate',
        descKey: 'Issuance of Certified True Copy of Certificate of Live Birth',
        feeKey: '₱50.00 - ₱100.00',
        timeKey: '10 - 20 minutes',
        officeKey: 'Municipal Civil Registrar (MCR)',
      },
      {
        nameKey: 'Marriage Certificate',
        descKey: 'Issuance of Marriage License and Certified True Copy of Marriage Certificate',
        feeKey: '₱150.00 - ₱300.00',
        timeKey: '1 - 2 business days',
        officeKey: 'Municipal Civil Registrar (MCR)',
      },
      {
        nameKey: 'Death Certificate',
        descKey: 'Registration and issuance of Certificate of Death',
        feeKey: '₱50.00 - ₱100.00',
        timeKey: '10 - 20 minutes',
        officeKey: 'Municipal Civil Registrar (MCR)',
      },
    ],
  },
  {
    id: 'business',
    titleKey: 'service-business',
    descKey: 'service-business-desc',
    icon: 'bi-briefcase',
    services: [
      {
        nameKey: 'New Business Permit',
        descKey: 'Application for Mayor’s Permit and Business License for new establishments',
        feeKey: 'Assessed based on capitalization',
        timeKey: '1 - 3 business days',
        officeKey: 'Business Permits and Licensing Office (BPLO)',
      },
      {
        nameKey: 'Business Permit Renewal',
        descKey: 'Annual renewal of business permits and licensing',
        feeKey: 'Assessed based on gross receipts',
        timeKey: '1 business day (walk-in)',
        officeKey: 'Business Permits and Licensing Office (BPLO)',
      },
    ],
  },
  {
    id: 'tax',
    titleKey: 'service-tax',
    descKey: 'service-tax-desc',
    icon: 'bi-cash-coin',
    services: [
      {
        nameKey: 'Real Property Tax (Amilyar)',
        descKey: 'Payment of annual real property taxes with prompt payment discounts',
        feeKey: 'Based on assessed property valuation',
        timeKey: '10 - 15 minutes',
        officeKey: 'Municipal Treasurer’s Office',
      },
      {
        nameKey: 'Community Tax Certificate (Cedula)',
        descKey: 'Issuance of CTC for individual and corporate taxpayers',
        feeKey: 'Basic: ₱5.00 + additional based on income',
        timeKey: '5 - 10 minutes',
        officeKey: 'Municipal Treasurer’s Office',
      },
    ],
  },
  {
    id: 'health',
    titleKey: 'service-health',
    descKey: 'service-health-desc',
    icon: 'bi-heart-pulse',
    href: '/services/health',
    services: [
      {
        nameKey: 'Medical Consultation & Checkup',
        descKey: 'General primary care consultation and physical examination',
        feeKey: 'Free (Libre)',
        timeKey: 'Walk-in / 30 mins',
        officeKey: 'Municipal Health Office (MHO) / RHU',
      },
      {
        nameKey: 'Immunization & Vaccines',
        descKey: 'Routine childhood immunization, COVID-19, and senior flu/pneumonia vaccines',
        feeKey: 'Free (Libre)',
        timeKey: 'Scheduled dates',
        officeKey: 'Rural Health Units & Barangay Health Centers',
      },
    ],
  },
  {
    id: 'social',
    titleKey: 'service-social',
    descKey: 'service-social-desc',
    icon: 'bi-people',
    services: [
      {
        nameKey: 'Senior Citizen ID & Booklet',
        descKey: 'Issuance of Office of the Senior Citizens Affairs (OSCA) ID and purchase booklets',
        feeKey: 'Free (Libre)',
        timeKey: '1 - 2 business days',
        officeKey: 'MSWDO / OSCA',
      },
      {
        nameKey: 'Persons with Disability (PWD) ID',
        descKey: 'Application for PWD identification card and discount benefits',
        feeKey: 'Free (Libre)',
        timeKey: '1 - 3 business days',
        officeKey: 'MSWDO / PDAO',
      },
      {
        nameKey: 'Assistance to Individuals in Crisis Situation (AICS)',
        descKey: 'Medical, burial, educational, or transportation financial assistance',
        feeKey: 'Free (Subsidized)',
        timeKey: 'Case assessment',
        officeKey: 'MSWDO',
      },
    ],
  },
];

export default function ServicesPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = serviceCategories.filter((category) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    const titleMatch = (t(category.titleKey) || category.id).toLowerCase().includes(term);
    const serviceMatch = category.services.some(
      (s) => s.nameKey.toLowerCase().includes(term) || s.descKey.toLowerCase().includes(term)
    );
    return titleMatch || serviceMatch;
  });

  return (
    <>
      <div className="container-site pt-2 pb-1">
        <nav className="flex items-center gap-2 text-sm text-site-text-light" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">{t('nav-home')}</Link>
          <span>/</span>
          <span className="text-site-text font-medium" aria-current="page">{t('nav-services')}</span>
        </nav>
      </div>

      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-6 lg:py-8 text-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white mb-2">
              <i className="bi bi-grid-fill"></i>
              <span>LGU Santa Maria, Bulacan</span>
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-white">{t('nav-services')}</h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed m-0">
              Comprehensive directory of Citizen’s Charter municipal services, requirements, processing times, and fees.
            </p>
          </div>
        </div>
      </section>

      {/* Services Filter / Search */}
      <section className="py-6 lg:py-8 bg-bg-alt">
        <div className="container-site">
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative flex items-center">
              <i className="bi bi-search absolute left-4 text-site-text-light"></i>
              <input
                type="search"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-white shadow-sm"
                placeholder="Search municipal service (e.g., birth certificate, business permit, amilyar)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-5">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl flex-shrink-0">
                      <i className={`bi ${category.icon}`}></i>
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-site-text m-0">
                        {t(category.titleKey) || category.id}
                      </h2>
                      <p className="text-xs text-site-text-light m-0 mt-0.5">
                        {t(category.descKey)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Link
                      href={`/services/${category.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <span>Category Hub</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                    {category.href && (
                      <Link
                        href={category.href}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 text-site-text hover:bg-gray-200 transition-colors"
                      >
                        <span>Dedicated Portal</span>
                        <i className="bi bi-box-arrow-up-right text-[10px]"></i>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {category.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-bg-alt border border-gray-100 flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-site-text mb-1.5">
                          {service.nameKey}
                        </h3>
                        <p className="text-xs text-site-text-light leading-relaxed mb-3 min-h-[32px]">
                          {service.descKey}
                        </p>
                      </div>
                      <div className="text-xs border-t border-gray-200/60 pt-2.5 space-y-1 text-site-text-light">
                        <div className="flex justify-between">
                          <span className="font-medium text-site-text">{t('label-fee') || 'Fee:'}</span>
                          <span className="font-semibold text-primary">{service.feeKey}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-site-text">{t('label-time') || 'Time:'}</span>
                          <span>{service.timeKey}</span>
                        </div>
                        <div className="truncate pt-0.5">
                          <span className="text-[11px] text-gray-400 block">{service.officeKey}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
