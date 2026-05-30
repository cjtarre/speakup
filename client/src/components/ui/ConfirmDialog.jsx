function ConfirmDialog({
  open,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-slate-900">
          {title}
        </h2>

        <p className="mt-3 text-slate-600">
          {message}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-xl border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-violet-600 px-4 py-2 text-white hover:bg-violet-700"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;