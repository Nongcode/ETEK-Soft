export interface WorkflowSubStep {
  title: string;
  desc: string;
}

export interface WorkflowTool {
  id: string; // e.g. "tool-01"
  code: string; // "Tool 01"
  name: string; // "HRM Discovery Form"
  category: "Khảo sát" | "Nghiệp vụ" | "Kỹ thuật" | "Đề xuất & ROI" | "Triển khai";
  purpose: string;
  stageIds: string[];
  deliverable: string;
  keyChecklist: string[];
}

export interface WorkflowStage {
  id: string; // e.g. "GD0"
  stageNumber: number; // 0..8
  code: string; // "GĐ0", "GĐ1"...
  name: string;
  phaseId: number; // 1..4
  color: string;
  badgeColor: string;
  borderColor: string;
  bgLightColor: string;
  subSteps: WorkflowSubStep[];
  objective: string; // Mục tiêu giai đoạn
  activities: string[]; // Hoạt động thực hiện
  deliverables: string[]; // Sản phẩm bàn giao
  toolCodes?: string[]; // e.g. ["Tool 01", "Tool 02"]
  gateCheck: {
    title: string;
    criteria: string;
    actionIfFail: string;
  };
}

export interface WorkflowPhase {
  id: number;
  code: string;
  name: string;
  subtitle: string;
  summary: string;
  themeColor: string;
  textColor: string;
  bgGradient: string;
  borderClass: string;
  stages: WorkflowStage[];
}

