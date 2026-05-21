import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingBasket, Shield, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/common/SEOHead';
import RevealOnScroll from '../../components/common/RevealOnScroll';
import SectionBadge from '../../components/common/SectionBadge';
import ImageStoryBand from '../../components/common/ImageStoryBand';

const amounts = [150, 300, 600, 1500];

export default function FoodBankDonate() {
  const [selected, setSelected] = useState(300);
  const [custom, setCustom] = useState('');

  const finalAmount = custom ? parseInt(custom) || 0 : selected;

  return (
    <>
      <SEOHead
        title="Donar — Banco de Alimentos"
        description="Dona al Banco de Alimentos de Armonizando Vidas y ayuda a alimentar familias en situación de vulnerabilidad."
      />

      <section className="relative py-24 pt-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #C2410C 60%, #D97706 100%)' }}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="fire" className="mb-5">Banco de Alimentos</SectionBadge>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Tu donación <span style={{ background: 'linear-gradient(90deg, #FEF3C7, #FCD34D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>alimenta vidas</span>
            </h1>
            <p className="text-white/70 text-lg">Cada peso llega directo a las familias.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFBF5] to-transparent" />
      </section>

      <ImageStoryBand
        badge="Tu ayuda en la mesa"
        title="Una despensa puede cambiar"
        accent="la semana de una familia"
        description="Donar al Banco de Alimentos significa apoyar compras complementarias, combustible, empaques, rutas de entrega y alimentos que llegan con cuidado."
        image="https://images.unsplash.com/photo-1578496781985-452d4a934d50?w=1200&q=80"
        imageAlt="Entrega de alimentos a una familia"
        tone="food"
        items={[
          'Los montos sugeridos están pensados para necesidades reales y fáciles de entender.',
          'Las donaciones recurrentes nos permiten planear rutas y compras con mayor estabilidad.',
          'También puedes donar alimentos no perecederos o conectar una empresa aliada.',
        ]}
      />

      <section className="section-padding bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            <RevealOnScroll direction="left">
              <div className="bg-white rounded-3xl p-7 border border-[rgba(245,158,11,0.2)]">
                <h2 className="text-xl font-extrabold text-[#78350F] mb-5 flex items-center gap-2">
                  <ShoppingBasket size={20} className="text-[#EA580C]" />
                  Realizar donación
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => { setSelected(amt); setCustom(''); }}
                      className={`py-3 rounded-xl font-bold text-sm border transition-all ${selected === amt && !custom ? 'text-white border-transparent' : 'bg-[#FFFBF5] border-[rgba(245,158,11,0.2)] text-[#92400E]'}`}
                      style={selected === amt && !custom ? { background: 'linear-gradient(135deg, #C2410C, #D97706)' } : {}}
                    >
                      ${amt.toLocaleString('es-MX')}
                    </button>
                  ))}
                </div>
                <div className="relative mb-5">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#92400E] font-semibold">$</span>
                  <input type="number" placeholder="Otro monto" value={custom} onChange={(e) => setCustom(e.target.value)} className="w-full pl-8 pr-4 py-3 rounded-xl border border-[rgba(245,158,11,0.2)] bg-[#FFFBF5] text-[#78350F] focus:outline-none focus:border-[#EA580C] transition-colors font-semibold" />
                </div>
                <div className="space-y-3 mb-5">
                  {['Nombre completo', 'Correo electrónico', 'Teléfono'].map((label) => (
                    <input key={label} type="text" placeholder={label} className="w-full px-4 py-3 rounded-xl border border-[rgba(245,158,11,0.2)] bg-[#FFFBF5] text-[#78350F] focus:outline-none focus:border-[#EA580C] transition-colors text-sm" />
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #C2410C, #D97706)' }}
                >
                  <Heart size={18} />
                  Donar ${finalAmount.toLocaleString('es-MX')}
                </motion.button>
                <div className="flex items-center justify-center gap-2 mt-3 text-xs text-[#92400E]/50">
                  <Shield size={13} /> Pago seguro
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div>
                <h2 className="text-xl font-extrabold text-[#78350F] mb-5">¿Qué logra tu donación?</h2>
                <div className="space-y-4">
                  {[
                    { amount: '$150', text: 'Proporciona alimento básico para una familia por una semana.', color: '#F59E0B' },
                    { amount: '$300', text: 'Cubre una despensa completa mensual para una familia.', color: '#EA580C' },
                    { amount: '$600', text: 'Alimenta a dos familias durante todo el mes.', color: '#D97706' },
                    { amount: '$1,500', text: 'Financia la operación de un punto de distribución por una semana.', color: '#92400E' },
                  ].map(({ amount, text, color }) => (
                    <div key={amount} className="flex gap-3 bg-white rounded-2xl p-4 border border-[rgba(245,158,11,0.15)]">
                      <CheckCircle2 size={18} style={{ color }} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-sm" style={{ color }}>{amount}</span>
                        <span className="text-sm text-[#92400E]/70 ml-1.5">{text}</span>
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

