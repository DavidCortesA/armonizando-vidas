export type ThemeKey = 'main' | 'foodBank' | 'orchestra';

export interface Theme {
  key: ThemeKey;
  // Navbar
  navBg: string;
  navBgScrolled: string;
  navText: string;
  navTextHover: string;
  navAccent: string;
  navBorder: string;
  navLogoSrc: string;
  // Brand
  primary: string;
  primaryLight: string;
  secondary: string;
  accent: string;
  accentLight: string;
  bg: string;
  bgAlt: string;
  textDark: string;
  textMid: string;
  // Gradient classes
  gradientHero: string;
  gradientCta: string;
  gradientText: string;
  // Button
  btnPrimary: string;
  btnPrimaryHover: string;
  btnSecondary: string;
  // Badge
  badgeBg: string;
  badgeText: string;
  // Name
  label: string;
  tagline: string;
}

export const mainTheme: Theme = {
  key: 'main',
  navBg: 'rgba(255,255,255,0)',
  navBgScrolled: 'rgba(255,255,255,0.95)',
  navText: '#0A1F44',
  navTextHover: '#33FF00',
  navAccent: '#33FF00',
  navBorder: 'rgba(10,31,68,0.08)',
  navLogoSrc: '/logos/armonizando-vidas-logo.png',
  primary: '#0A1F44',
  primaryLight: '#1a3a6b',
  secondary: '#33FF00',
  accent: '#FF00CC',
  accentLight: 'rgba(51,255,0,0.1)',
  bg: '#FFFFFF',
  bgAlt: '#F8F9FC',
  textDark: '#0A1F44',
  textMid: '#475569',
  gradientHero: 'linear-gradient(135deg, #0A1F44 0%, #1a3a6b 60%, #0c2850 100%)',
  gradientCta: 'linear-gradient(135deg, #081630 0%, #0A1F44 100%)',
  gradientText: 'gradient-text-lime',
  btnPrimary: 'bg-[#33FF00] text-[#0A1F44] hover:bg-[#2ae600]',
  btnPrimaryHover: '#2ae600',
  btnSecondary: 'border border-white/30 text-white hover:bg-white/10',
  badgeBg: 'rgba(51,255,0,0.12)',
  badgeText: '#33FF00',
  label: 'Armonizando Vidas A.B.P.',
  tagline: 'Transformando comunidades, cambiando vidas',
};

export const foodBankTheme: Theme = {
  key: 'foodBank',
  navBg: 'rgba(255,251,245,0)',
  navBgScrolled: 'rgba(255,251,245,0.97)',
  navText: '#92400E',
  navTextHover: '#EA580C',
  navAccent: '#F59E0B',
  navBorder: 'rgba(245,158,11,0.15)',
  navLogoSrc: '/logos/banco-alimentos-logo.png',
  primary: '#EA580C',
  primaryLight: '#FB923C',
  secondary: '#F59E0B',
  accent: '#D97706',
  accentLight: 'rgba(245,158,11,0.12)',
  bg: '#FFFBF5',
  bgAlt: '#FEF3C7',
  textDark: '#78350F',
  textMid: '#92400E',
  gradientHero: 'linear-gradient(135deg, #7C2D12 0%, #C2410C 50%, #D97706 100%)',
  gradientCta: 'linear-gradient(135deg, #92400E 0%, #EA580C 100%)',
  gradientText: 'gradient-text-fire',
  btnPrimary: 'bg-[#F59E0B] text-white hover:bg-[#D97706]',
  btnPrimaryHover: '#D97706',
  btnSecondary: 'border border-white/30 text-white hover:bg-white/10',
  badgeBg: 'rgba(245,158,11,0.15)',
  badgeText: '#D97706',
  label: 'Banco de Alimentos',
  tagline: 'Alimentando esperanzas, construyendo comunidades',
};

export const orchestraTheme: Theme = {
  key: 'orchestra',
  navBg: 'rgba(13,13,26,0)',
  navBgScrolled: 'rgba(13,13,26,0.97)',
  navText: '#E2E8F0',
  navTextHover: '#FCD34D',
  navAccent: '#FCD34D',
  navBorder: 'rgba(167,139,250,0.15)',
  navLogoSrc: '/logos/orquestas-del-rey-logo.png',
  primary: '#4C1D95',
  primaryLight: '#6D28D9',
  secondary: '#1D4ED8',
  accent: '#D97706',
  accentLight: 'rgba(252,211,77,0.12)',
  bg: '#0D0D1A',
  bgAlt: '#1A1A2E',
  textDark: '#F8FAFC',
  textMid: '#CBD5E1',
  gradientHero: 'linear-gradient(135deg, #0D0D1A 0%, #1E0A3C 40%, #1D4ED8 100%)',
  gradientCta: 'linear-gradient(135deg, #1E0A3C 0%, #4C1D95 100%)',
  gradientText: 'gradient-text-gold',
  btnPrimary: 'bg-[#FCD34D] text-[#0D0D1A] hover:bg-[#F59E0B]',
  btnPrimaryHover: '#F59E0B',
  btnSecondary: 'border border-white/20 text-white hover:bg-white/8',
  badgeBg: 'rgba(252,211,77,0.12)',
  badgeText: '#FCD34D',
  label: 'Orquestas del Rey',
  tagline: 'Arte, música y excelencia para transformar vidas',
};

export const themes: Record<ThemeKey, Theme> = {
  main: mainTheme,
  foodBank: foodBankTheme,
  orchestra: orchestraTheme,
};
