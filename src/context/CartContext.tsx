"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export interface CartLine {
  productId: string;
  quantity: number;
}

interface CartContextValue {
  items: CartLine[];
  isOpen: boolean;
  totalCount: number;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "etek-soft:cart";
const MAX_QTY = 99;

/**
 * Kho dữ liệu giỏ hàng ngoài React (module-scoped) đồng bộ với localStorage
 * qua useSyncExternalStore — cách chuẩn của React để đọc trạng thái từ
 * nguồn bên ngoài (browser storage) mà không gây lệch giữa server/client
 * và không cần setState bên trong effect.
 */
type Listener = () => void;
let cartSnapshot: CartLine[] = [];
const listeners = new Set<Listener>();

function readFromStorage(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeToStorage(items: CartLine[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // storage đầy hoặc bị chặn (private mode) — bỏ qua, giỏ hàng vẫn dùng được trong phiên hiện tại
  }
}

if (typeof window !== "undefined") {
  cartSnapshot = readFromStorage();
}

function setCart(items: CartLine[]) {
  cartSnapshot = items;
  writeToStorage(items);
  listeners.forEach((listener) => listener());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): CartLine[] {
  return cartSnapshot;
}

// Phải là một reference cố định — trả về mảng literal mới mỗi lần gọi khiến
// useSyncExternalStore nghĩ dữ liệu luôn thay đổi và lặp render vô hạn.
const EMPTY_CART: CartLine[] = [];
function getServerSnapshot(): CartLine[] {
  return EMPTY_CART;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((productId: string, quantity = 1) => {
    const current = getSnapshot();
    const existing = current.find((line) => line.productId === productId);
    const next = existing
      ? current.map((line) =>
          line.productId === productId ? { ...line, quantity: Math.min(MAX_QTY, line.quantity + quantity) } : line
        )
      : [...current, { productId, quantity: Math.min(MAX_QTY, quantity) }];
    setCart(next);
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCart(getSnapshot().filter((line) => line.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    const current = getSnapshot();
    if (quantity <= 0) {
      setCart(current.filter((line) => line.productId !== productId));
      return;
    }
    setCart(current.map((line) => (line.productId === productId ? { ...line, quantity: Math.min(MAX_QTY, quantity) } : line)));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totalCount = useMemo(() => items.reduce((sum, line) => sum + line.quantity, 0), [items]);

  const value = useMemo<CartContextValue>(
    () => ({ items, isOpen, totalCount, addItem, removeItem, updateQuantity, clearCart, openCart, closeCart }),
    [items, isOpen, totalCount, addItem, removeItem, updateQuantity, clearCart, openCart, closeCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart() phải được gọi bên trong <CartProvider>");
  return ctx;
}
