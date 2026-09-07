import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8", className)} {...props} />;
}
