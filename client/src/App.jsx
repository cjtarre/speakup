import { Toaster, toast } from "sonner";
import "./App.css";

function App() {
  function handleTestToast() {
    toast.success("SpeakUp is ready.");
  }

  return (
    <>
      <Toaster position="top-right" richColors />

      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
        <h1 className="text-5xl font-bold text-slate-900">
          SpeakUp
        </h1>

        <p className="mt-4 max-w-xl text-center text-slate-600">
          Practice speaking with guided prompts, recordings, and feedback.
        </p>

        <button
          onClick={handleTestToast}
          className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white hover:bg-violet-700"
        >
          Test Toast
        </button>
      </div>
    </>
  );
}

export default App;