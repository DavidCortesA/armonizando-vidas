import RevealOnScroll from '../../common/RevealOnScroll';
import SectionBadge from '../../common/SectionBadge';
import { useTranslation } from 'react-i18next';

const partners = [
  'Gobierno de NL', 'CONACULTA', 'DIF Estatal', 'Fundación FEMSA',
  'Banorte', 'ITESM', 'Cáritas', 'Cruz Roja',
];

export default function PartnersSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#F8F9FC] border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <SectionBadge color="lime" className="mb-3">{t('partners.badge')}</SectionBadge>
            <h2 className="text-2xl font-bold text-[#0A1F44] mt-3">
              {t('partners.title')} <span className="gradient-text-lime">{t('partners.accent')}</span>
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map((name) => (
              <div
                key={name}
                className="px-6 py-3 rounded-xl bg-white border border-[#E2E8F0] text-[#0A1F44] text-sm font-semibold hover:border-[#0A1F44]/20 hover:shadow-sm transition-all duration-200"
              >
                {name}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
