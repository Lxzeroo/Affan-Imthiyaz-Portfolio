import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Full-Stack Dossier — Affan Imthiyaz Ahmed",
  description:
    "Case file on Affan Imthiyaz Ahmed: a full-stack developer building AI-enabled web applications. Currently at Tuenx Technologies.",
  openGraph: {
    title: "The Full-Stack Dossier — Affan Imthiyaz Ahmed",
    description:
      "A full-stack developer building AI-enabled web applications — from motion-driven frontends to Java/Spring Boot backends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${jetbrains.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
