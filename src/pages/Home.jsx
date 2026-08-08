import { ShieldCheck, MapPin } from "lucide-react";
import { PROFILE } from "../data/profile.js";

export default function Home() {
  return (
    <header className="relative">
      <div className="flex items-start justify-between gap-6 flex-wrap sm:flex-nowrap">
        <div className="flex items-start gap-5 sm:gap-6 order-2 sm:order-1">
          <div className="id-photo-frame relative w-24 h-28 sm:w-28 sm:h-32 shrink-0 bg-white p-1.5">
            <span className="tape -top-2 -left-2 rotate-[-25deg]" />
            <span className="tape -bottom-2 -right-2 rotate-[-25deg]" />
            <img
              src="/profile.jpeg"
              alt={`${PROFILE.name} — ID photo`}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] mb-3" style={{ color: "var(--ink-soft)" }}>
              SECURITY CLEARANCE // CASE FILE
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-[0.95] mb-4">
              {PROFILE.name}
            </h1>
            <p className="font-mono text-sm sm:text-base" style={{ color: "var(--ink-soft)" }}>
              {PROFILE.role} <span className="mx-1">·</span> {PROFILE.org}
            </p>
            <p className="font-mono text-sm mt-1" style={{ color: "var(--ink-soft)" }}>
              {PROFILE.study}
            </p>
            <div className="flex items-center gap-1.5 mt-4 font-mono text-xs" style={{ color: "var(--ink-soft)" }}>
              <MapPin size={13} />
              {PROFILE.location}
            </div>
          </div>
        </div>

        <div className="stamp-mark order-1 sm:order-2 w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex flex-col items-center justify-center text-center font-mono ml-auto">
          <ShieldCheck size={22} strokeWidth={2} className="mb-1" />
          <span className="text-[10px] font-bold tracking-wider leading-none">VERIFIED</span>
          <span className="text-[8px] mt-1 opacity-80">FILE ACTIVE</span>
        </div>
      </div>

      <div
        className="mt-10 rounded-md border p-4 font-mono text-xs sm:text-sm"
        style={{ borderColor: "var(--line)", backgroundColor: "var(--panel)" }}
      >
        <span style={{ color: "var(--signal)" }}>$</span> whoami
        <br />
        <span style={{ color: "var(--ink-soft)" }}>
          → {PROFILE.name.toLowerCase()} — analyst by role, builder by habit. currently securing systems and
          shipping code.
        </span>
      </div>
    </header>
  );
}
