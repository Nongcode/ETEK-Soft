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
  ShoppingCart,
  ShieldCheck,
  FileText,
  Key,
} from "lucide-react";
import Container from "@/components/ui/Container";
import MegaMenu from "@/components/layout/MegaMenu";
import MobileNav from "@/components/layout/MobileNav";
import SearchBox from "@/components/ui/SearchBox";
import CartIcon from "@/components/cart/CartIcon";
import { mainNav, productMegaMenu, guideMegaMenu, aboutMegaMenu } from "@/data/navigation";
import { buildProductSuggestions } from "@/lib/search";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

const suggestions = buildProductSuggestions();

export default function MainNav() {
  const pathname = usePathname();
  const { user, cartCount, openLoginModal, openRegisterModal, logout } = useAuth();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close user dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function openMenu(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 140);
  }

  return (
    <div
      className={cn(
        "relative transition-all duration-300 w-full backdrop-blur-xl border-b",
        scrolled
          ? "bg-white/92 border-slate-200/80 shadow-[0_10px_35px_rgba(37,99,235,0.08)] py-0"
          : "border-sky-100/70 py-1"
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* 100% Full-bleed Seamless Animated Silk Canvas (No white gaps or sharp cuts) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
        {/* Base full-width flowing silk gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-sky-50/85 via-blue-50/80 via-indigo-50/85 to-slate-50/95 animate-silk-bg" />

        {/* Oversized luminous silk aura 1: extends -25% to +125% so translation never reveals borders */}
        <div
          className="absolute -top-16 -bottom-16 -left-[25%] -right-[25%] opacity-40 animate-silk-aurora-1 filter blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse 45% 60% at 30% 50%, rgba(56, 189, 248, 0.4), transparent 70%), radial-gradient(ellipse 40% 55% at 75% 50%, rgba(99, 102, 241, 0.35), transparent 70%)",
          }}
        />

        {/* Oversized luminous silk aura 2: counter-flowing silk light */}
        <div
          className="absolute -top-16 -bottom-16 -left-[25%] -right-[25%] opacity-35 animate-silk-aurora-2 filter blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse 50% 65% at 65% 50%, rgba(14, 165, 233, 0.35), transparent 70%), radial-gradient(ellipse 40% 50% at 20% 50%, rgba(168, 85, 247, 0.25), transparent 70%)",
          }}
        />

        {/* Subtle shimmering silk ribbon light streak across the navbar */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.8) 45%, rgba(56, 189, 248, 0.35) 50%, transparent 75%)",
            backgroundSize: "200% 100%",
            animation: "silk-ribbon-flow 9s linear infinite",
          }}
        />
      </div>

      {/* Animated Bottom Silk Ribbon Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] overflow-hidden pointer-events-none z-20">
        <div className="h-full w-full bg-gradient-to-r from-sky-400 via-blue-600 via-indigo-500 via-cyan-400 to-sky-400 animate-silk-flow opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 blur-[2px] opacity-70 animate-silk-flow" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 lg:gap-4 transition-all duration-300 h-16 lg:h-[68px]">
        {/* Brand Logo - Using transparent PNG without white rectangular box */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 transition-transform hover:opacity-95"
          aria-label="ETEK SOLUTIONS Trang chủ"
        >
          <Image
            src="/images/etek-logo.png"
            alt="ETEK SOLUTIONS"
            width={150}
            height={62}
            priority
            className={cn(
              "w-auto object-contain transition-all duration-300",
              scrolled ? "h-7 sm:h-8" : "h-8 sm:h-9"
            )}
          />
        </Link>

        {/* Desktop Primary Navigation - Streamlined & Balanced */}
        <nav className="hidden items-center lg:flex" aria-label="Điều hướng chính">
          <ul className="flex items-center gap-1 xl:gap-2">
            {mainNav.map((item) => {
              const groups =
                item.megaMenu === "products"
                  ? productMegaMenu
                  : item.megaMenu === "guide"
                  ? guideMegaMenu
                  : item.megaMenu === "about"
                  ? aboutMegaMenu
                  : null;
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              const menuId = `mega-${item.megaMenu}`;

              return (
                <li
                  key={item.label}
                  className="relative flex items-center"
                  onMouseEnter={() => groups && openMenu(item.label)}
                  onMouseLeave={() => groups && scheduleClose()}
                  onBlur={(e) => {
                    if (
                      groups &&
                      !e.currentTarget.contains(e.relatedTarget as Node)
                    )
                      setActiveMenu(null);
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
                      "flex items-center gap-1 px-2.5 py-1.5 text-[13.5px] xl:text-[14px] font-medium transition-all duration-150 whitespace-nowrap rounded-lg",
                      isActive
                        ? "text-blue-600 font-bold bg-blue-50/70"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    )}
                  >
                    <span>{item.label}</span>
                    {groups && (
                      <ChevronDown
                        className={cn(
                          "h-3 w-3 text-slate-400 transition-transform duration-200 shrink-0",
                          activeMenu === item.label && "rotate-180 text-blue-600"
                        )}
                      />
                    )}
                  </Link>
                  {groups && activeMenu === item.label && (
                    <MegaMenu
                      id={menuId}
                      groups={groups}
                      align="center"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Actions: Search, Cart, User Auth & CTA */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          {/* Quick Search trigger */}
          <div className="relative hidden md:block">
            <button
              type="button"
              suppressHydrationWarning
              aria-label={searchOpen ? "Đóng tìm kiếm" : "Tìm kiếm sản phẩm"}
              onClick={() => setSearchOpen((v) => !v)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600"
            >
              {searchOpen ? (
                <X className="h-4 w-4" aria-hidden />
              ) : (
                <Search className="h-4 w-4" aria-hidden />
              )}
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-[calc(100%+12px)] w-[360px] shadow-2xl rounded-2xl z-50">
                <SearchBox suggestions={suggestions} />
              </div>
            )}
          </div>

          {/* Cart Icon for Commercial Software Store */}
          <Link
            href="/gio-hang"
            aria-label="Giỏ hàng bản quyền"
            className="relative flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600"
          >
            <ShoppingCart className="h-[18px] w-[18px]" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-blue-600 px-1 font-mono text-[9px] font-bold text-white shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>


          {/* User Account / Auth Section */}
          {user ? (
            /* Logged In State: Dropdown */
            <div className="relative" ref={userDropdownRef}>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setUserDropdownOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/80 p-1 pl-2 text-xs font-bold text-slate-800 transition-all hover:border-blue-300 hover:bg-blue-50/60"
              >
                <span className="hidden sm:inline max-w-[100px] truncate text-slate-900">
                  {user.name}
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 font-mono text-[10px] font-extrabold text-white shadow-sm">
                  {user.avatarText}
                </span>
                <ChevronDown className="h-3 w-3 text-slate-400 mr-0.5" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 top-[calc(100%+8px)] w-64 rounded-2xl border border-slate-200/90 bg-white p-2 shadow-2xl z-50 animate-fade-up">
                  <div className="border-b border-slate-100 px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-xs">
                        {user.avatarText}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-bold text-slate-900">
                          {user.name}
                        </p>
                        <p className="truncate text-[11px] text-slate-500">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                        <ShieldCheck className="h-3 w-3 text-emerald-600" />
                        Doanh Nghiệp VIP
                      </span>
                      <span className="font-mono text-[10px] text-blue-600 font-semibold">
                        {user.licenseCount} License
                      </span>
                    </div>
                  </div>

                  <div className="py-1 text-xs text-slate-700">
                    <a
                      href="#license-portal"
                      onClick={(e) => {
                        e.preventDefault();
                        setUserDropdownOpen(false);
                        alert(`Kho bản quyền của bạn: ${user.licenseCount} License Microsoft & HRM đang hoạt động hợp lệ.`);
                      }}
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 hover:bg-slate-50 transition-colors"
                    >
                      <Key className="h-3.5 w-3.5 text-blue-600" />
                      <span>Kho License & Bản Quyền</span>
                    </a>
                    <a
                      href="#orders"
                      onClick={(e) => {
                        e.preventDefault();
                        setUserDropdownOpen(false);
                        alert("Đơn hàng & Hóa đơn VAT điện tử lưu trữ tại cổng thương mại ETEK.");
                      }}
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 hover:bg-slate-50 transition-colors"
                    >
                      <FileText className="h-3.5 w-3.5 text-slate-500" />
                      <span>Lịch Sử Đơn Hàng & VAT</span>
                    </a>
                  </div>

                  <div className="border-t border-slate-100 pt-1">
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      <span>Đăng Xuất Khỏi Hệ Thống</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Logged Out State: Login / Register Trigger */
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                suppressHydrationWarning
                onClick={openLoginModal}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-600 transition-all shadow-sm"
              >
                <User className="h-3.5 w-3.5 text-slate-500" />
                <span className="whitespace-nowrap">Đăng nhập</span>
              </button>
            </div>
          )}

          {/* Primary Action CTA Button */}
          <Link
            href="/lien-he"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 px-4 py-2 text-xs xl:text-sm font-bold text-white shadow-[0_4px_14px_rgba(37,99,235,0.22)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] active:scale-95 whitespace-nowrap"
          >
            <span>Nhận tư vấn</span>
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white/20 text-white text-[10px]">
              →
            </span>
          </Link>

          {/* Mobile hamburger menu button */}
          <button
            type="button"
            suppressHydrationWarning
            aria-label="Mở menu"
            onClick={() => setMobileOpen(true)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>


      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </div>
  );
}

