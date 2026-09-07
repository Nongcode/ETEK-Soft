import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Guide } from "@/types";
import { formatDate } from "@/lib/utils";
import { guideCategories } from "@/data/guides";

export default function GuideCard({ guide }: { guide: Guide }) {
  const categoryLabel = guideCategories.find((c) => c.slug === guide.category)?.label ?? guide.category;

  return (
    <Link
      href={`/huong-dan/${guide.slug}`}
      className="group flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-primary-light text-primary">
        <BookOpen className="h-5 w-5" aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{categoryLabel}</p>
        <h3 className="mt-1 text-[15px] font-semibold leading-snug text-navy transition-colors group-hover:text-primary">{guide.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{guide.excerpt}</p>
        <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-muted">
          {formatDate(guide.date)}
          <ArrowRight className="ml-1 h-3.5 w-3.5 text-primary" aria-hidden />
        </div>
      </div>
    </Link>
  );
}
