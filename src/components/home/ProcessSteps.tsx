import { CreditCard, KeyRound, MessageSquareText, PackageSearch } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  { number: "01", icon: MessageSquareText, title: "Tư vấn nhu cầu", description: "Trao đổi mục tiêu, quy mô và ngân sách để xác định giải pháp phù hợp." },
  { number: "02", icon: PackageSearch, title: "Lựa chọn phần mềm", description: "Đề xuất danh sách sản phẩm, so sánh license và chi phí tối ưu." },
  { number: "03", icon: CreditCard, title: "Thanh toán", description: "Xác nhận đơn hàng và thanh toán qua phương thức thuận tiện, an toàn." },
  { number: "04", icon: KeyRound, title: "Nhận license & hỗ trợ kích hoạt", description: "Nhận mã bản quyền qua email và được hỗ trợ kích hoạt tận nơi." },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionTitle eyebrow="Quy trình" title="Quy trình mua phần mềm bản quyền" description="Đơn giản, minh bạch và nhanh chóng — chỉ 4 bước để sở hữu license chính hãng." />

        <div className="mt-12 hidden lg:block">
          <div className="relative grid grid-cols-4 gap-6">
            <div className="absolute left-0 right-0 top-6 h-px bg-border" aria-hidden />
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary text-white shadow-card">
                  <step.icon className="h-5 w-5" aria-hidden />
                </div>
                <p className="mt-4 text-xs font-bold text-primary">{step.number}</p>
                <h3 className="h3 mt-1">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <ol className="mt-10 space-y-6 lg:hidden">
          {steps.map((step, idx) => (
            <li key={step.number} className="relative flex gap-4 pl-1">
              {idx !== steps.length - 1 && (
                <span className="absolute left-[23px] top-12 h-[calc(100%-8px)] w-px bg-border" aria-hidden />
              )}
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <step.icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-bold text-primary">{step.number}</p>
                <h3 className="h3 mt-0.5">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
