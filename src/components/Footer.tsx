import Link from "next/link";
import { areas, escritorio } from "@/lib/escritorio";
import { slugArea } from "@/lib/areas";

export function Footer() {
  return (
    <footer className="bg-[#0c1612] py-14 text-[#e9e4d8]">
      <div className="container-site grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10">
        <div className="flex flex-col gap-1.5">
          <span className="font-serif text-[22px]">
            {escritorio.nome} {escritorio.sufixo}
          </span>
          <span className="text-[13px] text-[#bfc6be]">
            {escritorio.advogado} · {escritorio.oab}
          </span>
          <span className="text-[13px] text-[#bfc6be]">
            {escritorio.endereco}, {escritorio.cidade}
          </span>
        </div>
        <nav aria-label="Áreas de atuação" className="flex flex-col gap-2 text-sm">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-latao">Áreas</span>
          {areas.map((a) => (
            <Link key={a.nome} href={`/areas/${slugArea(a.nome)}`} className="text-[#e9e4d8] no-underline hover:underline">
              {a.nome}
            </Link>
          ))}
        </nav>
        <nav aria-label="Conteúdo" className="flex flex-col gap-2 text-sm">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-latao">Conteúdo</span>
          <Link href="/artigos" className="text-[#e9e4d8] no-underline hover:underline">Artigos</Link>
          <Link href="/#publicacoes" className="text-[#e9e4d8] no-underline hover:underline">Livros e publicações</Link>
          <a
            href={`https://www.instagram.com/${escritorio.instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e9e4d8] no-underline hover:underline"
          >
            Instagram @{escritorio.instagram}
          </a>
        </nav>
      </div>
      <div className="container-site mt-10 flex flex-wrap justify-between gap-3 border-t border-[#33403a] pt-6 text-[13px] text-[#bfc6be]">
        <span>Conteúdo de caráter informativo, conforme o Código de Ética e Disciplina da OAB.</span>
        <span>© {new Date().getFullYear()} · Site por MarcosLab</span>
      </div>
    </footer>
  );
}
