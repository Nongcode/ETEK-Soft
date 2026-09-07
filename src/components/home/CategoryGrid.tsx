import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CategoryCard from "@/components/home/CategoryCard";
import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionTitle eyebrow="Danh mục" title="Danh mục phần mềm" description="Khám phá đầy đủ các nhóm phần mềm bản quyền phù hợp với quy mô doanh nghiệp của bạn." />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
