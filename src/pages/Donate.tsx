import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingBasket, Music, Shield, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionBadge from '../components/common/SectionBadge';
import ImageStoryBand from '../components/common/ImageStoryBand';

const amounts = [200, 500, 1000, 2500];

const impactMap: Record<number, { icon: typeof Heart; text: string; color: string }> = {
  200: { icon: ShoppingBasket, text: 'Proporciona una despensa completa para una familia.', color: '#F59E0B' },
  500: { icon: ShoppingBasket, text: 'Alimenta a 5 familias durante una semana.', color: '#EA580C' },
  1000: { icon: Music, text: 'Cubre materiales musicales de un niño por un mes.', color: '#A78BFA' },
  2500: { icon: Heart, text: 'Financia el transporte de voluntarios por un mes.', color: '#33FF00' },
};

export default function Donate() {
  const [selected, setSelected] = useState<number>(500);
  const [custom, setCustom] = useState('');
  const [program, setProgram] = useState<'general' | 'foodBank' | 'orchestra'>('general');

  const finalAmount = custom ? parseInt(custom) || 0 : selected;
  const impact = impactMap[finalAmount] || impactMap[500];

  return (
    <>
      <SEOHead
        title="Donar"
        description="Haz una donación a Armonizando Vidas A.B.P. y transforma vidas reales. Apoya el Banco de Alimentos y las Orquestas del Rey."
        keywords="donar, donación, apoyo social, banco de alimentos, orquesta infantil, armonizando vidas"
      />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #081630 0%, #0A1F44 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-[rgba(51,255,0,0.06)] blur-3xl" />
          <div className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-[rgba(255,0,204,0.05)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="lime" className="mb-5">Haz la diferencia</SectionBadge>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
              Tu donación{' '}
              <span className="gradient-text-lime">transforma vidas</span>
            </h1>
            <p className="text-white/65 text-xl max-w-xl mx-auto">
              Cada peso que donas llega directo a familias que lo necesitan.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <ImageStoryBand
        badge="Donar con claridad"
        title="Cada aportación se convierte en"
        accent="acción concreta"
        description="Tu donación sostiene rutas de distribución, material pedagógico, acompañamiento comunitario y las manos voluntarias que mantienen vivos los programas."
        image="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80"
        imageAlt="Voluntarios organizando alimentos para entregar a familias"
        items={[
          'Puedes elegir si tu apoyo va al fondo general, al Banco de Alimentos o a Orquestas del Rey.',
          'Priorizamos necesidades urgentes sin perder de vista el impacto a largo plazo.',
          'Cada campaña se documenta para que puedas ver cómo avanza la misión.',
        ]}
      />

      {/* FORM */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — Form */}
            <RevealOnScroll direction="left">
              <div className="bg-[#F8F9FC] rounded-3xl p-8 border border-[#E2E8F0]">
                <h2 className="text-2xl font-extrabold text-[#0A1F44] mb-6">Realizar donación</h2>

                {/* Program selector */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#0A1F44] mb-3">Destinar a</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'general', label: 'General', color: '#33FF00' },
                      { key: 'foodBank', label: 'Banco', color: '#F59E0B' },
                      { key: 'orchestra', label: 'Orquesta', color: '#A78BFA' },
                    ].map(({ key, label, color }) => (
                      <button
                        key={key}
                        onClick={() => setProgram(key as typeof program)}
                        className={`py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                          program === key ? 'border-transparent text-white' : 'bg-white border-[#E2E8F0] text-[#64748B]'
                        }`}
                        style={program === key ? { background: color === '#33FF00' ? '#0A1F44' : color } : {}}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount grid */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-[#0A1F44] mb-3">Elige un monto</label>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => { setSelected(amt); setCustom(''); }}
                        className={`py-3 rounded-xl font-bold text-sm border transition-all ${
                          selected === amt && !custom
                            ? 'bg-[#0A1F44] text-[#33FF00] border-[#0A1F44]'
                            : 'bg-white border-[#E2E8F0] text-[#0A1F44] hover:border-[#0A1F44]'
                        }`}
                      >
                        ${amt.toLocaleString('es-MX')}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] font-semibold">$</span>
                    <input
                      type="number"
                      placeholder="Otro monto"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] font-semibold focus:outline-none focus:border-[#0A1F44] transition-colors"
                    />
                  </div>
                </div>

                {/* Fields */}
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Nombre completo', placeholder: 'Tu nombre' },
                    { label: 'Correo electrónico', placeholder: 'tu@correo.com' },
                    { label: 'Teléfono (opcional)', placeholder: '+52 (81) 0000-0000' },
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
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-[#0A1F44] text-[#33FF00] font-bold text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(10,31,68,0.15)]"
                >
                  <Heart size={20} />
                  Completar donación — ${finalAmount.toLocaleString('es-MX')}
                </motion.button>

                <div className="flex items-center justify-center gap-2 mt-3 text-xs text-[#94A3B8]">
                  <Shield size={13} />
                  Pago seguro con cifrado SSL
                </div>
              </div>
            </RevealOnScroll>

            {/* Right — Impact */}
            <RevealOnScroll direction="right">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0A1F44] mb-6">¿Qué logra tu donación?</h2>

                {/* Impact card */}
                <motion.div
                  key={finalAmount}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl p-6 mb-6 border"
                  style={{
                    background: `${impact.color}10`,
                    borderColor: `${impact.color}30`,
                  }}
                >
                  <impact.icon size={28} style={{ color: impact.color }} className="mb-3" />
                  <div className="text-3xl font-extrabold mb-2" style={{ color: impact.color }}>
                    ${finalAmount.toLocaleString('es-MX')}
                  </div>
                  <p className="text-[#0A1F44] font-medium">{impact.text}</p>
                </motion.div>

                {/* Impact list */}
                <div className="space-y-4">
                  {[
                    { title: 'Transparencia total', desc: 'El 90% de cada donación va directo a los programas. El 10% cubre costos operativos.' },
                    { title: 'Recibo de donataria', desc: 'Emitimos recibo oficial para deducción de impuestos.' },
                    { title: 'Reporte de impacto', desc: 'Recibirás un reporte mensual de cómo se usó tu donación.' },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex gap-3">
                      <CheckCircle2 size={20} className="text-[#33FF00] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#0A1F44] text-sm">{title}</div>
                        <div className="text-sm text-[#64748B] leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>
    </>
  );
}

