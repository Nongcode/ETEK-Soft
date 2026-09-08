"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchSuggestion {
  label: string;
  meta: string;
  href: string;
}

export default function SearchBox({
  placeholder = "Tìm kiếm phần mềm, sản phẩm...",
  suggestions = [],
  searchHref = "/san-pham",
  className,
}: {
  placeholder?: string;
  suggestions?: SearchSuggestion[];
  searchHref?: string;
  className?: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLFormElement>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return suggestions.filter((s) => s.label.toLowerCase().includes(q) || s.meta.toLowerCase().includes(q)).slice(0, 6);
  }, [query, suggestions]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOpen(false);
    router.push(`${searchHref}?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <form
      ref={containerRef}
      onSubmit={handleSubmit}
      role="search"
      className={cn("relative w-full", className)}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div className="flex h-11 items-center rounded-xl border border-slate-200 bg-white pl-4 pr-1.5 transition-colors focus-within:border-slate-400 focus-within:ring-0 outline-none">
        <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden />
        <input
          type="text"
          suppressHydrationWarning
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          aria-label="Tìm kiếm sản phẩm"
          className="h-full w-full bg-transparent px-3 text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-0 outline-none"
        />
        {query && (
          <button
            type="button"
            suppressHydrationWarning
            aria-label="Xóa tìm kiếm"
            onClick={() => setQuery("")}
            className="mr-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted hover:bg-slate-100"
          >
            <X className="h-3.5 w-3.5" aria-hidden />
          </button>
        )}
        <button
          type="submit"
          suppressHydrationWarning
          className="h-8 shrink-0 rounded-[6px] bg-primary px-4 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Tìm
        </button>
      </div>

      {open && filtered.length > 0 && (
        <ul className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 overflow-hidden rounded-[var(--radius-md)] border border-border bg-white shadow-card-hover">
          {filtered.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-navy hover:bg-primary-light"
                onClick={() => setOpen(false)}
              >
                <span className="font-medium">{s.label}</span>
                <span className="text-xs text-muted">{s.meta}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
