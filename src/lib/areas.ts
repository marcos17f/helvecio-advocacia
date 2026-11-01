import { areas } from "./escritorio";

/** "Direito Agrário" -> "direito-agrario" */
export function slugArea(nome: string) {
  return nome
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function buscarArea(slug: string) {
  return areas.find((a) => slugArea(a.nome) === slug) ?? null;
}
