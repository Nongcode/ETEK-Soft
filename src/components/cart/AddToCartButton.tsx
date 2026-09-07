"use client";

import { useState, type MouseEvent } from "react";
import { Check, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({
  product,
  quantity = 1,
  size = "md",
  className,
}: {
  product: Product;
  quantity?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    // ProductCard đặt nút này cạnh các <Link> khác trong cùng một card —
    // chặn nổi bọt sự kiện để không vô tình kích hoạt điều hướng của phần tử cha.
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, quantity);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1200);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Thêm ${product.name} vào giỏ hàng`}
      title="Thêm vào giỏ hàng"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl border transition-all duration-200",
        size === "sm" ? "h-9 w-9" : "h-11 w-11",
        justAdded
          ? "border-success bg-success/10 text-success"
          : "border-primary/25 bg-white text-primary hover:border-primary hover:bg-primary hover:text-white",
        className
      )}
    >
      {justAdded ? <Check className="h-4 w-4" aria-hidden /> : <ShoppingCart className="h-4 w-4" aria-hidden />}
    </button>
  );
}
