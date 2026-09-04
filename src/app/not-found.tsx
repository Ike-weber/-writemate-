import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "404 - Page Not Found | WriteMate AI",
  description:
    "The page you're looking for couldn't be found. Return to the homepage and explore WriteMate AI.",
};

export default function NotFound() {
  return (
    <div className="antialiased bg-theme-dark min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-y border-white/20 relative mb-20">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="border-x border-white/20">
              <div className="max-w-xl mx-auto pt-20 lg:pt-30 pb-15 text-center relative z-20">
                <h2 className="text-white font-medium text-3xl lg:text-4xl mb-3">
                  Page Not Found!
                </h2>
                <p className="text-base text-white/80 mb-5 lg:mb-10">
                  It seems the page you were looking for could not be found.
                </p>
                <Link
                  href="/"
                  className="text-white shrink-0 font-normal bg-white/5 border py-3 border-white/40 transition-all hover:bg-white/10 px-6 inline-flex font-mono items-center justify-center text-base"
                >
                  Back to Homepage
                </Link>
              </div>
              <div className="-mt-30 lg:-mt-60 relative z-10">
                <Image
                  src="/images/404.png"
                  alt="404 illustration"
                  width={1440}
                  height={695}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
