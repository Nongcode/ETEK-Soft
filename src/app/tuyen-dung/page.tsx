import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import JobCard from "@/components/careers/JobCard";
import { jobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Tuyển dụng",
  description: "Cơ hội nghề nghiệp tại ETEK-soft — gia nhập đội ngũ công nghệ cung cấp phần mềm bản quyền cho doanh nghiệp.",
};

export default function CareersPage() {
  return (
    <div className="pb-16">
      <Breadcrumb items={[{ label: "Tuyển dụng" }]} />

      <section className="border-b border-border bg-white py-14 text-center lg:py-16">
        <Container className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">Tuyển dụng</p>
          <h1 className="h1">Gia nhập đội ngũ công nghệ</h1>
          <p className="body-lg mt-4">
            Cùng chúng tôi xây dựng hệ sinh thái phần mềm bản quyền tin cậy cho doanh nghiệp Việt Nam. Khám phá các vị trí đang tuyển dụng bên dưới.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </div>
  );
}
