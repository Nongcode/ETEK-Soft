import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge from "@/components/ui/Badge";
import NewsCard from "@/components/home/NewsCard";
import { newsArticles, getNewsBySlug } from "@/data/news";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const related = newsArticles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3);

  return (
    <div className="pb-16">
      <Breadcrumb items={[{ label: "Tin tức", href: "/tin-tuc" }, { label: article.title }]} />

      <Container className="max-w-3xl py-10">
        <div className="mb-4 flex items-center gap-2">
          <Badge tone="primary">{article.category}</Badge>
          <span className="text-xs text-muted">
            {formatDate(article.date)} · {article.readTime}
          </span>
        </div>
        <h1 className="h1 !text-2xl md:!text-[32px]">{article.title}</h1>
        <p className="body-lg mt-4">{article.excerpt}</p>

        <div className="mt-6 flex aspect-[16/8] items-center justify-center rounded-[var(--radius-lg)] bg-gradient-to-br from-primary-light to-slate-50">
          <span className="text-4xl font-extrabold text-primary/25">{article.category}</span>
        </div>

        <div className="prose-etek mt-8 space-y-5">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="text-[15px] leading-[1.8] text-navy/85">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>

      {related.length > 0 && (
        <Container className="mt-8 border-t border-border pt-12">
          <h2 className="h3 mb-6">Bài viết liên quan</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}
