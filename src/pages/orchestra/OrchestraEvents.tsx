import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/common/SEOHead';
import RevealOnScroll from '../../components/common/RevealOnScroll';
import SectionBadge from '../../components/common/SectionBadge';
import ImageStoryBand from '../../components/common/ImageStoryBand';
import { PATHS } from '../../routes/paths';

const eventColors = ['#A78BFA', '#FCD34D', '#DB2777', '#38BDF8'];

export default function OrchestraEvents() {
  const { t } = useTranslation();

  const events = t('orchestraEvents.events', { returnObjects: true }) as Array<{
    date: { day: string; month: string; year: string };
    title: string;
    venue: string;
    time: string;
    type: string;
    desc: string;
    free: boolean;
  }>;

  return (
    <>
      <SEOHead
        title={t('orchestraEvents.seo.title')}
        description={t('orchestraEvents.seo.description')}
      />

      {/* HERO */}
      <section className="relative py-24 pt-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D0D1A 0%, #1E0A3C 50%, #1D4ED8 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-[rgba(109,40,217,0.1)] blur-3xl" />
          <div className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-[rgba(252,211,77,0.06)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="purple" className="mb-5">{t('nav.orchestra')}</SectionBadge>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              {t('orchestraEvents.hero.title')} <span className="gradient-text-gold">{t('orchestraEvents.hero.titleAccent')}</span>
            </h1>
            <p className="text-white/65 text-xl">{t('orchestraEvents.hero.subtitle')}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to top, #0D0D1A, transparent)' }} />
      </section>

      <ImageStoryBand
        badge={t('orchestraEvents.storyBand.badge')}
        title={t('orchestraEvents.storyBand.title')}
        accent={t('orchestraEvents.storyBand.accent')}
        description={t('orchestraEvents.storyBand.description')}
        image="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200&q=80"
        imageAlt={t('orchestraEvents.storyBand.imageAlt')}
        tone="orchestra"
        reverse
        items={t('orchestraEvents.storyBand.items', { returnObjects: true }) as string[]}
      />

      {/* EVENTS */}
      <section className="section-padding" style={{ background: '#0D0D1A' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {events.map(({ date, title, venue, time, type, desc, free }, i) => {
              const color = eventColors[i] || '#A78BFA';
              return (
                <RevealOnScroll key={title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="glass-purple rounded-2xl p-6 flex flex-col sm:flex-row gap-5 border border-white/6"
                  >
                    {/* Date */}
                    <div
                      className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center"
                      style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold leading-none" style={{ color }}>{date.day}</div>
                      <div className="text-xs font-semibold text-white/60 mt-0.5">{date.month}</div>
                      <div className="text-xs text-white/40">{date.year}</div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 items-center mb-2">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: `${color}18`, color }}>
                          {type}
                        </span>
                        {free && (
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[rgba(51,255,0,0.12)] text-[#33FF00]">
                            {t('orchestraEvents.freeEntry')}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-extrabold text-white mb-2">{title}</h3>
                      <p className="text-white/55 text-sm mb-3 leading-relaxed">{desc}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-white/45">
                        <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#A78BFA]" />{venue}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#FCD34D]" />{time}</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#FCD34D] border border-[rgba(252,211,77,0.2)] hover:bg-[rgba(252,211,77,0.08)] transition-colors">
                        <Calendar size={13} />
                        {t('orchestraEvents.schedule')}
                      </button>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              );
            })}
          </div>

          <RevealOnScroll className="text-center mt-12">
            <p className="text-white/50 text-sm mb-4">{t('orchestraEvents.ctaText')}</p>
            <Link
              to={PATHS.CONTACT}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FCD34D] text-[#0D0D1A] font-bold text-sm hover:bg-[#F59E0B] transition-all hover:scale-105"
            >
              <Music size={16} />
              {t('orchestraEvents.ctaBtn')}
              <ArrowRight size={14} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
