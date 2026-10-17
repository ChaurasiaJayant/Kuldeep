export default function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">
          {/* Left */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              Contact
            </p>

            <h2 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              Let&apos;s build
              <br />
              <span className="text-zinc-500">something useful.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Apart from Data Analytics, we provide targeted solutions in the IT
              and ITES sectors. If you need support with Web Development, SEO
              Marketing, Business datasets, or Business Consultancy, do not
              hesitate to contact us: our specialized team is ready to bring
              your projects to life!
            </p>
            <p className="mt-4 text-zinc-400 whitespace-pre-line">
              🚀 Ready to take on your next big project!
            </p>

            {/* Resume */}
          </div>

          {/* Right */}
          <div className="flex flex-col justify-end">
            <div className="border-t border-zinc-800">
              {/* Email */}
              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="group flex items-center justify-between border-b border-zinc-800 py-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Email
                  </p>

                  <p className="mt-2 text-lg text-zinc-300 transition group-hover:text-white">
                    yaduvanshi.kuldeep.6398@gmail.com{" "}
                  </p>
                </div>

                <span className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-violet-400">
                  ↗
                </span>
              </a>

              {/* GitHub */}

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kuldeep-yadav-932095319?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-zinc-800 py-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    LinkedIn
                  </p>

                  <p className="mt-2 text-lg text-zinc-300 transition group-hover:text-white">
                    linkedin.com/in/kuldeepYadav
                  </p>
                </div>

                <span className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-violet-400">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 border-t border-zinc-900 pt-8">
          <div className="flex flex-col justify-between gap-4 text-sm text-zinc-600 sm:flex-row">
            <p>Designed &amp; built by Kuldeep Yadav 👦</p>
          </div>
        </div>
      </div>
    </section>
  );
}
