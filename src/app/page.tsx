import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Foto, IconeArea } from "@/components/Ui";
import { SecaoContato } from "@/components/SecaoContato";
import { areas, escritorio, fotos, linkWhatsapp, numeros, publicacoes, trajetoria, valores } from "@/lib/escritorio";
import { slugArea } from "@/lib/areas";
import { listarArtigos } from "@/lib/artigos";

/** Dados estruturados para o Google (escritório de advocacia local). */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: `${escritorio.nome} ${escritorio.sufixo}`,
  url: escritorio.siteUrl,
  areaServed: "Sul do Piauí",
  knowsAbout: areas.map((a) => a.nome),
  address: { "@type": "PostalAddress", addressLocality: "Bom Jesus", addressRegion: "PI", addressCountry: "BR" },
  employee: {
    "@type": "Person",
    name: "Helvécio Pinheiro",
    jobTitle: "Advogado",
    sameAs: [`https://www.instagram.com/${escritorio.instagram}/`],
  },
};

const ROMANOS = ["I.", "II.", "III.", "IV."];

export default function Home() {
  const artigos = listarArtigos().slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main>
        {/* Abertura */}
        <section className="bg-noite text-papel">
          <div className="container-site flex flex-wrap items-end gap-16 pt-14">
            <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-8 pb-20">
              <p className="m-0 flex items-center gap-4 text-xs uppercase tracking-[0.32em] text-latao">
                <span aria-hidden="true" className="inline-block h-px w-12 bg-latao" />
                Bom Jesus · Vale do Gurgueia · Piauí
              </p>
              <h1 className="m-0 font-serif text-[clamp(44px,6vw,86px)] font-normal leading-[1.02] tracking-[-0.01em]">
                <strong className="font-medium">Referência em Direito Agrário</strong> para quem{" "}
                <em className="text-latao">constrói</em> o sul do Piauí.
              </h1>
              <p className="m-0 max-w-[520px] text-lg font-light text-[#c9c3b5]">
                Assessoria jurídica a produtores rurais, empresas e famílias, conduzida por um advogado que também ensina,
                escreve e já julgou.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <a href={linkWhatsapp("Olá, Dr. Helvécio! Gostaria de falar com um especialista.")} className="btn btn-latao">
                  Falar com especialista
                </a>
                <Link href="#areas" className="btn btn-claro">Áreas de atuação</Link>
              </div>
            </div>
            <div className="relative min-w-0 flex-[1_1_380px] pl-5">
              <div aria-hidden="true" className="absolute -right-5 -top-5 bottom-10 left-10 border border-latao opacity-60" />
              <Foto
                src={fotos.advogado}
                alt={`Retrato do ${escritorio.advogado}`}
                placeholder="Retrato do Dr. Helvécio, de terno, fundo escuro"
                tom="escuro"
                className="relative h-[600px] bg-noite-2"
                priority
              />
            </div>
          </div>

          <div className="border-t border-noite-linha">
            <div className="container-site grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))]">
              {trajetoria.map((t, i) => (
                <div key={t.titulo} className={`flex flex-col gap-2 py-8 pr-7 ${i > 0 ? "border-l border-noite-linha pl-7" : ""}`}>
                  <span className="font-serif text-[15px] text-latao">{ROMANOS[i]}</span>
                  <span className="text-[17px] font-medium">{t.titulo}</span>
                  <span className="text-sm text-[#a9b2ab]">{t.detalhe}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Números */}
        <section aria-label="O escritório em números" className="border-b border-linha bg-white">
          <dl className="container-site my-0 grid grid-cols-2 lg:grid-cols-4">
            {numeros.map((n, i) => (
              <div key={n.rotulo} className={`flex flex-col gap-1 py-10 pr-6 ${i % 2 ? "border-l border-linha pl-6" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}>
                <dt className="order-2 text-sm text-muted">{n.rotulo}</dt>
                <dd className="order-1 m-0 font-serif text-[clamp(40px,4.4vw,60px)] leading-none text-verde">{n.valor}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* O escritório */}
        <section className="revelar container-site flex flex-wrap gap-16 py-30">
          <p className="eyebrow flex-[0_0_200px]">O escritório</p>
          <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-7">
            <p className="m-0 font-serif text-[clamp(28px,3.2vw,42px)] leading-[1.3]">
              Onde a terra produz, o Direito precisa ser tão sólido quanto a safra. Conhecemos o cerrado piauiense, seus
              contratos, suas disputas e seus negócios.
            </p>
            <p className="m-0 max-w-[640px] text-[17px] text-muted">
              [Dois ou três parágrafos sobre a história do escritório, os sócios e a forma de trabalho, escritos com o Dr. Helvécio.]
            </p>
          </div>
        </section>

        {/* Áreas */}
        <section id="areas" className="border-y border-[#e2dacb] bg-white">
          <div className="container-site flex flex-col gap-14 py-28">
            <div className="flex flex-col gap-4">
              <p className="eyebrow">Áreas de atuação</p>
              <h2 className="title">Do campo à empresa.</h2>
              <p className="m-0 max-w-[560px] text-[17px] text-muted">
                Assessoria preventiva e atuação em processos para produtores rurais, empresas e famílias.
              </p>
            </div>
            {areas.map((area, i) => (
              <article key={area.nome} className="revelar flex flex-wrap gap-12 border-t border-ink pt-12">
                <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4.5">
                  <span className="font-serif text-[72px] leading-[0.9] text-verde">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="m-0 font-serif text-4xl font-normal">{area.nome}</h3>
                  <p className="m-0 max-w-[420px] text-[17px] text-muted">{area.resumo}</p>
                  <Link
                    href={`/areas/${slugArea(area.nome)}`}
                    className="inline-flex min-h-11 items-center self-start text-sm font-semibold uppercase tracking-[0.06em] text-verde"
                  >
                    Conheça a área →
                  </Link>
                </div>
                <ul className="m-0 grid min-w-0 flex-[1_1_480px] list-none grid-cols-[repeat(auto-fit,minmax(220px,1fr))] content-start gap-4 p-0">
                  {area.itens.map((item) => (
                    <li
                      key={item}
                      className="flex flex-col gap-4 border border-[#e2dacb] bg-papel p-6 transition-colors hover:border-latao"
                    >
                      <IconeArea tipo={area.icone} />
                      <span className="font-serif text-[19px] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* O advogado */}
        <section id="sobre" className="revelar container-site flex flex-wrap items-center gap-18 py-30">
          <Foto
            src={fotos.escritorio}
            alt={`${escritorio.advogado} no escritório`}
            placeholder="Foto do Dr. Helvécio no escritório ou em sala de aula"
            className="h-[600px] min-w-0 flex-[1_1_380px]"
          />
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
            <p className="eyebrow">O advogado</p>
            <h2 className="m-0 font-serif text-[clamp(40px,4.6vw,64px)] font-normal leading-[1.02]">
              Helvécio <em>Pinheiro</em>
            </h2>
            <p className="m-0 text-lg text-muted">
              Advogado com atuação em Direito Agrário e Empresarial, procurador e professor de Direito na Universidade
              Estadual do Piauí. Foi juiz leigo do Tribunal de Justiça do Piauí entre 2019 e 2023. É autor de livros
              jurídicos e colunista do Portal Ponto X.
            </p>
            <p className="m-0 text-lg text-muted">
              Em 2023 foi um dos 16 autores selecionados para a obra coletiva da Escola Superior de Advocacia do Piauí, o
              único do sul do estado. Em 2025 lançou, na ESA-PI, o livro <em>Direito Agrário: Perspectivas e Desafios
              Contemporâneos</em> (Editora Lutz), com capítulo sobre compliance no agronegócio.
            </p>
            <dl className="mt-2 flex flex-wrap border-t border-ink">
              {[
                ["Inscrição", escritorio.oab],
                ["Docência", "Professor da UESPI"],
                ["Magistratura", "Juiz leigo TJ-PI, 2019–2023"],
                ["Atuação", "Sul do Piauí"],
              ].map(([rotulo, valor]) => (
                <div key={rotulo} className="flex flex-[1_1_160px] flex-col gap-0.5 pr-4 pt-4.5">
                  <dt className="text-xs uppercase tracking-[0.16em] text-soft">{rotulo}</dt>
                  <dd className="m-0 font-semibold">{valor}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Como trabalhamos */}
        <section className="border-t border-linha bg-white">
          <div className="revelar container-site flex flex-col gap-12 py-28">
            <div className="flex max-w-[640px] flex-col gap-4">
              <p className="eyebrow">Como trabalhamos</p>
              <h2 className="title">Advocacia próxima, técnica e preventiva.</h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-px border border-linha bg-linha">
              {valores.map((v, i) => (
                <div key={v.titulo} className="flex flex-col gap-3 bg-white p-8">
                  <span className="font-serif text-[15px] text-latao-escuro">{ROMANOS[i]}</span>
                  <h3 className="m-0 font-serif text-2xl font-normal">{v.titulo}</h3>
                  <p className="m-0 text-muted">{v.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publicações */}
        <section id="publicacoes" className="bg-verde text-papel">
          <div className="container-site flex flex-col gap-14 py-28">
            <div className="flex max-w-[640px] flex-col gap-4">
              <p className="eyebrow text-latao">Publicações</p>
              <h2 className="title">O Direito também se escreve.</h2>
              <p className="m-0 text-[17px] text-[#c9c3b5]">Livros e artigos que levam a experiência do sul do Piauí ao debate jurídico.</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10">
              {publicacoes.map((p, i) => (
                <article key={p.rotulo} className="revelar flex flex-col gap-4">
                  <Foto
                    src={p.capa}
                    alt={`Capa: ${p.titulo}`}
                    placeholder={`Capa ${i + 1}`}
                    className="aspect-[2/3] shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
                  />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-latao">{p.rotulo}</span>
                  <h3 className="m-0 font-serif text-[26px] font-normal leading-tight">{p.titulo}</h3>
                  <p className="m-0 text-[15px] text-[#c9c3b5]">{p.descricao ?? p.detalhe}</p>
                  <div className="flex flex-wrap gap-x-5">
                    {p.links.map((l) => (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-semibold text-papel">
                        {l.texto} →
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Artigos */}
        <section className="revelar container-site flex flex-col gap-12 py-30">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <p className="eyebrow">Artigos</p>
              <h2 className="title">Análises jurídicas</h2>
              <p className="m-0 max-w-[520px] text-[17px] text-muted">Temas atuais do Direito explicados para quem produz e empreende.</p>
            </div>
            <Link href="/artigos" className="inline-flex min-h-12 items-center text-sm font-semibold uppercase tracking-[0.06em] text-verde">
              Todos os artigos →
            </Link>
          </div>
          <div className="flex flex-col border-t border-ink">
            {artigos.map((a) => (
              <Link key={a.slug} href={`/artigos/${a.slug}`} className="group flex flex-wrap items-baseline gap-x-10 gap-y-3 border-b border-[#e2dacb] py-8 text-ink no-underline">
                <span className="flex-[0_0_200px] text-xs font-semibold uppercase tracking-[0.16em] text-soft">{a.area}</span>
                <span className="flex-[1_1_520px] font-serif text-[clamp(24px,2.4vw,32px)] leading-tight group-hover:text-verde-2">{a.titulo}</span>
                <span aria-hidden="true" className="text-xl text-latao-escuro transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </section>

        <SecaoContato />
      </main>

      <Footer />
    </>
  );
}
