import Reveal from "./Reveal.jsx";
import { CONTACT } from "../siteConfig.js";

const ROWS = [
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: "GitHub", value: "github.com/Shr6", href: CONTACT.github },
  { label: "LinkedIn", value: "Shrijan Pokharel", href: CONTACT.linkedin },
  { label: "Based in", value: CONTACT.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="contact-inner">
          <Reveal>
            <div className="eyebrow">Contact</div>
            <h2>
              Let's build something <span className="accent">secure</span> together.
            </h2>
            <p className="contact-copy">
              Open to internships, freelance work and collaborations around
              cybersecurity, AI tooling, and full-stack development. Reach out
              — I usually reply within a day or two.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${CONTACT.email}`}>
                Email me →
              </a>
              <a
                className="btn btn-ghost"
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="contact-card">
              {ROWS.map((r) => {
                const Comp = r.href ? "a" : "div";
                return (
                  <Comp
                    key={r.label}
                    className="contact-row"
                    href={r.href || undefined}
                    target={r.href && r.href.startsWith("http") ? "_blank" : undefined}
                    rel={r.href && r.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <div>
                      <div className="label">{r.label}</div>
                      <div className="value">{r.value}</div>
                    </div>
                    {r.href && <span className="arrow">→</span>}
                  </Comp>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
