import { Job } from "@/types";

export const jobs: Job[] = [
  {
    id: "job-1",
    slug: "chuyen-vien-tu-van-giai-phap-phan-mem",
    title: "Chuyên viên Tư vấn giải pháp phần mềm",
    location: "Hà Nội",
    type: "Toàn thời gian",
    department: "Kinh doanh",
    deadline: "2026-10-15",
    description:
      "Tư vấn giải pháp phần mềm bản quyền phù hợp với nhu cầu và ngân sách của khách hàng doanh nghiệp.",
    requirements: [
      "Tốt nghiệp Cao đẳng/Đại học chuyên ngành CNTT, Kinh tế hoặc liên quan",
      "Có kinh nghiệm tư vấn B2B là lợi thế",
      "Kỹ năng giao tiếp và thuyết trình tốt",
    ],
    benefits: [
      "Thu nhập cạnh tranh + hoa hồng",
      "Được đào tạo về hệ sinh thái Microsoft và bảo mật",
      "Môi trường làm việc chuyên nghiệp",
    ],
  },
  {
    id: "job-2",
    slug: "ky-su-trien-khai-he-thong",
    title: "Kỹ sư triển khai hệ thống",
    location: "TP. Hồ Chí Minh",
    type: "Toàn thời gian",
    department: "Kỹ thuật",
    deadline: "2026-10-30",
    description:
      "Triển khai, cấu hình và hỗ trợ kích hoạt license phần mềm cho khách hàng doanh nghiệp.",
    requirements: [
      "Am hiểu Windows Server, Microsoft 365, Active Directory",
      "Có chứng chỉ Microsoft là lợi thế",
      "Chủ động, chịu được áp lực công việc",
    ],
    benefits: ["Lương thỏa thuận theo năng lực", "Chế độ BHXH đầy đủ", "Cơ hội thi chứng chỉ quốc tế"],
  },
  {
    id: "job-3",
    slug: "nhan-vien-marketing-san-pham",
    title: "Nhân viên Marketing sản phẩm",
    location: "Hà Nội (Hybrid)",
    type: "Toàn thời gian",
    department: "Marketing",
    deadline: "2026-11-05",
    description: "Xây dựng nội dung, chiến dịch truyền thông cho các dòng sản phẩm phần mềm bản quyền.",
    requirements: [
      "Kinh nghiệm 1-2 năm về content/marketing sản phẩm công nghệ",
      "Kỹ năng viết tốt, tư duy hình ảnh",
      "Ưu tiên biết cơ bản về SEO",
    ],
    benefits: ["Thưởng theo hiệu quả chiến dịch", "Laptop công ty cấp", "Nghỉ phép linh hoạt"],
  },
  {
    id: "job-4",
    slug: "chuyen-vien-ho-tro-ky-thuat",
    title: "Chuyên viên Hỗ trợ kỹ thuật (Helpdesk)",
    location: "Đà Nẵng",
    type: "Toàn thời gian",
    department: "Kỹ thuật",
    deadline: "2026-10-20",
    description: "Hỗ trợ khách hàng xử lý sự cố kích hoạt, cài đặt và sử dụng phần mềm bản quyền.",
    requirements: [
      "Hiểu biết cơ bản về Windows, Office, license phần mềm",
      "Kỹ năng xử lý tình huống tốt",
      "Sẵn sàng làm việc theo ca",
    ],
    benefits: ["Đào tạo chuyên sâu khi mới vào", "Thưởng KPI hàng tháng", "Lộ trình thăng tiến rõ ràng"],
  },
];
