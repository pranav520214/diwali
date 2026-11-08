import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Cinzel_Decorative,
  Rozha_One,
  Yatra_One,
  Outfit,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const rozhaOne = Rozha_One({
  weight: "400",
  subsets: ["latin", "devanagari"],
  variable: "--font-rozha",
  display: "swap",
});

const yatraOne = Yatra_One({
  weight: "400",
  subsets: ["latin", "devanagari"],
  variable: "--font-yatra",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#120306",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Happy Diwali | Shubh Deepavali — Festival of Lights",
  description:
    "Step into an opulent cinematic Indian festive experience. Light a sacred diya, craft royal greetings, share divine blessings, and celebrate the eternal victory of light over darkness.",
  keywords: [
    "Diwali",
    "Deepavali",
    "Happy Diwali",
    "Festival of Lights",
    "Shubh Deepavali",
    "Diya Lighting",
    "Diwali Greeting Card",
    "Indian Festive",
  ],
  authors: [{ name: "Cinematic Diwali" }],
  openGraph: {
    title: "Happy Diwali | Shubh Deepavali — Festival of Lights",
    description:
      "Light a sacred diya and craft personal royal gold Diwali greetings with divine music and firework sparkles.",
    type: "website",
    locale: "en_IN",
    siteName: "Shubh Deepavali Experience",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Diwali | Shubh Deepavali — Festival of Lights",
    description:
      "Light a sacred diya and celebrate the Festival of Lights with immersive music, embers, and blessings.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${rozhaOne.variable} ${yatraOne.variable} ${outfit.variable} ${cormorant.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#120306] text-[#fff8e7] overflow-x-hidden selection:bg-[#ffd700] selection:text-[#120306]">
        {children}
      </body>
    </html>
  );
}
