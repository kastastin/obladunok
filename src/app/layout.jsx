import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Obladunok",
  description:
    "Магазин військового спорядження. Власне виробництво, США та ЄС. Доставка усіма способами!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
