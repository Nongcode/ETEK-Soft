import { Product } from "@/types";
import { products } from "@/data/products";

/**
 * Bộ máy gợi ý sản phẩm (content-based) — chạy hoàn toàn phía server dựa trên
 * thuộc tính sản phẩm (danh mục, thương hiệu, license, đối tượng, hệ điều hành, giá).
 * Không phụ thuộc dữ liệu hành vi người dùng nên tính toán lại tức thời mỗi khi
 * trang chi tiết sản phẩm được render — sau này có thể thay bằng API gợi ý
 * (collaborative filtering / lịch sử mua hàng) mà không cần đổi chỗ gọi ở UI.
 */

const SIMILARITY_WEIGHTS = {
  sameCategory: 40,
  sameBrand: 15,
  sameLicenseType: 10,
  audienceOverlap: 6,
  osOverlap: 4,
  priceProximity: 15,
};

function similarityScore(base: Product, candidate: Product): number {
  let score = 0;

  if (candidate.categorySlug === base.categorySlug) score += SIMILARITY_WEIGHTS.sameCategory;
  if (candidate.brand === base.brand) score += SIMILARITY_WEIGHTS.sameBrand;
  if (candidate.licenseType === base.licenseType) score += SIMILARITY_WEIGHTS.sameLicenseType;

  const audienceOverlap = candidate.audience.filter((a) => base.audience.includes(a)).length;
  score += audienceOverlap * SIMILARITY_WEIGHTS.audienceOverlap;

  const osOverlap = (candidate.os ?? []).filter((o) => (base.os ?? []).includes(o)).length;
  score += osOverlap * SIMILARITY_WEIGHTS.osOverlap;

  // Giá càng gần nhau, điểm càng cao — chênh lệch từ 100% trở lên thì không cộng điểm.
  const priceDiffRatio = Math.abs(candidate.price - base.price) / base.price;
  score += Math.max(0, SIMILARITY_WEIGHTS.priceProximity * (1 - priceDiffRatio));

  return score;
}

/** "Sản phẩm tương tự" — các lựa chọn thay thế gần nhất với sản phẩm đang xem. */
export function getSimilarProducts(product: Product, limit = 4, excludeIds: string[] = []): Product[] {
  const excluded = new Set([product.id, ...excludeIds]);

  return products
    .filter((p) => !excluded.has(p.id))
    .map((p) => ({ product: p, score: similarityScore(product, p) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.product.reviewCount - a.product.reviewCount)
    .slice(0, limit)
    .map((entry) => entry.product);
}

/**
 * Bản đồ danh mục bổ trợ — mô phỏng quan hệ "thường được mua kèm" giữa các
 * nhóm phần mềm (vd: mua Windows thường kèm Antivirus/Office).
 */
const COMPLEMENTARY_CATEGORIES: Record<string, string[]> = {
  windows: ["antivirus", "office", "microsoft-365"],
  "windows-server": ["sql-server", "antivirus", "phan-mem-doanh-nghiep"],
  "sql-server": ["windows-server", "phan-mem-doanh-nghiep"],
  office: ["antivirus", "windows", "microsoft-365"],
  "microsoft-365": ["antivirus", "phan-mem-doanh-nghiep"],
  antivirus: ["windows", "microsoft-365", "office"],
  "phan-mem-doanh-nghiep": ["microsoft-365", "antivirus"],
  microsoft: ["antivirus", "office"],
};

/** "Sản phẩm mua kèm" — cross-sell theo danh mục bổ trợ, ưu tiên bán chạy/đánh giá cao. */
export function getBundleProducts(product: Product, limit = 3, excludeIds: string[] = []): Product[] {
  const excluded = new Set([product.id, ...excludeIds]);
  const complementaryCategories = COMPLEMENTARY_CATEGORIES[product.categorySlug] ?? [];

  function rank(a: Product, b: Product) {
    return Number(b.bestseller) - Number(a.bestseller) || b.rating - a.rating || b.reviewCount - a.reviewCount;
  }

  const primary = products
    .filter((p) => !excluded.has(p.id) && complementaryCategories.includes(p.categorySlug))
    .sort(rank);

  const result = primary.slice(0, limit);

  if (result.length < limit) {
    const filled = new Set([...excluded, ...result.map((p) => p.id)]);
    const fallback = products
      .filter((p) => !filled.has(p.id) && p.categorySlug !== product.categorySlug)
      .sort(rank);
    result.push(...fallback.slice(0, limit - result.length));
  }

  return result;
}
