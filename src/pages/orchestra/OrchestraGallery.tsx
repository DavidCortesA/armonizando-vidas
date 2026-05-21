import { motion } from 'motion/react';
import SEOHead from '../../components/common/SEOHead';
import RevealOnScroll from '../../components/common/RevealOnScroll';
import SectionBadge from '../../components/common/SectionBadge';
import ImageStoryBand from '../../components/common/ImageStoryBand';

const photos = [
  { src: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80', alt: 'Ensayo orquestal', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80', alt: 'Niños músicos', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80', alt: 'Concierto', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80', alt: 'Músico solista', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=800&q=80', alt: 'Violinista', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=800&q=80', alt: 'Ensayo de cuerdas', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80', alt: 'Notas musicales', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=800&q=80', alt: 'Presentación', size: 'large' },
];

export default function OrchestraGallery() {
  return (
    <>
      <SEOHead
        title="Galería — Orquestas del Rey"
        description="Galería fotográfica de Orquestas del Rey: ensayos, conciertos y momentos de transformación musical."
      />

      {/* HERO */}
      <section className="relative py-24 pt-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D0D1A 0%, #1E0A3C 50%, #1D4ED8 100%)' }}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="purple" className="mb-5">Orquestas del Rey</SectionBadge>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Galería <span className="gradient-text-gold">musical</span>
            </h1>
            <p className="text-white/65 text-xl">Imágenes que capturan la magia de la transformación a través del arte.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to top, #0D0D1A, transparent)' }} />
      </section>

      <ImageStoryBand
        badge="Memoria musical"
        title="El progreso también se ve en"
        accent="pequeños momentos"
        description="Ensayos, conciertos, primeras presentaciones y miradas de concentración forman parte de una historia que crece con cada alumno."
        image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80"
        imageAlt="Músico tocando en una presentación"
        tone="orchestra"
        items={[
          'La galería muestra el trabajo detrás de escena y los momentos de escenario.',
          'Cada imagen ayuda a reconocer el esfuerzo constante de estudiantes y maestros.',
          'También sirve para invitar a nuevas familias y aliados a conocer el programa.',
        ]}
      />

      {/* GALLERY */}
      <section className="section-padding" style={{ background: '#0D0D1A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
              {photos.map(({ src, alt }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="break-inside-avoid mb-4 relative rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img src={src} alt={alt} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-[rgba(76,29,149,0)] group-hover:bg-[rgba(76,29,149,0.4)] transition-all duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 px-3 py-1.5 rounded-full">
                      {alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

