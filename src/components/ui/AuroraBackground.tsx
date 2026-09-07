"use client";

import { useEffect, useRef, type CSSProperties } from "react";

interface AuroraBackgroundProps {
  /** Cường độ màu: 0.6 = rất nhạt, 1 = mặc định, 1.4 = đậm */
  intensity?: number;
  /** Quầng màu bám con trỏ + parallax (tự tắt trên thiết bị cảm ứng) */
  interactive?: boolean;
  /** Số bong bóng nổi lên trong nền; 0 để tắt hẳn */
  bubbles?: number;
  className?: string;
}

interface BubbleSpec {
  size: number; // px
  left: number; // %
  top: number; // %
  driftX: number; // px
  duration: number; // s
  delay: number; // s
  peak: number; // opacity đỉnh
  variant: "solid" | "hollow" | "cyan";
}

/**
 * Toạ độ bong bóng cố định (không dùng Math.random) để HTML dựng ở server
 * và ở client khớp nhau tuyệt đối — tránh lỗi hydration mismatch.
 * Kích thước và chu kỳ cố tình lệch nhau để không có hai bong bóng nào đi cùng nhịp.
 */
const BUBBLES: BubbleSpec[] = [
  { size: 88, left: 6, top: 62, driftX: 26, duration: 24, delay: 0, peak: 0.5, variant: "solid" },
  { size: 34, left: 14, top: 28, driftX: -18, duration: 19, delay: 2.4, peak: 0.72, variant: "cyan" },
  { size: 132, left: 3, top: 18, driftX: 34, duration: 31, delay: 1.1, peak: 0.32, variant: "hollow" },
  { size: 22, left: 22, top: 74, driftX: 14, duration: 16, delay: 5.2, peak: 0.85, variant: "solid" },
  { size: 58, left: 33, top: 12, driftX: -24, duration: 27, delay: 3.6, peak: 0.42, variant: "cyan" },
  { size: 16, left: 44, top: 84, driftX: 20, duration: 14, delay: 7.1, peak: 0.9, variant: "solid" },
  { size: 100, left: 52, top: 66, driftX: -30, duration: 29, delay: 0.7, peak: 0.28, variant: "hollow" },
  { size: 28, left: 63, top: 22, driftX: 16, duration: 18, delay: 4.3, peak: 0.78, variant: "cyan" },
  { size: 72, left: 71, top: 58, driftX: -22, duration: 25, delay: 2.0, peak: 0.46, variant: "solid" },
  { size: 19, left: 78, top: 36, driftX: 12, duration: 15, delay: 6.4, peak: 0.88, variant: "cyan" },
  { size: 116, left: 84, top: 14, driftX: -28, duration: 33, delay: 1.8, peak: 0.3, variant: "hollow" },
  { size: 44, left: 90, top: 70, driftX: 22, duration: 21, delay: 3.1, peak: 0.6, variant: "solid" },
  { size: 26, left: 95, top: 44, driftX: -15, duration: 17, delay: 5.9, peak: 0.8, variant: "cyan" },
  { size: 64, left: 40, top: 40, driftX: 28, duration: 28, delay: 8.2, peak: 0.38, variant: "solid" },
  { size: 20, left: 12, top: 50, driftX: -13, duration: 13, delay: 9.5, peak: 0.86, variant: "cyan" },
  { size: 52, left: 58, top: 88, driftX: 24, duration: 23, delay: 6.8, peak: 0.5, variant: "solid" },
];

/** Độ trễ bám con trỏ của ba quầng màu — càng nhỏ càng lết chậm phía sau. */
const COMET_LERP = [0.11, 0.065, 0.038];

/**
 * Nền gradient động "aurora" cho các section sáng.
 *
 * Toàn bộ chuyển động chạy bằng `transform` / `translate` trên các lớp
 * radial-gradient — không `filter`, không `background-position`, không blend mode.
 * Đó đều là những thứ buộc trình duyệt vẽ lại cả lớp mỗi khung hình; ở đây
 * mọi thứ chỉ cần compositor ghép lại nên giữ được 60fps.
 */
