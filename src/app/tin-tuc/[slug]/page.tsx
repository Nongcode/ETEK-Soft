import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookmarkCheck,
  Calendar,
  CheckCircle2,
  Clock,
  Headphones,
  Lightbulb,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Tag,
  UserCheck,
} from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import NewsCard from "@/components/home/NewsCard";
import { ArticleShareBar, ArticleTableOfContents } from "@/components/news/ArticleTableOfContents";
import { newsArticles, getNewsBySlug } from "@/data/news";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | ETEK-soft`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const related = newsArticles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3);
  const recentArticles = newsArticles.filter((a) => a.id !== article.id).slice(0, 4);

  const imageSrc = article.image || "/legacy-media/solutions/phan-mem-microsoft-365.jpg";

  // Build Table of Contents list based on paragraphs
  const tocItems = [
    { id: "section-overview", label: "Tổng quan & Bối cảnh phát triển" },
    { id: "section-analysis", label: "Phân tích chi tiết & Điểm đột phá" },
    { id: "section-implementation", label: "Khuyến nghị triển khai cho doanh nghiệp" },
    { id: "section-conclusion", label: "Kết luận & Hướng phát triển" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-50/40 text-slate-900 selection:bg-blue-100 selection:text-blue-900 pb-20">
      
      {/* Header Container */}
      <section className="bg-white border-b border-slate-200/80 pt-4 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Tin tức", href: "/tin-tuc" }, { label: article.title }]} />

          <div className="mt-8 max-w-4xl">
            {/* Category & Meta Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1 font-mono text-xs font-bold text-white shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                <Calendar className="h-3.5 w-3.5 text-blue-600" />
                {formatDate(article.date)}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                <Clock className="h-3.5 w-3.5 text-blue-600" />
                {article.readTime}
              </span>
            </div>

            {/* Article Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.25]">
              {article.title}
            </h1>

            {/* Lead Paragraph */}
            <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal border-l-4 border-blue-600 pl-4 bg-blue-50/40 py-2 rounded-r-xl">
              {article.excerpt}
            </p>

            {/* Author & Share Bar */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {article.author ? article.author.name.charAt(0) : "E"}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {article.author ? article.author.name : "Ban Cố Vấn ETEK-soft"}
                  </p>
                  <p className="text-xs text-slate-500">
                    {article.author ? article.author.role : "Bộ Phận Nghiên Cứu Chuyển Đổi Số"}
                  </p>
                </div>
              </div>

              <ArticleShareBar title={article.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Article Body (8 cols) */}
          <article className="lg:col-span-8 space-y-8">
            
            {/* Hero Image Showcase with High-End Frame */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-xl border border-slate-200/90">
              <Image
                src={imageSrc}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                <span className="rounded-xl bg-slate-950/80 px-3 py-1 font-mono text-[11px] font-medium text-cyan-300 backdrop-blur-md">
                  Tài liệu giải pháp chính thức ETEK-soft
                </span>
                <span className="hidden sm:inline-block rounded-xl bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-md">
                  Bản quyền chính ngạch
                </span>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/50 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2.5 text-blue-800 font-bold mb-4 font-mono text-xs uppercase tracking-wider">
                <BookmarkCheck className="h-4 w-4 text-blue-600" />
                <span>ĐIỂM TIN CỐT LÕI CẦN NẮM</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Giải quyết bài toán vận hành thực tế, tăng tốc độ xử lý quy trình lên tới 40%.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Đảm bảo tính tuân thủ pháp lý và an toàn kiểm toán bản quyền với CO/CQ chính hãng.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Đội ngũ kỹ sư ETEK-soft đồng hành khảo sát và hỗ trợ kỹ thuật trong suốt vòng đời giải pháp.</span>
                </li>
              </ul>
            </div>

            {/* Paragraph 1: Overview */}
            <section id="section-overview" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                1. Tổng quan &amp; Bối cảnh phát triển
              </h2>
              <p className="text-sm sm:text-base leading-[1.8] text-slate-700 font-normal">
                {article.content[0] || article.excerpt}
              </p>
            </section>

            {/* Paragraph 2: Detailed Analysis */}
            <section id="section-analysis" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                2. Phân tích chi tiết &amp; Điểm đột phá
              </h2>
              <p className="text-sm sm:text-base leading-[1.8] text-slate-700 font-normal">
                {article.content[1] ||
                  "Công nghệ hiện đại mang lại sự đồng nhất dữ liệu và loại bỏ các thao tác thủ công dễ gây sai sót. Nhờ đó, ban lãnh đạo doanh nghiệp có thể nắm bắt bức tranh toàn cảnh về hiệu suất làm việc và kiểm soát chi phí tối ưu."}
              </p>
            </section>

            {/* Callout Notice Box */}
            <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
              <div className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md">
                  <Lightbulb className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-amber-950 uppercase font-mono tracking-wider">
                    LƯU Ý TỪ CHUYÊN GIA KỸ THUẬT ETEK
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
                    Trước khi triển khai cấp phép hoặc thay đổi mô hình chấm công - tính lương quy mô lớn, doanh nghiệp nên yêu cầu nhà cung cấp thực hiện khảo sát Pilot trên một nhóm phòng ban thí điểm để đánh giá mức độ tương thích với thói quen của người lao động.
                  </p>
                </div>
              </div>
            </div>

            {/* Paragraph 3: Implementation recommendations */}
            <section id="section-implementation" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                3. Khuyến nghị triển khai cho doanh nghiệp
              </h2>
              <p className="text-sm sm:text-base leading-[1.8] text-slate-700 font-normal">
                {article.content[2] ||
                  "Việc lựa chọn đơn vị triển khai có chứng chỉ đối tác hãng và dịch vụ hỗ trợ kỹ thuật tại chỗ (Onsite Support) là yếu tố quyết định giúp giảm thiểu thời gian gián đoạn công việc."}
              </p>
              {article.content[3] && (
                <p className="text-sm sm:text-base leading-[1.8] text-slate-700 font-normal">
                  {article.content[3]}
                </p>
              )}
            </section>

            {/* Section 4: Conclusion */}
            <section id="section-conclusion" className="scroll-mt-24 space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                4. Kết luận &amp; Hướng phát triển
              </h2>
              <p className="text-sm sm:text-base leading-[1.8] text-slate-700 font-normal">
                Số hóa và chuẩn hóa bản quyền không đơn thuần là tuân thủ pháp luật, mà chính là nền móng vững chắc giúp doanh nghiệp nâng cao năng lực cạnh tranh trong kỷ nguyên số. ETEK-soft cam kết đồng hành cùng quý doanh nghiệp trên từng bước đi của lộ trình chuyển đổi số.
              </p>
            </section>

            {/* Tags Row */}
            {article.tags && article.tags.length > 0 && (
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 font-mono uppercase mr-2 inline-flex items-center gap-1">
                  <Tag className="h-3.5 w-3.5" /> Từ khóa:
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Profile Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold flex items-center justify-center text-2xl shadow-md">
                {article.author ? article.author.name.charAt(0) : "E"}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {article.author ? article.author.name : "Ban Cố Vấn ETEK-soft"}
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold font-mono">
                      {article.author ? article.author.role : "Bộ Phận Nghiên Cứu Chuyển Đổi Số"}
                    </p>
                  </div>
                  <Link
                    href="/lien-he"
                    className="rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-100 transition-colors"
                  >
                    Kết nối chuyên gia
                  </Link>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Chuyên trách tư vấn giải pháp phần mềm bản quyền, kiến trúc máy chủ và tự động hóa quản trị nhân lực cho hơn 500 doanh nghiệp vừa và lớn trên toàn quốc.
                </p>
              </div>
            </div>

          </article>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Table of Contents */}
            <ArticleTableOfContents items={tocItems} />

            {/* Fast Consultation Widget */}
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-6 sm:p-7 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-ping" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-200">
                  TƯ VẤN TRỰC TIẾP
                </span>
              </div>
              <h3 className="text-lg font-bold leading-snug">
                Bạn cần tư vấn giải pháp này cho doanh nghiệp?
              </h3>
              <p className="mt-2 text-xs text-blue-100 leading-relaxed">
                Đội ngũ kỹ sư ETEK-soft sẵn sàng khảo sát hạ tầng và gửi báo giá chi tiết trong 15 phút.
              </p>
              <div className="mt-5 space-y-3">
                <Link
                  href="/lien-he"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-xs font-bold text-blue-700 shadow-md hover:bg-blue-50 transition-all"
                >
                  <span>Gửi Yêu Cầu Báo Giá</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="tel:19002026"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 transition-all"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-cyan-300" />
                  <span>Hotline: 1900 2026</span>
                </a>
              </div>
            </div>

            {/* Recent Articles Widget */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono pb-3 border-b border-slate-100 mb-4">
                BÀI VIẾT MỚI NHẤT
              </h4>
              <div className="space-y-4">
                {recentArticles.map((ra) => (
                  <Link
                    key={ra.id}
                    href={`/tin-tuc/${ra.slug}`}
                    className="group block"
                  >
                    <span className="text-[10px] font-bold text-blue-600 font-mono uppercase">
                      {ra.category}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mt-0.5">
                      {ra.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-1">{formatDate(ra.date)}</p>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>

        {/* Related Articles Section */}
        {related.length > 0 && (
          <section className="mt-16 sm:mt-24 pt-12 border-t border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="font-mono text-xs font-extrabold text-blue-600 uppercase tracking-widest">
                  CÙNG CHUYÊN MỤC {article.category}
                </span>
                <h3 className="mt-1 text-xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                  BÀI VIẾT LIÊN QUAN
                </h3>
              </div>
              <Link
                href="/tin-tuc"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Xem tất cả tin tức</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((a) => (
                <NewsCard key={a.id} article={a} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
