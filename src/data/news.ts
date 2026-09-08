import { NewsArticle } from "@/types";

export const newsArticles: NewsArticle[] = [
  {
    id: "news-1",
    slug: "microsoft-365-copilot-cho-doanh-nghiep-vua-va-nho",
    title: "Microsoft 365 Copilot: Trợ lý AI thế hệ mới đột phá năng suất doanh nghiệp vừa và nhỏ",
    excerpt:
      "Microsoft tích hợp AI Copilot sâu hơn vào Word, Excel, PowerPoint và Teams giúp doanh nghiệp tự động hóa báo cáo, xử lý văn bản và tiết kiệm 40% thời gian vận hành.",
    content: [
      "Microsoft vừa công bố mở rộng mạnh mẽ khả năng của Copilot cho nhóm khách hàng doanh nghiệp vừa và nhỏ (SMB), cho phép tự động hóa các tác vụ soạn thảo, tổng hợp email và phân tích dữ liệu ngay trong bộ ứng dụng quen thuộc.",
      "Với sự hỗ trợ của mô hình ngôn ngữ lớn (LLM) kết hợp cùng dữ liệu doanh nghiệp trong Microsoft Graph, Copilot biến các lời nhắc thông thường thành công cụ tạo lập nội dung mạnh mẽ: từ việc tóm tắt các cuộc họp Teams bị lỡ, tạo bản thuyết trình PowerPoint từ tài liệu Word, đến phân tích xu hướng tài chính phức tạp trên Excel.",
      "Tính năng này được các chuyên gia đánh giá là bước nhảy vọt giúp doanh nghiệp tinh gọn tối đa thời gian xử lý thủ tục hành chính, đặc biệt với các doanh nghiệp có quy mô nhân sự vừa và nhỏ cần tối ưu hóa năng suất của từng nhân sự cốt lõi.",
      "Hiện nay, các doanh nghiệp sử dụng gói Microsoft 365 Business Standard hoặc Business Premium có thể đăng ký bổ sung bản quyền Copilot với chính sách hỗ trợ kỹ thuật chính hãng từ ETEK-soft — đối tác ủy quyền Microsoft Certified.",
    ],
    category: "Microsoft",
    date: "2026-09-01",
    readTime: "4 phút đọc",
    featured: true,
    image: "/images/copilot_ai_3d.jpg",
    author: {
      name: "Trần Minh Đức",
      role: "Kỹ sư Trưởng Giải pháp Cloud & Microsoft",
      avatar: "/legacy-media/avatars/avatar-1.webp",
    },
    tags: ["Microsoft 365", "Copilot AI", "Bản quyền SMB", "Chuyển đổi số"],
  },
  {
    id: "news-hrm",
    slug: "tu-dong-hoa-cham-cong-faceid-ai-da-chi-nhanh",
    title: "Ứng dụng Trí tuệ Nhân tạo FaceID trong Tự động hóa Chấm công Đa chi nhánh",
    excerpt:
      "Giải pháp chấm công nhận diện khuôn mặt AI thời gian thực giúp ngăn chặn hoàn toàn gian lận, đồng bộ dữ liệu đa chi nhánh về máy chủ trung tâm tức thì.",
    content: [
      "Đối với các doanh nghiệp quy mô lớn sở hữu nhiều văn phòng, nhà xưởng hoặc chuỗi bán lẻ, bài toán quản lý chấm công và kiểm soát thời gian làm việc luôn là điểm nghẽn gây thất thoát ngân sách đáng kể.",
      "Công nghệ FaceID AI thế hệ mới với thuật toán nhận diện sinh trắc học 3D chống giả mạo bằng hình ảnh hoặc video phát lại, cho phép nhân viên điểm danh chính xác trong vòng chưa tới 0.3 giây ngay cả khi đeo khẩu trang.",
      "Toàn bộ dữ liệu điểm danh được mã hóa và truyền tải đồng bộ tức thì qua giao thức bảo mật về hệ sinh thái HRM 4.0 trung tâm, tự động ghi nhận phân ca, tính toán đi muộn về sớm mà không cần bất kỳ thao tác kết xuất dữ liệu thủ công nào từ phòng nhân sự.",
      "ETEK-soft hiện đang triển khai đồng bộ gói giải pháp thiết bị chấm công FaceID AI tích hợp liền mạch phần mềm HRM cho hơn 300 nhà máy và chuỗi tập đoàn trên toàn quốc.",
    ],
    category: "HRM & Chấm Công",
    date: "2026-08-30",
    readTime: "5 phút đọc",
    featured: false,
    image: "/legacy-media/articles/Quan_tri_nhan_su_4.0.webp",
    author: {
      name: "Lê Hoàng Quân",
      role: "Giám đốc Giải pháp Nhân sự HRM",
      avatar: "/legacy-media/avatars/avatar-2.webp",
    },
    tags: ["FaceID AI", "Chấm công tự động", "HRM 4.0", "Quản trị chuỗi"],
  },
  {
    id: "news-2",
    slug: "windows-11-cap-nhat-bao-mat-quy-3-2026",
    title: "Windows 11 Enterprise: Bản cập nhật bảo mật quý 3/2026 và khuyến nghị cho IT",
    excerpt:
      "Bản cập nhật mới bổ sung nhiều bản vá bảo mật zero-day quan trọng, tăng cường hàng rào phòng thủ TPM 2.0 và quản trị đặc quyền người dùng.",
    content: [
      "Microsoft chính thức phát hành bản cập nhật an ninh định kỳ quý 3/2026 cho Windows 11 Enterprise với hơn 60 bản vá lỗi, trong đó có 4 lỗ hổng nghiêm trọng liên quan đến thực thi mã từ xa (RCE) và leo thang đặc quyền người dùng cục bộ.",
      "Điểm đáng chú ý trong bản nâng cấp này là sự nâng cấp của giao thức Windows Defender Application Control (WDAC), giúp ngăn chặn các mã độc không dùng tệp (fileless malware) vốn đang gia tăng nhanh chóng trong môi trường doanh nghiệp.",
      "Đội ngũ kỹ sư ETEK-soft khuyến nghị các nhà quản trị hệ thống IT doanh nghiệp nên thiết lập môi trường kiểm thử (Staging Ring) cho nhóm thiết bị thử nghiệm trước khi phê duyệt triển khai diện rộng qua chính sách WSUS hoặc Microsoft Intune.",
    ],
    category: "Bảo mật",
    date: "2026-08-28",
    readTime: "3 phút đọc",
    featured: false,
    image: "/legacy-media/articles/post-1.webp",
    author: {
      name: "Nguyễn Tuấn Anh",
      role: "Chuyên gia An ninh mạng & Hệ thống",
      avatar: "/legacy-media/avatars/avatar-3.webp",
    },
    tags: ["Windows 11", "Bảo mật Zero-Day", "Endpoint Security", "IT Enterprise"],
  },
  {
    id: "news-3",
    slug: "xu-huong-chuyen-doi-so-doanh-nghiep-vua-va-nho-2026",
    title: "Lộ trình Chuyển đổi số Toàn diện cho Doanh nghiệp Sản xuất và Dịch vụ 2026",
    excerpt:
      "Đầu tư vào phần mềm bản quyền chính hãng có chứng chỉ CO/CQ, số hóa luồng công việc và hạ tầng đám mây tiếp tục là đòn bẩy sống còn của doanh nghiệp hiện đại.",
    content: [
      "Báo cáo thị trường gần đây cho thấy hơn 72% doanh nghiệp tại Việt Nam đã xác định chuyển đổi số là ưu tiên ngân sách hàng đầu, trong đó trọng tâm là giải quyết bài toán kết nối rời rạc giữa các bộ phận hành chính, kế toán và vận hành.",
      "Việc loại bỏ các công cụ rời rạc, không có bản quyền để thay thế bằng nền tảng quản trị tập trung giúp doanh nghiệp bảo vệ dữ liệu thương mại tuyệt đối trước nguy cơ tấn công ransomware tống tiền, đồng thời đảm bảo pháp lý kiểm toán khi làm việc cùng đối tác quốc tế.",
      "Một lộ trình chuyển đổi số thành công cần bắt đầu từ việc chuẩn hóa hạ tầng hệ điều hành, cấp phép bộ công cụ cộng tác trực tuyến chuẩn mực và áp dụng phần mềm quản trị nguồn nhân lực tự động.",
    ],
    category: "Chuyển đổi số",
    date: "2026-08-20",
    readTime: "5 phút đọc",
    featured: false,
    image: "/legacy-media/articles/chuyen-doi-so.webp",
    author: {
      name: "Phạm Thùy Linh",
      role: "Chuyên viên Tư vấn Chuyển đổi số ETEK",
      avatar: "/legacy-media/avatars/avatar-4.webp",
    },
    tags: ["Chuyển đổi số", "Phần mềm bản quyền", "Bảo mật dữ liệu", "SME 2026"],
  },
  {
    id: "news-luong3p",
    slug: "thiet-lap-dong-co-tinh-luong-3p-cho-doanh-nghiep",
    title: "Thiết lập Động cơ Tính Lương 3P Chuẩn Quốc tế: Bí quyết Giữ chân Nhân tài",
    excerpt:
      "Tự động hóa tính lương theo Vị trí (Position), Năng lực (Person) và Hiệu suất (Performance) loại bỏ 100% sai sót tính toán, trả lương minh bạch đúng hạn.",
    content: [
      "Hệ thống đãi ngộ 3P đang trở thành tiêu chuẩn vàng của các tập đoàn tiên tiến nhằm kích thích động lực cống hiến và giữ chân nhân sự chủ chốt.",
      "Tuy nhiên, nếu tính toán thủ công bằng bảng tính Excel, quy trình tổng hợp chỉ số KPI, đánh giá khung năng lực và các khoản phụ cấp ca kíp thường mất từ 5 đến 10 ngày làm việc của toàn bộ phòng kế toán - tiền lương, dễ phát sinh tranh chấp số liệu.",
      "Phần mềm HRM ETEK-soft tích hợp bộ công thức 3P linh hoạt, cho phép cấu hình tham số tùy biến theo từng đặc thù ngành nghề: tự động lấy dữ liệu chấm công FaceID, đối chiếu KPI kết quả công việc và kết xuất phiếu lương điện tử bảo mật trực tiếp gửi vào ứng dụng cá nhân của nhân viên.",
    ],
    category: "HRM & Chấm Công",
    date: "2026-08-15",
    readTime: "6 phút đọc",
    featured: false,
    image: "/legacy-media/articles/he-thong-luong-3P.webp",
    author: {
      name: "Lê Hoàng Quân",
      role: "Giám đốc Giải pháp Nhân sự HRM",
      avatar: "/legacy-media/avatars/avatar-2.webp",
    },
    tags: ["Lương 3P", "Quản trị nhân sự", "KPI", "Payroll Automation"],
  },
  {
    id: "news-4",
    slug: "so-sanh-windows-server-2022-va-2025",
    title: "So sánh Chuyên sâu Windows Server 2022 và Windows Server 2025",
    excerpt:
      "Những điểm nâng cấp vượt trội về bảo mật Container, ảo hóa Hyper-V thế hệ mới và khả năng kết nối lai Azure Arc giúp quản trị viên IT ra quyết định đúng đắn.",
    content: [
      "Windows Server 2022 hiện vẫn là nền tảng cốt lõi ổn định tại hàng ngàn trung tâm dữ liệu. Tuy nhiên, phiên bản Windows Server 2025 mới mang lại những cải tiến mang tính cách mạng cho môi trường đám mây lai (Hybrid Cloud).",
      "Các tính năng đột phá bao gồm: Hotpatching cho tất cả các phiên bản (cho phép vá lỗi hệ điều hành mà không cần khởi động lại máy chủ), hỗ trợ lưu trữ NVMe over Fabric với tốc độ IOPS tăng gấp 3 lần, và thuật toán xác thực Kerberos thế hệ mới ngăn chặn tấn công giả mạo NTLM.",
      "Doanh nghiệp sở hữu hạ tầng máy chủ cần đánh giá kỹ lưỡng số lượng Core CPU và mô hình cấp phép Client Access License (CAL) để tối ưu hóa chi phí đầu tư dài hạn.",
    ],
    category: "Phần mềm",
    date: "2026-08-12",
    readTime: "6 phút đọc",
    featured: false,
    image: "/images/server_datacenter_3d.jpg",
    author: {
      name: "Nguyễn Tuấn Anh",
      role: "Chuyên gia An ninh mạng & Hệ thống",
      avatar: "/legacy-media/avatars/avatar-3.webp",
    },
    tags: ["Windows Server 2025", "Hyper-V", "Hybrid Cloud", "Data Center"],
  },
  {
    id: "news-5",
    slug: "5-dau-hieu-doanh-nghiep-can-nang-cap-giai-phap-bao-mat",
    title: "5 Dấu hiệu Cảnh báo Hệ thống Bảo mật Doanh nghiệp đang bị Đe dọa",
    excerpt:
      "Nhận diện sớm các lỗ hổng an ninh mạng giúp doanh nghiệp chủ động phòng ngừa rủi ro rò rỉ dữ liệu khách hàng và tránh các khoản phạt pháp lý.",
    content: [
      "Số lượng cảnh báo mã độc gia tăng bất thường trên các máy trạm nhân viên là dấu hiệu đầu tiên cho thấy giải pháp phòng thủ hiện tại đã lỗi thời trước các biến thể virus mới.",
      "Việc thiếu khả năng quản trị chính sách tập trung khiến bộ phận IT không thể giám sát việc nhân viên cài đặt phần mềm không rõ nguồn gốc hoặc chia sẻ tài liệu mật ra bên ngoài.",
      "Doanh nghiệp nên định kỳ thực hiện rà soát mã độc toàn diện và trang bị các bộ giải pháp bảo vệ điểm cuối (Endpoint Protection) có chứng nhận quốc tế từ các nhà cung cấp uy tín.",
    ],
    category: "Bảo mật",
    date: "2026-07-30",
    readTime: "4 phút đọc",
    featured: false,
    image: "/legacy-media/articles/quy-trinh-chuyen-doi-so-doanh-nghiep.webp",
    author: {
      name: "Trần Minh Đức",
      role: "Kỹ sư Trưởng Giải pháp Cloud & Microsoft",
      avatar: "/legacy-media/avatars/avatar-1.webp",
    },
    tags: ["An ninh mạng", "Ransomware", "Bảo mật doanh nghiệp"],
  },
  {
    id: "news-6",
    slug: "huong-di-nao-cho-doanh-nghiep-khi-lua-chon-license-phan-mem",
    title: "Chiến Lược Tối Ưu Chi Phí License Phần Mềm: Mua Vĩnh Viễn hay Thuê Bao Đám Mây?",
    excerpt:
      "Phân tích bài toán tổng chi phí sở hữu (TCO) giữa hình thức cấp phép truyền thống và mô hình SaaS giúp CFO đưa ra quyết định đầu tư thông minh.",
    content: [
      "License bản quyền vĩnh viễn (Perpetual) phù hợp với các hệ thống ổn định, yêu cầu kiểm soát chi phí Capex một lần và không đòi hỏi cập nhật tính năng mới liên tục trong chu kỳ 3 đến 5 năm.",
      "Ngược lại, mô hình thuê bao (Subscription / Cloud) mang lại tính linh hoạt cao về chi phí Opex, cho phép mở rộng hoặc thu hẹp số lượng người dùng theo thời gian thực và luôn được hãng hỗ trợ phiên bản mới nhất.",
      "ETEK-soft tư vấn mô hình kết hợp lai (Hybrid Licensing) độc quyền, giúp doanh nghiệp tiết kiệm đến 35% chi phí bản quyền hàng năm trong khi vẫn bảo toàn đầy đủ tính hợp pháp và quyền lợi hỗ trợ kỹ thuật 24/7.",
    ],
    category: "Doanh nghiệp",
    date: "2026-07-15",
    readTime: "5 phút đọc",
    featured: false,
    image: "/legacy-media/articles/xay-dung-khung-nang-luc.webp",
    author: {
      name: "Phạm Thùy Linh",
      role: "Chuyên viên Tư vấn Chuyển đổi số ETEK",
      avatar: "/legacy-media/avatars/avatar-4.webp",
    },
    tags: ["Tối ưu chi phí", "License bản quyền", "Chiến lược IT", "SaaS vs On-premise"],
  },
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((n) => n.slug === slug);
}

export const newsCategories = Array.from(new Set(newsArticles.map((n) => n.category)));
