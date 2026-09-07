"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Product } from "@/types";
import { cn } from "@/lib/utils";

const tabs = ["Tổng quan", "Tính năng", "Yêu cầu hệ thống", "Thông tin license", "Hướng dẫn kích hoạt", "FAQ"] as const;

export default function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<(typeof tabs)[number]>("Tổng quan");

  return (
    <div className="mt-14">
      <div role="tablist" aria-label="Thông tin sản phẩm" className="flex gap-1 overflow-x-auto border-b border-border no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={cn(
              "shrink-0 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition-colors",
              active === tab ? "border-primary text-primary" : "border-transparent text-muted hover:text-navy"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="py-8">
        {active === "Tổng quan" && <p className="body-lg max-w-3xl">{product.description}</p>}

        {active === "Tính năng" && (
          <ul className="grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-navy/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        )}

        {active === "Yêu cầu hệ thống" && (
          <ul className="max-w-3xl space-y-2.5">
            {product.systemRequirements.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-sm text-navy/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
        )}

        {active === "Thông tin license" && (
          <dl className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {[
              ["Loại license", product.licenseType],
              ["Thời hạn", product.duration],
              ["Số lượng", product.seats],
              ["Đối tượng phù hợp", product.audience.join(", ")],
              ["Hệ điều hành hỗ trợ", product.os?.join(", ") ?? "Không giới hạn"],
              ["Thương hiệu", product.brand],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-border pb-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</dt>
                <dd className="mt-1 text-sm font-medium text-navy">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {active === "Hướng dẫn kích hoạt" && (
          <ol className="max-w-2xl space-y-4">
            {[
              "Kiểm tra email đã đăng ký để nhận mã bản quyền sau khi thanh toán thành công.",
              "Mở phần mềm và chọn mục kích hoạt / nhập mã bản quyền.",
              "Nhập chính xác mã bản quyền 25 ký tự (hoặc theo hướng dẫn riêng của từng sản phẩm).",
              "Chờ hệ thống xác thực với máy chủ nhà sản xuất, quá trình kích hoạt sẽ tự động hoàn tất.",
            ].map((step, idx) => (
              <li key={step} className="flex gap-3 text-sm text-navy/85">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-light text-xs font-bold text-primary">
                  {idx + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        )}

        {active === "FAQ" && (
          <div className="max-w-2xl divide-y divide-border">
            {product.faqs.map((faq) => (
              <div key={faq.question} className="py-4 first:pt-0">
                <p className="text-sm font-semibold text-navy">{faq.question}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