export default function AuroraBackground({
  intensity = 1,
  interactive = true,
  bubbles = 16,
  className = "",
}: AuroraBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!interactive || !root) return;
    // Chỉ chạy với chuột thật, và tôn trọng lựa chọn giảm chuyển động của người dùng.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Vị trí con trỏ trong khối, tính bằng px
    let targetX = 0;
    let targetY = 0;
    // Ba quầng màu đuổi theo cùng một mục tiêu với ba tốc độ khác nhau
    const cometX = [0, 0, 0];
    const cometY = [0, 0, 0];
    // Toạ độ chuẩn hoá -1 → 1 cho parallax của các tấm màu và bong bóng
    let panX = 0;
    let panY = 0;
    let started = false;
    let frame: number | null = null;

    function tick() {
      const rect = root!.getBoundingClientRect();
      let settled = true;

      for (let i = 0; i < 3; i++) {
        cometX[i] += (targetX - cometX[i]) * COMET_LERP[i];
        cometY[i] += (targetY - cometY[i]) * COMET_LERP[i];
        root!.style.setProperty(`--c${i + 1}x`, `${cometX[i].toFixed(1)}px`);
        root!.style.setProperty(`--c${i + 1}y`, `${cometY[i].toFixed(1)}px`);
        if (Math.abs(targetX - cometX[i]) > 0.4 || Math.abs(targetY - cometY[i]) > 0.4) settled = false;
      }

      // Parallax của các tấm màu bám chậm hơn nữa cho ra chiều sâu
      const wantX = rect.width ? (targetX / rect.width - 0.5) * 2 : 0;
      const wantY = rect.height ? (targetY / rect.height - 0.5) * 2 : 0;
      panX += (wantX - panX) * 0.045;
      panY += (wantY - panY) * 0.045;
      root!.style.setProperty("--aurora-px", panX.toFixed(4));
      root!.style.setProperty("--aurora-py", panY.toFixed(4));
      // Chuyển màu background và quả bóng theo độ dịch chuột
      const dynamicHue = (panX * 38 + panY * 24).toFixed(2);
      root!.style.setProperty("--aurora-hue", `${dynamicHue}deg`);
      if (Math.abs(wantX - panX) > 0.0008 || Math.abs(wantY - panY) > 0.0008) settled = false;

      // Đứng yên thì dừng vòng lặp, không đốt CPU vô ích
      if (settled) {
        frame = null;
        return;
      }
      frame = requestAnimationFrame(tick);
    }

    function onPointerMove(event: PointerEvent) {
      const rect = root!.getBoundingClientRect();
      targetX = event.clientX - rect.left;
      targetY = event.clientY - rect.top;

      if (!started) {
        // Lần đầu: đặt thẳng ba quầng vào vị trí con trỏ rồi mới cho hiện,
        // nếu không chúng sẽ bay một đường dài từ góc trái màn hình sang.
        started = true;
        for (let i = 0; i < 3; i++) {
          cometX[i] = targetX;
          cometY[i] = targetY;
        }
        root!.classList.add("is-tracking");
      }

      if (frame === null) frame = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [interactive]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={`aurora ${className}`}
      style={{ "--aurora-intensity": intensity } as CSSProperties}
    >
      <div className="aurora__layer aurora__layer--a" />
      <div className="aurora__layer aurora__layer--b" />

      {interactive && (
        <>
          <div className="aurora__comet aurora__comet--3" />
          <div className="aurora__comet aurora__comet--2" />
          <div className="aurora__comet aurora__comet--1" />
        </>
      )}

      <div className="aurora__sweep" />
      <div className="aurora__beam" />

      {bubbles > 0 && (
        <div
          className="aurora__bubbles"
          style={{
            filter: "hue-rotate(var(--aurora-hue, 0deg))",
            transition: "filter 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {BUBBLES.slice(0, bubbles).map((b, i) => (
            <span
              key={i}
              className={`bubble bubble--${b.variant === "hollow" ? "hollow" : "solid"}${
                b.variant === "cyan" ? " bubble--cyan" : ""
              }`}
              style={
                {
                  width: `${b.size}px`,
                  height: `${b.size}px`,
                  left: `${b.left}%`,
                  top: `${b.top}%`,
                  "--dx": `${b.driftX}px`,
                  "--dur": `${b.duration}s`,
                  "--delay": `${b.delay}s`,
                  "--peak": b.peak,
                  // Quả càng to coi như càng ở gần -> dạt theo con trỏ càng nhiều
                  "--depth": `${(6 + b.size * 0.22).toFixed(1)}px`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      )}

      <div className="aurora__veil" />
    </div>
  );
}
