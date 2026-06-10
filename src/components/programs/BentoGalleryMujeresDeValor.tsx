import { useState } from 'react';
import styles from './BentoGalleryMujeresDeValor.module.css';

interface GalleryImage {
  src: string;
  alt: string;
}

interface BentoGalleryProps {
  images: GalleryImage[];
}

export default function BentoGalleryMujeresDeValor({ images }: BentoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const getGridClass = (index: number) => {
    const pattern = [
      'bentoNormal',     // 220px
      'bentoWide',       // 240px
      'bentoLarge',      // 320px
      'bentoNormal',     // 220px
      'bentoTall',       // 300px
      'bentoWide',       // 240px
      'bentoNormal',     // 220px
      'bentoLarge',      // 320px
      'bentoWide',       // 240px
      'bentoNormal',     // 220px
      'bentoTall',       // 300px
      'bentoNormal',     // 220px
      'bentoWide',       // 240px
      'bentoLarge',      // 320px
      'bentoNormal',     // 220px
      'bentoNormal',     // 220px
      'bentoWide',       // 240px
      'bentoTall',       // 300px
      'bentoNormal',     // 220px
      'bentoLarge',      // 320px
      'bentoWide',       // 240px
      'bentoNormal',     // 220px
      'bentoNormal',     // 220px
      'bentoLarge',      // 320px
      'bentoWide',       // 240px
      'bentoTall',       // 300px
      'bentoNormal',     // 220px
      'bentoWide',       // 240px
      'bentoLarge',      // 320px
      'bentoNormal',     // 220px
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
              src={image.src}
              alt={image.alt}
              className={styles.image}
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
