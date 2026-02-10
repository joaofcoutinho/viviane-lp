import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mulheres Cheias de Graça 2026 | Missionária Viviane Santos",
  description:
    "Um encontro profético, abençoador, marcado por cura, milagres, renovo e transformação. Venha fazer parte do que Deus está construindo.",
  keywords: [
    "Mulheres Cheias de Graça",
    "conferência cristã",
    "mulheres",
    "Viviane Santos",
    "evento cristão 2026",
  ],
  openGraph: {
    title: "Mulheres Cheias de Graça 2026",
    description:
      "Um encontro profético, abençoador, marcado por cura, milagres, renovo e transformação.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
