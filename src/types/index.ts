// Kiểu dữ liệu dùng chung cho toàn bộ site — tách khỏi UI để dễ thay bằng API sau này.

export type LicenseType = "Bản quyền vĩnh viễn" | "Thuê bao (Subscription)" | "OEM";

export type AudienceType =
  | "Cá nhân"
  | "Doanh nghiệp nhỏ"
  | "Doanh nghiệp vừa"
  | "Doanh nghiệp lớn";

export type ProductBadge = "Bán chạy" | "Phổ biến" | "Giảm giá" | "Mới";

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string; // tên icon lucide-react
  productCount: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  licenseType: LicenseType;
  duration: string; // "1 năm", "Vĩnh viễn", ...
  seats: string; // "1 user", "5 user", ...
  audience: AudienceType[];
  os?: string[];
  badges?: ProductBadge[];
  featured?: boolean;
  bestseller?: boolean;
  rating: number; // 0-5
  reviewCount: number;
  features: string[];
  systemRequirements: string[];
  faqs: { question: string; answer: string }[];
  createdAt: string; // ISO date, dùng để sort "Mới nhất"
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  image?: string;
  author?: {
    name: string;
    role: string;
    avatar?: string;
  };
  tags?: string[];
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  location: string;
  type: string; // "Toàn thời gian" ...
  department: string;
  deadline: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface Partner {
  id: string;
  name: string;
}

export interface NavChild {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavGroup {
  title: string;
  items: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  megaMenu?: "products" | "guide";
}
