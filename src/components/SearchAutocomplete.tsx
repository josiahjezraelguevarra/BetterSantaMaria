'use client';

import { useState, useRef, useEffect } from 'react';

interface Props {
  placeholder?: string;
}

const suggestions = [
  'Birth Certificate',
  'Marriage Certificate',
  'Death Certificate',
  'Business Permit',
  'Real Property Tax',
  'Cedula',
  'Senior Citizen ID',
  'PWD ID',
  'Building Permit',
  'Financial Assistance',
  'Health Services',
  'Agriculture',
];

export default function SearchAutocomplete({ placeholder }: Props) {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length < 2) {
      setFiltered([]);
      setOpen(false);
      return;
    }
    const q = query.toLowerCase();
    setFiltered(suggestions.filter((s) => s.toLowerCase().includes(q)));
    setOpen(true);
  }, [query]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <input
        type="text"
        className="w-full py-3.5 pl-4 pr-12 text-sm text-site-text bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm placeholder:text-gray-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder || 'Search services...'}
        aria-label="Search services"
        autoComplete="off"
      />
      {open && filtered.length > 0 && (
        <ul className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-xl border border-gray-100 max-h-60 overflow-y-auto z-50 list-none p-1.5 m-0" role="listbox" aria-label="Search suggestions">
          {filtered.map((item) => (
            <li
              key={item}
              role="option"
              className="px-3.5 py-2.5 text-sm text-site-text hover:bg-primary/5 hover:text-primary rounded-lg cursor-pointer transition-colors flex items-center gap-2"
              onClick={() => {
                setQuery(item);
                setOpen(false);
              }}
            >
              <i className="bi bi-search text-xs text-gray-400"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
