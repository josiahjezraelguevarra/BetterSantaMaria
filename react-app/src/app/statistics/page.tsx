'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import demographicsData from '../../../public/data/demographics.json';

export default function StatisticsPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <span aria-current="page">{t('nav-statistics')}</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-bar-chart-fill"></i>
              <span>PSA Census & Municipal Planning</span>
            </span>
            <h1>{t('nav-statistics')}</h1>
            <p className="page-header-desc">
              Official demographics, geographic land distribution, and barangay profiles of the Municipality of Santa Maria, Bulacan.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metric Highlights */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '40px' }}>
            <div
              style={{
                background: 'var(--color-bg, #ffffff)',
                border: '1px solid rgba(0, 50, 160, 0.12)',
                borderRadius: '14px',
                padding: '24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginBottom: '8px' }}>
                <i className="bi bi-people-fill"></i>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '4px' }}>
                {demographicsData.population.total.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted, #666)' }}>
                Total Population ({demographicsData.population.source} {demographicsData.population.year})
              </div>
            </div>

            <div
              style={{
                background: 'var(--color-bg, #ffffff)',
                border: '1px solid rgba(0, 50, 160, 0.12)',
                borderRadius: '14px',
                padding: '24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginBottom: '8px' }}>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '4px' }}>
                {demographicsData.land_area_km2} km²
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted, #666)' }}>
                Total Land Area
              </div>
            </div>

            <div
              style={{
                background: 'var(--color-bg, #ffffff)',
                border: '1px solid rgba(0, 50, 160, 0.12)',
                borderRadius: '14px',
                padding: '24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginBottom: '8px' }}>
                <i className="bi bi-grid-3x3-gap-fill"></i>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '4px' }}>
                {demographicsData.barangay_count}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted, #666)' }}>
                Official Barangays
              </div>
            </div>

            <div
              style={{
                background: 'var(--color-bg, #ffffff)',
                border: '1px solid rgba(0, 50, 160, 0.12)',
                borderRadius: '14px',
                padding: '24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginBottom: '8px' }}>
                <i className="bi bi-award-fill"></i>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '4px' }}>
                {demographicsData.income_class}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted, #666)' }}>
                LGU Income Classification
              </div>
            </div>
          </div>

          {/* 24 Barangays Table */}
          <div className="home-stats-v2-header" style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary)' }}>
              <i className="bi bi-houses"></i> Barangays of Santa Maria, Bulacan
            </h2>
            <p style={{ margin: 0, color: 'var(--color-text-muted, #666)', fontSize: '0.9rem' }}>
              Complete roster of the 24 local barangay units comprising the municipality.
            </p>
          </div>

          <div
            style={{
              background: 'var(--color-bg, #ffffff)',
              borderRadius: '14px',
              border: '1px solid rgba(0,0,0,0.08)',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(0, 50, 160, 0.05)', borderBottom: '2px solid rgba(0, 50, 160, 0.1)' }}>
                  <th style={{ padding: '14px 20px', width: '80px', fontSize: '0.85rem' }}>#</th>
                  <th style={{ padding: '14px 20px', fontSize: '0.85rem' }}>Barangay Name</th>
                  <th style={{ padding: '14px 20px', fontSize: '0.85rem' }}>Classification</th>
                  <th style={{ padding: '14px 20px', fontSize: '0.85rem' }}>Jurisdiction</th>
                </tr>
              </thead>
              <tbody>
                {demographicsData.barangays.map((b, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: '12px 20px', color: 'var(--color-text-muted, #888)', fontSize: '0.85rem' }}>
                      {idx + 1}
                    </td>
                    <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--color-text)' }}>
                      {b.name}
                    </td>
                    <td style={{ padding: '12px 20px' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '3px 10px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          background: b.classification === 'Urban' ? 'rgba(0, 50, 160, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                          color: b.classification === 'Urban' ? 'var(--color-primary)' : '#047857',
                        }}
                      >
                        {b.classification}
                      </span>
                    </td>
                    <td style={{ padding: '12px 20px', fontSize: '0.85rem', color: 'var(--color-text-muted, #666)' }}>
                      Santa Maria, Bulacan 3022
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
