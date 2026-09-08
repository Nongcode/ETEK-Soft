"use client";

import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const plans = [
  {
    name: "KHỞI NGHIỆP / SMB",
    subtitle: "Dành cho văn phòng, hộ kinh doanh nhỏ dưới 30 nhân sự",
    price: "4.500.000đ",
    unit: "/ năm",
    featured: false,
    features: [
      "Quản lý hồ sơ nhân viên & hợp đồng lao động điện tử",
      "Chấm công di động định vị GPS chống gian lận",
      "Quy trình phê duyệt đơn nghỉ phép, tăng ca qua App",
      "Gói 5 License Microsoft 365 Apps for Business chính hãng",
      "Bàn giao kích hoạt key trong ngày",
      "Hỗ trợ kỹ thuật trực tuyến 8/5 qua UltraView",
    ],
    cta: "Chọn Gói Khởi Nghiệp",
    href: "/tu-van?plan=smb",
  },
  {
    name: "DOANH NGHIỆP TIÊU CHUẨN",
    subtitle: "Phù hợp quy mô 30 - 150 nhân sự, nhiều ca kíp",
    price: "12.000.000đ",
    unit: "/ gói triển khai",
    featured: false,
    features: [
      "Toàn bộ tính năng gói Khởi Nghiệp",
      "Tích hợp không giới hạn máy chấm công vân tay, FaceID",
      "Tự động tính lương 3P, khấu trừ BHXH & Thuế TNCN",
      "Tích hợp gói bản quyền Windows 11 Pro & Office LTSC",
      "Xuất hóa đơn VAT điện tử & chứng nhận CO/CQ hợp pháp",
      "Đào tạo chuyển giao kỹ thuật tận nơi",
      "Bảo hành & hỗ trợ kỹ thuật 24/7",
    ],
    cta: "Chọn Gói Tiêu Chuẩn",
    href: "/tu-van?plan=standard",
  },
  {
    name: "DOANH NGHIỆP TĂNG TRƯỞNG",
    badge: "LỰA CHỌN NHIỀU NHẤT",
    subtitle: "Chuỗi chi nhánh, nhà máy sản xuất từ 150 - 500+ nhân sự",
    price: "24.500.000đ",
    unit: "/ trọn gói",
    featured: true,
    features: [
      "Toàn bộ tính năng gói Tiêu Chuẩn",
      "AI FaceID & GPS đa điểm kết nối Realtime thời gian thực",
      "Cơ chế phân ca kíp luân phiên thông minh & lương lũy tiến",
      "Cung cấp gói Windows Server 2025 & SQL Server chính hãng",
      "API mở kết nối phần mềm kế toán MISA, FAST, SAP ERP",
      "Cam kết bảo mật dữ liệu chuẩn ISO 27001 (SSL 256-bit)",
      "Kỹ sư trưởng chuyên trách hỗ trợ SLA phản hồi dưới 15 phút",
    ],
    cta: "Đăng Ký Gói Tăng Trưởng",
    href: "/tu-van?plan=growth",
  },
  {
    name: "HỆ THỐNG ENTERPRISE & Y TẾ",
    subtitle: "Tập đoàn lớn, bệnh viện & chuỗi phòng khám chuyên sâu",
    price: "Kiến Trúc Theo Yêu Cầu",
    unit: "",
    featured: false,
    features: [
      "Kiến trúc phần mềm theo quy trình riêng",
      "Hệ thống quản trị tổng thể bệnh viện SGIS chuẩn Bộ Y tế",
      "Liên thông cổng giám định BHYT Quốc gia & Bệnh án EMR",
      "Tư vấn giải pháp bản quyền tổng thể Enterprise Agreement (EA)",
      "Bàn giao trọn bộ chứng thư CO/CQ có dấu đỏ xác nhận",
      "Cam kết bảo hành nâng cấp trọn đời (Life-time SLA)",
      "Đội ngũ kỹ sư túc trực 24/7 xử lý sự cố trong 5 phút",
    ],
    cta: "Liên Hệ Tư Vấn Dự Án",
    href: "/tu-van?plan=enterprise",
  },
];

export default function PricingPlans() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">
      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-600 font-mono">
              BẢNG GIÁ DỊCH VỤ
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
              BẢNG GIÁ PHẦN MỀM & BẢN QUYỀN TRỌN GÓI
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600">
              Báo giá minh bạch, tối ưu chi phí theo từng quy mô nhân sự. Cam kết 100% hợp pháp pháp lý và hỗ trợ kích hoạt siêu tốc.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Pricing Cards with Perfectly Aligned Bottom Footers */}
        <ScrollReveal direction="up" delay={100} className="mt-10 sm:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6 items-stretch">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col justify-between rounded-[2.2rem] p-5 sm:p-6 xl:p-6 2xl:p-7 transition-all duration-300 h-full ${p.featured
                  ? "bg-gradient-to-b from-blue-600 via-blue-600 to-cyan-600 text-white shadow-2xl border-2 border-cyan-300 ring-4 ring-blue-500/20"
                  : "bg-white border border-slate-200 text-slate-900 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1"
                  }`}
              >
                {/* Featured Badge */}
                {p.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-300 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                      <Sparkles className="h-3 w-3" />
                      {p.badge}
                    </span>
                  </div>
                )}

                {/* Top Details & Features */}
                <div>
                  <h3
                    className={`text-base font-extrabold uppercase tracking-tight ${p.featured ? "text-white" : "text-slate-900"
                      }`}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={`mt-1.5 text-xs leading-relaxed min-h-[32px] ${p.featured ? "text-cyan-100" : "text-slate-500"
                      }`}
                  >
                    {p.subtitle}
                  </p>

                  {/* Price Display */}
                  <div className="mt-4 pb-4 border-b border-slate-200/50">
                    <span
                      className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-mono ${p.featured ? "text-white" : "text-blue-600"
                        }`}
                    >
                      {p.price}
                    </span>
                    {p.unit && (
                      <span
                        className={`text-xs font-medium ml-1 ${p.featured ? "text-cyan-100" : "text-slate-500"
                          }`}
                      >
                        {p.unit}
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-5 space-y-2.5 xl:space-y-3 text-xs xl:text-[13px] leading-relaxed">
                    {p.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full mt-0.5 ${p.featured
                            ? "bg-white/20 text-white"
                            : "bg-cyan-100 text-cyan-700"
                            }`}
                        >
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span className={p.featured ? "text-white/95" : "text-slate-700"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button at bottom — 100% High Contrast & Vertically Aligned */}
                <div className="mt-6 pt-4 border-t border-slate-100/30">
                  <Link
                    href={p.href}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3 px-4 text-xs font-bold transition-all shadow-md active:scale-95 ${p.featured
                      ? "bg-white !text-blue-900 font-extrabold hover:bg-slate-100 hover:shadow-xl"
                      : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95"
                      }`}
                  >
                    <span className={p.featured ? "!text-blue-900 font-extrabold" : "text-white"}>
                      {p.cta}
                    </span>
                    <ArrowRight className={`h-3 w-3 ${p.featured ? "!text-blue-900" : "text-white"}`} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
