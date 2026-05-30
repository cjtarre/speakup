import {
  CalendarDays,
  BriefcaseBusiness,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "Daily Practice",
    description:
      "Build confidence through short speaking exercises and daily prompts.",
    icon: CalendarDays,
  },
  {
    title: "Mock Interviews",
    description:
      "Prepare for internships, jobs, and scholarship interviews.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Project Defenses",
    description:
      "Practice technical explanations and defense questions.",
    icon: GraduationCap,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor consistency, improvement, and speaking habits over time.",
    icon: TrendingUp,
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 px-6 py-24"
    >
      <div className="absolute left-20 top-20 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Features
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Practice with purpose.
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            SpeakUp provides structured tools designed for real situations where
            confident communication matters.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/70 bg-white/60 p-6 shadow-xl shadow-emerald-900/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                  <Icon
                    size={28}
                    className="text-emerald-700"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;