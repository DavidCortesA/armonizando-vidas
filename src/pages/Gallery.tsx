import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionBadge from '../components/common/SectionBadge';
import ImageStoryBand from '../components/common/ImageStoryBand';

const categories = ['Todos', 'Banco de Alimentos', 'Orquestas del Rey', 'Comunidad'];

const photos = [
  { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80', alt: 'Distribución de alimentos', cat: 'Banco de Alimentos' },
  { src: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80', alt: 'Ensayo orquestal', cat: 'Orquestas del Rey' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80', alt: 'Voluntarios', cat: 'Comunidad' },
  { src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80', alt: 'Concierto', cat: 'Orquestas del Rey' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', alt: 'Evento comunitario', cat: 'Comunidad' },
  { src: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&q=80', alt: 'Familias unidas', cat: 'Banco de Alimentos' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80', alt: 'Niños músicos', cat: 'Orquestas del Rey' },
  { src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80', alt: 'Trabajo en equipo', cat: 'Comunidad' },
  { src: 'https://images.unsplash.com/photo-1569596082827-c61a5b7ec3e3?w=800&q=80', alt: 'Productos donados', cat: 'Banco de Alimentos' },
  { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80', alt: 'Músicos en acción', cat: 'Orquestas del Rey' },
  { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80', alt: 'Talleres', cat: 'Comunidad' },
  { src: 'https://images.unsplash.com/photo-1578496781985-452d4a934d50?w=800&q=80', alt: 'Entrega de despensas', cat: 'Banco de Alimentos' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === 'Todos' ? photos : photos.filter(p => p.cat === activeCategory);

  const prev = () => setLightbox(l => l !== null ? (l - 1 + filtered.length) % filtered.length : null);
  const next = () => setLightbox(l => l !== null ? (l + 1) % filtered.length : null);

  return (
    <>
      <SEOHead
        title="Galería"
        description="Explora la galería de Armonizando Vidas A.B.P. — momentos reales de impacto, familias, música y comunidad."
      />

      {/* HERO */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #081630 0%, #0A1F44 100%)' }}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="lime" className="mb-5">Galería</SectionBadge>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Momentos que <span className="gradient-text-lime">inspiran</span>
            </h1>
            <p className="text-white/65 text-lg">Fotografías reales de nuestro impacto y nuestra comunidad.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <ImageStoryBand
        badge="Detrás de cada imagen"
        title="Cada fotografía guarda"
        accent="una historia"
        description="La galería reúne momentos de entrega, aprendizaje, música y comunidad. No son solo registros visuales: son señales de confianza, esfuerzo colectivo y transformación cotidiana."
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
        imageAlt="Evento comunitario con personas reunidas"
        items={[
          'Actualizamos esta sección con jornadas, conciertos y actividades especiales.',
          'Las imágenes ayudan a mostrar transparencia y cercanía con las comunidades.',
          'Cada categoría permite explorar una parte distinta de la misión.',
        ]}
      />

      {/* FILTER + GRID */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <RevealOnScroll>
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-[#0A1F44] text-[#33FF00] border-[#0A1F44]'
                      : 'bg-white border-[#E2E8F0] text-[#64748B] hover:border-[#0A1F44]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Grid */}
          <motion.div layout className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map(({ src, alt }, i) => (
                <motion.div
                  key={src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid mb-4 cursor-pointer group"
                  onClick={() => setLightbox(i)}
                >
                  <div className="relative rounded-2xl overflow-hidden">
                    <img src={src} alt={alt} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-[#0A1F44]/0 group-hover:bg-[#0A1F44]/30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 text-xs font-semibold bg-black/40 px-3 py-1.5 rounded-full transition-opacity">
                        {alt}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
              <X size={20} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
              <ChevronLeft size={20} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
              <ChevronRight size={20} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