export const WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    id: 1,
    code: "PHA 1",
    name: "KHẢO SÁT",
    subtitle: "Khảo sát hiện trạng & Xác lập bài toán",
    summary: "Thấu hiểu toàn diện quy trình hoạt động, cơ cấu tổ chức và các điểm nghẽn nghiệp vụ thực tế tại doanh nghiệp.",
    themeColor: "#0284c7", // Sky blue
    textColor: "text-sky-700",
    bgGradient: "from-sky-500 to-blue-600",
    borderClass: "border-sky-300",
    stages: [
      {
        id: "gd0",
        stageNumber: 0,
        code: "GĐ0",
        name: "Tiếp cận & Sàng lọc",
        phaseId: 1,
        color: "#0284c7",
        badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
        borderColor: "border-sky-500",
        bgLightColor: "bg-sky-50/70",
        subSteps: [
          { title: "Nhận lead", desc: "Inbound / Outbound / Giới thiệu đối tác" },
          { title: "Nhu cầu sơ bộ", desc: "Mục tiêu, ngân sách dự kiến, thời hạn" },
          { title: "Đặt lịch", desc: "Xác nhận cuộc họp với các bên liên quan" },
        ],
        objective: "Tiếp nhận thông tin, phân loại mức độ sẵn sàng và xác lập kế hoạch làm việc ban đầu với đại diện khách hàng.",
        activities: [
          "Tiếp nhận yêu cầu qua Hotline, Form tư vấn hoặc kênh đối tác",
          "Gọi điện/họp nhanh sơ bộ để nắm bài toán chính và mức độ cấp thiết",
          "Thống nhất thời gian, địa điểm và danh sách nhân sự tham gia phiên làm việc đầu tiên",
        ],
        deliverables: [
          "Hồ sơ thông tin cơ bản của doanh nghiệp (Company Profile)",
          "Lịch hẹn làm việc và phân công chuyên viên phụ trách",
        ],
        toolCodes: ["Tool 01", "Tool 02"],
        gateCheck: {
          title: "Gate 0: Qualified Lead",
          criteria: "Doanh nghiệp có nhu cầu thực tế, thuộc nhóm giải pháp ETEK-Soft cung cấp và có đại diện ra quyết định tham gia.",
          actionIfFail: "Lưu hồ sơ nuôi dưỡng (Nurturing) và liên hệ lại vào thời điểm thích hợp.",
        },
      },
      {
        id: "gd1",
        stageNumber: 1,
        code: "GĐ1",
        name: "Khảo sát sơ bộ",
        phaseId: 1,
        color: "#0284c7",
        badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
        borderColor: "border-sky-500",
        bgLightColor: "bg-sky-50/70",
        subSteps: [
          { title: "Discovery", desc: "Họp tìm hiểu sơ bộ kỳ vọng của doanh nghiệp" },
          { title: "Thông tin DN", desc: "Quy mô, cơ cấu, các hệ thống đang dùng" },
          { title: "Phạm vi", desc: "Xác định scope các phòng ban/chức năng áp dụng" },
        ],
        objective: "Làm rõ phạm vi ứng dụng (Scope), các hệ thống phần mềm/thiết bị đang vận hành và kỳ vọng cốt lõi của Ban Lãnh Đạo.",
        activities: [
          "Tổ chức phiên Discovery Meeting với Ban Giám đốc và Trưởng bộ phận liên quan",
          "Thu thập thông tin quy mô nhân sự, số lượng chi nhánh, cơ sở dữ liệu hiện có",
          "Phác thảo ranh giới phạm vi chuyển đổi số (Core Module & Tích hợp ngoài)",
        ],
        deliverables: [
          "Biên bản họp Discovery Meeting",
          "Bản khảo sát phạm vi sơ bộ (Scope Definition Draft)",
        ],
        toolCodes: ["Tool 02", "Tool 03"],
        gateCheck: {
          title: "Gate 1: Scope Alignment",
          criteria: "Hai bên thống nhất được phạm vi khảo sát chuyên sâu và Ban lãnh đạo đồng thuận cử đầu mối phối hợp.",
          actionIfFail: "Điều chỉnh phạm vi làm việc hoặc tổ chức lại phiên định hướng mục tiêu.",
        },
      },
      {
        id: "gd2",
        stageNumber: 2,
        code: "GĐ2",
        name: "Phân tích hiện trạng & nhu cầu",
        phaseId: 1,
        color: "#0284c7",
        badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
        borderColor: "border-sky-500",
        bgLightColor: "bg-sky-50/70",
        subSteps: [
          { title: "AS-IS", desc: "Khảo sát chi tiết quy trình nghiệp vụ hiện tại" },
          { title: "Pain points", desc: "Chỉ ra các điểm nghẽn, lãng phí thời gian/chi phí" },
          { title: "Mục tiêu", desc: "Xác lập KPI số hóa và tiêu chí nghiệm thu" },
        ],
        objective: "Đi sâu vào từng quy trình thực tế tại các phòng ban, bóc tách điểm nghẽn và lượng hóa mục tiêu cải tiến cụ thể.",
        activities: [
          "Chuyên gia giải pháp làm việc trực tiếp tại doanh nghiệp với từng bộ phận",
          "Mô hình hóa luồng xử lý hiện tại (AS-IS workflow diagram)",
          "Tổng hợp danh mục Pain points (thủ công, sai sót, trễ hạn, thất thoát)",
          "Thống nhất các chỉ số KPI kỳ vọng sau số hóa",
        ],
        deliverables: [
          "Tài liệu khảo sát hiện trạng chi tiết (AS-IS Analysis Report)",
          "Bảng danh mục bài toán & tiêu chí đo lường KPI chuyển đổi số",
        ],
        toolCodes: ["Tool 03", "Tool 04", "Tool 05", "Tool 06", "Tool 07", "Tool 08", "Tool 09", "Tool 10"],
        gateCheck: {
          title: "Gate 2: AS-IS Sign-off",
          criteria: "Khách hàng xác nhận bằng văn bản/email tài liệu khảo sát hiện trạng phản ánh đúng 100% thực tế hoạt động.",
          actionIfFail: "Khảo sát bổ sung các điểm chưa rõ trước khi tiến hành thiết kế giải pháp.",
        },
      },
    ],
  },
  {
    id: 2,
    code: "PHA 2",
    name: "TƯ VẤN",
    subtitle: "Tư vấn giải pháp & Đề xuất phương án",
    summary: "Xây dựng kiến trúc mô hình tương lai (TO-BE), minh chứng tính khả thi qua Demo/POC và thống nhất thỏa thuận hợp tác.",
    themeColor: "#16a34a", // Green
    textColor: "text-emerald-700",
    bgGradient: "from-emerald-500 to-green-600",
    borderClass: "border-emerald-300",
    stages: [
      {
        id: "gd3",
        stageNumber: 3,
        code: "GĐ3",
        name: "Tư vấn giải pháp",
        phaseId: 2,
        color: "#16a34a",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        borderColor: "border-emerald-500",
        bgLightColor: "bg-emerald-50/70",
        subSteps: [
          { title: "TO-BE", desc: "Thiết kế mô hình quy trình số hóa chuẩn tương lai" },
          { title: "Fit-Gap", desc: "Đánh giá mức độ đáp ứng chuẩn vs yêu cầu đặc thù" },
          { title: "Kiến trúc giải pháp", desc: "Sơ đồ tổng thể, dữ liệu, tích hợp hệ thống" },
        ],
        objective: "Kiến tạo quy trình chuẩn hóa tương lai (TO-BE), phân tích độ phủ giải pháp và bản vẽ kiến trúc kết nối hệ thống.",
        activities: [
          "Thiết kế luồng quy trình số hóa chuẩn theo thông lệ quốc tế và đặc thù ngành",
          "Phân tích Fit-Gap (Chuẩn hóa tính năng có sẵn vs Cấu hình/Tùy chỉnh)",
          "Xây dựng sơ đồ kiến trúc ứng dụng, hạ tầng máy chủ và bảo mật dữ liệu",
        ],
        deliverables: [
          "Tài liệu thiết kế quy trình tương lai (TO-BE Blueprint)",
          "Báo cáo phân tích Fit-Gap & Kiến trúc kỹ thuật tổng thể",
        ],
        toolCodes: ["Tool 11", "Tool 12", "Tool 13"],
        gateCheck: {
          title: "Gate 3: Architecture Approval",
          criteria: "Khách hàng phê duyệt phương án giải pháp TO-BE và mô hình tích hợp hệ thống.",
          actionIfFail: "Rà soát lại Fit-Gap, tinh chỉnh kiến trúc để tối ưu chi phí và độ phức tạp.",
        },
      },
      {
        id: "gd4",
        stageNumber: 4,
        code: "GĐ4",
        name: "Demo & Đề xuất",
        phaseId: 2,
        color: "#16a34a",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        borderColor: "border-emerald-500",
        bgLightColor: "bg-emerald-50/70",
        subSteps: [
          { title: "Demo", desc: "Trực quan hóa luồng nghiệp vụ trên phần mềm thực tế" },
          { title: "Báo giá", desc: "Dự toán license, dịch vụ triển khai, hạ tầng" },
          { title: "ROI/TCO", desc: "Phân tích hiệu quả đầu tư và tổng chi phí sở hữu" },
        ],
        objective: "Trình diễn trực quan giải pháp trên kịch bản thực tế của khách hàng, công khai bảng dự toán chi phí và phân tích ROI.",
        activities: [
          "Thực hiện buổi Demo chuyên sâu (Tailored Demo) giải quyết trực tiếp các Pain points",
          "Lập bảng báo giá chi tiết: Bản quyền License + Dịch vụ triển khai + Bảo trì/Hạ tầng",
          "Xây dựng mô hình tính toán hoàn vốn đầu tư (ROI) và tổng chi phí sở hữu 3-5 năm (TCO)",
        ],
        deliverables: [
          "Biên bản nghiệm thu buổi Demo tính năng",
          "Hồ sơ đề xuất giải pháp & Dự toán ngân sách chi tiết (Proposal & Quotation)",
        ],
        toolCodes: ["Tool 14"],
        gateCheck: {
          title: "Gate 4: Proposal Acceptance",
          criteria: "Khách hàng xác nhận giải pháp đáp ứng yêu cầu nghiệp vụ và thông qua khung ngân sách dự kiến.",
          actionIfFail: "Tối ưu hóa các module/gói license để phù hợp với ngân sách của doanh nghiệp.",
        },
      },
      {
        id: "gd5",
        stageNumber: 5,
        code: "GĐ5",
        name: "Chốt phương án",
        phaseId: 2,
        color: "#16a34a",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        borderColor: "border-emerald-500",
        bgLightColor: "bg-emerald-50/70",
        subSteps: [
          { title: "POC/Pilot", desc: "Chạy thử nghiệm tính năng trọng yếu nếu có yêu cầu" },
          { title: "Đàm phán", desc: "Thống nhất điều khoản thương mại, SLA, tiến độ" },
          { title: "Ký kết", desc: "Ký hợp đồng dịch vụ & bảo mật NDA" },
        ],
        objective: "Xác thực năng lực hệ thống qua kịch bản thử nghiệm (nếu cần), hoàn tất đàm phán hợp đồng thương mại và pháp lý.",
        activities: [
          "Triển khai kịch bản POC (Proof of Concept) cho các tính năng phức tạp nếu được yêu cầu",
          "Thương thảo các điều khoản thanh toán, cam kết thời gian đáp ứng hỗ trợ (SLA)",
          "Ký kết hợp đồng kinh tế và thỏa thuận bảo mật thông tin (NDA)",
        ],
        deliverables: [
          "Hợp đồng kinh tế có đầy đủ chữ ký pháp lý 2 bên",
          "Bản phạm vi công việc chi tiết (Scope of Work - SOW) & Kế hoạch tổng thể (Master Schedule)",
        ],
        toolCodes: ["Tool 15", "Tool 16", "Tool 17", "Tool 18", "Tool 19"],
        gateCheck: {
          title: "Gate 5: Contract Finalized",
          criteria: "Hợp đồng, điều khoản bảo mật và kế hoạch tiến độ được hai bên chính thức ký kết đóng dấu.",
          actionIfFail: "Tháo gỡ vướng mắc pháp lý hoặc thương mại trước khi cam kết nguồn lực.",
        },
      },
    ],
  },
  {
    id: 3,
    code: "PHA 3",
    name: "TRIỂN KHAI",
    subtitle: "Cấu hình, tích hợp & chuyển giao tri thức",
    summary: "Hiện thực hóa hệ thống trên môi trường kỹ thuật, chuyển đổi toàn vẹn dữ liệu, kiểm thử chấp nhận UAT và đào tạo người dùng.",
    themeColor: "#ea580c", // Orange
    textColor: "text-amber-700",
    bgGradient: "from-amber-500 to-orange-600",
    borderClass: "border-orange-300",
    stages: [
      {
        id: "gd6",
        stageNumber: 6,
        code: "GĐ6",
        name: "Triển khai dự án",
        phaseId: 3,
        color: "#ea580c",
        badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
        borderColor: "border-orange-500",
        bgLightColor: "bg-orange-50/70",
        subSteps: [
          { title: "Kick-off", desc: "Thành lập ban dự án 2 bên, thống nhất kế hoạch triển khai" },
          { title: "Cấu hình", desc: "Khởi tạo hệ thống, thiết lập tham số, workflow, form mẫu" },
          { title: "Phân quyền", desc: "Tổ chức cơ cấu phòng ban, ma trận vai trò, bảo mật" },
        ],
        objective: "Chính thức khởi động dự án, thiết lập môi trường hệ thống, cấu hình tham số nghiệp vụ và phân quyền chi tiết.",
        activities: [
          "Tổ chức lễ Khởi động dự án (Kick-off Meeting), công bố cơ cấu Ban chỉ đạo & Ban triển khai",
          "Cài đặt hệ thống trên Cloud/On-Premise, kích hoạt bản quyền chính hãng",
          "Cấu hình các quy trình phê duyệt đa cấp, biểu mẫu báo cáo và thiết lập phân quyền RBAC",
        ],
        deliverables: [
          "Biên bản Kick-off dự án & Ma trận trách nhiệm (RACI Matrix)",
          "Hệ thống phần mềm đã được cấu hình hoàn thiện trên môi trường Staging/Test",
        ],
        toolCodes: ["Tool 20"],
        gateCheck: {
          title: "Gate 6: Configuration Sign-off",
          criteria: "Hệ thống đáp ứng 100% các yêu cầu trong bảng đặc tả kỹ thuật và sẵn sàng tiếp nhận dữ liệu kiểm thử.",
          actionIfFail: "Hiệu chỉnh tham số và quy trình theo đúng biên bản thống nhất ban đầu.",
        },
      },
      {
        id: "gd7",
        stageNumber: 7,
        code: "GĐ7",
        name: "Kiểm thử & Đào tạo",
        phaseId: 3,
        color: "#ea580c",
        badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
        borderColor: "border-orange-500",
        bgLightColor: "bg-orange-50/70",
        subSteps: [
          { title: "Dữ liệu", desc: "Làm sạch, chuyển đổi và nạp dữ liệu lịch sử" },
          { title: "UAT", desc: "Khách hàng kiểm thử chấp nhận người dùng" },
          { title: "Training", desc: "Đào tạo quản trị viên và người dùng cuối các bộ phận" },
        ],
        objective: "Đảm bảo tính chính xác toàn vẹn của dữ liệu di chuyển, nghiệm thu chất lượng hệ thống qua UAT và chuyển giao tri thức toàn diện.",
        activities: [
          "Làm sạch, mapping trường dữ liệu và nạp dữ liệu lịch sử (Data Migration)",
          "Thực hiện kiểm thử chấp nhận người dùng (UAT) với các kịch bản thực tế (End-to-End Test)",
          "Tổ chức các lớp đào tạo chuyên sâu: Đào tạo Quản trị viên (Admin) & Đào tạo Người dùng cuối (End-user)",
        ],
        deliverables: [
          "Biên bản nghiệm thu UAT có xác nhận không còn lỗi nghiêm trọng (Critical/Major Bugs)",
          "Bộ tài liệu hướng dẫn sử dụng, video bài giảng & Danh sách nhân sự hoàn thành đào tạo",
        ],
        toolCodes: ["Tool 11", "Tool 20"],
        gateCheck: {
          title: "Gate 7: UAT & Training Completion",
          criteria: "Biên bản nghiệm thu UAT được ký duyệt và trên 90% nhân sự hoàn thành bài kiểm tra sử dụng hệ thống.",
          actionIfFail: "Khắc phục triệt để tồn đọng UAT và đào tạo bổ sung cho các nhân sự chưa đạt.",
        },
      },
    ],
  },
  {
    id: 4,
    code: "PHA 4",
    name: "VẬN HÀNH",
    subtitle: "Vận hành thực tế & Đồng hành phát triển",
    summary: "Chính thức đưa hệ thống vào hoạt động sản xuất kinh doanh, trực tiếp hỗ trợ giải quyết sự cố và đồng hành nâng cấp bền vững.",
    themeColor: "#9333ea", // Purple
    textColor: "text-purple-700",
    bgGradient: "from-purple-500 to-indigo-600",
    borderClass: "border-purple-300",
    stages: [
      {
        id: "gd8",
        stageNumber: 8,
        code: "GĐ8",
        name: "Go-live & Hậu triển khai",
        phaseId: 4,
        color: "#9333ea",
        badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
        borderColor: "border-purple-500",
        bgLightColor: "bg-purple-50/70",
        subSteps: [
          { title: "Go-live", desc: "Chính thức chuyển đổi sang vận hành trên hệ thống mới" },
          { title: "Hypercare", desc: "Đội ngũ kỹ thuật túc trực hỗ trợ trực tiếp 24/7" },
          { title: "Bàn giao / CS", desc: "Chuyển giao cho bộ phận Chăm sóc khách hàng & Bảo hành SLA" },
        ],
        objective: "Chuyển đổi êm thuận sang môi trường Production, giám sát xử lý tức thời các vấn đề phát sinh và thiết lập quy trình bảo trì dài hạn.",
        activities: [
          "Cắt chuyển hệ thống cũ sang hệ thống mới (Cut-over & Go-live chính thức)",
          "Đội kỹ sư túc trực On-site/Online trong giai đoạn Hypercare (2 - 4 tuần đầu)",
          "Chuyển giao toàn bộ hồ sơ kỹ thuật, mật khẩu quản trị và thủ tục bàn giao sang đội ngũ Chăm sóc khách hàng ETEK Care",
        ],
        deliverables: [
          "Biên bản nghiệm thu vận hành Go-live thành công",
          "Bộ hồ sơ dự án hoàn công & Hợp đồng bảo trì / Cam kết chất lượng dịch vụ SLA",
        ],
        toolCodes: ["Tool 20"],
        gateCheck: {
          title: "Gate 8: Project Acceptance & CS Handover",
          criteria: "Hệ thống vận hành ổn định qua giai đoạn Hypercare, ký kết biên bản nghiệm thu tổng thể dự án.",
          actionIfFail: "Duy trì chế độ Hypercare cho đến khi hệ thống vận hành đạt cam kết KPI.",
        },
      },
    ],
  },
];

