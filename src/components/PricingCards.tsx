"use client";

import Image from "next/image";
import { motion } from "motion/react";
import ButtonLink from "./ButtonLink";
import CheckIcon from "./CheckIcon";

type Plan = {
  plan: string;
  price: number;
  period: string;
  subtext: string;
  features: string[];
  featured: boolean;
};

const PLANS: Plan[] = [
  {
    plan: "Starter",
    price: 0,
    period: "free",
    subtext: "For individuals exploring the power of AI-driven content",
    features: [
      "AI-powered content suggestions",
      "Basic grammar and spell check",
      "Standard tone adjustments",
    ],
    featured: false,
  },
  {
    plan: "Plus",
    price: 29,
    period: "per month",
    subtext: "For freelancers and small teams seeking advanced AI tools",
    features: [
      "AI-powered content suggestions",
      "Basic grammar and spell check",
      "Standard tone adjustments",
      "Priority support",
    ],
    featured: true,
  },
  {
    plan: "Premium",
    price: 99,
    period: "per month",
    subtext: "For large teams and enterprises requiring dedicated support",
    features: [
      "AI-powered content suggestions",
      "Basic grammar and spell check",
      "Standard tone adjustments",
      "Priority support",
      "Dedicated account manager",
    ],
    featured: false,
  },
];

function PlanCard({
  plan,
  price,
  period,
  subtext,
  features,
  featured,
}: Plan) {
  return (
    <article className="min-h-135 flex flex-col py-8 px-6 border border-white/20 bg-white/3 relative overflow-hidden">
      {featured && (
        <>
          <div className="absolute top-0 right-0">
            <Image
              src="/images/shape-price.png"
              alt="Decorative shape"
              width={363}
              height={283}
            />
          </div>
          <span className="absolute z-20 top-6 right-6 px-3 py-1 bg-linear-to-b from-white to-transparent border border-white/40 text-theme-dark-500 font-mono rounded-md text-sm font-medium">
            Most Popular
          </span>
        </>
      )}

      <div className="relative z-10 justify-between">
        <h3 className="text-xl font-medium text-white">{plan}</h3>
        <p className="text-white/80 text-base">{subtext}</p>

        <div className="py-6 flex items-end gap-1">
          <span className="text-white/80 text-4xl">$</span>
          <h3 className="text-white text-6xl leading-none">{price}</h3>
          <p>
            <span className="text-white block">{period}</span>
            <span className="text-white/60 block">
              {price === 0 ? "forever" : "billed annually"}
            </span>
          </p>
        </div>

        <div className="pb-6">
          {featured ? (
            <ButtonLink
              href="/pricing"
              text="Start for free"
              className="bg-white px-6 py-3 text-theme-dark-500 transition-all duration-300 w-full text-base hover:bg-white/90 font-mono inline-flex items-center justify-center"
            />
          ) : (
            <ButtonLink
              href="/pricing"
              text={price === 0 ? "Get Started" : "Contact Us"}
              className="text-white bg-white/5 border py-3 w-full border-white/40 transition-all duration-300 hover:bg-white/10 px-6 text-base font-mono inline-flex items-center justify-center"
            />
          )}
        </div>

        <ul className="space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex gap-2 items-center text-white/80 text-base"
            >
              <CheckIcon />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function PricingCards() {
  return (
    <section className="border-y border-white/20 mb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-x border-white/20 p-5 lg:p-20">
          <div className="mb-8 lg:mb-16">
            <div className="lg:max-w-xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl sm:text-4xl mb-6 font-medium text-white"
              >
                Plans &amp; Pricing
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-base text-white/80"
              >
                Supercharge your content creation with AI-driven design, copy,
                images, and SEO optimization. Edit visually, publish, or export
                clean HTML/CSS.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              >
                <PlanCard {...plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
