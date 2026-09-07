import type { Metadata } from "next";
import { Clock, Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ConsultationForm from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "Tư vấn giải pháp phần mềm",
  description: "Nhận tư vấn miễn phí về giải pháp phần mềm bản quyền phù hợp với nhu cầu và ngân sách doanh nghiệp của bạn.",
};

const contactInfo = [
  { icon: Phone, label: "Hotline", value: "1900 2026" },
  { icon: Mail, label: "Email", value: "sales@etek-soft.vn" },
  { icon: Clock, label: "Thời gian hỗ trợ", value: "T2 - T7, 8:00 - 18:00" },
];

export default function ConsultationPage() {
  return (
    <div className="pb-16">
      <Breadcrumb items={[{ label: "Tư vấn" }]} />

      <section className="border-b border-border bg-white py-14 text-center lg:py-16">
        <Container className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">Lead generation</p>
          <h1 className="h1">Cần tư vấn giải pháp phần mềm?</h1>
          <p className="body-lg mt-4">
            Để lại thông tin, đội ngũ chuyên gia của ETEK-soft sẽ liên hệ tư vấn giải pháp phù hợp nhất với nhu cầu và ngân sách của doanh nghiệp bạn.
          </p>
        </Container>
      </section>

      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <ConsultationForm />

          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-primary-light text-primary">
                  <info.icon className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{info.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-navy">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
