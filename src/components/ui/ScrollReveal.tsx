"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  /** Giữ lại cho tương thích với các lời gọi cũ; RevealEngine dùng một ngưỡng chung. */
  threshold?: number;
  once?: boolean;
}

const DIRECTION_MAP: Record<NonNullable<ScrollRevealProps["direction"]>, string> = {
  up: "true",
  down: "true",
  left: "left",
  right: "right",
  scale: "scale",
  none: "fade",
};

/**
 * Vỏ mỏng uỷ quyền cho RevealEngine (gắn một lần trong layout).
 *
 * Trước đây mỗi thẻ ScrollReveal tự dựng một IntersectionObserver và tự giữ
 * state riêng — trang chủ có tới hơn 15 cái, mỗi cái kéo theo một lần render
 * React lúc cuộn qua. Giờ tất cả dùng chung một observer duy nhất, và quan
 * trọng hơn là dùng chung một bộ thông số nên nhịp xuất hiện của mọi khối
 * trên site đều khớp nhau thay vì mỗi nơi một kiểu.
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  return (
    <div
      data-reveal={DIRECTION_MAP[direction]}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
      className={cn(className)}
    >
      {children}
    </div>
  );
}
