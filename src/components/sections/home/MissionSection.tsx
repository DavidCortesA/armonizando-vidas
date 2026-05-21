import { Shield, Users, Star, Sunrise } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import RevealOnScroll from '../../common/RevealOnScroll';
import SectionBadge from '../../common/SectionBadge';

const valueItems = [
  { icon: Shield, key: 'dignity', color: '#33FF00' },
  { icon: Users, key: 'community', color: '#F59E0B' },
  { icon: Star, key: 'excellence', color: '#A78BFA' },
  { icon: Sunrise, key: 'hope', color: '#FF00CC' },
];

export default function MissionSection() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <RevealOnScroll>
              <SectionBadge color="lime" className="mb-5">{t('mission.badge')}</SectionBadge>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1F44] leading-tight mb-6">
                {t('mission.title')}{' '}
                <span className="gradient-text-lime">{t('mission.titleAccent')}</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="text-[#475569] text-lg leading-relaxed mb-5">{t('mission.text1')}</p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <p className="text-[#475569] text-lg leading-relaxed">{t('mission.text2')}</p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {valueItems.map(({ icon: Icon, key, color }, i) => (
              <RevealOnScroll key={key} delay={i * 0.1} direction="up">
                <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover-lift h-full">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${color}18` }}>
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3 className="font-bold text-[#0A1F44] text-base mb-2">{t(`mission.values.${key}.title`)}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{t(`mission.values.${key}.desc`)}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
