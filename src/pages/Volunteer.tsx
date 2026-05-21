import { motion } from 'motion/react';
import { Heart, Clock, Users, Wrench, Music, ShoppingBasket } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionBadge from '../components/common/SectionBadge';
import ImageStoryBand from '../components/common/ImageStoryBand';

const roles = [
  { icon: ShoppingBasket, title: 'Banco de Alimentos', desc: 'Ayuda en la recepción, clasificación y distribución de alimentos.', commitment: '4 hrs/semana', color: '#F59E0B' },
  { icon: Music, title: 'Apoyo Musical', desc: 'Si tocas un instrumento, únete como instructor o asistente.', commitment: '3 hrs/semana', color: '#A78BFA' },
  { icon: Wrench, title: 'Área Técnica', desc: 'Diseño, tecnología, marketing o logística para los programas.', commitment: 'Flexible', color: '#33FF00' },
  { icon: Users, title: 'Trabajo Comunitario', desc: 'Visitas comunitarias, talleres y eventos de impacto social.', commitment: '2 eventos/mes', color: '#38BDF8' },
];

export default function Volunteer() {
  return (
    <>
      <SEOHead
        title="Voluntariado"
        description="Únete como voluntario a Armonizando Vidas A.B.P. Tu tiempo y talento transforman comunidades."
        keywords="voluntariado, voluntario, apoyo social, banco de alimentos, orquesta, comunidad"
      />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D0D1A 0%, #1E0A3C 50%, #1D4ED8 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-[rgba(167,139,250,0.08)] blur-3xl" />
          <div className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-[rgba(252,211,77,0.06)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="gold" className="mb-5">Únete al equipo</SectionBadge>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
              Sé parte del{' '}
              <span className="gradient-text-gold">cambio</span>
            </h1>
            <p className="text-white/65 text-xl max-w-xl mx-auto">
              Tu tiempo y talento son el motor que hace posible nuestra misión. Hay un lugar para ti.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <ImageStoryBand
        badge="Voluntariado con propósito"
        title="Tu tiempo también puede"
        accent="multiplicar esperanza"
        description="Buscamos personas que quieran servir con constancia, sensibilidad y alegría. Hay tareas visibles y tareas silenciosas, pero todas sostienen el mismo resultado: familias y jóvenes con más oportunidades."
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80"
        imageAlt="Equipo de voluntarios compartiendo una jornada con la comunidad"
        items={[
          'Puedes integrarte en jornadas de alimento, clases, logística, comunicación o eventos.',
          'Acompañamos a los voluntarios para que encuentren una forma realista de participar.',
          'Cada persona suma desde sus talentos: organización, escucha, enseñanza, transporte o creatividad.',
        ]}
      />

      {/* WHY VOLUNTEER */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <RevealOnScroll>
              <SectionBadge color="lime" className="mb-4">¿Por qué ser voluntario?</SectionBadge>
              <h2 className="text-4xl font-extrabold text-[#0A1F44] mt-2">
                Más que ayudar, <span className="gradient-text-lime">transformarte</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Impacto real y visible', desc: 'Ves directamente cómo tu trabajo cambia vidas. No es abstracto, es tangible.', color: '#33FF00' },
              { title: 'Comunidad genuina', desc: 'Te unes a un equipo apasionado y comprometido que se vuelve familia.', color: '#F59E0B' },
              { title: 'Desarrollo personal', desc: 'Desarrollas habilidades de liderazgo, empatía y trabajo en equipo.', color: '#A78BFA' },
              { title: 'Red de contactos', desc: 'Conectas con profesionales, instituciones y organizaciones aliadas.', color: '#38BDF8' },
              { title: 'Certificación', desc: 'Emitimos constancias de voluntariado para currículum o servicio social.', color: '#FB923C' },
              { title: 'Experiencias únicas', desc: 'Participas en conciertos, eventos y actividades que no olvidarás.', color: '#FF00CC' },
            ].map(({ title, desc, color }, i) => (
              <RevealOnScroll key={title} delay={i * 0.08}>
                <div className="bg-[#F8F9FC] rounded-2xl p-6 border border-[#E2E8F0] hover-lift">
                  <div className="w-2 h-8 rounded-full mb-4" style={{ background: color }} />
                  <h3 className="font-bold text-[#0A1F44] mb-2">{title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="section-padding bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <RevealOnScroll>
              <SectionBadge color="lime" className="mb-4">Áreas de voluntariado</SectionBadge>
              <h2 className="text-4xl font-extrabold text-[#0A1F44] mt-2">
                Encuentra tu <span className="gradient-text-lime">lugar</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {roles.map(({ icon: Icon, title, desc, commitment, color }, i) => (
              <RevealOnScroll key={title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover-lift flex gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1F44] mb-1">{title}</h3>
                    <p className="text-[#64748B] text-sm mb-3 leading-relaxed">{desc}</p>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color }}>
                      <Clock size={13} />
                      {commitment}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section-padding bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <SectionBadge color="lime" className="mb-4">Registro</SectionBadge>
              <h2 className="text-4xl font-extrabold text-[#0A1F44] mt-2">
                ¡Quiero ser <span className="gradient-text-lime">voluntario</span>!
              </h2>
            </div>
            <div className="bg-[#F8F9FC] rounded-3xl p-8 border border-[#E2E8F0]">
              <div className="space-y-4">
                {[
                  { label: 'Nombre completo', placeholder: 'Tu nombre' },
                  { label: 'Correo electrónico', placeholder: 'tu@correo.com' },
                  { label: 'Teléfono', placeholder: '+52 (81) 0000-0000' },
                  { label: 'Colonia / Ciudad', placeholder: '¿Desde dónde nos escribes?' },
                ].map(({ label, placeholder }) => (
                  <div key={label}>
                    <label className="block text-xs font-semibold text-[#64748B] mb-1.5">{label}</label>
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] focus:outline-none focus:border-[#0A1F44] transition-colors text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-[#64748B] mb-1.5">Área de interés</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] focus:outline-none focus:border-[#0A1F44] text-sm">
                    <option value="">Selecciona una opción</option>
                    {roles.map(({ title }) => <option key={title}>{title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#64748B] mb-1.5">¿Por qué quieres unirte?</label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos un poco sobre ti y tus motivaciones..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] focus:outline-none focus:border-[#0A1F44] transition-colors text-sm resize-none"
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-4 rounded-xl bg-[#0A1F44] text-[#33FF00] font-bold text-base flex items-center justify-center gap-2"
              >
                <Heart size={20} />
                Enviar solicitud
              </motion.button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

