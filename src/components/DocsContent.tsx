"use client";

import { motion } from "motion/react";

export default function DocsContent() {
  return (
    <div className="flex-1 p-5 sm:p-10 lg:p-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-5">
          <h2 className="mb-5 text-white text-3xl">Introduction</h2>
          <p className="text-white/80 text-base">
            The AI Writer is a suite for generating content: blog posts, social
            media, email, ads, product copy, and more.
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="text-base font-medium text-white">What it does</h3>

          <p className="text-white/80 text-base">
            It turns prompts into structured content using templates and a brand
            voice. Use <span className="font-medium text-white">built-in SEO tools</span>{" "}
            to add headings, FAQs, and meta descriptions. Keyword-to-outline,
            FAQ generation, meta title suggestions, and on-page improvements.
          </p>

          <p className="text-white/80 text-base">
            Export generated content to Notion pages using the Notion
            integration. Link your account from integrations settings. Publish
            directly to WordPress via OAuth &mdash; create drafts or publish
            posts automatically.
          </p>

          <p className="text-white/80 text-base">
            <span className="font-medium text-white">Standard plan:</span> 60
            requests/min. Contact support for enterprise limits. Billing is
            monthly. Pro plans include unlimited generation with fair use
            limits. View invoices from your account settings.{" "}
            <span className="font-medium text-white">
              Generate product descriptions
            </span>{" "}
            and SEO metadata and push them to Shopify listings in bulk. Publish
            directly to WordPress via OAuth &mdash; create drafts or publish
            posts automatically.
          </p>

          <p className="text-white/80 text-base">
            Export generated content to Notion pages using the Notion
            integration. Link your account from integrations settings.
            Keyword-to-outline, FAQ generation, meta title suggestions, and
            on-page improvements. Templates for cold outreach, welcome flows,
            and newsletters. Supports personalization tokens and A/B subject
            lines. Generate carousels, captions, hooks, and scheduling-ready
            content. Includes a &lsquo;viral hook&rsquo; mode. Use the Blog
            Writer template to generate outlines, drafts, headings, and meta
            descriptions optimized for SEO. Toggle tone and length.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
