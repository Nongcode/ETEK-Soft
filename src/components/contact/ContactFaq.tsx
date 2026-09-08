"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Sau khi gửi yêu cầu liên hệ, bao lâu tôi sẽ nhận được báo giá chi tiết?",
    answer:
      "Đối với các yêu cầu thông thường, chuyên viên giải pháp ETEK-soft sẽ liên hệ và gửi bảng dự toán chi tiết trong vòng 15 đến 30 phút làm việc. Đối với các dự án phức tạp cần khảo sát quy mô đa chi nhánh hoặc máy chủ đặc thù, kỹ sư trưởng sẽ sắp xếp lịch khảo sát thực tế trong vòng 24 giờ.",
  },
  {
    question: "ETEK-soft có cung cấp đầy đủ chứng chỉ CO/CQ và hóa đơn VAT hợp lệ không?",
    answer:
      "100% license do ETEK-soft cung cấp (Microsoft 365, Windows Server, phần mềm diệt virus...) đều có chứng nhận xuất xứ CO (Certificate of Origin), chứng nhận chất lượng CQ (Certificate of Quality) từ chính hãng và hóa đơn giá trị gia tăng (VAT) đầy đủ, phục vụ kiểm toán tài chính và bảo hộ pháp lý tuyệt đối.",
  },
  {
    question: "Doanh nghiệp có được trải nghiệm demo phần mềm HRM 4.0 & Chấm công FaceID trước khi mua không?",
    answer:
      "Có. ETEK-soft cung cấp chương trình cấp tài khoản trải nghiệm thực tế (Pilot Testing) kéo dài 14 ngày miễn phí. Đội ngũ kỹ sư sẽ mang thiết bị FaceID AI đến tận văn phòng hoặc nhà máy của quý khách để cài đặt thử nghiệm phân ca và đồng bộ dữ liệu tính lương.",
  },
  {
    question: "Nếu phát sinh sự cố bản quyền hoặc gián đoạn kỹ thuật ngoài giờ làm việc, tôi liên hệ bằng cách nào?",
    answer:
      "Đường dây nóng kỹ thuật 1900 2026 và số hotline kỹ sư trực 098.338.8196 hoạt động 24/7/365, kể cả ngày nghỉ và lễ tết. Đối với các hợp đồng SLA VIP, thời gian phản hồi sự cố khẩn cấp cam kết dưới 15 phút qua hệ thống hỗ trợ từ xa UltraViewer / AnyDesk hoặc cử kỹ sư onsite trong ngày.",
  },
  {
    question: "ETEK-soft có triển khai giải pháp tận nơi tại các khu công nghiệp ở tỉnh xa không?",
    answer:
      "ETEK-soft có mạng lưới văn phòng tại Hà Nội, TP. Hồ Chí Minh và Đà Nẵng, cùng đội ngũ kỹ sư lưu động phục vụ khách hàng tại hơn 45 tỉnh thành trên toàn quốc, đặc biệt là các khu công nghiệp tại Bắc Ninh, Hải Phòng, Đồng Nai, Bình Dương, Long An...",
  },
];

export default function ContactFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 border-t border-slate-200/80">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12" data-reveal="fade">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600 font-mono">
            <HelpCircle className="h-4 w-4" />
            HỎI ĐÁP &amp; HỖ TRỢ DOANH NGHIỆP
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            CÂU HỎI THƯỜNG GẶP KHI LIÊN HỆ
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Giải đáp nhanh các thắc mắc về thời gian phản hồi, thủ tục hợp đồng, hóa đơn VAT và chính sách dùng thử.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4" data-reveal-group data-reveal-step="90">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                data-reveal
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-300 bg-blue-50/30 shadow-sm"
                    : "border-slate-200/90 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100/60 animate-fade-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
