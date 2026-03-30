import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="People collaborating"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0hX4cFz5hIz5VVAY1HW-VMKlFz_flZ2K2jnhNweRGJH_1VsxdM6sHvOfL4O5vK0YnFJ2UKhGI8F5JuPlLVg0QS1hJEktu9nQ-l-NKa67LyBNEesCKEEH4qPxSm9IXw5zd0Q3J65sgPNGrp6SwlP68IULkXXROx5FZ4xw8V6CH-omS_XMsyvrlZ4euzBuZxudSKWflhFdzUjZgXYQgDDowiLJicJUxxBIMXrfHRNxp6v05LrRSxDyvULrBNpUyXXgAwtBLR71zCirA"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/60 to-transparent" />
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
