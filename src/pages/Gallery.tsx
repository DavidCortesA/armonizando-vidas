import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/common/SEOHead';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionBadge from '../components/common/SectionBadge';
import ImageStoryBand from '../components/common/ImageStoryBand';

const photos = [
  { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80', altEs: 'Distribución de alimentos', altEn: 'Food distribution', catKey: 'food' },
  { src: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80', altEs: 'Ensayo orquestal', altEn: 'Orchestra rehearsal', catKey: 'orchestra' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80', altEs: 'Voluntarios', altEn: 'Volunteers', catKey: 'community' },
  { src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80', altEs: 'Concierto', altEn: 'Concert', catKey: 'orchestra' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', altEs: 'Evento comunitario', altEn: 'Community event', catKey: 'community' },
  { src: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&q=80', altEs: 'Familias unidas', altEn: 'Families together', catKey: 'food' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80', altEs: 'Niños músicos', altEn: 'Young musicians', catKey: 'orchestra' },
  { src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80', altEs: 'Trabajo en equipo', altEn: 'Teamwork', catKey: 'community' },
  { src: 'https://images.unsplash.com/photo-1569596082827-c61a5b7ec3e3?w=800&q=80', altEs: 'Productos donados', altEn: 'Donated products', catKey: 'food' },
  { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80', altEs: 'Músicos en acción', altEn: 'Musicians in action', catKey: 'orchestra' },
  { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80', altEs: 'Talleres', altEn: 'Workshops', catKey: 'community' },
  { src: 'https://images.unsplash.com/photo-1578496781985-452d4a934d50?w=800&q=80', altEs: 'Entrega de despensas', altEn: 'Food package delivery', catKey: 'food' },
];

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');

  const categoryOptions = [
    { key: 'all', label: t('gallery.categories.all') },
    { key: 'food', label: t('gallery.categories.food') },
    { key: 'orchestra', label: t('gallery.categories.orchestra') },
    { key: 'community', label: t('gallery.categories.community') },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === 'all' ? photos : photos.filter((p) => p.catKey === activeCategory);

  const prev = () => setLightbox(l => l !== null ? (l - 1 + filtered.length) % filtered.length : null);
  const next = () => setLightbox(l => l !== null ? (l + 1) % filtered.length : null);

  return (
    <>
      <SEOHead
        title={t('gallery.seo.title')}
        description={t('gallery.seo.description')}
      />

      {/* HERO */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #081630 0%, #0A1F44 100%)' }}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="lime" className="mb-5">{t('gallery.hero.badge')}</SectionBadge>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              {t('gallery.hero.title')} <span className="gradient-text-lime">{t('gallery.hero.accent')}</span>
            </h1>
            <p className="text-white/65 text-lg">{t('gallery.hero.subtitle')}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <ImageStoryBand
        badge={t('gallery.storyBand.badge')}
        title={t('gallery.storyBand.title')}
        accent={t('gallery.storyBand.accent')}
        description={t('gallery.storyBand.description')}
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
        imageAlt={t('gallery.storyBand.imageAlt')}
        items={t('gallery.storyBand.items', { returnObjects: true }) as string[]}
      />

      {/* FILTER + GRID */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <RevealOnScroll>
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {categoryOptions.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeCategory === cat.key
                      ? 'bg-[#0A1F44] text-[#33FF00] border-[#0A1F44]'
                      : 'bg-white border-[#E2E8F0] text-[#64748B] hover:border-[#0A1F44]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Grid */}
          <motion.div layout className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map(({ src, altEs, altEn }, i) => {
                const alt = isEn ? altEn : altEs;
                return (
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
                );
              })}
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
              alt={isEn ? filtered[lightbox].altEn : filtered[lightbox].altEs}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
