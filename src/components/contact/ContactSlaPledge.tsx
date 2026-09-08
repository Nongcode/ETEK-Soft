"use client";

import { Award, Clock, FileCheck2, Headphones, ShieldAlert, ShieldCheck, Sparkles } from "lucide-react";

const PLEDGES = [
  {
    icon: ShieldCheck,
    tag: "BẢO CHỨNG PHÁP LÝ",
    title: "100% License CO/CQ Chính Ngạch & VAT",
    desc: "Cung cấp đầy đủ giấy chứng nhận ủy quyền hãng, hóa đơn tài chính hợp pháp, an toàn tuyệt đối khi tiếp đoàn thanh tra bản quyền.",
    color: "blue",
    accent: "from-blue-600 to-indigo-600",
  },
  {
    icon: Clock,
    tag: "SLA TỐC ĐỘ",
    title: "Phản Hồi Sự Cố Dưới 15 Phút",
    desc: "Đội ngũ kỹ sư túc trực 24/7/365, kết nối từ xa hoặc cử chuyên viên đến hiện trường xử lý gián đoạn trong ngày làm việc.",
    color: "emerald",
    accent: "from-emerald-600 to-teal-600",
  },
  {
    icon: Award,
    tag: "TRẢI NGHIỆM MIỄN PHÍ",
    title: "Khảo Sát Tận Nơi & Cấp Demo 14 Ngày",
    desc: "Khảo sát thực tế quy trình chấm công, tính lương và hạ tầng máy chủ miễn phí. Bàn giao tài khoản trải nghiệm thực tế trước khi ký kết.",
    color: "cyan",
    accent: "from-cyan-600 to-blue-600",
  },
  {
    icon: Headphones,
    tag: "ĐỒNG HÀNH TRỌN VÒNG ĐỜI",
    title: "Bảo Trì & Cập Nhật Bản Vá Trọn Đời",
    desc: "Hỗ trợ di chuyển dữ liệu, nâng cấp phiên bản mới và định kỳ rà soát an ninh mạng giúp hệ thống luôn vận hành trơn tru.",
    color: "purple",
    accent: "from-purple-600 to-indigo-600",
  },
];

export default function ContactSlaPledge() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-16 sm:py-24 border-t border-slate-200/80">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12" data-reveal="fade">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 shadow-sm">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-800 font-mono">
              CAM KẾT DỊCH VỤ CHUẨN DOANH NGHIỆP
            </span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            UY TÍN XÂY DỰNG TRÊN{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              CAM KẾT SLA VÀNG
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Hơn 20 năm phục vụ 500+ doanh nghiệp hàng đầu, ETEK-soft cam kết đem đến trải nghiệm dịch vụ tin cậy và minh bạch nhất.
          </p>
        </div>

        {/* 4 Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal-group data-reveal-step="100">
          {PLEDGES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                data-reveal
                className="group relative rounded-[2rem] border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors font-mono">
                  <span>Cam kết chuẩn SLA ETEK</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
