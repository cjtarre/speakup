import { useState } from "react";
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
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900">
          Practice Session
        </h1>

        <p className="mt-3 text-slate-600">
          Choose a category and generate a speaking prompt.
        </p>

        <div className="mt-8">
          <label className="mb-2 block font-medium">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3"
          >
            <option value="daily">Daily Journal</option>
            <option value="interview">Mock Interview</option>
            <option value="defense">Project Defense</option>
            <option value="pageant">Pageant Q&A</option>
            <option value="impromptu">Impromptu Speaking</option>
          </select>
        </div>

        <button
          onClick={generatePrompt}
          className="mt-6 rounded-xl bg-violet-600 px-5 py-3 text-white"
        >
          Generate Prompt
        </button>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          {currentPrompt || "Your prompt will appear here."}
        </div>
      </div>

      <Recorder />
    </div>
  );
}

export default PracticePage;