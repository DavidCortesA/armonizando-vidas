import { ArrowLeft, ArrowRight, Check, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../common/RevealOnScroll';
import SEOHead from '../common/SEOHead';

interface ProgramSection {
  title: string;
  text: string;
}

interface ProgramDetailPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  seoDescription: string;
  canonicalPath: string;
  ogImage: string;
  highlights: string[];
  sections: ProgramSection[];
  gallery?: Array<{ src: string; alt: string }>;
}

export default function ProgramDetailPage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  seoDescription,
  canonicalPath,
  ogImage,
  highlights,
  sections,
  gallery = [],
}: ProgramDetailPageProps) {
  return (
    <>
      <SEOHead
        title={`${title} | Armonizando Vidas A.B.P.`}
        description={seoDescription}
        image={`https://armonizandovidas.org${ogImage}`}
        imageAlt={`${title}, programa de Armonizando Vidas A.B.P.`}
        url={`https://armonizandovidas.org${canonicalPath}`}
        type="article"
      />

      <section className="program-detail-hero">
        <div className="page-container relative z-10 grid items-center gap-12 pb-20 pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:pb-24">
          <div>
            <div className="flex items-center gap-6">
              <Link to="/#programas" className="back-link">
                <ArrowLeft size={17} aria-hidden="true" />
                Volver a programas
              </Link>
              <div className="section-label">{eyebrow}</div>
            </div>
            <h1 className="program-detail-title mt-5">{title}</h1>
            <p className="section-copy mt-6 max-w-2xl">{intro}</p>
            <a href="/#contacto" className="button-primary mt-8">
              Quiero apoyar este programa
              <Heart size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="program-detail-photo">
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="page-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <RevealOnScroll>
            <aside className="program-highlights">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-magenta">Lo que impulsamos</p>
              <ul className="mt-6 grid gap-4">
                {highlights.map((item) => (
                  <li key={item}>
                    <span>
                      <Check size={16} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </RevealOnScroll>

          <div className="grid gap-5">
            {sections.map(({ title: sectionTitle, text }, index) => (
              <RevealOnScroll key={sectionTitle} delay={index * 0.06}>
                <article className="program-detail-section">
                  <h2>{sectionTitle}</h2>
                  <p>{text}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="bg-cream pb-24 pt-8">
          <div className="page-container">
            <RevealOnScroll>
              <div className="section-label">El programa en acción</div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Aprender, crecer y compartir</h2>
            </RevealOnScroll>
            <div className="program-gallery mt-10">
              {gallery.map(({ src, alt }, index) => (
                <RevealOnScroll key={src} delay={index * 0.08}>
                  <img src={src} alt={alt} loading="lazy" />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-ink py-16 text-white">
        <div className="page-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-gold-light">Súmate a la misión</p>
            <h2 className="mt-3 text-3xl font-extrabold">Tu participación puede transformar una vida.</h2>
          </div>
          <a href="/#contacto" className="button-light">
            Contactar a Armonizando Vidas
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
