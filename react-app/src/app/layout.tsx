import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import HotlineBar from '@/components/layout/HotlineBar';
import Header from '@/components/layout/Header';
import InfoBar from '@/components/layout/InfoBar';
import Footer from '@/components/layout/Footer';
import PWAManager from '@/components/PWAManager';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const viewport: Viewport = {
  themeColor: '#0032a0',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bettersantamaria.org'),
  title: { default: 'BetterSantaMaria.org | Official Civic Portal', template: '%s | BetterSantaMaria.org' },
  description:
    'BetterSantaMaria.org - Transparent digital gateway to municipal services, public funds, and local government data for Santa Maria, Bulacan.',
  keywords: [
    'BetterSantaMaria',
    'Santa Maria Bulacan',
    'LGU Santa Maria',
    'municipal services',
    'civic-tech',
    'transparency',
    'Bulacan'
  ],
  authors: [{ name: 'Josiah Jezrael Guevarra' }],
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://bettersantamaria.org/',
    siteName: 'BetterSantaMaria.org',
    title: 'BetterSantaMaria.org | Official Civic Portal',
    description:
      'Empowering the people of Santa Maria, Bulacan with transparent access to services, programs, and public funds.',
    images: [
      {
        url: '/assets/images/banners/opengraph.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/assets/images/logo/favicon.svg', apple: '/assets/images/logo/favicon.svg' },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'BetterStaMaria',
  },
  other: {
    'geo.region': 'PH-BUL',
    'geo.placename': 'Santa Maria, Bulacan',
    'geo.position': '14.8197;120.9610',
    'ICBM': '14.8197, 120.9610',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/accessibility.css" />
        <link rel="stylesheet" href="/assets/css/footer.css" />
      </head>
      <body>
        <LanguageProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <HotlineBar />
          <Header />
          <InfoBar />
          <main id="main-content">{children}</main>
          <Footer />
          <PWAManager />
        </LanguageProvider>
        <Script
          src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
