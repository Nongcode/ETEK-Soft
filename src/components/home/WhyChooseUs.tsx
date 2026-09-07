import { BadgeCheck, Headset, Rocket, ShieldCheck, Tags, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/home/FeatureCard";

const features = [
  { icon: BadgeCheck, title: "Phần mềm chính hãng", description: "100% license được cấp trực tiếp từ nhà sản xuất, có hóa đơn VAT đầy đủ." },
  { icon: ShieldCheck, title: "License minh bạch", description: "Thông tin thời hạn, số lượng người dùng rõ ràng, không phát sinh chi phí ẩn." },
  { icon: Users, title: "Tư vấn chuyên nghiệp", description: "Đội ngũ tư vấn hiểu sâu về hạ tầng CNTT giúp chọn đúng giải pháp." },
  { icon: Headset, title: "Hỗ trợ kỹ thuật", description: "Hỗ trợ kích hoạt, cài đặt và xử lý sự cố nhanh chóng trong giờ hành chính." },
  { icon: Rocket, title: "Triển khai nhanh chóng", description: "Nhận license qua email trong 15-30 phút sau khi hoàn tất thanh toán." },
  { icon: Tags, title: "Giá cạnh tranh", description: "Chính sách giá minh bạch, ưu đãi tốt cho đơn hàng số lượng lớn." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <SectionTitle eyebrow="Vì sao chọn chúng tôi" title="Tại sao doanh nghiệp lựa chọn chúng tôi?" align="center" />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </section>
  );
}
