import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import RevealOnScroll from '../../components/common/RevealOnScroll';
import SectionBadge from '../../components/common/SectionBadge';
import ImageStoryBand from '../../components/common/ImageStoryBand';
import { PATHS } from '../../routes/paths';

const events = [
  {
    date: { day: '14', month: 'Jun', year: '2026' },
    title: 'Gran Concierto de Primavera',
    venue: 'Auditorio San Pedro, Nuevo León',
    time: '19:00 hrs',
    type: 'Concierto',
    desc: 'Presentación de todos los ensambles de Orquestas del Rey en un espectáculo de música clásica y contemporánea.',
    color: '#A78BFA',
    free: true,
  },
  {
    date: { day: '28', month: 'Jun', year: '2026' },
    title: 'Serenata Comunitaria',
    venue: 'Plaza Pública, Col. Vista Hermosa',
    time: '11:00 hrs',
    type: 'Evento Social',
    desc: 'Concierto gratuito al aire libre para la comunidad, con música de cuerdas y vientos.',
    color: '#FCD34D',
    free: true,
  },
  {
    date: { day: '12', month: 'Jul', year: '2026' },
    title: 'Masterclass con Orquesta Invitada',
    venue: 'Centro Cultural, Monterrey',
    time: '09:00 hrs',
    type: 'Taller',
    desc: 'Masterclass intensiva con músicos profesionales de orquesta invitada. Solo para músicos del programa.',
    color: '#DB2777',
    free: false,
  },
  {
    date: { day: '20', month: 'Sep', year: '2026' },
    title: 'Concierto de Fin de Temporada',
    venue: 'Teatro del ITESM, Monterrey',
    time: '18:30 hrs',
    type: 'Concierto',
    desc: 'El concierto más importante del año, cierre de temporada con la presentación de nuevos talentos.',
    color: '#38BDF8',
    free: true,
  },
];

export default function OrchestraEvents() {
  return (
    <>
      <SEOHead
        title="Eventos — Orquestas del Rey"
        description="Próximos conciertos y eventos de Orquestas del Rey, Armonizando Vidas A.B.P."
      />

      {/* HERO */}
      <section className="relative py-24 pt-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D0D1A 0%, #1E0A3C 50%, #1D4ED8 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-[rgba(109,40,217,0.1)] blur-3xl" />
          <div className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-[rgba(252,211,77,0.06)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="purple" className="mb-5">Orquestas del Rey</SectionBadge>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Próximos <span className="gradient-text-gold">eventos</span>
            </h1>
            <p className="text-white/65 text-xl">Conciertos, masterclasses y presentaciones especiales.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to top, #0D0D1A, transparent)' }} />
      </section>

      <ImageStoryBand
        badge="Vivir la música"
        title="Cada concierto es una"
        accent="meta compartida"
        description="Los eventos son el punto donde el esfuerzo del aula se encuentra con la comunidad. Familias, maestros, voluntarios y alumnos celebran juntos un proceso que toma meses de práctica."
        image="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200&q=80"
        imageAlt="Presentación musical en vivo con público"
        tone="orchestra"
        reverse
        items={[
          'Los conciertos gratuitos acercan la música a personas que normalmente no tienen acceso.',
          'Las masterclasses conectan a los estudiantes con músicos y experiencias profesionales.',
          'Cada presentación ayuda a formar seguridad escénica, disciplina y sentido de equipo.',
        ]}
      />

      {/* EVENTS */}
      <section className="section-padding" style={{ background: '#0D0D1A' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {events.map(({ date, title, venue, time, type, desc, color, free }, i) => (
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
                          Entrada libre
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
                      Agendar
                    </button>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="text-center mt-12">
            <p className="text-white/50 text-sm mb-4">¿Quieres que tu hijo forme parte de la orquesta?</p>
            <Link
              to={PATHS.CONTACT}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FCD34D] text-[#0D0D1A] font-bold text-sm hover:bg-[#F59E0B] transition-all hover:scale-105"
            >
              <Music size={16} />
              Conocer el proceso de admisión
              <ArrowRight size={14} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

