import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-providers";

// Configuración de la fuente Urbanist
export const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata = {
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
      <body className={urbanist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

