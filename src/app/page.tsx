"use client";

import { useState } from "react";
import Hero from "@/components/home/Hero";
import PartnerMarquee from "@/components/home/PartnerMarquee";
import SolutionSwitcher from "@/components/home/SolutionSwitcher";
import TechBentoGrid from "@/components/home/TechBentoGrid";
import MediaShowcase from "@/components/home/MediaShowcase";
import FastQuoteCalculator from "@/components/home/FastQuoteCalculator";
import InteractiveTestimonials from "@/components/home/InteractiveTestimonials";
import FuturisticCTA from "@/components/home/FuturisticCTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VoucherDrawer from "@/components/layout/VoucherDrawer";
import AuthModal from "@/components/layout/AuthModal";
import { X } from "lucide-react";

export default function Home() {
  const [heroVideoOpen, setHeroVideoOpen] = useState(false);
  const [voucherDrawerOpen, setVoucherDrawerOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="bg-white text-slate-900 min-h-screen overflow-x-hidden selection:bg-teal-100 selection:text-teal-900">
      
      {/* 1. HERO OPENING: Miko Tech 3D Stage + Commercial e-commerce category jumps & Vouchers */}
      <Hero
        onOpenVideo={() => setHeroVideoOpen(true)}
        onOpenVoucher={() => setVoucherDrawerOpen(true)}
        onOpenAuth={() => setAuthModalOpen(true)}
      />

      {/* 2. PARTNER MARQUEE: Scrolls smoothly into view as user scrolls */}
      <ScrollReveal direction="up" delay={50} duration={700}>
        <PartnerMarquee />
      </ScrollReveal>

      {/* 3. SOLUTION SWITCHER (HRM 4.0, Microsoft Licenses, SGIS Hospital) */}
      <ScrollReveal direction="up" delay={80} duration={750}>
        <SolutionSwitcher />
      </ScrollReveal>

      {/* 4. TECH BENTO GRID: FaceID live attendance, 3P salary calculator slider */}
      <ScrollReveal direction="up" delay={80} duration={750}>
        <TechBentoGrid />
      </ScrollReveal>

      {/* 5. MEDIA SHOWCASE: 20-Year Anniversary Video Theater */}
      <ScrollReveal direction="up" delay={80} duration={750}>
        <MediaShowcase />
      </ScrollReveal>

      {/* 6. FAST QUOTE & LICENSE ESTIMATOR */}
      <ScrollReveal direction="up" delay={80} duration={750}>
        <FastQuoteCalculator />
      </ScrollReveal>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <ScrollReveal direction="up" delay={80} duration={750}>
        <InteractiveTestimonials />
      </ScrollReveal>

      {/* 8. REFINED MODERN COMMERCIAL CTA CARD */}
      <ScrollReveal direction="up" delay={80} duration={750}>
        <FuturisticCTA />
      </ScrollReveal>

      {/* Global Hero Video Modal */}
      {heroVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md animate-fade-up">
          <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl">
            <button
              type="button"
              aria-label="Đóng video"
              onClick={() => setHeroVideoOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all"
            >
              <X className="h-5 w-5" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/ORv9zupc-qQ?autoplay=1&rel=0"
              title="Tân Phát ETEK Kỷ Niệm 20 Năm Thành Lập"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      )}

      {/* Global Voucher Drawer */}
      <VoucherDrawer
        isOpen={voucherDrawerOpen}
        onClose={() => setVoucherDrawerOpen(false)}
      />

      {/* Global Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
}
