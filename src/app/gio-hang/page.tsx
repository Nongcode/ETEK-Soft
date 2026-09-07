import type { Metadata } from "next";
import CartPageContent from "@/components/cart/CartPageContent";

export const metadata: Metadata = {
  title: "Giỏ hàng",
  description: "Xem lại và quản lý các sản phẩm phần mềm bản quyền trong giỏ hàng của bạn.",
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return <CartPageContent />;
}
