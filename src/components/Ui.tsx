import Image from "next/image";
import Link from "next/link";
import { escritorio, linkWhatsapp } from "@/lib/escritorio";

type FotoProps = {
  src?: string;
  alt: string;
  placeholder: string;
  className?: string;
  tom?: "claro" | "escuro";
  priority?: boolean;
};

/** Mostra a foto, ou um espaço reservado quando o caminho está vazio. */
export function Foto({ src, alt, placeholder, className = "", tom = "claro", priority }: FotoProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill priority={priority} quality={90} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
      </div>
    );
  }
  const cores = tom === "escuro" ? "bg-verde-2 text-[#e9e4d8]" : "bg-areia text-ink";
  return (
    <div role="img" aria-label={alt} className={`flex items-end p-6 text-[15px] ${cores} ${className}`}>
      [{placeholder}]
    </div>
  );
}

export function IconeArea({ tipo }: { tipo: "campo" | "empresa" }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-verde">
      {tipo === "campo" ? (
        <>
          <path d="M12 21V11" />
          <path d="M12 11c0-4 3-7 7-7 0 4-3 7-7 7Z" />
          <path d="M12 14c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5Z" />
          <path d="M4 21h16" />
        </>
      ) : (
        <>
          <rect x="3" y="7" width="18" height="13" rx="1" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 13h18" />
        </>
      )}
    </svg>
  );
}

/** Abertura escura das páginas internas (continua o cabeçalho). */
export function BannerPagina({ eyebrow, titulo, children }: { eyebrow: string; titulo: string; children?: React.ReactNode }) {
  return (
    <section className="bg-noite text-papel">
      <div className="container-site flex flex-col gap-6 pb-20 pt-16">
        <p className="eyebrow flex items-center gap-4 text-latao">
          <span aria-hidden="true" className="inline-block h-px w-12 bg-latao" />
          {eyebrow}
        </p>
        <h1 className="m-0 max-w-[900px] font-serif text-[clamp(38px,5vw,64px)] font-normal leading-[1.06]">{titulo}</h1>
        {children}
      </div>
    </section>
  );
}

/** Faixa de fechamento das páginas que não têm a seção de contato completa. */
export function FaixaCta() {
  return (
    <section className="bg-verde text-papel">
      <div className="container-site flex flex-wrap items-center justify-between gap-8 py-20">
        <div className="flex max-w-[620px] flex-col gap-3">
          <p className="eyebrow text-latao">Atendimento</p>
          <h2 className="title">Converse com o escritório.</h2>
          <p className="m-0 text-[17px] text-[#c9c3b5]">Agende uma consulta e receba orientação jurídica para o seu caso.</p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <Link href="/#contato" className="btn btn-latao">Solicitar atendimento</Link>
          {escritorio.whatsapp && <a href={linkWhatsapp()} className="btn btn-claro">WhatsApp</a>}
        </div>
      </div>
    </section>
  );
}

/** Botão fixo no canto da tela. Sem número cadastrado, leva ao formulário. */
export function BotaoFlutuante() {
  const temWhats = !!escritorio.whatsapp;
  return (
    <a
      href={linkWhatsapp()}
      aria-label={temWhats ? "Conversar pelo WhatsApp" : "Fale conosco"}
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-latao text-noite shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    </a>
  );
}
