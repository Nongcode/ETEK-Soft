"use client";

import { Award, ShieldCheck, Cpu, Building2, Server, Database, Cloud, Layers } from "lucide-react";

interface PartnerItem {
  name: string;
  badge: string;
  icon: React.ElementType;
}

const partners: PartnerItem[] = [
  { name: "Microsoft", badge: "Gold Partner & Cloud Solutions", icon: Cloud },
  { name: "Tân Phát ETEK", badge: "20+ Năm Tự Động Hóa & Thiết Bị", icon: Building2 },
  { name: "Windows Server", badge: "Enterprise Tier 1", icon: Server },
  { name: "SGIS Informatics", badge: "Hospital Management Core", icon: Database },
  { name: "Intel Solutions", badge: "Technology Partner", icon: Cpu },
  { name: "Kaspersky", badge: "Authorized Security Suite", icon: ShieldCheck },
  { name: "Autodesk", badge: "AEC & Manufacturing License", icon: Layers },
  { name: "SQL Server", badge: "High Availability Systems", icon: Award },
];

export default function PartnerMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-[#f5f8fc] py-9">
      {/* Left/Right gradient fade masks for smooth transition */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f5f8fc] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f5f8fc] to-transparent" />

      <div className="mb-5 text-center" data-reveal="fade">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/95 px-4 py-1.5 shadow-sm backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700 sm:text-xs">
            Được tin cậy bởi hơn <span className="text-blue-600 font-black">500+</span> doanh nghiệp &amp; tập đoàn hàng đầu Việt Nam
          </p>
        </span>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333333%, 0, 0);
          }
        }
        .marquee-track-active {
          display: flex !important;
          width: max-content !important;
          animation: marqueeScroll 28s linear infinite !important;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
        }
        .marquee-track-active:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track marquee-track-active flex w-max items-center gap-5">
        {[...partners, ...partners, ...partners].map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={`${p.name}-${i}`}
              className="group flex items-center gap-3 rounded-full border border-slate-200/90 bg-white px-5 py-2.5 shadow-sm transition-[transform,border-color,box-shadow] duration-300 hover:border-blue-400 hover:shadow-md hover:scale-105"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon className="h-4 w-4" />
              </span>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {p.name}
                </p>
                <p className="text-[10px] text-slate-500 font-medium">
                  {p.badge}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
