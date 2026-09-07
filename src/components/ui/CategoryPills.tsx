"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function CategoryPills({
  basePath,
  options,
  paramKey = "category",
}: {
  basePath: string;
  options: { value: string; label: string }[];
  paramKey?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get(paramKey) ?? "";

  function select(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) params.delete(paramKey);
    else params.set(paramKey, value);
    const qs = params.toString();
    router.push(`${basePath}${qs ? `?${qs}` : ""}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => select("")}
        className={cn(
          "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
          !active ? "border-primary bg-primary text-white" : "border-border bg-white text-navy hover:border-primary hover:text-primary"
        )}
      >
        Tất cả
      </button>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => select(opt.value)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            active === opt.value ? "border-primary bg-primary text-white" : "border-border bg-white text-navy hover:border-primary hover:text-primary"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
