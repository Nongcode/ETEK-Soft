import Container from "@/components/ui/Container";
import { partners } from "@/data/partners";

export default function PartnersSection() {
  return (
    <section className="border-y border-border bg-white py-12">
      <Container>
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.14em] text-muted">
          Được tin dùng cùng các thương hiệu công nghệ hàng đầu
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex h-16 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-background text-sm font-bold text-muted grayscale transition-all duration-200 hover:grayscale-0 hover:text-primary"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
