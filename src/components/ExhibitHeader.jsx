import { useReveal } from "./Reveal.jsx";

export default function ExhibitHeader({ index, title, icon: Icon }) {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} flex items-center gap-3 mb-8`}>
      <div
        className="w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0"
        style={{ borderColor: "var(--ink)" }}
      >
        <Icon size={16} strokeWidth={2} />
      </div>
      <div>
        <p className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
          EXHIBIT {index}
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">{title}</h2>
      </div>
      <div className="flex-1 h-px ml-2" style={{ backgroundColor: "var(--line)" }} />
    </div>
  );
}
