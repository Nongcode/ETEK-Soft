import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://etek-soft.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ETEK-soft | Phần mềm bản quyền chính hãng cho doanh nghiệp",
    template: "%s | ETEK-soft",
  },
  description:
    "ETEK-soft cung cấp phần mềm doanh nghiệp, license bản quyền chính hãng Microsoft, Windows, Office, Antivirus và giải pháp tư vấn triển khai phần mềm cho doanh nghiệp.",
  keywords: ["phần mềm bản quyền", "license phần mềm", "Microsoft 365", "Windows bản quyền", "phần mềm doanh nghiệp"],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "ETEK-soft",
    title: "ETEK-soft | Phần mềm bản quyền chính hãng cho doanh nghiệp",
    description:
      "Cung cấp phần mềm chính hãng, license rõ ràng và giải pháp công nghệ phù hợp cho doanh nghiệp.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var origError = console.error;
    console.error = function() {
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          var str = typeof arg === 'string' ? arg : (arg.message || String(arg));
          if (str.indexOf('bis_skin_checked') !== -1) {
            return;
          }
        }
      }
      return origError.apply(this, arguments);
    };

    var origSetAttribute = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(name, val) {
      if (name === 'bis_skin_checked') return;
      return origSetAttribute.apply(this, arguments);
    };

    var observer = new MutationObserver(function(mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        if (m.type === 'attributes' && m.attributeName === 'bis_skin_checked') {
          m.target.removeAttribute('bis_skin_checked');
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      attributeFilter: ['bis_skin_checked']
    });
  } catch (e) {}
})();
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-text" suppressHydrationWarning>
        <CartProvider>
          <Header />
          <main className="flex-1" suppressHydrationWarning>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
