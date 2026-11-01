import { escritorio, linkWhatsapp } from "@/lib/escritorio";
import { FormularioContato } from "./FormularioContato";

export function SecaoContato({ assuntoInicial }: { assuntoInicial?: string }) {
  const mapa = escritorio.enderecoMapa;
  const dados: [string, string][] = [
    ["Endereço", `${escritorio.endereco}, ${escritorio.cidade}`],
    ["Atendimento", escritorio.cidadesAtendidas],
    ["WhatsApp", escritorio.whatsapp || "[Número do escritório]"],
    ["Instagram", `@${escritorio.instagram}`],
  ];

  return (
    <section id="contato" className="bg-noite text-papel">
      <div className="container-site grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-18 py-28">
        <div className="flex flex-col gap-7">
          <p className="eyebrow text-latao">Contato</p>
          <h2 className="title">Converse com o escritório.</h2>
          <p className="m-0 max-w-[460px] text-[17px] text-[#c9c3b5]">
            Envie um resumo do seu caso. O retorno é feito pelo WhatsApp ou por e-mail.
          </p>
          <dl className="m-0 flex flex-col border-t border-noite-linha">
            {dados.map(([rotulo, valor]) => (
              <div key={rotulo} className="flex flex-wrap gap-x-6 gap-y-1 border-b border-noite-linha py-4.5">
                <dt className="flex-[0_0_130px] text-xs uppercase tracking-[0.16em] text-latao">{rotulo}</dt>
                <dd className="m-0 flex-[1_1_220px]">{valor}</dd>
              </div>
            ))}
          </dl>
          {escritorio.whatsapp && (
            <a href={linkWhatsapp()} className="btn btn-claro self-start">Chamar no WhatsApp</a>
          )}
          {mapa && (
            <iframe
              title={`Mapa: ${escritorio.endereco}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapa)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[240px] w-full border-0 grayscale"
            />
          )}
        </div>
        <div className="bg-papel p-11 text-ink">
          <FormularioContato assuntoInicial={assuntoInicial} />
        </div>
      </div>
    </section>
  );
}
