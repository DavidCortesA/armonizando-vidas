import RevealOnScroll from './RevealOnScroll';
import SectionBadge from './SectionBadge';

interface ImageStoryBandProps {
  badge: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  imageAlt: string;
  items: string[];
  tone?: 'main' | 'food' | 'orchestra';
  reverse?: boolean;
}

const toneStyles = {
  main: {
    section: 'bg-white',
    badge: 'lime' as const,
    text: '#0A1F44',
    accentClass: 'gradient-text-lime',
    bullet: '#33FF00',
    panel: '#F8F9FC',
  },
  food: {
    section: 'bg-[#FFFBF5]',
    badge: 'fire' as const,
    text: '#78350F',
    accentClass: 'gradient-text-fire',
    bullet: '#EA580C',
    panel: '#FFFFFF',
  },
  orchestra: {
    section: 'bg-[#0D0D1A]',
    badge: 'purple' as const,
    text: '#FFFFFF',
    accentClass: 'gradient-text-gold',
    bullet: '#FCD34D',
    panel: 'rgba(255,255,255,0.06)',
  },
};

export default function ImageStoryBand({
  badge,
  title,
  accent,
  description,
  image,
  imageAlt,
  items,
  tone = 'main',
  reverse = false,
}: ImageStoryBandProps) {
  const style = toneStyles[tone];
  const muted = tone === 'orchestra' ? 'text-white/65' : 'text-[#64748B]';
  const border = tone === 'orchestra' ? 'border-white/10' : 'border-[#E2E8F0]';

  return (
    <section className={`section-padding ${style.section}`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <RevealOnScroll direction={reverse ? 'right' : 'left'}>
          <div className="relative rounded-3xl overflow-hidden min-h-[340px]">
            <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction={reverse ? 'left' : 'right'}>
          <div className={`rounded-3xl p-7 sm:p-8 border ${border}`} style={{ background: style.panel }}>
            <SectionBadge color={style.badge} className="mb-5">{badge}</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4" style={{ color: style.text }}>
              {title}{' '}
              <span className={style.accentClass}>{accent}</span>
            </h2>
            <p className={`${muted} leading-relaxed text-base sm:text-lg mb-6`}>{description}</p>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ background: style.bullet }} />
                  <p className={`${muted} text-sm leading-relaxed`}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
