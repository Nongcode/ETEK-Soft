import type { Metadata } from "next";
import { Award, Eye, Layers, ShieldCheck, Target, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import PartnersSection from "@/components/home/PartnersSection";
import ConsultationCTA from "@/components/home/ConsultationCTA";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "ETEK-soft — công ty công nghệ chuyên cung cấp phần mềm bản quyền chính hãng và giải pháp phần mềm cho doanh nghiệp.",
};

const coreValues = [
  { icon: ShieldCheck, title: "Chính trực", description: "Cam kết cung cấp phần mềm chính hãng, minh bạch về giá và điều khoản license." },
  { icon: Users, title: "Lấy khách hàng làm trung tâm", description: "Tư vấn đúng nhu cầu thực tế thay vì bán những gì có sẵn." },
  { icon: Layers, title: "Chuyên môn kỹ thuật", description: "Đội ngũ am hiểu sâu hệ sinh thái Microsoft và giải pháp bảo mật doanh nghiệp." },
  { icon: Award, title: "Đồng hành lâu dài", description: "Hỗ trợ kỹ thuật xuyên suốt vòng đời sử dụng phần mềm, không chỉ tại thời điểm mua hàng." },
];

const capabilities = [
  { number: "500+", label: "Doanh nghiệp đã triển khai" },
  { number: "15+", label: "Dòng sản phẩm bản quyền" },
  { number: "99.9%", label: "Tỷ lệ license kích hoạt thành công" },
  { number: "24/7", label: "Kênh hỗ trợ trực tuyến" },
];

export default function AboutPage() {
  return (
    <div className="pb-4">
      <Breadcrumb items={[{ label: "Giới thiệu" }]} />

      <section className="border-b border-border bg-white py-16 lg:py-20">
        <Container className="max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">Về ETEK-soft</p>
          <h1 className="h1">Công ty công nghệ đồng hành cùng chuyển đổi số doanh nghiệp</h1>
          <p className="body-lg mt-5">
            ETEK-soft là nhà cung cấp phần mềm bản quyền chính hãng và giải pháp công nghệ cho doanh nghiệp tại Việt Nam,
            với sứ mệnh giúp doanh nghiệp vận hành an toàn, hiệu quả và tuân thủ pháp lý về bản quyền phần mềm.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-[var(--radius-md)] border border-border bg-white p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-primary-light text-primary">
              <Eye className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="h3 mt-4">Tầm nhìn</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              Trở thành đối tác công nghệ tin cậy hàng đầu, giúp mọi doanh nghiệp Việt Nam tiếp cận phần mềm bản quyền
              một cách dễ dàng, minh bạch và tiết kiệm chi phí.
            </p>
          </div>
          <div className="rounded-[var(--radius-md)] border border-border bg-white p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-primary-light text-primary">
              <Target className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="h3 mt-4">Sứ mệnh</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              Cung cấp phần mềm chính hãng, tư vấn giải pháp phù hợp và hỗ trợ kỹ thuật tận tâm — giúp doanh nghiệp
              tập trung vào hoạt động kinh doanh cốt lõi thay vì lo lắng về bản quyền và bảo mật.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <SectionTitle eyebrow="Giá trị cốt lõi" title="Giá trị định hướng hoạt động của chúng tôi" align="center" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v) => (
              <div key={v.title} className="rounded-[var(--radius-md)] border border-border bg-background p-6 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-[10px] bg-primary-light text-primary">
                  <v.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-[15px] font-semibold text-navy">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionTitle eyebrow="Năng lực" title="Năng lực triển khai" align="center" />
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.label} className="rounded-[var(--radius-md)] border border-border bg-white py-8 text-center">
                <p className="text-3xl font-extrabold text-primary">{c.number}</p>
                <p className="mt-1.5 text-xs font-medium text-muted">{c.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PartnersSection />
      <ConsultationCTA />
    </div>
  );
}
