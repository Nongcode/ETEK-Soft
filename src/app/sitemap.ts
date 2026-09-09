import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { newsArticles } from "@/data/news";
import { guides } from "@/data/guides";
import { jobs } from "@/data/jobs";

const siteUrl = "https://etek-soft.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/gioi-thieu",
    "/san-pham",
    "/tin-tuc",
    "/huong-dan",
    "/tuyen-dung",
    "/lien-he",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${siteUrl}/san-pham/${p.slug}`,
    lastModified: new Date(p.createdAt),
  }));

  const newsRoutes = newsArticles.map((n) => ({
    url: `${siteUrl}/tin-tuc/${n.slug}`,
    lastModified: new Date(n.date),
  }));

  const guideRoutes = guides.map((g) => ({
    url: `${siteUrl}/huong-dan/${g.slug}`,
    lastModified: new Date(g.date),
  }));

  const jobRoutes = jobs.map((j) => ({
    url: `${siteUrl}/tuyen-dung/${j.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes, ...newsRoutes, ...guideRoutes, ...jobRoutes];
}
