import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

export const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luciano Badenas",
  description: "Hola soy Luciano Badenas, Desarrollador Fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}

