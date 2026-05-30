import { useEffect, useMemo, useRef, useState } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Shuffle,
  Highlighter,
  Gauge,
} from "lucide-react";

import { teleprompterScripts } from "../data/teleprompterScripts";

function Teleprompter() {
  const scrollRef = useRef(null);

  const [script, setScript] = useState("");
  const [scriptTitle, setScriptTitle] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [wordsPerMinute, setWordsPerMinute] = useState(130);
  const [highlightEnabled, setHighlightEnabled] = useState(true);
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  const words = useMemo(() => {
    return script.trim().split(/\s+/).filter(Boolean);
  }, [script]);

  function getWordDelay(word) {
    const baseDelay = 60000 / wordsPerMinute;

    if (/[.!?]$/.test(word)) return baseDelay * 2.2;
    if (/[,;:]$/.test(word)) return baseDelay * 1.5;

    return baseDelay;
  }

  useEffect(() => {
    if (!isPlaying || !scrollRef.current || words.length === 0) return;

    const currentWord = words[activeWordIndex] || "";
    const delay = getWordDelay(currentWord);

    const timeoutId = setTimeout(() => {
      scrollRef.current.scrollTop += wordsPerMinute / 70;

      if (highlightEnabled) {
        setActiveWordIndex((prev) => {
          if (prev >= words.length - 1) {
            setIsPlaying(false);
            return prev;
          }

          return prev + 1;
        });
      } else {
        scrollRef.current.scrollTop += wordsPerMinute / 40;
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [
    isPlaying,
    activeWordIndex,
    words,
    wordsPerMinute,
    highlightEnabled,
  ]);

  function resetTeleprompter() {
    setIsPlaying(false);
    setActiveWordIndex(0);

    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }

  function loadRandomScript() {
    const randomScript =
      teleprompterScripts[
        Math.floor(Math.random() * teleprompterScripts.length)
      ];

    setScript(randomScript.text);
    setScriptTitle(`${randomScript.title} • ${randomScript.category}`);
    resetTeleprompter();
  }

  function handleScriptChange(e) {
    setScript(e.target.value);
    setScriptTitle(e.target.value.trim() ? "Custom Script" : "");
    resetTeleprompter();
  }

  function renderHighlightedScript() {
    if (!script.trim()) {
      return "Your teleprompter text will appear here.";
    }

    if (!highlightEnabled) {
      return script;
    }

    let wordCounter = 0;
    const lines = script.split("\n");

    return lines.map((line, lineIndex) => {
      const lineParts = line.split(/(\s+)/);

      return (
        <span key={`line-${lineIndex}`}>
          {lineParts.map((part, partIndex) => {
            if (/^\s+$/.test(part) || part === "") {
              return part;
            }

            const currentIndex = wordCounter;
            wordCounter += 1;

            return (
              <span
                key={`${lineIndex}-${partIndex}-${part}`}
                className={
                  currentIndex === activeWordIndex
                    ? "rounded-lg bg-emerald-400 px-1.5 py-0.5 text-slate-950"
                    : "text-emerald-100"
                }
              >
                {part}
              </span>
            );
          })}

          {lineIndex < lines.length - 1 && <br />}
        </span>
      );
    });
  }

  return (
    <div className="rounded-3xl border border-white/70 bg-white/60 p-6 shadow-xl shadow-emerald-900/5 backdrop-blur-xl md:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Teleprompter Mode
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Practice with a guided script.
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Paste your own script or load a practice text. Adjust the pace, then
            follow the words while speaking aloud.
          </p>
        </div>

        <button
          onClick={loadRandomScript}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-white/70 px-5 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-white"
        >
          <Shuffle size={18} />
          Random Script
        </button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div>
            <label className="mb-2 block font-semibold text-slate-800">
              Script
            </label>

            <textarea
              value={script}
              onChange={handleScriptChange}
              placeholder="Paste or write your practice script here..."
              className="min-h-56 w-full rounded-3xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm outline-none transition focus:border-emerald-400"
            />
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5">
            <div className="flex items-center gap-2 text-slate-800">
              <Gauge size={18} className="text-emerald-700" />
              <p className="font-semibold">Reading Pace</p>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Current pace: {wordsPerMinute} WPM
            </p>

            <input
              type="range"
              min="80"
              max="190"
              step="10"
              value={wordsPerMinute}
              onChange={(e) => setWordsPerMinute(Number(e.target.value))}
              className="mt-4 w-full accent-emerald-600"
            />

            <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
              {[100, 130, 160].map((wpm) => (
                <button
                  key={wpm}
                  onClick={() => setWordsPerMinute(wpm)}
                  className={`rounded-xl px-3 py-2 font-semibold transition ${
                    wordsPerMinute === wpm
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-slate-600 hover:bg-emerald-100"
                  }`}
                >
                  {wpm === 100 ? "Calm" : wpm === 130 ? "Natural" : "Energetic"}
                </button>
              ))}
            </div>

            <p className="mt-3 text-sm text-slate-500">
              The teleprompter now adds short pauses after commas and longer
              pauses after full stops.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-emerald-100 bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-slate-800">
                Karaoke Highlight
              </p>
              <p className="text-sm text-slate-500">
                Highlights each word as you practice.
              </p>
            </div>

            <button
              onClick={() => {
                setHighlightEnabled((prev) => !prev);
                setActiveWordIndex(0);
              }}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                highlightEnabled
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              <Highlighter size={16} />
              {highlightEnabled ? "On" : "Off"}
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
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
        </div>

        <div
          ref={scrollRef}
          className="h-[520px] overflow-y-auto rounded-3xl border border-emerald-100 bg-slate-950 p-6 text-center shadow-inner md:p-10"
        >
          {scriptTitle && (
            <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-emerald-400">
              {scriptTitle}
            </p>
          )}

          <p className="whitespace-pre-wrap text-2xl font-semibold leading-relaxed text-emerald-100 md:text-4xl md:leading-relaxed">
            {renderHighlightedScript()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Teleprompter;