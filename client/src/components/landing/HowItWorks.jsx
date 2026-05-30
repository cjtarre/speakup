import { ListChecks, MessageSquareQuote, Mic, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose a mode",
    description:
      "Select daily practice, mock interview, defense, pageant Q&A, or impromptu speaking.",
    icon: ListChecks,
  },
  {
    number: "02",
    title: "Get a prompt",
    description:
      "Receive a speaking prompt based on the mode you selected.",
    icon: MessageSquareQuote,
  },
  {
    number: "03",
    title: "Record your answer",
    description:
      "Practice your response with a timer and microphone recorder.",
    icon: Mic,
  },
  {
    number: "04",
    title: "Review feedback",
    description:
      "See feedback on clarity, structure, pace, and speaking habits.",
    icon: Sparkles,
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-emerald-50 px-6 py-24"
    >
      <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            How It Works
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            A simple way to practice speaking.
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Start with a prompt, speak your answer, and review your progress
            after each session.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="rounded-3xl border border-white/70 bg-white/60 p-6 shadow-xl shadow-emerald-900/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                    <Icon size={27} className="text-emerald-700" />
                  </div>

                  <span className="text-sm font-bold text-emerald-700">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;