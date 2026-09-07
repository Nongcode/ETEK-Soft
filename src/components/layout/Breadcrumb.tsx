import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Container from "@/components/ui/Container";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Trang chủ", position: 1 }, ...items.map((i, idx) => ({ name: i.label, position: idx + 2 }))].map(
      (entry, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: entry.name,
      })
    ),
  };

  return (
    <div className="border-b border-border bg-white">
      <Container>
        <nav aria-label="Breadcrumb" className="flex h-11 items-center overflow-x-auto text-[13px] no-scrollbar">
          <ol className="flex items-center gap-1.5 whitespace-nowrap">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="flex items-center gap-1 text-muted transition-colors hover:text-primary">
                <Home className="h-3.5 w-3.5" aria-hidden />
                Trang chủ
              </Link>
            </li>
            {items.map((item, idx) => {
              const isLast = idx === items.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-muted-light" aria-hidden />
                  {item.href && !isLast ? (
                    <Link href={item.href} className="text-muted transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-[#334155]" aria-current="page">
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
