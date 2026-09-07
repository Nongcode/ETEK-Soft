"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  Search,
  X,
  Sparkles,
  ChevronDown,
  User,
  LogOut,
  Gift,
  FileText,
  ShieldCheck
} from "lucide-react";
import Container from "@/components/ui/Container";
import MegaMenu from "@/components/layout/MegaMenu";
import MobileNav from "@/components/layout/MobileNav";
import SearchBox from "@/components/ui/SearchBox";
import AuthModal from "@/components/layout/AuthModal";
import VoucherDrawer from "@/components/layout/VoucherDrawer";
import { mainNav, productMegaMenu, guideMegaMenu } from "@/data/navigation";
import { buildProductSuggestions } from "@/lib/search";
import { cn } from "@/lib/utils";

const suggestions = buildProductSuggestions();

interface UserState {
  name: string;
  email: string;
  type: "business" | "individual";
}

export default function MainNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auth & Voucher Modal states
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [voucherDrawerOpen, setVoucherDrawerOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserState | null>(null);

  // Check saved user session
  useEffect(() => {
    try {
      const saved = localStorage.getItem("etek_user");
      if (saved) {
        setCurrentUser(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleLoginSuccess = (user: UserState) => {
    setCurrentUser(user);
    try {
      localStorage.setItem("etek_user", JSON.stringify(user));
    } catch {
      // ignore
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setUserDropdownOpen(false);
    try {
      localStorage.removeItem("etek_user");
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openMenu(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }

  return (
    <>
      <div
        className={cn(
          "sticky top-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b",
          scrolled
            ? "border-slate-200/90 shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
            : "border-slate-100"
        )}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <Container className="flex h-16 items-center justify-between gap-3 lg:h-[74px]">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="ETEK SOFTS Trang chủ">
            <Image
              src="/images/logo.png"
              alt="ETEK SOFTS"
              width={150}
              height={40}
              priority
              className="h-9 w-auto object-contain"
            />
            <span className="hidden xl:inline-flex items-center gap-1 rounded-full bg-teal-50 border border-teal-200/70 px-2 py-0.5 font-mono text-[9px] font-bold text-teal-700">
              <Sparkles className="h-2.5 w-2.5 text-teal-500" />
              2026 ECOMMERCE
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-stretch lg:flex" aria-label="Điều hướng chính">
            <ul className="flex items-stretch">
              {mainNav.map((item) => {
                const groups = item.megaMenu === "products" ? productMegaMenu : item.megaMenu === "guide" ? guideMegaMenu : null;
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                const menuId = `mega-${item.megaMenu}`;

                return (
                  <li
                    key={item.label}
                    className="relative flex items-stretch"
                    onMouseEnter={() => groups && openMenu(item.label)}
                    onMouseLeave={() => groups && scheduleClose()}
                    onBlur={(e) => {
                      if (groups && !e.currentTarget.contains(e.relatedTarget as Node)) setActiveMenu(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setActiveMenu(null);
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-haspopup={groups ? "menu" : undefined}
                      aria-expanded={groups ? activeMenu === item.label : undefined}
                      aria-controls={groups ? menuId : undefined}
                      onFocus={() => groups && openMenu(item.label)}
                      className={cn(
                        "flex items-center gap-1 px-3 text-[14px] font-medium transition-all duration-200 xl:px-3.5",
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "text-slate-700 hover:text-blue-600"
                      )}
                    >
                      <span>{item.label}</span>
                      {groups && (
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 text-slate-400 transition-transform duration-200",
                            activeMenu === item.label && "rotate-180 text-blue-600"
                          )}
                        />
                      )}
                    </Link>
                    {groups && activeMenu === item.label && <MegaMenu id={menuId} groups={groups} />}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right actions: Search, Voucher Hub, Login/Logout, and Consultation CTA */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            {/* Search Toggle */}
            <div className="relative hidden md:block">
              <button
                type="button"
                aria-label={searchOpen ? "Đóng tìm kiếm" : "Tìm kiếm sản phẩm"}
                onClick={() => setSearchOpen((v) => !v)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600"
              >
                {searchOpen ? <X className="h-[17px] w-[17px]" aria-hidden /> : <Search className="h-[17px] w-[17px]" aria-hidden />}
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-[calc(100%+12px)] w-[360px] shadow-2xl rounded-2xl z-50">
                  <SearchBox suggestions={suggestions} />
                </div>
              )}
            </div>

            {/* Voucher Event Button (Commercialized Feature) */}
            <button
              type="button"
              onClick={() => setVoucherDrawerOpen(true)}
              className="group relative flex items-center gap-1.5 rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-50 to-orange-50 px-2.5 sm:px-3 py-1.5 text-xs font-bold text-amber-900 shadow-xs hover:border-amber-400 hover:shadow-md hover:scale-105 transition-all"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              <Gift className="h-3.5 w-3.5 text-amber-600 transition-transform group-hover:rotate-12" />
              <span className="hidden sm:inline">Voucher</span>
              <span className="rounded-full bg-amber-500 px-1.5 py-0.2 text-[10px] text-white">
                500K
              </span>
            </button>

            {/* Auth Button (Đăng nhập / Đăng xuất) */}
            {currentUser ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen((v) => !v)}
                  className="flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-2.5 py-1 text-xs font-bold text-blue-700 hover:bg-blue-100 transition-all"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-extrabold text-white">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="max-w-[85px] truncate hidden md:inline">{currentUser.name}</span>
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", userDropdownOpen && "rotate-180")} />
                </button>

                {/* User Dropdown */}
                {userDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95">
                    <div className="border-b border-slate-100 px-3 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                        <p className="text-xs font-bold text-slate-800 truncate">{currentUser.name}</p>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">{currentUser.email}</p>
                      <span className="mt-1.5 inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                        {currentUser.type === "business" ? "Tài Khoản Doanh Nghiệp" : "Khách Hàng Cá Nhân"}
                      </span>
                    </div>

                    <div className="py-1 text-xs font-medium text-slate-700">
                      <Link
                        href="/tu-van"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-50"
                      >
                        <FileText className="h-4 w-4 text-slate-400" />
                        <span>Đơn hàng & Giấy phép phần mềm</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setUserDropdownOpen(false);
                          setVoucherDrawerOpen(true);
                        }}
                        className="w-full flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-50 text-left"
                      >
                        <Gift className="h-4 w-4 text-amber-500" />
                        <span>Kho Voucher của tôi (4)</span>
                      </button>
                    </div>

                    <div className="border-t border-slate-100 pt-1">
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors text-left"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Đăng xuất tài khoản</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setAuthModalOpen(true)}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 transition-all"
              >
                <User className="h-3.5 w-3.5 text-blue-600" />
                <span>Đăng nhập</span>
              </button>
            )}

            {/* Nhận tư vấn CTA */}
            <Link
              href="/tu-van"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-[0_4px_14px_rgba(20,184,166,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_20px_rgba(20,184,166,0.35)] active:scale-95"
            >
              <span>Nhận tư vấn</span>
              <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-white/20 text-[10px] sm:text-xs text-white">
                →
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Mở menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </Container>

        <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>

      {/* Global Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Global Voucher Drawer */}
      <VoucherDrawer
        isOpen={voucherDrawerOpen}
        onClose={() => setVoucherDrawerOpen(false)}
      />
    </>
  );
}
