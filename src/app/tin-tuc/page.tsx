import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import NewsHeroFeatured from "@/components/news/NewsHeroFeatured";
import NewsExploreSection from "@/components/news/NewsExploreSection";
import NewsNewsletter from "@/components/news/NewsNewsletter";
import { newsArticles, newsCategories } from "@/data/news";

export const metadata: Metadata = {
  title: "Tin Tức & Kiến Thức Bản Quyền Công Nghệ | ETEK-soft",
  description:
    "Cập nhật xu hướng chuyển đổi số doanh nghiệp, chính sách bản quyền Microsoft 365, giải pháp HRM 4.0 FaceID và kiến thức an toàn thông tin doanh nghiệp.",
};

export default function NewsListPage() {
  const featured = newsArticles.find((a) => a.featured) || newsArticles[0];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-50/40 text-slate-900 selection:bg-blue-100 selection:text-blue-900 pb-16">
      {/* Standalone Top Breadcrumb Strip */}
      <Breadcrumb items={[{ label: "Tin tức" }]} />

      {/* 1. Hero Spotlight: Big Editorial Featured Article with Hot Keywords */}
      <NewsHeroFeatured article={featured} />

      {/* 2. Interactive Explore Section: Category Switcher, Search Bar, Bento Grid */}
      <NewsExploreSection articles={newsArticles} categories={newsCategories} />

      {/* 3. Tech Briefing Newsletter Subscription */}
      <NewsNewsletter />
    </div>
  );
}
