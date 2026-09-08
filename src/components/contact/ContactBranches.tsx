"use client";

import { useState } from "react";
import { Building2, Clock, Compass, ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";

interface Branch {
  id: string;
  name: string;
  badge: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapsUrl: string;
  embedSrc: string;
  isHeadquarter?: boolean;
}

const BRANCHES: Branch[] = [
  {
    id: "hanoi",
    name: "Trụ Sở Chính — Hà Nội",
    badge: "Trung Tâm Điều Hành Toàn Quốc",
    address: "Tầng 12, Tòa nhà Etek, Đường Cầu Giấy, Q. Cầu Giấy, Hà Nội",
    phone: "1900 2026 / 024.7300.2026",
    email: "hanoi@etek-soft.vn",
    hours: "Thứ 2 - Thứ 7: 08:00 - 18:00 (Hỗ trợ kỹ thuật 24/7)",
    mapsUrl: "https://maps.google.com/?q=Cầu+Giấy,+Hà+Nội",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8638558814!2d105.7891868!3d21.0381328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab361a520c99%3A0x6a0a0352b92138e6!2zQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
    isHeadquarter: true,
  },
  {
    id: "hcm",
    name: "Chi Nhánh TP. Hồ Chí Minh",
    badge: "Văn Phòng Phát Triển Phía Nam",
    address: "Tầng 8, Tòa nhà Bitexco Nam Long, Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
    phone: "028.7300.2026 / 098.338.8196",
    email: "hcm@etek-soft.vn",
    hours: "Thứ 2 - Thứ 7: 08:00 - 17:30 (Kỹ sư trực 24/7)",
    mapsUrl: "https://maps.google.com/?q=Quận+1,+Hồ+Chí+Minh",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447952957199!2d106.7023348!3d10.7745778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4164b3fb09%3A0x8e87d5b1be2fdf40!2zUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
  },
  {
    id: "danang",
    name: "Chi Nhánh Miền Trung — Đà Nẵng",
    badge: "Trung Tâm Dịch Vụ Miền Trung",
    address: "Tòa nhà Danang Software Park, Đường Quang Trung, Q. Hải Châu, TP. Đà Nẵng",
    phone: "0236.730.2026",
    email: "danang@etek-soft.vn",
    hours: "Thứ 2 - Thứ 7: 08:00 - 17:30",
    mapsUrl: "https://maps.google.com/?q=Hải+Châu,+Đà+Nẵng",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8183296181414!2d108.2198048!3d16.0749007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218318288f615%3A0x6b772c21975e5a2c!2zSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
  },
];

export default function ContactBranches() {
  const [activeBranchId, setActiveBranchId] = useState<string>("hanoi");

  const currentBranch = BRANCHES.find((b) => b.id === activeBranchId) || BRANCHES[0];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 border-t border-slate-200/80">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-reveal="fade">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600 font-mono">
            <Compass className="h-4 w-4" />
            MẠNG LƯỚI CHI NHÁNH &amp; VĂN PHÒNG ĐẠI DIỆN
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            HỆ THỐNG 3 MIỀN{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              BẮC — TRUNG — NAM
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Đội ngũ kỹ sư ETEK-soft có mặt tại các trung tâm kinh tế trọng điểm, sẵn sàng đến tận văn phòng doanh nghiệp để khảo sát và hỗ trợ kỹ thuật trong ngày.
          </p>
        </div>

        {/* 3 Branch Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" data-reveal-group data-reveal-step="90">
          {BRANCHES.map((b) => {
            const isActive = b.id === activeBranchId;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setActiveBranchId(b.id)}
                data-reveal
                className={`group text-left rounded-3xl p-5 sm:p-6 transition-all duration-300 border ${
                  isActive
                    ? "border-blue-600 bg-gradient-to-br from-blue-50/90 to-sky-50/50 shadow-md ring-2 ring-blue-500/30 scale-[1.02]"
                    : "border-slate-200/90 bg-white hover:border-blue-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                      isActive ? "bg-blue-600 text-white shadow-md shadow-blue-500/25" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Building2 className="h-5 w-5" />
                  </span>
                  <span
                    className={`rounded-full px-3 py-0.5 text-[10px] font-bold font-mono ${
                      isActive ? "bg-blue-200/70 text-blue-900" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {b.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {b.name}
                </h3>
                <p className="mt-1 text-xs text-slate-600 line-clamp-2">{b.address}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Branch Detail + Interactive Map Container */}
        <div
          data-reveal="up"
          className="rounded-[2.5rem] border border-slate-200/90 bg-white shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
        >
          {/* Branch Information Details (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 bg-gradient-to-b from-white to-slate-50/50">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3 py-1 text-xs font-bold text-blue-800 mb-4">
                <MapPin className="h-3.5 w-3.5 text-blue-600" />
                <span>Đang hiển thị vị trí</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {currentBranch.name}
              </h3>
              <p className="mt-1 text-xs font-mono font-bold text-blue-600">{currentBranch.badge}</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">Địa chỉ</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5 leading-snug">
                      {currentBranch.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 mt-0.5">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">Điện thoại</p>
                    <a
                      href={`tel:${currentBranch.phone.split("/")[0].trim()}`}
                      className="text-xs sm:text-sm font-bold text-blue-600 hover:underline mt-0.5 block"
                    >
                      {currentBranch.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 mt-0.5">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">Email liên hệ</p>
                    <a
                      href={`mailto:${currentBranch.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-blue-600 mt-0.5 block"
                    >
                      {currentBranch.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100 mt-0.5">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">Giờ làm việc</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-700 mt-0.5">{currentBranch.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
              <a
                href={currentBranch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-blue-700 hover:scale-105 transition-all"
              >
                <Navigation className="h-4 w-4" />
                <span>Chỉ đường Google Maps</span>
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
              <a
                href={`tel:${currentBranch.phone.split("/")[0].trim()}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all"
              >
                <span>Gọi nhanh chi nhánh</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Visualizer (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] bg-slate-100">
            <iframe
              title={`Bản đồ ${currentBranch.name}`}
              src={currentBranch.embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            {/* Overlay badge on top of map */}
            <div className="pointer-events-none absolute top-4 right-4 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/85 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Định vị thời gian thực
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
