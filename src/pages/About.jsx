import { FingerprintPattern, Terminal, Briefcase, GraduationCap } from "lucide-react";
import ExhibitHeader from "../components/ExhibitHeader.jsx";
import Section from "../components/Reveal.jsx";
import { PROFILE, SKILLS, SERVICE_RECORD } from "../data/profile.js";

const ICONS = { Briefcase, GraduationCap };

export default function About() {
  return (
    <div className="space-y-20">
      {/* Profile */}
      <Section>
        <ExhibitHeader index="A" title="Profile" icon={FingerprintPattern} />
        <div
          className="rounded-md border p-6 sm:p-8"
          style={{ borderColor: "var(--line)", backgroundColor: "var(--panel)" }}
        >
          <p className="leading-relaxed text-[15px]">
            {PROFILE.name} works at the intersection of security and software — spending part of the week
            thinking like a defender at {PROFILE.org}, and the rest building full-stack applications from the
            ground up. Formal training as a {PROFILE.study} feeds directly into both sides of that work.
          </p>
          <p className="leading-relaxed text-[15px] mt-4 flex items-center gap-2 flex-wrap" style={{ color: "var(--ink-soft)" }}>
            Background <span className="redact w-16" /> available on request <span className="redact w-10" />.
          </p>
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <ExhibitHeader index="B" title="Capabilities" icon={Terminal} />
        <div className="space-y-6">
          {SKILLS.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[11px] tracking-[0.15em] mb-2.5" style={{ color: "var(--ink-soft)" }}>
                {group.label.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="tag-pill font-mono text-xs px-3 py-1.5 rounded-full border cursor-default"
                    style={{ borderColor: "var(--ink)", backgroundColor: "var(--panel)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Service Record */}
      <Section>
        <ExhibitHeader index="C" title="Service Record" icon={Briefcase} />
        <div className="space-y-4">
          {SERVICE_RECORD.map((entry) => {
            const Icon = ICONS[entry.icon];
            return (
              <div
                key={entry.title}
                className="rounded-md border p-5 flex gap-4"
                style={{ borderColor: "var(--line)", backgroundColor: "var(--panel)" }}
              >
                <div
                  className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0"
                  style={{ borderColor: "var(--ink)" }}
                >
                  <Icon size={14} />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded"
                      style={{ backgroundColor: "var(--signal)", color: "#FDFDFC" }}
                    >
                      {entry.tag}
                    </span>
                    <h3 className="font-display font-semibold text-lg">{entry.title}</h3>
                  </div>
                  <p className="font-mono text-xs mt-1 mb-2" style={{ color: "var(--ink-soft)" }}>
                    {entry.org}
                  </p>
                  <p className="text-sm leading-relaxed">{entry.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
