import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, MessageCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../routes/paths';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #081630 0%, #0A1F44 100%)' }} />

      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[rgba(51,255,0,0.05)] blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-[rgba(255,0,204,0.04)] blur-3xl" />
        <div className="absolute top-1/2 left-10 w-48 h-48 rounded-full bg-[rgba(0,255,179,0.04)] blur-2xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 404 number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[10rem] sm:text-[14rem] font-extrabold leading-none mb-2 select-none gradient-text-lime"
          >
            404
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(51,255,0,0.1)] border border-[rgba(51,255,0,0.2)] text-[#33FF00] text-xs font-semibold tracking-widest uppercase mb-6"
          >
            {t('notFound.badge')}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight"
          >
            {t('notFound.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-10"
          >
            {t('notFound.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to={PATHS.HOME}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#33FF00] text-[#0A1F44] font-bold hover:bg-[#2ae600] transition-all hover:scale-105 shadow-[0_0_24px_rgba(51,255,0,0.2)]"
            >
              <Home size={18} />
              {t('notFound.ctaHome')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={PATHS.CONTACT}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/8 transition-all"
            >
              <MessageCircle size={18} />
              {t('notFound.ctaContact')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider + quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 pt-8 border-t border-white/8"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest mb-5">{t('notFound.linksLabel')}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: PATHS.ABOUT, label: t('nav.about') },
              { to: PATHS.FOOD_BANK, label: t('nav.foodBank') },
              { to: PATHS.ORCHESTRA, label: t('nav.orchestra') },
              { to: PATHS.DONATE, label: t('nav.donate') },
              { to: PATHS.VOLUNTEER, label: t('nav.volunteer') },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/8 text-white/50 text-sm font-medium hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
