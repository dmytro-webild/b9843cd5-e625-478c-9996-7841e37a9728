import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Playfair_Display, Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'SolarHomePhil | Premium Solar Energy Solutions Philippines',
  description: 'Expert solar energy solutions for Filipino homes and businesses. High-quality installation, transparent pricing, and sustainable power independence.',
  openGraph: {
    "title": "SolarHomePhil | Solar Energy Solutions",
    "description": "Power your home and reduce bills with our premium solar solutions.",
    "siteName": "SolarHomePhil"
  },
};

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "600"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
