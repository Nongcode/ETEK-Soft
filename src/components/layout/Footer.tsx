import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";

const socialLinks = [
  { label: "Facebook", short: "f" },
  { label: "LinkedIn", short: "in" },
  { label: "YouTube", short: "yt" },
];

const productLinks = [
  { label: "Microsoft", href: "/san-pham?category=microsoft" },
  { label: "Windows", href: "/san-pham?category=windows" },
  { label: "Office", href: "/san-pham?category=office" },
  { label: "Microsoft 365", href: "/san-pham?category=microsoft-365" },
  { label: "Antivirus", href: "/san-pham?category=antivirus" },
];

const supportLinks = [
  { label: "Hướng dẫn", href: "/huong-dan" },
  { label: "Câu hỏi thường gặp", href: "/huong-dan?category=faq" },
  { label: "Chính sách bản quyền", href: "/huong-dan?category=chinh-sach" },
  { label: "Điều khoản sử dụng", href: "/huong-dan?category=chinh-sach" },
];

const aboutLinks = [
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <Container className="grid grid-cols-2 gap-x-8 gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-1">
          <Link
            href="/"
            aria-label="ETEK SOFTS Trang chủ"
            className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 shadow-sm transition-opacity hover:opacity-90"
          >
            <Image
              src="/images/logo.png"
              alt="ETEK SOFTS"
              width={140}
              height={38}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Nhà cung cấp phần mềm bản quyền chính hãng và giải pháp công nghệ cho doanh nghiệp Việt Nam.
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white/80 transition-colors hover:bg-primary hover:text-white"
              >
                {social.short}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Về chúng tôi</h3>
          <ul className="space-y-2.5">
            {aboutLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Sản phẩm</h3>
          <ul className="space-y-2.5">
            {productLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Hỗ trợ</h3>
          <ul className="space-y-2.5">
            {supportLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Liên hệ</h3>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" aria-hidden />
              1900 2026
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" aria-hidden />
              sales@etek-soft.vn
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" aria-hidden />
              Tầng 12, Tòa nhà Etek, Q. Cầu Giấy, Hà Nội
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>© 2026 Công ty Cổ phần Công nghệ ETEK-soft. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/huong-dan?category=chinh-sach" className="hover:text-white">
              Chính sách bảo mật
            </Link>
            <Link href="/huong-dan?category=chinh-sach" className="hover:text-white">
              Điều khoản
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
