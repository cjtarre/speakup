import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-center text-white"
    >
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
          Start Today
        </p>

        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
          Ready to rebuild your voice?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Practice interviews, presentations, project defenses, and impromptu
          speeches with confidence.
        </p>

        <div className="mt-8">
          <Link
            to="/practice"
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            Start Practicing
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;