import type { Metadata } from "next";
import Header from "@/components/Header";
import PricingCards from "@/components/PricingCards";
import ComparisonTable from "@/components/ComparisonTable";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing - WriteMate AI | Affordable Plans for All",
  description:
    "Choose the perfect WriteMate AI plan for your content creation needs. Flexible pricing starting from as low as you need.",
};

export default function PricingPage() {
  return (
    <div className="antialiased bg-theme-dark">
      <Header />
      <PricingCards />
      <ComparisonTable />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
