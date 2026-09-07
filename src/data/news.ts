import { NewsArticle } from "@/types";

export const newsArticles: NewsArticle[] = [
  {
    id: "news-1",
    slug: "microsoft-365-copilot-cho-doanh-nghiep-vua-va-nho",
    title: "Microsoft 365 Copilot: Trợ lý AI cho doanh nghiệp vừa và nhỏ",
    excerpt:
      "Microsoft tích hợp AI Copilot sâu hơn vào Word, Excel, Outlook giúp doanh nghiệp tiết kiệm thời gian xử lý công việc văn phòng.",
    content: [
      "Microsoft vừa công bố mở rộng khả năng Copilot cho nhóm khách hàng doanh nghiệp vừa và nhỏ, cho phép tự động hóa các tác vụ soạn thảo, tổng hợp email và phân tích dữ liệu ngay trong bộ ứng dụng quen thuộc.",
      "Tính năng này được đánh giá giúp giảm đáng kể thời gian xử lý công việc hành chính, đặc biệt với các doanh nghiệp có quy mô nhân sự hạn chế.",
      "Doanh nghiệp sử dụng gói Microsoft 365 Business Standard trở lên có thể đăng ký bổ sung Copilot để trải nghiệm sớm tính năng này.",
    ],
    category: "Microsoft",
    date: "2026-09-01",
    readTime: "4 phút đọc",
    featured: true,
  },
  {
    id: "news-2",
    slug: "windows-11-cap-nhat-bao-mat-quy-3-2026",
    title: "Windows 11: Bản cập nhật bảo mật quý 3/2026 đáng chú ý",
    excerpt:
      "Bản cập nhật mới bổ sung nhiều bản vá bảo mật quan trọng, khuyến nghị doanh nghiệp cập nhật sớm để giảm rủi ro.",
    content: [
      "Microsoft phát hành bản cập nhật bảo mật định kỳ cho Windows 11 với hơn 60 bản vá, trong đó có một số lỗ hổng mức độ nghiêm trọng liên quan đến quyền truy cập hệ thống.",
      "Các doanh nghiệp được khuyến nghị cập nhật trong vòng 7 ngày kể từ ngày phát hành để giảm thiểu rủi ro bị khai thác.",
      "Đối với môi trường doanh nghiệp lớn, nên kiểm thử bản cập nhật trên nhóm thiết bị thí điểm trước khi triển khai diện rộng.",
    ],
    category: "Bảo mật",
    date: "2026-08-28",
    readTime: "3 phút đọc",
    featured: false,
  },
  {
    id: "news-3",
    slug: "xu-huong-chuyen-doi-so-doanh-nghiep-vua-va-nho-2026",
    title: "Xu hướng chuyển đổi số cho doanh nghiệp vừa và nhỏ năm 2026",
    excerpt:
      "Đầu tư vào phần mềm bản quyền và hạ tầng đám mây tiếp tục là ưu tiên hàng đầu của doanh nghiệp SME trong năm nay.",
    content: [
      "Theo khảo sát gần đây, hơn 65% doanh nghiệp vừa và nhỏ tại Việt Nam đã hoặc đang lên kế hoạch đầu tư vào phần mềm bản quyền nhằm đảm bảo an toàn dữ liệu và tuân thủ quy định.",
      "Các giải pháp được ưu tiên gồm bộ ứng dụng văn phòng đám mây, phần mềm bảo mật endpoint và công cụ quản lý dự án.",
      "Việc lựa chọn nhà cung cấp uy tín, có hỗ trợ kỹ thuật rõ ràng được xem là yếu tố quyết định trong quá trình chuyển đổi số.",
    ],
    category: "Doanh nghiệp",
    date: "2026-08-20",
    readTime: "5 phút đọc",
    featured: false,
  },
  {
    id: "news-4",
    slug: "so-sanh-windows-server-2022-va-2025",
    title: "So sánh Windows Server 2022 và phiên bản kế nhiệm",
    excerpt: "Những điểm khác biệt chính giúp quản trị viên IT quyết định thời điểm nâng cấp phù hợp.",
    content: [
      "Windows Server 2022 vẫn là lựa chọn ổn định cho phần lớn doanh nghiệp nhờ khả năng tương thích tốt với hạ tầng hiện có.",
      "Phiên bản kế nhiệm bổ sung các cải tiến về bảo mật container và hiệu năng ảo hóa, phù hợp với doanh nghiệp đang mở rộng hạ tầng cloud-native.",
      "Doanh nghiệp nên đánh giá lộ trình hỗ trợ dài hạn (LTSC) trước khi quyết định nâng cấp toàn bộ hệ thống.",
    ],
    category: "Phần mềm",
    date: "2026-08-12",
    readTime: "6 phút đọc",
  },
  {
    id: "news-5",
    slug: "5-dau-hieu-doanh-nghiep-can-nang-cap-giai-phap-bao-mat",
    title: "5 dấu hiệu doanh nghiệp cần nâng cấp giải pháp bảo mật",
    excerpt: "Nhận diện sớm các dấu hiệu giúp doanh nghiệp chủ động phòng ngừa rủi ro an ninh mạng.",
    content: [
      "Số lượng cảnh báo mã độc gia tăng bất thường là dấu hiệu đầu tiên cho thấy hệ thống bảo mật hiện tại chưa đáp ứng đủ.",
      "Thiếu khả năng quản trị tập trung khiến đội ngũ IT khó kiểm soát tình trạng bảo mật trên toàn bộ thiết bị.",
      "Doanh nghiệp nên định kỳ đánh giá lại giải pháp antivirus/endpoint đang sử dụng, đặc biệt khi quy mô nhân sự tăng nhanh.",
    ],
    category: "Bảo mật",
    date: "2026-07-30",
    readTime: "4 phút đọc",
  },
  {
    id: "news-6",
    slug: "huong-di-nao-cho-doanh-nghiep-khi-lua-chon-license-phan-mem",
    title: "Hướng đi nào cho doanh nghiệp khi lựa chọn license phần mềm?",
    excerpt: "So sánh giữa license vĩnh viễn và thuê bao để đưa ra quyết định đầu tư phù hợp ngân sách.",
    content: [
      "License vĩnh viễn phù hợp với doanh nghiệp muốn kiểm soát chi phí dài hạn và không có nhu cầu cập nhật tính năng liên tục.",
      "License thuê bao linh hoạt hơn, phù hợp với doanh nghiệp đang tăng trưởng nhanh và cần mở rộng số lượng người dùng.",
      "Việc kết hợp cả hai mô hình license tùy theo từng nhóm phần mềm là chiến lược được nhiều doanh nghiệp áp dụng.",
    ],
    category: "Doanh nghiệp",
    date: "2026-07-15",
    readTime: "5 phút đọc",
  },
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((n) => n.slug === slug);
}

export const newsCategories = Array.from(new Set(newsArticles.map((n) => n.category)));
