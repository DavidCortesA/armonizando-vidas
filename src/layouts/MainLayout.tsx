import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

export default function MainLayout() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView();
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [hash, pathname]);

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#contenido-principal"
        className="skip-link"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById('contenido-principal');
          main?.focus();
          main?.scrollIntoView();
          window.history.replaceState(null, '', '#contenido-principal');
        }}
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="contenido-principal" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
