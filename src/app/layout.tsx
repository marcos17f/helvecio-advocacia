import type { Metadata } from "next";
import "./globals.css";
import { escritorio } from "@/lib/escritorio";
import { BotaoFlutuante } from "@/components/Ui";

export const metadata: Metadata = {
  metadataBase: new URL(escritorio.siteUrl),
  title: {
    default: `${escritorio.nome} ${escritorio.sufixo} | Direito Agrário e Empresarial em ${escritorio.cidade}`,
    template: `%s | ${escritorio.nome} ${escritorio.sufixo}`,
  },
  description:
    "Advocacia agrária e empresarial no Vale do Gurgueia. Assessoria jurídica para produtores rurais, empresas e famílias do sul do Piauí.",
  openGraph: { type: "website", locale: "pt_BR", siteName: `${escritorio.nome} ${escritorio.sufixo}` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Public+Sans:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="antialiased">
        {children}
        <BotaoFlutuante />
      </body>
    </html>
  );
}
