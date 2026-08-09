import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="page-section about">
      <div className="wrap">
        <Reveal className="about-copy">
          <div className="eyebrow">About</div>
          <h2 className="section-heading">
            A builder who thinks like an attacker, and ships like an engineer.
          </h2>
          <p>
            I'm a Computer Science &amp; Information Technology student at{" "}
            <strong>Bhaktapur Multiple Campus</strong> (2024–2028), and a{" "}
            <strong>Junior Cyber Security Specialist at InteliATE</strong>, where I help
            secure systems and networks by identifying vulnerabilities, monitoring
            threats and supporting incident response.
          </p>
          <p>
            Day to day, that means everything from hardening infrastructure and
            tightening CI/CD pipelines to fixing bugs and improving overall cyber
            defense strategy. I also build custom AI models, and outside of work I
            spend my time exploring Web3 and shipping small full-stack projects —
            from IoT flood-monitoring dashboards to AI traffic simulators.
          </p>
        </Reveal>

        <Reveal delay={120} className="fact-grid-wrap">
          <div className="fact-grid">
            <div className="fact">

              <div className="label">Location</div>
              <div className="value">Bhaktapur, Nepal</div>
            </div>
            <div className="fact">
              <div className="label">Focus</div>
              <div className="value">Cybersecurity &amp; AI</div>
            </div>
            <div className="fact">
              <div className="label">Currently</div>
              <div className="value">Jr. Security Specialist</div>
            </div>
            <div className="fact">
              <div className="label">Studying</div>
              <div className="value">CSIT (2024–2028)</div>
            </div>
            <div className="fact">
              <div className="label">Stack</div>
              <div className="value mono">React · Python · Flask</div>
            </div>
            <div className="fact">
              <div className="label">Interest</div>
              <div className="value mono">Web3 / decentralised</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
