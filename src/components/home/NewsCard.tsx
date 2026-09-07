import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NewsArticle } from "@/types";
import { formatDate } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={`/tin-tuc/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-border bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover"
    >
      <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-primary-light to-slate-50">
        <span className="text-3xl font-extrabold text-primary/30">{article.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          <Badge tone="primary">{article.category}</Badge>
          <span className="text-xs text-muted">{formatDate(article.date)}</span>
        </div>
        <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-navy transition-colors group-hover:text-primary">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
        <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
          Đọc tiếp
          <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
