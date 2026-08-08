import { FolderGit2, ExternalLink } from "lucide-react";
import ExhibitHeader from "../components/ExhibitHeader.jsx";
import Section from "../components/Reveal.jsx";
import { PROJECTS } from "../data/profile.js";

export default function Projects() {
  return (
    <Section>
      <ExhibitHeader index="D" title="Artifacts Recovered" icon={FolderGit2} />
      <div className="grid sm:grid-cols-2 gap-4">
        {PROJECTS.map((p) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card rounded-md border p-5 flex flex-col justify-between no-underline"
            style={{ borderColor: "var(--line)", backgroundColor: "var(--panel)", color: "var(--ink)" }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px]" style={{ color: "var(--ink-soft)" }}>
                  FILE {p.id}
                </span>
                <ExternalLink size={13} style={{ color: "var(--ink-soft)" }} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1.5">{p.name}</h3>
              <p className="font-mono text-[11px] mb-3" style={{ color: "var(--signal)" }}>
                {p.stack}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {p.detail}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
