import * as Icons from "lucide-react";
import Link from "next/link";
import { NavGroup } from "@/types";
import { cn } from "@/lib/utils";

function DynamicIcon({ name, className }: { name?: string; className?: string }) {
  const Icon = (name && (Icons as unknown as Record<string, Icons.LucideIcon>)[name]) || Icons.Layers;
  return <Icon className={className} aria-hidden />;
}

export default function MegaMenu({
  groups,
  id,
  align = "center",
}: {
  groups: NavGroup[];
  id: string;
  align?: "left" | "center" | "right";
}) {
  const isTwoCols = groups.length === 2;

  return (
    <div
      id={id}
      role="menu"
      className={cn(
        "absolute top-full z-40 pt-3",
        isTwoCols ? "w-[min(620px,92vw)]" : "w-[min(780px,92vw)]",
        align === "left" && "left-0 translate-x-0",
        align === "center" && "left-1/2 -translate-x-1/2",
        align === "right" && "right-0 translate-x-0"
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-2 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)]",
          isTwoCols ? "sm:grid-cols-2" : "sm:grid-cols-3"
        )}
      >
        {groups.map((group) => (
          <div key={group.title} className="min-w-0">
            <p className="mb-3 px-2 text-[11px] font-bold uppercase tracking-[0.1em] text-muted">{group.title}</p>
            <ul role="none">
              {group.items.map((item) => (
                <li key={item.label} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    className="group flex items-start gap-3 rounded-[var(--radius-sm)] px-2 py-2.5 transition-colors hover:bg-primary-light"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <DynamicIcon name={item.icon} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-navy">{item.label}</span>
                      {item.description && (
                        <span className="mt-0.5 block text-xs leading-snug text-muted line-clamp-2">{item.description}</span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
