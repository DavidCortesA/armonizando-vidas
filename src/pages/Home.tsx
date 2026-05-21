import { useTranslation } from 'react-i18next';
import SEOHead from '../components/common/SEOHead';
import HeroSection from '../components/sections/home/HeroSection';
import MissionSection from '../components/sections/home/MissionSection';
import ProgramsSection from '../components/sections/home/ProgramsSection';
import StatsSection from '../components/sections/home/StatsSection';
import TestimonialsSection from '../components/sections/home/TestimonialsSection';
import GalleryPreview from '../components/sections/home/GalleryPreview';
import CTASection from '../components/sections/home/CTASection';
import PartnersSection from '../components/sections/home/PartnersSection';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead title={t('seo.homeTitle')} description={t('seo.homeDescription')} />
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <StatsSection />
      <GalleryPreview />
      <TestimonialsSection />
      <CTASection />
      <PartnersSection />
    </>
  );
}
