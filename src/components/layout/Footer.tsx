import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Globe, Play, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../routes/paths';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-[#081630] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(51,255,0,0.3)] to-transparent" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[rgba(51,255,0,0.03)] blur-3xl" />
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[rgba(255,0,204,0.03)] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logos/armonizando-vidas.png" alt={t('brand.main')} className="h-12 w-auto max-w-[150px] object-contain" />
              <div>
                <div className="font-bold text-sm leading-tight">{t('brand.main')}</div>
                <div className="text-xs text-white/50 leading-tight">{t('brand.mainSubtitle')}</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{t('footer.description')}</p>
            <div className="flex items-center gap-3">
              {[
                { icon: MessageCircle, href: '#', label: 'Instagram' },
                { icon: Globe, href: '#', label: 'Facebook' },
                { icon: Play, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="w-9 h-9 rounded-xl bg-white/6 border border-white/8 flex items-center justify-center text-white/60 hover:text-[#33FF00] hover:border-[rgba(51,255,0,0.3)] transition-all duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">{t('footer.programs')}</h3>
            <ul className="space-y-2.5">
              {[
                { label: t('nav.foodBank'), path: PATHS.FOOD_BANK },
                { label: t('footer.foodPrograms'), path: PATHS.FOOD_BANK_PROGRAMS },
                { label: t('nav.orchestra'), path: PATHS.ORCHESTRA },
                { label: t('footer.events'), path: PATHS.ORCHESTRA_EVENTS },
                { label: t('footer.musicGallery'), path: PATHS.ORCHESTRA_GALLERY },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-white/60 hover:text-white transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">{t('footer.organization')}</h3>
            <ul className="space-y-2.5">
              {[
                { label: t('footer.about'), path: PATHS.ABOUT },
                { label: t('nav.donate'), path: PATHS.DONATE },
                { label: t('nav.volunteer'), path: PATHS.VOLUNTEER },
                { label: t('nav.gallery'), path: PATHS.GALLERY },
                { label: t('nav.contact'), path: PATHS.CONTACT },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-white/60 hover:text-white transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              {[
                { icon: Mail, text: 'contacto@armonizandovidas.org' },
                { icon: Phone, text: '+52 (81) 0000-0000' },
                { icon: MapPin, text: 'Monterrey, Nuevo León, México' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon size={15} className="mt-0.5 text-[#33FF00] flex-shrink-0" />
                  <span className="text-sm text-white/60">{text}</span>
                </li>
              ))}
            </ul>

            <Link to={PATHS.DONATE} className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[rgba(51,255,0,0.1)] border border-[rgba(51,255,0,0.2)] text-[#33FF00] text-sm font-semibold hover:bg-[rgba(51,255,0,0.18)] transition-all duration-200">
              <Heart size={15} />
              {t('nav.makeDonation')}
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Armonizando Vidas A.B.P. — {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            {['privacy', 'terms', 'transparency'].map((item) => (
              <a key={item} href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {t(`footer.${item}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
