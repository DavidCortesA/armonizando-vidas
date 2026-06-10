import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="page-container flex flex-col items-center justify-between gap-5 border-t border-line py-8 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <a href="/#inicio" aria-label="Armonizando Vidas A.B.P., volver al inicio">
            <img src="/logos/armonizando-vidas.png" alt="" className="h-10 w-10 object-contain" />
          </a>
          <div>
            <a href="/#inicio" className="text-sm font-extrabold text-ink hover:text-magenta">
              Armonizando Vidas A.B.P.
            </a>
            <p className="mt-0.5 max-w-sm text-xs leading-5 text-slate">
              Apoyo comunitario, alimento y esperanza para familias en situación vulnerable.
            </p>
            <a
              href="mailto:armonizandovidasabp@gmail.com"
              className="mt-1 inline-block text-xs font-semibold text-magenta hover:text-ink"
            >
              armonizandovidasabp@gmail.com
            </a>
          </div>
        </div>

        <p className="text-xs text-slate">
          © {new Date().getFullYear()} Armonizando Vidas A.B.P. Todos los derechos reservados.
        </p>

        <a href="/#ayudar" className="inline-flex items-center gap-2 text-sm font-bold text-magenta transition-colors hover:text-ink">
          <Heart size={16} aria-hidden="true" />
          Sumarme a la causa
        </a>
      </div>
    </footer>
  );
}
