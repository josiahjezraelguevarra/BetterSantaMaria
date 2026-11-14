'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

function isMobileNav(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const pathname = usePathname();
  const { t } = useLanguage();
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const scrollYRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const lockBodyScroll = useCallback(() => {
    scrollYRef.current = window.scrollY;
    document.body.classList.add('mobile-menu-open');
    document.body.style.top = `-${scrollYRef.current}px`;
  }, []);

  const unlockBodyScroll = useCallback(() => {
    document.body.classList.remove('mobile-menu-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollYRef.current);
  }, []);

  const closeMenu = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    unlockBodyScroll();
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 320);
  }, [unlockBodyScroll]);

  const toggleDropdown = useCallback((index: number, e: React.MouseEvent) => {
    if (isMobileNav()) {
      e.preventDefault();
      setOpenDropdown((prev) => (prev === index ? null : index));
    }
  }, []);

  // Close menu on route change
  useEffect(() => {
    isAnimatingRef.current = false;
    closeMenu();
  }, [pathname, closeMenu]);

  // Cleanup body scroll lock on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.top = '';
    };
  }, []);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        closeMenu();
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [mobileMenuOpen, closeMenu]);

  // Escape key to close
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMenu();
        toggleRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen, closeMenu]);

  // Close mobile menu on resize to desktop (debounced)
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function handleResize() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!isMobileNav() && mobileMenuOpen) {
          isAnimatingRef.current = false;
          closeMenu();
        }
      }, 150);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-1.5 transition-all">
      <div className="container-site flex items-center justify-between min-h-[50px] sm:min-h-[58px] md:min-h-[68px] lg:min-h-[84px] gap-2 lg:gap-6">
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-primary rounded p-0.5">
            <img
              src="/assets/images/logo/better-santamaria-logo.svg"
              alt="BetterSantaMaria.org Logo"
              className="h-[50px] sm:h-[58px] md:h-[68px] lg:h-[84px] w-auto transition-transform hover:opacity-95"
            />
          </Link>
        </div>

        {/* Desktop Navigation (Right-Aligned) */}
        <nav
          ref={navRef}
          className={`${
            mobileMenuOpen
              ? 'absolute top-full inset-x-0 h-[calc(100dvh-100%)] bg-white overflow-y-auto p-6 z-40 border-t border-gray-100 flex flex-col gap-4 shadow-xl lg:static lg:h-auto lg:p-0 lg:border-none lg:shadow-none lg:flex-row lg:bg-transparent lg:inset-auto'
              : 'hidden lg:flex'
          } lg:ml-auto items-center justify-end`}
          aria-label="Main Navigation"
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-6 w-full lg:w-auto list-none m-0 p-0 lg:justify-end">
            {/* 1. Home */}
            <li className="w-full lg:w-auto">
              <Link
                href="/"
                className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/'
                    ? 'text-primary font-semibold bg-primary/5 lg:bg-transparent'
                    : 'text-site-text hover:text-primary hover:bg-gray-50 lg:hover:bg-transparent'
                }`}
              >
                {t('nav-home')}
              </Link>
            </li>

            {/* 2. Services */}
            <li className="relative w-full lg:w-auto group">
              <button
                type="button"
                className={`w-full lg:w-auto flex items-center justify-between gap-1.5 py-2 px-3 rounded-md text-sm font-medium transition-colors focus:outline-none ${
                  pathname.startsWith('/services')
                    ? 'text-primary font-semibold bg-primary/5 lg:bg-transparent'
                    : 'text-site-text hover:text-primary hover:bg-gray-50 lg:hover:bg-transparent'
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === 0 ? 'true' : 'false'}
                onClick={(e) => toggleDropdown(0, e)}
              >
                <span>{t('nav-services')}</span>
                <i className={`bi bi-chevron-down text-xs transition-transform ${openDropdown === 0 ? 'rotate-180' : ''}`} />
              </button>
              <ul
                className={`${
                  openDropdown === 0 ? 'block' : 'hidden lg:group-hover:block'
                } lg:absolute lg:top-full lg:right-0 bg-white lg:shadow-lg lg:border lg:border-gray-100 rounded-lg py-2 min-w-[240px] z-50 pl-4 lg:pl-0 mt-1 lg:mt-0`}
              >
                <li>
                  <Link href="/services/certificates" className="block px-4 py-2 text-sm text-site-text hover:bg-primary/5 hover:text-primary transition-colors">
                    {t('dropdown-certificates')}
                  </Link>
                </li>
                <li>
                  <Link href="/services/business" className="block px-4 py-2 text-sm text-site-text hover:bg-primary/5 hover:text-primary transition-colors">
                    {t('dropdown-business')}
                  </Link>
                </li>
                <li>
                  <Link href="/services/tax-payments" className="block px-4 py-2 text-sm text-site-text hover:bg-primary/5 hover:text-primary transition-colors">
                    {t('dropdown-tax-payments')}
                  </Link>
                </li>
                <li>
                  <Link href="/services/social-services" className="block px-4 py-2 text-sm text-site-text hover:bg-primary/5 hover:text-primary transition-colors">
                    {t('dropdown-social-services')}
                  </Link>
                </li>
                <li>
                  <Link href="/services/health" className="block px-4 py-2 text-sm text-site-text hover:bg-primary/5 hover:text-primary transition-colors">
                    {t('dropdown-health')}
                  </Link>
                </li>
                <li>
                  <Link href="/services/agriculture" className="block px-4 py-2 text-sm text-site-text hover:bg-primary/5 hover:text-primary transition-colors">
                    {t('dropdown-agriculture')}
                  </Link>
                </li>
                <li>
                  <Link href="/services/infrastructure" className="block px-4 py-2 text-sm text-site-text hover:bg-primary/5 hover:text-primary transition-colors">
                    {t('dropdown-infrastructure')}
                  </Link>
                </li>
                <li>
                  <Link href="/services/education" className="block px-4 py-2 text-sm text-site-text hover:bg-primary/5 hover:text-primary transition-colors">
                    {t('dropdown-education')}
                  </Link>
                </li>
                <li>
                  <Link href="/services/public-safety" className="block px-4 py-2 text-sm text-site-text hover:bg-primary/5 hover:text-primary transition-colors">
                    {t('dropdown-public-safety')}
                  </Link>
                </li>
                <li>
                  <Link href="/services/environment" className="block px-4 py-2 text-sm text-site-text hover:bg-primary/5 hover:text-primary transition-colors">
                    {t('dropdown-environment')}
                  </Link>
                </li>
              </ul>
            </li>

            {/* 3. Statistics */}
            <li className="w-full lg:w-auto">
              <Link
                href="/statistics"
                className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/statistics'
                    ? 'text-primary font-semibold bg-primary/5 lg:bg-transparent'
                    : 'text-site-text hover:text-primary hover:bg-gray-50 lg:hover:bg-transparent'
                }`}
              >
                {t('nav-statistics')}
              </Link>
            </li>

            {/* 4. Transparency */}
            <li className="w-full lg:w-auto">
              <Link
                href="/budget"
                className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/budget'
                    ? 'text-primary font-semibold bg-primary/5 lg:bg-transparent'
                    : 'text-site-text hover:text-primary hover:bg-gray-50 lg:hover:bg-transparent'
                }`}
              >
                {t('nav-transparency')}
              </Link>
            </li>

            {/* 5. Contact */}
            <li className="w-full lg:w-auto">
              <Link
                href="/contact"
                className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/contact'
                    ? 'text-primary font-semibold bg-primary/5 lg:bg-transparent'
                    : 'text-site-text hover:text-primary hover:bg-gray-50 lg:hover:bg-transparent'
                }`}
              >
                {t('nav-contact')}
              </Link>
            </li>

            {/* 6. Survey */}
            <li className="w-full lg:w-auto">
              <Link
                href="/survey"
                className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/survey'
                    ? 'text-primary font-semibold bg-primary/5 lg:bg-transparent'
                    : 'text-site-text hover:text-primary hover:bg-gray-50 lg:hover:bg-transparent'
                }`}
              >
                {t('nav-survey') || 'Survey'}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Actions: Mobile Hamburger */}
        <div className="flex items-center gap-2">
          <button
            ref={toggleRef}
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-site-text bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            onClick={() => {
              if (isAnimatingRef.current) return;
              if (mobileMenuOpen) {
                closeMenu();
              } else {
                isAnimatingRef.current = true;
                setMobileMenuOpen(true);
                lockBodyScroll();
                setTimeout(() => {
                  isAnimatingRef.current = false;
                }, 320);
              }
            }}
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-xl`} aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
