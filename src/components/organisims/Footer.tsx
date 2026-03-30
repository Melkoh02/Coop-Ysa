import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="bg-emerald-950 w-full py-16 px-8 mt-20"
      id="contacto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="text-xl font-headline font-bold text-white mb-6">
            Ysateños
          </div>
          <p className="text-emerald-200/60 text-sm leading-relaxed mb-6">
            {t('footer.description')}
          </p>
          <div className="flex space-x-4">
            <a
              className="text-white hover:text-emerald-500 transition-colors"
              href="#">
              <span className="material-symbols-outlined">
                social_leaderboard
              </span>
            </a>
            <a
              className="text-white hover:text-emerald-500 transition-colors"
              href="#">
              <span className="material-symbols-outlined">language</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-emerald-500 text-xs uppercase tracking-widest mb-6">
            {t('footer.quickLinks')}
          </h4>
          <ul className="space-y-4 text-emerald-200/60 text-sm">
            <li>
              <a
                className="hover:text-white hover:underline decoration-emerald-500/50 underline-offset-4 transition-all"
                href="#">
                {t('nav.home')}
              </a>
            </li>
            <li>
              <a
                className="hover:text-white hover:underline decoration-emerald-500/50 underline-offset-4 transition-all"
                href="#nosotros">
                {t('nav.aboutUs')}
              </a>
            </li>
            <li>
              <a
                className="hover:text-white hover:underline decoration-emerald-500/50 underline-offset-4 transition-all"
                href="#servicios">
                {t('nav.services')}
              </a>
            </li>
            <li>
              <a
                className="hover:text-white hover:underline decoration-emerald-500/50 underline-offset-4 transition-all"
                href="#">
                {t('footer.faq')}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <h4 className="text-emerald-500 text-xs uppercase tracking-widest mb-6">
            {t('footer.contactTitle')}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-emerald-500">
                  location_on
                </span>
                <p className="text-emerald-200/60 text-sm">
                  {t('footer.address')}
                </p>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-emerald-500">
                  mail
                </span>
                <p className="text-emerald-200/60 text-sm">
                  {t('footer.email')}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-emerald-500">
                  phone
                </span>
                <p className="text-emerald-200/60 text-sm">
                  {t('footer.phone')}
                </p>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-emerald-500">
                  schedule
                </span>
                <p className="text-emerald-200/60 text-sm">
                  {t('footer.schedule')}
                  <br />
                  {t('footer.scheduleSat')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-emerald-900/50 text-center">
        <p className="text-emerald-200/60 text-xs uppercase tracking-widest">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
