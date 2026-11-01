import Link from "next/link";
import { escritorio } from "@/lib/escritorio";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3.5 text-papel no-underline">
      <span className="inline-flex size-11 items-center justify-center border border-latao font-serif text-lg tracking-[0.04em] text-latao">
        FRP
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-serif text-xl">{escritorio.nome}</span>
        <span className="text-[10px] uppercase tracking-[0.4em] text-latao">{escritorio.sufixo}</span>
      </span>
    </Link>
  );
}

const menu = [
  { href: "/#areas", texto: "Atuação" },
  { href: "/#sobre", texto: "O advogado" },
  { href: "/#publicacoes", texto: "Publicações" },
  { href: "/artigos", texto: "Artigos" },
  { href: "/#contato", texto: "Contato" },
];

const botao =
  "inline-flex min-h-[46px] items-center border border-latao px-5 text-papel no-underline hover:bg-latao hover:text-noite";

/** Cabeçalho escuro e fixo; na home ele continua visualmente na abertura (mesma cor de fundo). */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-noite-linha bg-noite/95 backdrop-blur">
      <div className="container-site flex items-center justify-between gap-5 py-5">
        <Logo />
        <nav aria-label="Menu principal" className="hidden items-center gap-x-7 text-[13px] uppercase tracking-[0.08em] lg:flex">
          {menu.map((m) => (
            <Link key={m.href} href={m.href} className="text-[#d8d2c4] no-underline hover:text-latao">
              {m.texto}
            </Link>
          ))}
          <Link href="/#contato" className={botao}>Fale com especialista</Link>
        </nav>
        {/* Menu do celular com <details>: abre e fecha sem JavaScript */}
        <details className="group lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center border border-latao text-papel [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Abrir menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" className="group-open:hidden" />
              <path d="M6 6l12 12M18 6 6 18" className="hidden group-open:block" />
            </svg>
          </summary>
          <nav aria-label="Menu principal" className="absolute inset-x-0 top-full flex flex-col border-b border-noite-linha bg-noite px-6 pb-6 text-sm uppercase tracking-[0.08em]">
            {menu.map((m) => (
              <Link key={m.href} href={m.href} className="border-b border-noite-linha py-4 text-[#d8d2c4] no-underline">
                {m.texto}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
