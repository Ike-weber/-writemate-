import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportSection from "@/components/SupportSection";

export const metadata: Metadata = {
  title: "Support - WriteMate AI | Get Help & FAQs",
  description:
    "Get quick answers and support from our expert team. Browse FAQs and contact us for assistance with WriteMate AI.",
};

export default function SupportPage() {
  return (
    <div className="antialiased bg-theme-dark min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}
