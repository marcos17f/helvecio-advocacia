/**
 * Artigos do blog: cada arquivo .md em /content/artigos vira uma página.
 * Para publicar um artigo novo, crie um arquivo com o cabeçalho (frontmatter) abaixo:
 *
 * ---
 * titulo: "Título do artigo"
 * resumo: "Uma ou duas frases."
 * data: "2026-10-20"
 * area: "Direito Agrário"
 * ---
 * Texto em Markdown...
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const PASTA = path.join(process.cwd(), "content", "artigos");

export type ArtigoResumo = {
  slug: string;
  titulo: string;
  resumo: string;
  data: string;
  area: string;
};

export type Artigo = ArtigoResumo & { html: string };

function ler(arquivo: string) {
  const bruto = fs.readFileSync(path.join(PASTA, arquivo), "utf8");
  const { data, content } = matter(bruto);
  const slug = arquivo.replace(/\.md$/, "");
  return {
    resumo: {
      slug,
      titulo: String(data.titulo ?? slug),
      resumo: String(data.resumo ?? ""),
      data: String(data.data ?? ""),
      area: String(data.area ?? "Artigo"),
    } satisfies ArtigoResumo,
    content,
  };
}

/** Lista todos os artigos, do mais recente para o mais antigo. */
export function listarArtigos(): ArtigoResumo[] {
  if (!fs.existsSync(PASTA)) return [];
  return fs
    .readdirSync(PASTA)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ler(f).resumo)
    .sort((a, b) => b.data.localeCompare(a.data));
}

export function buscarArtigo(slug: string): Artigo | null {
  const arquivo = `${slug}.md`;
  if (!/^[a-z0-9-]+$/.test(slug) || !fs.existsSync(path.join(PASTA, arquivo))) return null;
  const { resumo, content } = ler(arquivo);
  return { ...resumo, html: marked.parse(content, { async: false }) };
}

export function formatarData(iso: string) {
  if (!iso) return "";
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}
