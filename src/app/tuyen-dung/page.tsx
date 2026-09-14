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
      <section className="border-b border-border bg-gradient-to-b from-[#ebf3fa]/70 to-white pt-5 pb-14 lg:pb-16">
        <Container className="max-w-3xl">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Tuyển dụng" }]} noContainer />
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">Tuyển dụng</p>
            <h1 className="h1">Gia nhập đội ngũ công nghệ</h1>
            <p className="body-lg mt-4">
              Cùng chúng tôi xây dựng hệ sinh thái phần mềm bản quyền tin cậy cho doanh nghiệp Việt Nam. Khám phá các vị trí đang tuyển dụng bên dưới.
            </p>
          </div>
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
