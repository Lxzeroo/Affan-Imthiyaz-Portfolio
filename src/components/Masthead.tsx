"use client";

import { motion } from "framer-motion";

export default function Masthead() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#EDE9DF]">
      <header>
        <div className="mx-auto max-w-5xl border-b-2 border-[#1A1A1A] px-6 py-4">
          {/* ══════ Row 1 — top ribbon ══════ */}
          <div className="flex items-center justify-between text-[11px] stamp-text text-[#8C8679] sm:text-xs">
            <span>Mangalore, India</span>
            <span>The Full-Stack Dossier</span>
            <span>Est. 2023</span>
          </div>

          <hr className="hairline mt-2" />

          {/* ══════ Row 2 — masthead name ══════ */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="py-6 text-center"
          >
            <h1 className="headline-xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Affan Imthiyaz Ahmed
            </h1>
          </motion.div>

          {/* ══════ Row 3 — tagline ══════ */}
          <hr className="mt-4 border-0 border-t-2 border-[#1A1A1A]" />
          <p className="my-2 text-center stamp-text text-[11px] tracking-[0.2em] text-[#8C8679] sm:text-xs">
            The Personal Record of a Full-Stack Developer
          </p>
          <hr className="border-0 border-t-2 border-[#1A1A1A]" />

          {/* ══════ Row 4 — edition line ══════ */}
          <p className="mt-3 pb-6 text-center stamp-text text-[11px] text-[#8C8679] sm:text-xs">
            Tuesday, 28 July 2026 · Vol. I · Selected Works &amp; Notes · Est. 2023
          </p>
        </div>
      </header>

      {/* Nav bar — below the border */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-end py-4">
          <div className="flex items-center gap-5 sm:gap-6">
            {/* Text nav links */}
            <a
              href="#casework"
              className="stamp-text text-[11px] text-[#4A4A4A] transition-colors hover:text-[#1A1A1A] sm:text-xs"
            >
              Work
            </a>
            <a
              href="#forensics"
              className="stamp-text text-[11px] text-[#4A4A4A] transition-colors hover:text-[#1A1A1A] sm:text-xs"
            >
              Stack
            </a>
            <a
              href="#contact"
              className="stamp-text text-[11px] text-[#4A4A4A] transition-colors hover:text-[#1A1A1A] sm:text-xs"
            >
              Contact
            </a>

            {/* GitHub icon */}
            <a
              href="https://github.com/Lxzeroo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A4A4A] transition-colors hover:text-[#1A1A1A]"
              title="GitHub"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn icon */}
            <a
              href="https://www.linkedin.com/in/affan-ahmed1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A4A4A] transition-colors hover:text-[#1A1A1A]"
              title="LinkedIn"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Resume text link */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="stamp-text text-[11px] text-[#4A4A4A] transition-colors hover:text-[#C41E3A] sm:text-xs"
            >
              Resume
            </a>

            {/* HIRE HIM button */}
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="bg-[#1A1A1A] px-4 py-1.5 stamp-text text-[11px] text-[#F4F1EA] transition-colors hover:bg-[#C41E3A] sm:px-5 sm:text-xs"
            >
              Hire Him
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
