import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import RevealOnScroll from '../../common/RevealOnScroll';
import SectionBadge from '../../common/SectionBadge';

const testimonialsMeta = [
  { avatar: 'MG', accentColor: '#F59E0B' },
  { avatar: 'RH', accentColor: '#A78BFA' },
  { avatar: 'SM', accentColor: '#33FF00' },
  { avatar: 'CR', accentColor: '#38BDF8' },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();

  const items = t('testimonials.items', { returnObjects: true }) as Array<{ quote: string; name: string; role: string }>;
  const testimonials = items.map((item, i) => ({ ...testimonialsMeta[i], ...item }));

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <RevealOnScroll>
            <SectionBadge color="lime" className="mb-4">{t('testimonials.badge')}</SectionBadge>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1F44]">
              {t('testimonials.title')} <span className="gradient-text-lime">{t('testimonials.accent')}</span>
            </h2>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="relative bg-[#F8F9FC] rounded-3xl p-8 sm:p-12 border border-[#E2E8F0]">
            <Quote size={48} className="absolute top-6 right-8 opacity-6 text-[#0A1F44]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="w-12 h-1 rounded-full mb-8"
                  style={{ background: current.accentColor }}
                />

                <blockquote className="text-xl sm:text-2xl text-[#0A1F44] font-medium leading-relaxed mb-8 italic">
                  "{current.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: current.accentColor }}
                  >
                    {current.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#0A1F44]">{current.name}</div>
                    <div className="text-sm text-[#64748B]">{current.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? 24 : 8,
                      background: i === active ? testimonials[i].accentColor : '#CBD5E1',
                    }}
                    aria-label={`${t('testimonials.dotLabel')} ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                {[{ icon: ChevronLeft, fn: prev }, { icon: ChevronRight, fn: next }].map(({ icon: Icon, fn }, i) => (
                  <button
                    key={i}
                    onClick={fn}
                    className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0A1F44] hover:border-[#0A1F44] transition-all duration-200"
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
