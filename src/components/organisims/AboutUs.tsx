import { Trans, useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section className="py-32 overflow-hidden" id="nosotros">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full -z-10" />
            <img
              alt={t('about.label')}
              className="rounded-2xl shadow-2xl object-cover aspect-square lg:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJYbiw3rqyWJ2RZWZLvL2sCdqo38nE8sagYNm5_fRwlOJU0WYn8QH4Y64vrEYzz1ZqbVseirP5k77y3cxtoc08Zc0_HSgJ59qNrELq6k9Xu1rwUv1Jr0Cx5vyL9or3ogVLmm7gdXuDjgsVj0qEDV22R7epOsEu0FuNdv516KUe5R0A1ycZIEiMdoeg6d-ZvJ2lMzdDv7YXFho4eXY8yiH4bQvZq7EXEYXNZBxB_AaBCrpgQIv-55hE1Vg2HKgePxc5FxyLq0G0fO3M"
            />
          </div>

          <div className="lg:w-1/2">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              {t('about.label')}
            </h4>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-8 leading-tight">
              {t('about.title')}
            </h2>

            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
                <Trans i18nKey="about.description1" components={{ strong: <strong /> }} />
              </p>
              <p>{t('about.description2')}</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-headline font-bold text-primary mb-1">
                  {t('about.yearsValue')}
                </div>
                <div className="text-sm font-label uppercase tracking-wider text-outline">
                  {t('about.yearsLabel')}
                </div>
              </div>
              <div>
                <div className="text-3xl font-headline font-bold text-primary mb-1">
                  {t('about.membersValue')}
                </div>
                <div className="text-sm font-label uppercase tracking-wider text-outline">
                  {t('about.membersLabel')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
