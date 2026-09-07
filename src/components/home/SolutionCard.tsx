import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

export default function SolutionCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-[var(--radius-md)] border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-navy text-white">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="h3">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <Link href={href} className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark">
        Tìm hiểu thêm
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}
