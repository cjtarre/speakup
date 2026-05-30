function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-slate-900">SpeakUp</a>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#how-it-works" className="hover:text-slate-900">How It Works</a>
          <a href="#cta" className="rounded-xl bg-violet-600 px-4 py-2 text-white hover:bg-violet-700">Start Practicing</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;