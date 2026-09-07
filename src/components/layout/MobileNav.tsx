"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Phone, X } from "lucide-react";
import { mainNav, productMegaMenu, guideMegaMenu } from "@/data/navigation";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white md:hidden" role="dialog" aria-modal="true">
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4">
        <Link href="/" onClick={onClose} className="flex items-center" aria-label="ETEK SOFTS Trang chủ">
          <Image
            src="/images/logo.png"
            alt="ETEK SOFTS"
            width={135}
            height={36}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-slate-100"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3">
        <ul className="flex flex-col">
          {mainNav.map((item) => {
            const groups = item.megaMenu === "products" ? productMegaMenu : item.megaMenu === "guide" ? guideMegaMenu : null;
            const isExpanded = expanded === item.label;
            const isActive = pathname === item.href;

            if (!groups) {
              return (
                <li key={item.label} className="border-b border-border/70">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between px-3 py-3.5 text-[15px] font-medium text-navy",
                      isActive && "text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.label} className="border-b border-border/70">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-3.5 text-[15px] font-medium text-navy"
                  aria-expanded={isExpanded}
                  onClick={() => setExpanded(isExpanded ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown className={cn("h-4 w-4 text-muted transition-transform", isExpanded && "rotate-180")} aria-hidden />
                </button>
                {isExpanded && (
                  <div className="px-3 pb-3">
                    {groups.map((group) => (
                      <div key={group.title} className="mb-2">
                        <p className="px-1 py-1.5 text-[11px] font-bold uppercase tracking-wide text-muted">{group.title}</p>
                        <ul>
                          {group.items.map((sub) => (
                            <li key={sub.label}>
                              <Link href={sub.href} className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm text-navy hover:bg-primary-light hover:text-primary">
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="shrink-0 border-t border-border p-4">
        <div className="mb-3 flex flex-col gap-2 text-sm text-muted">
          <a href="tel:19002026" className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" aria-hidden /> 1900 2026
          </a>
          <a href="mailto:sales@etek-soft.vn" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" aria-hidden /> sales@etek-soft.vn
          </a>
        </div>
        <Button href="/tu-van" className="w-full">
          Nhận tư vấn
        </Button>
      </div>
    </div>
  );
}
