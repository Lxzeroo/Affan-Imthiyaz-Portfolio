"use client";

import AnimatedSection from "./AnimatedSection";
import Stamp from "./Stamp";

interface Movement {
  date: string;
  title: string;
  org: string;
  detail: string;
}

const movements: Movement[] = [
  {
    date: "Jul 2026 — Now",
    title: "Data Analytics Intern",
    org: "Venture Launcher",
    detail: "Contributing to data analytics work alongside ongoing development projects.",
  },
  {
    date: "May 2025 — Now",
    title: "Full Stack Developer",
    org: "Tuenx Technologies",
    detail:
      "One year (and counting) building full-stack web applications, including work on GapHatch and Vespor — owning both frontend implementation and backend/API work.",
  },
  {
    date: "2025",
    title: "AI Strategy & Business Intelligence Intern",
    org: "IBM SkillsBuild",
    detail:
      "Internship focused on AI strategy and business intelligence, bridging technical AI concepts with business decision-making.",
  },
  {
    date: "2023 — Now",
    title: "B.E., Computer Science and Business Systems",
    org: "Canara Engineering College",
    detail:
      "CGPA: 8.1. Coursework and personal projects spanning full-stack development, machine learning, and applied AI.",
  },
];

export default function KnownWhereabouts() {
  return (
    <section id="whereabouts" className="bg-[#F4F1EA]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <hr className="hairline-thick" />

        <AnimatedSection className="mt-10">
          <Stamp text="Known Whereabouts" />

          <p className="body-text mt-4 max-w-xl text-sm sm:text-base">
            Movements on record — reverse chronological ledger of professional
            engagements and education.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="mt-10">
          <div className="relative border-l-2 border-[#D4CFC4]">
            {movements.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="mb-10 ml-6 last:mb-0">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                      i === 0
                        ? "border-[#C41E3A] bg-[#C41E3A]"
                        : "border-[#1A1A1A] bg-[#F4F1EA]"
                    }`}
                  />

                  <p className="stamp-text text-[11px] text-[#C41E3A]">
                    {m.date}
                  </p>
                  <h3 className="headline-md mt-1 text-lg text-[#1A1A1A]">
                    {m.title}
                  </h3>
                  <p className="font-serif italic text-[#4A4A4A]">{m.org}</p>
                  <p className="body-text mt-2 max-w-xl text-sm">
                    {m.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <hr className="hairline mt-4" />
      </div>
    </section>
  );
}
