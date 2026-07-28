"use client";

import { motion } from "framer-motion";
import Stamp from "./Stamp";

const credentials = [
  { label: "Case No.", value: "01", note: "Filed 2023" },
  { label: "Experience", value: "1 Year", note: "At Tuenx" },
  { label: "Status", value: "Open", note: "Available for freelance/contract" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EDE9DF]">
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-10 sm:pt-14 md:pt-20">
        {/* Case stamp */}
        <motion.div
          initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
          animate={{ opacity: 1, rotate: -3, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <Stamp text="Case Opened" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="stamp-text mb-3 text-xs tracking-[0.15em] text-[#8C8679]">
            Case No. 01 — Findings Published
          </p>

          <h2 className="headline-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Affan Imthiyaz
            <br />
            Ahmed
          </h2>

          <p className="mt-4 text-lg italic text-[#4A4A4A] sm:text-xl md:text-2xl font-serif">
            The Personal Record of a Full-Stack Developer
          </p>
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="body-text mt-6 max-w-2xl text-base sm:text-lg"
        >
          A full-stack engineer building AI-enabled web applications — from
          motion-driven frontends to Java/Spring Boot backends — currently at
          Tuenx Technologies, with hands-on work on GapHatch and Vespor.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#casework"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] px-6 py-3 font-serif text-sm text-[#F4F1EA] transition-colors hover:bg-[#C41E3A] sm:text-base"
          >
            Read the casework
            <span className="text-lg">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-[#1A1A1A] px-6 py-3 font-serif text-sm text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-[#F4F1EA] sm:text-base"
          >
            File a report
            <span className="text-lg">→</span>
          </a>
        </motion.div>

        {/* Meta line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-6 stamp-text text-xs text-[#8C8679]"
        >
          Bengaluru, India ·{" "}
          <a
            href="https://github.com/Lxzeroo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#1A1A1A]"
          >
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/in/affan-ahmed1"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#1A1A1A]"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#C41E3A]"
          >
            Resume
          </a>
        </motion.p>

        {/* Credentials strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 grid grid-cols-3 gap-4 border-t border-dashed border-[#D4CFC4] pt-6"
        >
          {credentials.map((c) => (
            <div key={c.label} className="text-center">
              <p className="stamp-text text-[10px] tracking-[0.15em] text-[#8C8679] sm:text-xs">
                {c.label}
              </p>
              <p className="headline-lg mt-1 text-xl sm:text-2xl text-[#C41E3A]">
                {c.value}
              </p>
              <p className="stamp-text mt-0.5 text-[10px] text-[#8C8679]">
                {c.note}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
