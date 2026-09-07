"use client";

import { Award, Users, ShieldCheck, Clock } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  {
    icon: Award,
    color: "blue",
    bgIcon: "bg-blue-50 text-blue-600",
    value: <AnimatedCounter target={20} suffix="+" />,
    title: "Năm Vững Bước Phát Triển",
    desc: "Thành lập và khẳng định vị thế từ 2004",
  },
  {
    icon: Users,
    color: "cyan",
    bgIcon: "bg-cyan-50 text-cyan-600",
    value: <AnimatedCounter target={500} suffix="+" />,
    title: "Doanh Nghiệp Triển Khai",
    desc: "Tin dùng hệ sinh thái ETEK toàn quốc",
  },
  {
    icon: ShieldCheck,
    color: "emerald",
    bgIcon: "bg-emerald-50 text-emerald-600",
    value: <AnimatedCounter target={99.9} decimals={1} suffix="%" />,
    title: "Bản Quyền Hợp Lệ 100%",
    desc: "CO/CQ chính hãng & VAT đầy đủ",
  },
  {
    icon: Clock,
    color: "violet",
    bgIcon: "bg-violet-50 text-violet-600",
    value: <AnimatedCounter target={24} isSpecialTime={true} />,
    title: "Hỗ Trợ Kỹ Thuật Chuyên Sâu",
    desc: "Kỹ sư chính hãng phản hồi dưới 15 phút",
  },
];

export default function CredibilityStats() {
  return (
    <section className="relative overflow-hidden bg-miko-beige py-12 sm:py-16 border-y border-miko">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Sub-Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600 font-mono">
              20 NĂM ĐỒNG HÀNH & BẢO CHỨNG
            </span>
            <h2 className="mt-2 text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
              NHỮNG CON SỐ KHẲNG ĐỊNH UY TÍN
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Animated Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-reveal-group data-reveal-step="110">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                data-reveal
                className="group relative rounded-[2rem] bg-white p-6 sm:p-7 border border-miko shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center flex flex-col justify-between"
              >
                <div>
                  <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl ${s.bgIcon} mb-4 transition-transform group-hover:scale-110`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono tracking-tight">
                    {s.value}
                  </div>
                  <h3 className="mt-3 text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-slate-500 font-medium pt-3 border-t border-slate-100">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
