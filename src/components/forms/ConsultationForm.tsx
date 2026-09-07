"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { categories } from "@/data/categories";

const needs = ["Mua license mới", "Gia hạn license", "Tư vấn giải pháp", "Hỗ trợ kỹ thuật", "Khác"];

export default function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-[var(--radius-md)] border border-success/20 bg-success/5 px-6 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-success" aria-hidden />
        <h3 className="h3 mt-4">Gửi yêu cầu thành công!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Cảm ơn bạn đã liên hệ. Đội ngũ tư vấn ETEK-soft sẽ phản hồi trong vòng 30 phút - 1 giờ làm việc.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[var(--radius-md)] border border-border bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Họ và tên" htmlFor="name" required>
          <input id="name" name="name" required type="text" placeholder="Nguyễn Văn A" className={inputClass} />
        </Field>
        <Field label="Số điện thoại" htmlFor="phone" required>
          <input id="phone" name="phone" required type="tel" placeholder="09xx xxx xxx" className={inputClass} />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <input id="email" name="email" required type="email" placeholder="ban@congty.vn" className={inputClass} />
        </Field>
        <Field label="Tên doanh nghiệp" htmlFor="company">
          <input id="company" name="company" type="text" placeholder="Công ty TNHH..." className={inputClass} />
        </Field>
        <Field label="Nhu cầu" htmlFor="need">
          <select id="need" name="need" className={inputClass} defaultValue="">
            <option value="" disabled>
              Chọn nhu cầu
            </option>
            {needs.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Sản phẩm quan tâm" htmlFor="product">
          <select id="product" name="product" className={inputClass} defaultValue="">
            <option value="" disabled>
              Chọn danh mục sản phẩm
            </option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tin nhắn" htmlFor="message" className="mt-5">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Mô tả ngắn về nhu cầu của bạn..."
          className="w-full resize-none rounded-[var(--radius-sm)] border border-border bg-white px-3.5 py-3 text-sm text-navy placeholder:text-muted-light focus:border-primary focus:outline-none"
        />
      </Field>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        Gửi yêu cầu tư vấn
      </Button>
    </form>
  );
}

const inputClass =
  "h-11 w-full rounded-[var(--radius-sm)] border border-border bg-white px-3.5 text-sm text-navy placeholder:text-muted-light focus:border-primary focus:outline-none";

function Field({
  label,
  htmlFor,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      {children}
    </div>
  );
}
