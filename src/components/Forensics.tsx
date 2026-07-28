"use client";

import AnimatedSection from "./AnimatedSection";
import Stamp from "./Stamp";

interface SkillRow {
  tool: string;
  code: string;
  detected: string;
  finding: string;
}

const skills: SkillRow[] = [
  { tool: "Java", code: "JAVA", detected: "Most days", finding: "Primary tool" },
  { tool: "Spring Boot", code: "SPBT", detected: "Most days", finding: "Primary tool" },
  { tool: "JavaScript / TypeScript", code: "JS/TS", detected: "Most days", finding: "Primary tool" },
  { tool: "Next.js / React", code: "NEXT", detected: "Most days", finding: "Primary tool" },
  { tool: "Tailwind CSS", code: "TWX", detected: "Most days", finding: "Primary tool" },
  { tool: "Python", code: "PY", detected: "In projects", finding: "Comfortable" },
  { tool: "FastAPI / LangChain", code: "FAPI/LC", detected: "In projects", finding: "Comfortable" },
  { tool: "PostgreSQL / Supabase / Prisma", code: "PG/SUPA", detected: "In projects", finding: "Comfortable" },
  { tool: "MySQL", code: "SQL", detected: "When needed", finding: "Comfortable" },
  { tool: "Docker", code: "DCKR", detected: "Most projects", finding: "Comfortable" },
  { tool: "Keycloak / OPA", code: "KC/OPA", detected: "In ZTE build", finding: "Learning" },
  { tool: "Prometheus / Grafana", code: "PROM/GRAF", detected: "In ZTE build", finding: "Learning" },
  { tool: "Git & GitHub", code: "GIT", detected: "Daily", finding: "Primary tool" },
  { tool: "Framer Motion / Three.js", code: "FM/3JS", detected: "In client builds", finding: "Comfortable" },
];

const certifications = [
  "IBM — Agentic AI: From Learner to Builder",
  "Salesforce — Agentblazer Champion Certification",
  "Cisco — Introduction to Cybersecurity",
  "Google — Intro to AI and CS",
  "Spoken Tutorial Training — Python, C, Git",
];

export default function Forensics() {
  return (
    <section id="forensics" className="bg-[#EDE9DF]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <hr className="hairline-thick" />

        <AnimatedSection className="mt-10">
          <Stamp text="Forensics: Tools & Tech" />

          <p className="body-text mt-4 max-w-xl text-sm sm:text-base">
            Findings are illustrative — what he reaches for day to day, not a
            ranking.
          </p>
        </AnimatedSection>

        {/* Skills table */}
        <AnimatedSection delay={0.1} className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-[#1A1A1A]">
                <th className="pb-3 pr-4 stamp-text text-[11px] text-[#8C8679] font-medium">
                  Tool
                </th>
                <th className="pb-3 pr-4 stamp-text text-[11px] text-[#8C8679] font-medium">
                  Code
                </th>
                <th className="pb-3 pr-4 stamp-text text-[11px] text-[#8C8679] font-medium">
                  Detected
                </th>
                <th className="pb-3 stamp-text text-[11px] text-[#8C8679] font-medium">
                  Finding
                </th>
              </tr>
            </thead>
            <tbody>
              {skills.map((row) => (
                <tr
                  key={row.code}
                  className="border-b border-dashed border-[#D4CFC4] transition-colors hover:bg-[#F4F1EA]"
                >
                  <td className="py-3 pr-4 font-serif text-[#1A1A1A]">
                    {row.tool}
                  </td>
                  <td className="py-3 pr-4 stamp-text text-xs text-[#C41E3A]">
                    {row.code}
                  </td>
                  <td className="py-3 pr-4 text-[#4A4A4A]">{row.detected}</td>
                  <td className="py-3">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 stamp-text text-[10px] ${
                        row.finding === "Primary tool"
                          ? "bg-[#1A1A1A] text-[#F4F1EA]"
                          : row.finding === "Comfortable"
                            ? "bg-[#D4CFC4] text-[#1A1A1A]"
                            : "bg-[#B85C38] text-[#F4F1EA]"
                      }`}
                    >
                      {row.finding}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection delay={0.2} className="mt-12">
          <hr className="hairline mb-8" />
          <p className="stamp-text mb-4 text-[10px] tracking-[0.15em] text-[#8C8679]">
            Certifications on Record
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <p
                key={cert}
                className="stamp-text text-[11px] text-[#4A4A4A] leading-relaxed"
              >
                {cert}
              </p>
            ))}
          </div>
        </AnimatedSection>

        <hr className="hairline mt-14" />
      </div>
    </section>
  );
}
