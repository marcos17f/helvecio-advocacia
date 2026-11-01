# Site – Fonseca, Rosal & Pinheiro Advogados (Dr. Helvécio Pinheiro)

Next.js 15 + React 19 + TypeScript + Tailwind 4. Sem banco de dados: o site é gerado estático e os artigos são arquivos Markdown.

## Rodando

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Páginas

| Rota | O que é |
|------|---------|
| `/` | Home: abertura, trajetória, áreas, o advogado, publicações, artigos, contato |
| `/areas/direito-agrario`, `/areas/direito-empresarial` | Uma página por área (boa para o Google: "advogado agrário Bom Jesus PI") |
| `/artigos` | Lista de artigos |
| `/artigos/[slug]` | Cada artigo, gerado a partir de `content/artigos/*.md` |
| `/sitemap.xml`, `/robots.txt` | SEO |

## Onde mexer

- **Dados do escritório, áreas, livros, fotos:** `src/lib/escritorio.ts`
- **Fotos:** coloque em `public/fotos/` e aponte o caminho em `escritorio.ts` (`fotos.advogado`, `fotos.escritorio`, `capa` de cada publicação)
- **Novo artigo:** crie `content/artigos/nome-do-artigo.md` com o cabeçalho:

```md
---
titulo: "Título do artigo"
resumo: "Uma ou duas frases."
data: "2026-11-01"
area: "Direito Agrário"
---
Texto em Markdown...
```

- **Formulário de contato:** copie `.env.example` para `.env.local` e preencha `RESEND_API_KEY` e `CONTATO_EMAIL` (Resend, plano gratuito). Sem isso, as mensagens só aparecem no log do servidor.

## Publicar

Repositório: https://github.com/marcos17f/helvecio-advocacia. Na Vercel: **Add New → Project → importe o repositório → Deploy** (o framework Next.js é detectado sozinho, sem configurar nada). Configure as variáveis do `.env.example` no painel da Vercel e aponte o domínio.

## Pendências com o Dr. Helvécio

- [ ] Fotos: retrato profissional, foto no escritório, capas dos livros
- [ ] Títulos exatos e anos dos livros
- [ ] Endereço, WhatsApp e e-mail do escritório (e `enderecoMapa` para o mapa)
- [ ] Texto "O escritório" e parágrafo de trajetória
- [ ] Confirmar os serviços listados em cada área (e se quer Direito Eleitoral como terceira área)
- [ ] Textos dos artigos (o da escala 6x1 já tem o arquivo criado)
- [ ] Domínio (ex.: helveciopinheiro.adv.br) e trocar `siteUrl` em `escritorio.ts`

Publicidade da advocacia: o site segue o tom informativo do Provimento 205/2021 da OAB (sem preços, sem promessa de resultado, com nome e número de inscrição).
