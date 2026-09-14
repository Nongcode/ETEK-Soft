import { Product } from "@/types";

const commonFaqs = [
  {
    question: "License có phải là bản quyền chính hãng không?",
    answer: "Có. Toàn bộ license được cung cấp trực tiếp từ nhà sản xuất hoặc nhà phân phối ủy quyền, có hóa đơn VAT và mã kích hoạt hợp lệ.",
  },
  {
    question: "Thời gian nhận license sau khi thanh toán là bao lâu?",
    answer: "License điện tử được gửi qua email trong vòng 15-30 phút làm việc sau khi xác nhận thanh toán.",
  },
];

export const products: Product[] = [
  {
    id: "prod-1",
    slug: "microsoft-365-business-standard",
    name: "Microsoft 365 Business Standard",
    brand: "Microsoft",
    categorySlug: "microsoft-365",
    shortDescription: "Bộ ứng dụng Office đầy đủ kèm email doanh nghiệp và lưu trữ đám mây.",
    description:
      "Microsoft 365 Business Standard cung cấp đầy đủ Word, Excel, PowerPoint, Outlook cùng email doanh nghiệp Exchange, lưu trữ OneDrive 1TB và công cụ họp trực tuyến Teams — giải pháp làm việc toàn diện cho doanh nghiệp vừa và nhỏ.",
    price: 2490000,
    originalPrice: 2790000,
    discount: 11,
    licenseType: "Thuê bao (Subscription)",
    duration: "1 năm",
    seats: "1 user",
    audience: ["Doanh nghiệp nhỏ", "Doanh nghiệp vừa"],
    os: ["Windows", "macOS"],
    badges: ["Bán chạy"],
    featured: true,
    bestseller: true,
    rating: 4.8,
    reviewCount: 214,
    features: [
      "Cài đặt trên 5 thiết bị: PC, Mac, tablet, điện thoại",
      "Email doanh nghiệp với tên miền riêng qua Exchange",
      "1TB lưu trữ đám mây OneDrive",
      "Họp và chat trực tuyến với Microsoft Teams",
      "Luôn cập nhật phiên bản mới nhất",
    ],
    systemRequirements: [
      "Windows 10/11 hoặc macOS 3 phiên bản gần nhất",
      "RAM tối thiểu 4GB",
      "Kết nối Internet để kích hoạt và đồng bộ",
    ],
    faqs: commonFaqs,
    createdAt: "2026-08-20",
  },
  {
    id: "prod-2",
    slug: "microsoft-365-personal",
    name: "Microsoft 365 Personal",
    brand: "Microsoft",
    categorySlug: "microsoft-365",
    shortDescription: "Office đầy đủ và 1TB OneDrive dành cho cá nhân, chuyên gia độc lập.",
    description:
      "Phiên bản Microsoft 365 dành cho cá nhân với đầy đủ Word, Excel, PowerPoint, Outlook và 1TB OneDrive, phù hợp cho freelancer và chuyên gia làm việc độc lập.",
    price: 1190000,
    licenseType: "Thuê bao (Subscription)",
    duration: "1 năm",
    seats: "1 user",
    audience: ["Cá nhân"],
    os: ["Windows", "macOS"],
    rating: 4.6,
    reviewCount: 98,
    features: [
      "Cài đặt trên tối đa 5 thiết bị cá nhân",
      "1TB lưu trữ đám mây OneDrive",
      "Hỗ trợ AI Copilot cơ bản trong Word, Excel",
      "Luôn cập nhật phiên bản mới nhất",
    ],
    systemRequirements: ["Windows 10/11 hoặc macOS", "RAM tối thiểu 4GB", "Kết nối Internet để kích hoạt"],
    faqs: commonFaqs,
    createdAt: "2026-07-02",
  },
  {
    id: "prod-3",
    slug: "windows-11-pro",
    name: "Windows 11 Pro",
    brand: "Microsoft",
    categorySlug: "windows",
    shortDescription: "Hệ điều hành bản quyền cho máy trạm doanh nghiệp, bảo mật nâng cao.",
    description:
      "Windows 11 Pro mang lại hiệu năng ổn định, bảo mật nâng cao với BitLocker, hỗ trợ quản trị tập trung qua Group Policy và tương thích với hạ tầng doanh nghiệp hiện có.",
    price: 3490000,
    originalPrice: 3990000,
    discount: 13,
    licenseType: "Bản quyền vĩnh viễn",
    duration: "Vĩnh viễn",
    seats: "1 thiết bị",
    audience: ["Doanh nghiệp nhỏ", "Doanh nghiệp vừa", "Doanh nghiệp lớn"],
    os: ["Windows"],
    badges: ["Bán chạy", "Phổ biến"],
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviewCount: 356,
    features: [
      "Mã hóa ổ đĩa BitLocker bảo vệ dữ liệu",
      "Quản trị tập trung qua Group Policy, Intune",
      "Remote Desktop kết nối từ xa an toàn",
      "Tối ưu cho đa nhiệm và màn hình rộng",
    ],
    systemRequirements: [
      "CPU 1GHz trở lên, 2 nhân, tương thích 64-bit",
      "RAM tối thiểu 4GB",
      "Ổ cứng trống tối thiểu 64GB",
      "Hỗ trợ TPM phiên bản 2.0",
    ],
    faqs: commonFaqs,
    createdAt: "2026-08-28",
  },
  {
    id: "prod-4",
    slug: "windows-11-home",
    name: "Windows 11 Home",
    brand: "Microsoft",
    categorySlug: "windows",
    shortDescription: "Hệ điều hành bản quyền cho máy tính cá nhân và văn phòng nhỏ.",
    description:
      "Windows 11 Home phù hợp cho máy tính cá nhân và văn phòng nhỏ, giao diện hiện đại, hiệu năng tối ưu và tương thích tốt với phần cứng phổ thông.",
    price: 2290000,
    licenseType: "Bản quyền vĩnh viễn",
    duration: "Vĩnh viễn",
    seats: "1 thiết bị",
    audience: ["Cá nhân", "Doanh nghiệp nhỏ"],
    os: ["Windows"],
    rating: 4.7,
    reviewCount: 187,
    features: [
      "Giao diện hiện đại, dễ sử dụng",
      "Windows Hello đăng nhập sinh trắc học",
      "Tích hợp Microsoft Store",
      "Cập nhật bảo mật định kỳ từ Microsoft",
    ],
    systemRequirements: [
      "CPU 1GHz trở lên, 2 nhân, tương thích 64-bit",
      "RAM tối thiểu 4GB",
      "Ổ cứng trống tối thiểu 64GB",
    ],
    faqs: commonFaqs,
    createdAt: "2026-06-15",
  },
  {
    id: "prod-5",
    slug: "windows-11-enterprise",
    name: "Windows 11 Enterprise",
    brand: "Microsoft",
    categorySlug: "windows",
    shortDescription: "Phiên bản dành riêng cho doanh nghiệp lớn với bảo mật và quản trị chuyên sâu.",
    description:
      "Windows 11 Enterprise cung cấp các công cụ bảo mật chuyên sâu như Credential Guard, Windows Defender Application Control cùng khả năng quản trị hàng loạt thiết bị qua Microsoft Endpoint Manager.",
    price: 4990000,
    licenseType: "Bản quyền vĩnh viễn",
    duration: "Vĩnh viễn",
    seats: "1 thiết bị",
    audience: ["Doanh nghiệp lớn"],
    os: ["Windows"],
    badges: ["Mới"],
    rating: 4.8,
    reviewCount: 76,
    features: [
      "Credential Guard bảo vệ thông tin xác thực",
      "Quản trị hàng loạt qua Microsoft Endpoint Manager",
      "Windows Defender Application Control",
      "Hỗ trợ triển khai theo hình ảnh hệ thống (imaging)",
    ],
    systemRequirements: [
      "CPU 1GHz trở lên, 2 nhân, tương thích 64-bit",
      "RAM tối thiểu 8GB khuyến nghị",
      "TPM 2.0 bắt buộc",
    ],
    faqs: commonFaqs,
    createdAt: "2026-08-01",
  },
  {
    id: "prod-6",
    slug: "microsoft-office-2021-ltsc",
    name: "Microsoft Office 2021 LTSC",
    brand: "Microsoft",
    categorySlug: "office",
    shortDescription: "Bộ Office bản quyền vĩnh viễn cho Word, Excel, PowerPoint, Outlook.",
    description:
      "Phiên bản Office mua đứt một lần, không cần gia hạn hàng năm, đầy đủ Word, Excel, PowerPoint, Outlook cho một thiết bị, phù hợp doanh nghiệp muốn kiểm soát chi phí dài hạn.",
    price: 4290000,
    originalPrice: 4790000,
    discount: 10,
    licenseType: "Bản quyền vĩnh viễn",
    duration: "Vĩnh viễn",
    seats: "1 thiết bị",
    audience: ["Doanh nghiệp nhỏ", "Doanh nghiệp vừa", "Cá nhân"],
    os: ["Windows", "macOS"],
    badges: ["Phổ biến"],
    featured: true,
    rating: 4.7,
    reviewCount: 245,
    features: [
      "Word, Excel, PowerPoint, Outlook đầy đủ tính năng",
      "Mua một lần, sử dụng vĩnh viễn",
      "Không yêu cầu kết nối Internet thường xuyên",
      "Tương thích định dạng file cũ và mới",
    ],
    systemRequirements: ["Windows 10/11 hoặc macOS", "RAM tối thiểu 4GB", "Ổ cứng trống 4GB"],
    faqs: commonFaqs,
    createdAt: "2026-05-10",
  },
  {
    id: "prod-7",
    slug: "microsoft-office-2024-home-business",
    name: "Microsoft Office 2024 Home & Business",
    brand: "Microsoft",
    categorySlug: "office",
    shortDescription: "Phiên bản Office mới nhất cho hộ kinh doanh và văn phòng nhỏ.",
    description:
      "Office 2024 Home & Business bao gồm Word, Excel, PowerPoint, Outlook với giao diện và tính năng mới nhất, bản quyền vĩnh viễn cho 1 thiết bị Windows hoặc Mac.",
    price: 5290000,
    licenseType: "Bản quyền vĩnh viễn",
    duration: "Vĩnh viễn",
    seats: "1 thiết bị",
    audience: ["Doanh nghiệp nhỏ", "Cá nhân"],
    os: ["Windows", "macOS"],
    badges: ["Mới"],
    rating: 4.8,
    reviewCount: 42,
    features: [
      "Phiên bản Office mới nhất 2024",
      "Word, Excel, PowerPoint, Outlook",
      "Giao diện tối ưu cho màn hình cảm ứng",
      "Hỗ trợ cộng tác thời gian thực khi kết nối OneDrive",
    ],
    systemRequirements: ["Windows 11 hoặc macOS 3 phiên bản gần nhất", "RAM tối thiểu 4GB"],
    faqs: commonFaqs,
    createdAt: "2026-08-25",
  },
  {
    id: "prod-8",
    slug: "windows-server-2022-standard",
    name: "Windows Server 2022 Standard",
    brand: "Microsoft",
    categorySlug: "windows-server",
    shortDescription: "Giải pháp máy chủ và quản trị hệ thống cho hạ tầng doanh nghiệp.",
    description:
      "Windows Server 2022 Standard cung cấp nền tảng máy chủ ổn định với Hyper-V, Active Directory, bảo mật nâng cao và hỗ trợ ảo hóa tối đa 2 máy ảo trên một giấy phép.",
    price: 18900000,
    licenseType: "Bản quyền vĩnh viễn",
    duration: "Vĩnh viễn",
    seats: "16 core",
    audience: ["Doanh nghiệp vừa", "Doanh nghiệp lớn"],
    os: ["Windows Server"],
    rating: 4.9,
    reviewCount: 58,
    features: [
      "Hỗ trợ ảo hóa Hyper-V tối đa 2 máy ảo",
      "Active Directory và quản trị tập trung",
      "Bảo mật nâng cao với Secured-core Server",
      "Hỗ trợ container và Kubernetes cơ bản",
    ],
    systemRequirements: [
      "CPU 64-bit 1.4GHz trở lên",
      "RAM tối thiểu 2GB (khuyến nghị 4GB+)",
      "Ổ cứng trống tối thiểu 32GB",
    ],
    faqs: commonFaqs,
    createdAt: "2026-04-18",
  },
  {
    id: "prod-9",
    slug: "sql-server-2022-standard",
    name: "SQL Server 2022 Standard",
    brand: "Microsoft",
    categorySlug: "sql-server",
    shortDescription: "Hệ quản trị cơ sở dữ liệu ổn định cho ứng dụng doanh nghiệp.",
    description:
      "SQL Server 2022 Standard đáp ứng nhu cầu lưu trữ, xử lý và phân tích dữ liệu cho ứng dụng doanh nghiệp vừa, hỗ trợ tích hợp đám mây Azure và bảo mật dữ liệu nâng cao.",
    price: 32900000,
    licenseType: "Bản quyền vĩnh viễn",
    duration: "Vĩnh viễn",
    seats: "Theo core (tối thiểu 4 core)",
    audience: ["Doanh nghiệp vừa", "Doanh nghiệp lớn"],
    os: ["Windows Server", "Linux"],
    badges: ["Phổ biến"],
    rating: 4.8,
    reviewCount: 34,
    features: [
      "Tích hợp Azure Synapse Link phân tích dữ liệu thời gian thực",
      "Mã hóa dữ liệu Always Encrypted",
      "Hỗ trợ đến 128GB bộ nhớ mỗi instance",
      "Công cụ báo cáo Reporting Services đi kèm",
    ],
    systemRequirements: [
      "Windows Server 2019/2022 hoặc Linux (Ubuntu, RHEL)",
      "RAM tối thiểu 4GB (khuyến nghị 8GB+)",
      "Ổ cứng trống tối thiểu 6GB",
    ],
    faqs: commonFaqs,
    createdAt: "2026-03-22",
  },
  {
    id: "prod-10",
    slug: "kaspersky-endpoint-security",
    name: "Kaspersky Endpoint Security for Business",
    brand: "Kaspersky",
    categorySlug: "antivirus",
    shortDescription: "Bảo mật toàn diện cho máy trạm và máy chủ doanh nghiệp.",
    description:
      "Giải pháp bảo mật nhiều lớp giúp phát hiện và ngăn chặn mã độc, ransomware theo thời gian thực, kèm bảng điều khiển quản trị tập trung cho quản trị viên IT.",
    price: 890000,
    originalPrice: 1090000,
    discount: 18,
    licenseType: "Thuê bao (Subscription)",
    duration: "1 năm",
    seats: "1 thiết bị",
    audience: ["Doanh nghiệp nhỏ", "Doanh nghiệp vừa", "Doanh nghiệp lớn"],
    os: ["Windows", "macOS", "Linux"],
    badges: ["Bán chạy"],
    bestseller: true,
    rating: 4.7,
    reviewCount: 412,
    features: [
      "Phát hiện ransomware và mã độc theo thời gian thực",
      "Quản trị tập trung qua Kaspersky Security Center",
      "Kiểm soát thiết bị và ứng dụng",
      "Tường lửa và kiểm soát web tích hợp",
    ],
    systemRequirements: ["Windows 10/11, macOS hoặc Linux", "RAM tối thiểu 2GB", "Kết nối Internet để cập nhật"],
    faqs: commonFaqs,
    createdAt: "2026-08-10",
  },
  {
    id: "prod-11",
    slug: "bitdefender-gravityzone",
    name: "Bitdefender GravityZone Business Security",
    brand: "Bitdefender",
    categorySlug: "antivirus",
    shortDescription: "Nền tảng bảo mật đám mây cho doanh nghiệp vừa và nhỏ.",
    description:
      "GravityZone Business Security bảo vệ máy trạm, máy chủ khỏi mã độc, tấn công mạng với công nghệ machine learning, quản trị tập trung trên nền tảng đám mây.",
    price: 750000,
    licenseType: "Thuê bao (Subscription)",
    duration: "1 năm",
    seats: "1 thiết bị",
    audience: ["Doanh nghiệp nhỏ", "Doanh nghiệp vừa"],
    os: ["Windows", "macOS", "Linux"],
    rating: 4.6,
    reviewCount: 156,
    features: [
      "Công nghệ machine learning phát hiện mối đe dọa mới",
      "Quản trị tập trung trên Cloud Console",
      "Chống khai thác lỗ hổng (Exploit Defense)",
      "Bảo vệ email và chống lừa đảo",
    ],
    systemRequirements: ["Windows 10/11, macOS hoặc Linux", "RAM tối thiểu 2GB", "Kết nối Internet"],
    faqs: commonFaqs,
    createdAt: "2026-07-19",
  },
  {
    id: "prod-12",
    slug: "eset-protect-entry",
    name: "ESET PROTECT Entry",
    brand: "ESET",
    categorySlug: "antivirus",
    shortDescription: "Giải pháp bảo mật nhẹ, ổn định cho doanh nghiệp nhỏ.",
    description:
      "ESET PROTECT Entry cung cấp khả năng bảo vệ endpoint hiệu quả với mức tiêu tốn tài nguyên hệ thống thấp, phù hợp với doanh nghiệp có hạ tầng máy trạm phổ thông.",
    price: 690000,
    licenseType: "Thuê bao (Subscription)",
    duration: "1 năm",
    seats: "1 thiết bị",
    audience: ["Doanh nghiệp nhỏ"],
    os: ["Windows", "macOS"],
    rating: 4.5,
    reviewCount: 89,
    features: [
      "Tiêu tốn tài nguyên hệ thống thấp",
      "Quản trị từ xa qua ESET PROTECT Cloud",
      "Bảo vệ chống lừa đảo và ransomware",
      "Cập nhật cơ sở dữ liệu virus tự động",
    ],
    systemRequirements: ["Windows 10/11 hoặc macOS", "RAM tối thiểu 1GB", "Kết nối Internet để cập nhật"],
    faqs: commonFaqs,
    createdAt: "2026-06-05",
  },
  {
    id: "prod-13",
    slug: "adobe-acrobat-pro-dc",
    name: "Adobe Acrobat Pro DC",
    brand: "Adobe",
    categorySlug: "phan-mem-doanh-nghiep",
    shortDescription: "Tạo, chỉnh sửa và ký điện tử tài liệu PDF chuyên nghiệp.",
    description:
      "Adobe Acrobat Pro DC giúp doanh nghiệp tạo, chỉnh sửa, bảo mật và ký điện tử tài liệu PDF, tích hợp lưu trữ đám mây và làm việc trên mọi thiết bị.",
    price: 3390000,
    licenseType: "Thuê bao (Subscription)",
    duration: "1 năm",
    seats: "1 user",
    audience: ["Doanh nghiệp nhỏ", "Doanh nghiệp vừa", "Cá nhân"],
    os: ["Windows", "macOS"],
    rating: 4.6,
    reviewCount: 122,
    features: [
      "Chỉnh sửa văn bản, hình ảnh trực tiếp trong PDF",
      "Ký điện tử hợp lệ pháp lý",
      "Chuyển đổi PDF sang Word, Excel, PowerPoint",
      "Bảo mật tài liệu bằng mật khẩu và quyền truy cập",
    ],
    systemRequirements: ["Windows 10/11 hoặc macOS", "RAM tối thiểu 2GB", "Kết nối Internet để kích hoạt"],
    faqs: commonFaqs,
    createdAt: "2026-05-28",
  },
  {
    id: "prod-14",
    slug: "autodesk-autocad",
    name: "Autodesk AutoCAD",
    brand: "Autodesk",
    categorySlug: "phan-mem-doanh-nghiep",
    shortDescription: "Phần mềm thiết kế và vẽ kỹ thuật 2D/3D chuyên nghiệp.",
    description:
      "AutoCAD là công cụ thiết kế kỹ thuật tiêu chuẩn công nghiệp cho kiến trúc, xây dựng và cơ khí, hỗ trợ vẽ 2D, mô hình hóa 3D và tích hợp thư viện chi tiết kỹ thuật phong phú.",
    price: 12900000,
    originalPrice: 14500000,
    discount: 11,
    licenseType: "Thuê bao (Subscription)",
    duration: "1 năm",
    seats: "1 user",
    audience: ["Doanh nghiệp vừa", "Doanh nghiệp lớn"],
    os: ["Windows", "macOS"],
    badges: ["Giảm giá"],
    rating: 4.8,
    reviewCount: 67,
    features: [
      "Vẽ kỹ thuật 2D và mô hình hóa 3D",
      "Thư viện khối chi tiết kỹ thuật phong phú",
      "Tự động hóa bản vẽ với công cụ script",
      "Cộng tác thiết kế qua đám mây",
    ],
    systemRequirements: ["Windows 10/11 64-bit", "RAM tối thiểu 8GB", "Card đồ họa hỗ trợ DirectX 11"],
    faqs: commonFaqs,
    createdAt: "2026-02-14",
  },
  {
    id: "prod-15",
    slug: "microsoft-project-professional",
    name: "Microsoft Project Professional 2024",
    brand: "Microsoft",
    categorySlug: "phan-mem-doanh-nghiep",
    shortDescription: "Quản lý dự án, lập kế hoạch và phân bổ nguồn lực chuyên nghiệp.",
    description:
      "Microsoft Project Professional giúp đội ngũ quản lý dự án lập kế hoạch, theo dõi tiến độ, phân bổ nguồn lực và báo cáo trực quan cho các dự án quy mô vừa và lớn.",
    price: 8900000,
    licenseType: "Bản quyền vĩnh viễn",
    duration: "Vĩnh viễn",
    seats: "1 user",
    audience: ["Doanh nghiệp vừa", "Doanh nghiệp lớn"],
    os: ["Windows"],
    badges: ["Mới"],
    rating: 4.7,
    reviewCount: 29,
    features: [
      "Lập kế hoạch dự án theo phương pháp Gantt, Kanban",
      "Phân bổ và cân bằng nguồn lực tự động",
      "Báo cáo trực quan theo thời gian thực",
      "Tích hợp Microsoft Teams và SharePoint",
    ],
    systemRequirements: ["Windows 10/11", "RAM tối thiểu 4GB", "Ổ cứng trống 3GB"],
    faqs: commonFaqs,
    createdAt: "2026-08-05",
  },
  {
    id: "sol-hrm",
    slug: "giai-phap-quan-tri-nhan-su-toan-dien-hrm",
    name: "Giải Pháp Quản Trị Số Hóa Nhân Sự - HRM ETEK SOLUTION",
    brand: "ETEK SOFTS",
    categorySlug: "phan-mem-doanh-nghiep",
    shortDescription:
      "Hệ thống HRM 4.0 số hóa toàn diện chấm công FaceID, định vị GPS, tính lương 3P tự động và đánh giá hiệu suất KPI/OKR.",
    description:
      "Giải pháp HRM 4.0 được phát triển chuyên sâu cho các doanh nghiệp, tập đoàn và nhà máy sản xuất tại Việt Nam. Xóa bỏ hoàn toàn quy trình chấm công thủ công, đồng bộ dữ liệu thời gian thực từ mạng lưới máy chấm công và tự động hóa 100% công thức tính lương 3P phức tạp.",
    price: 0,
    licenseType: "Bản quyền vĩnh viễn",
    duration: "Vĩnh viễn hoặc Thuê bao",
    seats: "Không giới hạn user",
    audience: ["Doanh nghiệp nhỏ", "Doanh nghiệp vừa", "Doanh nghiệp lớn"],
    badges: ["Mới", "Bán chạy"],
    featured: true,
    rating: 4.9,
    reviewCount: 128,
    features: [
      "Đồng bộ máy chấm công vân tay, khuôn mặt AI & định vị GPS di động",
      "Tính lương 3P linh hoạt theo công thức động, tự động khấu trừ thuế & bảo hiểm",
      "Quy trình phê duyệt đơn từ (nghỉ phép, công tác, tăng ca) tức thì qua App",
      "Đánh giá hiệu suất nhân sự, quản trị mục tiêu KPI / OKR đa cấp bậc",
      "Cổng thông tin nhân viên tự phục vụ (Self-Service Mobile App)",
    ],
    systemRequirements: [
      "Triển khai linh hoạt trên Cloud Server hoặc Hạ tầng On-Premise nội bộ",
      "Hỗ trợ trình duyệt Web hiện đại (Chrome, Edge, Safari)",
      "App di động tương thích iOS 14+ và Android 10+",
    ],
    faqs: [
      {
        question: "Hệ thống HRM có kết nối được với các máy chấm công có sẵn của công ty không?",
        answer:
          "Có. Hệ thống ETEK HRM hỗ trợ tích hợp với hơn 100+ dòng máy chấm công phổ biến hiện nay (Ronald Jack, ZKTeco, Hikvision, Suprema...) qua kết nối mạng LAN hoặc Real-time Cloud API.",
      },
      {
        question: "Doanh nghiệp có nhiều ca kíp phức tạp (ca gãy, ca đêm, xoay ca) thì phần mềm xử lý thế nào?",
        answer:
          "Hệ thống được thiết kế chuyên biệt cho nhà máy và chuỗi bán lẻ, cho phép thiết lập không giới hạn ca làm việc, tự động nhận diện ca theo giờ check-in và tính đúng hệ số tăng ca đêm/lễ theo luật lao động.",
      },
      {
        question: "Thời gian triển khai và bàn giao phần mềm HRM mất bao lâu?",
        answer:
          "Thời gian triển khai trung bình từ 1 đến 3 tuần tùy thuộc vào quy mô nhân sự và độ phức tạp của quy chế lương thưởng. ETEK Softs đồng hành hỗ trợ chạy thử nghiệm song song ít nhất 2 kỳ lương trước khi Golive.",
      },
      {
        question: "Dữ liệu thông tin lương và nhân sự có được bảo mật không?",
        answer:
          "Hệ thống đạt chuẩn an toàn thông tin, dữ liệu được mã hóa đa tầng SSL/TLS 256-bit, phân quyền truy cập chi tiết đến từng trường thông tin và tự động sao lưu định kỳ hàng ngày.",
      },
    ],
    createdAt: "2026-09-01",
    isSolution: true,
    solutionBadge: "HRM 360° ENTERPRISE",
    solutionTagline:
      "Nền tảng số hóa quản trị nhân sự toàn diện: Chuẩn hóa dữ liệu Employee Master, Chấm công quy tắc thông minh, Tính lương Gross-to-Net 10 bước và Tuân thủ pháp lý Việt Nam 2026.",
    solutionHeroMetrics: [
      { value: "85%", label: "Tiết kiệm thời gian", sub: "Chốt công & tính lương Gross-to-Net" },
      { value: "100%", label: "Tuân thủ pháp lý 2026", sub: "Luật BHXH 2024, Thuế TNCN 2026" },
      { value: "99.9%", label: "Độ chính xác dữ liệu", sub: "Audit trail & Segregation of Duties" },
    ],
    solutionModules: [
      {
        title: "Core HR & Quản trị Master Data Tổ chức",
        subtitle: "Hồ sơ sự thật • Effective Dating • Job Architecture",
        description:
          "Quản lý vòng đời nhân sự tập trung, phân biệt rõ Legal Entity, Business Unit, Department, Job và Position. Hỗ trợ dữ liệu có ngày hiệu lực (Effective dating) và lịch sử biến động không ghi đè.",
        icon: "Users",
        highlightBadge: "Nền tảng chuẩn hóa",
        features: [
          "Quản lý hồ sơ sự thật (Employee Master) và quan hệ lao động đa pháp nhân",
          "Effective Dating: Truy vấn dữ liệu quá khứ, hiện tại và tương lai theo mốc thời gian",
          "Job-based & Position-based: Định biên nhân sự chặt chẽ, kiểm soát headcount và ngân sách",
          "Số hóa hợp đồng lao động, phụ lục, cảnh báo hết hạn và tích hợp chữ ký số",
        ],
      },
      {
        title: "Chấm công Thông minh & Quy tắc Ca kíp",
        subtitle: "Time & Attendance • AI FaceID • Exception Management",
        description:
          "Hệ thống Rule Engine xử lý chuyên sâu 6 mô hình ca kíp (ca xoay, ca đêm qua ngày, ca gãy, flexible). Tách biệt Raw Punch và Attendance Fact giúp kiểm soát ngoại lệ minh bạch.",
        icon: "Clock",
        highlightBadge: "Rule Engine",
        features: [
          "Đồng bộ thời gian thực từ 100+ dòng máy chấm công vân tay, khuôn mặt AI & GPS Mobile App",
          "Xử lý ca phức tạp: ca qua ngày (overnight shift), grace period, làm tròn, ghép cặp IN/OUT",
          "Exception Management: Quản lý quên chấm công, đi trễ, làm ngoài giờ với SLA và giải trình rõ ràng",
          "Khóa kỳ công (Lock Attendance) đảm bảo dữ liệu ổn định và bất biến trước khi đẩy sang Payroll",
        ],
      },
      {
        title: "Quản lý Nghỉ phép & Vắng mặt (Leave Management)",
        subtitle: "Đa mô hình Entitlement • Leave Balance Equation",
        description:
          "Thiết lập chính sách nghỉ phép linh hoạt theo 4 mô hình: Upfront, Accrual, Tenure-based và Event-based. Tự động tính toán số dư phép, carry-over và liên thông bảng lương.",
        icon: "Calendar",
        highlightBadge: "Tự động tính phép",
        features: [
          "Công thức cân bằng số dư: Opening + Accrued + Granted - Taken - Reserved - Expired",
          "Hỗ trợ nghỉ phép theo ngày, nửa ngày, giờ; kiểm soát thời gian báo trước và blackout period",
          "Tự động tính thâm niên cộng thêm phép và chính sách chuyển phép thừa sang năm sau",
          "Lịch nghỉ toàn team (Capacity View) giúp trưởng bộ phận chủ động điều phối nhân sự",
        ],
      },
      {
        title: "Tính lương Gross-to-Net 10 Bước (Payroll Engine)",
        subtitle: "Quy trình tài chính chuẩn • Segregation of Duties (SoD)",
        description:
          "Pipeline tính lương tự động từ dữ liệu cố định, biến động và công/phép. Tích hợp cơ chế kiểm soát chéo (Maker-Checker), kiểm tra phương sai (Variance Check) và đối soát kế toán.",
        icon: "Calculator",
        highlightBadge: "Gross-to-Net",
        features: [
          "Quy trình Payroll Runbook 10 bước: Từ Freeze snapshot, Validation, Calculate đến Lock & Payslip",
          "Xử lý Proration khi nhân viên vào/ra giữa kỳ và tính truy thu/truy lĩnh (Retroactive Delta)",
          "Phân tách nhiệm vụ (SoD): Người lập bảng lương không đồng thời là người phê duyệt thanh toán",
          "Tự động xuất bảng phân bổ lương kế toán (GL Interface) và file chi lương tự động qua Ngân hàng",
        ],
      },
      {
        title: "Tuân thủ Pháp lý & Thuế Việt Nam 2026 (Compliance)",
        subtitle: "Cập nhật Luật BHXH 2024, BHYT & Thuế TNCN mới",
        description:
          "Kiến trúc Compliance-by-Design tích hợp sẵn các quy định pháp luật lao động hiện hành và các văn bản hiệu lực mới nhất năm 2026 tại Việt Nam.",
        icon: "ShieldCheck",
        highlightBadge: "Chuẩn luật 2026",
        features: [
          "Luật BHXH 41/2024/QH15 & NĐ 158/2025/NĐ-CP: Tự động trích nộp và lập hồ sơ đối soát bảo hiểm",
          "Nghị định 293/2025/NĐ-CP: Tự động gắn Location kiểm tra ngưỡng lương tối thiểu 4 vùng",
          "Luật Thuế TNCN 109/2025: Cập nhật mức giảm trừ bản thân 15,5 triệu và người phụ thuộc 6,2 triệu/tháng",
          "Tuân thủ Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 & Luật An ninh mạng 116/2025/QH15",
        ],
      },
      {
        title: "Luồng Phê duyệt & Quản trị Vụ việc (Workflow & Case)",
        subtitle: "7 approval patterns • 9 workflow states • SLA",
        description:
          "Chuyển quy định thành quy trình số: Phê duyệt tuần tự, song song, có điều kiện (conditional), ma trận hoặc hội đồng. Quản trị các vụ việc khiếu nại (Case management) có SLA.",
        icon: "Layers",
        highlightBadge: "Dynamic Route",
        features: [
          "Hỗ trợ 7 mô hình approval: Single, Sequential, Parallel, Conditional, Dynamic hierarchy, Maker-checker",
          "Mô hình 9 trạng thái (Draft, Submitted, In Review, Returned, Approved, Rejected, Executed...)",
          "Ủy quyền phê duyệt (Delegation) có thời hạn, cảnh báo quá hạn SLA và tự động chuyển cấp (Escalation)",
          "HR Case Management: Quản lý giải quyết khiếu nại lương, kỷ luật, tranh chấp lao động theo ticket",
        ],
      },
      {
        title: "Tuyển dụng ATS & Hội nhập Onboarding 30-60-90",
        subtitle: "Candidate Pipeline • Scorecard • Offboarding 7 Workstreams",
        description:
          "Số hóa phễu tuyển dụng từ Requisition, Screening đến Phỏng vấn theo Scorecard và Thư mời nhận việc. Quy trình hội nhập 30-60-90 ngày và thủ tục nghỉ việc đồng bộ IAM/SSO.",
        icon: "GraduationCap",
        highlightBadge: "Talent Acquisition",
        features: [
          "Applicant Tracking System (ATS): Quản lý ứng viên theo stage, đo lường Time-to-hire và Conversion rate",
          "Phiếu đánh giá phỏng vấn (Scorecard) chuẩn hóa theo khung năng lực, tránh thiên vị chủ quan",
          "Onboarding Blueprint 30-60-90 ngày: Tự động phân công nhiệm vụ cho HR, IT, Admin và Quản lý",
          "Offboarding an toàn: Phối hợp 7 luồng công việc (Bàn giao, Thu hồi thiết bị, Khóa tài khoản IAM, Quyết toán lương)",
        ],
      },
      {
        title: "Quản trị Hiệu suất & Mục tiêu KPI / OKR",
        subtitle: "Continuous Performance • 360 Review • Calibration",
        description:
          "Thiết lập chu kỳ quản trị hiệu suất liên tục (Check-in 1:1, Feedback, Ghi nhận) kết hợp đánh giá định kỳ theo KPI/OKR và phiên hiệu chuẩn (Calibration) khách quan.",
        icon: "Award",
        highlightBadge: "Năng suất liên tục",
        features: [
          "Phân định rõ KPI (chỉ số đo lường lặp lại) và OKR (mục tiêu định tính & kết quả then chốt thách thức)",
          "Khung đánh giá hành vi (Behavioral Anchors) theo thang điểm 5 mức, phân biệt rõ Kết quả và Tiềm năng",
          "Phiên hiệu chuẩn (Calibration Panel): Chuẩn hóa phân phối điểm giữa các phòng ban, lưu vết audit",
          "Liên kết trực tiếp kết quả hiệu suất với quy hoạch nhân tài và quỹ thưởng hiệu quả kinh doanh",
        ],
      },
      {
        title: "Chế độ Đãi ngộ (C&B) & Quy hoạch Nhân tài 9-Box",
        subtitle: "Salary Range • Compa-ratio • Kế thừa Critical Roles",
        description:
          "Xây dựng cấu trúc lương ngạch bậc, dải lương (Pay Range), đo lường chỉ số định vị Compa-ratio và ma trận 9-Box xác định nhân sự kế thừa cho các vị trí trọng yếu.",
        icon: "Coins",
        highlightBadge: "Total Rewards",
        features: [
          "Cấu trúc ngạch bậc lương: Quản trị Min - Midpoint - Max của từng Band và kiểm soát ngoại lệ vượt khung",
          "Quy trình xét tăng lương hàng năm (Salary Review Cycle): Quản lý ngân sách (Budget pool) và mô phỏng chi phí",
          "Ma trận 9-Box: Đánh giá tiềm năng và hiệu suất giúp xây dựng lộ trình phát triển nhân tài kế cận",
          "Báo cáo phân tích công bằng thu nhập (Pay Equity) và biến động chi phí nhân công theo thời gian",
        ],
      },
      {
        title: "Cổng Tự Phục Vụ Đa Persona (ESS & MSS)",
        subtitle: "Mobile App cho Nhân viên & Portal cho Cấp Quản lý",
        description:
          "Chuyển giao dịch nhân sự từ thủ công sang tự phục vụ. Thiết kế trải nghiệm chuyên biệt cho 5 nhóm người dùng: Nhân viên, Trưởng bộ phận, HR Admin, Payroll và Ban Lãnh Đạo.",
        icon: "Building",
        highlightBadge: "Mobile Self-Service",
        features: [
          "Mobile App cho Nhân viên: Tra cứu phiếu lương bảo mật, số dư phép, đăng ký nghỉ và đổi ca chỉ với 3 chạm",
          "Giao diện Quản lý (MSS): Xem lịch trực của team, phê duyệt đơn từ tức thì và nhận thông báo biến động",
          "HR Admin Console: Công cụ bảo trì dữ liệu hàng loạt (Bulk actions) và giám sát chất lượng dữ liệu",
          "Executive Dashboard: Ban Giám Đốc theo dõi trực tiếp Headcount, tỷ lệ Turnover và chi phí quỹ lương",
        ],
      },
      {
        title: "Trí Tuệ Nhân Tạo AI Copilot trong HRM",
        subtitle: "HR Knowledge Copilot • CV Parsing • Payroll Anomaly",
        description:
          "Tích hợp AI với cơ chế Human-in-the-loop, bảo mật và kiểm soát thiên vị. Tự động hóa tác vụ lặp lại và hỗ trợ ra quyết định nhân sự chuẩn xác.",
        icon: "Cpu",
        highlightBadge: "AI 2026",
        features: [
          "HR Knowledge Copilot: Trợ lý AI trả lời tức thì câu hỏi của nhân viên về chính sách, nội quy và quy chế lương",
          "Bóc tách hồ sơ CV thông minh: Tự động trích xuất thông tin ứng viên, kỹ năng và kinh nghiệm vào hệ thống ATS",
          "Payroll Anomaly Detection: Tự động phát hiện biến động lương bất thường, chênh lệch công trước khi chốt sổ",
          "Tuân thủ AI Governance: Dữ liệu nhân sự được ẩn danh (De-identification) và có ghi vết Prompt/Output Audit",
        ],
      },
      {
        title: "Kiến trúc Tích hợp Mở & Bảo mật Enterprise",
        subtitle: "API Gateway • Single Source of Truth • RBAC & SoD",
        description:
          "Mô hình tích hợp đa hệ thống tham chiếu: Kết nối máy chấm công phần cứng, phần mềm ERP/Kế toán, Ngân hàng và hệ thống định danh Single Sign-On (SSO/IAM).",
        icon: "LineChart",
        highlightBadge: "Tích hợp mở",
        features: [
          "Định nghĩa Source of Truth rõ ràng cho từng miền dữ liệu: Core HR sở hữu Employee Master, Kế toán sở hữu Cost Center",
          "Hỗ trợ đa dạng phương thức kết nối: Real-time RESTful API, Webhook sự kiện và Secure File Transfer (SFTP)",
          "Bảo mật đa tầng: Phân quyền vai trò kết hợp phạm vi tổ chức (RBAC + Org Scope) và che dấu trường dữ liệu nhạy cảm",
          "Audit Trail toàn diện: Ghi lại lịch sử Ai, Làm gì, Vào lúc nào, Dữ liệu trước/sau cho mọi giao dịch tài chính",
        ],
      },
    ],
    solutionProcess: [
      {
        step: 1,
        title: "Khảo sát Nghiệp vụ & Đánh giá Hiện trạng",
        subtitle: "Khảo sát quy chế lương & mô hình phân ca",
        duration: "3 - 5 ngày",
        description:
          "Chuyên gia ETEK Softs trực tiếp làm việc với Ban Giám Đốc và phòng Nhân sự để khảo sát bảng lương thực tế, quy chế công và các yêu cầu đặc thù.",
        deliverables: [
          "Biên bản khảo sát nghiệp vụ chi tiết",
          "Tài liệu đặc tả giải pháp phần mềm (SRS)",
          "Kế hoạch triển khai tổng thể và cam kết tiến độ",
        ],
      },
      {
        step: 2,
        title: "Chuẩn hóa Dữ liệu & Cấu hình Hệ thống",
        subtitle: "Thiết lập công thức lương & phân quyền",
        duration: "5 - 7 ngày",
        description:
          "Cấu hình hệ thống theo quy chế của doanh nghiệp: thiết lập ca kíp, công thức tính lương 3P, quy tắc tính phép và làm sạch dữ liệu nhân sự cũ để import.",
        deliverables: [
          "Hệ thống HRM hoàn thiện cấu hình ban đầu",
          "Cơ sở dữ liệu nhân sự được làm sạch và import đầy đủ",
          "Bộ công thức tính lương mẫu đã được kiểm thử",
        ],
      },
      {
        step: 3,
        title: "Tích hợp Máy Chấm Công & Chạy Thử Nghiệm",
        subtitle: "Kết nối phần cứng & đối soát song song (UAT)",
        duration: "7 - 10 ngày",
        description:
          "Kết nối hạ tầng máy chấm công, camera AI FaceID và chạy đối soát số liệu công, lương song song với phương pháp quản lý cũ trong 1 kỳ lương.",
        deliverables: [
          "Hạ tầng máy chấm công kết nối dữ liệu thông suốt",
          "Báo cáo đối chiếu số liệu bảng lương chạy thử",
          "Biên bản nghiệm thu chạy thử nghiệm (UAT)",
        ],
      },
      {
        step: 4,
        title: "Đào tạo Người Dùng & Bàn giao Tài liệu",
        subtitle: "Tập huấn chuyên sâu cho Nhân sự và Nhân viên",
        duration: "3 - 5 ngày",
        description:
          "Tổ chức các buổi đào tạo trực tiếp và qua video cho bộ phận C&B, ban quản lý ca kíp và hướng dẫn toàn bộ nhân viên cài đặt App di động.",
        deliverables: [
          "Bộ tài liệu và video hướng dẫn sử dụng chi tiết",
          "100% cán bộ nhân sự thao tác thành thạo",
          "Cấp tài khoản sử dụng cho toàn thể cán bộ công nhân viên",
        ],
      },
      {
        step: 5,
        title: "Vận hành Chính thức (Go-Live) & Hỗ trợ 24/7",
        subtitle: "Đồng hành xuyên suốt các kỳ chốt lương",
        duration: "Đồng hành liên tục",
        description:
          "Hệ thống chính thức đưa vào vận hành thực tế. Đội ngũ kỹ thuật ETEK Softs trực tiếp túc trực hỗ trợ trong ít nhất 2 kỳ chốt lương đầu tiên.",
        deliverables: [
          "Biên bản nghiệm thu Golive chính thức",
          "Kênh hotline kỹ thuật hỗ trợ riêng biệt 24/7",
          "Cam kết bảo hành, nâng cấp tính năng định kỳ",
        ],
      },
    ],
    solutionBenefits: [
      {
        metric: "85%",
        title: "Tự động hóa tính lương",
        description: "Rút ngắn thời gian chốt công và lập bảng lương từ 5 ngày xuống chỉ còn 2 giờ.",
        tag: "Tiết kiệm thời gian",
      },
      {
        metric: "100%",
        title: "Minh bạch công bằng",
        description: "Nhân viên tự kiểm tra ngày công và bảng lương trên App, loại bỏ hoàn toàn khiếu nại.",
        tag: "Nâng cao gắn kết",
      },
      {
        metric: "0%",
        title: "Rủi ro sai số dữ liệu",
        description: "Công thức toán học tự động hóa chính xác và minh bạch, tránh thất thoát ngân sách doanh nghiệp.",
        tag: "Chuẩn xác 100%",
      },
      {
        metric: "360°",
        title: "Quản trị tức thời",
        description: "Ban lãnh đạo nắm bắt biến động chi phí nhân sự và năng suất lao động trong 1 cú click.",
        tag: "Ra quyết định nhanh",
      },
    ],
  },
  {
    id: "sol-erp",
    slug: "giai-phap-quan-tri-doanh-nghiep-tong-the-erp",
    name: "Giải Pháp Quản Trị Doanh Nghiệp Tổng Thể ERP",
    brand: "ETEK SOFTS",
    categorySlug: "phan-mem-doanh-nghiep",
    shortDescription:
      "Hệ thống ERP hợp nhất toàn diện Tài chính Kế toán, Mua hàng, Bán hàng, Kho vận, Sản xuất và Báo cáo BI thông minh.",
    description:
      "Giải pháp ERP thông minh giúp doanh nghiệp loại bỏ các 'ốc đảo dữ liệu', đồng bộ hóa toàn bộ dòng chảy công việc từ đơn hàng, mua sắm nguyên vật liệu, điều độ sản xuất đến kế toán tài chính trên một cơ sở dữ liệu duy nhất.",
    price: 0,
    licenseType: "Bản quyền vĩnh viễn",
    duration: "Vĩnh viễn hoặc Thuê bao",
    seats: "Không giới hạn user",
    audience: ["Doanh nghiệp vừa", "Doanh nghiệp lớn"],
    badges: ["Mới", "Phổ biến"],
    featured: true,
    rating: 4.9,
    reviewCount: 96,
    features: [
      "Kế toán tài chính & Quản trị dòng tiền chuẩn mực VAS & IFRS",
      "Quản lý Bán hàng đa kênh, CRM và quản trị đơn hàng liên thông",
      "Quản lý Mua hàng & Chuỗi cung ứng (SCM) tự động đề xuất",
      "Quản lý Kho vận đa điểm thông minh với mã vạch Barcode / QR Code",
      "Quản lý Sản xuất, Định mức BOM, Hoạch định nhu cầu MRP",
      "Dashboard BI & Báo cáo trực quan theo thời gian thực cho Ban Giám Đốc",
    ],
    systemRequirements: [
      "Hạ tầng Private Cloud hoặc Local Data Center doanh nghiệp",
      "Hỗ trợ đa nền tảng: Web Browser, Windows App và Mobile App",
      "Bảo mật kết nối SSL/TLS và VPN nội bộ",
    ],
    faqs: [
      {
        question: "Hệ thống ERP của ETEK Softs có thể tùy biến theo quy trình riêng của doanh nghiệp không?",
        answer:
          "Hoàn toàn có thể. Kiến trúc ETEK ERP được phát triển theo dạng module hóa linh hoạt và có đội ngũ kỹ sư trực tiếp khảo sát, lập trình tùy biến theo đặc thù từng ngành nghề (sản xuất, thương mại phân phối, dịch vụ...).",
      },
      {
        question: "Dữ liệu từ phần mềm kế toán cũ có được chuyển sang ERP không?",
        answer:
          "Có. ETEK Softs cung cấp công cụ tự động làm sạch và di chuyển toàn bộ danh mục hàng hóa, khách hàng, số dư công nợ và sổ cái tài chính lịch sử sang hệ thống mới trọn vẹn.",
      },
      {
        question: "Hệ thống có tích hợp được hóa đơn điện tử và ngân hàng số không?",
        answer:
          "Có. ETEK ERP tích hợp sẵn với tất cả các nhà cung cấp hóa đơn điện tử lớn (VNPT, Viettel, MISA, BKAV) và cổng thanh toán ngân hàng số để tự động phát hành hóa đơn và đối soát thanh toán tức thì.",
      },
      {
        question: "Chi phí triển khai ERP được tính như thế nào?",
        answer:
          "Chi phí được tính dựa trên số lượng phân hệ (modules) doanh nghiệp lựa chọn và mức độ tùy biến nghiệp vụ. ETEK Softs cung cấp báo giá minh bạch trọn gói, không phát sinh chi phí ẩn.",
      },
    ],
    createdAt: "2026-09-02",
    isSolution: true,
    solutionBadge: "ERP INTELLIGENT CLOUD",
    solutionTagline:
      "Hợp nhất toàn bộ hoạt động Kế toán, Mua hàng, Bán hàng, Kho vận và Sản xuất trên một nền tảng dữ liệu số thời gian thực.",
    solutionHeroMetrics: [
      { value: "40%", label: "Cắt giảm chi phí vận hành", sub: "Tối ưu nguồn lực toàn diện" },
      { value: "98%", label: "Chuẩn xác tồn kho", sub: "Kiểm soát số liệu thời gian thực" },
      { value: "100%", label: "Chuẩn mực VAS & IFRS", sub: "Tích hợp hóa đơn & thuế điện tử" },
    ],
    solutionModules: [
      {
        title: "Kế toán Tài chính & Quản trị Dòng tiền",
        subtitle: "Chuẩn mực VAS & IFRS, hóa đơn điện tử",
        description:
          "Tự động hạch toán các nghiệp vụ kinh tế phát sinh, lập báo cáo tài chính, báo cáo quản trị nội bộ và liên thông cơ quan thuế.",
        icon: "Coins",
        highlightBadge: "Chuẩn Bộ Tài Chính",
        features: [
          "Sổ cái, sổ nhật ký chung, quản lý tài sản cố định và chi phí trích trước",
          "Tự động phát hành, quản lý và đối soát hóa đơn điện tử VAT",
          "Dự báo dòng tiền thu/chi thông minh theo chu kỳ kinh doanh",
          "Báo cáo tài chính đa chi nhánh, hợp nhất báo cáo tập đoàn mẹ - con",
        ],
      },
      {
        title: "Quản lý Bán hàng & Chăm sóc Khách hàng (CRM)",
        subtitle: "Từ phễu cơ hội đến hợp đồng và doanh thu",
        description:
          "Quản lý dữ liệu khách hàng 360 độ, theo dõi phễu bán hàng, tự động tạo báo giá, hợp đồng và theo dõi công nợ phải thu chặt chẽ.",
        icon: "TrendingUp",
        highlightBadge: "Tăng trưởng doanh số",
        features: [
          "Quản lý thông tin khách hàng tiềm năng và lịch sử tương tác đa kênh",
          "Thiết lập chính sách giá, chiết khấu và khuyến mãi linh hoạt",
          "Theo dõi trạng thái đơn hàng từ xuất kho đến giao nhận và thanh toán",
          "Phân tích doanh số theo nhân viên kinh doanh, khu vực và dòng sản phẩm",
        ],
      },
      {
        title: "Quản lý Mua hàng & Chuỗi Cung ứng (SCM)",
        subtitle: "Tối ưu hóa chi phí đầu vào",
        description:
          "Tự động lập kế hoạch mua sắm dựa trên nhu cầu sản xuất và mức tồn kho an toàn, quản lý đánh giá nhà cung cấp minh bạch.",
        icon: "Truck",
        highlightBadge: "Tối ưu cung ứng",
        features: [
          "Tự động đề xuất đơn mua hàng theo định mức tồn kho tối thiểu",
          "So sánh báo giá các nhà cung cấp và phê duyệt đơn mua đa cấp",
          "Theo dõi tiến độ giao hàng và quản lý công nợ nhà cung cấp",
          "Kiểm soát chặt chẽ chất lượng hàng hóa nhập kho (IQC)",
        ],
      },
      {
        title: "Quản lý Kho vận & Barcode / QR Code",
        subtitle: "Kiểm soát tồn kho thời gian thực",
        description:
          "Quản lý xuất nhập tồn đa địa điểm theo phương pháp FIFO/LIFO, quản lý theo số lô (Lot) và hạn sử dụng (Expiry Date) bằng mã vạch thông minh.",
        icon: "Boxes",
        highlightBadge: "Kho thông minh",
        features: [
          "Quản lý mạng lưới kho đa địa điểm, kho đại lý và điều chuyển kho tức thì",
          "Quét mã vạch Barcode/QR Code bằng máy PDA hoặc điện thoại di động",
          "Cảnh báo hàng tồn dưới định mức an toàn và hàng cận hạn sử dụng",
          "Kiểm kê kho định kỳ nhanh chóng mà không làm gián đoạn kinh doanh",
        ],
      },
      {
        title: "Quản lý Sản xuất & Hoạch định Nhu cầu (MRP)",
        subtitle: "Định mức BOM & Điều độ kế hoạch sản xuất",
        description:
          "Quản lý định mức nguyên vật liệu (BOM), lập kế hoạch sản xuất chi tiết theo lệnh, theo dõi tiến độ gia công xưởng và tính giá thành sản phẩm chính xác.",
        icon: "Cpu",
        highlightBadge: "Tự động hóa sản xuất",
        features: [
          "Quản lý định mức BOM đa cấp và quản lý phiên bản thay đổi kỹ thuật",
          "Hoạch định nhu cầu nguyên vật liệu tự động theo đơn đặt hàng",
          "Theo dõi tiến độ từng công đoạn tại xưởng sản xuất theo thời gian thực",
          "Tự động tập hợp chi phí nguyên vật liệu, nhân công và tính giá thành",
        ],
      },
      {
        title: "Dashboard BI & Báo cáo Điều hành Lãnh đạo",
        subtitle: "Dữ liệu quản trị tức thời cho CEO",
        description:
          "Cung cấp biểu đồ trực quan, phân tích đa chiều về doanh thu, chi phí, biên lợi nhuận và hiệu quả vận hành cập nhật tức thời theo giây.",
        icon: "LineChart",
        highlightBadge: "Business Intelligence",
        features: [
          "Dashboard trực quan hiển thị các chỉ số KPI doanh nghiệp cốt lõi",
          "Cảnh báo sớm các rủi ro về tồn kho ứ đọng, công nợ xấu và dòng tiền",
          "Truy xuất dữ liệu chi tiết dạng drill-down từ tổng quan đến chứng từ",
          "Xem báo cáo mọi lúc, mọi nơi trên máy tính bảng và điện thoại di động",
        ],
      },
    ],
    solutionProcess: [
      {
        step: 1,
        title: "Khảo sát Nghiệp vụ & Tư vấn Kiến trúc",
        subtitle: "Thấu hiểu chuỗi giá trị doanh nghiệp",
        duration: "1 - 2 tuần",
        description:
          "Đội ngũ chuyên gia ETEK Softs khảo sát thực địa từng phòng ban, đánh giá dòng chảy dữ liệu và đề xuất mô hình kiến trúc ERP tổng thể Blueprint.",
        deliverables: [
          "Báo cáo đánh giá quy trình nghiệp vụ hiện tại",
          "Tài liệu thiết kế kiến trúc giải pháp tổng thể Blueprint",
          "Kế hoạch phân bổ nguồn lực và tiến độ triển khai chi tiết",
        ],
      },
      {
        step: 2,
        title: "Thiết kế & Tùy biến Hệ thống (Customization)",
        subtitle: "May đo theo chuẩn mực đặc thù của doanh nghiệp",
        duration: "2 - 4 tuần",
        description:
          "Cấu hình các phân hệ nghiệp vụ, lập trình các tính năng tùy biến và thiết kế các mẫu biểu báo cáo theo đặc thù văn hóa doanh nghiệp.",
        deliverables: [
          "Hệ thống ERP phiên bản cấu hình ban đầu",
          "Tài liệu đặc tả các giao diện tích hợp phần mềm phụ trợ",
          "Bộ mẫu biểu báo cáo quản trị nội bộ hoàn chỉnh",
        ],
      },
      {
        step: 3,
        title: "Chuyển đổi Dữ liệu & Chạy Thử nghiệm (UAT)",
        subtitle: "Bảo đảm tính toàn vẹn và khớp đúng của dữ liệu",
        duration: "2 - 3 tuần",
        description:
          "Làm sạch và di chuyển dữ liệu từ hệ thống cũ sang ERP. Vận hành quy trình mô phỏng các nghiệp vụ thực tế liên phòng ban.",
        deliverables: [
          "Dữ liệu lịch sử đã được chuyển đổi an toàn và chuẩn hóa",
          "Kịch bản kiểm thử tích hợp liên phòng ban",
          "Biên bản nghiệm thu chạy thử quy trình (UAT)",
        ],
      },
      {
        step: 4,
        title: "Đào tạo & Chuyển giao Tri thức Toàn diện",
        subtitle: "Trang bị kỹ năng thực chiến cho đội ngũ nhân sự",
        duration: "1 - 2 tuần",
        description:
          "Đào tạo chuyên sâu cho đội ngũ hạt nhân (Key Users) và người dùng cuối (End Users) theo từng kịch bản nghiệp vụ cụ thể.",
        deliverables: [
          "Giáo trình đào tạo phân quyền theo từng vai trò",
          "Chứng chỉ hoàn thành khóa tập huấn cho Key Users",
          "Cẩm nang tra cứu và xử lý sự cố thường gặp (SOP)",
        ],
      },
      {
        step: 5,
        title: "Go-Live Vận hành & Bảo trì Đồng hành",
        subtitle: "Bảo chứng thành công của dự án chuyển đổi số",
        duration: "Đồng hành lâu dài",
        description:
          "Cắt chuyển chính thức sang hệ thống mới. ETEK Softs trực tiếp túc trực tại doanh nghiệp hỗ trợ cho kỳ khóa sổ đầu tiên.",
        deliverables: [
          "Biên bản ký kết Golive hệ thống chính thức",
          "Quy trình hỗ trợ kỹ thuật và bảo trì SLA định kỳ",
          "Lộ trình nâng cấp và mở rộng tính năng theo sự phát triển",
        ],
      },
    ],
    solutionBenefits: [
      {
        metric: "40%",
        title: "Tối ưu chi phí vận hành",
        description: "Loại bỏ hoàn toàn công việc nhập liệu trùng lặp và các chi phí phát sinh do sai sót giữa các bộ phận.",
        tag: "Cắt giảm chi phí",
      },
      {
        metric: "100%",
        title: "Dữ liệu liên thông tức thời",
        description: "Mọi phòng ban dùng chung 1 nguồn dữ liệu duy nhất, thông tin tài chính - kho - bán hàng đồng bộ tức thì.",
        tag: "Hợp nhất thông tin",
      },
      {
        metric: "98%",
        title: "Kiểm soát tồn kho chính xác",
        description: "Giảm lượng hàng tồn đọng vô ích, quay vòng vốn lưu động nhanh hơn nhờ dự báo nhu cầu chính xác.",
        tag: "Quản trị vốn tối ưu",
      },
      {
        metric: "24/7",
        title: "Ra quyết định chiến lược",
        description: "Lãnh đạo theo dõi báo cáo lãi lỗ, sức khỏe tài chính trực tiếp mọi lúc mọi nơi từ điện thoại.",
        tag: "Nâng cao quản trị",
      },
    ],
  },
  {
    id: "sol-sgis",
    slug: "giai-phap-quan-ly-tong-the-benh-vien",
    name: "Giải Pháp Quản Lý Y Tế & Bệnh Viện Thông Minh SGIS",
    brand: "ETEK SOFTS",
    categorySlug: "phan-mem-doanh-nghiep",
    shortDescription:
      "Hệ thống thông tin bệnh viện thông minh HIS, EMR, LIS, PACS liên thông cổng giám định BHYT Quốc gia.",
    description:
      "Nền tảng quản lý tổng thể bệnh viện và phòng khám đa khoa SGIS đạt chuẩn Bộ Y tế. Số hóa toàn diện quy trình tiếp đón, khám bệnh, cận lâm sàng, hồ sơ bệnh án điện tử và quản trị viện phí thông minh.",
    price: 0,
    licenseType: "Bản quyền vĩnh viễn",
    duration: "Vĩnh viễn hoặc Thuê bao",
    seats: "Không giới hạn user",
    audience: ["Doanh nghiệp vừa", "Doanh nghiệp lớn"],
    badges: ["Mới"],
    featured: false,
    rating: 4.8,
    reviewCount: 42,
    features: [
      "Quản lý tiếp đón thông minh qua thẻ CCCD gắn chip & VNeID",
      "Liên thông trực tiếp cổng giám định viện phí BHYT Bộ Y tế",
      "Hồ sơ bệnh án điện tử (EMR) không giấy tờ",
      "Tích hợp hệ thống xét nghiệm (LIS) và chẩn đoán hình ảnh (PACS)",
      "Quản trị kho dược, thuốc và vật tư y tế chống thất thoát",
    ],
    systemRequirements: [
      "Hạ tầng máy chủ bệnh viện nội bộ hoặc Cloud chuyên biệt ngành y tế",
      "Hệ điều hành Windows / Linux Server",
      "Kết nối liên thông cổng BHYT Bộ Y tế",
    ],
    faqs: [
      {
        question: "Phần mềm SGIS có đáp ứng tiêu chí Bệnh viện thông minh của Bộ Y tế không?",
        answer:
          "Có. SGIS được thiết kế theo đúng Thông tư 46/2018/TT-BYT và Thông tư 54/2017/TT-BYT quy định về hồ sơ bệnh án điện tử và tiêu chí ứng dụng CNTT tại các cơ sở khám chữa bệnh.",
      },
      {
        question: "Phần mềm có liên thông trực tiếp với cổng BHYT không?",
        answer:
          "Có. Hệ thống tự động trích xuất XML và đối soát trực tiếp với Cổng tiếp nhận dữ liệu Giám định BHYT Quốc gia theo đúng chuẩn 4210 và 130 của Bộ Y tế.",
      },
    ],
    createdAt: "2026-09-03",
    isSolution: true,
    solutionBadge: "TIÊU CHUẨN BỘ Y TẾ",
    solutionTagline:
      "Hệ thống thông tin quản lý tổng thể bệnh viện và phòng khám thông minh 4.0 liên thông BHYT Quốc gia.",
    solutionHeroMetrics: [
      { value: "60+", label: "Bệnh viện & Phòng khám", sub: "Triển khai toàn quốc" },
      { value: "-45%", label: "Thời gian chờ khám", sub: "Tiếp đón thông minh" },
      { value: "100%", label: "Quyết toán BHYT", sub: "Chuẩn hóa dữ liệu XML" },
    ],
    solutionModules: [
      {
        title: "Tiếp đón Bệnh nhân & Khám Ngoại trú",
        subtitle: "Tích hợp CCCD gắn chip & VNeID",
        description:
          "Tự động lấy thông tin từ CCCD gắn chip, tra cứu thẻ BHYT trực tuyến, phân luồng phòng khám thông minh.",
        icon: "Building",
        highlightBadge: "Tiếp đón thông minh",
        features: [
          "Quét mã QR CCCD và VNeID trong 1 giây",
          "Tra cứu giá trị sử dụng thẻ BHYT tự động từ cổng BHXH",
          "Phân luồng gọi số tự động tại khu vực phòng khám",
          "Kê đơn thuốc điện tử và chỉ định cận lâm sàng nhanh chóng",
        ],
      },
      {
        title: "Bệnh án Điện tử (EMR) & Quản lý Nội trú",
        subtitle: "Bệnh viện không giấy tờ",
        description:
          "Số hóa toàn bộ hồ sơ bệnh án nội trú, ký số bác sĩ và lưu trữ an toàn theo quy chuẩn lưu trữ y tế quốc gia.",
        icon: "FileCheck2",
        highlightBadge: "EMR Chuẩn Bộ Y tế",
        features: [
          "Quản lý buồng bệnh, giường bệnh và kế hoạch chăm sóc",
          "Ký số bác sĩ trên bệnh án và phiếu điều trị",
          "Tra cứu tiền sử bệnh án lịch sử của bệnh nhân",
          "Lưu trữ và xuất hồ sơ bệnh án chuẩn định dạng HL7/FHIR",
        ],
      },
      {
        title: "Quản trị Kho Dược & Vật tư Y tế",
        subtitle: "Kiểm soát hạn dùng & hao hụt",
        description:
          "Quản lý xuất nhập tồn thuốc theo số lô, hạn dùng, cảnh báo tương tác thuốc khi kê đơn và tự động dự trù thuốc.",
        icon: "Boxes",
        highlightBadge: "Kho Dược chuẩn GSP",
        features: [
          "Kiểm soát thuốc theo số lô, hạn dùng và hoạt chất",
          "Cảnh báo tự động khi kê đơn thuốc có tương tác bất lợi",
          "Xuất thuốc ngoại trú và lĩnh thuốc nội trú tự động",
          "Báo cáo thống kê thuốc BHYT và thuốc dịch vụ theo mẫu 19, 20, 21",
        ],
      },
    ],
    solutionProcess: [
      {
        step: 1,
        title: "Khảo sát Quy trình Y tế & Luồng Khám",
        subtitle: "Đánh giá hiện trạng hạ tầng CNTT",
        duration: "1 tuần",
        description: "Khảo sát thực địa các khoa phòng, quy trình đón tiếp và luồng di chuyển của người bệnh.",
        deliverables: ["Bản vẽ sơ đồ luồng dữ liệu y tế", "Tài liệu cấu hình hệ sinh thái SGIS"],
      },
      {
        step: 2,
        title: "Cài đặt Hạ tầng & Tích hợp Thiết bị Y tế",
        subtitle: "Kết nối máy xét nghiệm & máy siêu âm/X-quang",
        duration: "2 tuần",
        description: "Kết nối hệ thống LIS với máy xét nghiệm tự động và hệ thống PACS tiếp nhận hình ảnh DICOM.",
        deliverables: ["Kết nối thông suốt thiết bị cận lâm sàng", "Cổng liên thông BHYT sẵn sàng"],
      },
      {
        step: 3,
        title: "Đào tạo Y Bác sĩ & Tập dượt Vận hành",
        subtitle: "Hướng dẫn thao tác thực hành lâm sàng",
        duration: "1 - 2 tuần",
        description: "Tập huấn cho đội ngũ bác sĩ, điều dưỡng, thu ngân và dược sĩ thao tác trực tiếp trên phần mềm.",
        deliverables: ["100% nhân viên y tế thao tác thành thạo", "Kịch bản vận hành giờ cao điểm"],
      },
      {
        step: 4,
        title: "Golive Chính thức & Trực hỗ trợ Thực địa",
        subtitle: "Đồng hành trực tiếp tại các khoa phòng",
        duration: "2 tuần",
        description: "Kỹ sư ETEK Softs trực tiếp túc trực tại bệnh viện để xử lý ngay mọi tình huống phát sinh.",
        deliverables: ["Hệ thống vận hành chính thức thông suốt", "Quyết toán BHYT kỳ đầu tiên thành công 100%"],
      },
    ],
    solutionBenefits: [
      {
        metric: "-45%",
        title: "Giảm thời gian chờ đợi",
        description: "Người bệnh khám và nhận thuốc nhanh chóng nhờ quy trình khép kín không giấy tờ.",
        tag: "Nâng cao dịch vụ",
      },
      {
        metric: "100%",
        title: "Chuẩn xác quyết toán BHYT",
        description: "Dữ liệu kiểm soát tự động trước khi gửi cổng giám định, giảm thiểu xuất toán BHYT.",
        tag: "Tài chính minh bạch",
      },
    ],
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, limit);
}

export const brands = Array.from(new Set(products.map((p) => p.brand))).sort();
export const licenseTypes = Array.from(new Set(products.map((p) => p.licenseType)));
export const audiences: string[] = ["Cá nhân", "Doanh nghiệp nhỏ", "Doanh nghiệp vừa", "Doanh nghiệp lớn"];
export const osList = Array.from(new Set(products.flatMap((p) => p.os ?? []))).sort();
