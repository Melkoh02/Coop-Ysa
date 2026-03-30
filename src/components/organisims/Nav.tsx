import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
];

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const current = LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <div className="text-2xl font-bold tracking-tighter text-emerald-900 font-headline">
          Ysateños
        </div>

        <div className="hidden md:flex items-center space-x-8 font-headline font-semibold text-sm tracking-tight">
          <a
            className="text-emerald-700 border-b-2 border-emerald-700 pb-1"
            href="#">
            {t('nav.home')}
          </a>
          <a
            className="text-slate-600 hover:text-emerald-800 transition-colors"
            href="#nosotros">
            {t('nav.aboutUs')}
          </a>
          <a
            className="text-slate-600 hover:text-emerald-800 transition-colors"
            href="#servicios">
            {t('nav.services')}
          </a>
          <a
            className="text-slate-600 hover:text-emerald-800 transition-colors"
            href="#contacto">
            {t('nav.contact')}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {/* Language selector */}
          <div ref={ref} className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 px-3 py-2 text-sm font-headline font-semibold text-slate-600 hover:text-emerald-800 transition-colors"
            >
              <span className="material-symbols-outlined text-base">language</span>
              {current.label}
              <span className="material-symbols-outlined text-base">
                {open ? 'expand_less' : 'expand_more'}
              </span>
            </button>

            {open && (
              <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-lg border border-outline-variant/30 overflow-hidden min-w-[100px]">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-sm font-headline font-semibold text-left transition-colors ${
                      lang.code === i18n.language
                        ? 'text-primary bg-primary-fixed/30'
                        : 'text-slate-600 hover:bg-surface-container-low hover:text-emerald-800'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-md font-headline font-bold text-sm transition-all active:scale-95 shadow-lg shadow-primary/10">
            {t('nav.becomeMember')}
          </button>
        </div>
      </div>
    </nav>
  );
}
