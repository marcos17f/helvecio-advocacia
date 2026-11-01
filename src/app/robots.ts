import type { MetadataRoute } from "next";
import { escritorio } from "@/lib/escritorio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${escritorio.siteUrl}/sitemap.xml`,
  };
}
