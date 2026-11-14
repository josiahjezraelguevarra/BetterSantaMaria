'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAManager() {
  const [showInstall, setShowInstall] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);
  const waitingWorker = useRef<ServiceWorker | null>(null);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt.current) return;
    deferredPrompt.current.prompt();
    await deferredPrompt.current.userChoice;
    deferredPrompt.current = null;
    setShowInstall(false);
  }, []);

  const handleUpdate = useCallback(() => {
    waitingWorker.current?.postMessage({ type: 'SKIP_WAITING' });
    setShowUpdate(false);
  }, []);

  useEffect(() => {
    // Install prompt
    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e as BeforeInstallPromptEvent;
      const isStandalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (navigator as unknown as { standalone?: boolean }).standalone;
      if (!isStandalone && !sessionStorage.getItem('pwa-install-dismissed')) {
        setShowInstall(true);
      }
    };
    window.addEventListener('beforeinstallprompt', onBeforeInstall);

    // Service worker registration + update detection
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then((reg) => {
        setInterval(() => reg.update(), 30 * 60 * 1000);

        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              waitingWorker.current = newWorker;
              setShowUpdate(true);
            }
          });
        });
      });

      // Seamless reload on controller change
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
    }

    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstall);
  }, []);

  return (
    <>
      {showInstall && (
        <div
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 bg-primary text-white p-4 rounded-xl shadow-2xl z-50 flex items-center justify-between gap-3 border border-white/20"
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-center gap-3 text-sm">
            <i className="bi bi-download text-accent text-lg" aria-hidden="true"></i>
            <span>Install BetterSantaMaria for quick access to services.</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="px-3.5 py-1.5 bg-accent text-white font-semibold rounded-lg hover:bg-orange-600 text-xs shadow transition-colors"
              onClick={handleInstall}
              aria-label="Install BetterSantaMaria app"
            >
              Install
            </button>
            <button
              className="text-white/70 hover:text-white text-xl leading-none p-1 focus:outline-none"
              onClick={() => {
                sessionStorage.setItem('pwa-install-dismissed', '1');
                setShowInstall(false);
              }}
              aria-label="Dismiss install prompt"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      {showUpdate && (
        <div
          className="fixed top-4 right-4 bg-gray-900 text-white px-4 py-2.5 rounded-xl shadow-xl z-50 flex items-center gap-3 text-xs border border-gray-700"
          role="alert"
          aria-live="polite"
        >
          <span>A new version is available.</span>
          <button
            className="px-2.5 py-1 bg-primary text-white rounded font-medium hover:bg-primary-dark transition-colors"
            onClick={handleUpdate}
            aria-label="Update now"
          >
            Update
          </button>
          <button
            className="text-gray-400 hover:text-white text-lg leading-none p-1 focus:outline-none"
            onClick={() => setShowUpdate(false)}
            aria-label="Dismiss update notice"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
