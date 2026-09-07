"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MegaMenu from "@/components/layout/MegaMenu";
import MobileNav from "@/components/layout/MobileNav";
import SearchBox from "@/components/ui/SearchBox";
import CartIcon from "@/components/cart/CartIcon";
import { mainNav, productMegaMenu, guideMegaMenu } from "@/data/navigation";
import { buildProductSuggestions } from "@/lib/search";
import { cn } from "@/lib/utils";

const suggestions = buildProductSuggestions();

export default function MainNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    <div
      className={cn(
        "sticky top-0 z-50 border-b bg-white transition-shadow duration-300",
        scrolled ? "border-transparent shadow-header" : "border-border"
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="ETEK SOFTS Trang chủ">
          <Image
            src="/images/logo.png"
            alt="ETEK SOFTS"
            width={160}
            height={43}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
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
                      "flex items-center gap-1 px-3.5 text-[14.5px] font-medium text-navy/85 transition-colors hover:text-primary xl:px-4",
                      isActive && "text-primary font-semibold"
                    )}
                  >
                    {item.label}
                    {groups && (
                      <svg
                        className={cn("h-3.5 w-3.5 text-muted transition-transform", activeMenu === item.label && "rotate-180 text-primary")}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </Link>
                  {groups && activeMenu === item.label && <MegaMenu id={menuId} groups={groups} />}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-1.5">
          <div className="relative hidden md:block">
            <button
              type="button"
              aria-label={searchOpen ? "Đóng tìm kiếm" : "Tìm kiếm sản phẩm"}
              onClick={() => setSearchOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-primary-light hover:text-primary"
            >
              {searchOpen ? <X className="h-[18px] w-[18px]" aria-hidden /> : <Search className="h-[18px] w-[18px]" aria-hidden />}
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-[calc(100%+10px)] w-[340px]">
                <SearchBox suggestions={suggestions} />
              </div>
            )}
          </div>

          <CartIcon />

          <Button href="/tu-van" size="md" className="hidden lg:inline-flex">
            Nhận tư vấn
          </Button>

          <button
            type="button"
            aria-label="Mở menu"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-slate-100 lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </Container>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </div>
  );
}
