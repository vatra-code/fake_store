import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/styles/animations.css";
import "@/styles/globals.scss";
import { Header } from "@/components/layout/Header";
import LightRays from "@/components/imported/LightRays";

// FIXME: imports client components

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
        <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
