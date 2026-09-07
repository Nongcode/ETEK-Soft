import { LucideIcon } from "lucide-react";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 rounded-[var(--radius-md)] border border-border bg-white p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-primary-light text-primary">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div>
        <h3 className="text-[15px] font-semibold text-navy">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}
