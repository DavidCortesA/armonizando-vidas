import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/common/SEOHead';
import RevealOnScroll from '../../components/common/RevealOnScroll';
import SectionBadge from '../../components/common/SectionBadge';
import ImageStoryBand from '../../components/common/ImageStoryBand';

const photoSrcs = [
  'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
  'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
  'https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=800&q=80',
  'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=800&q=80',
  'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80',
  'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=800&q=80',
];

export default function OrchestraGallery() {
  const { t } = useTranslation();

  const photos = t('orchestraGallery.photos', { returnObjects: true }) as Array<{ alt: string }>;

  return (
    <>
      <SEOHead
        title={t('orchestraGallery.seo.title')}
        description={t('orchestraGallery.seo.description')}
      />

      {/* HERO */}
      <section className="relative py-24 pt-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D0D1A 0%, #1E0A3C 50%, #1D4ED8 100%)' }}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="purple" className="mb-5">{t('nav.orchestra')}</SectionBadge>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              {t('orchestraGallery.hero.title')} <span className="gradient-text-gold">{t('orchestraGallery.hero.titleAccent')}</span>
            </h1>
            <p className="text-white/65 text-xl">{t('orchestraGallery.hero.subtitle')}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to top, #0D0D1A, transparent)' }} />
      </section>

      <ImageStoryBand
        badge={t('orchestraGallery.storyBand.badge')}
        title={t('orchestraGallery.storyBand.title')}
        accent={t('orchestraGallery.storyBand.accent')}
        description={t('orchestraGallery.storyBand.description')}
        image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80"
        imageAlt={t('orchestraGallery.storyBand.imageAlt')}
        tone="orchestra"
        items={t('orchestraGallery.storyBand.items', { returnObjects: true }) as string[]}
      />

      {/* GALLERY */}
      <section className="section-padding" style={{ background: '#0D0D1A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
              {photoSrcs.map((src, i) => {
                const alt = photos[i]?.alt ?? '';
                return (
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
                );
              })}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
