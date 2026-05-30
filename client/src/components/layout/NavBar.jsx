import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-slate-900">SpeakUp</Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link to="/#features" className="hover:text-slate-900">Features</Link>
          <Link to="/#how-it-works" className="hover:text-slate-900">How It Works</Link>
          <Link to="/#cta" className="rounded-xl bg-violet-600 px-4 py-2 text-white hover:bg-violet-700">Start Practicing</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;