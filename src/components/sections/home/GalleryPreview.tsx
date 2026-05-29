import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import RevealOnScroll from '../../common/RevealOnScroll';
import SectionBadge from '../../common/SectionBadge';
import { PATHS } from '../../../routes/paths';

const images = [
  { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80', alt: 'Distribución de alimentos', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80', alt: 'Ensayo orquestal', span: '' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', alt: 'Voluntarios en acción', span: '' },
  { src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80', alt: 'Concierto comunitario', span: '' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Evento de impacto', span: '' },
  { src: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=600&q=80', alt: 'Comunidad unida', span: '' },
];

export default function GalleryPreview() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <RevealOnScroll>
              <SectionBadge color="lime" className="mb-3">{t('galleryPreview.badge')}</SectionBadge>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-4xl font-extrabold text-[#0A1F44]">
                {t('galleryPreview.title')} <span className="gradient-text-lime">{t('galleryPreview.accent')}</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={0.2} direction="right">
            <Link
              to={PATHS.GALLERY}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0A1F44] hover:text-[#33FF00] transition-colors"
            >
              {t('galleryPreview.cta')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.15}>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px]">
            {images.map(({ src, alt, span }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`relative rounded-2xl overflow-hidden bg-[#F8F9FC] ${span}`}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0A1F44]/0 hover:bg-[#0A1F44]/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
