
const features = [
  {
    title: "Daily Practice",
    description:"Build confidence through short speaking exercises and daily prompts.",
  },{
    title: "Mock Interviews",
    description:"Prepare for internships, jobs, and scholarship interviews.",
  },{
    title: "Project Defenses",
    description:"Practice technical explanations and defense questions.",
  },{
    title: "Progress Tracking",
    description:"Monitor consistency, improvement, and speaking habits over time.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">Features</p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">Practice with purpose.</h2>

          <p className="mt-4 text-slate-600">
            SpeakUp gives you structured tools for real situations where
            speaking clearly matters.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-xl">
                ✦
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;