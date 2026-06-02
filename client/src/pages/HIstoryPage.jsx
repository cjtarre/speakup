import { useState } from "react";
import { Trash2, Search } from "lucide-react";

import {
  getSessions,
  deleteSession,
  clearSessions,
} from "../utils/sessionStorage";

function formatDuration(seconds = 0) {
  const minutes = Math.floor(seconds / 60);
  const secs = String(seconds % 60).padStart(2, "0");

  return `${minutes}:${secs}`;
}

function formatCategory(category) {
  if (category === "daily") return "Daily Journal";
  if (category === "interview") return "Interview";
  if (category === "defense") return "Project Defense";
  if (category === "pageant") return "Pageant Q&A";
  if (category === "impromptu") return "Impromptu Speaking";
  if (category === "teleprompter") return "Teleprompter";

  return category || "None";
}

function getTotalPracticeTime(sessions) {
  return sessions.reduce(
    (total, session) => total + (session.durationSeconds || 0),
    0
  );
}

function getLongestSession(sessions) {
  if (sessions.length === 0) return 0;

  return Math.max(
    ...sessions.map((session) => session.durationSeconds || 0)
  );
}

function getFavoriteCategory(sessions) {
  if (sessions.length === 0) return "None";

  const counts = {};

  sessions.forEach((session) => {
    counts[session.category] = (counts[session.category] || 0) + 1;
  });

  return Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );
}

function HistoryPage() {
  const [sessions, setSessions] = useState(() => getSessions());
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const totalPracticeTime = getTotalPracticeTime(sessions);
  const longestSession = getLongestSession(sessions);
  const favoriteCategory = getFavoriteCategory(sessions);

  const filteredSessions = sessions.filter((session) => {
    const matchesCategory =
      selectedCategory === "all" || session.category === selectedCategory;

    const searchableText = `${session.prompt || ""} ${
      session.scriptText || ""
    }`;

    const matchesSearch = searchableText
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  function handleDelete(sessionId) {
    deleteSession(sessionId);
    setSessions(getSessions());
  }

  function handleClearAll() {
    clearSessions();
    setSessions([]);
    setSelectedCategory("all");
    setSearchTerm("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-white/70 bg-white/60 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Session History
              </p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Review your practice sessions.
              </h1>

              <p className="mt-3 text-slate-600">
                Track your prompts, scripts, categories, and practice duration.
              </p>
            </div>

            {sessions.length > 0 && (
              <button
                onClick={handleClearAll}
                className="rounded-2xl border border-red-200 bg-white/70 px-4 py-2 font-semibold text-red-600 transition hover:bg-red-50"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-emerald-100 bg-white/70 p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                Total Sessions
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {sessions.length}
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white/70 p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                Practice Time
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {formatDuration(totalPracticeTime)}
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white/70 p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                Longest Recording
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {formatDuration(longestSession)}
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white/70 p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                Favorite Category
              </p>
              <p className="mt-2 text-2xl font-bold capitalize text-slate-900">
                {formatCategory(favoriteCategory)}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto]">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search prompts or scripts..."
                className="w-full rounded-2xl border border-emerald-100 bg-white/70 px-11 py-3 text-slate-700 outline-none transition focus:border-emerald-400"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-2xl border border-emerald-100 bg-white/70 px-4 py-3 text-slate-700 outline-none transition focus:border-emerald-400"
            >
              <option value="all">All Categories</option>
              <option value="daily">Daily Journal</option>
              <option value="interview">Interview</option>
              <option value="defense">Project Defense</option>
              <option value="pageant">Pageant Q&A</option>
              <option value="impromptu">Impromptu Speaking</option>
              <option value="teleprompter">Teleprompter</option>
            </select>
          </div>

          <div className="mt-8 space-y-4">
            {sessions.length === 0 ? (
              <div className="rounded-3xl border border-emerald-100 bg-white/70 p-8 text-center">
                <h2 className="text-xl font-semibold text-slate-900">
                  No sessions yet.
                </h2>

                <p className="mt-2 text-slate-600">
                  Complete a practice recording or save a teleprompter session
                  to see it here.
                </p>
              </div>
            ) : filteredSessions.length === 0 ? (
              <div className="rounded-3xl border border-emerald-100 bg-white/70 p-8 text-center">
                <h2 className="text-xl font-semibold text-slate-900">
                  No matching sessions.
                </h2>

                <p className="mt-2 text-slate-600">
                  Try changing your search term or category filter.
                </p>
              </div>
            ) : (
              filteredSessions.map((session) => (
                <div
                  key={session.id}
                  className="rounded-3xl border border-emerald-100 bg-white/70 p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            session.type === "teleprompter"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {session.type === "teleprompter"
                            ? "Teleprompter"
                            : "Practice Session"}
                        </span>
                      </div>

                      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                        {formatCategory(session.category)}
                      </p>

                      <h2 className="mt-2 text-xl font-bold text-slate-900">
                        {session.prompt}
                      </h2>

                      {session.type === "teleprompter" &&
                        session.scriptText && (
                          <p className="mt-3 line-clamp-3 text-slate-600">
                            {session.scriptText}
                          </p>
                        )}

                      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                        <span>
                          {new Date(session.createdAt).toLocaleString()}
                        </span>

                        {session.type === "teleprompter" ? (
                          <span>
                            Pace: {session.wordsPerMinute} WPM
                          </span>
                        ) : (
                          <span>
                            Duration:{" "}
                            {formatDuration(session.durationSeconds)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDelete(session.id)}
                      className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;