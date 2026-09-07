import { ArrowRight, PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ConsultationCTA() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-primary/15 bg-gradient-to-br from-primary-dark to-primary px-6 py-14 text-center sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_20%_0%,rgba(255,255,255,0.14),transparent)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="h2 text-white">Bạn chưa biết lựa chọn phần mềm nào phù hợp?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/80">
              Đội ngũ tư vấn của chúng tôi sẽ giúp doanh nghiệp lựa chọn giải pháp phù hợp với nhu cầu và ngân sách.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/tu-van" size="lg" className="bg-white text-primary hover:bg-white/90">
                Nhận tư vấn miễn phí
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <a
                href="tel:19002026"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-sm)] border border-white/30 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4" aria-hidden />
                1900 2026
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
