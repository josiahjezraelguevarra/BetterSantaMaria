'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import officialsData from '../../../public/data/officials.json';

export default function GovernmentPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <span aria-current="page">{t('nav-government')}</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-building"></i>
              <span>LGU Santa Maria, Bulacan</span>
            </span>
            <h1>{t('nav-government')}</h1>
            <p className="page-header-desc">
              Meet the executive leadership, Sangguniang Bayan legislative council, and municipal department heads serving the people of Santa Maria, Bulacan.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="section">
        <div className="container">
          <div className="home-stats-v2-header" style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>
              <i className="bi bi-person-badge"></i> Executive Leadership
            </h2>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '48px' }}>
            {/* Mayor */}
            <div
              style={{
                background: 'var(--color-bg, #ffffff)',
                border: '2px solid rgba(0, 50, 160, 0.2)',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
                boxShadow: '0 8px 24px rgba(0, 50, 160, 0.06)',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  background: 'rgba(0, 50, 160, 0.1)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  flexShrink: 0,
                }}
              >
                <i className="bi bi-person-fill"></i>
              </div>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'var(--color-primary)',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '20px',
                    marginBottom: '8px',
                  }}
                >
                  {officialsData.mayor.title}
                </span>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '1.4rem', color: 'var(--color-text)' }}>
                  {officialsData.mayor.name}
                </h3>
                <p style={{ margin: '0 0 4px 0', color: 'var(--color-text-muted, #666)', fontSize: '0.9rem' }}>
                  <i className="bi bi-geo-alt"></i> {officialsData.mayor.office}
                </p>
                <p style={{ margin: 0, color: 'var(--color-text-muted, #666)', fontSize: '0.85rem' }}>
                  <i className="bi bi-calendar"></i> Term: {officialsData.mayor.term}
                </p>
              </div>
            </div>

            {/* Vice Mayor */}
            <div
              style={{
                background: 'var(--color-bg, #ffffff)',
                border: '2px solid rgba(0, 50, 160, 0.2)',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
                boxShadow: '0 8px 24px rgba(0, 50, 160, 0.06)',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  background: 'rgba(0, 50, 160, 0.1)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  flexShrink: 0,
                }}
              >
                <i className="bi bi-person-fill"></i>
              </div>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'var(--color-primary)',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '20px',
                    marginBottom: '8px',
                  }}
                >
                  {officialsData.vice_mayor.title}
                </span>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '1.4rem', color: 'var(--color-text)' }}>
                  {officialsData.vice_mayor.name}
                </h3>
                <p style={{ margin: '0 0 4px 0', color: 'var(--color-text-muted, #666)', fontSize: '0.9rem' }}>
                  <i className="bi bi-geo-alt"></i> {officialsData.vice_mayor.office}
                </p>
                <p style={{ margin: 0, color: 'var(--color-text-muted, #666)', fontSize: '0.85rem' }}>
                  <i className="bi bi-calendar"></i> Term: {officialsData.vice_mayor.term}
                </p>
              </div>
            </div>
          </div>

          {/* Sangguniang Bayan Councilors */}
          <div className="home-stats-v2-header" style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary)' }}>
              <i className="bi bi-people"></i> Sangguniang Bayan Members (Councilors)
            </h2>
          </div>

          <div className="grid grid-4" style={{ gap: '16px', marginBottom: '48px' }}>
            {officialsData.councilors.map((c, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--color-bg, #ffffff)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(0, 50, 160, 0.06)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    margin: '0 auto 12px auto',
                  }}
                >
                  <i className="bi bi-person"></i>
                </div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1.05rem', color: 'var(--color-text)' }}>
                  {c.name}
                </h4>
                <p style={{ margin: '0 0 8px 0', color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 600 }}>
                  {c.title}
                </p>
                <p style={{ margin: 0, color: 'var(--color-text-muted, #666)', fontSize: '0.75rem', fontStyle: 'italic' }}>
                  {c.committee}
                </p>
              </div>
            ))}
          </div>

          {/* Department Heads Directory */}
          <div className="home-stats-v2-header" style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary)' }}>
              <i className="bi bi-briefcase"></i> Municipal Department Offices
            </h2>
          </div>

          <div
            style={{
              background: 'var(--color-bg, #ffffff)',
              borderRadius: '14px',
              border: '1px solid rgba(0,0,0,0.08)',
              overflow: 'hidden',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(0, 50, 160, 0.04)', borderBottom: '2px solid rgba(0, 50, 160, 0.1)' }}>
                  <th style={{ padding: '14px 20px', fontSize: '0.9rem', color: 'var(--color-text)' }}>Office / Department</th>
                  <th style={{ padding: '14px 20px', fontSize: '0.9rem', color: 'var(--color-text)' }}>Department Head</th>
                  <th style={{ padding: '14px 20px', fontSize: '0.9rem', color: 'var(--color-text)' }}>Location</th>
                </tr>
              </thead>
              <tbody>
                {officialsData.department_heads.map((d, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text)' }}>
                      {d.office}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '0.9rem', color: 'var(--color-text-muted, #555)' }}>
                      {d.head}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: 'var(--color-text-muted, #666)' }}>
                      Santa Maria Municipal Hall
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
