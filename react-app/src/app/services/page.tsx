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
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <span aria-current="page">{t('nav-services')}</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-grid-fill"></i>
              <span>LGU Santa Maria, Bulacan</span>
            </span>
            <h1>{t('nav-services')}</h1>
            <p className="page-header-desc">
              Comprehensive directory of Citizen’s Charter municipal services, requirements, processing times, and fees.
            </p>
          </div>
        </div>
      </section>

      {/* Services Filter / Search */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
            <div className="search-input-wrapper" style={{ display: 'flex', gap: '8px' }}>
              <input
                type="search"
                className="search-input"
                placeholder="Search municipal service (e.g., birth certificate, business permit, amilyar)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  border: '1px solid rgba(0,0,0,0.12)',
                  fontSize: '1rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                style={{
                  background: 'var(--color-bg, #ffffff)',
                  border: '1px solid rgba(0, 50, 160, 0.12)',
                  borderRadius: '14px',
                  padding: '28px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '10px',
                        background: 'rgba(0, 50, 160, 0.08)',
                        color: 'var(--color-primary, #0032a0)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.4rem',
                      }}
                    >
                      <i className={`bi ${category.icon}`}></i>
                    </div>
                    <div>
                      <h2 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--color-text)' }}>
                        {t(category.titleKey) || category.id}
                      </h2>
                      <p style={{ margin: 0, color: 'var(--color-text-muted, #666)', fontSize: '0.9rem' }}>
                        {t(category.descKey)}
                      </p>
                    </div>
                  </div>

                  {category.href && (
                    <Link
                      href={category.href}
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '8px 16px', borderRadius: '8px' }}
                    >
                      <span>Dedicated Portal</span> <i className="bi bi-arrow-right"></i>
                    </Link>
                  )}
                </div>

                <div className="grid grid-3" style={{ gap: '16px' }}>
                  {category.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="service-item-card"
                      style={{
                        padding: '18px',
                        borderRadius: '10px',
                        background: 'var(--color-bg-alt, #f8fafc)',
                        border: '1px solid rgba(0,0,0,0.06)',
                      }}
                    >
                      <h3 style={{ fontSize: '1.05rem', margin: '0 0 8px 0', color: 'var(--color-text)' }}>
                        {service.nameKey}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted, #555)', minHeight: '40px', margin: '0 0 14px 0' }}>
                        {service.descKey}
                      </p>
                      <div style={{ fontSize: '0.8rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div>
                          <strong>{t('label-fee') || 'Fee:'}</strong> {service.feeKey}
                        </div>
                        <div>
                          <strong>{t('label-time') || 'Time:'}</strong> {service.timeKey}
                        </div>
                        <div>
                          <strong>{t('label-office') || 'Office:'}</strong> {service.officeKey}
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
