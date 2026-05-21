import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import RevealOnScroll from '../../common/RevealOnScroll';
import SectionBadge from '../../common/SectionBadge';

const testimonials = [
  {
    quote: 'Gracias al Banco de Alimentos, mi familia pudo superar un período muy difícil. No solo recibimos alimento, sino también esperanza y dignidad.',
    name: 'María González',
    role: 'Beneficiaria, Banco de Alimentos',
    avatar: 'MG',
    program: 'foodBank',
    accentColor: '#F59E0B',
  },
  {
    quote: 'Mi hijo entró al programa de Orquestas del Rey a los 9 años. Hoy, a los 14, toca el violín con una disciplina y pasión que jamás imaginé. El programa cambió su vida.',
    name: 'Roberto Herrera',
    role: 'Padre de músico, Orquestas del Rey',
    avatar: 'RH',
    program: 'orchestra',
    accentColor: '#A78BFA',
  },
  {
    quote: 'Ser voluntario en Armonizando Vidas me enseñó más sobre la vida de lo que cualquier clase podría. Ver el impacto directo de tu trabajo es transformador.',
    name: 'Sofía Martínez',
    role: 'Voluntaria desde 2022',
    avatar: 'SM',
    program: 'main',
    accentColor: '#33FF00',
  },
  {
    quote: 'Como empresa, decidimos apoyar a Armonizando Vidas porque vimos de cerca su impacto real. Son transparentes, profesionales y genuinamente comprometidos.',
    name: 'Carlos Ramírez',
    role: 'Director, Empresa Patrocinadora',
    avatar: 'CR',
    program: 'main',
    accentColor: '#38BDF8',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <RevealOnScroll>
            <SectionBadge color="lime" className="mb-4">Historias Reales</SectionBadge>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1F44]">
              Lo que dicen las <span className="gradient-text-lime">familias</span>
            </h2>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="relative bg-[#F8F9FC] rounded-3xl p-8 sm:p-12 border border-[#E2E8F0]">
            {/* Big quote */}
            <Quote size={48} className="absolute top-6 right-8 opacity-6 text-[#0A1F44]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Accent line */}
                <div
                  className="w-12 h-1 rounded-full mb-8"
                  style={{ background: t.accentColor }}
                />

                <blockquote className="text-xl sm:text-2xl text-[#0A1F44] font-medium leading-relaxed mb-8 italic">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: t.accentColor }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#0A1F44]">{t.name}</div>
                    <div className="text-sm text-[#64748B]">{t.role}</div>
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
                    aria-label={`Testimonio ${i + 1}`}
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

