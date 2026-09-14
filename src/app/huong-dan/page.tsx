import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CategoryPills from "@/components/ui/CategoryPills";
import GuideCard from "@/components/guide/GuideCard";
import { guides, guideCategories } from "@/data/guides";

export const metadata: Metadata = {
  title: "Hướng dẫn sử dụng & kích hoạt phần mềm",
  description: "Hướng dẫn cài đặt, kích hoạt, mua hàng và câu hỏi thường gặp về license phần mềm bản quyền.",
};

export default async function GuideListPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const { category, q } = await searchParams;
  const query = q?.trim().toLowerCase();

  const list = guides.filter((g) => {
    if (category && g.category !== category) return false;
    if (query && !`${g.title} ${g.excerpt}`.toLowerCase().includes(query)) return false;
    return true;
  });

  return (
    <div className="pb-16">
      <section className="border-b border-border bg-gradient-to-b from-[#ebf3fa]/70 to-white pt-5 pb-10">
        <Container>
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Hướng dẫn" }]} noContainer />
          </div>
          <h1 className="h1 !text-2xl md:!text-[32px]">Hướng dẫn sử dụng & kích hoạt phần mềm</h1>
          <p className="mt-2 max-w-xl text-sm text-muted">Toàn bộ hướng dẫn cài đặt, kích hoạt và câu hỏi thường gặp về license bản quyền.</p>

          <form action="/huong-dan" className="relative mt-6 max-w-md">
            {category && <input type="hidden" name="category" value={category} />}
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Tìm kiếm bài hướng dẫn..."
              className="h-11 w-full rounded-xl border border-border bg-white px-4 text-sm text-navy placeholder:text-muted focus:border-slate-400 focus:outline-none focus:ring-0 outline-none"
            />
          </form>
        </Container>
      </section>

      <Container className="py-8">
        <div className="mt-5">
          <CategoryPills basePath="/huong-dan" options={guideCategories.map((c) => ({ value: c.slug, label: c.label }))} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {list.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>

        {list.length === 0 && (
          <div className="mt-8 rounded-[var(--radius-md)] border border-dashed border-border bg-white py-16 text-center">
            <p className="text-sm font-medium text-muted">Không tìm thấy bài hướng dẫn phù hợp.</p>
          </div>
        )}
      </Container>
    </div>
  );
}
