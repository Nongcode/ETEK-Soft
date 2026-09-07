import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  buildHref,
}: {
  currentPage: number;
  totalPages: number;
  buildHref: (page: number) => string;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Phân trang" className="mt-10 flex items-center justify-center gap-1.5">
      <Link
        href={buildHref(Math.max(1, currentPage - 1))}
        aria-label="Trang trước"
        aria-disabled={currentPage === 1}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-white text-navy transition-colors hover:border-primary hover:text-primary",
          currentPage === 1 && "pointer-events-none opacity-40"
        )}
      >
        <ChevronLeft className="h-4 w-4" aria-hidden />
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={buildHref(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] text-sm font-semibold transition-colors",
            page === currentPage
              ? "bg-primary text-white"
              : "border border-border bg-white text-navy hover:border-primary hover:text-primary"
          )}
        >
          {page}
        </Link>
      ))}

      <Link
        href={buildHref(Math.min(totalPages, currentPage + 1))}
        aria-label="Trang sau"
        aria-disabled={currentPage === totalPages}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-white text-navy transition-colors hover:border-primary hover:text-primary",
          currentPage === totalPages && "pointer-events-none opacity-40"
        )}
      >
        <ChevronRight className="h-4 w-4" aria-hidden />
      </Link>
    </nav>
  );
}
