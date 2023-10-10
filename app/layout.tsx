import "./globals.css";
import type { Metadata } from "next";

import { Noto_Sans_KR } from "next/font/google";

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Address to Coord",
  description: "convert address to coord",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto_sans_kr.className}>{children}</body>
    </html>
  );
}
