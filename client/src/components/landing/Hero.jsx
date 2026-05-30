import { Link } from "react-router-dom";

import Button from "../ui/Button";

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-violet-600">
          AI-Powered Speaking Practice
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
          Become a More Confident Speaker.
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Practice interviews, presentations, project defenses,
          and impromptu speeches through guided speaking sessions
          and personalized feedback.
        </p>

        <div className="mt-8 flex gap-4">
          <Link to="/practice">
            <Button>Start Practicing</Button>
          </Link>

          <Link to="/learn-more">
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;