import type { MetadataRoute } from "next";
import { areas, escritorio } from "@/lib/escritorio";
import { slugArea } from "@/lib/areas";
import { listarArtigos } from "@/lib/artigos";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = escritorio.siteUrl;
  return [
    { url: base, priority: 1 },
    ...areas.map((a) => ({ url: `${base}/areas/${slugArea(a.nome)}`, priority: 0.9 })),
    { url: `${base}/artigos`, priority: 0.7 },
    ...listarArtigos().map((a) => ({ url: `${base}/artigos/${a.slug}`, lastModified: a.data || undefined, priority: 0.6 })),
  ];
}
