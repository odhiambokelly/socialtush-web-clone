import { motion } from 'framer-motion';
import { Button } from '@blinkdotnew/ui';
import { Hero } from '../components/home/Hero';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { TeamSection } from '../components/home/TeamSection';
import { ContactSection } from '../components/home/ContactSection';
import { PricingSection } from '../components/home/PricingSection';
import { RefundPolicySection } from '../components/home/RefundPolicySection';
import { AffiliateSection } from '../components/home/AffiliateSection';

export function HomePage() {
  return (
    <div className="pt-16 md:pt-20">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <PricingSection />
      <RefundPolicySection />
      <AffiliateSection />
    </div>
  );
}
