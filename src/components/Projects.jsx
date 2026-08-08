import Reveal from "./Reveal.jsx";

const PROJECTS = [
  {
    index: "01",
    name: "Loksewa Buddy Prep",
    desc:
      "An exam-prep platform for Nepal's Loksewa civil service exams — built as a modern single-page app with a component-driven UI, deployed on Cloudflare via Wrangler.",
    tags: ["React", "TypeScript", "Vite", "Cloudflare"],
    link: "https://github.com/Shr6/loksewa-buddy-prep",
  },
  {
    index: "02",
    name: "IoT Flood Detection System",
    desc:
      "An Arduino-powered flood monitoring system with a Flask backend, live Tailwind CSS dashboard, historical data logging and CSV export for disaster-preparedness reporting.",
    tags: ["Arduino", "Flask", "Tailwind CSS", "Chart.js"],
    link: "https://github.com/Shr6/hackathon",
  },
  {
    index: "03",
    name: "AI Traffic Signal Simulator",
    desc:
      "A multi-lane traffic junction simulator where an adaptive AI controller scores each direction by queue length and wait time to switch signal phases and cut congestion.",
    tags: ["Python", "Pygame", "Simulation"],
    link: "https://github.com/Shr6/AI-traffic-signal",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Projects</div>
            <h2 className="section-heading">Things I've built and shipped.</h2>
          </div>
          <p className="section-sub" style={{ marginTop: 0 }}>
            A mix of security-minded infrastructure, applied AI and full-stack
            products — mostly born out of hackathons and self-directed builds.
          </p>
        </Reveal>

        <div className="project-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="project-card">
              <div className="project-index">{p.index}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="tag-row" style={{ marginBottom: 18 }}>
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.link} target="_blank" rel="noreferrer">
                  Source ↗
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
