"use client";

import AnimatedSection from "./AnimatedSection";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#D4CFC4]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <hr className="border-t border-[#4A4A4A]" />

        <AnimatedSection className="mt-10">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Left */}
            <div>
              <h3 className="headline-md text-xl text-[#F4F1EA]">
                Affan Imthiyaz Ahmed
              </h3>
              <p className="body-text mt-3 max-w-sm text-sm leading-relaxed text-[#B8B3A8]">
                A full-stack developer building AI-enabled web applications —
                currently at Tuenx Technologies, with independent work on
                Vespor and other builds.
              </p>
              <p className="stamp-text mt-3 text-[11px] text-[#8C8679]">
                Bengaluru, India · Remote-friendly.
              </p>
            </div>

            {/* Right — nav */}
            <div>
              <p className="stamp-text text-[11px] tracking-[0.15em] text-[#8C8679] mb-3">
                Sections
              </p>
              <nav className="space-y-1.5">
                {["The Casework", "Forensics", "Known Whereabouts", "File a Report"].map(
                  (label) => {
                    const href = {
                      "The Casework": "#casework",
                      Forensics: "#forensics",
                      "Known Whereabouts": "#whereabouts",
                      "File a Report": "#contact",
                    }[label];
                    return (
                      <a
                        key={label}
                        href={href}
                        className="block font-serif text-[#D4CFC4] transition-colors hover:text-[#F4F1EA]"
                      >
                        {label}
                      </a>
                    );
                  }
                )}
              </nav>

              <p className="stamp-text mt-6 text-[11px] tracking-[0.15em] text-[#8C8679] mb-3">
                Wire Services
              </p>
              <div className="space-y-1.5">
                <a
                  href="https://github.com/Lxzeroo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-serif text-[#D4CFC4] transition-colors hover:text-[#F4F1EA]"
                >
                  GitHub (github.com/Lxzeroo)
                </a>
                <a
                  href="https://www.linkedin.com/in/affan-ahmed1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-serif text-[#D4CFC4] transition-colors hover:text-[#F4F1EA]"
                >
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-serif text-[#D4CFC4] transition-colors hover:text-[#F4F1EA]"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <hr className="hairline mt-12 border-[#4A4A4A]" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="stamp-text text-[10px] text-[#8C8679]">
            Case Closed
          </p>
          <p className="stamp-text text-[10px] text-[#8C8679]">
            © 2026 The Full-Stack Dossier · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
