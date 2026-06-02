import { useEffect, useRef, useState } from "react";
import { Mic, Square, RotateCcw, PlayCircle } from "lucide-react";

function Recorder({ onRecordingComplete }) {
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState("Ready to record");

  useEffect(() => {
    let intervalId;

    if (isRecording) {
      intervalId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRecording]);

  function formatTime(totalSeconds) {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");

    return `${minutes}:${secs}`;
  }

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });

        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setStatus("Recording complete");

        if (onRecordingComplete) {
          onRecordingComplete({
            durationSeconds: seconds,
            audioUrl: url,
          });
        }

        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setSeconds(0);
      setAudioUrl("");
      setStatus("Recording...");
      setIsRecording(true);
    } catch (error) {
      setStatus("Microphone access was denied or unavailable.");
      console.error(error);
    }
  }

  function stopRecording() {
    if (!mediaRecorderRef.current) return;

    mediaRecorderRef.current.stop();
    setIsRecording(false);
  }

  return (
    <div className="mt-8 rounded-3xl border border-white/70 bg-white/60 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Voice Recorder
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Record your answer.
          </h2>

          <p className="mt-2 max-w-xl text-slate-600">
            Speak clearly after reading the prompt. You can play back your
            response after recording.
          </p>
        </div>

        <div className="rounded-3xl border border-emerald-100 bg-white/70 px-7 py-5 text-center shadow-sm">
          <p className="text-sm text-slate-500">Timer</p>
          <p className="mt-1 text-4xl font-bold text-emerald-700">
            {formatTime(seconds)}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-50 px-4 py-3">
        <span
          className={`h-3 w-3 rounded-full ${
            isRecording
              ? "bg-red-500"
              : audioUrl
                ? "bg-emerald-500"
                : "bg-slate-300"
          }`}
        />

        <p className="font-medium text-slate-700">{status}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
          >
            <Mic size={18} />
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
          >
            <Square size={18} />
            Stop Recording
          </button>
        )}

        {audioUrl && !isRecording && (
          <button
            onClick={startRecording}
            className="inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-white/70 px-5 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-white"
          >
            <RotateCcw size={18} />
            Record Again
          </button>
        )}
      </div>

      {audioUrl && (
        <div className="mt-6 rounded-3xl border border-emerald-100 bg-white/70 p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2 font-semibold text-slate-900">
            <PlayCircle size={20} className="text-emerald-700" />
            Playback
          </div>

          <audio controls src={audioUrl} className="w-full" />
        </div>
      )}
    </div>
  );
}

export default Recorder;