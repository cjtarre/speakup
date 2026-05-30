import { useState } from "react";
import {
  Sparkles,
  MessageSquareQuote,
  ChevronDown,
} from "lucide-react";

import { prompts } from "../data/prompts";
import Recorder from "../components/practice/Recorder";

function PracticePage() {
  const [category, setCategory] = useState("daily");
  const [currentPrompt, setCurrentPrompt] = useState("");

  function generatePrompt() {
    const categoryPrompts = prompts[category];

    const randomPrompt =
      categoryPrompts[
        Math.floor(Math.random() * categoryPrompts.length)
      ];

    setCurrentPrompt(randomPrompt);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-white/70 bg-white/60 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
              <MessageSquareQuote
                size={24}
                className="text-emerald-700"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Practice Session
              </p>

              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Build confidence through repetition.
              </h1>
            </div>
          </div>

          <p className="mt-4 text-slate-600">
            Choose a category and generate a speaking prompt.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Category
              </label>

              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-10 text-slate-700 shadow-sm outline-none transition focus:border-emerald-400"
                >
                  <option value="daily">Daily Journal</option>
                  <option value="interview">Mock Interview</option>
                  <option value="defense">Project Defense</option>
                  <option value="pageant">Pageant Q&A</option>
                  <option value="impromptu">Impromptu Speaking</option>
                </select>

                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
              </div>
            </div>

            <div className="flex items-end">
              <button
                onClick={generatePrompt}
                className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                <Sparkles size={18} />
                Generate Prompt
              </button>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-emerald-100 bg-white/70 p-6 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Generated Prompt
            </p>

            <p className="text-lg leading-8 text-slate-700">
              {currentPrompt ||
                "Select a category and generate a prompt to begin your practice session."}
            </p>
          </div>
        </div>

        <Recorder />
      </div>
    </div>
  );
}

export default PracticePage;