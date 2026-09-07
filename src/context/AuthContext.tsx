"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  role: "customer" | "enterprise_vip" | "partner";
  licenseCount: number;
  avatarText: string;
}

interface AuthContextType {
  user: UserProfile | null;
  cartCount: number;
  isAuthModalOpen: boolean;
  authModalView: "login" | "register";
  openLoginModal: () => void;
  openRegisterModal: () => void;
  closeAuthModal: () => void;
  login: (email: string, password?: string) => Promise<boolean>;
  loginDemo: () => void;
  register: (userData: Partial<UserProfile>) => Promise<boolean>;
  logout: () => void;
  addToCart: (qty?: number) => void;
}

const DEMO_USER: UserProfile = {
  id: "etek-corp-01",
  name: "Nguyễn Tuấn Dũng",
  email: "tuan.dung@etekvietnam.com",
  company: "Công Ty Cổ Phần Công Nghệ ETEK",
  phone: "0969 633 163",
  role: "enterprise_vip",
  licenseCount: 14,
  avatarText: "TD",
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [cartCount, setCartCount] = useState(1);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<"login" | "register">("login");

  // Load persisted session from localStorage if available
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("etek_auth_user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      const storedCart = localStorage.getItem("etek_cart_count");
      if (storedCart) {
        setCartCount(parseInt(storedCart, 10));
      }
    } catch (e) {
      console.warn("Could not read auth storage", e);
    }
  }, []);

  const openLoginModal = () => {
    setAuthModalView("login");
    setIsAuthModalOpen(true);
  };

  const openRegisterModal = () => {
    setAuthModalView("register");
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const login = async (email: string): Promise<boolean> => {
    const newUser: UserProfile = {
      id: "usr-" + Date.now(),
      name: email.split("@")[0] || "Quý Doanh Nghiệp",
      email: email,
      company: "Doanh Nghiệp Đối Tác ETEK",
      role: "enterprise_vip",
      licenseCount: 3,
      avatarText: email.slice(0, 2).toUpperCase(),
    };
    setUser(newUser);
    localStorage.setItem("etek_auth_user", JSON.stringify(newUser));
    setIsAuthModalOpen(false);
    return true;
  };

  const loginDemo = () => {
    setUser(DEMO_USER);
    localStorage.setItem("etek_auth_user", JSON.stringify(DEMO_USER));
    setIsAuthModalOpen(false);
  };

  const register = async (userData: Partial<UserProfile>): Promise<boolean> => {
    const newUser: UserProfile = {
      id: "usr-" + Date.now(),
      name: userData.name || "Khách Hàng Mới",
      email: userData.email || "client@company.vn",
      company: userData.company || "Doanh Nghiệp Đăng Ký",
      phone: userData.phone || "",
      role: userData.role || "customer",
      licenseCount: 0,
      avatarText: (userData.name || "KH").slice(0, 2).toUpperCase(),
    };
    setUser(newUser);
    localStorage.setItem("etek_auth_user", JSON.stringify(newUser));
    setIsAuthModalOpen(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("etek_auth_user");
  };

  const addToCart = (qty = 1) => {
    setCartCount((prev) => {
      const next = prev + qty;
      localStorage.setItem("etek_cart_count", next.toString());
      return next;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        cartCount,
        isAuthModalOpen,
        authModalView,
        openLoginModal,
        openRegisterModal,
        closeAuthModal,
        login,
        loginDemo,
        register,
        logout,
        addToCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
