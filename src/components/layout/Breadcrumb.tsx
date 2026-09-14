import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Container from "@/components/ui/Container";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  containerClassName?: string;
  noContainer?: boolean;
  isDark?: boolean;
}

export default function Breadcrumb({
  items,
  className = "",
  containerClassName = "",
  noContainer = false,
  isDark = false,
}: BreadcrumbProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Trang chủ", position: 1 },
      ...items.map((i, idx) => ({ name: i.label, position: idx + 2 })),
    ].map((entry, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: entry.name,
    })),
  };

  const navContent = (
    <nav
      aria-label="Breadcrumb"
      className={`flex h-10 items-center overflow-x-auto text-[13px] no-scrollbar ${containerClassName}`}
    >
      <ol className="flex items-center gap-1.5 whitespace-nowrap">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className={`flex items-center gap-1 transition-colors ${
              isDark
                ? "text-slate-300 hover:text-white"
                : "text-slate-500 hover:text-blue-600"
            }`}
          >
            <Home className="h-3.5 w-3.5" aria-hidden />
            Trang chủ
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight
                className={`h-3.5 w-3.5 ${isDark ? "text-slate-400" : "text-slate-400"}`}
                aria-hidden
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isDark
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-500 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );

  return (
    <div className={`w-full bg-transparent ${className}`}>
      {noContainer ? navContent : <Container>{navContent}</Container>}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
