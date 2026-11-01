import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { escritorio } from "@/lib/escritorio";
import { FaixaCta } from "@/components/Ui";
import { buscarArtigo, formatarData, listarArtigos } from "@/lib/artigos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listarArtigos().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artigo = buscarArtigo((await params).slug);
  if (!artigo) return {};
  return {
    title: artigo.titulo,
    description: artigo.resumo,
    openGraph: { type: "article", title: artigo.titulo, description: artigo.resumo },
  };
}

export default async function ArtigoPage({ params }: Props) {
  const artigo = buscarArtigo((await params).slug);
  if (!artigo) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: artigo.titulo,
    datePublished: artigo.data,
    author: { "@type": "Person", name: "Helvécio Pinheiro" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <div className="container-site py-16">
          <article className="mx-auto flex max-w-[720px] flex-col gap-6">
            <Link href="/artigos" className="self-start text-sm font-semibold text-verde">← Todos os artigos</Link>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-soft">
              {artigo.area} · {formatarData(artigo.data)}
            </span>
            <h1 className="m-0 font-serif text-[clamp(32px,4vw,46px)] font-normal leading-[1.2]">{artigo.titulo}</h1>
            <p className="m-0 border-b border-linha pb-6 text-sm text-soft">
              Por {escritorio.advogado} · {escritorio.oab}
            </p>
            {/* O HTML vem dos arquivos .md da própria pasta content/, escritos pelo escritório. */}
            <div className="artigo text-[18px] leading-[1.75]" dangerouslySetInnerHTML={{ __html: artigo.html }} />
          </article>
        </div>
        <FaixaCta />
      </main>
      <Footer />
    </>
  );
}
