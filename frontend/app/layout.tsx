import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caart",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>{children}</body>
    </html>
  );
}
