"use client";

import AnimatedSection from "./AnimatedSection";
import Stamp from "./Stamp";

interface Exhibit {
  letter: string;
  title: string;
  tag: string;
  description: string;
  tech: string;
  period: string;
  role: string;
  link?: string;
  linkLabel?: string;
  status?: "active" | "shipped" | "progress";
}

const exhibits: Exhibit[] = [
  {
    letter: "A",
    title: "GapHatch",
    tag: "Client / Collaborative Build",
    description:
      "Contributed to early brainstorming and independently built the site: a hybrid 3D/2D marketing experience on Next.js, TypeScript, and Tailwind, with a custom Three.js hero scene layered with Framer Motion.",
    tech: "Next.js · TypeScript · Tailwind CSS · Three.js · Framer Motion",
    period: "2025 — Now",
    role: "Contributor & Web Developer",
    link: "#",
    linkLabel: "Open case file",
    status: "shipped",
  },
  {
    letter: "B",
    title: "Vespor",
    tag: "In Active Development (~60% complete)",
    description:
      "An AI-driven academic platform for college students, built end-to-end — including a custom abstract brand mark finalized across three colorways to anchor the product's visual language.",
    tech: "Next.js · TypeScript · Tailwind CSS",
    period: "2025 — Now",
    role: "Developer",
    link: "https://vespor.app",
    linkLabel: "Open case file",
    status: "active",
  },
  {
    letter: "C",
    title: "Promptly AI",
    tag: "Side Project · Shipped",
    description:
      "A Bauhaus-influenced AI chat interface integrating the OpenRouter API for multi-model access. Deployed live on Vercel.",
    tech: "Next.js 15 · OpenRouter API · Vercel",
    period: "",
    role: "",
    link: "#",
    linkLabel: "Open case file",
    status: "shipped",
  },
  {
    letter: "D",
    title: "Nemotron Terminal",
    tag: "Side Project · Open Source",
    description:
      "A cyberpunk-themed chat interface integrating the NVIDIA NIM API. Built with React/Vite on the front and FastAPI on the back, deployed and open-sourced on GitHub.",
    tech: "React · Vite · FastAPI · NVIDIA NIM API",
    period: "",
    role: "",
    link: "#",
    linkLabel: "View source",
    status: "shipped",
  },
  {
    letter: "E",
    title: "Zero Trust Engine (ZTE)",
    tag: "In Progress",
    description:
      "A ZTNA-based backend enforcing zero-trust access policies for financial data — identity management via Keycloak, policy-as-code authorization via Open Policy Agent. Containerized with Docker across multiple services, with Prometheus and Grafana wired up for observability.",
    tech: "Java · Spring Boot · Keycloak · OPA · PostgreSQL · Docker · Prometheus/Grafana",
    period: "",
    role: "",
    link: "#",
    linkLabel: "Open case file",
    status: "progress",
  },
  {
    letter: "F",
    title: "Agentic AI Tech News Aggregator",
    tag: "Personal Project",
    description:
      "An AI-driven platform that aggregates and summarizes tech news through automated, agentic workflows — modular LangChain pipelines for extraction, classification, and summarization, backed by a vector database (FAISS/Chroma) for relevance ranking. Containerized with Docker.",
    tech: "Python · FastAPI · LangChain · Docker · Vector DB (FAISS/Chroma)",
    period: "",
    role: "",
    link: "#",
    linkLabel: "Open case file",
    status: "shipped",
  },
  {
    letter: "G",
    title: "Expense Anomaly Detector",
    tag: "Personal Project",
    description:
      "An ML-powered web app using an Isolation Forest model to flag anomalous spending patterns, with 90%+ accuracy on synthetic financial datasets. Deployed on Streamlit Cloud with interactive real-time dashboards.",
    tech: "Python · Scikit-learn · Streamlit · Pandas",
    period: "",
    role: "",
    link: "https://github.com/Lxzeroo/expense-anomaly-detector",
    linkLabel: "Open case file",
    status: "shipped",
  },
  {
    letter: "H",
    title: "Employee Leave Management System",
    tag: "Personal Project",
    description:
      "A full-stack leave management system with secure authentication, leave requests, and approvals — role-based access control and real-time status tracking to streamline approval workflows.",
    tech: "Java · HTML · CSS · JavaScript",
    period: "",
    role: "",
    link: "#",
    linkLabel: "Open case file",
    status: "shipped",
  },
];

const statusColors: Record<string, "red" | "amber" | "ink"> = {
  active: "red",
  shipped: "ink",
  progress: "amber",
};

const statusLabel: Record<string, string> = {
  active: "Active Investigation",
  shipped: "Case Closed",
  progress: "Under Investigation",
};

export default function Casework() {
  return (
    <section id="casework" className="bg-[#F4F1EA]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <hr className="hairline-thick" />

        <AnimatedSection className="mt-10">
          <div className="flex items-center gap-4">
            <Stamp text="The Casework" />
          </div>

          <p className="body-text mt-4 max-w-xl text-sm sm:text-base">
            Eight exhibits from the files — spanning client builds, AI
            platforms, open-source experiments, and infrastructure projects.
          </p>
        </AnimatedSection>

        {/* Exhibits grid */}
        <div className="mt-12 grid gap-0 divide-y divide-dashed divide-[#D4CFC4]">
          {exhibits.map((exhibit, i) => (
            <AnimatedSection key={exhibit.letter} delay={i * 0.05}>
              <div className="group py-8 transition-colors hover:bg-[#EDE9DF] sm:px-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                  {/* Exhibit badge */}
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center border-2 border-[#1A1A1A] bg-[#1A1A1A] text-[#F4F1EA] font-serif text-lg font-bold">
                      {exhibit.letter}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="headline-md text-xl sm:text-2xl">
                          {exhibit.title}
                        </h3>
                        <p className="stamp-text mt-1 text-[11px] text-[#8C8679]">
                          {exhibit.tag}
                        </p>
                      </div>
                      <Stamp
                        text={statusLabel[exhibit.status ?? "shipped"]}
                        color={statusColors[exhibit.status ?? "shipped"]}
                      />
                    </div>

                    <p className="body-text mt-3 text-sm sm:text-base">
                      {exhibit.description}
                    </p>

                    <p className="stamp-text mt-3 text-[11px] text-[#4A4A4A] leading-relaxed">
                      Tech: {exhibit.tech}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      {exhibit.link && (
                        <a
                          href={exhibit.link}
                          target={
                            exhibit.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            exhibit.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="inline-flex items-center gap-1.5 font-serif text-sm text-[#C41E3A] hover:underline"
                        >
                          <span>{exhibit.linkLabel ?? "Open case file"}</span>
                          <span>→</span>
                        </a>
                      )}
                      {(exhibit.period || exhibit.role) && (
                        <span className="stamp-text text-[10px] text-[#8C8679]">
                          {[exhibit.period, exhibit.role]
                            .filter(Boolean)
                            .join(" · ")}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <hr className="hairline mt-8" />
      </div>
    </section>
  );
}
