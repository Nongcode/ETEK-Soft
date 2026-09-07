import Link from "next/link";
import Image from "next/image";
import { FileText, Headphones, HeartHandshake, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Container from "@/components/ui/Container";

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "100% Chính hãng",
    desc: "Từ nhà sản xuất",
  },
  {
    icon: Zap,
    title: "Bàn giao siêu tốc",
    desc: "15 - 30 phút qua email",
  },
  {
    icon: FileText,
    title: "Hóa đơn VAT",
    desc: "Hợp lệ chi phí DN",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
    desc: "Cài đặt UltraViewer",
  },
];

export default function CartBanner({ totalItems = 0 }: { totalItems?: number }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-slate-50">
      {/* Background Banner Image from D:\Downloads\banner-cart.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner-cart.png"
          alt="ETEK SOFTS Banner Giỏ Hàng"
          fill
          priority
          className="object-cover object-right lg:object-center"
        />
        {/* Soft gradient wash to guarantee high contrast and readability on the left content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:via-white/70 lg:via-white/40" />
      </div>

      <Container className="relative z-10 py-10 lg:py-14">
        {/* Top Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs font-semibold text-slate-600">
          <Link href="/" className="transition-colors hover:text-primary">
            Trang chủ
          </Link>
          <span className="text-slate-400">/</span>
          <Link href="/san-pham" className="transition-colors hover:text-primary">
            Sản phẩm
          </Link>
          <span className="text-slate-400">/</span>
          <span className="font-bold text-primary">Giỏ hàng</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading & Special Thank You Message */}
          <div className="lg:col-span-7">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-xs backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
              <span>ETEK SOFTS Checkout</span>
            </div>

            <h1 className="text-2xl font-black tracking-tight text-navy sm:text-3xl lg:text-4xl">
              Giỏ Hàng &amp; Đơn Hàng Của Bạn
            </h1>

            {/* Special Thank You Note Card */}
            <div className="mt-4 rounded-2xl border border-white/80 bg-white/85 p-4 sm:p-5 shadow-xs backdrop-blur-sm">
              <div className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                  <HeartHandshake className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">
                    Lời cảm ơn từ ETEK SOFTS
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-slate-700">
                    Chân thành cảm ơn Quý khách và Quý doanh nghiệp đã tin tưởng lựa chọn giải pháp phần mềm bản quyền chính hãng tại ETEK SOFTS. Chúng tôi cam kết cung cấp license hợp pháp 100%, bảo hành kích hoạt và hỗ trợ kỹ thuật tận tâm trong suốt quá trình sử dụng.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-3.5 text-xs font-medium text-slate-600">
              {totalItems > 0
                ? `Hiện đang có ${totalItems} sản phẩm được chọn trong đơn hàng của bạn.`
                : "Giỏ hàng hiện chưa có sản phẩm nào."}
            </p>
          </div>

          {/* Right Column: Space for the 3D Shopping Cart & Laptop artwork to shine through */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>

        {/* 4 Trust Badges Floating Strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-3xl lg:max-w-4xl pt-2">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/85 p-3 shadow-xs backdrop-blur-sm transition-all hover:bg-white hover:shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-bold text-navy">{badge.title}</p>
                  <p className="truncate text-[11px] font-medium text-slate-500">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
