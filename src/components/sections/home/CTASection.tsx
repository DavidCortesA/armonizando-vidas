import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Users, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import RevealOnScroll from '../../common/RevealOnScroll';
import { PATHS } from '../../../routes/paths';

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <RevealOnScroll direction="left">
            <motion.div whileHover={{ scale: 1.015 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="relative rounded-3xl overflow-hidden p-8 sm:p-10" style={{ background: 'linear-gradient(135deg, #081630 0%, #0A1F44 100%)' }}>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[rgba(51,255,0,0.08)] blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[rgba(255,0,204,0.06)] blur-2xl" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(51,255,0,0.12)] flex items-center justify-center mb-6">
                  <Heart size={24} className="text-[#33FF00]" />
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-3">
                  {t('cta.donate.title')}{' '}
                  <span className="gradient-text-lime">{t('cta.donate.titleAccent')}</span>
                </h3>
                <p className="text-white/60 text-base leading-relaxed mb-8">{t('cta.donate.subtitle')}</p>
                <Link to={PATHS.DONATE} className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#33FF00] text-[#0A1F44] font-bold text-sm hover:bg-[#2ae600] transition-all duration-200 hover:scale-105 shadow-[0_0_20px_rgba(51,255,0,0.25)]">
                  <Heart size={16} />
                  {t('cta.donate.btn')}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <motion.div whileHover={{ scale: 1.015 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="relative rounded-3xl overflow-hidden p-8 sm:p-10" style={{ background: 'linear-gradient(135deg, #0D0D1A 0%, #1E0A3C 50%, #1D4ED8 100%)' }}>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[rgba(167,139,250,0.1)] blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[rgba(252,211,77,0.06)] blur-2xl" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(167,139,250,0.15)] flex items-center justify-center mb-6">
                  <Users size={24} className="text-[#A78BFA]" />
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-3">
                  {t('cta.volunteer.title')}{' '}
                  <span className="gradient-text-gold">{t('cta.volunteer.titleAccent')}</span>
                </h3>
                <p className="text-white/60 text-base leading-relaxed mb-8">{t('cta.volunteer.subtitle')}</p>
                <Link to={PATHS.VOLUNTEER} className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FCD34D] text-[#0D0D1A] font-bold text-sm hover:bg-[#F59E0B] transition-all duration-200 hover:scale-105">
                  <Users size={16} />
                  {t('cta.volunteer.btn')}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
