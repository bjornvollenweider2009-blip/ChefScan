import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChefScan - Cuisine Intelligente",
  description: "Générez des recettes et planifiez vos repas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-[calc(100vh-64px)] pb-10">
          {children}
        </main>
      </body>
    </html>
  );
}
