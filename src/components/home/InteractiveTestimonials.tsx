"use client";

import Image from "next/image";
import { Star, Quote, Building, CheckCircle2 } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ông Trần Minh Đức",
    role: "Giám đốc CNTT & Chuyển đổi số",
    company: "Tập đoàn Cơ khí & Chế tạo Máy TPA",
    avatar: "/legacy-media/avatars/etek.webp",
    quote: "Trước đây mỗi kỳ tính lương cho hơn 1,200 nhân viên sản xuất mất gần một tuần với đủ thứ sai sót về ca kíp. Khi chuyển sang ETEKSOFTS HRM 4.0, toàn bộ quá trình tự động hóa chỉ mất đúng 2 giờ kiểm duyệt.",
    rating: 5,
    highlight: "Tiết kiệm 85% thời gian tính lương"
  },
  {
    name: "Bà Vũ Thị Hồng Nhung",
    role: "Trưởng phòng Nhân sự (HRD)",
    company: "Công ty Cổ phần May & Xuất Khẩu Hưng Yên",
    avatar: "/legacy-media/avatars/1166716503-612x612_70x.webp",
    quote: "Đội ngũ ETEK tư vấn cực kỳ tận tâm. Hệ thống phân quyền chặt chẽ, chấm công khuôn mặt AI tại các phân xưởng hoạt động ổn định và nhân viên ai cũng hài lòng vì nhận phiếu lương tức thì trên điện thoại.",
    rating: 5,
    highlight: "Chấm công AI mượt mà, chuẩn xác"
  },
  {
    name: "Bác sĩ Nguyễn Văn Cường",
    role: "Phó Giám đốc Kỹ thuật & Viện phí",
    company: "Bệnh viện Đa khoa Quốc tế Đông Đô",
    avatar: "/legacy-media/avatars/etek.webp",
    quote: "Giải pháp SGIS của ETEK giúp kết nối dữ liệu BHYT cổng quốc gia trơn tru, giảm thiểu 100% tình trạng từ chối thanh toán bảo hiểm y tế và giúp bệnh nhân không còn phải mòn mỏi chờ đợi.",
    rating: 5,
    highlight: "Liên thông BHYT chuẩn xác 100%"
  }
];

export default function InteractiveTestimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-t border-slate-200/70">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            <Quote className="h-3.5 w-3.5" />
            TIẾNG NÓI TỪ KHÁCH HÀNG
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Niềm Tin Từ{" "}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              Các Nhà Lãnh Đạo
            </span>
          </h2>
          <p className="mt-3.5 text-base text-slate-600">
            Lắng nghe trải nghiệm chuyển đổi số thực tế từ những đối tác đã đồng hành cùng ETEK trong nhiều năm qua.
          </p>
        </div>

        {/* 3 Light Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-slate-200/90 bg-slate-50/60 p-7 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-blue-700 border border-blue-200">
                    {item.highlight}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-5 border-t border-slate-200 flex items-center gap-3.5">
                <div className="relative h-11 w-11 shrink-0 rounded-full overflow-hidden ring-2 ring-blue-500/30 bg-slate-200">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  </p>
                  <p className="text-xs text-blue-600 truncate font-medium">{item.role}</p>
                  <p className="text-[11px] text-slate-500 truncate">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
