import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInteractiveTerminal from "@/components/contact/ContactInteractiveTerminal";
import ContactBranches from "@/components/contact/ContactBranches";
import ContactSlaPledge from "@/components/contact/ContactSlaPledge";
import ContactFaq from "@/components/contact/ContactFaq";

export const metadata: Metadata = {
  title: "Liên Hệ ETEK-soft | Tư Vấn Bản Quyền & Giải Pháp Doanh Nghiệp 24/7",
  description:
    "Kết nối với đội ngũ chuyên gia ETEK-soft — Hotline 1900 2026, tư vấn bản quyền Microsoft, triển khai HRM 4.0 FaceID và hỗ trợ kỹ thuật tận nơi tại Hà Nội, Đà Nẵng, TP.HCM.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 pb-16">
      {/* 1. Hero Section: Aurora Glow, Live Online Engineer Badge & 3 Quick Channels */}
      <ContactHero />

      {/* 2. Interactive Terminal: Service Switcher, Glassmorphism Form & SLA Commitments */}
      <ContactInteractiveTerminal />

      {/* 3. Branch Hubs: 3 Regional Offices (Hanoi, Danang, HCM) with Live Map Visualizer */}
      <ContactBranches />

      {/* 4. Service Level Agreement (SLA) & Corporate Guarantees */}
      <ContactSlaPledge />

      {/* 5. Frequently Asked Questions Accordion */}
      <ContactFaq />
    </div>
  );
}
