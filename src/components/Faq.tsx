"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const FAQS = [
  {
    question: "What is Tripwire?",
    answer:
      "Tripwire is an advanced writing assistant that uses artificial intelligence to help you create compelling content faster. Whether you need blog posts, emails, social media content, or marketing copy, our AI helps you write better.",
  },
  {
    question: "How does the AI writing assistant work?",
    answer:
      "Our AI analyzes your input and context to generate relevant, high-quality content. Simply provide a prompt or topic, and the AI will create content tailored to your needs, tone, and style preferences.",
  },
  {
    question: "Can I try Tripwire for free?",
    answer:
      "Yes! We offer a free Starter plan that lets you explore our AI writing capabilities. You can upgrade to Plus or Premium plans for more features and higher usage limits.",
  },
  {
    question: "What types of content can I create?",
    answer:
      "You can create blog posts, social media content, email copy, marketing materials, product descriptions, SEO content, and much more. Our AI is versatile and adapts to various content types.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard encryption and comply with GDPR and CCPA. Your documents are processed securely and never stored without permission.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="py-6 border-b border-white/10">
      <button
        className="faq-btn flex w-full text-left cursor-pointer items-center justify-between"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg text-zinc-50 -tracking-[0.18px]">{question}</h3>
        <span
          className={`text-white/80 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5.75 9.625L12 15.875L18.25 9.625"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-white/80 pb-2">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-y border-white/20 mb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-x border-white/20 p-5 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28">
            <div className="mb-10 lg:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl sm:text-4xl mb-6 font-medium text-white"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-base text-white/80 mb-6"
              >
                Find answers to common questions about Tripwire. If you
                can&apos;t find what you&apos;re looking for, feel free to
                contact our support team.
              </motion.p>
            </div>

            <div>
              {FAQS.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2 + i * 0.1,
                  }}
                >
                  <FaqItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
