"use client";

const achievements = [
  {
    number: "01",
    icon: "🏆",
    category: "BUSINESS INTELLIGENCE",
    title: "Local Business KPI Dashboards",
    subtitle: "Independent Project Creator",
    description:
      "Engineered interactive reporting dashboards for local establishments (a bakery, a cafe, and a restaurant) to monitor financial health. Cleaned messy transactional records, mapped out seasonal sales trends, and calculated key metrics like average ticket size, customer retention rates, and peak operating hours to optimize inventory waste.",
  },

  {
    number: "02",
    icon: "💻",
    category: "DATA MODELING",
    title: "School Operations Dataset Analysis",
    subtitle: "Predictive Analytics Project",
    description:
      "Compiled, structured, and analyzed an education dataset focusing on student performance and administrative metrics. Built data models to track student attendance patterns, forecast resource allocation needs, and isolate early warning metrics for academic risk intervention.",
    // type: "leetcode",
    // link: "https://leetcode.com/u/viveknamdev03/",
    // linkText: "View LeetCode",
    // stats: ["200+ Problems"],
  },
  //   02 DATA MODELING
  // School Operations Dataset Analysis
  // Predictive Analytics Project
  // Compiled, structured, and analyzed an education dataset focusing on student performance and administrative metrics. Built data models to track student attendance patterns, forecast resource allocation needs, and isolate early warning metrics for academic risk intervention.
  {
    number: "03",
    icon: "👥",
    category: "COLLEGE LEADERSHIP",
    title: "Student Coordinator — Citronics Tech Fest",
    subtitle: "Event Operations",
    description:
      "Served as a core student organizer for the Citronics festival, managing volunteer schedules, coordinating logistics between different technical tracks, and helping streamline communication across college departments.",
    // type: "leadership",
    // link: "#contact",
    // linkText: "Get in Touch",
  },

  //   03 COLLEGE LEADERSHIP
  // Student Coordinator — Citronics Tech Fest
  // Event Operations
  // Served as a core student organizer for the Citronics festival, managing volunteer schedules, coordinating logistics between different technical tracks, and helping streamline communication across college departments.
];

export default function Achievements() {
  const handleCertificateClick = () => {
    window.open(
      "/certificates/accio-hackathon.jpeg",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-28">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Achievements & Leadership
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            More than
            <br />
            <span className="text-zinc-500">just data patterns.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Highlights from real-world analytics projects, interactive dashboard
            engineering, and operational management.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <article
              key={achievement.number}
              className="group flex min-h-105 flex-col rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7 transition duration-500 hover:-translate-y-2 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/30"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-violet-400">
                  {achievement.number}
                </span>

                <span className="text-3xl">{achievement.icon}</span>
              </div>

              {/* Content */}
              <div className="mt-10">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                  {achievement.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {achievement.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-violet-400">
                  {achievement.subtitle}
                </p>

                <p className="mt-5 leading-7 text-zinc-500">
                  {achievement.description}
                </p>

                {/* LeetCode Stats */}
                {/* {achievement.stats && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {achievement.stats.map((stat) => (
                      <span
                        key={stat}
                        className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                )} */}
              </div>

              {/* Bottom Link */}
              {/* <div className="mt-auto pt-8">
                {achievement.type === "certificate" ? (
                  <button
                    type="button"
                    onClick={handleCertificateClick}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-violet-400"
                  >
                    {achievement.linkText}

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </button>
                ) : (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-violet-400"
                  >
                    {achievement.linkText}

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                )}
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
