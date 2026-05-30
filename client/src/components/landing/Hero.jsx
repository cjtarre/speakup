import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-6 py-24">
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white/60 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-700 backdrop-blur-md">
            AI-Powered Speaking Practice
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Become a More Confident Speaker.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Practice interviews, presentations, project defenses, and impromptu
            speeches through guided speaking sessions and personalized feedback.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/practice"
              className="rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              Start Practicing
            </Link>

            <a
              href="#features"
              className="rounded-2xl border border-emerald-200 bg-white/70 px-6 py-3 font-semibold text-slate-700 shadow-sm backdrop-blur-md transition hover:bg-white"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/70 bg-white/50 p-6 shadow-2xl shadow-emerald-900/10 backdrop-blur-xl">
          <div className="rounded-2xl border border-emerald-100 bg-white/70 p-5">
            <p className="text-sm font-semibold text-emerald-700">
              Today&apos;s Practice
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Mock Interview
            </h2>

            <p className="mt-4 rounded-2xl bg-emerald-50 p-4 text-slate-700">
              “Tell me about a challenge you faced and how you overcame it.”
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-emerald-700">02:00</p>
                <p className="mt-1 text-xs text-slate-500">Timer</p>
              </div>

              <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-emerald-700">4</p>
                <p className="mt-1 text-xs text-slate-500">Prompts</p>
              </div>

              <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-emerald-700">Ready</p>
                <p className="mt-1 text-xs text-slate-500">Status</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-900 p-4 text-white">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <p className="text-sm">Voice recorder ready</p>
              </div>

              <div className="mt-4 h-2 rounded-full bg-white/10">
                <div className="h-2 w-2/3 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;