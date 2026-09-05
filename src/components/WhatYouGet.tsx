"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import ButtonLink from "./ButtonLink";

const ICON_PATHS = [
  "M17.25 13.75C26.6388 13.75 34.25 21.3612 34.25 30.75C34.25 40.1388 26.6388 47.75 17.25 47.75C7.8612 47.75 0.25 40.1388 0.25 30.75C0.25 21.3612 7.8612 13.75 17.25 13.75ZM47.75 0.25V47.75H34.75V13.25H0.25V0.25H47.75Z",
  "M5.25 0.25C15.4672 0.25 23.75 8.53282 23.75 18.75H24.25C24.25 8.53282 32.5328 0.25 42.75 0.25H47.75V47.75H0.25V0.25H5.25ZM5.25 24.25C15.4672 24.25 23.75 32.5328 23.75 42.75H24.25C24.25 32.5328 32.5328 24.25 42.75 24.25V23.75H5.25V24.25Z",
  "M17.25 13.75C26.6388 13.75 34.25 21.3612 34.25 30.75C34.25 40.1388 26.6388 47.75 17.25 47.75C7.8612 47.75 0.25 40.1388 0.25 30.75C0.25 21.3612 7.8612 13.75 17.25 13.75ZM47.75 0.25V47.75H34.75V13.25H0.25V0.25H47.75Z",
  "M26.75 47.75H5.77832L26.75 26.7783V47.75ZM47.75 0.25V38.791L37.75 47.4512V10.25H0.543945L9.11523 0.25H47.75ZM16.7217 21.25L0.25 37.7217V21.25H16.7217Z",
];

const TOOLS = [
  "AI Blog Writer",
  "Social Post Generator",
  "SEO Content Writer",
  "Email Writer",
].map((title, i) => ({
  title,
  path: ICON_PATHS[i],
  description: "Fully WCAG 2.0 compliant, made with best a11y practices",
}));

// Loop mode needs more slides than `slidesPerView` (3.5 at xl), so the four
// tools are rendered twice.
const SLIDES = [...TOOLS, ...TOOLS];

function ToolCard({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 border border-white/20 group duration-300 ease-in-out hover:border-white/60 transition-all relative overflow-hidden h-full">
      <div className="relative z-10">
        <div className="mb-6">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d={path} stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <h3 className="text-white mb-3 text-2xl -tracking-[1px]">{title}</h3>
        <p className="text-base text-white/80 mb-14">{description}</p>
        <ButtonLink
          href="/pricing"
          text="Try now"
          className="ring px-6 ring-white/40 bg-white/5 transition duration-300 hover:bg-white/10 text-white font-mono w-auto py-3 text-base inline-flex"
        />
      </div>
      <div className="bloom bloom-corner-br opacity-0 group-hover:opacity-100 transition duration-300" />
    </div>
  );
}

export default function WhatYouGet() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="border-y border-white/20 mb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-x border-white/20 p-5 lg:p-20">
          <div className="flex flex-col sm:flex-row justify-between gap-5 lg:items-end mb-16">
            <div className="lg:max-w-xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl sm:text-4xl mb-6 font-medium text-white"
              >
                What You Get
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-base text-white/80"
              >
                Describe your idea &mdash; the AI creates pages, layout, copy,
                images and SEO meta. Edit visually, publish or export clean
                HTML/CSS.
              </motion.p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous"
                className="ring size-12 ring-white/40 items-center justify-center cursor-pointer bg-white/5 text-white font-mono flex hover:bg-white/10 transition duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 11.9966L20.0014 11.9966M9.99599 6L4 11.9998L9.99599 18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next"
                className="ring size-12 ring-white/40 items-center justify-center cursor-pointer bg-white/5 text-white font-mono flex hover:bg-white/10 transition duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.0014 11.9966L4 11.9966M14.0054 6L20.0014 11.9998L14.0054 18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Swiper
              modules={[Navigation]}
              loop
              spaceBetween={8}
              slidesPerView={1}
              onSwiper={(s) => {
                swiperRef.current = s;
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 1.5 },
                1280: { slidesPerView: 3.5 },
              }}
            >
              {SLIDES.map((tool, i) => (
                <SwiperSlide key={`${tool.title}-${i}`} className="h-auto">
                  <ToolCard {...tool} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
