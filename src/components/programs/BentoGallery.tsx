import { useState } from 'react';
import styles from './BentoGallery.module.css';

interface GalleryImage {
  src: string;
  thumbnailSrc: string;
  alt: string;
}

interface BentoGalleryProps {
  images: GalleryImage[];
}

export default function BentoGallery({ images }: BentoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const getGridClass = (index: number) => {
    const pattern = [
      'bentoLarge',      // 0: 2x2
      'bentoNormal',     // 1: 1x1
      'bentoNormal',     // 2: 1x1
      'bentoWide',       // 3: 2x1
      'bentoNormal',     // 4: 1x1
      'bentoTall',       // 5: 1x2
      'bentoNormal',     // 6: 1x1
      'bentoNormal',     // 7: 1x1
      'bentoWide',       // 8: 2x1
      'bentoNormal',     // 9: 1x1
      'bentoLarge',      // 10: 2x2
      'bentoNormal',     // 11: 1x1
      'bentoTall',       // 12: 1x2
      'bentoNormal',     // 13: 1x1
      'bentoNormal',     // 14: 1x1
      'bentoWide',       // 15: 2x1
      'bentoNormal',     // 16: 1x1
      'bentoNormal',     // 17: 1x1
      'bentoLarge',      // 18: 2x2
      'bentoNormal',     // 19: 1x1
    ];
    return pattern[index];
  };

  return (
    <>
      <div className={styles.bentoContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.bentoItem} ${styles[getGridClass(index)]}`}
            onClick={() => setSelectedIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedIndex(index);
              }
            }}
          >
            <img
              src={image.thumbnailSrc}
              alt={image.alt}
              className={styles.image}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.overlay}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className={styles.modal} onClick={() => setSelectedIndex(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedIndex(null)}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className={styles.fullImage}
            />

            <div className={styles.counter}>
              {selectedIndex + 1} / {images.length}
            </div>

            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={() => setSelectedIndex((selectedIndex - 1 + images.length) % images.length)}
              aria-label="Anterior"
            >
              <span className="mb-4 mr-2">❮</span>
            </button>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={() => setSelectedIndex((selectedIndex + 1) % images.length)}
              aria-label="Siguiente"
            >
              <span className="mb-4">❯</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
