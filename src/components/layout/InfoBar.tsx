'use client';

import { useState, useEffect, useCallback } from 'react';

export default function InfoBar() {
  const [rate, setRate] = useState('1 USD = ₱ --');
  const [temp, setTemp] = useState('--°C');
  const [dateStr, setDateStr] = useState('--- --, ----');
  const [timeStr, setTimeStr] = useState('--:-- --');

  const updateClock = useCallback(() => {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    setDateStr(`${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);
    let h = now.getHours();
    const m = now.getMinutes();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    setTimeStr(`${h}:${m < 10 ? '0' + m : m} ${ampm}`);
  }, []);

  useEffect(() => {
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [updateClock]);

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then((r) => r.json())
      .then((data) => {
        if (data?.rates?.PHP) setRate(`1 USD = ₱ ${data.rates.PHP.toFixed(2)}`);
      })
      .catch(() => {});

    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=14.8197&longitude=120.9610&current_weather=true'
    )
      .then((r) => r.json())
      .then((data) => {
        if (data?.current_weather?.temperature != null) {
          setTemp(`${Math.round(data.current_weather.temperature)}°C`);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="w-full bg-[#001d5a] text-white/90 text-xs py-1 border-b border-white/10 select-none" role="complementary" aria-label="Real-time information">
      <div className="container-site">
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6" aria-live="polite" aria-atomic="false">
          <div className="inline-flex items-center gap-1.5 font-medium" aria-label="Exchange rates">
            <i className="bi bi-currency-exchange text-accent" aria-hidden="true" />
            <span className="rate-display">{rate}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 font-medium" aria-label="Current weather in Santa Maria">
            <i className="bi bi-thermometer-half text-accent" aria-hidden="true" />
            <span>Santa Maria {temp}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 font-medium" aria-label="Philippine Date and Time">
            <i className="bi bi-calendar3 text-accent" aria-hidden="true" />
            <span>{dateStr}</span>
            <span className="text-white/40" aria-hidden="true">
              •
            </span>
            <i className="bi bi-clock text-accent" aria-hidden="true" />
            <span>{timeStr}</span>
            <span className="text-white/70 font-normal">PHT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
