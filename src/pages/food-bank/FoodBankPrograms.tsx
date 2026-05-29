import { motion } from 'motion/react';
import { ShoppingBasket, Home, Salad, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/common/SEOHead';
import RevealOnScroll from '../../components/common/RevealOnScroll';
import SectionBadge from '../../components/common/SectionBadge';
import ImageStoryBand from '../../components/common/ImageStoryBand';

const programIcons = [Home, Salad, Package, ShoppingBasket];
const programColors = ['#F59E0B', '#EA580C', '#D97706', '#92400E'];

export default function FoodBankPrograms() {
  const { t } = useTranslation();

  const programs = t('foodBankPrograms.list', { returnObjects: true }) as Array<{ title: string; desc: string; tags: string[] }>;

  return (
    <>
      <SEOHead
        title={t('foodBankPrograms.seo.title')}
        description={t('foodBankPrograms.seo.description')}
      />

      {/* HERO */}
      <section className="relative py-24 overflow-hidden pt-28" style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #C2410C 60%, #D97706 100%)' }}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="fire" className="mb-5">{t('foodBankPrograms.hero.badge')}</SectionBadge>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              {t('foodBankPrograms.hero.title')}{' '}
              <span style={{ background: 'linear-gradient(90deg, #FEF3C7, #FCD34D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {t('foodBankPrograms.hero.titleAccent')}
              </span>
            </h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              {t('foodBankPrograms.hero.subtitle')}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFBF5] to-transparent" />
      </section>

      <ImageStoryBand
        badge={t('foodBankPrograms.storyBand.badge')}
        title={t('foodBankPrograms.storyBand.title')}
        accent={t('foodBankPrograms.storyBand.accent')}
        description={t('foodBankPrograms.storyBand.description')}
        image="https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=1200&q=80"
        imageAlt={t('foodBankPrograms.storyBand.imageAlt')}
        tone="food"
        reverse
        items={t('foodBankPrograms.storyBand.items', { returnObjects: true }) as string[]}
      />

      {/* PROGRAMS */}
      <section className="section-padding bg-[#FFFBF5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {programs.map(({ title, desc, tags }, i) => {
              const Icon = programIcons[i];
              const color = programColors[i];
              return (
                <RevealOnScroll key={title} delay={i * 0.1} direction="up">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border hover-lift flex flex-col sm:flex-row gap-6" style={{ borderColor: `${color}25` }}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
                      <Icon size={28} style={{ color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-[#78350F] mb-2">{title}</h3>
                      <p className="text-[#92400E]/70 leading-relaxed mb-4">{desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ background: `${color}15`, color }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
