import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Heart, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Programas', href: '/#programas' },
  { label: 'Impacto', href: '/#impacto' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/80 bg-white/90 shadow-[0_8px_30px_rgba(24,48,75,0.06)] backdrop-blur-xl'
          : 'bg-white/85 backdrop-blur-xl'
      }`}
    >
      <nav className="page-container flex h-20 items-center justify-between" aria-label="Navegación principal">
        <a href="/#inicio" className="flex items-center gap-3" aria-label="Armonizando Vidas, inicio">
          <img src="/logos/armonizando-vidas.png" alt="" className="header-brand-logo" />
          <div className="leading-none">
            <span className="block text-sm font-extrabold tracking-tight text-ink sm:text-base">Armonizando Vidas</span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate">A.B.P.</span>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a href="/#ayudar" className="button-primary nav-cta !px-5 !py-3">
          <Heart size={17} aria-hidden="true" />
          Quiero ayudar
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            role="navigation"
            aria-label="Navegación móvil"
            className="border-t border-line bg-white px-5 pb-6 pt-3 shadow-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-line/70 py-4 text-sm font-semibold text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a href="/#ayudar" onClick={() => setMobileOpen(false)} className="button-primary mt-5">
                <Heart size={17} aria-hidden="true" />
                Quiero ayudar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
