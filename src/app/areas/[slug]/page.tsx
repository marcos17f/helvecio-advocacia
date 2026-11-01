import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerPagina } from "@/components/Ui";
import { SecaoContato } from "@/components/SecaoContato";
import { areas, escritorio } from "@/lib/escritorio";
import { buscarArea, slugArea } from "@/lib/areas";

type Props = { params: Promise<{ slug: string }> };

/** Gera /areas/direito-agrario e /areas/direito-empresarial no build (como rotas estáticas). */
export function generateStaticParams() {
  return areas.map((a) => ({ slug: slugArea(a.nome) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = buscarArea((await params).slug);
  if (!area) return {};
  return {
    title: `${area.nome} em ${escritorio.cidade}`,
    description: `${area.resumo} ${escritorio.advogado}, ${escritorio.oab}.`,
  };
}

export default async function AreaPage({ params }: Props) {
  const area = buscarArea((await params).slug);
  if (!area) notFound();

  return (
    <>
      <Header />
      <main>
        <BannerPagina eyebrow="Área de atuação" titulo={`${area.nome} em ${escritorio.cidade}`}>
          <p className="m-0 max-w-[620px] text-lg font-light text-[#c9c3b5]">{area.resumo}</p>
          <Link href="/#areas" className="self-start text-sm font-semibold text-latao">← Todas as áreas</Link>
          {/* [Texto de apresentação da área, escrito com o Dr. Helvécio: 2 ou 3 parágrafos ajudam muito no Google.] */}
        </BannerPagina>

        <section className="border-y border-linha bg-white py-16">
          <div className="container-site flex flex-col gap-8">
            <h2 className="title">Como o escritório atua</h2>
            <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-px border border-linha bg-linha p-0">
              {area.itens.map((item) => (
                <li key={item} className="bg-white p-7 font-serif text-lg">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <SecaoContato assuntoInicial={area.nome} />
      </main>
      <Footer />
    </>
  );
}
