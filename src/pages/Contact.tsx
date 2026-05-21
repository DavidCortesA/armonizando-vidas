import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe, Play } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionBadge from '../components/common/SectionBadge';
import ImageStoryBand from '../components/common/ImageStoryBand';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contacto"
        description="Contáctanos en Armonizando Vidas A.B.P. Estamos aquí para escucharte y responderte."
        keywords="contacto, armonizando vidas, correo, teléfono, Monterrey"
      />

      {/* HERO */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #081630 0%, #0A1F44 100%)' }}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="lime" className="mb-5">Contáctanos</SectionBadge>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Estamos aquí para <span className="gradient-text-lime">escucharte</span>
            </h1>
            <p className="text-white/65 text-xl max-w-xl mx-auto">
              Cuéntanos cómo puedes sumarte a nuestra misión o cómo podemos ayudarte.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <ImageStoryBand
        badge="Hablemos"
        title="Las mejores alianzas empiezan con"
        accent="una conversación"
        description="Si quieres donar, sumarte como voluntario, proponer una alianza o conocer más sobre nuestros programas, este es el mejor punto de partida."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
        imageAlt="Personas conversando y estrechando manos para iniciar una colaboración"
        items={[
          'Respondemos mensajes sobre donaciones, voluntariado, visitas y colaboraciones institucionales.',
          'También podemos orientar a empresas que desean realizar campañas de acopio o patrocinio.',
          'Cuéntanos tu idea con detalle para dirigirla al equipo correcto desde el primer contacto.',
        ]}
      />

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left — Info */}
            <RevealOnScroll direction="left">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0A1F44] mb-6">Información de contacto</h2>
                <div className="space-y-5 mb-8">
                  {[
                    { icon: Mail, label: 'Correo electrónico', value: 'contacto@armonizandovidas.org', color: '#33FF00' },
                    { icon: Phone, label: 'Teléfono', value: '+52 (81) 0000-0000', color: '#F59E0B' },
                    { icon: MapPin, label: 'Ubicación', value: 'Monterrey, Nuevo León, México', color: '#A78BFA' },
                    { icon: Clock, label: 'Horario de atención', value: 'Lunes a Viernes 9:00 — 18:00', color: '#38BDF8' },
                  ].map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
                        <Icon size={20} style={{ color }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wide mb-0.5">{label}</div>
                        <div className="text-[#0A1F44] font-medium">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#E2E8F0] pt-6">
                  <h3 className="text-sm font-bold text-[#0A1F44] mb-4">Síguenos en redes</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: MessageCircle, href: '#', label: 'Instagram', color: '#FF00CC' },
                      { icon: Globe, href: '#', label: 'Facebook', color: '#1877F2' },
                      { icon: Play, href: '#', label: 'YouTube', color: '#FF0000' },
                    ].map(({ icon: Icon, href, label, color }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-11 h-11 rounded-xl bg-[#F8F9FC] border border-[#E2E8F0] flex items-center justify-center transition-all duration-200 hover:scale-105"
                        style={{}}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = color; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#E2E8F0'; }}
                      >
                        <Icon size={18} style={{ color }} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right — Form */}
            <RevealOnScroll direction="right">
              <div className="bg-[#F8F9FC] rounded-3xl p-8 border border-[#E2E8F0]">
                <h2 className="text-2xl font-extrabold text-[#0A1F44] mb-6">Envíanos un mensaje</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Nombre', 'Correo electrónico'].map((label) => (
                      <div key={label}>
                        <label className="block text-xs font-semibold text-[#64748B] mb-1.5">{label}</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] focus:outline-none focus:border-[#0A1F44] transition-colors text-sm" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#64748B] mb-1.5">Asunto</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] focus:outline-none focus:border-[#0A1F44] text-sm">
                      <option>Voluntariado</option>
                      <option>Donaciones</option>
                      <option>Alianzas y patrocinios</option>
                      <option>Banco de Alimentos</option>
                      <option>Orquestas del Rey</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#64748B] mb-1.5">Mensaje</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] focus:outline-none focus:border-[#0A1F44] transition-colors text-sm resize-none" placeholder="Escribe tu mensaje aquí..." />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-5 py-4 rounded-xl bg-[#0A1F44] text-[#33FF00] font-bold flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Enviar mensaje
                </motion.button>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>
    </>
  );
}
