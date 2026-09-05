"use client";

import { motion } from "motion/react";
import ButtonLink from "./ButtonLink";

const PLANS = [
  {
    name: "Self-hosted",
    price: "Free",
    period: "open source",
    subtext: "run it yourself",
    buttonText: "Read the docs",
    featured: false,
  },
  {
    name: "Managed",
    price: "—",
    period: "in development",
    subtext: "pricing not set",
    buttonText: "Register interest",
    featured: true,
  },
  {
    name: "Organisation",
    price: "—",
    period: "talk to us",
    subtext: "pricing not set",
    buttonText: "Contact us",
    featured: false,
  },
];

const ROWS: { name: string; values: React.ReactNode[] }[] = [
  { name: "Tripwire Guard + Risk Registry", values: ["Yes", "Yes", "Yes"] },
  { name: "Spending limits (per-tx + rolling 24h)", values: ["Yes", "Yes", "Yes"] },
  { name: "Cooling-off delays", values: ["Yes", "Yes", "Yes"] },
  { name: "Emergency freeze", values: ["Yes", "Yes", "Yes"] },
  { name: "Rule-engine risk scoring", values: ["Yes", "Yes", "Yes"] },
  { name: "Fork simulation", values: ["Yes", "Yes", "Yes"] },
  { name: "Natural-language policy", values: ["Yes", "Yes", "Yes"] },
  { name: "Auditable decision trail", values: ["Yes", "Yes", "Yes"] },
  {
    name: "Who runs the engine",
    values: ["You", "Hosted", "Hosted"],
  },
  {
    name: "Verdict relayer key",
    values: ["Yours to hold", "Managed", "Managed"],
  },
  { name: "Wallets covered", values: ["Unlimited, self-run", "Planned", "Planned"] },
  { name: "Support", values: ["Community", "Planned", "Planned"] },
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
              Every protection control is in the open-source tier. The hosted
              tiers differ in who operates the engine and holds the relayer key,
              not in what the Guard enforces.
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
                          <h3 className="text-white text-5xl font-normal leading-none">
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
