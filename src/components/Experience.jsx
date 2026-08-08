import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Experience</div>
            <h2 className="section-heading">Where I've worked and studied.</h2>
          </div>
          <p className="section-sub" style={{ marginTop: 0 }}>
            Two years in the field so far — securing infrastructure by day,
            studying computer science and shipping side projects the rest of
            the time.
          </p>
        </Reveal>

        <div className="timeline">
          <Reveal as="div" className="timeline-item">
            <div className="timeline-top">
              <div>
                <div className="timeline-role">Junior Cyber Security Specialist</div>
                <div className="timeline-org">InteliATE · Bhaktapur · On-site</div>
              </div>
              <div className="timeline-date">Mar 2024 — Present · 2 yrs 6 mos</div>
            </div>
            <p className="timeline-desc">
              I help secure systems and networks by identifying vulnerabilities,
              monitoring threats, and supporting incident response. I also assist
              in implementing preventive measures and improving overall cyber
              defense strategies, build custom AI models, and work across the
              CI/CD pipeline fixing bugs.
            </p>
            <div className="tag-row">
              <span className="tag">Vulnerability Management</span>
              <span className="tag">Threat Monitoring</span>
              <span className="tag">Incident Response</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Custom AI Models</span>
            </div>
          </Reveal>

          <Reveal as="div" className="timeline-item education" delay={100}>
            <div className="timeline-top">
              <div>
                <div className="timeline-role">B.Sc. CSIT</div>
                <div className="timeline-org">Bhaktapur Multiple Campus</div>
              </div>
              <div className="timeline-date">2024 — 2028</div>
            </div>
            <p className="timeline-desc">
              Studying Computer Science &amp; Information Technology, with a
              focus on security, software engineering, and applied AI —
              alongside hands-on work as a security specialist.
            </p>
            <div className="tag-row">
              <span className="tag amber">Computer Science</span>
              <span className="tag amber">Information Technology</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
