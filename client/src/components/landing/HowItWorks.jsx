const steps = [
  {
    number: "01",
    title: "Choose a mode",
    description: "Select daily practice, mock interview, defense, or impromptu speaking.",
  },{
    number: "02",
    title: "Get a prompt",
    description: "Receive a speaking prompt based on the mode you selected.",
  },{
    number: "03",
    title: "Record your answer",
    description: "Practice your response with a timer and microphone recorder.",
  },{
    number: "04",
    title: "Review feedback",
    description: "See feedback on clarity, structure, pace, and speaking habits.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">How It Works</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-900">A simple way to practice speaking.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-violet-600">{step.number}</p>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;