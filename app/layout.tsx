import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/styles/globals.scss";
import { Header } from "@/components/layout/Header";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fake Store",
  description: "Modern user management with glassmorphism design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
