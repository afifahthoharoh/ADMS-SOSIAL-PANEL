/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BenefitsSection } from './components/BenefitsSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HowItWorks } from './components/HowItWorks';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWaButton } from './components/FloatingWaButton';
import { LeadModal } from './components/LeadModal';
import { BonusScriptsModal } from './components/BonusScriptsModal';
import { SeoInspectorModal } from './components/SeoInspectorModal';
import { BRAND_INFO, SEO_DATA } from './data/content';

export default function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [isBonusModalOpen, setIsBonusModalOpen] = useState(false);
  const [isSeoModalOpen, setIsSeoModalOpen] = useState(false);

  // Inject SEO title & schema JSON-LD on mount
  useEffect(() => {
    document.title = SEO_DATA.title;

    // Inject Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', SEO_DATA.metaDescription);

    // Inject Schema JSON-LD
    const schemaScriptId = 'armada-adms-schema-jsonld';
    if (!document.getElementById(schemaScriptId)) {
      const script = document.createElement('script');
      script.id = schemaScriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": BRAND_INFO.fullName,
        "alternateName": BRAND_INFO.name,
        "url": "https://armada-adms.id",
        "telephone": "+6281234567890",
        "email": BRAND_INFO.email,
        "description": SEO_DATA.metaDescription,
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "10450"
        }
      });
      document.head.appendChild(script);
    }
  }, []);

  const handleOpenLeadModal = (service?: string) => {
    setSelectedService(service);
    setIsLeadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-amber-500 selection:text-white">
      
      {/* 1. Navigation Header */}
      <Navbar 
        onOpenLeadModal={handleOpenLeadModal} 
        onOpenSeoModal={() => setIsSeoModalOpen(true)}
        onOpenBonusModal={() => setIsBonusModalOpen(true)}
      />

      {/* 2. HERO SECTION (Above the fold with live broadcast simulator) */}
      <main>
        <Hero 
          onOpenLeadModal={handleOpenLeadModal}
          onOpenBonusModal={() => setIsBonusModalOpen(true)}
        />

        {/* 3. PROBLEM SECTION (4 Masalah Bikin Boncos & Storytelling) */}
        <ProblemSection />

        {/* 4. SOLUTION / LAYANAN UTAMA (WA Blast + 6 Digital Marketing pillars) */}
        <ServicesSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 5. KEUNGGULAN & INTERACTIVE ROI CALCULATOR */}
        <WhyChooseUs onOpenLeadModal={handleOpenLeadModal} />

        {/* 6. BENEFIT SECTION (Hasil yang didapat) */}
        <BenefitsSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 7. PRICE / PACKAGES (WA Blast 1k-100k + Ads All-in-One + Switcher) */}
        <PricingSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 8. TESTIMONIALS & CASE STUDIES (+ Industry Filters) */}
        <TestimonialsSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 9. HOW IT WORKS (Step by step 1-4) */}
        <HowItWorks onOpenLeadModal={handleOpenLeadModal} />

        {/* 10. FAQ SECTION (Accordion & Categories) */}
        <FaqSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 11. CTA SECTION (Urgency closing with Countdown Timer) */}
        <CtaSection onOpenLeadModal={handleOpenLeadModal} />
      </main>

      {/* 12. FOOTER (Kontak, Alamat, SEO keywords) */}
      <Footer 
        onOpenLeadModal={handleOpenLeadModal}
        onOpenSeoModal={() => setIsSeoModalOpen(true)}
        onOpenBonusModal={() => setIsBonusModalOpen(true)}
      />

      {/* EXTRA 1: Floating WhatsApp Button */}
      <FloatingWaButton onOpenLeadModal={handleOpenLeadModal} />

      {/* EXTRA 2: Form Lead Capture Modal */}
      <LeadModal 
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        initialService={selectedService}
      />

      {/* BONUS 1: WhatsApp Closing Scripts Copybook Modal */}
      <BonusScriptsModal
        isOpen={isBonusModalOpen}
        onClose={() => setIsBonusModalOpen(false)}
        onOpenLeadModal={handleOpenLeadModal}
      />

      {/* BONUS 2: SEO Inspector & Schema Transparency Modal */}
      <SeoInspectorModal
        isOpen={isSeoModalOpen}
        onClose={() => setIsSeoModalOpen(false)}
        onOpenLeadModal={handleOpenLeadModal}
      />

    </div>
  );
}

