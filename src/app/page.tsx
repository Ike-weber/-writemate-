import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatYouGet from "@/components/WhatYouGet";
import UseCases from "@/components/UseCases";
import PricingCards from "@/components/PricingCards";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="antialiased bg-theme-dark">
      <Header />
      <Hero />
      <WhatYouGet />
      <UseCases />
      <PricingCards />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
