import * as Icons from "lucide-react";
import Link from "next/link";
import { NavGroup } from "@/types";
import { cn } from "@/lib/utils";

function DynamicIcon({ name, className }: { name?: string; className?: string }) {
  const Icon = (name && (Icons as unknown as Record<string, Icons.LucideIcon>)[name]) || Icons.Layers;
  return <Icon className={className} aria-hidden />;
}

export default function MegaMenu({ groups, id }: { groups: NavGroup[]; id: string }) {
  return (
    <div
      id={id}
      role="menu"
      className={cn(
        "absolute left-1/2 top-full z-40 w-[min(760px,90vw)] -translate-x-1/2 pt-3"
      )}
    >
      <div className="grid grid-cols-1 gap-1 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-card-hover sm:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title} className={cn(groups.length < 3 && "min-w-[200px]")}>
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
                    <span>
                      <span className="block text-sm font-semibold text-navy">{item.label}</span>
                      {item.description && (
                        <span className="mt-0.5 block text-xs leading-snug text-muted">{item.description}</span>
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
