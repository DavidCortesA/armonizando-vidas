import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingBasket, Shield, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/common/SEOHead';
import RevealOnScroll from '../../components/common/RevealOnScroll';
import SectionBadge from '../../components/common/SectionBadge';
import ImageStoryBand from '../../components/common/ImageStoryBand';

const amounts = [150, 300, 600, 1500];
const impactColors = ['#F59E0B', '#EA580C', '#D97706', '#92400E'];

export default function FoodBankDonate() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(300);
  const [custom, setCustom] = useState('');

  const finalAmount = custom ? parseInt(custom) || 0 : selected;
  const impactItems = t('foodBankDonate.impact.items', { returnObjects: true }) as Array<{ amount: string; text: string }>;

  return (
    <>
      <SEOHead
        title={t('foodBankDonate.seo.title')}
        description={t('foodBankDonate.seo.description')}
      />

      <section className="relative py-24 pt-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #C2410C 60%, #D97706 100%)' }}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionBadge color="fire" className="mb-5">{t('foodBankDonate.hero.badge')}</SectionBadge>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              {t('foodBankDonate.hero.title')}{' '}
              <span style={{ background: 'linear-gradient(90deg, #FEF3C7, #FCD34D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {t('foodBankDonate.hero.titleAccent')}
              </span>
            </h1>
            <p className="text-white/70 text-lg">{t('foodBankDonate.hero.subtitle')}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFBF5] to-transparent" />
      </section>

      <ImageStoryBand
        badge={t('foodBankDonate.storyBand.badge')}
        title={t('foodBankDonate.storyBand.title')}
        accent={t('foodBankDonate.storyBand.accent')}
        description={t('foodBankDonate.storyBand.description')}
        image="https://images.unsplash.com/photo-1578496781985-452d4a934d50?w=1200&q=80"
        imageAlt={t('foodBankDonate.storyBand.imageAlt')}
        tone="food"
        items={t('foodBankDonate.storyBand.items', { returnObjects: true }) as string[]}
      />

      <section className="section-padding bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            <RevealOnScroll direction="left">
              <div className="bg-white rounded-3xl p-7 border border-[rgba(245,158,11,0.2)]">
                <h2 className="text-xl font-extrabold text-[#78350F] mb-5 flex items-center gap-2">
                  <ShoppingBasket size={20} className="text-[#EA580C]" />
                  {t('foodBankDonate.form.title')}
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => { setSelected(amt); setCustom(''); }}
                      className={`py-3 rounded-xl font-bold text-sm border transition-all ${selected === amt && !custom ? 'text-white border-transparent' : 'bg-[#FFFBF5] border-[rgba(245,158,11,0.2)] text-[#92400E]'}`}
                      style={selected === amt && !custom ? { background: 'linear-gradient(135deg, #C2410C, #D97706)' } : {}}
                    >
                      ${amt.toLocaleString('es-MX')}
                    </button>
                  ))}
                </div>
                <div className="relative mb-5">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#92400E] font-semibold">$</span>
                  <input
                    type="number"
                    placeholder={t('foodBankDonate.form.otherAmount')}
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-[rgba(245,158,11,0.2)] bg-[#FFFBF5] text-[#78350F] focus:outline-none focus:border-[#EA580C] transition-colors font-semibold"
                  />
                </div>
                <div className="space-y-3 mb-5">
                  {[
                    { key: 'foodBankDonate.form.name' },
                    { key: 'foodBankDonate.form.email' },
                    { key: 'foodBankDonate.form.phone' },
                  ].map(({ key }) => (
                    <input key={key} type="text" placeholder={t(key)} className="w-full px-4 py-3 rounded-xl border border-[rgba(245,158,11,0.2)] bg-[#FFFBF5] text-[#78350F] focus:outline-none focus:border-[#EA580C] transition-colors text-sm" />
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #C2410C, #D97706)' }}
                >
                  <Heart size={18} />
                  {t('foodBankDonate.form.submit', { amount: finalAmount.toLocaleString('es-MX') })}
                </motion.button>
                <div className="flex items-center justify-center gap-2 mt-3 text-xs text-[#92400E]/50">
                  <Shield size={13} /> {t('foodBankDonate.form.secure')}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div>
                <h2 className="text-xl font-extrabold text-[#78350F] mb-5">{t('foodBankDonate.impact.title')}</h2>
                <div className="space-y-4">
                  {impactItems.map(({ amount, text }, i) => (
                    <div key={amount} className="flex gap-3 bg-white rounded-2xl p-4 border border-[rgba(245,158,11,0.15)]">
                      <CheckCircle2 size={18} style={{ color: impactColors[i] }} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-sm" style={{ color: impactColors[i] }}>{amount}</span>
                        <span className="text-sm text-[#92400E]/70 ml-1.5">{text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
