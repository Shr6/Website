import Reveal from "./Reveal.jsx";

const PROJECTS = [
  {
    index: "01",
    name: "Loksewa Buddy Prep",
    desc:
      "An exam-prep platform built for students studying for Nepal's Loksewa civil service exams. Structured as a modern, component-driven single-page app so study material, question sets and progress feel fast and app-like rather than a static study site, and shipped straight to the edge on Cloudflare via Wrangler for quick global load times.",
    tags: ["React", "TypeScript", "Vite", "Cloudflare"],
    link: "https://github.com/Shr6/loksewa-buddy-prep",
  },
  {
    index: "02",
    name: "IoT Flood Detection System",
    desc:
      "A hackathon-built disaster-preparedness tool that pairs an Arduino sensor rig with a Flask backend to monitor water levels in real time. A live Tailwind CSS dashboard visualizes the incoming readings, while historical logging and CSV export let responders review trends and generate reports after the fact.",
    tags: ["Arduino", "Flask", "Tailwind CSS", "Chart.js"],
    link: "https://github.com/Shr6/hackathon",
  },
  {
    index: "03",
    name: "AI Traffic Signal Simulator",
    desc:
      "A multi-lane traffic junction simulation with an adaptive AI controller at its core: it scores each approach by queue length and wait time to decide when to switch signal phases, rather than relying on a fixed timer, and includes a live HUD showing the agent's perception and decisions as it reduces congestion in real time.",
    tags: ["Python", "Pygame", "Simulation"],
    link: "https://github.com/Shr6/AI-traffic-signal",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="page-section">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Projects</div>
            <h2 className="section-heading">Things I've built and shipped.</h2>
          </div>
          <p className="section-sub" style={{ marginTop: 0 }}>
            A mix of security-minded infrastructure, applied AI and full-stack
            products, mostly born out of hackathons and self-directed builds.
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
