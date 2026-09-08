import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import RevealEngine from "@/components/ui/RevealEngine";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Patrick+Hand&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  // 1. Gỡ lỗi hydration do tiện ích trình duyệt chèn thuộc tính (như Bitdefender bis_skin_checked)
  try {
    var origError = console.error;
    console.error = function() {
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          var str = typeof arg === 'string' ? arg : (arg.message || arg.stack || String(arg));
          if (str.indexOf('bis_skin_checked') !== -1 || (str.indexOf('A tree hydrated') !== -1 && str.indexOf('hidden') !== -1)) {
            return;
          }
        }
      }
      return origError.apply(this, arguments);
    };

    var origWarn = console.warn;
    console.warn = function() {
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          var str = typeof arg === 'string' ? arg : (arg.message || String(arg));
          if (str.indexOf('bis_skin_checked') !== -1) {
            return;
          }
        }
      }
      return origWarn.apply(this, arguments);
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
        } else if (m.type === 'childList') {
          for (var j = 0; j < m.addedNodes.length; j++) {
            var node = m.addedNodes[j];
            if (node.nodeType === 1) {
              if (node.hasAttribute && node.hasAttribute('bis_skin_checked')) {
                node.removeAttribute('bis_skin_checked');
              }
              var els = node.querySelectorAll ? node.querySelectorAll('[bis_skin_checked]') : [];
              for (var k = 0; k < els.length; k++) {
                els[k].removeAttribute('bis_skin_checked');
              }
            }
          }
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      childList: true,
      attributeFilter: ['bis_skin_checked']
    });

    window.addEventListener('error', function(e) {
      if (e && e.message && (e.message.indexOf('bis_skin_checked') !== -1 || (e.message.indexOf('hydration') !== -1 && e.message.indexOf('hidden') !== -1))) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    }, true);
  } catch (e) {}

  // 2. Gắn .reveal-ready trước lần vẽ đầu tiên
  try {
    document.documentElement.classList.add('reveal-ready');
    setTimeout(function () {
      if (!window.__etekRevealUp) document.documentElement.classList.remove('reveal-ready');
    }, 4000);
  } catch (e) {}
})();
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-text overflow-x-clip w-full max-w-full" suppressHydrationWarning>
        <AuthProvider>
          <CartProvider>
            <RevealEngine />
            <Header />
            <CartDrawer />
            <main className="flex-1 w-full max-w-full overflow-x-clip" suppressHydrationWarning>{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>

      </body>


    </html>
  );
}
