import Reveal from "./Reveal.jsx";

const SKILLS = [
  {
    tag: "Security",
    title: "Cyber Defense",
    items: ["Vulnerability assessment", "Threat monitoring", "Incident response"],
  },
  {
    tag: "Engineering",
    title: "Development",
    items: ["React & TypeScript", "Python & Flask", "CI/CD pipelines"],
  },
  {
    tag: "Applied AI",
    title: "AI / ML",
    items: ["Custom AI models", "Data analysis", "Automation tooling"],
  },
  {
    tag: "Craft",
    title: "Core Skills",
    items: ["Analytical thinking", "Communication", "Problem solving"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Skills</div>
            <h2 className="section-heading">What I bring to a team.</h2>
          </div>
        </Reveal>

        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="skill-card">
              <div className="icon">{s.tag}</div>
              <h4>{s.title}</h4>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
