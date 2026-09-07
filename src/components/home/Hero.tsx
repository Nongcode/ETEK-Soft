import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_0%,rgba(37,99,235,0.08),transparent)]"
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Phần mềm bản quyền chính hãng
          </p>
          <h1 className="h1">
            Giải pháp phần mềm bản quyền
            <br className="hidden sm:block" /> cho doanh nghiệp hiện đại
          </h1>
          <p className="body-lg mt-5 max-w-lg">
            Cung cấp phần mềm chính hãng, license rõ ràng và giải pháp công nghệ phù hợp cho doanh nghiệp —
            từ Microsoft 365, Windows Server đến bảo mật endpoint.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/san-pham" size="lg">
              Mua phần mềm
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="/tu-van" size="lg" variant="outline">
              Tư vấn ngay
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted">
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-primary" aria-hidden />
              Bản quyền 100% chính hãng
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
              Bảo hành &amp; hỗ trợ kích hoạt
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rounded-[var(--radius-lg)] border border-border bg-gradient-to-br from-slate-50 to-primary-light p-6 shadow-card-hover">
            <div className="rounded-[var(--radius-md)] border border-border bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted">License Dashboard</span>
                <span className="flex h-6 items-center rounded-full bg-success/10 px-2.5 text-[11px] font-bold text-success">
                  Đã kích hoạt
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Microsoft 365 Business", meta: "12 / 15 license" },
                  { name: "Windows 11 Pro", meta: "8 / 10 license" },
                  { name: "Kaspersky Endpoint", meta: "20 / 20 license" },
                ].map((row) => (
                  <div key={row.name} className="flex items-center justify-between rounded-[10px] border border-border px-3.5 py-3">
                    <div>
                      <p className="text-sm font-semibold text-navy">{row.name}</p>
                      <p className="text-xs text-muted">{row.meta}</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-5 -top-5 hidden rounded-[var(--radius-md)] border border-border bg-white px-4 py-3 shadow-card-hover sm:block">
              <p className="text-[11px] font-medium text-muted">Uptime hỗ trợ</p>
              <p className="text-lg font-extrabold text-navy">
                99.9<span className="text-primary">%</span>
              </p>
            </div>

            <div className="absolute -bottom-6 left-6 hidden items-center gap-2.5 rounded-[var(--radius-md)] border border-border bg-white px-4 py-3 shadow-card-hover sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary">
                <ShieldCheck className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="text-[11px] font-medium text-muted">Bảo mật dữ liệu</p>
                <p className="text-sm font-bold text-navy">Chuẩn doanh nghiệp</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
