import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Thông tin liên hệ ETEK-soft — hotline, email, địa chỉ văn phòng và biểu mẫu liên hệ trực tuyến.",
};

const info = [
  { icon: Phone, label: "Hotline", value: "1900 2026" },
  { icon: Mail, label: "Email", value: "sales@etek-soft.vn" },
  { icon: MapPin, label: "Địa chỉ", value: "Tầng 12, Tòa nhà Etek, Q. Cầu Giấy, Hà Nội" },
  { icon: Clock, label: "Giờ làm việc", value: "T2 - T7: 8:00 - 18:00" },
];

export default function ContactPage() {
  return (
    <div className="pb-16">
      <Breadcrumb items={[{ label: "Liên hệ" }]} />

      <Container className="py-10">
        <h1 className="h1 !text-2xl md:!text-[32px]">Liên hệ với chúng tôi</h1>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Bạn có câu hỏi về sản phẩm hoặc cần hỗ trợ? Gửi thông tin cho chúng tôi hoặc liên hệ trực tiếp qua hotline.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">
          <ContactForm />

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {info.map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-primary-light text-primary">
                    <item.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-navy">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              role="img"
              aria-label="Bản đồ vị trí văn phòng ETEK-soft"
              className="flex aspect-[4/3] items-center justify-center rounded-[var(--radius-md)] border border-border bg-[linear-gradient(45deg,#f1f5f9_25%,transparent_25%),linear-gradient(-45deg,#f1f5f9_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f1f5f9_75%),linear-gradient(-45deg,transparent_75%,#f1f5f9_75%)] bg-[length:24px_24px] bg-background"
            >
              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-muted shadow-card">Google Map placeholder</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
