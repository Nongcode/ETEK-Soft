import { NavGroup, NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu", megaMenu: "about" },
  { label: "Sản phẩm", href: "/san-pham", megaMenu: "products" },
  { label: "Hướng dẫn", href: "/huong-dan", megaMenu: "guide" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

export const aboutMegaMenu: NavGroup[] = [
  {
    title: "Về ETEK SOFTS",
    items: [
      {
        label: "Về chúng tôi",
        href: "/gioi-thieu",
        description: "Tầm nhìn, sứ mệnh & năng lực công nghệ chuyển đổi số",
        icon: "Building2",
      },
      {
        label: "Tư vấn giải pháp",
        href: "/tu-van",
        description: "Khảo sát kiến trúc công nghệ & dự toán chi phí tối ưu",
        icon: "Sparkles",
      },
      {
        label: "Tuyển dụng nhân tài",
        href: "/tuyen-dung",
        description: "Môi trường năng động, cơ hội phát triển vượt bậc",
        icon: "Users",
      },
    ],
  },
  {
    title: "Giải pháp chuyển đổi số",
    items: [
      {
        label: "Giải pháp HRM",
        href: "/san-pham/giai-phap-quan-tri-nhan-su-toan-dien-hrm",
        description: "Quản trị nhân sự số: Chấm công FaceID, lương 3P & KPI",
        icon: "UserCheck",
      },
      {
        label: "Giải pháp ERP",
        href: "/san-pham/giai-phap-quan-tri-doanh-nghiep-tong-the-erp",
        description: "Hoạch định nguồn lực: Kế toán, bán hàng, kho vận & sản xuất",
        icon: "Layers",
      },
      {
        label: "Phần mềm bản quyền",
        href: "/san-pham",
        description: "100% License Microsoft, Windows, Server chính ngạch",
        icon: "ShieldCheck",
      },
    ],
  },
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
