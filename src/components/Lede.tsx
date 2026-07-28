"use client";

import AnimatedSection from "./AnimatedSection";

export default function Lede() {
  return (
    <section className="bg-[#F4F1EA]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <hr className="hairline-thick" />

        <AnimatedSection className="mt-10">
          {/* Byline */}
          <p className="stamp-text text-xs tracking-[0.15em] text-[#8C8679]">
            By The Investigation Desk · Reporting from Bengaluru, between Tuenx
            Technologies and independent builds
          </p>

          {/* Content — two-column newspaper style on larger screens */}
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_180px] lg:grid-cols-[1fr_220px]">
            <div className="body-text space-y-4 text-base sm:text-lg">
              <p>
                Computer Science and Business Systems undergraduate with hands-on
                experience building full-stack, AI-enabled applications — Java and
                Spring Boot on the backend, modern JavaScript/TypeScript (Next.js,
                React) on the front. Comfortable across Linux environments,
                Docker-based deployments, and RESTful API design, with a habit of
                using AI-assisted development tools (Claude Code, DeepSeek) to move
                fast without cutting corners on quality.
              </p>

              <p>
                Currently a Full Stack Developer at Tuenx Technologies, where
                he&apos;s helped build production sites including GapHatch and Vespor.
                Also picking up data analytics work at Venture Launcher, and
                completed an IBM SkillsBuild internship focused on AI strategy and
                business intelligence — the business side of tech is part of the
                file too, not just the code.
              </p>
            </div>

            {/* Portrait — halftone composite sketch */}
            <div className="flex flex-col items-center gap-3">
              <svg
                width="220"
                height="260"
                viewBox="0 0 220 260"
                xmlns="http://www.w3.org/2000/svg"
                className="w-36 sm:w-40 lg:w-48 h-auto"
                style={{ fontFamily: "monospace" }}
              >
                <defs>
                  <pattern id="halftone" width="8" height="8" patternUnits="userSpaceOnUse">
                    <circle cx="4" cy="4" r="2.6" fill="#1f1f1f" opacity="0.8" />
                  </pattern>
                  <mask id="bust-mask">
                    <rect width="220" height="220" fill="white" />
                    <circle cx="100" cy="78" r="32" fill="black" />
                    <path d="M 90 102 L 110 102 L 114 125 L 86 125 Z" fill="black" />
                    <path d="M 45 180 C 45 135, 70 120, 100 120 C 130 120, 155 135, 155 180 Z" fill="black" />
                  </mask>
                </defs>
                <g transform="translate(10, 0)">
                  <rect x="0" y="0" width="200" height="200" rx="16" fill="transparent" stroke="#222222" strokeWidth="1.5" />
                  <rect x="0" y="0" width="200" height="200" fill="url(#halftone)" mask="url(#bust-mask)" />
                  <g transform="translate(130, 165) rotate(-8)">
                    <rect x="0" y="0" width="76" height="24" fill="#fcfbf7" stroke="#b92b27" strokeWidth="1.2" rx="2" opacity="0.9" />
                    <text x="38" y="10" fontSize="6.5" fontWeight="bold" fill="#b92b27" textAnchor="middle" letterSpacing="0.5">ARTIST&apos;S</text>
                    <text x="38" y="18" fontSize="6.5" fontWeight="bold" fill="#b92b27" textAnchor="middle" letterSpacing="0.5">RENDERING</text>
                  </g>
                  <text x="100" y="222" fontSize="9" fontStyle="italic" fill="#555555" textAnchor="middle">
                    PICTURED: THE SUBJECT
                  </text>
                  <text x="100" y="234" fontSize="8.5" fontStyle="italic" fill="#777777" textAnchor="middle">
                    (composite sketch)
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </AnimatedSection>

        <hr className="hairline mt-14" />
      </div>
    </section>
  );
}
