"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  isSpecialTime?: boolean; // For 24/7: 0/0 -> 24/7
  className?: string;
}

export default function AnimatedCounter({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2000,
  isSpecialTime = false,
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(isSpecialTime ? "0/0" : "0");
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          startCount();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals, duration, isSpecialTime]);

  const startCount = () => {
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      if (isSpecialTime) {
        const val1 = Math.round(24 * ease);
        const val2 = Math.round(7 * ease);
        setDisplayValue(`${val1}/${val2}`);
      } else {
        const currentNum = target * ease;
        if (decimals > 0) {
          setDisplayValue(currentNum.toFixed(decimals));
        } else {
          setDisplayValue(Math.round(currentNum).toString());
        }
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
