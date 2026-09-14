import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge from "@/components/ui/Badge";
import { guides, guideCategories, getGuideBySlug } from "@/data/guides";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.excerpt };
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const categoryLabel = guideCategories.find((c) => c.slug === guide.category)?.label ?? guide.category;

  return (
    <div className="pb-16">
      <section className="border-b border-border bg-gradient-to-b from-[#ebf3fa]/60 to-white pt-5 pb-8">
        <Container className="max-w-3xl">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Hướng dẫn", href: "/huong-dan" }, { label: guide.title }]} noContainer />
          </div>
          <div className="mb-4 flex items-center gap-2">
            <Badge tone="primary">{categoryLabel}</Badge>
            <span className="text-xs text-muted">{formatDate(guide.date)}</span>
          </div>
          <h1 className="h1 !text-2xl md:!text-[32px]">{guide.title}</h1>
          <p className="body-lg mt-4">{guide.excerpt}</p>
        </Container>
      </section>

      <Container className="max-w-3xl py-8">
        <ol className="mt-8 space-y-4 border-t border-border pt-8">
          {guide.content.map((step, idx) => (
            <li key={idx} className="flex gap-3.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-light text-xs font-bold text-primary">
                {idx + 1}
              </span>
              <p className="pt-0.5 text-[15px] leading-relaxed text-navy/85">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  );
}
