import { NavGroup, NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Tư vấn", href: "/tu-van" },
  { label: "Sản phẩm", href: "/san-pham", megaMenu: "products" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Hướng dẫn", href: "/huong-dan", megaMenu: "guide" },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Liên hệ", href: "/lien-he" },
];

export const productMegaMenu: NavGroup[] = [
  {
    title: "Hệ sinh thái Microsoft",
    items: [
      {
        label: "Microsoft 365",
        href: "/san-pham?category=microsoft-365",
        description: "Giải pháp làm việc và cộng tác dành cho doanh nghiệp",
        icon: "CloudCog",
      },
      {
        label: "Windows",
        href: "/san-pham?category=windows",
        description: "Hệ điều hành bản quyền cho doanh nghiệp",
        icon: "MonitorCheck",
      },
      {
        label: "Office",
        href: "/san-pham?category=office",
        description: "Bộ ứng dụng văn phòng chính hãng",
        icon: "FileText",
      },
    ],
  },
  {
    title: "Hạ tầng & máy chủ",
    items: [
      {
        label: "Windows Server",
        href: "/san-pham?category=windows-server",
        description: "Giải pháp máy chủ và quản trị hệ thống",
        icon: "Server",
      },
      {
        label: "SQL Server",
        href: "/san-pham?category=sql-server",
        description: "Hệ quản trị cơ sở dữ liệu cho doanh nghiệp",
        icon: "Database",
      },
      {
        label: "Phần mềm doanh nghiệp",
        href: "/san-pham?category=phan-mem-doanh-nghiep",
        description: "Thiết kế, kỹ thuật và quản trị dự án",
        icon: "Building2",
      },
    ],
  },
  {
    title: "Bảo mật",
    items: [
      {
        label: "Antivirus",
        href: "/san-pham?category=antivirus",
        description: "Giải pháp bảo mật và diệt virus chuyên nghiệp",
        icon: "ShieldCheck",
      },
      {
        label: "Microsoft",
        href: "/san-pham?category=microsoft",
        description: "Toàn bộ sản phẩm bản quyền của Microsoft",
        icon: "AppWindow",
      },
      {
        label: "Xem tất cả sản phẩm",
        href: "/san-pham",
        description: "Duyệt toàn bộ danh mục phần mềm bản quyền",
        icon: "ArrowRight",
      },
    ],
  },
];

export const guideMegaMenu: NavGroup[] = [
  {
    title: "Hướng dẫn",
    items: [
      { label: "Hướng dẫn sử dụng", href: "/huong-dan?category=su-dung", icon: "BookOpen" },
      { label: "Hướng dẫn kích hoạt", href: "/huong-dan?category=kich-hoat", icon: "KeyRound" },
      { label: "Hướng dẫn cài đặt", href: "/huong-dan?category=cai-dat", icon: "Download" },
    ],
  },
  {
    title: "Hỗ trợ",
    items: [
      { label: "Hướng dẫn mua hàng", href: "/huong-dan?category=mua-hang", icon: "ShoppingCart" },
      { label: "Câu hỏi thường gặp", href: "/huong-dan?category=faq", icon: "HelpCircle" },
      { label: "Chính sách bản quyền", href: "/huong-dan?category=chinh-sach", icon: "FileCheck2" },
    ],
  },
];
