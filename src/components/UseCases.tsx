"use client";

import { motion } from "motion/react";

const ITEMS = [
  {
    title: "Innovative product design",
    description: "Focus on user experience to enhance customer satisfaction.",
  },
  {
    title: "Data-driven decision making",
    description: "Leverage analytics to guide your business strategy.",
  },
  {
    title: "Sustainable business practices",
    description:
      "Implement eco-friendly initiatives to attract conscious consumers.",
  },
  {
    title: "Effective team collaboration",
    description: "Encourage open communication to boost productivity.",
  },
  {
    title: "Agile project management",
    description: "Adopt flexibility to adapt to changing market demands.",
  },
  {
    title: "Customer-centric approaches",
    description: "Prioritize customer feedback to improve service offerings.",
  },
];

function UseCase({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="lg:px-8 p-5 lg:py-12 hover:bg-white/5 transition duration-300 ease-in-out">
      <h3 className="mb-3 text-2xl -tracking-[1px] text-white">{title}</h3>
      <p className="text-base text-white/80">{description}</p>
    </div>
  );
}

export default function UseCases() {
  return (
    <section className="border-y border-white/20 mb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-x border-white/20 py-10 xl:py-20 px-6 xl:px-12">
          <div className="max-w-[590px] mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl mb-6 font-medium text-white"
            >
              Tripwire Use Cases
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-base text-white/80"
            >
              Harness AI to effortlessly create stunning content with AI-driven
              design, copy, images, and SEO optimization. Refine, publish, or
              export as clean HTML/CSS.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="border border-white/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
              {[0, 2, 4].map((start) => (
                <div key={start} className="divide-y divide-white/20">
                  {ITEMS.slice(start, start + 2).map((item) => (
                    <UseCase key={item.title} {...item} />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
