'use client';

import { useEffect, useRef, useCallback } from 'react';

const hotlines = [
  { icon: 'bi-telephone-fill', label: 'Emergency', number: '911', tel: '911' },
  { icon: 'bi-shield-fill', label: 'PNP Sta. Maria', number: '(044) 815 2122', tel: '0448152122' },
  { icon: 'bi-fire', label: 'BFP Fire', number: '(044) 815 1111', tel: '0448151111' },
  { icon: 'bi-exclamation-triangle-fill', label: 'MDRRMO Rescue', number: '(044) 815 2222', tel: '0448152222' },
  { icon: 'bi-heart-fill', label: 'Municipal Health / RHU', number: '(044) 815 3333', tel: '0448153333' },
  { icon: 'bi-hospital', label: 'RMMMH Hospital', number: '(044) 815 2588', tel: '0448152588' },
];

export default function HotlineBar() {
  const itemsRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const isTabletOrBelow = useCallback(() => {
    return typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches;
  }, []);

  useEffect(() => {
    const container = itemsRef.current;
    if (!container) return;

    function buildMarquee() {
      if (!isTabletOrBelow() || trackRef.current || !container) return;
      const track = document.createElement('div');
      track.className = 'hotline-items-track';
      track.setAttribute('aria-label', 'Emergency contacts scrolling');

      const items = Array.from(container.children);
      while (container.firstChild) track.appendChild(container.firstChild);
      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        clone.setAttribute('tabindex', '-1');
        track.appendChild(clone);
      });
      container.appendChild(track);
      trackRef.current = track;
    }

    function destroyMarquee() {
      if (!trackRef.current || !container) return;
      const originals = Array.from(trackRef.current.children).slice(0, hotlines.length);
      while (container.firstChild) container.removeChild(container.firstChild);
      originals.forEach((item) => container.appendChild(item));
      trackRef.current = null;
    }

    function handleResize() {
      if (isTabletOrBelow()) buildMarquee();
      else destroyMarquee();
    }

    handleResize();
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(handleResize, 150);
    };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, [isTabletOrBelow]);

  return (
    <div className="hotline-bar">
      <div className="container">
        <div className="hotline-inner">
          <div className="hotline-items" ref={itemsRef}>
            {hotlines.map((h) => (
              <a key={h.tel} href={`tel:${h.tel}`} className="hotline-item">
                <i className={`bi ${h.icon}`} aria-hidden="true" />
                <span>
                  {h.label}: {h.number}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
