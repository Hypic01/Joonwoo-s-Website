import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'], // you can specify additional subsets if needed
  weight: ['400', '500', '600', '700'], // specify the font weights you plan to use
});

export const metadata: Metadata = {
  title: "Joonwoo's Website!",
  description: "The website that has everything about the guy Joonwoo Park.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
