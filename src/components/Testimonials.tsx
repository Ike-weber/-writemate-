"use client";

import { motion } from "motion/react";

type Testimonial = {
  name: string;
  /** A role, not a social handle: an invented @handle can collide with a real
   *  account, and these quotes are illustrative. */
  role: string;
  quote: string;
};

const ROW_ONE: Testimonial[] = [
  {
    name: "Lydia Carter",
    role: "Marketing Lead",
    quote:
      "Using this AI tool has transformed the way I approach my marketing campaigns. Efficiency has skyrocketed!",
  },
  {
    name: "Marcus Thompson",
    role: "Founder",
    quote:
      "The best investment I've made for my business. The AI generates content that truly resonates with my audience.",
  },
  {
    name: "Sarah Mitchell",
    role: "Content Strategist",
    quote:
      "I was skeptical at first, but this tool exceeded all my expectations. My productivity has doubled!",
  },
  {
    name: "James Wilson",
    role: "Head of Growth",
    quote:
      "This AI tool is a game-changer for content creators. Highly recommend for anyone looking to streamline their workflow.",
  },
];

const ROW_TWO: Testimonial[] = [
  {
    name: "Emily Davis",
    role: "Operations Lead",
    quote:
      "Incredible tool that has saved me countless hours. The AI suggestions are spot-on and very helpful.",
  },
  {
    name: "David Brown",
    role: "Product Marketer",
    quote:
      "A must-have for anyone in digital marketing. The results speak for themselves!",
  },
  {
    name: "Jessica Taylor",
    role: "Editorial Manager",
    quote:
      "I love how intuitive this tool is. It has completely changed my content creation process.",
  },
  {
    name: "Michael Johnson",
    role: "Treasury Manager",
    quote:
      "Fantastic AI tool that delivers consistent results. My team productivity has increased significantly.",
  },
];

/** Initials, so nobody's likeness is attached to a quote they did not give. */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Card({ name, role, quote }: Testimonial) {
  return (
    <li className="p-6 border border-white/10 bg-white/3 min-w-[420px]">
      <div className="flex gap-3 items-center mb-2">
        <div
          aria-hidden="true"
          className="size-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 font-mono text-sm shrink-0"
        >
          {initials(name)}
        </div>
        <div>
          <h4 className="text-xl text-white font-medium">{name}</h4>
          <span className="text-zinc-400 text-base">{role}</span>
        </div>
      </div>
      <div>
        <p className="text-base text-zinc-400">{quote}</p>
      </div>
    </li>
  );
}

function Marquee({
  items,
  direction,
  className,
}: {
  items: Testimonial[];
  direction: "left" | "right";
  className?: string;
}) {
  const animation =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div
      className={`w-full inline-flex flex-nowrap overflow-hidden marquee-mask ${
        className ?? ""
      }`}
    >
      {[false, true].map((isDuplicate) => (
        <ul
          key={String(isDuplicate)}
          aria-hidden={isDuplicate || undefined}
          className={`flex items-center justify-center md:justify-start [&_li]:mx-3 ${animation}`}
        >
          {items.map((item, i) => (
            <Card key={`${item.name}-${i}`} {...item} />
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mb-20 border-y border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-20">
          <div className="lg:max-w-lg mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl mb-6 font-medium text-white"
            >
              Hear From Our Community
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-base text-white/80"
            >
              Creators, founders, and teams use our AI Writer to produce clean,
              consistent content in minutes &mdash; not hours.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-xs font-mono uppercase tracking-[0.12em] text-white/40 mt-6"
            >
              Sample content &mdash; illustrative, not real customer quotes
            </motion.p>
          </div>

          <Marquee items={ROW_ONE} direction="left" className="mb-6" />
          <Marquee items={ROW_TWO} direction="right" />
        </div>
      </div>
    </section>
  );
}
