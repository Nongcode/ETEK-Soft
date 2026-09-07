import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Tone = "primary" | "success" | "warning" | "danger" | "neutral";

const toneClasses: Record<Tone, string> = {
  primary: "bg-primary-light text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  danger: "bg-danger/10 text-danger",
  neutral: "bg-slate-100 text-navy",
};

export default function Badge({
  children,
  tone = "primary",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold leading-none",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function productBadgeTone(badge: string): Tone {
  switch (badge) {
    case "Bán chạy":
      return "warning";
    case "Giảm giá":
      return "danger";
    case "Mới":
      return "success";
    default:
      return "primary";
  }
}
