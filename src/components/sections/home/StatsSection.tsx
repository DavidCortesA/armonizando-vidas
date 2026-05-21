import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import AnimatedCounter from '../../common/AnimatedCounter';
import RevealOnScroll from '../../common/RevealOnScroll';
import SectionBadge from '../../common/SectionBadge';

const stats = [
  { value: 500, suffix: '+', label: 'families', sublabel: 'familiesSub', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)' },
  { value: 12, suffix: 'T', label: 'food', sublabel: 'foodSub', color: '#33FF00', bg: 'rgba(51,255,0,0.08)' },
  { value: 150, suffix: '+', label: 'musicians', sublabel: 'musiciansSub', color: '#A78BFA', bg: 'rgba(167,139,250,0.08)' },
  { value: 5, suffix: '+', label: 'years', sublabel: 'yearsSub', color: '#FF00CC', bg: 'rgba(255,0,204,0.08)' },
  { value: 10, suffix: '', label: 'communities', sublabel: 'communitiesSub', color: '#38BDF8', bg: 'rgba(56,189,248,0.08)' },
  { value: 6, suffix: '', label: 'ensembles', sublabel: 'ensemblesSub', color: '#FB923C', bg: 'rgba(251,146,60,0.08)' },
];

export default function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(135deg, #081630 0%, #0A1F44 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(51,255,0,0.3)] to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[rgba(51,255,0,0.04)] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[rgba(255,0,204,0.04)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <RevealOnScroll>
            <SectionBadge color="lime" className="mb-4">{t('stats.badge')}</SectionBadge>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              {t('stats.title')}{' '}
              <span className="gradient-text-lime">{t('stats.titleAccent')}</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="max-w-xl mx-auto text-white/60 text-lg">{t('stats.subtitle')}</p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map(({ value, suffix, label, sublabel, color, bg }, i) => (
            <RevealOnScroll key={label} delay={i * 0.08} direction="up">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="relative rounded-2xl p-6 sm:p-8 border border-white/6 overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="absolute inset-0 opacity-50 rounded-2xl" style={{ background: bg }} />
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl font-extrabold mb-1 tabular-nums" style={{ color }}>
                    <AnimatedCounter to={value} suffix={suffix} />
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base mb-1">{t(`stats.${label}`)}</div>
                  <div className="text-white/45 text-xs">{t(`stats.${sublabel}`)}</div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
