/**
 * Todos os dados do escritório ficam aqui.
 * O que está entre [colchetes] precisa ser confirmado com o Dr. Helvécio.
 */

export const escritorio = {
  nome: "Fonseca, Rosal & Pinheiro",
  sufixo: "Advogados",
  advogado: "Dr. Helvécio Pinheiro",
  oab: "OAB/PI 14.318",
  cidade: "Bom Jesus – PI",
  regiao: "Vale do Gurgueia",
  endereco: "[Endereço do escritório]",
  /** Usado no mapa e no link "Como chegar". Preencher junto com o endereço. */
  enderecoMapa: "",
  /** Só números, com 55 + DDD. Ex.: "5589999999999". */
  whatsapp: "",
  email: "",
  instagram: "helvecio_neto",
  cidadesAtendidas: "Bom Jesus e região: Gilbués, Santa Luz, Palmeira do Piauí e outras cidades do sul do Piauí",
  siteUrl: "https://www.helveciopinheiro.adv.br",
};

/** Fotos: coloque em /public/fotos e preencha o caminho. Vazio = espaço reservado. */
export const fotos = {
  escritorio: "/fotos/helvecio-lancamento.jpg",
  advogado: "/fotos/helvecio-retrato.jpg",
};

export const trajetoria = [
  { titulo: "Professor de Direito", detalhe: "Universidade Estadual do Piauí" },
  { titulo: "Juiz leigo, 2019–2023", detalhe: "Tribunal de Justiça do Piauí" },
  { titulo: "Autor de obras jurídicas", detalhe: "ESA-PI, Editora Lutz e TRE-PI" },
  { titulo: "Colunista jurídico", detalhe: "Portal Ponto X" },
];

/** Faixa de números da home. O que está entre [colchetes] precisa ser confirmado. */
export const numeros = [
  { valor: "[X]+", rotulo: "anos de advocacia" },
  { valor: "4", rotulo: "anos como juiz leigo no TJ-PI" },
  { valor: "3", rotulo: "publicações jurídicas" },
  { valor: "[X]", rotulo: "municípios atendidos no sul do Piauí" },
];

/** Forma de trabalho (tom informativo, sem promessa de resultado: Provimento 205/2021). */
export const valores = [
  { titulo: "Atendimento direto", texto: "Cada caso é conduzido pessoalmente pelo advogado, do primeiro contato à solução." },
  { titulo: "Conhecimento do campo", texto: "Vivência na realidade do cerrado piauiense: contratos, safras, terras e famílias." },
  { titulo: "Clareza", texto: "Riscos, prazos e caminhos explicados em linguagem simples, sem juridiquês." },
  { titulo: "Prevenção", texto: "Contratos e estruturas bem feitos hoje evitam litígios caros amanhã." },
];

export type Area = { nome: string; resumo: string; icone: "campo" | "empresa"; itens: string[] };

/** Serviços comuns de cada área: confirmar quais o escritório realmente faz. */
export const areas: Area[] = [
  {
    nome: "Direito Agrário",
    resumo: "Segurança jurídica para quem produz no cerrado piauiense, da posse da terra ao financiamento da safra.",
    icone: "campo",
    itens: [
      "Regularização fundiária e de imóveis rurais",
      "Contratos de arrendamento e parceria rural",
      "Crédito rural e renegociação de dívidas",
      "Ações possessórias e questões de divisa",
      "Compliance no agronegócio",
    ],
  },
  {
    nome: "Direito Empresarial",
    resumo: "Assessoria a empresas do sul do Piauí em cada etapa do negócio, da constituição à sucessão.",
    icone: "empresa",
    itens: [
      "Constituição e alteração de sociedades",
      "Elaboração e revisão de contratos",
      "Recuperação de crédito e cobranças",
      "Planejamento societário e sucessório",
    ],
  },
];

export type Publicacao = {
  rotulo: string;
  titulo: string;
  descricao?: string;
  detalhe: string;
  capa: string;
  links: { texto: string; url: string }[];
};

export const publicacoes: Publicacao[] = [
  {
    rotulo: "Obra coletiva · 2023",
    titulo: "Revista Científica da ESA Piauí",
    descricao:
      "Um dos 16 autores selecionados por conselho editorial entre mais de 20 mil advogados do Piauí, e o único do sul do estado.",
    detalhe: "Escola Superior de Advocacia do Piauí (ESA-PI) · 2023",
    capa: "/fotos/capa-esa-2023.jpg",
    links: [
      {
        texto: "Matéria no Portal Ponto X",
        url: "https://portalpontox.com/noticias/livro-de-advogado-bonjesuense-e-publicado-pela-escola-superior-de-advocacia-do-piaui/47805",
      },
    ],
  },
  {
    rotulo: "Livro · Direito Agrário · 2025",
    titulo: "Direito Agrário: Perspectivas e Desafios Contemporâneos",
    descricao:
      "Coautor, com o capítulo “Cultivando Conformidade: o compliance como aliado do agronegócio”. Lançado na ESA-PI em setembro de 2025.",
    detalhe: "Editora Lutz · 2025",
    capa: "/fotos/capa-direito-agrario.jpg",
    links: [
      {
        texto: "Sobre a obra",
        url: "https://portalpontox.com/noticias/obra-sobre-direito-agrario-propoe-o-compliance-como-aliado-estrategico-do-agronegocio-brasileiro/62081",
      },
      {
        texto: "Lançamento oficial",
        url: "https://portalpontox.com/noticias/advogado-do-sul-do-piaui-lanca-obra-com-novas-perspectivas-sobre-o-agronegocio/62284",
      },
    ],
  },
  {
    rotulo: "Artigo · Direito Eleitoral · 2026",
    titulo: "Democracia constitucional e autocontenção judicial: regulação do discurso eleitoral no Brasil",
    descricao: "Artigo em coautoria na Revista Eleições & Cidadania, n. 9, do Tribunal Regional Eleitoral do Piauí.",
    detalhe: "TRE-PI · 2026",
    capa: "/fotos/capa-eleicoes-cidadania.jpg",
    links: [
      {
        texto: "Matéria no Portal Ponto X",
        url: "https://portalpontox.com/amp/noticias/helvecio-pinheiro-destaca-relevancia-de-artigo-sobre-limites-do-discurso-eleitoral-em-lancamento-da-revista-eleicoes-cidadania/63590",
      },
    ],
  },
];

export function linkWhatsapp(mensagem = "Olá! Gostaria de falar com o escritório.") {
  if (!escritorio.whatsapp) return "/#contato";
  return `https://wa.me/${escritorio.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
