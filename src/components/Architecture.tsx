"use client";

import { motion } from "motion/react";

/**
 * The path a transaction takes, top to bottom. Each stage names what it is and
 * where it runs, because the off-chain/on-chain boundary is the part that
 * decides whether any of this is enforceable.
 */
const STAGES = [
  {
    name: "Wallet",
    note: "A Safe with the Guard enabled",
    where: "on-chain",
  },
  {
    name: "Transaction monitor",
    note: "Sees the transaction while it is still pending",
    where: "off-chain",
  },
  {
    name: "Risk engine",
    note: "Rules, fork simulation, and a reasoning pass",
    where: "off-chain",
  },
  {
    name: "Risk Registry",
    note: "The verdict, written where the Guard can read it",
    where: "on-chain",
  },
  {
    name: "Tripwire Guard",
    note: "Checks the verdict and the limits at execution",
    where: "on-chain",
  },
  {
    name: "Allow / Delay / Block",
    note: "The outcome the owner configured",
    where: "on-chain",
  },
  {
    name: "Blockchain",
    note: "Only what survived the Guard settles",
    where: "on-chain",
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="border-y border-white/20 mb-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-x border-white/20 p-5 lg:p-20">
          <div className="lg:max-w-2xl mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl mb-6 font-medium text-white"
            >
              How a transaction moves
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-base text-white/80"
            >
              A Safe transaction is not instant. It is proposed, it waits for
              signatures, and only then does anyone execute it. That pause is
              where the risk engine does its work &mdash; so the Guard never has
              to make an off-chain call mid-transaction.
            </motion.p>
          </div>

          <ol className="max-w-2xl mx-auto">
            {STAGES.map((stage, i) => (
              <motion.li
                key={stage.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
              >
                <div className="border border-white/20 bg-white/3 px-5 py-4 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-white text-lg -tracking-[0.3px]">
                      {stage.name}
                    </p>
                    <p className="text-white/60 text-sm">{stage.note}</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/45 shrink-0">
                    {stage.where}
                  </span>
                </div>
                {i < STAGES.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="flex justify-center py-2 text-white/30"
                  >
                    &darr;
                  </div>
                )}
              </motion.li>
            ))}
          </ol>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-sm text-white/50 mt-10 max-w-2xl mx-auto text-center"
          >
            The spending limits are enforced by the Guard independently of any
            verdict, so they still hold if the off-chain engine is offline.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
