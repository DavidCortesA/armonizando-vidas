import { motion } from 'motion/react';
import { ShoppingBasket, Home, Salad, Package } from 'lucide-react';
import SEOHead from '../../components/common/SEOHead';
import RevealOnScroll from '../../components/common/RevealOnScroll';
import SectionBadge from '../../components/common/SectionBadge';
import ImageStoryBand from '../../components/common/ImageStoryBand';

const programs = [
  {
    icon: Home,
    title: 'Despensa Familiar',
    desc: 'Entrega mensual de despensas básicas a familias en situación de pobreza alimentaria. Cada despensa incluye cereales, legumbres, aceite y productos básicos.',
    tags: ['Mensual', '500+ familias', '10 comunidades'],
    color: '#F59E0B',
  },
  {
    icon: Salad,
    title: 'Rescate de Alimentos Frescos',
    desc: 'Colaboramos con supermercados y restaurantes para rescatar frutas, verduras y alimentos próximos a vencer, distribuyéndolos el mismo día.',
    tags: ['Semanal', 'Alimentos frescos', 'Zero waste'],
    color: '#EA580C',
  },
  {
    icon: Package,
    title: 'Donaciones Empresariales',
    desc: 'Programa de alianzas con empresas que donan productos, servicios o recursos financieros para ampliar nuestra capacidad de distribución.',
    tags: ['Alianzas', 'Deducción fiscal', 'Impacto medible'],
    color: '#D97706',
  },
  {
    icon: ShoppingBasket,
    title: 'Banco Comunitario',
    desc: 'Habilitamos puntos de recepción de donaciones en colonias, donde los vecinos pueden donar alimentos que serán redistribuidos en la misma comunidad.',
    tags: ['Comunitario', 'Solidaridad', 'Local'],
    color: '#92400E',
  },
];

export default function FoodBankPrograms() {
  return (
    <>
      <SEOHead
        title="Programas — Banco de Alimentos"
        description="Conoce todos los programas del Banco de Alimentos de Armonizando Vidas: despensas familiares, rescate de alimentos y alianzas empresariales."
      />

      {/* HERO */}
      <section className="relative py-24 overflow-hidden pt-28" style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #C2410C 60%, #D97706 100%)' }}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="fire" className="mb-5">Banco de Alimentos</SectionBadge>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Nuestros <span style={{ background: 'linear-gradient(90deg, #FEF3C7, #FCD34D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>programas</span>
            </h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              Múltiples iniciativas que trabajan juntas para garantizar la seguridad alimentaria.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFBF5] to-transparent" />
      </section>

      <ImageStoryBand
        badge="Modelo de atención"
        title="Cada programa responde a"
        accent="una necesidad distinta"
        description="No todas las familias necesitan lo mismo. Por eso combinamos despensas, rescate de alimento fresco, alianzas empresariales y puntos comunitarios de donación."
        image="https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=1200&q=80"
        imageAlt="Familia reunida recibiendo apoyo alimentario"
        tone="food"
        reverse
        items={[
          'Las despensas familiares dan estabilidad mensual a hogares priorizados.',
          'El rescate de frescos reduce desperdicio y mejora la calidad nutricional.',
          'Las alianzas empresariales hacen posible crecer sin perder control operativo.',
        ]}
      />

      {/* PROGRAMS */}
      <section className="section-padding bg-[#FFFBF5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {programs.map(({ icon: Icon, title, desc, tags, color }, i) => (
              <RevealOnScroll key={title} delay={i * 0.1} direction="up">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border hover-lift flex flex-col sm:flex-row gap-6" style={{ borderColor: `${color}25` }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
                    <Icon size={28} style={{ color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-extrabold text-[#78350F] mb-2">{title}</h3>
                    <p className="text-[#92400E]/70 leading-relaxed mb-4">{desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ background: `${color}15`, color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

