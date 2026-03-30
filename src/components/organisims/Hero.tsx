import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative mt-20 min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-emerald-900">
      <div className="absolute inset-0 z-0">
        <img
          alt="People collaborating"
          className="w-full h-full object-cover object-top"
          src="/assets/people_collaborating.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-900/50 to-emerald-900/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl asymmetric-gap">
          <span className="inline-block px-4 py-1.5 bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest uppercase mb-6 rounded-full">
            {t('hero.badge')}
          </span>

          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white mb-8 leading-[1.1] tracking-tighter">
            {t('hero.title1')} <br />
            <span className="text-primary-fixed">{t('hero.title2')}</span>
          </h1>

          <p className="text-lg text-emerald-50/80 mb-10 max-w-lg leading-relaxed font-body">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-md font-headline font-bold text-lg hover:bg-white transition-all active:scale-95">
              {t('hero.cta')}
            </button>
            <button className="border border-white/30 text-white backdrop-blur-md px-8 py-4 rounded-md font-headline font-bold text-lg hover:bg-white/10 transition-all">
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
