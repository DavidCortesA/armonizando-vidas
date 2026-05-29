import { motion } from 'motion/react';
import { Heart, Clock, Users, Wrench, Music, ShoppingBasket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/common/SEOHead';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionBadge from '../components/common/SectionBadge';
import ImageStoryBand from '../components/common/ImageStoryBand';

const rolesMeta = [
  { icon: ShoppingBasket, color: '#F59E0B' },
  { icon: Music, color: '#A78BFA' },
  { icon: Wrench, color: '#33FF00' },
  { icon: Users, color: '#38BDF8' },
];

const whyColors = ['#33FF00', '#F59E0B', '#A78BFA', '#38BDF8', '#FB923C', '#FF00CC'];

export default function Volunteer() {
  const { t } = useTranslation();

  const whyItems = t('volunteer.why.items', { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const rolesItems = t('volunteer.roles.items', { returnObjects: true }) as Array<{ title: string; desc: string; commitment: string }>;
  const roles = rolesMeta.map((meta, i) => ({ ...meta, ...rolesItems[i] }));

  return (
    <>
      <SEOHead
        title={t('volunteer.seo.title')}
        description={t('volunteer.seo.description')}
      />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D0D1A 0%, #1E0A3C 50%, #1D4ED8 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-[rgba(167,139,250,0.08)] blur-3xl" />
          <div className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-[rgba(252,211,77,0.06)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="gold" className="mb-5">{t('volunteer.hero.badge')}</SectionBadge>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
              {t('volunteer.hero.title')}{' '}
              <span className="gradient-text-gold">{t('volunteer.hero.titleAccent')}</span>
            </h1>
            <p className="text-white/65 text-xl max-w-xl mx-auto">
              {t('volunteer.hero.subtitle')}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <ImageStoryBand
        badge={t('volunteer.storyBand.badge')}
        title={t('volunteer.storyBand.title')}
        accent={t('volunteer.storyBand.accent')}
        description={t('volunteer.storyBand.description')}
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80"
        imageAlt={t('volunteer.storyBand.imageAlt')}
        items={t('volunteer.storyBand.items', { returnObjects: true }) as string[]}
      />

      {/* WHY VOLUNTEER */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <RevealOnScroll>
              <SectionBadge color="lime" className="mb-4">{t('volunteer.why.badge')}</SectionBadge>
              <h2 className="text-4xl font-extrabold text-[#0A1F44] mt-2">
                {t('volunteer.why.title')} <span className="gradient-text-lime">{t('volunteer.why.titleAccent')}</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map(({ title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.08}>
                <div className="bg-[#F8F9FC] rounded-2xl p-6 border border-[#E2E8F0] hover-lift">
                  <div className="w-2 h-8 rounded-full mb-4" style={{ background: whyColors[i] }} />
                  <h3 className="font-bold text-[#0A1F44] mb-2">{title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="section-padding bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <RevealOnScroll>
              <SectionBadge color="lime" className="mb-4">{t('volunteer.roles.badge')}</SectionBadge>
              <h2 className="text-4xl font-extrabold text-[#0A1F44] mt-2">
                {t('volunteer.roles.title')} <span className="gradient-text-lime">{t('volunteer.roles.titleAccent')}</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {roles.map(({ icon: Icon, title, desc, commitment, color }, i) => (
              <RevealOnScroll key={title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover-lift flex gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1F44] mb-1">{title}</h3>
                    <p className="text-[#64748B] text-sm mb-3 leading-relaxed">{desc}</p>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color }}>
                      <Clock size={13} />
                      {commitment}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section-padding bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <SectionBadge color="lime" className="mb-4">{t('volunteer.form.badge')}</SectionBadge>
              <h2 className="text-4xl font-extrabold text-[#0A1F44] mt-2">
                {t('volunteer.form.title')} <span className="gradient-text-lime">{t('volunteer.form.titleAccent')}</span>
              </h2>
            </div>
            <div className="bg-[#F8F9FC] rounded-3xl p-8 border border-[#E2E8F0]">
              <div className="space-y-4">
                {[
                  { labelKey: 'volunteer.form.name', placeholderKey: 'volunteer.form.namePlaceholder' },
                  { labelKey: 'volunteer.form.email', placeholderKey: 'volunteer.form.emailPlaceholder' },
                  { labelKey: 'volunteer.form.phone', placeholderKey: 'volunteer.form.phonePlaceholder' },
                  { labelKey: 'volunteer.form.location', placeholderKey: 'volunteer.form.locationPlaceholder' },
                ].map(({ labelKey, placeholderKey }) => (
                  <div key={labelKey}>
                    <label className="block text-xs font-semibold text-[#64748B] mb-1.5">{t(labelKey)}</label>
                    <input
                      type="text"
                      placeholder={t(placeholderKey)}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] focus:outline-none focus:border-[#0A1F44] transition-colors text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-[#64748B] mb-1.5">{t('volunteer.form.area')}</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] focus:outline-none focus:border-[#0A1F44] text-sm">
                    <option value="">{t('volunteer.form.areaDefault')}</option>
                    {roles.map(({ title }) => <option key={title}>{title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#64748B] mb-1.5">{t('volunteer.form.motivation')}</label>
                  <textarea
                    rows={3}
                    placeholder={t('volunteer.form.motivationPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1F44] focus:outline-none focus:border-[#0A1F44] transition-colors text-sm resize-none"
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-4 rounded-xl bg-[#0A1F44] text-[#33FF00] font-bold text-base flex items-center justify-center gap-2"
              >
                <Heart size={20} />
                {t('volunteer.form.submit')}
              </motion.button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
