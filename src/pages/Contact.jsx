import { Mail } from "lucide-react";
import ExhibitHeader from "../components/ExhibitHeader.jsx";
import Section from "../components/Reveal.jsx";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons.jsx";
import { PROFILE } from "../data/profile.js";

export default function Contact() {
  return (
    <Section>
      <ExhibitHeader index="E" title="Contact Protocol" icon={Mail} />
      <div
        className="rounded-md border p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 justify-between"
        style={{ borderColor: "var(--line)", backgroundColor: "var(--panel)" }}
      >
        <div className="space-y-2.5">
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2.5 text-sm no-underline">
            <Mail size={15} /> {PROFILE.email}
          </a>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-sm no-underline"
          >
            <GithubIcon size={15} /> {PROFILE.github}
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-sm no-underline"
          >
            <LinkedinIcon size={15} /> LinkedIn
          </a>
        </div>
        <div className="font-mono text-[10px] tracking-wider text-right" style={{ color: "var(--ink-soft)" }}>
          STATUS: OPEN TO
          <br />
          OPPORTUNITIES
        </div>
      </div>
    </Section>
  );
}
