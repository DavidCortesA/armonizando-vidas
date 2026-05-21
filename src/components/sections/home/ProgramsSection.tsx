import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBasket, Music } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import RevealOnScroll from '../../common/RevealOnScroll';
import SectionBadge from '../../common/SectionBadge';
import { PATHS } from '../../../routes/paths';

const programs = [
  {
    key: 'foodBank',
    icon: ShoppingBasket,
    path: PATHS.FOOD_BANK,
    values: ['500+', '12T', '10'],
    gradient: 'linear-gradient(135deg, #7C2D12 0%, #C2410C 60%, #D97706 100%)',
    lightBg: '#FEF3C7',
    textColor: '#92400E',
    tagStyle: 'bg-[rgba(245,158,11,0.15)] text-[#D97706]',
    img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
  },
  {
    key: 'orchestra',
    icon: Music,
    path: PATHS.ORCHESTRA,
    values: ['150+', '6', '8'],
    gradient: 'linear-gradient(135deg, #0D0D1A 0%, #1E0A3C 50%, #1D4ED8 100%)',
    lightBg: '#EDE9FE',
    textColor: '#4C1D95',
    tagStyle: 'bg-[rgba(109,40,217,0.12)] text-[#7C3AED]',
    img: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
  },
];

export default function ProgramsSection() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <RevealOnScroll>
            <SectionBadge color="lime" className="mb-4">{t('programs.badge')}</SectionBadge>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1F44] mb-4">
              {t('programs.title')}{' '}
              <span className="gradient-text-lime">{t('programs.titleAccent')}</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#475569] text-lg leading-relaxed">{t('programs.subtitle')}</p>
          </RevealOnScroll>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((prog, i) => {
            const statLabels = t(`programs.${prog.key}.stats`, { returnObjects: true }) as string[];
            const Icon = prog.icon;

            return (
              <RevealOnScroll key={prog.key} delay={i * 0.15} direction="up">
                <div className="group relative rounded-3xl overflow-hidden bg-white border border-[#E2E8F0] hover-lift shadow-sm">
                  <div className="relative h-56 overflow-hidden">
                    <img src={prog.img} alt={t(`programs.${prog.key}.title`)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 opacity-70" style={{ background: prog.gradient }} />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${prog.tagStyle} bg-white/90`}>
                        <Icon size={12} />
                        {t(`programs.${prog.key}.tag`)}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-extrabold text-white">{t(`programs.${prog.key}.title`)}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-[#475569] text-sm leading-relaxed mb-6">{t(`programs.${prog.key}.description`)}</p>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {prog.values.map((value, index) => (
                        <div key={statLabels[index]} className="text-center p-3 rounded-xl" style={{ background: prog.lightBg }}>
                          <div className="text-xl font-extrabold" style={{ color: prog.textColor }}>{value}</div>
                          <div className="text-xs mt-0.5" style={{ color: prog.textColor, opacity: 0.7 }}>{statLabels[index]}</div>
                        </div>
                      ))}
                    </div>
                    <Link to={prog.path} className="group/btn flex items-center justify-between w-full px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200" style={{ background: prog.gradient, color: '#FFFFFF' }}>
                      <span>{t(`programs.${prog.key}.cta`)}</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
