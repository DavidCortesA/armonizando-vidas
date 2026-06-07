import {
  ArrowRight,
  HandHeart,
  Heart,
  Mail,
  MessageCircle,
  PackageCheck,
  Share2,
  Sparkles,
  Sprout,
  Users,
  Utensils,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import AnimatedCounter from '../components/common/AnimatedCounter';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SEOHead from '../components/common/SEOHead';

const images = {
  hero: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=1400&q=85',
  food: 'https://images.unsplash.com/photo-1755599629285-91cc09a185c7?auto=format&fit=crop&w=1100&q=82',
  community: 'https://images.unsplash.com/photo-1773227059745-e4ed390faba4?auto=format&fit=crop&w=1100&q=82',
  volunteers: 'https://images.unsplash.com/photo-1740065592719-052d3e5ec6fb?auto=format&fit=crop&w=1100&q=82',
  integration: 'https://images.unsplash.com/photo-1636987050384-9b079c700f63?auto=format&fit=crop&w=1100&q=82',
};

const programs = [
  {
    icon: PackageCheck,
    title: 'Entrega de despensas',
    description: 'Apoyamos a familias con alimentos esenciales para aliviar necesidades inmediatas.',
    image: images.food,
    alt: 'Voluntarios preparando despensas para entregar apoyo alimentario a familias',
    color: 'magenta',
  },
  {
    icon: Users,
    title: 'Apoyo comunitario',
    description: 'Organizamos actividades que promueven la solidaridad, la cercanía y el acompañamiento social.',
    image: images.community,
    alt: 'Mujeres conviviendo en una actividad de apoyo comunitario y acompañamiento social',
    color: 'green',
  },
  {
    icon: HandHeart,
    title: 'Voluntariado',
    description: 'Conectamos personas dispuestas a servir con oportunidades reales de impacto social.',
    image: images.volunteers,
    alt: 'Manos de voluntarios unidas para colaborar en acciones comunitarias',
    color: 'gold',
  },
  {
    icon: Sparkles,
    title: 'Actividades de integración',
    description:
      'Creamos espacios seguros donde familias, niñas, niños y adultos pueden convivir y sentirse acompañados.',
    image: images.integration,
    alt: 'Personas uniendo sus manos durante una actividad de integración comunitaria',
    color: 'blue',
  },
];

const stats = [
  { value: 100, suffix: '+', label: 'Familias apoyadas' },
  { value: 250, suffix: '+', label: 'Despensas entregadas' },
  { value: 30, suffix: '+', label: 'Voluntarios activos' },
  { value: 5, suffix: '+', label: 'Comunidades alcanzadas' },
];

const helpOptions = [
  {
    icon: Heart,
    step: '01',
    title: 'Dona',
    description: 'Contribuye para que más familias reciban despensas y apoyo básico.',
  },
  {
    icon: HandHeart,
    step: '02',
    title: 'Sé voluntario',
    description: 'Únete a nuestras actividades y participa directamente en acciones comunitarias.',
  },
  {
    icon: Share2,
    step: '03',
    title: 'Comparte',
    description: 'Ayúdanos a que más personas conozcan esta causa y se sumen.',
  },
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="Armonizando Vidas A.B.P. | Apoyo Comunitario en Monterrey"
        description="Armonizando Vidas A.B.P. brinda apoyo comunitario, alimento, despensas y acompañamiento social a familias en situación vulnerable en Monterrey y Nuevo León."
        ogDescription="Apoyo comunitario, despensas y esperanza para familias vulnerables en Monterrey y Nuevo León."
        image={images.hero}
        keywords="apoyo comunitario Monterrey, asociación civil Nuevo León, entrega de despensas, voluntariado Monterrey, ayuda alimentaria, familias vulnerables"
      />

      <section id="inicio" className="hero-section" aria-labelledby="titulo-principal">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="page-container relative z-10 grid min-h-[800px] items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.04fr_0.96fr] lg:pb-24 lg:pt-28">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow mb-7">
              <span className="eyebrow-dot" />
              Apoyo comunitario en Monterrey
            </div>
            <h1 id="titulo-principal" className="max-w-3xl text-[clamp(3.15rem,7vw,6.1rem)] font-extrabold leading-[0.95] tracking-[-0.06em] text-ink">
              Armonizando Vidas
              <span className="mt-2 block font-display text-[0.72em] font-bold italic text-magenta">A.B.P.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-ink/80 sm:text-xl">
              Llevamos alimento, apoyo y esperanza a familias y comunidades en situación vulnerable en Monterrey y
              Nuevo León.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate sm:text-base">
              Somos una asociación comprometida con transformar vidas a través de programas sociales, entrega de
              despensas, voluntariado y acciones comunitarias que fortalecen la dignidad de cada persona.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#nosotros" className="button-primary">
                Conoce nuestra labor
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#ayudar" className="button-secondary">
                <Heart size={18} aria-hidden="true" />
                Quiero apoyar
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.9, delay: prefersReducedMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <div className="hero-photo">
              <img
                src={images.hero}
                alt="Voluntarios entregando apoyo alimentario a familias en situación vulnerable"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
              <div className="hero-photo-overlay" aria-hidden="true" />
              <div className="hero-photo-brand" aria-hidden="true">
                <img src="/logos/armonizando-vidas.png" alt="" className="h-14 w-14 object-contain" />
                <div>
                  <p className="text-sm font-extrabold text-ink">Armonizando Vidas</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate">A.B.P.</p>
                </div>
              </div>
              <div className="hero-note hero-note-top" aria-hidden="true">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-soft text-green">
                  <Sprout size={18} />
                </span>
                <span>Esperanza activa</span>
              </div>
              <div className="hero-note hero-note-bottom" aria-hidden="true">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-magenta-soft text-magenta">
                  <Heart size={18} />
                </span>
                <span>Ayuda con propósito</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="nosotros" className="section-padding bg-cream" aria-labelledby="titulo-nosotros">
        <div className="page-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
            <RevealOnScroll>
              <div className="about-photo">
                <img
                  src={images.integration}
                  alt="Manos unidas representando solidaridad y apoyo comunitario en Monterrey"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="about-photo-caption">
                  <Heart size={18} aria-hidden="true" />
                  Dignidad, cercanía y esperanza
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.08}>
              <div className="section-label">Nosotros</div>
              <h2 id="titulo-nosotros" className="section-title mt-5">Apoyo comunitario con propósito</h2>
              <p className="section-copy mt-6">
                En Armonizando Vidas A.B.P. trabajamos para acompañar a familias que atraviesan momentos difíciles,
                brindando ayuda alimentaria, apoyo social y espacios de integración comunitaria.
              </p>
            </RevealOnScroll>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Utensils,
                title: 'Alimentación digna',
                text: 'Impulsamos acciones para llevar despensas y apoyo alimentario a quienes más lo necesitan.',
                className: 'about-card-magenta',
              },
              {
                icon: Users,
                title: 'Comunidad solidaria',
                text: 'Creamos vínculos entre voluntarios, familias y aliados para fortalecer el bienestar social.',
                className: 'about-card-green',
              },
              {
                icon: Sprout,
                title: 'Esperanza en acción',
                text: 'Cada programa busca recordarles a las personas que no están solas y que su vida tiene valor.',
                className: 'about-card-gold',
              },
            ].map(({ icon: Icon, title, text, className }, index) => (
              <RevealOnScroll key={title} delay={index * 0.1} className="h-full">
                <article className={`about-card ${className}`}>
                  <Icon size={25} aria-hidden="true" />
                  <h3 className="mt-9 text-xl font-bold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate">{text}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="programas" className="section-padding bg-white" aria-labelledby="titulo-programas">
        <div className="page-container">
          <RevealOnScroll className="mx-auto max-w-3xl text-center">
            <div className="section-label justify-center">Nuestra labor</div>
            <h2 id="titulo-programas" className="section-title mt-5">Nuestros programas sociales</h2>
            <p className="section-copy mx-auto mt-5 max-w-2xl">
              Desarrollamos iniciativas enfocadas en atender necesidades básicas, fortalecer comunidades y crear
              oportunidades de apoyo para familias vulnerables.
            </p>
          </RevealOnScroll>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {programs.map(({ icon: Icon, title, description, image, alt, color }, index) => (
              <RevealOnScroll key={title} delay={index * 0.08} className="h-full">
                <article className="program-card group">
                  <div className="program-image">
                    <img
                      src={image}
                      alt={alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className={`program-icon program-icon-${color}`}>
                      <Icon size={23} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-ink">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate">{description}</p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="impacto" className="impact-section" aria-labelledby="titulo-impacto">
        <div className="impact-background" aria-hidden="true">
          <img src={images.food} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="impact-orb impact-orb-one" aria-hidden="true" />
        <div className="page-container relative z-10">
          <RevealOnScroll className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <div className="section-label section-label-light">Nuestro impacto</div>
              <h2 id="titulo-impacto" className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Impacto que transforma vidas</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/70 md:justify-self-end md:text-lg">
              Cada donativo, cada voluntario y cada acción nos ayuda a seguir llegando a más personas.
            </p>
          </RevealOnScroll>

          <dl className="mt-12 grid grid-cols-2 border-y border-white/15 lg:grid-cols-4">
            {stats.map(({ value, suffix, label }, index) => (
              <RevealOnScroll key={label} delay={index * 0.1}>
                <div className="impact-stat">
                  <dt className="order-2 mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-sm">
                    {label}
                  </dt>
                  <dd className="order-1">
                    <AnimatedCounter
                      to={value}
                      suffix={suffix}
                      className="font-display text-4xl font-bold italic text-gold-light sm:text-6xl"
                    />
                  </dd>
                </div>
              </RevealOnScroll>
            ))}
          </dl>
        </div>
      </section>

      <section id="ayudar" className="section-padding bg-sand" aria-labelledby="titulo-ayudar">
        <div className="page-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-16">
            <div>
              <RevealOnScroll>
                <div className="section-label">Súmate</div>
                <h2 id="titulo-ayudar" className="section-title mt-5">Cómo puedes ayudar</h2>
                <p className="section-copy mt-5 max-w-2xl">
                  Tu apoyo puede convertirse en alimento, esperanza y acompañamiento para una familia que lo necesita.
                </p>
              </RevealOnScroll>

              <div className="mt-10 grid gap-4">
                {helpOptions.map(({ icon: Icon, step, title, description }, index) => (
                  <RevealOnScroll key={title} delay={index * 0.08}>
                    <article className="help-card">
                      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-ink text-white">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-extrabold tracking-[0.18em] text-magenta">{step}</span>
                          <h3 className="text-xl font-bold text-ink">{title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate">{description}</p>
                      </div>
                    </article>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            <RevealOnScroll delay={0.12}>
              <div className="help-photo">
                <img
                  src={images.volunteers}
                  alt="Voluntarios uniendo sus manos para apoyar a familias en Monterrey y Nuevo León"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="help-photo-card">
                  <p className="font-display text-2xl font-bold italic text-ink">Tu ayuda sí transforma.</p>
                  <a href="#contacto" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-magenta">
                    Quiero sumarme
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-white py-8 sm:py-12" aria-labelledby="titulo-contacto">
        <div className="page-container">
          <RevealOnScroll>
            <div className="contact-panel">
              <img
                src={images.integration}
                alt=""
                className="contact-background"
                loading="lazy"
                aria-hidden="true"
              />
              <div className="contact-overlay" />
              <div className="relative z-10 max-w-3xl">
                <div className="section-label section-label-light">Hablemos</div>
                <h2 id="titulo-contacto" className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
                  Juntos podemos seguir
                  <span className="block font-display font-bold italic text-gold-light">armonizando vidas</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                  Cada ayuda cuenta. Tu generosidad puede hacer una diferencia real en Monterrey y Nuevo León.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://api.whatsapp.com/send?text=Hola%2C%20me%20gustar%C3%ADa%20apoyar%20a%20Armonizando%20Vidas."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-light"
                  >
                    <MessageCircle size={19} aria-hidden="true" />
                    Contactar por WhatsApp
                    <span className="sr-only"> (abre en una pestaña nueva)</span>
                  </a>
                  <a href="mailto:armonizandovidasabp@gmail.com" className="button-outline-light">
                    <Mail size={19} aria-hidden="true" />
                    Enviar correo
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
