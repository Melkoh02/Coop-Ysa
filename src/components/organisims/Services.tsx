import { useTranslation } from 'react-i18next';

function ServiceCard({
  icon,
  title,
  text,
  items,
  cta,
}: {
  icon: string;
  title: string;
  text: string;
  items: string[];
  cta: string;
}) {
  return (
    <div className="group relative bg-white p-1 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-white p-8 rounded-xl h-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
        <div className="w-12 h-12 mb-8 bg-surface-container-low rounded-lg flex items-center justify-center text-primary group-hover:bg-primary-fixed group-hover:text-on-primary-fixed transition-colors">
          <span className="material-symbols-outlined filled">{icon}</span>
        </div>

        <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
          {title}
        </h3>
        <p className="text-on-surface-variant mb-6">{text}</p>

        <ul className="space-y-3 mb-8 text-sm font-medium text-outline">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary">
                check_circle
              </span>
              {item}
            </li>
          ))}
        </ul>

        <a
          className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all"
          href="#">
          {cta}{' '}
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-surface px-6" id="servicios">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-headline font-extrabold text-primary mb-4">
            {t('services.title')}
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon="savings"
            title={t('services.savingsTitle')}
            text={t('services.savingsText')}
            items={[
              t('services.savingsItem1'),
              t('services.savingsItem2'),
              t('services.savingsItem3'),
            ]}
            cta={t('services.savingsCta')}
          />
          <ServiceCard
            icon="payments"
            title={t('services.creditTitle')}
            text={t('services.creditText')}
            items={[
              t('services.creditItem1'),
              t('services.creditItem2'),
              t('services.creditItem3'),
            ]}
            cta={t('services.creditCta')}
          />
          <ServiceCard
            icon="sports_soccer"
            title={t('services.sportsTitle')}
            text={t('services.sportsText')}
            items={[
              t('services.sportsItem1'),
              t('services.sportsItem2'),
              t('services.sportsItem3'),
            ]}
            cta={t('services.sportsCta')}
          />
        </div>
      </div>
    </section>
  );
}
