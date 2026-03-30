import { useTranslation } from 'react-i18next';

export default function Nav() {
  const { t } = useTranslation();

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

        <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-md font-headline font-bold text-sm transition-all active:scale-95 shadow-lg shadow-primary/10">
          {t('nav.becomeMember')}
        </button>
      </div>
    </nav>
  );
}
