"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  X,
  Lock,
  Mail,
  User,
  Building,
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function AuthModal() {
  const {
    isAuthModalOpen,
    authModalView,
    closeAuthModal,
    openLoginModal,
    openRegisterModal,
    login,
    loginDemo,
    register,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState<"enterprise_vip" | "customer">("enterprise_vip");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  if (!isAuthModalOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    await login(email, password);
    setLoading(false);
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    await register({
      name: fullName,
      email,
      company: company || "Doanh nghiệp đối tác",
      phone,
      role: accountType,
    });
    setLoading(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md animate-fade-up"
      onClick={closeAuthModal}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_25px_70px_rgba(15,23,42,0.22)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow decoration */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-2xl" />

        {/* Close button */}
        <button
          type="button"
          onClick={closeAuthModal}
          aria-label="Đóng cửa sổ"
          className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header Branding */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/80 px-3 py-1 text-[11px] font-mono font-bold text-blue-700">
            <Sparkles className="h-3 w-3 text-blue-600" />
            ETEK SOFTS COMMERCE PORTAL
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {authModalView === "login" ? "Đăng Nhập Tài Khoản" : "Đăng Ký Doanh Nghiệp"}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
            {authModalView === "login"
              ? "Truy cập hệ thống quản lý license bản quyền và đơn hàng doanh nghiệp."
              : "Khởi tạo tài khoản để nhận báo giá chiết khấu và mua license chính hãng."}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-6 flex rounded-xl bg-slate-100 p-1 border border-slate-200/80">
          <button
            type="button"
            onClick={openLoginModal}
            className={`flex-1 rounded-lg py-2 text-xs sm:text-sm font-bold transition-all ${
              authModalView === "login"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Đăng Nhập
          </button>
          <button
            type="button"
            onClick={openRegisterModal}
            className={`flex-1 rounded-lg py-2 text-xs sm:text-sm font-bold transition-all ${
              authModalView === "register"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Tạo Tài Khoản Mới
          </button>
        </div>

        {/* Fast Demo Login Banner */}
        <div className="mt-4 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
            <div>
              <p className="text-xs font-bold text-blue-950">Thử nghiệm nhanh (Demo VIP):</p>
              <p className="text-[11px] text-blue-700">Đăng nhập tài khoản mẫu doanh nghiệp</p>
            </div>
          </div>
          <button
            type="button"
            onClick={loginDemo}
            className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-700 shadow-sm transition-all"
          >
            Vào ngay
          </button>
        </div>

        {/* LOGIN FORM */}
        {authModalView === "login" ? (
          <form onSubmit={handleLoginSubmit} className="mt-5 space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Doanh Nghiệp hoặc Số Điện Thoại
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Mail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700">
                  Mật Khẩu
                </label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Tính năng gửi mã khôi phục mật khẩu qua Email đã được kích hoạt.");
                  }}
                  className="text-[11px] font-semibold text-blue-600 hover:underline"
                >
                  Quên mật khẩu?
                </a>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Lock className="h-4 w-4" />
                </span>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <span>Ghi nhớ phiên đăng nhập này</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600 py-3 text-sm font-bold text-white shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              {loading ? (
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <span>Đăng Nhập Cổng ETEK</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          /* REGISTER FORM */
          <form onSubmit={handleRegisterSubmit} className="mt-5 space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phân Loại Tài Khoản
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setAccountType("enterprise_vip")}
                  className={`flex items-center justify-center gap-2 rounded-xl border p-2 text-xs font-bold transition-all ${
                    accountType === "enterprise_vip"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  <Building className="h-3.5 w-3.5" />
                  Doanh Nghiệp / Tổ Chức
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType("customer")}
                  className={`flex items-center justify-center gap-2 rounded-xl border p-2 text-xs font-bold transition-all ${
                    accountType === "customer"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  <User className="h-3.5 w-3.5" />
                  Khách Hàng Cá Nhân
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Họ và Tên Người Đại Diện
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <User className="h-4 w-4" />
                </span>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {accountType === "enterprise_vip" && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tên Công Ty / Đơn Vị (Xuất Hóa Đơn VAT)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Building className="h-4 w-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Công Ty TNHH / Cổ Phần..."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Công Tác
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="contact@domain.vn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Số Điện Thoại
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Phone className="h-4 w-4" />
                  </span>
                  <input
                    type="tel"
                    placeholder="09xx xxx xxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mật Khẩu Khởi Tạo
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Lock className="h-4 w-4" />
                </span>
                <input
                  type="password"
                  required
                  placeholder="Tối thiểu 6 ký tự"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600 py-3 text-sm font-bold text-white shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              {loading ? (
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Hoàn Tất Đăng Ký & Kích Hoạt</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Security guarantee */}
        <div className="mt-5 border-t border-slate-100 pt-3 text-center">
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-mono">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            Bảo mật 256-bit SSL/TLS • Dữ liệu mã hóa chuẩn doanh nghiệp
          </p>
        </div>
      </div>
    </div>
  );
}
