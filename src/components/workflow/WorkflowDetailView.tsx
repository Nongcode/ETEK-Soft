"use client";

import { useState } from "react";
import Link from "next/link";
import {
  WORKFLOW_PHASES,
  ALL_WORKFLOW_STAGES,
  WORKFLOW_TOOLS,
  WorkflowStage,
  WorkflowPhase,
  WorkflowTool,
} from "@/data/workflowProcess";
import Container from "@/components/ui/Container";
import ConsultationForm from "@/components/forms/ConsultationForm";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  FileCheck,
  Target,
  Sparkles,
  Layers,
  HelpCircle,
  Clock,
  RotateCcw,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  FileText,
  Info,
  ExternalLink,
  Cpu,
  BarChart3,
  Building2,
  TrendingUp,
} from "lucide-react";

const featuredSolutions = [
  {
    id: "hrm",
    badge: "HRM 4.0 ENTERPRISE",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    title: "Giải Pháp Quản Trị Nhân Sự Toàn Diện HRM 4.0",
    slug: "giai-phap-quan-tri-nhan-su-toan-dien-hrm",
    tagline: "Số hóa 100% quy trình từ chấm công AI FaceID, phân ca kíp phức tạp đến tính lương 3P và KPI tự động.",
    highlights: [
      "Chấm công AI FaceID & GPS đa chi nhánh",
      "Tự động hóa 100% công thức tính lương 3P",
      "Phê duyệt đơn từ online qua Mobile App",
      "Đánh giá hiệu suất KPI/OKR 360 độ",
    ],
    metric: "85%",
    metricLabel: "Tiết kiệm thời gian chốt lương",
    color: "#0284c7",
    btnColor: "bg-sky-600 hover:bg-sky-700",
    accentBorder: "border-sky-300 hover:border-sky-500",
  },
  {
    id: "erp",
    badge: "ERP INTELLIGENT CLOUD",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    title: "Giải Pháp Quản Trị Doanh Nghiệp Tổng Thể ERP",
    slug: "giai-phap-quan-tri-doanh-nghiep-tong-the-erp",
    tagline: "Hợp nhất toàn diện Kế toán tài chính, Mua hàng, Bán hàng, Kho vận và Sản xuất trên một nền tảng dữ liệu thời gian thực.",
    highlights: [
      "Kế toán VAS & IFRS, xuất hóa đơn điện tử",
      "Kho thông minh Barcode/QR Code thời gian thực",
      "Hoạch định nhu cầu nguyên vật liệu sản xuất (MRP)",
      "Dashboard BI trực quan cho Ban Giám Đốc",
    ],
    metric: "40%",
    metricLabel: "Cắt giảm chi phí vận hành",
    color: "#16a34a",
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
    accentBorder: "border-emerald-300 hover:border-emerald-500",
  },
  {
    id: "sgis",
    badge: "TIÊU CHUẨN BỘ Y TẾ",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    title: "Giải Pháp Quản Lý Y Tế & Bệnh Viện Thông Minh SGIS",
    slug: "giai-phap-quan-ly-tong-the-benh-vien",
    tagline: "Nền tảng HIS, EMR bệnh án điện tử không giấy tờ, tích hợp xét nghiệm LIS/PACS và liên thông cổng BHYT Quốc gia.",
    highlights: [
      "Tiếp đón thông minh qua CCCD gắn chip & VNeID",
      "Hồ sơ bệnh án điện tử (EMR) ký số bác sĩ",
      "Liên thông trực tiếp cổng giám định BHYT",
      "Quản trị kho dược, vật tư y tế chuẩn GSP",
    ],
    metric: "-45%",
    metricLabel: "Thời gian chờ khám bệnh",
    color: "#ea580c",
    btnColor: "bg-orange-600 hover:bg-orange-700",
    accentBorder: "border-orange-300 hover:border-orange-500",
  },
];

