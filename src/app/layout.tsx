import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundArt from "@/components/layout/BackgroundArt";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Olti | Full Stack Developer",
    template: "%s | Olti",
  },
  description:
    "Full Stack Developer specializing in mobile and web development. UBC Computer Science & Business student.",
  keywords: [
    "Full Stack Developer",
    "iOS Developer",
    "React",
    "SwiftUI",
    "Flutter",
    "UBC",
    "Software Engineer",
  ],
  authors: [{ name: "Olti" }],
  creator: "Olti",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Olti Portfolio",
    title: "Olti | Full Stack Developer",
    description:
      "Full Stack Developer specializing in mobile and web development.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${sourceSerif.variable} ${inter.variable} ${cormorant.variable} antialiased min-h-screen`}
      >
        <BackgroundArt />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
