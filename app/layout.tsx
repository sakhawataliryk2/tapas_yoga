import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Tapas Yoga School — Yoga Teacher Training | Bali, Greece & Zanzibar",
  description:
    "Yoga Alliance Certified Teacher Trainings in Bali, Greece & Zanzibar. 200HR Foundation, 100HR Advanced, and Zanzibar TTC. Join Vivienne Zeng and 250+ graduates from 37 countries.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
