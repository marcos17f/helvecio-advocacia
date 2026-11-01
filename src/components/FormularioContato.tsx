"use client";

import { useActionState } from "react";
import { enviarContato, type EstadoContato } from "@/app/contato/actions";

const inicial: EstadoContato = { ok: false, mensagem: "" };

function Erro({ texto, id }: { texto?: string; id: string }) {
  if (!texto) return null;
  return (
    <span id={id} className="text-sm text-[#8a3b1e]">
      {texto}
    </span>
  );
}

export function FormularioContato({ assuntoInicial = "" }: { assuntoInicial?: string }) {
  // useActionState: liga o formulário à Server Action e guarda a resposta (parecido com um FormGroup + submit no Angular).
  const [estado, acao, enviando] = useActionState(enviarContato, inicial);

  if (estado.ok) {
    return (
      <div className="flex flex-col items-start gap-4 py-6" role="status">
        <span className="inline-flex size-14 items-center justify-center border border-verde">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1f3a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <p className="m-0 font-serif text-[30px] leading-snug">{estado.mensagem}</p>
      </div>
    );
  }

  const e = estado.erros ?? {};
  return (
    <form action={acao} className="flex flex-col gap-4.5" noValidate>
      <h3 className="m-0 font-serif text-[32px] font-normal">Solicitar atendimento</h3>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="nome" className="text-sm font-semibold">Qual o seu nome?</label>
        <input id="nome" name="nome" type="text" autoComplete="name" className="campo" aria-invalid={!!e.nome} aria-describedby="erro-nome" />
        <Erro id="erro-nome" texto={e.nome} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="whatsapp" className="text-sm font-semibold">Qual o seu WhatsApp, com DDD?</label>
        <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" placeholder="(89) 90000-0000" className="campo" aria-invalid={!!e.whatsapp} aria-describedby="erro-whatsapp" />
        <Erro id="erro-whatsapp" texto={e.whatsapp} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="assunto" className="text-sm font-semibold">Qual o assunto?</label>
        <select id="assunto" name="assunto" defaultValue={assuntoInicial} className="campo" aria-invalid={!!e.assunto} aria-describedby="erro-assunto">
          <option value="">Selecione</option>
          <option>Direito Agrário</option>
          <option>Direito Empresarial</option>
          <option>Outro assunto</option>
        </select>
        <Erro id="erro-assunto" texto={e.assunto} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="resumo" className="text-sm font-semibold">Como podemos ajudar?</label>
        <textarea id="resumo" name="resumo" rows={4} className="campo resize-y py-3" aria-invalid={!!e.resumo} aria-describedby="erro-resumo" />
        <Erro id="erro-resumo" texto={e.resumo} />
      </div>

      {/* armadilha para robôs */}
      <input type="text" name="site" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <p className="m-0 text-[13px] text-soft">Seus dados são usados apenas para o retorno do contato.</p>
      {estado.mensagem && (
        <p role="alert" className="m-0 border border-[#e2b9a8] bg-[#fbefe9] px-4 py-3 text-[15px] text-[#8a3b1e]">
          {estado.mensagem}
        </p>
      )}
      <button type="submit" disabled={enviando} className="btn btn-primary">
        {enviando ? "Enviando…" : "Enviar mensagem"}
      </button>
    </form>
  );
}
