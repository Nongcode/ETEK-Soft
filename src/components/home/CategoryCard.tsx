import Link from "next/link";
import * as Icons from "lucide-react";
import { Category } from "@/types";

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[category.icon] || Icons.Layers;

  return (
    <Link
      href={`/san-pham?category=${category.slug}`}
      className="group flex flex-col rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card-hover"
    >
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="h3">{category.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{category.description}</p>
      <span className="mt-4 text-xs font-semibold text-muted">{category.productCount} sản phẩm</span>
    </Link>
  );
}
