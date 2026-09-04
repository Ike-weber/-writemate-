"use client";

import Image from "next/image";
import { motion } from "motion/react";
import ButtonLink from "./ButtonLink";

export default function Hero() {
  return (
    <section className="border-y border-white/20 overflow-hidden relative">
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none w-full h-full">
        <Image
          src="/images/Gradient.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="border-x border-white/20 pt-6 xl:py-30">
          <div className="max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto px-4 py-14">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl lg:text-5xl -tracking-[1.5px] xl:text-6xl font-normal text-white text-center xl:leading-16 mb-6"
            >
              Write Better. Reply Faster. Understand Anything with AI.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-white/80 text-base max-w-lg text-center mx-auto mb-8 xl:mb-14"
            >
              Your all-in-one AI writing platform — generate copy, summarize
              PDFs, write emails, and transform tone instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="relative max-w-[500px] mx-auto"
            >
              <input
                type="text"
                aria-label="Prompt"
                className="text-sm text-white placeholder:text-white/60 p-8 pl-6 pr-20 bg-theme-dark-500 h-16 w-full focus:outline-0"
                placeholder="Write a linkedin post about a new AI tool..."
              />
              <div className="absolute right-2 size-12 top-1/2 -translate-y-1/2 z-10">
                <ButtonLink
                  aria-label="Generate"
                  className="bg-white size-12 hover:bg-gray-100 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.9961 3.99902L11.9961 20.0004M6 9.99502L11.9998 3.99902L18 9.99502"
                      stroke="#060606"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonLink>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
