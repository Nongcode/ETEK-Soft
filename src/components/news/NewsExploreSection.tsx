"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown, Filter, RotateCcw, Search, Sparkles, X } from "lucide-react";
import { NewsArticle } from "@/types";
import NewsCard from "@/components/home/NewsCard";

interface NewsExploreSectionProps {
  articles: NewsArticle[];
  categories: string[];
}

export default function NewsExploreSection({ articles, categories }: { articles: NewsArticle[]; categories: string[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  // Calculate counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: articles.length };
    articles.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, [articles]);

  // Filter & sort articles
  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => {
        const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          article.title.toLowerCase().includes(q) ||
          article.excerpt.toLowerCase().includes(q) ||
          article.category.toLowerCase().includes(q) ||
          article.tags?.some((t) => t.toLowerCase().includes(q));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortOrder === "newest") {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
      });
  }, [articles, selectedCategory, searchQuery, sortOrder]);

  const handleReset = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSortOrder("newest");
  };

  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Spacious 2-Tier Control Panel: Top Search & Sort, Bottom Complete Category Pills */}
        <div
          data-reveal="up"
          className="rounded-[2.2rem] border border-slate-200/90 bg-white p-5 sm:p-7 shadow-sm mb-9"
        >
          {/* Tier 1: Search Box & Sort Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Filter className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
                  CHUYÊN MỤC BÀI VIẾT
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Hiển thị {filteredArticles.length} / {articles.length} bài viết
                </p>
              </div>
            </div>

            {/* Search Input & Symmetrical Sort */}
            <div className="flex items-center gap-2.5 flex-1 sm:flex-initial justify-end">
              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm bài viết, AI, FaceID..."
                  className="w-full rounded-full border border-slate-200 bg-slate-50/90 pl-9 pr-8 py-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    title="Xóa tìm kiếm"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Sort Switcher Button */}
              <button
                type="button"
                onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors shrink-0 cursor-pointer"
                title="Thay đổi thứ tự sắp xếp"
              >
                <ArrowUpDown className="h-3.5 w-3.5 text-blue-600" />
                <span className="hidden sm:inline">{sortOrder === "newest" ? "Mới nhất" : "Cũ nhất"}</span>
              </button>
            </div>
          </div>

          {/* Tier 2: Category Filter Pills (Wrap freely so NO pill is EVER cut off or clipped!) */}
          <div className="pt-5">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60"
                }`}
              >
                Tất cả <span className="ml-1 opacity-80 font-mono text-[11px]">({categoryCounts.all || 0})</span>
              </button>

              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60"
                    }`}
                  >
                    {cat} <span className="ml-1 opacity-80 font-mono text-[11px]">({categoryCounts[cat] || 0})</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Results Counter Notice when filter is active */}
        {(selectedCategory !== "all" || searchQuery) && (
          <div
            data-reveal="fade"
            className="mb-6 flex items-center justify-between gap-3 text-xs text-slate-600 font-medium bg-blue-50/80 border border-blue-100 rounded-2xl px-5 py-2.5 animate-fade-up"
          >
            <div>
              Đang lọc: <strong>{filteredArticles.length}</strong> bài viết
              {selectedCategory !== "all" && (
                <span>
                  {" "}
                  thuộc danh mục <strong>&ldquo;{selectedCategory}&rdquo;</strong>
                </span>
              )}
              {searchQuery && (
                <span>
                  {" "}
                  khớp với <strong>&ldquo;{searchQuery}&rdquo;</strong>
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 font-bold text-blue-700 hover:underline cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Đặt lại bộ lọc</span>
            </button>
          </div>
        )}

        {/* Articles Bento Grid (Scroll-activated staggered reveal) */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" data-reveal-group data-reveal-step="100">
            {filteredArticles.map((article) => (
              <div key={article.id} data-reveal>
                <NewsCard article={article} />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[2.5rem] border border-dashed border-slate-300 bg-white/80 p-12 text-center my-6 shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Không tìm thấy bài viết phù hợp</h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              Không có bài viết nào khớp với từ khóa &ldquo;{searchQuery}&rdquo;. Vui lòng thử lại với từ khóa khác hoặc xóa bộ lọc.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Xem tất cả bài viết</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
