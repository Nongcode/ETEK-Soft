import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, Sparkles } from "lucide-react";
import { NewsArticle } from "@/types";
import { formatDate } from "@/lib/utils";

export default function NewsCard({ article }: { article: NewsArticle }) {
  const imageSrc = article.image || "/legacy-media/articles/chuyen-doi-so.webp";

  return (
    <Link
      href={`/tin-tuc/${article.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
    >
      {/* Image Container with Hover Scale */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        <Image
          src={imageSrc}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Badge Top Left */}
        <div className="absolute top-3.5 left-3.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 px-3 py-1 font-mono text-[10.5px] font-bold text-cyan-300 backdrop-blur-md border border-cyan-400/20 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            {article.category}
          </span>
        </div>

        {/* Reading Time Pill Bottom Right */}
        <div className="absolute bottom-3 right-3.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-0.5 text-[10.5px] font-medium text-slate-200 backdrop-blur-sm">
            <Clock className="h-3 w-3 text-cyan-400" />
            {article.readTime}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          {/* Published Date & Author */}
          <div className="mb-3 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-blue-600" />
              {formatDate(article.date)}
            </span>
            {article.author && (
              <span className="truncate max-w-[140px] text-slate-600 font-semibold">
                {article.author.name}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold leading-snug text-slate-900 tracking-tight transition-colors group-hover:text-blue-600 line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>

        {/* Bottom CTA Arrow */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
            <span>Đọc bài viết</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <span className="h-1.5 w-6 rounded-full bg-slate-200 group-hover:w-12 group-hover:bg-blue-600 transition-all duration-300" />
        </div>
      </div>
    </Link>
  );
}
