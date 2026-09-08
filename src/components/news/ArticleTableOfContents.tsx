"use client";

import { useEffect, useState } from "react";
import { AlignLeft, Check, Copy, Share2 } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

export function ArticleTableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-4">
        <AlignLeft className="h-4 w-4 text-blue-600" />
        <span className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
          MỤC LỤC BÀI VIẾT
        </span>
      </div>

      <nav className="space-y-2">
        {items.map((item, idx) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`group flex items-start gap-2.5 text-left w-full rounded-xl px-3 py-2 text-xs transition-all ${
                isActive
                  ? "bg-blue-50 font-bold text-blue-700 ring-1 ring-blue-200"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md font-mono text-[10px] ${
                  isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {idx + 1}
              </span>
              <span className="line-clamp-2 leading-relaxed">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export function ArticleShareBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-slate-500 font-mono uppercase mr-1">Chia sẻ:</span>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-xs cursor-pointer"
        title="Sao chép liên kết"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-emerald-600" />
            <span className="text-emerald-700">Đã chép!</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            <span>Chép link</span>
          </>
        )}
      </button>

      {/* Facebook SVG */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          typeof window !== "undefined" ? window.location.href : ""
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 transition-all shadow-xs"
        title="Chia sẻ Facebook"
      >
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>

      {/* LinkedIn SVG */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          typeof window !== "undefined" ? window.location.href : ""
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-blue-700 hover:bg-blue-50 hover:text-blue-700 transition-all shadow-xs"
        title="Chia sẻ LinkedIn"
      >
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
    </div>
  );
}
