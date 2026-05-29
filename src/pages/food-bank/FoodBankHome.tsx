import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Heart, ShoppingBasket, Truck, Users, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/common/SEOHead';
import RevealOnScroll from '../../components/common/RevealOnScroll';
import SectionBadge from '../../components/common/SectionBadge';
import AnimatedCounter from '../../components/common/AnimatedCounter';
import ImageStoryBand from '../../components/common/ImageStoryBand';
import { PATHS } from '../../routes/paths';

const stepIcons = [ShoppingBasket, CheckCircle2, Truck, Users];
const stepColors = ['#F59E0B', '#EA580C', '#D97706', '#92400E'];

export default function FoodBankHome() {
  const { t } = useTranslation();

  const steps = t('foodBank.howItWorks.steps', { returnObjects: true }) as Array<{ step: string; title: string; desc: string }>;
  const impactStats = t('foodBank.impact.stats', { returnObjects: true }) as Array<{ value: number; suffix: string; label: string }>;

  return (
    <>
      <SEOHead
        title={t('foodBank.seo.title')}
        description={t('foodBank.seo.description')}
      />

      {/* HERO — Warm */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #C2410C 50%, #D97706 100%)' }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-[rgba(252,211,77,0.12)] blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[rgba(255,255,255,0.06)] blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)`, backgroundSize: '48px 48px' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-36">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <SectionBadge color="fire" className="mb-5">{t('foodBank.hero.badge')}</SectionBadge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                {t('foodBank.hero.title')}
                <br />
                <span className="gradient-text-fire">{t('foodBank.hero.titleAccent')}</span>
              </h1>
              <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-8">
                {t('foodBank.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={PATHS.FOOD_BANK_DONATE}
                  className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FEF3C7] text-[#92400E] font-bold hover:bg-white transition-all hover:scale-105 shadow-lg"
                >
                  <Heart size={18} />
                  {t('foodBank.hero.ctaDonate')}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to={PATHS.FOOD_BANK_PROGRAMS}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  {t('foodBank.hero.ctaPrograms')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-6xl mx-auto px-4 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4 max-w-xl"
            >
              {[
                { value: 500, suffix: '+', labelKey: 'foodBank.hero.stats.families' },
                { value: 12, suffix: 'T', labelKey: 'foodBank.hero.stats.food' },
                { value: 10, suffix: '', labelKey: 'foodBank.hero.stats.communities' },
              ].map(({ value, suffix, labelKey }) => (
                <div key={labelKey} className="text-center p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <div className="text-2xl font-extrabold text-[#FEF3C7]">
                    <AnimatedCounter to={value} suffix={suffix} />
                  </div>
                  <div className="text-xs text-white/70 mt-0.5">{t(labelKey)}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="h-20 bg-gradient-to-t from-[#FFFBF5] to-transparent" />
        </div>
      </section>

      <ImageStoryBand
        badge={t('foodBank.storyBand.badge')}
        title={t('foodBank.storyBand.title')}
        accent={t('foodBank.storyBand.accent')}
        description={t('foodBank.storyBand.description')}
        image="https://images.unsplash.com/photo-1593113616828-6f22bca04804?w=1200&q=80"
        imageAlt={t('foodBank.storyBand.imageAlt')}
        tone="food"
        items={t('foodBank.storyBand.items', { returnObjects: true }) as string[]}
      />

      {/* HOW IT WORKS */}
      <section className="section-padding bg-[#FFFBF5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <RevealOnScroll>
              <SectionBadge color="fire" className="mb-4">{t('foodBank.howItWorks.badge')}</SectionBadge>
              <h2 className="text-4xl font-extrabold text-[#78350F] mt-2">
                {t('foodBank.howItWorks.title')} <span className="gradient-text-fire">{t('foodBank.howItWorks.titleAccent')}</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, title, desc }, i) => {
              const Icon = stepIcons[i];
              const color = stepColors[i];
              return (
                <RevealOnScroll key={step} delay={i * 0.1} direction="up">
                  <div className="relative bg-white rounded-2xl p-6 border border-[rgba(245,158,11,0.2)] hover-lift">
                    <div className="absolute top-4 right-4 text-4xl font-extrabold opacity-8" style={{ color }}>
                      {step}
                    </div>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${color}18` }}>
                      <Icon size={22} style={{ color }} />
                    </div>
                    <h3 className="font-bold text-[#78350F] mb-2">{title}</h3>
                    <p className="text-[#92400E]/70 text-sm leading-relaxed">{desc}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #C2410C 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(254,243,199,0.3)] to-transparent" />
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[rgba(252,211,77,0.08)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <SectionBadge color="fire" className="mb-4">{t('foodBank.impact.badge')}</SectionBadge>
            <h2 className="text-4xl font-extrabold text-white mb-10 mt-2">
              {t('foodBank.impact.title')} <span style={{ background: 'linear-gradient(90deg, #FEF3C7, #FCD34D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t('foodBank.impact.titleAccent')}</span>
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {impactStats.map(({ value, suffix, label }, i) => (
              <RevealOnScroll key={label} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#FEF3C7] mb-1">
                    <AnimatedCounter to={value} suffix={suffix} />
                  </div>
                  <div className="text-xs text-white/60">{label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section className="section-padding bg-[#FEF3C7]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <ShoppingBasket size={40} className="mx-auto mb-4 text-[#EA580C]" />
            <h2 className="text-4xl font-extrabold text-[#78350F] mb-4">
              {t('foodBank.cta.title')}
            </h2>
            <p className="text-[#92400E] text-lg mb-8 max-w-xl mx-auto">
              {t('foodBank.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={PATHS.FOOD_BANK_DONATE}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #C2410C, #D97706)' }}
              >
                <Heart size={18} />
                {t('foodBank.cta.donate')}
              </Link>
              <Link
                to={PATHS.VOLUNTEER}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#92400E] border-2 border-[#EA580C] hover:bg-[#EA580C]/10 transition-all"
              >
                <Users size={18} />
                {t('foodBank.cta.volunteer')}
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
