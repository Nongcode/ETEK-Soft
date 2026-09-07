"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
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
        <h3 className="h3 mt-4">Cảm ơn bạn đã liên hệ!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">Chúng tôi sẽ phản hồi tin nhắn của bạn trong thời gian sớm nhất.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[var(--radius-md)] border border-border bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-navy">
            Họ và tên <span className="text-danger">*</span>
          </label>
          <input id="c-name" name="name" required type="text" placeholder="Nguyễn Văn A" className={inputClass} />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-navy">
            Email <span className="text-danger">*</span>
          </label>
          <input id="c-email" name="email" required type="email" placeholder="ban@congty.vn" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-navy">
            Số điện thoại
          </label>
          <input id="c-phone" name="phone" type="tel" placeholder="09xx xxx xxx" className={inputClass} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-navy">
          Nội dung <span className="text-danger">*</span>
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={5}
          placeholder="Bạn cần hỗ trợ điều gì?"
          className="w-full resize-none rounded-xl border border-border bg-white px-3.5 py-3 text-sm text-navy placeholder:text-muted-light focus:border-slate-400 focus:outline-none focus:ring-0 outline-none"
        />
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        Gửi liên hệ
      </Button>
    </form>
  );
}

const inputClass =
  "h-11 w-full rounded-xl border border-border bg-white px-3.5 text-sm text-navy placeholder:text-muted-light focus:border-slate-400 focus:outline-none focus:ring-0 outline-none";
