import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChefScan – Cuisine Intelligente",
  description: "Génerez des recettes et planifiez vos repas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-[calc(100vh-64px)] pb-10">{children}</main>
      </body>
    </html>
  );
}
