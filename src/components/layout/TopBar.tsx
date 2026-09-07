import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";

export default function TopBar() {
  return (
    <div className="hidden bg-navy text-white md:block">
      <Container className="flex h-10 items-center justify-between text-xs">
        <p className="text-white/70">Đối tác phân phối phần mềm bản quyền chính hãng cho doanh nghiệp</p>
        <div className="flex items-center gap-5">
          <a href="tel:19002026" className="flex items-center gap-1.5 text-white/85 transition-colors hover:text-white">
            <Phone className="h-3.5 w-3.5" aria-hidden />
            1900 2026
          </a>
          <a
            href="mailto:sales@etek-soft.vn"
            className="flex items-center gap-1.5 text-white/85 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden />
            sales@etek-soft.vn
          </a>
          <Link href="/tu-van" className="font-semibold text-white transition-colors hover:text-primary-light">
            Nhận tư vấn
          </Link>
        </div>
      </Container>
    </div>
  );
}
