import { Guide } from "@/types";

export const guides: Guide[] = [
  {
    id: "guide-1",
    slug: "huong-dan-kich-hoat-windows-11",
    title: "Hướng dẫn kích hoạt Windows 11 bản quyền",
    excerpt: "Các bước kích hoạt Windows 11 bằng mã bản quyền sau khi mua hàng.",
    content: [
      "Bước 1: Mở Settings > System > Activation.",
      "Bước 2: Chọn 'Change product key' và nhập mã bản quyền được cung cấp qua email.",
      "Bước 3: Chờ hệ thống xác thực với máy chủ Microsoft, quá trình này thường mất 1-2 phút.",
      "Bước 4: Khi mục Activation hiển thị 'Windows is activated', bản quyền của bạn đã được kích hoạt thành công.",
    ],
    category: "kich-hoat",
    date: "2026-08-15",
  },
  {
    id: "guide-2",
    slug: "huong-dan-kich-hoat-microsoft-office",
    title: "Hướng dẫn kích hoạt Microsoft Office",
    excerpt: "Cách nhập mã bản quyền và đăng nhập tài khoản Microsoft để kích hoạt Office.",
    content: [
      "Bước 1: Mở bất kỳ ứng dụng Office nào (Word, Excel...) và chọn 'Kích hoạt sản phẩm'.",
      "Bước 2: Đăng nhập bằng tài khoản Microsoft đã đăng ký khi mua hàng.",
      "Bước 3: Nhập mã bản quyền 25 ký tự được gửi qua email.",
      "Bước 4: Khởi động lại ứng dụng để hoàn tất quá trình kích hoạt.",
    ],
    category: "kich-hoat",
    date: "2026-08-10",
  },
  {
    id: "guide-3",
    slug: "huong-dan-cai-dat-windows-server-2022",
    title: "Hướng dẫn cài đặt Windows Server 2022",
    excerpt: "Quy trình cài đặt cơ bản cho quản trị viên hệ thống mới triển khai máy chủ.",
    content: [
      "Bước 1: Chuẩn bị USB boot với file ISO Windows Server 2022 chính hãng.",
      "Bước 2: Khởi động máy chủ từ USB và chọn phiên bản Standard/Datacenter phù hợp license.",
      "Bước 3: Cấu hình phân vùng ổ đĩa và tiến hành cài đặt hệ điều hành.",
      "Bước 4: Sau khi cài đặt, nhập mã bản quyền và thiết lập vai trò máy chủ (Active Directory, DNS, DHCP...).",
    ],
    category: "cai-dat",
    date: "2026-07-28",
  },
  {
    id: "guide-4",
    slug: "huong-dan-cai-dat-microsoft-365",
    title: "Hướng dẫn cài đặt Microsoft 365 trên nhiều thiết bị",
    excerpt: "Cách tải và cài đặt bộ ứng dụng Microsoft 365 trên tối đa 5 thiết bị.",
    content: [
      "Bước 1: Truy cập portal.office.com và đăng nhập bằng tài khoản đã đăng ký.",
      "Bước 2: Chọn 'Install Office' để tải bộ cài đặt về máy.",
      "Bước 3: Chạy file cài đặt và làm theo hướng dẫn trên màn hình.",
      "Bước 4: Đăng nhập lại tài khoản trong ứng dụng để đồng bộ license.",
    ],
    category: "cai-dat",
    date: "2026-07-20",
  },
  {
    id: "guide-5",
    slug: "huong-dan-mua-phan-mem-ban-quyen-truc-tuyen",
    title: "Hướng dẫn mua phần mềm bản quyền trực tuyến",
    excerpt: "Quy trình đặt hàng, thanh toán và nhận license trên website.",
    content: [
      "Bước 1: Chọn sản phẩm phù hợp trong danh mục /san-pham và nhấn 'Mua ngay'.",
      "Bước 2: Điền thông tin liên hệ và doanh nghiệp (nếu có) để xuất hóa đơn.",
      "Bước 3: Chọn phương thức thanh toán và hoàn tất giao dịch.",
      "Bước 4: Nhận license qua email trong vòng 15-30 phút làm việc.",
    ],
    category: "mua-hang",
    date: "2026-07-05",
  },
  {
    id: "guide-6",
    slug: "cau-hoi-thuong-gap-ve-license-phan-mem",
    title: "Câu hỏi thường gặp về license phần mềm",
    excerpt: "Giải đáp các thắc mắc phổ biến về license, kích hoạt và bảo hành.",
    content: [
      "License có dùng được cho nhiều thiết bị không? — Tùy theo loại license, vui lòng xem chi tiết tại trang sản phẩm.",
      "Nếu đổi máy tính thì license có bị mất không? — Với license gắn thiết bị, cần liên hệ hỗ trợ để được tư vấn chuyển đổi.",
      "Có được hoàn tiền nếu license lỗi không? — Có, trong vòng 7 ngày nếu license không kích hoạt được do lỗi từ nhà cung cấp.",
    ],
    category: "faq",
    date: "2026-06-22",
  },
  {
    id: "guide-7",
    slug: "chinh-sach-ban-quyen-va-bao-hanh",
    title: "Chính sách bản quyền và bảo hành license",
    excerpt: "Thông tin về cam kết chính hãng, thời hạn bảo hành và hỗ trợ kỹ thuật.",
    content: [
      "Toàn bộ license được cung cấp từ nhà sản xuất hoặc nhà phân phối được ủy quyền chính thức tại Việt Nam.",
      "Thời hạn bảo hành hỗ trợ kích hoạt là 12 tháng kể từ ngày mua đối với license vĩnh viễn.",
      "Đối với license thuê bao, thời hạn bảo hành tương ứng với thời hạn subscription đã đăng ký.",
    ],
    category: "chinh-sach",
    date: "2026-06-10",
  },
  {
    id: "guide-8",
    slug: "huong-dan-quan-ly-license-cho-nhieu-nhan-vien",
    title: "Hướng dẫn quản lý license cho nhiều nhân viên",
    excerpt: "Cách sử dụng bảng điều khiển quản trị để cấp phát và thu hồi license nội bộ.",
    content: [
      "Bước 1: Đăng nhập vào Microsoft 365 Admin Center bằng tài khoản quản trị.",
      "Bước 2: Vào mục Billing > Licenses để xem số lượng license khả dụng.",
      "Bước 3: Gán license cho từng tài khoản nhân viên trong mục Users.",
      "Bước 4: Thu hồi license khi nhân viên nghỉ việc để tái sử dụng cho nhân viên mới.",
    ],
    category: "su-dung",
    date: "2026-05-30",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export const guideCategories: { slug: string; label: string }[] = [
  { slug: "su-dung", label: "Hướng dẫn sử dụng" },
  { slug: "kich-hoat", label: "Hướng dẫn kích hoạt" },
  { slug: "cai-dat", label: "Hướng dẫn cài đặt" },
  { slug: "mua-hang", label: "Hướng dẫn mua hàng" },
  { slug: "faq", label: "Câu hỏi thường gặp" },
  { slug: "chinh-sach", label: "Chính sách bản quyền" },
];
