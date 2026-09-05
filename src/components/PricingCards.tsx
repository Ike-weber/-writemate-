"use client";

import { motion } from "motion/react";
import ButtonLink from "./ButtonLink";
import CheckIcon from "./CheckIcon";

type Plan = {
  plan: string;
  /** null where no price is set yet — the page says so rather than inventing one. */
  price: number | null;
  period: string;
  subtext: string;
  features: string[];
  featured: boolean;
};

const PLANS: Plan[] = [
  {
    plan: "Self-hosted",
    price: 0,
    period: "free",
    subtext: "Run the whole stack yourself. Open source, no seat count.",
    features: [
      "Guard, Risk Registry and risk engine",
      "Spending limits, delays and emergency freeze",
      "Natural-language policy compiler",
      "Auditable decision trail",
    ],
    featured: false,
  },
  {
    plan: "Managed",
    price: null,
    period: "in development",
    subtext: "Hosted monitoring and relaying, so you do not operate the engine.",
    features: [
      "Everything in self-hosted",
      "Hosted watcher and verdict relayer",
      "Alerting on verdicts and enforcement",
      "Managed key custody",
    ],
    featured: true,
  },
  {
    plan: "Organisation",
    price: null,
    period: "talk to us",
    subtext: "For treasuries and teams with their own review process.",
    features: [
      "Everything in managed",
      "Multiple wallets under one policy set",
      "Custom signals and policy review",
      "Support commitments",
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
          <div className="bloom bloom-corner-tr" />
          <span className="absolute z-20 top-6 right-6 px-3 py-1 bg-linear-to-b from-white to-transparent border border-white/40 text-theme-dark-500 font-mono rounded-md text-sm font-medium">
            Most Popular
          </span>
        </>
      )}

      <div className="relative z-10 justify-between">
        <h3 className="text-xl font-medium text-white">{plan}</h3>
        <p className="text-white/80 text-base">{subtext}</p>

        <div className="py-6 flex items-end gap-1">
          {price === null ? (
            <h3 className="text-white text-4xl leading-none">&mdash;</h3>
          ) : (
            <>
              <span className="text-white/80 text-4xl">$</span>
              <h3 className="text-white text-6xl leading-none">{price}</h3>
            </>
          )}
          <p className="ml-2">
            <span className="text-white block">{period}</span>
            <span className="text-white/60 block">
              {price === 0 ? "forever" : "pricing not set"}
            </span>
          </p>
        </div>

        <div className="pb-6">
          {featured ? (
            <ButtonLink
              href="/pricing"
              text="Register interest"
              className="bg-white px-6 py-3 text-theme-dark-500 transition-all duration-300 w-full text-base hover:bg-white/90 font-mono inline-flex items-center justify-center"
            />
          ) : (
            <ButtonLink
              href="/pricing"
              text={price === 0 ? "Read the docs" : "Contact us"}
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
                Plans
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-base text-white/80"
              >
                Tripwire is open source and free to self-host. The hosted tiers
                are still in development, so their pricing is not set &mdash;
                the page will say so until it is.
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
