import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import NewsCard from "@/components/home/NewsCard";
import { newsArticles } from "@/data/news";

export default function NewsSection() {
  const latest = newsArticles.slice(0, 3);

  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionTitle eyebrow="Blog" title="Tin tức & kiến thức công nghệ" description="Cập nhật xu hướng phần mềm doanh nghiệp và kiến thức license bản quyền." />
          <Link href="/tin-tuc" className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark">
            Xem tất cả tin tức
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
