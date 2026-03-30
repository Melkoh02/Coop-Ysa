import { useTranslation } from 'react-i18next';

export default function TrustBanner() {
  const { t } = useTranslation();

  return (
    <section className="bg-primary-container py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-headline font-bold text-white mb-2">
            {t('trustBanner.title')}
          </h2>
          <p className="text-on-primary-container text-lg">
            {t('trustBanner.subtitle')}
          </p>
        </div>
        <button className="bg-white text-primary px-10 py-4 rounded-md font-headline font-bold text-lg hover:bg-emerald-50 transition-all active:scale-95 shadow-xl">
          {t('trustBanner.cta')}
        </button>
      </div>
    </section>
  );
}
