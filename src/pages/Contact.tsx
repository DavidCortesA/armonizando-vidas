import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/common/SEOHead';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionBadge from '../components/common/SectionBadge';
import ImageStoryBand from '../components/common/ImageStoryBand';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('contact.seo.title')}
        description={t('contact.seo.description')}
      />

      {/* HERO */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #081630 0%, #0A1F44 100%)' }}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="lime" className="mb-5">{t('contact.hero.badge')}</SectionBadge>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              {t('contact.hero.title')} <span className="gradient-text-lime">{t('contact.hero.titleAccent')}</span>
            </h1>
            <p className="text-white/65 text-xl max-w-xl mx-auto">
              {t('contact.hero.subtitle')}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <ImageStoryBand
        badge={t('contact.storyBand.badge')}
        title={t('contact.storyBand.title')}
        accent={t('contact.storyBand.accent')}
        description={t('contact.storyBand.description')}
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
        imageAlt={t('contact.storyBand.imageAlt')}
        items={t('contact.storyBand.items', { returnObjects: true }) as string[]}
      />

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left — Info */}
            <RevealOnScroll direction="left">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0A1F44] mb-6">{t('contact.info.title')}</h2>
                <div className="space-y-5 mb-8">
                  {[
                    { icon: Mail, labelKey: 'contact.info.email', value: 'contacto@armonizandovidas.org', color: '#33FF00' },
                    { icon: Phone, labelKey: 'contact.info.phone', value: '+52 (81) 0000-0000', color: '#F59E0B' },
                    { icon: MapPin, labelKey: 'contact.info.location', value: 'Monterrey, Nuevo León, México', color: '#A78BFA' },
                    { icon: Clock, labelKey: 'contact.info.hours', valueKey: 'contact.info.hoursValue', color: '#38BDF8' },
                  ].map(({ icon: Icon, labelKey, value, valueKey, color }) => (
                    <div key={labelKey} className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
                        <Icon size={20} style={{ color }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wide mb-0.5">{t(labelKey)}</div>
                        <div className="text-[#0A1F44] font-medium">{valueKey ? t(valueKey) : value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#E2E8F0] pt-6">
                  <h3 className="text-sm font-bold text-[#0A1F44] mb-4">{t('contact.info.social')}</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: MessageCircle, href: '#', label: 'Instagram', color: '#FF00CC' },
                      { icon: Globe, href: '#', label: 'Facebook', color: '#1877F2' },
                      { icon: Play, href: '#', label: 'YouTube', color: '#FF0000' },
                    ].map(({ icon: Icon, href, label, color }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-11 h-11 rounded-xl bg-[#F8F9FC] border border-[#E2E8F0] flex items-center justify-center transition-all duration-200 hover:scale-105"
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = color; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#E2E8F0'; }}
                      >
                        <Icon size={18} style={{ color }} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right — Form */}
            <RevealOnScroll direction="right">
              <div className="bg-[#F8F9FC] rounded-3xl p-8 border border-[#E2E8F0]">
                <h2 className="text-2xl font-extrabold text-[#0A1F44] mb-6">{t('contact.form.title')}</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { labelKey: 'contact.form.name' },
                      { labelKey: 'contact.form.email' },
                    ].map(({ labelKey }) => (
                      <div key={labelKey}>
                        <label className="block text-xs font-semibold text-[#64748B] mb-1.5">{t(labelKey)}</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] focus:outline-none focus:border-[#0A1F44] transition-colors text-sm" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#64748B] mb-1.5">{t('contact.form.subject')}</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] focus:outline-none focus:border-[#0A1F44] text-sm">
                      <option>{t('contact.form.subjects.volunteer')}</option>
                      <option>{t('contact.form.subjects.donations')}</option>
                      <option>{t('contact.form.subjects.partnerships')}</option>
                      <option>{t('contact.form.subjects.foodBank')}</option>
                      <option>{t('contact.form.subjects.orchestra')}</option>
                      <option>{t('contact.form.subjects.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#64748B] mb-1.5">{t('contact.form.message')}</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] focus:outline-none focus:border-[#0A1F44] transition-colors text-sm resize-none" placeholder={t('contact.form.messagePlaceholder')} />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-5 py-4 rounded-xl bg-[#0A1F44] text-[#33FF00] font-bold flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {t('contact.form.send')}
                </motion.button>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>
    </>
  );
}
