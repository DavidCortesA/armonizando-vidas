import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Music, Star, Users, Calendar } from 'lucide-react';
import SEOHead from '../../components/common/SEOHead';
import RevealOnScroll from '../../components/common/RevealOnScroll';
import SectionBadge from '../../components/common/SectionBadge';
import AnimatedCounter from '../../components/common/AnimatedCounter';
import ImageStoryBand from '../../components/common/ImageStoryBand';
import { PATHS } from '../../routes/paths';

const instruments = ['Violín', 'Viola', 'Chelo', 'Contrabajo', 'Flauta', 'Oboe', 'Clarinete', 'Trompeta', 'Trombón', 'Piano', 'Percusión', 'Guitarra'];

const pillars = [
  { icon: Music, title: 'Formación Musical', desc: 'Clases individuales y grupales con maestros certificados que guían a cada alumno en su instrumento.', color: '#A78BFA' },
  { icon: Users, title: 'Trabajo en Equipo', desc: 'La orquesta como metáfora de la vida: cooperación, escucha y respeto mutuo en cada ensayo.', color: '#FCD34D' },
  { icon: Star, title: 'Excelencia Artística', desc: 'Preparamos a músicos para presentaciones profesionales que generan orgullo y autoestima.', color: '#DB2777' },
  { icon: Calendar, title: 'Impacto Comunitario', desc: 'Conciertos gratuitos para la comunidad que democratizan el acceso a la música de alta calidad.', color: '#38BDF8' },
];

export default function OrchestraHome() {
  return (
    <>
      <SEOHead
        title="Orquestas del Rey"
        description="Orquestas del Rey — programa de formación musical de Armonizando Vidas A.B.P. Transformamos vidas a través del arte, la música y la excelencia."
        keywords="orquesta infantil, música, arte, excelencia, niños, jóvenes, conciertos, Nuevo León"
      />

      {/* HERO — Dark elegant */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20" style={{ background: '#0D0D1A' }}>
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #0D0D1A 0%, #1E0A3C 40%, #1D4ED8 100%)' }}
        />
        {/* Orbs */}
        <div className="absolute top-20 left-1/3 w-96 h-96 rounded-full bg-[rgba(109,40,217,0.15)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[rgba(29,78,216,0.15)] blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-48 h-48 rounded-full bg-[rgba(252,211,77,0.06)] blur-2xl pointer-events-none" />

        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 90 + 5}%`,
              opacity: Math.random() * 0.4 + 0.1,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <SectionBadge color="purple" className="mb-5">Programa Cultural</SectionBadge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                El arte que
                <br />
                <span className="gradient-text-gold">transforma</span>
                <br />
                <span className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-white/80">el destino</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                Formamos músicos de excelencia desde la infancia, usando la orquesta como
                herramienta de transformación social, desarrollo humano y esperanza.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={PATHS.ORCHESTRA_EVENTS}
                  className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FCD34D] text-[#0D0D1A] font-bold hover:bg-[#F59E0B] transition-all hover:scale-105 shadow-[0_0_30px_rgba(252,211,77,0.2)]"
                >
                  <Calendar size={18} />
                  Ver próximos eventos
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to={PATHS.ORCHESTRA_GALLERY}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/8 transition-all"
                >
                  <Music size={18} />
                  Galería musical
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-6xl mx-auto px-4 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4 max-w-sm"
            >
              {[
                { value: 150, suffix: '+', label: 'Músicos activos' },
                { value: 6, suffix: '', label: 'Ensambles' },
                { value: 8, suffix: '', label: 'Conciertos/año' },
              ].map(({ value, suffix, label }) => (
                <div key={label} className="text-center p-3 rounded-2xl bg-white/6 backdrop-blur-sm border border-white/8">
                  <div className="text-2xl font-extrabold text-[#FCD34D]">
                    <AnimatedCounter to={value} suffix={suffix} />
                  </div>
                  <div className="text-xs text-white/60 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="h-20" style={{ background: 'linear-gradient(to top, #0D0D1A, transparent)' }} />
        </div>
      </section>

      <ImageStoryBand
        badge="Música como camino"
        title="La orquesta enseña mucho más que"
        accent="notas"
        description="Cada ensayo desarrolla disciplina, escucha, memoria, colaboración y confianza. La música se convierte en un espacio seguro donde niñas, niños y jóvenes aprenden a imaginar otro futuro."
        image="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200&q=80"
        imageAlt="Orquesta juvenil ensayando con instrumentos de cuerda"
        tone="orchestra"
        items={[
          'Las clases combinan técnica individual, práctica grupal y preparación escénica.',
          'Los conciertos fortalecen autoestima y muestran a la comunidad el talento local.',
          'Cada instrumento abre una puerta a hábitos de excelencia y pertenencia.',
        ]}
      />

      {/* PILLARS */}
      <section className="section-padding" style={{ background: '#0D0D1A' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <RevealOnScroll>
              <SectionBadge color="purple" className="mb-4">Metodología</SectionBadge>
              <h2 className="text-4xl font-extrabold text-white mt-2">
                Cuatro pilares de la{' '}
                <span className="gradient-text-gold">transformación</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map(({ icon: Icon, title, desc, color }, i) => (
              <RevealOnScroll key={title} delay={i * 0.1}>
                <div className="glass-purple rounded-2xl p-6 hover-lift group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${color}18` }}>
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUMENTS */}
      <section className="py-12" style={{ background: '#1A1A2E' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-extrabold text-white">
                Instrumentos que <span className="gradient-text-gold">enseñamos</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {instruments.map((inst, i) => (
                <motion.span
                  key={inst}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="px-4 py-2 rounded-full text-sm font-semibold glass-purple text-white/80"
                >
                  {inst}
                </motion.span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1E0A3C 0%, #4C1D95 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <Music size={40} className="mx-auto mb-4 text-[#FCD34D]" />
            <h2 className="text-4xl font-extrabold text-white mb-4">
              La música no es solo arte,{' '}
              <span className="gradient-text-gold">es un camino de vida</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Apoya a los músicos jóvenes de Orquestas del Rey con tu donación o únete como voluntario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={PATHS.DONATE}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FCD34D] text-[#0D0D1A] font-bold hover:bg-[#F59E0B] transition-all hover:scale-105 shadow-[0_0_20px_rgba(252,211,77,0.2)]"
              >
                Apoyar el programa
              </Link>
              <Link
                to={PATHS.ORCHESTRA_EVENTS}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/8 transition-all"
              >
                Ver conciertos <ArrowRight size={14} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

