"use client";

import Image from "next/image";
import { motion } from "motion/react";

const LOGO_ONE = { src: "/images/clients/logo-1.svg", width: 123, height: 29 };
const LOGO_TWO = { src: "/images/clients/logo-2.svg", width: 117, height: 22 };

const LOGOS = [
  LOGO_ONE,
  LOGO_TWO,
  LOGO_ONE,
  LOGO_TWO,
  LOGO_ONE,
  LOGO_TWO,
  LOGO_ONE,
  LOGO_TWO,
];

export default function Clients() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex gap-10 items-center w-[278px] mx-auto justify-center mb-16"
          >
            <span className="w-2 h-1 bg-white inline-block" />
            <span className="text-white font-mono">Trusted by</span>
            <span className="w-2 h-1 bg-white inline-block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full inline-flex flex-nowrap overflow-hidden marquee-mask"
          >
            {[false, true].map((isDuplicate) => (
              <ul
                key={String(isDuplicate)}
                aria-hidden={isDuplicate || undefined}
                className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll"
              >
                {LOGOS.map((logo, i) => (
                  <li key={i}>
                    <Image
                      src={logo.src}
                      alt={isDuplicate ? "" : `Client logo ${i + 1}`}
                      width={logo.width}
                      height={logo.height}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
