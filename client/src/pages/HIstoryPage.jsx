import { useState } from "react";
import { Trash2 } from "lucide-react";

import { getSessions, deleteSession, clearSessions, } from "../utils/sessionStorage";

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${secs}`;
}

function HistoryPage() {
  const [sessions, setSessions] = useState(() => getSessions());

  function handleDelete(sessionId) {deleteSession(sessionId);setSessions(getSessions());}
  function handleClearAll() {clearSessions(); setSessions([]);}

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
                Track your prompts, categories, and practice duration.
              </p>
            </div>

            {sessions.length > 0 && (
              <button onClick={handleClearAll}
                className="rounded-2xl border border-red-200 bg-white/70 px-4 py-2 font-semibold text-red-600 transition hover:bg-red-50"
              >Clear All</button>
            )}
          </div>

          <div className="mt-8 space-y-4">
            {sessions.length === 0 ? (
              <div className="rounded-3xl border border-emerald-100 bg-white/70 p-8 text-center">
                <h2 className="text-xl font-semibold text-slate-900">
                  No sessions yet.
                </h2>

                <p className="mt-2 text-slate-600">
                  Complete a practice recording to see it here.
                </p>
              </div>
            ) : (
              sessions.map((session) => (
                <div
                  key={session.id}
                  className="rounded-3xl border border-emerald-100 bg-white/70 p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                        {session.category}
                      </p>

                      <h2 className="mt-2 text-xl font-bold text-slate-900">
                        {session.prompt}
                      </h2>

                      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                        <span>
                          {new Date(session.createdAt).toLocaleString()}
                        </span>

                        <span>
                          Duration: {formatDuration(session.durationSeconds)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDelete(session.id)}
                      className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                    ><Trash2 size={16} />
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