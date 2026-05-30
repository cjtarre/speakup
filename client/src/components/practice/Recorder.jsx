import { useRef, useState } from "react";

function Recorder() {
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  async function startRecording() {
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
    };

    mediaRecorder.start();
    setIsRecording(true);
  }

  function stopRecording() {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  }

  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-semibold text-slate-900">
        Recorder
      </h2>

      <p className="mt-2 text-slate-600">
        Record your answer after reading the prompt.
      </p>

      <div className="mt-6 flex gap-3">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700"
          >
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="rounded-xl bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700"
          >
            Stop Recording
          </button>
        )}
      </div>

      {audioUrl && (
        <div className="mt-6">
          <p className="mb-2 font-medium text-slate-900">
            Playback
          </p>
          <audio controls src={audioUrl} className="w-full" />
        </div>
      )}
    </div>
  );
}

export default Recorder;