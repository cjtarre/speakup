function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
}) {
  const styles = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700",
    secondary:
      "border border-slate-300 text-slate-700 hover:bg-slate-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-xl px-5 py-3 font-medium transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;