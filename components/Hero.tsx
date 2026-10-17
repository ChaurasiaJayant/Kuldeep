"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="mx-auto grid min-h-[calc(90vh-80px)] max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />

            <span className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-400 sm:text-sm sm:tracking-[0.25em]">
              Analytics Specialist | Bridging Technology & Data Insights
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Transforming chaotic variables,
            <br />
            <span className="text-zinc-500">into predictable growth.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8">
            I&apos;m Kuldeep Yadav, an Analyst operating at the convergence of
            advanced software engineering and data intelligence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-violet-600 px-7 py-3.5 font-medium text-white! transition duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/20"
            >
              View My Work
            </a>

            <a
              href="https://github.com/vivek-namdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-7 py-3.5 font-medium text-zinc-200 transition duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:bg-zinc-900"
            >
              GitHub ↗
            </a>
          </div>

          <div className="mt-7 flex items-center gap-2 text-sm text-zinc-500 sm:mt-8">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Open to project-based roles and strategic data partnerships.
          </div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:ml-auto"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-violet-600/10 blur-2xl" />

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0d0d0d] shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3 sm:px-5 sm:py-4">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />

              <span className="ml-2 truncate text-xs text-zinc-500 sm:ml-3">
                kuldeep@portfolio ~
              </span>
            </div>

            {/* Terminal content */}
            <div className="space-y-5 p-5 font-mono text-xs sm:space-y-6 sm:p-6 sm:text-sm">
              <div>
                <p className="text-zinc-500">$ whoami</p>
                <p className="mt-1 text-white">kuldeep@analyst</p>
              </div>

              <div>
                <p className="text-zinc-500">$ stack</p>

                <div className="mt-3 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <span>SQL</span>
                    <span className="text-violet-400">██████████</span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span>PowerBI</span>
                    <span className="text-violet-400">█████████░</span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span>DaxStudio</span>
                    <span className="text-violet-400">████████░░</span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span>Python</span>
                    <span className="text-violet-400">█████████░</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-zinc-500">$ status</p>

                <p className="mt-1">
                  <span className="text-green-400">OPEN_TO_WORK</span>
                  <span className="text-zinc-500">=</span>
                  <span className="text-white">true</span>
                </p>
              </div>

              <div className="text-zinc-600">
                <span className="animate-pulse">▋</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