export default function WorkflowDetailView() {
  const [selectedStageId, setSelectedStageId] = useState<string>("gd0");
  const [activePhaseFilter, setActivePhaseFilter] = useState<number | null>(null);
  const [expandedToolId, setExpandedToolId] = useState<string | null>(null);

  const activeStage =
    ALL_WORKFLOW_STAGES.find((s) => s.id === selectedStageId) || ALL_WORKFLOW_STAGES[0];
  const activePhase =
    WORKFLOW_PHASES.find((p) => p.id === activeStage.phaseId) || WORKFLOW_PHASES[0];

  const stageTools = WORKFLOW_TOOLS.filter(
    (t) => activeStage.toolCodes?.includes(t.code) || t.stageIds.includes(activeStage.id)
  );

  const currentIndex = ALL_WORKFLOW_STAGES.findIndex((s) => s.id === activeStage.id);
  const prevStage = currentIndex > 0 ? ALL_WORKFLOW_STAGES[currentIndex - 1] : null;
  const nextStage =
    currentIndex < ALL_WORKFLOW_STAGES.length - 1 ? ALL_WORKFLOW_STAGES[currentIndex + 1] : null;

  const handleSelectStage = (stageId: string) => {
    setSelectedStageId(stageId);
    // Smooth scroll down to stage detail inspector for all screen sizes
    setTimeout(() => {
      const el = document.getElementById("stage-detail-inspector");
      if (el) {
        const headerOffset = 90; // buffer for sticky/fixed navigation
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* 1. VISUAL WORKFLOW MAP (Full 4 Pha & 9 Giai đoạn) */}
      <section className="bg-slate-50/80 border-b border-slate-200 py-12 lg:py-16">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 font-mono uppercase tracking-wider mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                Sơ đồ tiến trình toàn diện
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Bản đồ 4 Pha & 9 Giai đoạn số hóa
              </h2>
              <p className="mt-1 text-sm sm:text-base text-slate-600">
                Nhấp vào từng giai đoạn bên dưới để xem chi tiết mục tiêu, hoạt động và điều kiện nghiệm thu Gate Check.
              </p>
            </div>

            {/* Phase Quick Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActivePhaseFilter(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activePhaseFilter === null
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                Tất cả các pha
              </button>
              {WORKFLOW_PHASES.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhaseFilter(phase.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    activePhaseFilter === phase.id
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {phase.code}: {phase.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sơ đồ 4 Pha Pipelines */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {WORKFLOW_PHASES.filter(
              (p) => activePhaseFilter === null || activePhaseFilter === p.id
            ).map((phase) => {
              const isPhaseActive = activeStage.phaseId === phase.id;

              return (
                <div
                  key={phase.id}
                  className={`rounded-2xl border transition-all duration-300 flex flex-col bg-white shadow-sm overflow-hidden ${
                    isPhaseActive
                      ? "border-blue-400 ring-2 ring-blue-500/15"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Phase Header Banner */}
                  <div
                    className="px-5 py-4 text-white"
                    style={{
                      background:
                        phase.id === 1
                          ? "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)"
                          : phase.id === 2
                          ? "linear-gradient(135deg, #16a34a 0%, #15803d 100%)"
                          : phase.id === 3
                          ? "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)"
                          : "linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-extrabold uppercase tracking-widest opacity-90">
                        {phase.code}
                      </span>
                      <span className="text-[11px] font-semibold bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                        {phase.stages.length} giai đoạn
                      </span>
                    </div>
                    <h3 className="text-lg font-black tracking-tight mt-1 uppercase">
                      {phase.name}
                    </h3>
                    <p className="text-xs text-white/85 line-clamp-1 mt-0.5 font-medium">
                      {phase.subtitle}
                    </p>
                  </div>

                  {/* Stages List inside Phase */}
                  <div className="p-3.5 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      {phase.stages.map((stage) => {
                        const isSelected = selectedStageId === stage.id;

                        return (
                          <div
                            key={stage.id}
                            onClick={() => handleSelectStage(stage.id)}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group relative ${
                              isSelected
                                ? "bg-blue-50/70 border-blue-600 shadow-md translate-x-1"
                                : "bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded-md border ${
                                  isSelected
                                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                                    : "bg-slate-100 text-slate-700 border-slate-200 group-hover:border-slate-300"
                                }`}
                              >
                                {stage.code}
                              </span>
                              {isSelected ? (
                                <span className="flex items-center gap-1 text-[11px] font-bold text-blue-700">
                                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
                                  Đang chọn
                                </span>
                              ) : (
                                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all" />
                              )}
                            </div>

                            <h4
                              className={`text-sm font-bold mt-2 leading-snug transition-colors ${
                                isSelected ? "text-blue-900" : "text-slate-800"
                              }`}
                            >
                              {stage.name}
                            </h4>

                            {/* 3 Sub-steps bullets matching diagram */}
                            <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                              {stage.subSteps.map((sub, sIdx) => (
                                <span
                                  key={sIdx}
                                  className={`text-[11px] px-2 py-0.5 rounded font-medium ${
                                    isSelected
                                      ? "bg-blue-100/80 text-blue-800 font-semibold"
                                      : "bg-slate-100 text-slate-600"
                                  }`}
                                  title={sub.desc}
                                >
                                  • {sub.title}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Phase Footnote */}
                    <div className="pt-2 text-[11px] text-slate-500 italic text-center">
                      Nghiệm thu qua Gate {phase.stages[phase.stages.length - 1].stageNumber}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Diagram Principle Footnote */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <RotateCcw className="h-4 w-4 text-amber-600 flex-shrink-0" />
              <span>
                <strong>Nguyên lý quản trị Gate:</strong> Mũi tên thể hiện trình tự thực hiện. Nếu chưa đạt chỉ tiêu nghiệm thu (Gate Review), đội ngũ sẽ hoàn thiện lại bước trước để đảm bảo an toàn tuyệt đối cho doanh nghiệp.
              </span>
            </div>
            <span className="font-mono text-xs font-semibold text-slate-500 whitespace-nowrap">
              ISO/IEC Compliant Flow
            </span>
          </div>
        </Container>
      </section>

      {/* 2. STAGE DETAIL INSPECTOR */}
      <section id="stage-detail-inspector" className="scroll-mt-28 transition-all duration-300">
        <Container>
          <div
            key={activeStage.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-300 animate-fade-in"
          >
            {/* Header of Active Stage */}
            <div
              className="p-6 sm:p-8 text-white relative"
              style={{
                background:
                  activePhase.id === 1
                    ? "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)"
                    : activePhase.id === 2
                    ? "linear-gradient(135deg, #16a34a 0%, #15803d 100%)"
                    : activePhase.id === 3
                    ? "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)"
                    : "linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)",
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-black text-2xl sm:text-3xl bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-2xl border border-white/30">
                    {activeStage.code}
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/85">
                      {activePhase.code}: {activePhase.name} • Bước {currentIndex + 1}/9
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-0.5">
                      {activeStage.name}
                    </h3>
                  </div>
                </div>

                {/* Prev / Next Navigation Controls */}
                <div className="flex items-center gap-2">
                  {prevStage && (
                    <button
                      onClick={() => handleSelectStage(prevStage.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold backdrop-blur-md transition-all border border-white/20"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      {prevStage.code}
                    </button>
                  )}
                  {nextStage && (
                    <button
                      onClick={() => handleSelectStage(nextStage.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs sm:text-sm font-bold shadow-md transition-all"
                    >
                      {nextStage.code}: {nextStage.name}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Sub-steps Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs text-white/80 font-bold mr-1">Các nhánh nghiệp vụ:</span>
                {activeStage.subSteps.map((sub, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 border border-white/25 px-3 py-1 text-xs text-white font-semibold backdrop-blur-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    <strong>{sub.title}:</strong> {sub.desc}
                  </div>
                ))}
              </div>
            </div>

            {/* Body of Active Stage Inspector */}
            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Objective & Activities (2 cols on lg) */}
              <div className="lg:col-span-2 space-y-8">
                {/* 1. Mục tiêu giai đoạn */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    <h4>Mục tiêu cốt lõi (Objective)</h4>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
                    {activeStage.objective}
                  </p>
                </div>

                {/* 2. Hoạt động thực hiện */}
                <div>
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
                    <Layers className="h-5 w-5 text-blue-600" />
                    Các hoạt động triển khai chính
                  </h4>
                  <div className="space-y-3">
                    {activeStage.activities.map((act, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                          {idx + 1}
                        </span>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                          {act}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Sản phẩm bàn giao */}
                <div>
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
                    <FileCheck className="h-5 w-5 text-emerald-600" />
                    Sản phẩm đầu ra bàn giao (Deliverables)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeStage.deliverables.map((del, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 text-emerald-950 font-medium text-sm"
                      >
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Bộ công cụ & Biểu mẫu nghiệp vụ tương ứng (Handbook Toolkit) */}
                {stageTools.length > 0 && (
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        Bộ công cụ & Biểu mẫu nghiệp vụ tương ứng (Handbook Toolkit)
                      </h4>
                      <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        {stageTools.length} công cụ chuẩn hóa
                      </span>
                    </div>

                    <div className="space-y-3">
                      {stageTools.map((tool) => {
                        const isExpanded = expandedToolId === tool.id;
                        return (
                          <div
                            key={tool.id}
                            className="rounded-2xl border border-slate-200 bg-white transition-all shadow-xs hover:border-blue-300"
                          >
                            <button
                              type="button"
                              onClick={() => setExpandedToolId(isExpanded ? null : tool.id)}
                              className="flex w-full items-center justify-between p-4 sm:p-5 text-left"
                            >
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-xs font-extrabold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-lg border border-blue-200 shrink-0">
                                  {tool.code}
                                </span>
                                <div>
                                  <h5 className="text-sm sm:text-base font-bold text-slate-900">
                                    {tool.name}
                                  </h5>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                    {tool.purpose}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0 ml-2">
                                <span className="hidden sm:inline-block text-[11px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                                  {tool.category}
                                </span>
                                {isExpanded ? (
                                  <ChevronUp className="h-4 w-4 text-blue-600" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 text-slate-400" />
                                )}
                              </div>
                            </button>

                            {isExpanded && (
                              <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 space-y-3 text-xs sm:text-sm animate-fade-in">
                                <div>
                                  <span className="font-bold text-slate-700 block mb-1">Mục đích sử dụng:</span>
                                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                                    {tool.purpose}
                                  </p>
                                </div>

                                <div>
                                  <span className="font-bold text-slate-700 block mb-1">Sản phẩm đầu ra (Deliverable):</span>
                                  <div className="flex items-center gap-2 text-emerald-700 font-semibold bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200">
                                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                                    <span>{tool.deliverable}</span>
                                  </div>
                                </div>

                                <div>
                                  <span className="font-bold text-slate-700 block mb-1.5">Các nội dung / câu hỏi trọng tâm cần làm rõ:</span>
                                  <ul className="space-y-1.5">
                                    {tool.keyChecklist.map((item, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-slate-600">
                                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Gate Review Box */}
              <div className="space-y-6">
                <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/70 p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-900 font-extrabold text-base mb-3">
                    <ShieldCheck className="h-6 w-6 text-amber-600" />
                    <h4>{activeStage.gateCheck.title}</h4>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-800">
                    <div>
                      <span className="font-bold text-amber-950 uppercase tracking-wide text-[11px] block mb-1">
                        Tiêu chí vượt Gate (Pass Criteria):
                      </span>
                      <p className="p-3 bg-white rounded-lg border border-amber-200 font-medium text-slate-800 leading-relaxed">
                        {activeStage.gateCheck.criteria}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-amber-950 uppercase tracking-wide text-[11px] block mb-1">
                        Nếu chưa đạt (If Failed):
                      </span>
                      <p className="p-3 bg-white/80 rounded-lg border border-amber-200/80 text-amber-900 italic font-medium leading-relaxed">
                        {activeStage.gateCheck.actionIfFail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Help / Consultation Quick Card */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base">
                    Cần tư vấn riêng cho bước này?
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-4">
                    Đội ngũ chuyên gia ETEK-soft sẵn sàng giải đáp thắc mắc và hỗ trợ khảo sát thực tế miễn phí.
                  </p>
                  <a
                    href="#consultation-anchor"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
                  >
                    Đăng ký khảo sát bước này
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CÁC HỆ THỐNG GIẢI PHÁP SỐ HÓA TIÊU BIỂU */}
      <section className="bg-slate-50/70 py-16 lg:py-20 border-t border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 font-mono uppercase tracking-wider mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                HỆ THỐNG PHẦN MỀM CHUYỂN ĐỔI SỐ
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Các giải pháp áp dụng theo quy trình chuẩn hóa
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                Khám phá các hệ sinh thái phần mềm doanh nghiệp được ETEK-soft khảo sát, may đo và chuyển giao theo đúng quy trình 4 Pha & 9 Giai đoạn.
              </p>
            </div>

            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Xem tất cả sản phẩm & giải pháp</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredSolutions.map((sol) => (
              <div
                key={sol.id}
                className={`flex flex-col justify-between rounded-3xl border-2 bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${sol.accentBorder}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs font-mono font-black px-3 py-1 rounded-full border ${sol.badgeColor}`}
                    >
                      {sol.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {sol.metricLabel}: <strong className="text-slate-900">{sol.metric}</strong>
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold text-slate-900 leading-snug">
                    {sol.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sol.tagline}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase font-mono">
                      Tính năng trọng tâm:
                    </span>
                    {sol.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 mt-0.5"
                          style={{ color: sol.color }}
                        />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/san-pham/${sol.slug}`}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all w-full ${sol.btnColor}`}
                  >
                    <span>Khám phá chi tiết giải pháp</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice Banner below cards */}
          <div className="mt-10 rounded-2xl bg-white border border-slate-200 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-slate-700 text-xs sm:text-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold">
                <Sparkles className="h-5 w-5" />
              </span>
              <span>
                Mọi phần mềm triển khai đều tuân thủ <strong>Gate 0 → Gate 8</strong>, kèm bảo hành kỹ thuật SLA 24/7 và cam kết an toàn dữ liệu 100%.
              </span>
            </div>
            <Link
              href="/san-pham"
              className="whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Xem hệ sinh thái ETEK →
            </Link>
          </div>
        </Container>
      </section>

      {/* 4. FORM ĐĂNG KÝ KHẢO SÁT & TƯ VẤN TRỰC TIẾP */}
      <section
        id="consultation-anchor"
        className="bg-gradient-to-b from-slate-50 to-slate-100/70 border-t border-slate-200 py-16 lg:py-20 scroll-mt-10"
      >
        <Container className="max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 font-mono uppercase tracking-wider mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              Khởi động dự án của bạn
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              Bắt đầu với Pha 1: Khảo sát & Đánh giá hiện trạng
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Để lại thông tin để chuyên gia giải pháp ETEK-soft liên hệ sắp xếp buổi làm việc trực tiếp (On-site hoặc qua Microsoft Teams) hoàn toàn miễn phí.
            </p>
          </div>

          <ConsultationForm />
        </Container>
      </section>
    </div>
  );
}
