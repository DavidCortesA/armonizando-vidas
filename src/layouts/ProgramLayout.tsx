import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useTheme } from '../contexts/ThemeContext';
import type { ThemeKey } from '../contexts/ThemeContext';

interface ProgramLayoutProps {
  theme: ThemeKey;
}

export default function ProgramLayout({ theme: themeKey }: ProgramLayoutProps) {
  const { setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setTheme(themeKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, themeKey, setTheme]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

