import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Play, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionBadge from '../../common/SectionBadge';
import { PATHS } from '../../../routes/paths';

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language.startsWith('en');
  const titleLead = isEnglish ? 'Transforming' : 'Transformando';
  const titleAccent = isEnglish ? 'lives,' : 'vidas,';
  const titleScript = isEnglish ? 'building' : 'construyendo';
  const titleEnd = isEnglish ? 'communities' : 'comunidades';
  const connector = isEnglish ? 'and' : 'y la';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-main" style={{ background: 'linear-gradient(135deg, #081630 0%, #0A1F44 40%, #0d2a5e 70%, #0A1F44 100%)' }} />
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")` }}
      />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)`, backgroundSize: '64px 64px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="flex justify-center mb-6">
          <SectionBadge color="lime">{t('hero.badge')}</SectionBadge>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          <span style={{ WebkitTextFillColor: '#FFFFFF' }}>{titleLead}</span>{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text-lime">{titleAccent}</span>
          <br />
          <span className="font-display italic text-4xl sm:text-5xl lg:text-7xl text-white/90" style={{ WebkitTextFillColor: 'rgba(255,255,255,0.9)' }}>
            {titleScript}
          </span>
          <br className="hidden sm:block" />
          <span className="text-white" style={{ WebkitTextFillColor: '#FFFFFF' }}> {titleEnd}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl mx-auto text-lg sm:text-xl text-white/65 leading-relaxed mb-10">
          {t('hero.subtitleStart')}{' '}
          <span className="text-[#F59E0B] font-medium">{t('hero.food')}</span> {connector}{' '}
          <span className="text-[#A78BFA] font-medium">{t('hero.music')}</span> {t('hero.subtitleEnd')}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={PATHS.DONATE} className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#33FF00] text-[#0A1F44] font-bold text-base hover:bg-[#2ae600] transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(51,255,0,0.3)]">
            <Heart size={18} />
            {t('hero.ctaDonate')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to={PATHS.ABOUT} className="group flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/8 transition-all duration-200">
            <Play size={16} className="text-[#33FF00]" />
            {t('hero.ctaLearn')}
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {[
            { value: '500+', label: t('hero.stats.families'), color: '#F59E0B' },
            { value: '12T', label: t('hero.stats.food'), color: '#33FF00' },
            { value: '150+', label: t('hero.stats.musicians'), color: '#A78BFA' },
            { value: '5+', label: t('hero.stats.years'), color: '#FF00CC' },
          ].map(({ value, label, color }) => (
            <div key={label} className="bg-[rgba(255,255,255,0.04)] px-6 py-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color }}>{value}</div>
              <div className="text-xs text-white/50 font-medium">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
