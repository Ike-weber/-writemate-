import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WriteMate AI - Content Creation at Its Best",
  description:
    "Supercharge your content creation with AI-driven design, copy, images, and SEO optimization. Edit visually, publish, or export clean HTML/CSS.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    title:
      "WriteMate AI - React AI Website Template for Multi-LLM Content Platforms",
    description:
      "AI website template for AI writing tools, content, and chatbot platforms. Includes features, pricing, docs, support, Use Cases, and testimonials sections.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-theme-dark`}>
        {children}
      </body>
    </html>
  );
}
