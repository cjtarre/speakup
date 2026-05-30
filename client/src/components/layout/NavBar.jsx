import { Link } from "react-router-dom";
import { Mic2 } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
            <Mic2 size={20} />
          </span>

          <span className="text-xl font-bold text-slate-900">
            SpeakUp
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="/#features" className="hover:text-emerald-700">
            Features
          </a>

          <a href="/#how-it-works" className="hover:text-emerald-700">
            How It Works
          </a>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              to="/teleprompter"
              className="rounded-2xl border border-emerald-200 bg-white/70 px-4 py-2 font-medium text-emerald-700 transition hover:bg-emerald-50"
            >
              Teleprompter
            </Link>

            <Link
              to="/practice"
              className="rounded-2xl bg-emerald-600 px-4 py-2 text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              Start Practicing
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;