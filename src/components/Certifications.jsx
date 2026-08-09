import Reveal from "./Reveal.jsx";

const CERTS = [
  {
    icon: "MC",
    title: "Cybersecurity Job Simulation",
    org: "Mastercard, via Forage",
    date: "Issued Aug 2026",
  },
  {
    icon: "M1",
    title: "AI Interview — Outstanding Performance",
    org: "Certified by micro1",
    date: "Issued May 2026",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="page-section page-section-tight">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Certifications</div>
            <h2 className="section-heading">Recognised skills and simulations.</h2>
          </div>
        </Reveal>

        <div className="cert-grid">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className="cert-card">
              <div className="cert-icon">{c.icon}</div>
              <div>
                <h4>{c.title}</h4>
                <div className="cert-meta">{c.org}</div>
                <div className="cert-meta">{c.date}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
