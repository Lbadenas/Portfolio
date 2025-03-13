import type { Metadata } from "next";
import "./globals.css"; // Mantén la importación de tu archivo CSS global
import { ThemeProvider } from "@/components/theme-providers";

// Elimina la importación y el uso de `Urbanist` si ya no la necesitas

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
      <body>
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

