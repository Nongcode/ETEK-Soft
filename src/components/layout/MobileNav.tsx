"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Phone, X, User, LogOut, ShieldCheck } from "lucide-react";
import { mainNav, productMegaMenu, guideMegaMenu, aboutMegaMenu } from "@/data/navigation";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const { user, openLoginModal, openRegisterModal, logout } = useAuth();
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
            const groups =
              item.megaMenu === "products"
                ? productMegaMenu
                : item.megaMenu === "guide"
                ? guideMegaMenu
                : item.megaMenu === "about"
                ? aboutMegaMenu
                : null;
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

      <div className="shrink-0 border-t border-border p-4 bg-slate-50/80">
        {/* User Auth Section */}
        {user ? (
          <div className="mb-3 rounded-2xl border border-blue-200 bg-white p-3 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-xs text-blue-700">
                {user.avatarText}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-slate-900">{user.name}</p>
                <p className="truncate text-[11px] text-slate-500">{user.email}</p>
              </div>
              <button
                type="button"
                onClick={logout}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-rose-600 hover:bg-rose-50"
                title="Đăng xuất"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" /> Doanh Nghiệp VIP
              </span>
              <span className="font-mono text-blue-600 font-bold">{user.licenseCount} License</span>
            </div>
          </div>
        ) : (
          <div className="mb-3 flex gap-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                openLoginModal();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-800 shadow-sm"
            >
              <User className="h-3.5 w-3.5 text-slate-500" />
              Đăng nhập
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                openRegisterModal();
              }}
              className="flex-1 flex items-center justify-center rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white shadow-sm"
            >
              Tạo tài khoản
            </button>
          </div>
        )}

        <div className="mb-3 flex flex-col gap-2 text-xs text-muted">
          <a href="tel:19002026" className="flex items-center gap-2 font-medium">
            <Phone className="h-3.5 w-3.5 text-primary" aria-hidden /> Hotline: 1900 2026
          </a>
          <a href="mailto:sales@etek-soft.vn" className="flex items-center gap-2 font-medium">
            <Mail className="h-3.5 w-3.5 text-primary" aria-hidden /> sales@etek-soft.vn
          </a>
        </div>
        <Button href="/tu-van" className="w-full">
          Nhận tư vấn ngay
        </Button>
      </div>
    </div>
  );
}

