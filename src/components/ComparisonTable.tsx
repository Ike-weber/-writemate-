"use client";

import { motion } from "motion/react";
import ButtonLink from "./ButtonLink";

const PLANS = [
  {
    name: "Free",
    price: 0,
    period: "free",
    subtext: "forever",
    buttonText: "Get Started",
    featured: false,
  },
  {
    name: "Plus",
    price: 29,
    period: "per month",
    subtext: "billed annually",
    buttonText: "Start Free Trial",
    featured: true,
  },
  {
    name: "Pro",
    price: 99,
    period: "per month",
    subtext: "billed annually",
    buttonText: "Get Started",
    featured: false,
  },
];

const ROWS: { name: string; values: React.ReactNode[] }[] = [
  {
    name: "AI Model Access",
    values: [
      <>
        Limited Access
        <br />
        <span className="text-sm text-white/60">(Zephyr, Claude, Llama)</span>
      </>,
      "All Models",
      "All Models",
    ],
  },
  { name: "Words", values: ["5,000", "50,000", "Unlimited"] },
  { name: "Word Limit", values: ["500K / month", "5M", "Unlimited"] },
  {
    name: "Image Upload",
    values: ["—", "Unlimited Storage", "Unlimited (100MB)"],
  },
  { name: "Content History", values: ["14 Days", "180 Days", "365 Days"] },
  { name: "Team Seats", values: ["—", "Up to 15", "Up to 50"] },
  { name: "Shared Folders", values: ["—", "5 Folders", "Unlimited"] },
  { name: "Custom API Key", values: ["—", "—", "Yes"] },
  {
    name: "Real-Time Data",
    values: ["—", "Trend Analysis", "Priority (Expert)"],
  },
  { name: "Generation Speed", values: ["Normal", "Faster", "Instant"] },
  {
    name: "Monthly Word Limit",
    values: ["Standard", "5X Word Limit", "Unlimited"],
  },
  { name: "Customer Service", values: ["Online", "Email (12hr)", "Priority"] },
];

export default function ComparisonTable() {
  return (
    <section className="border-y border-white/20 mb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-x border-white/20 py-10 px-5 lg:p-20">
          <div className="max-w-147.5 mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl mb-6 font-medium text-white"
            >
              Tripwire Pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-base text-white/80"
            >
              Use the power of AI to generate high-quality content for your
              blog, website, or social media. Create compelling copy, articles,
              and marketing materials with ease.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-1/4" />
                  {PLANS.map((plan) => (
                    <th
                      key={plan.name}
                      className={`w-1/4 p-6 whitespace-nowrap ${
                        plan.featured ? "bg-white/3" : ""
                      }`}
                    >
                      <div>
                        <h3 className="text-white text-xl font-normal text-left mb-6">
                          {plan.name}
                        </h3>
                        <div className="py-6 flex items-end gap-1 font-normal">
                          <span className="text-white/80 text-4xl">$</span>
                          <h3 className="text-white text-6xl font-normal leading-none">
                            {plan.price}
                          </h3>
                          <div className="ml-2">
                            <span className="text-white block text-left text-base">
                              {plan.period}
                            </span>
                            <span className="text-white/60 block text-sm">
                              {plan.subtext}
                            </span>
                          </div>
                        </div>
                        <div className="pb-6">
                          <ButtonLink
                            href="/pricing"
                            text={plan.buttonText}
                            className={`font-normal border py-3 w-full transition-all duration-300 px-6 text-base font-mono inline-flex items-center justify-center ${
                              plan.featured
                                ? "text-theme-dark-500 bg-white hover:bg-white/90 border-white/60"
                                : "text-white bg-white/5 border-white/40 hover:bg-white/10"
                            }`}
                          />
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.name} className="border-t border-white/10">
                    <td className="text-white font-medium text-base px-5 lg:px-10 py-5">
                      {row.name}
                    </td>
                    {row.values.map((value, i) => (
                      <td
                        key={i}
                        className={`text-white/80 text-base px-5 lg:px-10 py-5 text-center ${
                          i === 1 ? "bg-white/3" : ""
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
