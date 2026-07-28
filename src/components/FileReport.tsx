"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Stamp from "./Stamp";

export default function FileReport() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#EDE9DF]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <hr className="hairline-thick" />

        <AnimatedSection className="mt-10">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Left */}
            <div>
              <Stamp text="File a Report" />

              <p className="body-text mt-4 max-w-md text-sm sm:text-base">
                A role to fill, a project in mind, or a good question about
                zero-trust architecture — send it through.
              </p>

              <div className="mt-8 space-y-3 stamp-text text-xs text-[#4A4A4A]">
                <p>
                  <span className="text-[#8C8679]">Direct line:</span>{" "}
                  affanimtiyaz2312@gmail.com
                </p>
                <p>
                  <span className="text-[#8C8679]">Phone:</span> +91 99012 54776
                </p>
              </div>

              <hr className="hairline my-6 max-w-xs" />

              <p className="stamp-text text-[10px] text-[#8C8679] leading-relaxed max-w-xs">
                Availability: Full-time at Tuenx Technologies, open to select
                freelance / contract work and collaborations on the side.
              </p>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center border-2 border-dashed border-[#D4CFC4] p-10 text-center">
                  <Stamp text="Received" color="red" />
                  <p className="headline-md mt-4 text-xl text-[#1A1A1A]">
                    Report filed.
                  </p>
                  <p className="body-text mt-2 text-sm">
                    Usually replies within 24 hours. The case is now open.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="stamp-text text-[11px] text-[#4A4A4A] block mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-0 border-b-2 border-[#D4CFC4] bg-transparent px-1 py-2 text-[#1A1A1A] placeholder-[#B8B3A8] transition-colors focus:border-[#C41E3A] focus:outline-none font-serif"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="stamp-text text-[11px] text-[#4A4A4A] block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border-0 border-b-2 border-[#D4CFC4] bg-transparent px-1 py-2 text-[#1A1A1A] placeholder-[#B8B3A8] transition-colors focus:border-[#C41E3A] focus:outline-none font-serif"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="stamp-text text-[11px] text-[#4A4A4A] block mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-0 border-b-2 border-[#D4CFC4] bg-transparent px-1 py-2 text-[#1A1A1A] placeholder-[#B8B3A8] transition-colors focus:border-[#C41E3A] focus:outline-none font-serif"
                      placeholder="Case reference"
                    />
                  </div>
                  <div>
                    <label className="stamp-text text-[11px] text-[#4A4A4A] block mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full border-0 border-b-2 border-[#D4CFC4] bg-transparent px-1 py-2 text-[#1A1A1A] placeholder-[#B8B3A8] transition-colors focus:border-[#C41E3A] focus:outline-none resize-none font-serif"
                      placeholder="Your message..."
                    />
                  </div>

                  <p className="stamp-text text-[10px] text-[#8C8679]">
                    Usually replies within 24 hours
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#1A1A1A] px-6 py-3 font-serif text-sm text-[#F4F1EA] transition-colors hover:bg-[#C41E3A]"
                  >
                    Send the letter
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>

        <hr className="hairline mt-14" />
      </div>
    </section>
  );
}
