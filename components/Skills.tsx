import {
  Database,
  Server,
  Wrench,
  ChartColumnStacked,
  ChartNoAxesCombined,
  SearchCode,
} from "lucide-react";

import Reveal from "@/components/Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Data Analytics",
    description:
      "Mining insights from data to solve complex business problems.",
    icon: ChartColumnStacked,
    skills: [
      "SQL",
      "Python",
      "R",
      "Statistics",
      "Pandas",
      "NumPy",
      "Predictive Modeling",
    ],
  },
  {
    number: "02",
    title: "Business Intelligence",
    description:
      "Creating powerful dashboards and reports for strategic decision-making.",
    icon: ChartNoAxesCombined,
    skills: [
      "Power BI",
      "Tableau",
      "Looker",
      "Data Visualization",
      "Report Automation",
      "KPI Tracking",
    ],
  },
  {
    number: "03",
    title: "Data Engineering & ETL",
    description:
      "Designing and managing robust data pipelines for reliable analytics.",
    icon: Database,
    skills: [
      "ETL",
      "Airflow",
      "dbt",
      "Redshift",
      "Snowflake",
      "BigQuery",
      "Data Modeling",
    ],
  },
  {
    number: "04",
    title: "Analytics Tools",
    description: "Utilities used to clean, analyze, and present data findings.",
    icon: SearchCode,
    skills: ["Excel", "Jupyter", "Git", "Anaconda", "Alteryx", "Metabase"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-28">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Technical Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            The tools I use
            <br />
            <span className="text-zinc-500">to build.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            My primary focus is full-stack web development with modern frontend,
            backend and database technologies.
          </p>
        </div>

        {/* Skill Cards */}
        <Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.number}
                  className="group rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7 transition duration-500 hover:-translate-y-1 hover:border-zinc-700"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    {/* Number */}
                    <span className="font-mono text-sm text-violet-400">
                      {group.number}
                    </span>

                    {/* Category Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/15 group-hover:scale-105">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {group.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-sm text-zinc-300 transition hover:border-violet-500/40 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Bottom Statement */}
        <div className="mt-12 border-l border-violet-500/50 pl-5">
          <p className="text-sm leading-7 text-zinc-500">
            I focus on understanding the problem first, then choosing the
            simplest technology that solves it effectively.
          </p>
        </div>
      </div>
    </section>
  );
}
