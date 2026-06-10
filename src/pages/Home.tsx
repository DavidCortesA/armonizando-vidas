import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HandHeart,
  Heart,
  Mail,
  MessageCircle,
  Share2,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/common/AnimatedCounter';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SEOHead from '../components/common/SEOHead';

const images = {
  orchestra: '/images/programs/orq-rey/orq-rey-01.jpg',
  food: '/images/programs/muj-val/muj-val-01.jpg',
  community: 'https://images.unsplash.com/photo-1764738130353-9bf18db12109?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  communityClass: '/images/programs/muj-val/muj-val-02.jpg',
  orchestraClass: '/images/programs/orq-rey/orq-rey-03.jpg',
  orchestraCello: '/images/programs/muj-val/muj-val-03.jpg',
};

const heroSlides = [
  {
    name: 'Armonizando Vidas',
    subtitle: 'Sembrando semillas de esperanza',
    programName: '',
    description:
      'Impulsamos programas de formación, alimentación y acompañamiento que dignifican la vida de las personas y fortalecen a sus comunidades.',
    image: images.community,
    alt: 'Comunidad reunida durante una actividad de Armonizando Vidas A.B.P.',
    primaryHref: '#nosotros',
    primaryLabel: 'Conoce nuestra labor',
    secondaryHref: '#ayudar',
    secondaryLabel: 'Quiero apoyar',
    position: 'center',
    logo: '/logos/armonizando-vidas.png',
  },
  {
    name: 'Orquestas del Rey',
    subtitle: 'Formación artística y enseñanza de oficios',
    programName: 'Orquestas del Rey',
    description:
      'Transformamos el talento musical en aprendizaje, valores y herramientas para construir un proyecto de vida.',
    image: images.orchestra,
    alt: 'Jóvenes integrantes de una orquesta durante un ensayo',
    primaryHref: '/orquestas-del-rey',
    primaryLabel: 'Conoce el programa',
    secondaryHref: '#ayudar',
    secondaryLabel: 'Quiero apoyar',
    position: 'center',
    logo: '/logos/orquestas-del-rey.png',
  },
  {
    name: 'Mujeres de Valor',
    subtitle: 'Alimento, convivencia y valores',
    programName: 'Mujeres de Valor',
    description:
      'Acompañamos a mujeres con desayuno, entrega de despensas y pláticas que fortalecen su bienestar y el de sus familias.',
    image: images.food,
    alt: 'Mujeres participando en una jornada de apoyo alimentario y convivencia',
    primaryHref: '/mujeres-de-valor',
    primaryLabel: 'Conoce el programa',
    secondaryHref: '#ayudar',
    secondaryLabel: 'Quiero apoyar',
    position: 'center',
    logo: '/logos/mujeres-de-valor.png',
  },
];

const actionAreas = [
  {
    icon: '/icons/areas/desarrollo-comunitario.svg',
    title: 'Desarrollo Comunitario',
    description:
      'Buscamos detonar la participación y empoderamiento de las personas dentro de su comunidad para lograr un cambio o mejora según sus necesidades.',
  },
  {
    icon: '/icons/areas/educacion.svg',
    title: 'Educación',
    description:
      'Buscamos el desarrollo y crecimiento intelectual, emocional o físico de una persona por medio del aprendizaje.',
  },
  {
    icon: '/icons/areas/salud.svg',
    title: 'Salud',
    description:
      'Buscamos el bienestar físico, mental y social de las personas a través de la prevención, promoción y mejora de la calidad de vida.',
  },
  {
    icon: '/icons/areas/asistencia-social.svg',
    title: 'Asistencia Social',
    description:
      'Buscamos la atención a necesidades básicas, las mejoras en infraestructura y atención en situación de emergencias.',
  },
  {
    icon: '/icons/areas/medio-ambiente.svg',
    title: 'Medio Ambiente',
    description:
      'Buscamos un desarrollo sostenible mediante proyectos que impacten de manera positiva el medio ambiente a través de la concientización, prevención y mejora de nuestro entorno.',
  },
];

