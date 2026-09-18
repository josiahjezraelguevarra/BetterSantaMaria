'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BudgetPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <span aria-current="page">{t('nav-transparency')}</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-shield-check"></i>
              <span>Full Disclosure Policy (FDP)</span>
            </span>
            <h1>{t('nav-transparency')} & Municipal Budget</h1>
            <p className="page-header-desc">
              Public tracking of local revenues, national tax allotment (NTA), municipal expenditures, and 20% development fund projects for Santa Maria, Bulacan.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Key Principles Cards */}
          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '40px' }}>
            <div
              style={{
                background: 'var(--color-bg, #ffffff)',
                border: '1px solid rgba(0, 50, 160, 0.12)',
                borderRadius: '14px',
                padding: '24px',
              }}
            >
              <div style={{ color: 'var(--color-primary)', fontSize: '1.6rem', marginBottom: '10px' }}>
                <i className="bi bi-cash-stack"></i>
              </div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.15rem' }}>Local Revenue Generation</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted, #666)', lineHeight: 1.6 }}>
                Real property taxes (Amilyar), business permits, regulatory fees, and local enterprise operations drive municipal funding.
              </p>
            </div>

            <div
              style={{
                background: 'var(--color-bg, #ffffff)',
                border: '1px solid rgba(0, 50, 160, 0.12)',
                borderRadius: '14px',
                padding: '24px',
              }}
            >
              <div style={{ color: 'var(--color-primary)', fontSize: '1.6rem', marginBottom: '10px' }}>
                <i className="bi bi-pie-chart"></i>
              </div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.15rem' }}>20% Development Fund</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted, #666)', lineHeight: 1.6 }}>
                Mandatory statutory allocation dedicated to local infrastructure, flood mitigation, rural farm-to-market roads, and health facilities.
              </p>
            </div>

            <div
              style={{
                background: 'var(--color-bg, #ffffff)',
                border: '1px solid rgba(0, 50, 160, 0.12)',
                borderRadius: '14px',
                padding: '24px',
              }}
            >
              <div style={{ color: 'var(--color-primary)', fontSize: '1.6rem', marginBottom: '10px' }}>
                <i className="bi bi-eye"></i>
              </div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.15rem' }}>Public Oversight & COA</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted, #666)', lineHeight: 1.6 }}>
                Annual financial statements, procurement disclosures, and Commission on Audit (COA) compliance reports.
              </p>
            </div>
          </div>

          {/* Official Portals & Transparency Links */}
          <div
            style={{
              background: 'var(--color-bg, #ffffff)',
              borderRadius: '16px',
              border: '1px solid rgba(0,0,0,0.08)',
              padding: '32px',
              marginBottom: '40px',
            }}
          >
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary)', marginTop: 0, marginBottom: '16px' }}>
              <i className="bi bi-link-45deg"></i> Official National Transparency Portals
            </h2>
            <p style={{ color: 'var(--color-text-muted, #666)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Direct access to public government portals where official financial and governance disclosures are submitted:
            </p>

            <div className="grid grid-2" style={{ gap: '16px' }}>
              <a
                href="https://blgf.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 50, 160, 0.1)',
                  background: 'rgba(0, 50, 160, 0.02)',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                }}
              >
                <i className="bi bi-bank" style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}></i>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem' }}>Bureau of Local Government Finance (BLGF)</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted, #666)' }}>
                    LGU financial statements, debt service ratios, and income reports
                  </span>
                </div>
              </a>

              <a
                href="https://data.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 50, 160, 0.1)',
                  background: 'rgba(0, 50, 160, 0.02)',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                }}
              >
                <i className="bi bi-folder2-open" style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}></i>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem' }}>Open Data Philippines</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted, #666)' }}>
                    Downloadable civic datasets and public governance statistics
                  </span>
                </div>
              </a>

              <a
                href="https://www.foi.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 50, 160, 0.1)',
                  background: 'rgba(0, 50, 160, 0.02)',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                }}
              >
                <i className="bi bi-envelope-paper" style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}></i>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem' }}>Freedom of Information (FOI)</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted, #666)' }}>
                    File official citizen requests for public municipal records
                  </span>
                </div>
              </a>

              <a
                href="https://cmci.dti.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 50, 160, 0.1)',
                  background: 'rgba(0, 50, 160, 0.02)',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                }}
              >
                <i className="bi bi-graph-up-arrow" style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}></i>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem' }}>DTI Cities and Municipalities Competitiveness</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted, #666)' }}>
                    Economic dynamism, government efficiency, and infrastructure index
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
