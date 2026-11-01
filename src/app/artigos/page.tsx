import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerPagina, FaixaCta } from "@/components/Ui";
import { formatarData, listarArtigos } from "@/lib/artigos";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Análises jurídicas do Dr. Helvécio Pinheiro sobre Direito Agrário, Empresarial e temas atuais.",
};

export default function ArtigosPage() {
  const artigos = listarArtigos();
  return (
    <>
      <Header />
      <main>
        <BannerPagina eyebrow="Artigos" titulo="Análises jurídicas">
          <p className="m-0 max-w-[620px] text-lg font-light text-[#c9c3b5]">
            Temas atuais do Direito explicados para quem produz e empreende.
          </p>
        </BannerPagina>
        <div className="container-site flex flex-col py-18">
          {artigos.map((a) => (
            <Link key={a.slug} href={`/artigos/${a.slug}`} className="flex flex-col gap-2 border-b border-linha py-7 text-ink no-underline">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-soft">
                {a.area} · {formatarData(a.data)}
              </span>
              <span className="font-serif text-2xl leading-snug">{a.titulo}</span>
              {a.resumo && <span className="max-w-[720px] text-muted">{a.resumo}</span>}
            </Link>
          ))}
        </div>
        <FaixaCta />
      </main>
      <Footer />
    </>
  );
}
