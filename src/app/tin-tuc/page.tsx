import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge from "@/components/ui/Badge";
import NewsCard from "@/components/home/NewsCard";
import CategoryPills from "@/components/ui/CategoryPills";
import { newsArticles, newsCategories } from "@/data/news";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tin tức & kiến thức công nghệ",
  description: "Cập nhật tin tức công nghệ, Microsoft, bảo mật và kiến thức phần mềm bản quyền cho doanh nghiệp.",
};

export default async function NewsListPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const featured = newsArticles.find((a) => a.featured);
  const list = newsArticles.filter((a) => (!category ? !a.featured : a.category === category));

  return (
    <div className="pb-16">
      <Breadcrumb items={[{ label: "Tin tức" }]} />

      <Container className="py-8">
        <h1 className="h1 !text-2xl md:!text-[32px]">Tin tức & kiến thức công nghệ</h1>
        <p className="mt-2 max-w-xl text-sm text-muted">Cập nhật xu hướng phần mềm doanh nghiệp, Microsoft và bảo mật thông tin.</p>

        <div className="mt-6">
          <CategoryPills basePath="/tin-tuc" options={newsCategories.map((c) => ({ value: c, label: c }))} />
        </div>

        {!category && featured && (
          <Link
            href={`/tin-tuc/${featured.slug}`}
            className="group mt-8 grid grid-cols-1 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover lg:grid-cols-2"
          >
            <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-primary-light to-slate-50 lg:aspect-auto">
              <span className="text-5xl font-extrabold text-primary/25">{featured.category}</span>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Badge tone="primary">{featured.category}</Badge>
                <span className="text-xs text-muted">
                  {formatDate(featured.date)} · {featured.readTime}
                </span>
              </div>
              <h2 className="h2 !text-xl md:!text-2xl transition-colors group-hover:text-primary">{featured.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{featured.excerpt}</p>
              <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary">
                Đọc bài viết
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </div>
          </Link>
        )}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </div>
  );
}
