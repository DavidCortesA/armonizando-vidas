/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { PATHS } from '../../routes/paths';

interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

const logoByTheme = {
  main: '/logos/armonizando-vidas.png',
  foodBank: '/logos/banco-de-alimentos.png',
  orchestra: '/logos/orquestas-del-rey.png',
} as const;

const mainNavItems: NavItem[] = [
  { label: 'nav.home', path: PATHS.HOME },
  { label: 'nav.about', path: PATHS.ABOUT },
  {
    label: 'nav.programs', path: PATHS.PROGRAMS,
    children: [
      { label: 'nav.foodBank', path: PATHS.FOOD_BANK },
      { label: 'nav.orchestra', path: PATHS.ORCHESTRA },
    ],
  },
  { label: 'nav.volunteer', path: PATHS.VOLUNTEER },
  { label: 'nav.gallery', path: PATHS.GALLERY },
  { label: 'nav.contact', path: PATHS.CONTACT },
];

const foodBankNavItems: NavItem[] = [
  { label: 'nav.home', path: PATHS.FOOD_BANK },
  { label: 'nav.programs', path: PATHS.FOOD_BANK_PROGRAMS },
  { label: 'nav.donate', path: PATHS.FOOD_BANK_DONATE },
  { label: 'nav.backHome', path: PATHS.HOME },
];

