"use client";

import { useEffect } from "react";

/**
 * Bộ máy "hiện dần khi cuộn" dùng chung cho toàn trang.
 *
 * Cách dùng: gắn thuộc tính `data-reveal` lên bất kỳ phần tử nào
 *   <div data-reveal>            → trượt lên + mờ dần
 *   <div data-reveal="left">     → trượt từ trái
 *   <div data-reveal="scale">    → phóng nhẹ
 *   <div data-reveal="blur">     → nét dần từ mờ
 * Đặt `data-reveal-group` lên phần tử cha để các con hiện lần lượt (so le 90ms).
 *
 * Vì sao làm kiểu này thay vì bọc mỗi khối trong một component:
 *   - Một IntersectionObserver duy nhất cho cả trang, thay vì hàng chục observer.
 *   - Không thêm thẻ <div> bọc ngoài nên không phá vỡ layout grid/flex sẵn có.
 *   - Trạng thái ẩn nằm trong CSS dưới `.reveal-ready`, mà class đó do script nội tuyến
 *     trong <head> gắn trước lần vẽ đầu tiên -> không nháy nội dung, và nếu JS hỏng
 *     thì không có gì bị ẩn cả.
 */
export default function RevealEngine() {
  useEffect(() => {
    const root = document.documentElement;

    // Người dùng chọn giảm chuyển động -> hiện hết ngay, gỡ luôn lớp ẩn.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.remove("reveal-ready");
      return;
    }

    root.classList.add("reveal-ready");
    // Báo cho lưới an toàn trong <head> biết engine đã chạy, khỏi gỡ lớp ẩn.
    (window as unknown as { __etekRevealUp?: boolean }).__etekRevealUp = true;

    const seen = new WeakSet<Element>();
    const revealed = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          revealed.add(entry.target);
          observer.unobserve(entry.target); // hiện rồi thì thôi, không ẩn lại
        }
      },
      {
        // Kích hoạt khi khối đã nhô lên trong viewport và cuộn vào ít nhất 50px
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    function register(el: Element) {
      if (seen.has(el)) return;
      seen.add(el);

      // So le các phần tử con trong cùng một nhóm để chúng nối đuôi nhau xuất hiện.
      const group = el.parentElement?.closest("[data-reveal-group]");
      if (group) {
        const siblings = Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
          (node) => node.parentElement?.closest("[data-reveal-group]") === group
        );
        const index = siblings.indexOf(el as HTMLElement);
        if (index > 0) {
          const step = Number(group.getAttribute("data-reveal-step")) || 110;
          // Chặn ở 6 bậc: quá số này thì thẻ cuối chờ lâu tới mức trông như bị treo.
          (el as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(index, 6) * step}ms`);
        }
      }

      observer.observe(el);
    }

    function scan() {
      document.querySelectorAll("[data-reveal]").forEach(register);
    }

    scan();

    // Nội dung dựng sau (đổi tab, danh sách tải thêm...) cũng được bắt tự động.
    // Giữ lại class `is-revealed` nếu component bị React re-render ghi đè className.
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "attributes" && record.attributeName === "class") {
          const target = record.target as Element;
          if (revealed.has(target) && !target.classList.contains("is-revealed")) {
            target.classList.add("is-revealed");
          }
        }
        for (const node of record.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.hasAttribute("data-reveal")) register(node);
          node.querySelectorAll?.("[data-reveal]").forEach(register);
        }
      }
    });
    mutations.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
