import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

function Teleprompter() {
  const scrollRef = useRef(null);

  const [script, setScript] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    let intervalId;

    if (isPlaying && scrollRef.current) {
      intervalId = setInterval(() => {
        scrollRef.current.scrollTop += speed;
      }, 50);
    }

    return () => clearInterval(intervalId);
  }, [isPlaying, speed]);

  function resetTeleprompter() {
    setIsPlaying(false);

    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }

  return (
    <div className="mt-8 rounded-3xl border border-white/70 bg-white/60 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur-xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
        Teleprompter Mode
      </p>

      <h2 className="mt-2 text-2xl font-bold text-slate-900">
        Practice with a script.
      </h2>

      <p className="mt-2 text-slate-600">
        Paste a script and follow the scrolling text while you speak.
      </p>

      <textarea
        value={script}
        onChange={(e) => setScript(e.target.value)}
        placeholder="Paste or write your practice script here..."
        className="mt-6 min-h-36 w-full rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm outline-none transition focus:border-emerald-400"
      />

      <div className="mt-6">
        <label className="mb-2 block font-medium text-slate-700">
          Reading Speed: {speed}
        </label>

        <input
          type="range"
          min="1"
          max="6"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          disabled={!script.trim()}
          className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          {isPlaying ? "Pause" : "Start"}
        </button>

        <button
          onClick={resetTeleprompter}
          className="inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-white/70 px-5 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-white"
        >
          <RotateCcw size={18} />
          Reset
        </button>
      </div>

      <div
        ref={scrollRef}
        className="mt-8 h-80 overflow-y-auto rounded-3xl border border-emerald-100 bg-slate-950 p-8 text-center shadow-inner"
      >
        <p className="whitespace-pre-wrap text-3xl font-semibold leading-relaxed text-emerald-100">
          {script || "Your teleprompter text will appear here."}
        </p>
      </div>
    </div>
  );
}

export default Teleprompter;