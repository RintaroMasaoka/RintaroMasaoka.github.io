'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [dark, setDark] = useState(() => typeof document !== 'undefined' && document.documentElement.dataset.theme === 'dark');
  useEffect(() => {
    const system = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem('costello-notes-theme'); } catch { /* Storage may be unavailable. */ }
      const next = saved === 'dark' || (saved !== 'light' && system.matches);
      document.documentElement.dataset.theme = next ? 'dark' : 'light';
      setDark(next);
    };
    sync();
    system.addEventListener('change', sync);
    const onStorage = (event: StorageEvent) => { if (event.key === 'costello-notes-theme' || event.key === null) sync(); };
    window.addEventListener('storage', onStorage);
    return () => { system.removeEventListener('change', sync); window.removeEventListener('storage', onStorage); };
  }, []);

  const toggle = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    setDark(next === 'dark');
    try { localStorage.setItem('costello-notes-theme', next); } catch { /* Keep the in-memory selection. */ }
  };
  return <button className="theme-toggle" onClick={toggle} aria-label={dark ? 'ライトモードに切り替える' : 'ダークモードに切り替える'} title={dark ? 'ライトモード' : 'ダークモード'}>
    {dark ? <Sun size={20} strokeWidth={1.7} aria-hidden="true" /> : <Moon size={20} strokeWidth={1.7} aria-hidden="true" />}
  </button>;
}
