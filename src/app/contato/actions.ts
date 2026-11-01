"use server";

/**
 * Server Action do formulário de contato (roda no servidor, como um endpoint POST).
 * Com RESEND_API_KEY e CONTATO_EMAIL definidos, envia um e-mail para o escritório.
 * Sem eles, só registra no log do servidor (útil em desenvolvimento).
 */

export type EstadoContato = {
  ok: boolean;
  mensagem: string;
  erros?: Partial<Record<"nome" | "whatsapp" | "assunto" | "resumo", string>>;
};

const ASSUNTOS = ["Direito Agrário", "Direito Empresarial", "Outro assunto"];

export async function enviarContato(_anterior: EstadoContato, form: FormData): Promise<EstadoContato> {
  const nome = String(form.get("nome") ?? "").trim();
  const whatsapp = String(form.get("whatsapp") ?? "").trim();
  const assunto = String(form.get("assunto") ?? "");
  const resumo = String(form.get("resumo") ?? "").trim();
  // Campo escondido: robôs costumam preenchê-lo, pessoas não.
  if (String(form.get("site") ?? "")) return { ok: true, mensagem: "Mensagem enviada." };

  const erros: EstadoContato["erros"] = {};
  if (nome.length < 3) erros.nome = "Informe seu nome.";
  if (whatsapp.replace(/\D/g, "").length < 10) erros.whatsapp = "Informe um WhatsApp com DDD.";
  if (!ASSUNTOS.includes(assunto)) erros.assunto = "Escolha o assunto.";
  if (resumo.length < 10) erros.resumo = "Conte um pouco sobre o seu caso.";
  if (Object.keys(erros).length) return { ok: false, mensagem: "Confira os campos destacados.", erros };

  const texto = `Novo contato pelo site\n\nNome: ${nome}\nWhatsApp: ${whatsapp}\nAssunto: ${assunto}\n\n${resumo}`;
  const chave = process.env.RESEND_API_KEY;
  const destino = process.env.CONTATO_EMAIL;

  if (chave && destino) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${chave}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTATO_REMETENTE ?? "Site <onboarding@resend.dev>",
        to: [destino],
        subject: `Contato pelo site: ${assunto}`,
        text: texto,
      }),
    });
    if (!res.ok) {
      return { ok: false, mensagem: "Não foi possível enviar agora. Tente pelo WhatsApp do escritório." };
    }
  } else {
    console.info(texto);
  }

  return { ok: true, mensagem: `Mensagem enviada, ${nome.split(" ")[0]}. O escritório retorna pelo WhatsApp informado.` };
}