const orchestraNavItems: NavItem[] = [
  { label: 'nav.home', path: PATHS.ORCHESTRA },
  { label: 'nav.events', path: PATHS.ORCHESTRA_EVENTS },
  { label: 'nav.gallery', path: PATHS.ORCHESTRA_GALLERY },
  { label: 'nav.backHome', path: PATHS.HOME },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme } = useTheme();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems =
    theme.key === 'foodBank' ? foodBankNavItems :
    theme.key === 'orchestra' ? orchestraNavItems :
    mainNavItems;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const navBg = scrolled ? theme.navBgScrolled : theme.navBg;
  const isDark = theme.key === 'orchestra';
  const logoSrc = logoByTheme[theme.key];
  const brandName = theme.key === 'main' ? t('brand.main') : theme.key === 'foodBank' ? t('brand.foodBank') : t('brand.orchestra');
  const brandSubtitle = theme.key === 'main' ? t('brand.mainSubtitle') : t('brand.parent');
  const homePath = theme.key === 'foodBank' ? PATHS.FOOD_BANK : theme.key === 'orchestra' ? PATHS.ORCHESTRA : PATHS.HOME;

  const changeLanguage = (lng: 'es' | 'en') => {
    i18n.changeLanguage(lng);
  };

  const textColor = isDark || !scrolled ? '#E2E8F0' : theme.navText;
  const activeText = theme.navAccent;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: navBg,
          borderBottom: scrolled ? `1px solid ${theme.navBorder}` : 'none',
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-lg backdrop-blur-xl' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            <Link to={homePath} className="flex items-center gap-3 flex-shrink-0 min-w-0">
              <img src={logoSrc} alt={brandName} className="h-10 sm:h-12 w-auto max-w-[150px] object-contain" />
              <div className="hidden sm:block">
                <div className="text-sm font-bold leading-tight" style={{ color: isDark || !scrolled ? '#F8FAFC' : theme.navText }}>
                  {brandName}
                </div>
                <div className="text-xs opacity-60 leading-tight" style={{ color: isDark || !scrolled ? '#CBD5E1' : theme.navText }}>
                  {theme.key === 'foodBank' ? '' : brandSubtitle}
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.path} className="relative">
                  {item.children ? (
                    <button
                      onMouseEnter={() => setOpenDropdown(item.path)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                      style={{ color: location.pathname.startsWith(item.path) ? activeText : textColor }}
                    >
                      {t(item.label)}
                      <ChevronDown size={14} className={`transition-transform ${openDropdown === item.path ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 block"
                      style={{
                        color: location.pathname === item.path ? activeText : textColor,
                        fontWeight: location.pathname === item.path ? 600 : 500,
                      }}
                    >
                      {t(item.label)}
                    </Link>
                  )}

                  {item.children && (
                    <AnimatePresence>
                      {openDropdown === item.path && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setOpenDropdown(item.path)}
                          onMouseLeave={() => setOpenDropdown(null)}
                          className="absolute top-full left-0 mt-2 w-56 rounded-2xl shadow-2xl overflow-hidden"
                          style={{ background: isDark ? '#1A1A2E' : '#FFFFFF', border: `1px solid ${theme.navBorder}` }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150"
                              style={{ color: isDark ? '#E2E8F0' : '#0A1F44' }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.06)' : '#F8F9FC';
                                e.currentTarget.style.color = theme.navAccent;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = isDark ? '#E2E8F0' : '#0A1F44';
                              }}
                            >
                              <span className="w-2 h-2 rounded-full" style={{ background: child.path.includes('banco') ? '#F59E0B' : '#6D28D9' }} />
                              {t(child.label)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center rounded-full border border-current/10 overflow-hidden" aria-label={t('language.label')}>
                {(['es', 'en'] as const).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className="px-2.5 py-1 text-xs font-bold transition-colors"
                    style={{
                      background: i18n.language === lng ? theme.navAccent : 'transparent',
                      color: i18n.language === lng ? (theme.key === 'orchestra' ? '#0D0D1A' : '#0A1F44') : textColor,
                    }}
                  >
                    {t(`language.${lng}`)}
                  </button>
                ))}
              </div>

              {theme.key === 'main' && (
                <Link
                  to={PATHS.DONATE}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: scrolled ? '#0A1F44' : 'rgba(51,255,0,0.15)',
                    color: scrolled ? '#33FF00' : '#0A1F44',
                    border: `1px solid ${scrolled ? 'transparent' : 'rgba(51,255,0,0.3)'}`,
                  }}
                >
                  <Heart size={14} />
                  {t('nav.donate')}
                </Link>
              )}
              {theme.key === 'foodBank' && (
                <Link to={PATHS.FOOD_BANK_DONATE} className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105" style={{ background: '#EA580C', color: '#FFFFFF' }}>
                  <Heart size={14} />
                  {t('nav.donate')}
                </Link>
              )}
              {theme.key === 'orchestra' && (
                <Link to={PATHS.DONATE} className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105" style={{ background: '#FCD34D', color: '#0D0D1A' }}>
                  <Heart size={14} />
                  {t('nav.support')}
                </Link>
              )}

              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-xl transition-colors" style={{ color: textColor }} aria-label={t('nav.menu')}>
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 lg:hidden overflow-y-auto"
              style={{ background: isDark ? '#0D0D1A' : '#FFFFFF', borderLeft: `1px solid ${theme.navBorder}` }}
            >
              <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: theme.navBorder }}>
                <span className="font-bold" style={{ color: isDark ? '#F8FAFC' : theme.navText }}>{t('nav.menu')}</span>
                <button onClick={() => setMobileOpen(false)} style={{ color: isDark ? '#94A3B8' : theme.navText }}>
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      className="flex items-center px-3 py-3 rounded-xl text-sm font-medium transition-colors"
                      style={{
                        color: location.pathname === item.path ? theme.navAccent : textColor,
                        background: location.pathname === item.path ? (isDark ? 'rgba(255,255,255,0.06)' : '#F8F9FC') : 'transparent',
                      }}
                    >
                      {t(item.label)}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link key={child.path} to={child.path} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors" style={{ color: isDark ? '#CBD5E1' : '#475569' }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: theme.navAccent }} />
                            {t(child.label)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-4 border-t" style={{ borderColor: theme.navBorder }}>
                <Link to={PATHS.DONATE} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all" style={{ background: theme.navAccent, color: theme.key === 'orchestra' ? '#0D0D1A' : '#0A1F44' }}>
                  <Heart size={16} />
                  {t('nav.makeDonation')}
                </Link>
                <div className="mt-3 grid grid-cols-2 rounded-xl border overflow-hidden" style={{ borderColor: theme.navBorder }}>
                  {(['es', 'en'] as const).map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className="py-2 text-xs font-bold"
                      style={{
                        background: i18n.language === lng ? theme.navAccent : 'transparent',
                        color: i18n.language === lng ? (theme.key === 'orchestra' ? '#0D0D1A' : '#0A1F44') : textColor,
                      }}
                    >
                      {t(`language.${lng}`)}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
