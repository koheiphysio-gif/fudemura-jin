import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "筆村ジン｜書籍紹介",
  description: "筆村ジンの書籍紹介。Amazonで購入できます。",
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
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
