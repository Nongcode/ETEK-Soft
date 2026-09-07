"use client";

import { useState } from "react";
import { X, Mail, Lock, User, Building, ArrowRight, CheckCircle2, Gift, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "login" | "register";
  onLoginSuccess?: (user: { name: string; email: string; type: "business" | "individual" }) => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  defaultTab = "login",
  onLoginSuccess,
}: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register">(defaultTab);
  const [accountType, setAccountType] = useState<"business" | "individual">("business");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    taxId: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const user = {
        name: formData.name || (accountType === "business" ? formData.company || "Tập đoàn ETEK Partner" : "Quý khách hàng"),
        email: formData.email || "partner@eteksofts.com",
        type: accountType,
      };

      setSuccessMessage(
        activeTab === "login"
          ? "Đăng nhập thành công! Chào mừng bạn trở lại."
          : "Đăng ký thành công! Đã kích hoạt Voucher 500K vào tài khoản."
      );

      if (onLoginSuccess) {
        onLoginSuccess(user);
      }

      setTimeout(() => {
        setSuccessMessage(null);
        onClose();
      }, 1400);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100 transition-all z-10">
        {/* Header Ribbon */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-6 pt-6 pb-5 text-white">
          <button
            onClick={onClose}
            aria-label="Đóng cửa sổ"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-1.5 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20">
              <Gift className="h-4 w-4 text-cyan-200" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-200">
              Cổng Thương Mại Điện Tử ETEK-SOFTS
            </span>
          </div>

          <h3 className="mt-2 text-xl font-bold">
            {activeTab === "login" ? "Đăng Nhập Tài Khoản" : "Đăng Ký Khách Hàng / Doanh Nghiệp"}
          </h3>
          <p className="mt-1 text-xs text-blue-100">
            {activeTab === "login"
              ? "Quản lý bản quyền, lịch sử giao dịch và kho voucher sự kiện"
              : "Tặng ngay Voucher 500.000đ khi tạo tài khoản Doanh Nghiệp hôm nay"}
          </p>

          {/* Switch Tab buttons */}
          <div className="mt-4 flex rounded-xl bg-black/20 p-1 backdrop-blur-md">
            <button
              type="button"
              onClick={() => {
                setActiveTab("login");
                setSuccessMessage(null);
              }}
              className={cn(
                "flex-1 rounded-lg py-2 text-xs font-bold transition-all",
                activeTab === "login"
                  ? "bg-white text-blue-800 shadow-sm"
                  : "text-white/80 hover:text-white"
              )}
            >
              Đăng Nhập
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("register");
                setSuccessMessage(null);
              }}
              className={cn(
                "flex-1 rounded-lg py-2 text-xs font-bold transition-all",
                activeTab === "register"
                  ? "bg-white text-blue-800 shadow-sm"
                  : "text-white/80 hover:text-white"
              )}
            >
              Đăng Ký Mới (+500K)
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {successMessage ? (
            <div className="my-8 flex flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-10 w-10 animate-bounce" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-slate-800">Thành Công!</h4>
              <p className="mt-1 text-sm text-slate-600">{successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === "register" && (
                <>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setAccountType("business")}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all",
                        accountType === "business"
                          ? "border-blue-500 bg-blue-50/70 text-blue-700 ring-2 ring-blue-500/20"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      <Building className="h-4 w-4" />
                      Doanh Nghiệp (Xuất VAT)
                    </button>
                    <button
                      type="button"
                      onClick={() => setAccountType("individual")}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all",
                        accountType === "individual"
                          ? "border-blue-500 bg-blue-50/70 text-blue-700 ring-2 ring-blue-500/20"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      <User className="h-4 w-4" />
                      Khách Hàng Cá Nhân
                    </button>
                  </div>

                  {accountType === "business" ? (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Tên Doanh Nghiệp *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="CTY TNHH Công Nghệ..."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Mã Số Thuế (MST) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="0108999888"
                          value={formData.taxId}
                          onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  ) : null}

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Họ và Tên Người Đại Diện *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Email Công Ty / Đăng Nhập *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="contact@doanhnghiep.vn"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-medium text-slate-700">Mật khẩu *</label>
                  {activeTab === "login" && (
                    <a href="#forgot" className="text-[11px] font-medium text-blue-600 hover:underline">
                      Quên mật khẩu?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <span>{activeTab === "login" ? "Đăng Nhập Ngay" : "Đăng Ký & Nhận Voucher 500K"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <div className="relative my-3 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <span className="relative bg-white px-2 text-[11px] text-slate-400">hoặc đăng nhập nhanh</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    email: "director@etekvietnam.com",
                    name: "Giám Đốc CNTT (Demo)",
                  });
                  setTimeout(() => {
                    if (onLoginSuccess) {
                      onLoginSuccess({
                        name: "Giám Đốc CNTT (Demo)",
                        email: "director@etekvietnam.com",
                        type: "business",
                      });
                    }
                    onClose();
                  }, 300);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 21 21">
                  <path fill="#f25022" d="M1 1h9v9H1z"/>
                  <path fill="#00a4ef" d="M1 11h9v9H1z"/>
                  <path fill="#7fba00" d="M11 1h9v9h-9z"/>
                  <path fill="#ffb900" d="M11 11h9v9h-9z"/>
                </svg>
                <span>Đăng nhập với Microsoft 365 Work Account</span>
              </button>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500">
                <Shield className="h-3.5 w-3.5 text-blue-600" />
                <span>Bảo mật dữ liệu chuẩn mã hóa SSL 256-bit</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
