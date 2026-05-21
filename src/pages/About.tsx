import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Award, Target } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionBadge from '../components/common/SectionBadge';
import AnimatedCounter from '../components/common/AnimatedCounter';
import ImageStoryBand from '../components/common/ImageStoryBand';
import { PATHS } from '../routes/paths';

const milestones = [
  { year: '2019', title: 'Fundación', desc: 'Armonizando Vidas nace con una misión clara: transformar vidas desde las bases.' },
  { year: '2020', title: 'Banco de Alimentos', desc: 'Lanzamos el programa de Banco de Alimentos en plena pandemia, llegando a 100 familias.' },
  { year: '2021', title: 'Expansión comunitaria', desc: 'Crecemos a 5 comunidades y triplicamos el número de familias beneficiadas.' },
  { year: '2022', title: 'Orquestas del Rey', desc: 'Nace el programa musical con 40 niños y jóvenes en su primera generación.' },
  { year: '2023', title: 'Reconocimiento oficial', desc: 'Obtenemos registro como A.B.P. y reconocimientos por nuestro impacto social.' },
  { year: '2024', title: 'Escala nacional', desc: 'Superamos 500 familias mensuales y 150 músicos activos en 6 ensambles.' },
];

const team = [
  { name: 'Fundadora & Directora', initials: 'AV', color: '#33FF00', desc: 'Visionaria y corazón del movimiento.' },
  { name: 'Director Banco Alimentos', initials: 'DA', color: '#F59E0B', desc: 'Coordinando operaciones y logística.' },
  { name: 'Director Musical', initials: 'DM', color: '#A78BFA', desc: 'Formando músicos y transformando vidas.' },
  { name: 'Coordinadora Voluntarios', initials: 'CV', color: '#FF00CC', desc: 'Construyendo comunidad y liderazgo.' },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="Nosotros"
        description="Conoce la historia, misión, visión y equipo de Armonizando Vidas A.B.P. Una organización comprometida con el impacto social real."
        keywords="sobre nosotros, armonizando vidas, asociación civil, historia, equipo, misión, visión"
      />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #081630 0%, #0A1F44 100%)' }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[rgba(51,255,0,0.05)] blur-3xl" />
          <div className="absolute bottom-0 left-20 w-64 h-64 rounded-full bg-[rgba(255,0,204,0.05)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="lime" className="mb-5">Quiénes Somos</SectionBadge>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
              Una organización con{' '}
              <span className="gradient-text-lime">propósito real</span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed">
              Somos Armonizando Vidas A.B.P., una asociación civil que cree en el poder
              transformador del alimento, la música y la comunidad.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      <ImageStoryBand
        badge="Lo que nos mueve"
        title="Acompañamos procesos,"
        accent="no solo momentos"
        description="Nuestro trabajo empieza con una necesidad concreta, pero crece cuando una familia encuentra una red, un niño descubre una disciplina artística y una comunidad vuelve a sentirse acompañada."
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80"
        imageAlt="Voluntarios trabajando juntos en una jornada comunitaria"
        items={[
          'Diseñamos programas que combinan ayuda inmediata con seguimiento humano.',
          'Cada alianza, donativo y hora de voluntariado se integra a una estrategia de impacto.',
          'Medimos resultados para crecer con responsabilidad y servir mejor a cada comunidad.',
        ]}
      />

      {/* STATS */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: Heart, value: 500, suffix: '+', label: 'Familias/mes', color: '#F59E0B' },
              { icon: Users, value: 150, suffix: '+', label: 'Músicos', color: '#A78BFA' },
              { icon: Award, value: 5, suffix: '+', label: 'Años', color: '#33FF00' },
              { icon: Target, value: 10, suffix: '', label: 'Comunidades', color: '#38BDF8' },
            ].map(({ icon: Icon, value, suffix, label, color }, i) => (
              <RevealOnScroll key={label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-[#F8F9FC] border border-[#E2E8F0]">
                  <Icon size={24} className="mx-auto mb-3" style={{ color }} />
                  <div className="text-3xl font-extrabold text-[#0A1F44] mb-1">
                    <AnimatedCounter to={value} suffix={suffix} />
                  </div>
                  <div className="text-sm text-[#64748B]">{label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-padding bg-[#F8F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                badge: 'Misión',
                title: 'Lo que hacemos hoy',
                color: '#33FF00',
                text: 'Transformar comunidades vulnerables a través de programas de seguridad alimentaria y formación musical, promoviendo la dignidad humana, el desarrollo integral y la esperanza como pilares de un cambio social sostenible.',
              },
              {
                badge: 'Visión',
                title: 'Lo que construimos mañana',
                color: '#A78BFA',
                text: 'Ser la organización líder en transformación social comunitaria del norte de México, reconocida por su impacto medible, su modelo de intervención integral y su capacidad de replicar el cambio en cada comunidad que toca.',
              },
            ].map(({ badge, title, color, text }) => (
              <RevealOnScroll key={badge}>
                <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] h-full">
                  <div className="w-2 h-8 rounded-full mb-5" style={{ background: color }} />
                  <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color }}>{badge}</div>
                  <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">{title}</h3>
                  <p className="text-[#475569] leading-relaxed">{text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <RevealOnScroll>
              <SectionBadge color="lime" className="mb-4">Historia</SectionBadge>
              <h2 className="text-4xl font-extrabold text-[#0A1F44] mt-2">
                Nuestro <span className="gradient-text-lime">camino</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-[#E2E8F0] sm:-translate-x-px" />
            <div className="space-y-10">
              {milestones.map(({ year, title, desc }, i) => (
                <RevealOnScroll key={year} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    <div className={`hidden sm:flex w-1/2 ${i % 2 === 0 ? 'justify-end pr-10' : 'justify-start pl-10'}`}>
                      <div className="bg-[#F8F9FC] rounded-2xl p-5 border border-[#E2E8F0] max-w-xs">
                        <div className="text-sm font-bold text-[#33FF00] mb-1">{year}</div>
                        <div className="font-bold text-[#0A1F44] mb-2">{title}</div>
                        <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-5 h-5 rounded-full bg-[#33FF00] border-4 border-white shadow-sm top-4" />
                    <div className="pl-12 sm:hidden">
                      <div className="bg-[#F8F9FC] rounded-2xl p-5 border border-[#E2E8F0]">
                        <div className="text-sm font-bold text-[#33FF00] mb-1">{year}</div>
                        <div className="font-bold text-[#0A1F44] mb-2">{title}</div>
                        <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block w-1/2" />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-padding bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <RevealOnScroll>
              <SectionBadge color="lime" className="mb-4">Equipo</SectionBadge>
              <h2 className="text-4xl font-extrabold text-[#0A1F44] mt-2">
                Las personas <span className="gradient-text-lime">detrás de la misión</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, initials, color, desc }, i) => (
              <RevealOnScroll key={name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center border border-[#E2E8F0] hover-lift">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-white text-lg mx-auto mb-4"
                    style={{ background: color === '#33FF00' ? '#0A1F44' : color }}
                  >
                    {initials}
                  </div>
                  <div className="font-bold text-[#0A1F44] text-sm mb-1">{name}</div>
                  <div className="text-xs text-[#64748B]">{desc}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #081630 0%, #0A1F44 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Sé parte de la <span className="gradient-text-lime">historia</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Ya sea donando, siendo voluntario o difundiendo nuestra misión,
              hay un lugar para ti en Armonizando Vidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={PATHS.DONATE} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#33FF00] text-[#0A1F44] font-bold hover:bg-[#2ae600] transition-all hover:scale-105 shadow-[0_0_20px_rgba(51,255,0,0.2)]">
                <Heart size={18} /> Donar Ahora
              </Link>
              <Link to={PATHS.VOLUNTEER} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/8 transition-all">
                <Users size={18} /> Ser Voluntario <ArrowRight size={14} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

