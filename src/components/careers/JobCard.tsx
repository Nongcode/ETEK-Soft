import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Job } from "@/types";
import { formatDate } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="flex flex-col rounded-[var(--radius-md)] border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{job.department}</p>
        <h3 className="h3 mt-1">{job.title}</h3>
        <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5" aria-hidden />
            {job.type}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden />
            Hạn nộp: {formatDate(job.deadline)}
          </span>
        </div>
      </div>
      <Button href={`/tuyen-dung/${job.slug}`} variant="outline" className="mt-4 shrink-0 sm:mt-0">
        Xem chi tiết
      </Button>
    </div>
  );
}