const programs = [
  {
    logo: '/icons/areas/educacion.svg',
    title: 'Enseñanza de oficios',
    description:
      'Desarrollamos habilidades técnicas y humanas que impulsan la autonomía, la empleabilidad y un proyecto de vida.',
    image: images.orchestraClass,
    alt: 'Jóvenes aprendiendo música como oficio dentro del programa Orquestas del Rey',
    href: '/orquestas-del-rey',
    linkLabel: 'Conocer Orquestas del Rey',
  },
  {
    logo: '/icons/areas/desarrollo-comunitario.svg',
    title: 'Apoyo comunitario',
    description:
      'Acompañamos a personas y familias con orientación, valores, capacitación y espacios seguros de desarrollo.',
    image: images.orchestraCello,
    alt: 'Participante del programa musical durante una actividad comunitaria',
  },
  {
    logo: '/icons/areas/desarrollo-comunitario.svg',
    title: 'Actividades de integración',
    description:
      'Creamos espacios de convivencia donde niñas, niños, jóvenes y adultos fortalecen vínculos y sentido de comunidad.',
    image: images.orchestra,
    alt: 'Orquesta reunida durante una actividad artística de integración',
  },
  {
    logo: '/icons/areas/asistencia-social.svg',
    title: 'Apoyo a familias en necesidad',
    description:
      'Brindamos ayuda alimentaria y entrega de despensas para atender necesidades básicas de familias vulnerables.',
    image: images.community,
    alt: 'Personas voluntarias preparando apoyo alimentario para familias',
    href: '/banco-de-alimentos',
    linkLabel: 'Conocer Banco de Alimentos',
  },
  {
    logo: '/icons/areas/salud.svg',
    title: 'Mujeres de Valor',
    description:
      'Acompañamos a mujeres con desayuno, entrega de despensas y pláticas de valores que fortalecen su bienestar y el de sus familias.',
    image: images.food,
    alt: 'Mujeres participando en una jornada de apoyo alimentario y convivencia',
    href: '/mujeres-de-valor',
    linkLabel: 'Conocer Mujeres de Valor',
  },
];

const stats = [
  { value: 200, suffix: '+', label: 'Despensas mensuales' },
  { value: 250, suffix: '+', label: 'Beneficiarios' },
  { value: 30, suffix: '+', label: 'Voluntarios activos' },
  { value: 5, suffix: '+', label: 'Comunidades alcanzadas' },
];

