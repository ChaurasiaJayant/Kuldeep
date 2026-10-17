export default function About() {
  return (
    <section id="about" className="border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-28">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            An analyst
            <br />
            <span className="text-zinc-500">
              who likes to uncover insights.
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="mt-16 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Story */}
          <div>
            <p className="text-xl leading-9 text-zinc-300">
              I&apos;m Kuldeep Yadav, a Data Analyst focused on parsing complex
              datasets, building interactive tracking tools, and turning raw
              numbers into clear, actionable business strategies.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              I enjoy working across data extraction and visualization, from
              writing optimized queries with SQL to engineering automated
              reporting pipelines and high-impact dashboards using Power BI and
              Tableau.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              I&apos;m particularly interested in solving real-world operational
              problems, discovering hidden trends through quantitative projects,
              and continuously improving how organizations apply data to drive
              strategic decisions.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-violet-400"
              >
                Let&apos;s connect
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Quick facts */}
          <div className="grid gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Focus
              </p>

              <p className="mt-3 text-lg font-medium text-white">
                Data Analytics & BI
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Core Stack
              </p>

              <p className="mt-3 text-lg font-medium text-white">
                SQL • Power BI • Python
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Based In
              </p>

              <p className="mt-3 text-lg font-medium text-white">India</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Status
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                <span className="text-lg font-medium text-white">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Journey */}
        <div className="mt-28">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Developer Journey
          </p>

          <div className="mt-12 border-l border-zinc-800">
            {/* 01 */}
            <div className="relative pl-8 pb-14">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-violet-500" />

              <p className="text-sm font-mono text-zinc-600">01</p>

              <h3 className="mt-2 text-xl font-semibold">
                Started in Data Analytics
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-zinc-500">
                Began by mastering the fundamentals of data exploration,
                starting with advanced Excel models before transitioning into
                database programming with SQL and statistical computation using
                Python.
              </p>
            </div>

            {/* 02 */}
            <div className="relative pl-8 pb-14">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-700" />

              <p className="text-sm font-mono text-zinc-600">02</p>

              <h3 className="mt-2 text-xl font-semibold">
                Expanded into Frontend & BI
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-zinc-500">
                Developed a solid foundational baseline in frontend fundamentals
                (HTML5, CSS3, and JavaScript) to understand web data structures,
                leveraging this knowledge to engineer dynamic, consumer-facing
                reporting frameworks and automated dashboards in Power BI.
              </p>
            </div>

            {/* 03 */}
            <div className="relative pl-8 pb-14">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-700" />

              <p className="text-sm font-mono text-zinc-600">03</p>

              <h3 className="mt-2 text-xl font-semibold">
                Joined a Multi-National Corporation (MNC)
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-zinc-500">
                Transitioned into a professional corporate environment,
                deploying production-scale data pipelines, managing enterprise
                cloud warehouses, and collaborating with cross-functional teams
                to translate complex business metrics into clear strategic
                decisions.
              </p>
            </div>

            {/* 04 */}
            <div className="relative pl-8">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-violet-500" />

              <p className="text-sm font-mono text-zinc-600">04</p>

              <h3 className="mt-2 text-xl font-semibold">
                Skilling Up Day by Day
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-zinc-500">
                Continuously upgrading technical capabilities in predictive data
                modeling, advanced big data infrastructures, and specialized
                automation tools to deliver deeper analytical impact and drive
                high-performing data teams forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
