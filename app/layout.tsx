import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kairós Studio — El momento perfecto para crear",
  description: "Arte, café y fotografía en un espacio creativo de tres niveles en Santiago.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
