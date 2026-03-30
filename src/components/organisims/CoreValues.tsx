import { useTranslation } from 'react-i18next';

function ValueCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border-b-4 border-primary/20">
      <div className="w-14 h-14 bg-primary-fixed text-on-primary-fixed rounded-full flex items-center justify-center mb-8">
        <span
          className="material-symbols-outlined filled"
        >
          {icon}
        </span>
      </div>
      <h3 className="text-2xl font-headline font-bold mb-4 text-primary">
        {title}
      </h3>
      <p className="text-on-surface-variant leading-relaxed">{text}</p>
    </div>
  );
}

export default function CoreValues() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-surface-container-low px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon="groups"
            title={t('values.solidarityTitle')}
            text={t('values.solidarityText')}
          />
          <ValueCard
            icon="precision_manufacturing"
            title={t('values.productionTitle')}
            text={t('values.productionText')}
          />
          <ValueCard
            icon="school"
            title={t('values.educationTitle')}
            text={t('values.educationText')}
          />
        </div>
      </div>
    </section>
  );
}
