import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wordsmith ",
  description: "A Powerful Text Utility Application for your all Texty need!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="mainbody"
        className={`bg-zinc-900 text-fuchsia-400 md:p-2 mon font-semibold md:overflow-y-hidden ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
