'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <span aria-current="page">{t('nav-contact')}</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-telephone-inbound-fill"></i>
              <span>Citizen Assistance & Support</span>
            </span>
            <h1>{t('nav-contact')}</h1>
            <p className="page-header-desc">
              Get in touch with the Municipal Government of Santa Maria, Bulacan or access 24/7 emergency response numbers.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '32px', marginBottom: '40px' }}>
            {/* Municipal Hall Details */}
            <div
              style={{
                background: 'var(--color-bg, #ffffff)',
                borderRadius: '16px',
                border: '1px solid rgba(0, 50, 160, 0.12)',
                padding: '32px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
              }}
            >
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary)', marginTop: 0, marginBottom: '20px' }}>
                <i className="bi bi-geo-alt"></i> Municipal Hall
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="bi bi-pin-map-fill" style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginTop: '2px' }}></i>
                  <div>
                    <strong>Address:</strong>
                    <div style={{ color: 'var(--color-text-muted, #555)' }}>
                      Santa Maria Municipal Hall, J.P. Rizal St., Poblacion, Santa Maria, Bulacan 3022
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="bi bi-clock-fill" style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginTop: '2px' }}></i>
                  <div>
                    <strong>Office Operating Hours:</strong>
                    <div style={{ color: 'var(--color-text-muted, #555)' }}>
                      Monday – Friday: 8:00 AM – 5:00 PM (No noon break)
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="bi bi-envelope-fill" style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginTop: '2px' }}></i>
                  <div>
                    <strong>Official Email:</strong>
                    <div>
                      <a href="mailto:info@santamariabulacan.gov.ph" style={{ color: 'var(--color-primary)' }}>
                        info@santamariabulacan.gov.ph
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="bi bi-telephone-fill" style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginTop: '2px' }}></i>
                  <div>
                    <strong>Trunkline:</strong>
                    <div style={{ color: 'var(--color-text-muted, #555)' }}>
                      (044) 815-2122
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Hotlines Directory */}
            <div
              style={{
                background: 'var(--color-bg, #ffffff)',
                borderRadius: '16px',
                border: '1px solid rgba(220, 38, 38, 0.2)',
                padding: '32px',
                boxShadow: '0 4px 16px rgba(220, 38, 38, 0.03)',
              }}
            >
              <h2 style={{ fontSize: '1.35rem', color: '#dc2626', marginTop: 0, marginBottom: '20px' }}>
                <i className="bi bi-exclamation-octagon-fill"></i> 24/7 Emergency Hotlines
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(220, 38, 38, 0.05)',
                  }}
                >
                  <span style={{ fontWeight: 600 }}>National Emergency</span>
                  <a href="tel:911" style={{ fontWeight: 700, color: '#dc2626', fontSize: '1.1rem' }}>911</a>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.03)',
                  }}
                >
                  <span>PNP Santa Maria Police Station</span>
                  <a href="tel:0448152122" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>(044) 815-2122</a>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.03)',
                  }}
                >
                  <span>BFP Santa Maria Fire Station</span>
                  <a href="tel:0448151111" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>(044) 815-1111</a>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.03)',
                  }}
                >
                  <span>MDRRMO Rescue & Disaster Response</span>
                  <a href="tel:0448152222" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>(044) 815-2222</a>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.03)',
                  }}
                >
                  <span>Rogaciano M. Mercado Memorial Hospital</span>
                  <a href="tel:0448152588" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>(044) 815-2588</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
