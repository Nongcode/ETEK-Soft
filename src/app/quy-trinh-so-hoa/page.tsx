import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import WorkflowDetailView from "@/components/workflow/WorkflowDetailView";
import { Sparkles, ShieldCheck, ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Quy trình số hóa — Sơ đồ 4 Pha & 9 Giai đoạn triển khai chuẩn mực",
  description:
    "Quy trình khảo sát, tư vấn, triển khai và vận hành giải pháp phần mềm ETEK-soft qua 4 Pha (Khảo sát, Tư vấn, Triển khai, Vận hành) và 9 giai đoạn kiểm soát Gate nghiêm ngặt.",
};

export default function WorkflowProcessPage() {
  return (
    <div className="pb-4">
      {/* Hero Header Section with High-Tech Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#ebf3fa] via-white to-slate-50/80 pt-4 pb-12 sm:pb-16 lg:pb-20 border-b border-slate-200">
        {/* Background Ambient Glows & Tech Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          {/* Breadcrumb Navigation inside banner */}
          <div className="mb-4 sm:mb-6">
            <Breadcrumb items={[{ label: "Quy trình số hóa" }]} noContainer />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Heading, Description & 4-Phase Highlights */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-1.5 shadow-xs backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-blue-700 font-mono">
                  PHƯƠNG PHÁP LUẬN TRIỂN KHAI CHUYỂN ĐỔI SỐ
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-[1.15]">
                QUY TRÌNH SỐ HÓA TOÀN DIỆN
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                Mô hình <strong>4 Pha chuẩn hóa</strong> và <strong>9 Giai đoạn chuyên sâu</strong> (GĐ0 → GĐ8) với cơ chế thẩm định chất lượng <strong>Gate Review</strong> nghiêm ngặt, đảm bảo 100% dự án đúng tiến độ và hiệu quả đầu tư.
              </p>

              {/* 4-Phase Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="p-3.5 rounded-2xl bg-white border border-sky-200 shadow-xs">
                  <span className="text-[11px] font-mono font-extrabold text-sky-600 uppercase">Pha 1</span>
                  <p className="text-sm font-black text-slate-900 mt-0.5">Khảo Sát</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">GĐ0 → GĐ2</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 shadow-xs">
                  <span className="text-[11px] font-mono font-extrabold text-emerald-600 uppercase">Pha 2</span>
                  <p className="text-sm font-black text-slate-900 mt-0.5">Tư Vấn</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">GĐ3 → GĐ5</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-orange-200 shadow-xs">
                  <span className="text-[11px] font-mono font-extrabold text-orange-600 uppercase">Pha 3</span>
                  <p className="text-sm font-black text-slate-900 mt-0.5">Triển Khai</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">GĐ6 → GĐ7</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-purple-200 shadow-xs">
                  <span className="text-[11px] font-mono font-extrabold text-purple-600 uppercase">Pha 4</span>
                  <p className="text-sm font-black text-slate-900 mt-0.5">Vận Hành</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">GĐ8 Go-live</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#workflow-diagram-map"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all"
                >
                  <span>Khám phá bản đồ quy trình</span>
                  <ArrowDown className="h-4 w-4 animate-bounce" />
                </a>
                <a
                  href="#consultation-anchor"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-xs"
                >
                  <span>Đăng ký khảo sát miễn phí</span>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Column (5 cols): Bright High-Resolution Banner Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-blue-200/90 shadow-2xl shadow-blue-500/15 group bg-white">
                <Image
                  src="/images/workflow-hero-bright.jpg"
                  alt="Sơ đồ 4 Pha quy trình số hóa ETEK-soft"
                  width={720}
                  height={480}
                  priority
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Glassmorphic Status Bar */}
                <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Mô hình chuẩn ISO/IEC</p>
                      <p className="text-[11px] text-slate-500 leading-tight">Thẩm định Gate Review 100%</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200 whitespace-nowrap">
                    4 Pha • 9 Giai đoạn
                  </span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Main Interactive Workflow View */}
      <div id="workflow-diagram-map">
        <WorkflowDetailView />
      </div>
    </div>
  );
}