// Helper to flatten stages for direct lookups
export const ALL_WORKFLOW_STAGES: WorkflowStage[] = WORKFLOW_PHASES.flatMap((p) => p.stages);

// Bộ 20 Công cụ Chuyển đổi số & Tư vấn Triển khai (Trích Phần VIII - ETEK Handbook 2026)
export const WORKFLOW_TOOLS: WorkflowTool[] = [
  {
    id: "tool-01",
    code: "Tool 01",
    name: "HRM Discovery Form",
    category: "Khảo sát",
    purpose: "Khám phá bối cảnh kinh doanh, mục tiêu 12-24 tháng, top 3 kỳ vọng, các điểm nghẽn (pain points) và hội đồng ra quyết định.",
    stageIds: ["gd0"],
    deliverable: "Hồ sơ ghi nhận nhu cầu chuyển đổi số (Discovery Notes)",
    keyChecklist: [
      "Mục tiêu kinh doanh 12-24 tháng và thay đổi lực lượng lao động",
      "Top 3 kết quả mong muốn và chỉ số KPI đo lường thành công",
      "Danh sách các hệ thống/file nhân sự hiện hành và người sở hữu",
      "Top 5 lỗi và ngoại lệ thường gặp trong mỗi kỳ chốt lương",
    ],
  },
  {
    id: "tool-02",
    code: "Tool 02",
    name: "Company Information Form",
    category: "Khảo sát",
    purpose: "Thu thập dữ liệu nền tảng: số pháp nhân (Legal Entity), quy mô nhân sự hiện tại và 3 năm tới, mô hình ca kíp và kiến trúc CNTT.",
    stageIds: ["gd0", "gd1"],
    deliverable: "Hồ sơ thông tin & Độ phức tạp doanh nghiệp (Company Profile)",
    keyChecklist: [
      "Số lượng pháp nhân độc lập (Legal Entities) và địa điểm/site làm việc",
      "Cơ cấu loại lao động: Chính thức, thử việc, bán thời gian, thời vụ, chuyên gia",
      "Mô hình ca kíp: Ca hành chính, ca xoay, ca gãy, ca đêm qua ngày",
      "Hạ tầng CNTT hiện có: ERP, Kế toán, Máy chấm công, Single Sign-On (SSO)",
    ],
  },
  {
    id: "tool-03",
    code: "Tool 03",
    name: "HR Organization Survey",
    category: "Khảo sát",
    purpose: "Khảo sát cấu trúc tổ chức doanh nghiệp, cơ cấu phòng ban, chức danh (Job) và vị trí định biên (Position) theo chuẩn Master Data.",
    stageIds: ["gd1", "gd2"],
    deliverable: "Sơ đồ tổ chức & Từ điển Master Data doanh nghiệp",
    keyChecklist: [
      "Mapping phân cấp: Legal Entity → Business Unit → Department → Location",
      "Mô hình quản lý: Job-based (linh hoạt) hay Position-based (kiểm soát định biên)",
      "Chuẩn hóa danh mục chức danh, ngạch bậc (Job Family, Grade/Level)",
      "Tuyến báo cáo quản lý trực tiếp và ma trận (Reporting line / Dotted line)",
    ],
  },
  {
    id: "tool-04",
    code: "Tool 04",
    name: "Core HR Questionnaire",
    category: "Nghiệp vụ",
    purpose: "Khảo sát nghiệp vụ hồ sơ nhân sự, vòng đời nhân viên, nguyên tắc sinh mã Employee ID, ngày hiệu lực (Effective dating) và dữ liệu lịch sử.",
    stageIds: ["gd2"],
    deliverable: "Tài liệu đặc tả nghiệp vụ Core HR (Core HR Blueprint)",
    keyChecklist: [
      "Chiến lược sinh mã nhân viên (Employee ID) và quy tắc rehire",
      "Dữ liệu có ngày hiệu lực (Effective dating) và biến động trong tương lai/quá khứ",
      "Quy tắc kiểm soát chất lượng dữ liệu (Data completeness, phát hiện trùng lặp)",
      "Danh mục loại hợp đồng, biểu mẫu và cơ chế cảnh báo tái ký tự động",
    ],
  },
  {
    id: "tool-05",
    code: "Tool 05",
    name: "Attendance Questionnaire",
    category: "Nghiệp vụ",
    purpose: "Khảo sát chi tiết 6 mô hình ca kíp, quy tắc ghép cặp IN/OUT, thời gian ân hạn (Grace period), quản lý tăng ca OT và xử lý ngoại lệ.",
    stageIds: ["gd2"],
    deliverable: "Bộ quy tắc chấm công & Ma trận ca kíp (Time & Shift Rulebook)",
    keyChecklist: [
      "Chủng loại thiết bị chấm công: FaceID AI, Vân tay, GPS di động, kết nối LAN/Cloud API",
      "Quy tắc ca phức tạp: Ca qua nửa đêm (Overnight), ca gãy (Split), ca linh hoạt (Flex)",
      "Quy chế làm thêm giờ (OT): Phê duyệt trước/sau, bước làm tròn, hệ số lương",
      "Quy trình giải trình quên chấm công và thời điểm khóa công (Attendance Lock)",
    ],
  },
  {
    id: "tool-06",
    code: "Tool 06",
    name: "Leave Questionnaire",
    category: "Nghiệp vụ",
    purpose: "Khảo sát chính sách các loại nghỉ phép, 4 mô hình cấp quyền nghỉ (Entitlement), công thức số dư phép (Balance equation) và chuyển phép sang năm sau.",
    stageIds: ["gd2"],
    deliverable: "Quy chế nghỉ phép số hóa (Leave Policy Matrix)",
    keyChecklist: [
      "Danh mục các loại nghỉ phép: Phép năm, nghỉ ốm, thai sản, việc riêng, nghỉ bù",
      "Mô hình cấp quyền: Đầu năm (Upfront), Tích lũy (Accrual), Thâm niên (Tenure)",
      "Công thức cân bằng phép: Opening + Accrued - Taken - Reserved - Expired",
      "Chính sách chuyển phép tồn (Carry-over), hạn chót sử dụng hoặc chi trả tiền phép thừa",
    ],
  },
  {
    id: "tool-07",
    code: "Tool 07",
    name: "Payroll Questionnaire",
    category: "Nghiệp vụ",
    purpose: "Khảo sát toàn diện thành phần lương (Pay components), chu kỳ chốt lương, công thức Gross-to-Net, phân bổ chi phí và kiểm soát nội bộ kỳ lương.",
    stageIds: ["gd2"],
    deliverable: "Tài liệu thiết kế thuật toán tính lương (Payroll Algorithm Spec)",
    keyChecklist: [
      "Phân nhóm thành phần lương: Lương cơ bản, phụ cấp đóng bảo hiểm, thưởng hiệu quả",
      "Xử lý tỷ lệ ngày công (Proration) cho nhân sự vào/nghỉ việc giữa tháng",
      "Chính sách hồi tố (Retroactivity delta) khi có thay đổi lương hiệu lực lùi về quá khứ",
      "Cơ chế kiểm soát chéo Maker-Checker và kiểm tra đột biến phương sai (Variance check)",
    ],
  },
  {
    id: "tool-08",
    code: "Tool 08",
    name: "Compliance & Legal Questionnaire",
    category: "Nghiệp vụ",
    purpose: "Khảo sát việc tuân thủ các quy định pháp luật lao động, BHXH, BHYT, chính sách giảm trừ gia cảnh thuế TNCN 2026 và bảo vệ dữ liệu cá nhân.",
    stageIds: ["gd2"],
    deliverable: "Bảng đối soát pháp lý & Kế hoạch tuân thủ (Compliance Register)",
    keyChecklist: [
      "Cập nhật Luật BHXH 41/2024 & Nghị định 158/2025/NĐ-CP",
      "Kiểm tra lương tối thiểu 4 vùng theo Nghị định 293/2025/NĐ-CP từ 01/01/2026",
      "Cấu hình thuế TNCN mới (Giảm trừ bản thân 15.5tr, phụ thuộc 6.2tr) từ kỳ tính thuế 2026",
      "Chính sách bảo mật dữ liệu nhạy cảm theo Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15",
    ],
  },
  {
    id: "tool-09",
    code: "Tool 09",
    name: "Workflow Questionnaire",
    category: "Kỹ thuật",
    purpose: "Khảo sát luồng phê duyệt theo 7 pattern (Đơn cấp, Đa cấp, Song song, Có điều kiện, Ma trận...), phân quyền ủy quyền (Delegation) và SLA.",
    stageIds: ["gd2", "gd3"],
    deliverable: "Sơ đồ luồng phê duyệt & Ma trận thẩm quyền (Workflow Matrix)",
    keyChecklist: [
      "7 mô hình phê duyệt phổ biến và điều kiện rẽ nhánh (Routing conditions)",
      "Quản trị mô hình 9 trạng thái: Draft → Submitted → Approved / Rejected → Executed",
      "Cơ chế ủy quyền khi vắng mặt (Delegation) và tự động chuyển cấp khi quá hạn SLA",
      "Tách bạch quy trình xử lý vụ việc ngoại lệ (HR Case Management)",
    ],
  },
  {
    id: "tool-10",
    code: "Tool 10",
    name: "Integration Questionnaire",
    category: "Kỹ thuật",
    purpose: "Khảo sát toàn bộ các điểm kết nối trong hệ sinh thái CNTT: Hệ thống nguồn chuẩn (Source of truth), phương thức API/Webhook/SFTP, bảo mật và retry.",
    stageIds: ["gd2", "gd3"],
    deliverable: "Danh mục tích hợp & Hợp đồng giao tiếp (Interface Contract)",
    keyChecklist: [
      "Xác lập Source of Truth cho từng miền dữ liệu (Employee, Org, Attendance, Payroll)",
      "Kết nối máy chấm công (LAN, Cloud API, Timezone, đồng bộ mã nhân viên)",
      "Đẩy bút toán lương sang phần mềm Kế toán/ERP (SAP, Oracle, MISA, Bravo)",
      "Đồng bộ tài khoản với hệ thống Single Sign-On (Azure AD, Google Workspace)",
    ],
  },
  {
    id: "tool-11",
    code: "Tool 11",
    name: "Requirement Matrix Template",
    category: "Kỹ thuật",
    purpose: "Chuẩn hóa danh mục yêu cầu người dùng và kỹ thuật theo chuẩn MoSCoW (Must, Should, Could, Won't) kèm tiêu chí kiểm thử nghiệm thu (Acceptance criteria).",
    stageIds: ["gd3", "gd7"],
    deliverable: "Ma trận yêu cầu nghiệm thu chi tiết (Traceability Matrix)",
    keyChecklist: [
      "Phân loại yêu cầu: Nghiệp vụ (Business), Chức năng (Functional), Dữ liệu, Tích hợp, Bảo mật",
      "Xếp thứ tự ưu tiên kỷ luật theo MoSCoW, tránh gán 90% là Must-have",
      "Viết User Story chuẩn: As a [User], I want [Action] so that [Value]",
      "Xác lập tiêu chí nghiệm thu (Given-When-Then) có thể đo lường và kiểm thử được",
    ],
  },
  {
    id: "tool-12",
    code: "Tool 12",
    name: "Fit-Gap Matrix Template",
    category: "Kỹ thuật",
    purpose: "Phân định rõ giải pháp đáp ứng: Tính năng có sẵn (Standard Fit), Cấu hình tham số (Configuration), Tích hợp (Integration), Tùy chỉnh (Custom) hay Ngoài phạm vi.",
    stageIds: ["gd3"],
    deliverable: "Báo cáo phân tích khoảng cách Fit-Gap (Fit-Gap Report)",
    keyChecklist: [
      "Ưu tiên Standard Fit và Configuration để tối ưu tổng chi phí sở hữu TCO",
      "Đánh giá rủi ro của từng yêu cầu Custom hóa đối với việc nâng cấp tương lai",
      "Chấm điểm quyết định Gap Score: Tính thiết yếu, Pháp lý, Tần suất, Chi phí phát triển",
      "Cam kết rõ ràng các hạng mục Out-of-Scope ngay từ giai đoạn đề xuất",
    ],
  },
  {
    id: "tool-13",
    code: "Tool 13",
    name: "Capability Comparison Matrix",
    category: "Đề xuất & ROI",
    purpose: "So sánh năng lực giải pháp ETEK HRM với hiện trạng hoặc các nền tảng khác theo kịch bản vận hành thực tế và trọng số nghiệp vụ.",
    stageIds: ["gd3"],
    deliverable: "Bảng đối chiếu năng lực cạnh tranh (Capability Scorecard)",
    keyChecklist: [
      "Chấm điểm năng lực theo thang 0-4 điểm (Không có → Đáp ứng xuất sắc)",
      "Độ sâu nghiệp vụ: Quản lý lịch sử Effective-dating, xử lý ca phức tạp, tính lương retro",
      "Độ linh hoạt của Workflow động và nền tảng Mobile App Self-Service",
      "Khả năng mở rộng kiến trúc, hỗ trợ tích hợp API và tuân thủ bảo mật",
    ],
  },
  {
    id: "tool-14",
    code: "Tool 14",
    name: "Demo Script Template",
    category: "Đề xuất & ROI",
    purpose: "Kịch bản trình diễn phần mềm bám sát câu chuyện nghiệp vụ (Storytelling) và kịch bản thực tế của từng Persona trong hội đồng mua hàng.",
    stageIds: ["gd4"],
    deliverable: "Kịch bản Demo thực chiến theo Persona (Tailored Demo Script)",
    keyChecklist: [
      "Góc nhìn CEO: Dashboard trực quan, biến động chi phí quỹ lương và tỷ lệ nghỉ việc",
      "Góc nhìn HR Director: Chuẩn hóa quy trình vòng đời nhân viên và trải nghiệm số",
      "Góc nhìn Chuyên viên Lương: Kiểm soát đối soát công, Gross-to-Net và khóa kỳ lương",
      "Góc nhìn IT/Security: Kiến trúc SSO, phân quyền RBAC, mã hóa và nhật ký truy vết Audit",
    ],
  },
  {
    id: "tool-15",
    code: "Tool 15",
    name: "Proposal Checklist",
    category: "Đề xuất & ROI",
    purpose: "Bộ tiêu chuẩn kiểm tra toàn diện hồ sơ đề xuất giải pháp: Mục tiêu, Phạm vi phân hệ, Kiến trúc kỹ thuật, Fit-gap, Lộ trình, Thương mại và Cam kết SLA.",
    stageIds: ["gd5"],
    deliverable: "Hồ sơ đề xuất giải pháp hoàn chỉnh (Full Solution Proposal)",
    keyChecklist: [
      "Tóm tắt điều hành (Executive Summary) gắn liền bài toán của doanh nghiệp với giá trị giải pháp",
      "Đặc tả rõ ràng phạm vi phân hệ (Module Scope) và dân số áp dụng (Population)",
      "Bản kế hoạch triển khai tổng thể, phân công vai trò và phụ thuộc 2 bên",
      "Quy chế quản lý yêu cầu thay đổi (Change Request Process) và điều khoản bảo hành SLA",
    ],
  },
  {
    id: "tool-16",
    code: "Tool 16",
    name: "Solution Architecture Checklist",
    category: "Kỹ thuật",
    purpose: "Kiểm tra toàn diện kiến trúc kỹ thuật của giải pháp trước khi ký kết: Mô hình dữ liệu, Phân tách vai trò SoD, Sao lưu dự phòng và Các chỉ tiêu NFRs.",
    stageIds: ["gd5"],
    deliverable: "Bản thiết kế kiến trúc kỹ thuật (Technical Blueprint)",
    keyChecklist: [
      "Sơ đồ ngữ cảnh hệ thống (System Context Diagram) & Dữ liệu chủ Source-of-Truth",
      "Ma trận bảo mật RBAC, giới hạn phạm vi tổ chức và phân tách nhiệm vụ kiểm soát (SoD)",
      "Các chỉ tiêu phi chức năng (NFR): Độ sẵn sàng 99.9%, Thời gian phản hồi báo cáo, Tải đỉnh",
      "Chính sách sao lưu dữ liệu tự động hàng ngày và kịch bản khôi phục sự cố (DR/Backup)",
    ],
  },
  {
    id: "tool-17",
    code: "Tool 17",
    name: "ROI Calculator Input Sheet",
    category: "Đề xuất & ROI",
    purpose: "Bảng thu thập số liệu thực tế của doanh nghiệp để chứng minh hiệu quả đầu tư: Giờ công tiết kiệm, Giảm tỷ lệ sai lệch bảng lương và Thời gian hoàn vốn.",
    stageIds: ["gd5"],
    deliverable: "Báo cáo phân tích hiệu quả kinh doanh & Hoàn vốn (Business Case & ROI)",
    keyChecklist: [
      "Số giờ làm việc thủ công của bộ phận HR/C&B mỗi kỳ chốt công và lương",
      "Số lượng sai sót bảng lương cần hiệu chỉnh trung bình mỗi năm",
      "Chi phí nhân công trực tiếp (Loaded labor cost) tính theo giờ của HR và Quản lý",
      "Xây dựng 3 kịch bản hoàn vốn: Thận trọng (Conservative), Cơ sở (Base) và Khả quan (Upside)",
    ],
  },
  {
    id: "tool-18",
    code: "Tool 18",
    name: "Pricing / TCO Checklist",
    category: "Đề xuất & ROI",
    purpose: "Bảng kiểm tra tổng chi phí sở hữu giải pháp trong vòng 3-5 năm: Bản quyền thuê bao, Dịch vụ triển khai, Chi phí hạ tầng và Đào tạo.",
    stageIds: ["gd5"],
    deliverable: "Bảng dự toán tổng chi phí sở hữu TCO minh bạch (3-Year TCO Sheet)",
    keyChecklist: [
      "Chi phí bản quyền Subscription theo số lượng nhân sự hoặc License vĩnh viễn",
      "Gói dịch vụ triển khai trọn gói (Fixed Scope) hoặc theo ngày công chuyên gia (T&M)",
      "Chi phí tích hợp phần cứng máy chấm công và các hệ thống phần mềm liên quan",
      "Dự trù chi phí đào tạo chuyển giao tri thức và hỗ trợ tăng cường Hypercare",
    ],
  },
  {
    id: "tool-19",
    code: "Tool 19",
    name: "Competitor Matrix",
    category: "Đề xuất & ROI",
    purpose: "Ma trận so sánh khách quan điểm mạnh/yếu của các giải pháp trên thị trường theo các tiêu chí: Độ sâu chấm công/lương, Mobile App, Tính bản địa hóa pháp lý Việt Nam.",
    stageIds: ["gd5"],
    deliverable: "Ma trận so sánh vị thế giải pháp (Competitive Positioning Report)",
    keyChecklist: [
      "Độ sâu xử lý nghiệp vụ bản địa hóa: Luật BHXH, Luật Lao động, Biểu thuế TNCN 2026",
      "Độ linh hoạt cấu hình công thức lương và tính ổn định khi xử lý dữ liệu lớn",
      "Mức độ hoàn thiện của hệ thống ứng dụng di động tự phục vụ (Employee/Manager App)",
      "Thời gian triển khai nhanh chóng và chất lượng dịch vụ hỗ trợ kỹ thuật tại chỗ",
    ],
  },
  {
    id: "tool-20",
    code: "Tool 20",
    name: "Implementation Readiness Assessment",
    category: "Triển khai",
    purpose: "Bảng tự đánh giá mức độ sẵn sàng triển khai trên 8 chiều trọng yếu: Cam kết lãnh đạo, Độ rõ ràng quy trình, Chất lượng dữ liệu, Đội dự án, Kiểm thử và Chuyển đổi.",
    stageIds: ["gd6", "gd7", "gd8"],
    deliverable: "Bảng chấm điểm độ sẵn sàng triển khai (Go-Live Readiness Scorecard)",
    keyChecklist: [
      "Tài trợ từ Ban Giám Đốc (Executive Sponsorship) và cơ chế ra quyết định kịp thời",
      "Độ rõ ràng của quy trình và quy chế lương thưởng trước khi đưa vào phần mềm",
      "Mức độ sạch của dữ liệu nhân sự (Data Quality) sẵn sàng cho việc di chuyển (Migration)",
      "Kế hoạch kiểm thử chấp nhận người dùng (UAT) và phương án dự phòng khi Go-live",
    ],
  },
];

