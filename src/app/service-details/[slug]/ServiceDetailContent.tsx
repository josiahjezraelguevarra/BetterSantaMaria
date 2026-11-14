'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ServiceDetail } from '@/data/serviceDetailsContent';

interface Props {
  service: ServiceDetail;
}

export default function ServiceDetailContent({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-site pt-2 pb-1">
        <nav className="flex items-center gap-2 text-sm text-site-text-light" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <span>/</span>
          <Link href={service.categoryLink} className="hover:text-primary transition-colors">{service.category}</Link>
          <span>/</span>
          <span className="text-site-text font-medium" aria-current="page">{service.title}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-6 lg:py-8 text-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white mb-2">
              <i className={`bi ${service.badgeIcon}`}></i> {service.badgeText}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-white">{service.fullTitle}</h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed m-0">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-4 sm:py-5 bg-bg-alt border-b border-gray-100">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {service.quickStats.map((stat, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-xl border border-gray-100 text-center shadow-sm">
                <i className={`bi ${stat.icon} text-primary text-lg mb-0.5 block`}></i>
                <h4 className="text-xs uppercase font-semibold text-site-text-light mb-0.5">{stat.label}</h4>
                <p className="text-xs sm:text-sm font-bold text-site-text m-0">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-6 lg:py-8">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 space-y-6">
              {/* Process Steps */}
              <div>
                <div className="mb-3.5">
                  <h2 className="text-lg sm:text-xl font-bold text-site-text flex items-center gap-2 mb-0.5">
                    <i className="bi bi-list-ol text-primary"></i> Step-by-Step Process
                  </h2>
                  <p className="text-xs sm:text-sm text-site-text-light">Follow these steps to complete this service</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                  {service.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-all ${
                        step.isFinal
                          ? 'bg-emerald-50/50 border-emerald-200'
                          : 'bg-white border-gray-100 shadow-sm'
                      }`}
                    >
                      <div
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold mb-2.5 ${
                          step.isFinal ? 'bg-success text-white' : 'bg-primary text-white'
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-site-text mb-1">{step.title}</h4>
                      <p className="text-xs text-site-text-light leading-relaxed m-0">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <div className="mb-3.5">
                  <h2 className="text-lg sm:text-xl font-bold text-site-text flex items-center gap-2 mb-0.5">
                    <i className="bi bi-clipboard-check text-primary"></i> Requirements
                  </h2>
                  <p className="text-xs sm:text-sm text-site-text-light">Documents needed for your application</p>
                </div>
                <div className="space-y-3">
                  {service.requirements.map((req, idx) => (
                    <div key={idx} className="bg-white p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm">
                      <h4 className="text-sm font-semibold text-site-text flex items-center gap-2 mb-2.5">
                        <i className={`bi ${req.icon} text-primary`}></i> {req.title}
                      </h4>
                      <ul className="space-y-1.5 list-none p-0 m-0">
                        {req.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-site-text">
                            <i className="bi bi-check-circle-fill text-primary text-xs mt-0.5 flex-shrink-0"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div>
                  <div className="mb-3.5">
                    <h2 className="text-lg sm:text-xl font-bold text-site-text flex items-center gap-2 mb-0.5">
                      <i className="bi bi-question-circle text-primary"></i> Frequently Asked Questions
                    </h2>
                  </div>
                  <div className="space-y-2.5">
                    {service.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                      >
                        <button
                          type="button"
                          className="w-full px-4 py-3 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-site-text hover:bg-gray-50 transition-colors focus:outline-none"
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        >
                          <span>{faq.question}</span>
                          <i
                            className={`bi bi-chevron-down text-primary transition-transform ${
                              openFaq === idx ? 'rotate-180' : ''
                            }`}
                          ></i>
                        </button>
                        {openFaq === idx && (
                          <div className="px-4 pb-3.5 text-xs sm:text-sm text-site-text-light leading-relaxed border-t border-gray-50 pt-2.5">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-xs sm:text-sm font-semibold text-site-text flex items-center gap-2 mb-3">
                  <i className="bi bi-building text-primary"></i> Office Information
                </h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="font-semibold text-site-text m-0">{service.office.name}</p>
                  <p className="text-site-text-light flex items-center gap-2 m-0">
                    <i className="bi bi-geo-alt text-primary"></i> {service.office.location}
                  </p>
                  <p className="text-site-text-light flex items-center gap-2 m-0">
                    <i className="bi bi-telephone text-primary"></i> {service.office.phone}
                  </p>
                  <p className="text-site-text-light flex items-center gap-2 m-0">
                    <i className="bi bi-clock text-primary"></i> {service.office.hours}
                  </p>
                </div>
              </div>

              {service.relatedServices.length > 0 && (
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="text-xs sm:text-sm font-semibold text-site-text flex items-center gap-2 mb-2.5">
                    <i className="bi bi-link-45deg text-primary"></i> Related Services
                  </h4>
                  <ul className="space-y-1.5 list-none p-0 m-0 text-xs sm:text-sm">
                    {service.relatedServices.map((related, idx) => (
                      <li key={idx}>
                        <Link href={related.link} className="text-primary hover:underline">
                          {related.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-primary/5 p-4 sm:p-5 rounded-xl border border-primary/10">
                <h4 className="text-xs sm:text-sm font-semibold text-site-text flex items-center gap-2 mb-1.5">
                  <i className="bi bi-info-circle text-primary"></i> Need Help?
                </h4>
                <p className="text-xs text-site-text-light mb-3">
                  Contact the municipal helpdesk or office directly for assistance with this service.
                </p>
                <Link href="/contact" className="btn btn-primary w-full text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