const helpOptions = [
  {
    icon: Heart,
    step: '01',
    title: 'Dona',
    description: 'Contribuye para sostener nuestros programas de alimentación, formación y acompañamiento.',
  },
  {
    icon: HandHeart,
    step: '02',
    title: 'Sé voluntario',
    description: 'Ofrece tu tiempo y talento para participar directamente en nuestras acciones comunitarias.',
  },
  {
    icon: Share2,
    step: '03',
    title: 'Comparte',
    description: 'Ayúdanos a llegar a más personas difundiendo nuestra labor en tus redes y comunidades.',
  },
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const SLIDE_DURATION = 15000;
  const UPDATE_INTERVAL = 50;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + (100 / (SLIDE_DURATION / UPDATE_INTERVAL));
        if (nextProgress >= 100) {
          setActiveSlide((current) => (current + 1) % heroSlides.length);
          return 0;
        }
        return nextProgress;
      });
    }, UPDATE_INTERVAL);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(0);
    }, 0);
    return () => clearTimeout(timeout);
  }, [activeSlide]);

  const currentSlide = heroSlides[activeSlide];
  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };
  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <>
      <SEOHead
        title="Armonizando Vidas A.B.P. | Formación y Apoyo Comunitario"
        description="Armonizando Vidas A.B.P. impulsa Orquestas del Rey, Mujeres de Valor, banco de alimentos y programas de apoyo comunitario en Monterrey y Nuevo León."
        ogDescription="Educación, alimentación y valores para transformar vidas y fortalecer comunidades."
        image="https://armonizandovidas.org/og/armonizando-vidas.png"
        imageAlt="Armonizando Vidas A.B.P., formación y apoyo comunitario en Monterrey"
        url="https://armonizandovidas.org/"
        keywords="Armonizando Vidas, Orquestas del Rey, Mujeres de Valor, banco de alimentos Monterrey, enseñanza de oficios, apoyo comunitario Nuevo León"
      />

      <section
        id="inicio"
        className="hero-carousel"
        aria-roledescription="carrusel"
        aria-label="Programas destacados"
        aria-labelledby="titulo-principal"
      >
        <h1 id="titulo-principal" className="sr-only">
          Armonizando Vidas A.B.P.
        </h1>
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide.image}
            src={currentSlide.image}
            alt={currentSlide.alt}
            className="hero-carousel-image"
            style={{ objectPosition: currentSlide.position }}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.75, ease: 'easeOut' }}
            fetchPriority={activeSlide === 0 ? 'high' : 'auto'}
          />
        </AnimatePresence>
        <div className="hero-carousel-overlay" aria-hidden="true" />

        <div className="page-container hero-carousel-content">
          <motion.div
            key={currentSlide.name}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.55, delay: prefersReducedMotion ? 0 : 0.12 }}
            className="max-w-4xl"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="hero-carousel-eyebrow">
              <span />
              {currentSlide.subtitle}
            </div>
            <img
              src={currentSlide.logo}
              alt={currentSlide.name}
              className="hero-carousel-logo"
            />
            {currentSlide.programName && (
              <h2 className="hero-carousel-program-name">{currentSlide.programName}</h2>
            )}
            <p className="hero-carousel-copy">{currentSlide.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to={currentSlide.primaryHref} className="button-light">
                {currentSlide.primaryLabel}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to={currentSlide.secondaryHref} className="button-outline-light">
                {currentSlide.secondaryLabel}
              </Link>
            </div>
          </motion.div>

          <div className="hero-carousel-navigation">
            <div className="hero-carousel-arrows">
              <motion.button
                type="button"
                onClick={showPreviousSlide}
                aria-label="Mostrar programa anterior"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </motion.button>
              <motion.button
                type="button"
                onClick={showNextSlide}
                aria-label="Mostrar programa siguiente"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={22} aria-hidden="true" />
              </motion.button>
            </div>
            <div className="hero-carousel-dots" aria-label="Seleccionar programa destacado">
              {heroSlides.map((slide, index) => (
                <motion.button
                  key={slide.name}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={index === activeSlide ? 'is-active' : ''}
                  aria-label={`Mostrar ${slide.name}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                  layout
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  whileHover={{ scaleY: 1.3 }}
                />
              ))}
            </div>
            <motion.p
              className="hero-carousel-count"
              key={`count-${activeSlide}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span>0{activeSlide + 1}</span> / 0{heroSlides.length}
            </motion.p>
          </div>
        </div>
        <div className="hero-carousel-progress" aria-hidden="true">
          <motion.div
            className="hero-carousel-progress-bar"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.05 }}
          />
        </div>
      </section>

      <section id="nosotros" className="section-padding bg-cream" aria-labelledby="titulo-nosotros">
        <div className="page-container">
          <RevealOnScroll className="mx-auto max-w-4xl text-center">
            <div className="section-label justify-center">Nosotros</div>
            <h2 id="titulo-nosotros" className="section-title mx-auto mt-5">Apoyo comunitario con propósito</h2>
            <p className="section-copy mx-auto mt-6 max-w-4xl">
              En Armonizando Vidas A.B.P. atendemos a personas y familias en situación vulnerable, a través de
              nuestras diferentes líneas de acción, brindando ayuda alimentaria, enseñanza de oficios, apoyo social,
              enseñanza de valores y la creación de espacios de integración comunitaria donde se capacita, enseña y
              dignifica la vida del individuo, así como de la familia.
            </p>
          </RevealOnScroll>

          <div className="action-areas-grid mt-14">
            {actionAreas.map(({ icon, title, description }, index) => (
              <RevealOnScroll key={title} delay={index * 0.06} className="h-full">
                <article className="action-area-card">
                  <img src={icon} alt="" className="action-area-icon" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
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
              Atendemos necesidades inmediatas mientras desarrollamos capacidades, vínculos y oportunidades que
              fortalecen a cada persona y a su comunidad.
            </p>
          </RevealOnScroll>

          <div className="programs-grid mt-14">
            {programs.map(({ logo, title, description, image, alt, href, linkLabel }, index) => (
              <RevealOnScroll key={title} delay={index * 0.08} className="h-full">
                <article className="program-card group">
                  <div className="program-image">
                    <img
                      src={image}
                      alt={alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="program-logo-badge" aria-hidden="true">
                      <img src={logo} alt="" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-ink">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate">{description}</p>
                    {href && linkLabel && (
                      <Link to={href} className="program-link">
                        {linkLabel}
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    )}
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
              Cada donativo, cada voluntario y cada acción nos ayuda a llevar formación, alimento y esperanza a más
              personas.
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
                  Tu apoyo puede convertirse en alimento, aprendizaje y acompañamiento para una familia que lo
                  necesita.
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
                  src={images.orchestra}
                  alt="Integrantes de una orquesta colaborando durante un ensayo"
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
              <img src={images.food} alt="" className="contact-background" loading="lazy" aria-hidden="true" />
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
                    href="https://api.whatsapp.com/send?phone=528117459230&text=Hola%2C%20me%20gustar%C3%ADa%20apoyar%20a%20Armonizando%20Vidas.%20%C2%BFPodr%C3%ADan%20compartirme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20puedo%20colaborar%3F%20%C2%A1Gracias%21"
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
