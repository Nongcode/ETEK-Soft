import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";
import { jobs } from "@/data/jobs";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return { title: job.title, description: job.description };
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <div className="pb-16">
      <Breadcrumb items={[{ label: "Tuyển dụng", href: "/tuyen-dung" }, { label: job.title }]} />

      <Container className="max-w-3xl py-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{job.department}</p>
        <h1 className="h1 mt-1 !text-2xl md:!text-[32px]">{job.title}</h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" aria-hidden /> {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="h-4 w-4" aria-hidden /> {job.type}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" aria-hidden /> Hạn nộp: {formatDate(job.deadline)}
          </span>
        </div>

        <p className="body-lg mt-6">{job.description}</p>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="h3">Yêu cầu công việc</h2>
            <ul className="mt-3 space-y-2">
              {job.requirements.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-navy/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h3">Quyền lợi</h2>
            <ul className="mt-3 space-y-2">
              {job.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-navy/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-[var(--radius-md)] border border-border bg-white p-6 text-center">
          <p className="text-sm text-muted">Quan tâm đến vị trí này? Gửi CV cho chúng tôi ngay hôm nay.</p>
          <Button href="mailto:tuyendung@etek-soft.vn" size="lg" className="mt-4">
            Ứng tuyển ngay
          </Button>
        </div>
      </Container>
    </div>
  );
}
