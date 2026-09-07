import { Briefcase, Building2, Factory, Rocket, User } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SolutionCard from "@/components/home/SolutionCard";

const solutions = [
  {
    icon: User,
    title: "Cá nhân chuyên nghiệp",
    description: "License Office, bảo mật thiết yếu cho freelancer và chuyên gia làm việc độc lập.",
    href: "/san-pham?audience=Cá+nhân",
  },
  {
    icon: Rocket,
    title: "Startup",
    description: "Gói phần mềm tinh gọn, chi phí tối ưu, dễ mở rộng khi đội ngũ tăng trưởng.",
    href: "/san-pham?audience=Doanh+nghiệp+nhỏ",
  },
  {
    icon: Briefcase,
    title: "Doanh nghiệp nhỏ",
    description: "Bộ giải pháp văn phòng, bảo mật và hạ tầng cơ bản cho đội ngũ dưới 50 người.",
    href: "/san-pham?audience=Doanh+nghiệp+nhỏ",
  },
  {
    icon: Building2,
    title: "Doanh nghiệp vừa",
    description: "Giải pháp máy chủ, cơ sở dữ liệu và quản trị tập trung cho quy mô đang mở rộng.",
    href: "/san-pham?audience=Doanh+nghiệp+vừa",
  },
  {
    icon: Factory,
    title: "Doanh nghiệp lớn",
    description: "Triển khai license số lượng lớn, hỗ trợ kỹ thuật ưu tiên và tư vấn kiến trúc hệ thống.",
    href: "/san-pham?audience=Doanh+nghiệp+lớn",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionTitle
          eyebrow="Giải pháp"
          title="Giải pháp phần mềm cho doanh nghiệp"
          description="Mỗi doanh nghiệp có một quy mô và nhu cầu khác nhau — chúng tôi tư vấn giải pháp phù hợp cho từng giai đoạn phát triển."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <SolutionCard key={s.title} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
