"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { totalCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Giỏ hàng${totalCount > 0 ? `, ${totalCount} sản phẩm` : ""}`}
      className="relative flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-primary-light hover:text-primary"
    >
      <ShoppingCart className="h-[18px] w-[18px]" aria-hidden />
      {totalCount > 0 && (
        <span
          aria-hidden
          className="absolute right-0 top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-white"
        >
          {totalCount > 99 ? "99+" : totalCount}
        </span>
      )}
    </button>
  );
}
