import { useEffect, useRef, useState } from "react";
import { RouterLink } from "../router.jsx";
import profilePhoto from "../assets/profile.jpg";

const COMMANDS = [
  {
    cmd: "whoami --verbose",
    lines: [
      { k: "name", v: "Shrijan Pokharel" },
      { k: "role", v: "Jr. Cyber Security Specialist @ InteliATE" },
      { k: "study", v: "CSIT, Bhaktapur Multiple Campus" },
      { k: "based", v: "Bhaktapur, Bagmati, Nepal" },
    ],
  },
  {
    cmd: "cat interests.txt",
    lines: [
      { k: "$", v: "Application & network security" },
      { k: "$", v: "AI / ML tooling and automation" },
      { k: "$", v: "Web3 & decentralised systems" },
      { k: "$", v: "Full-stack web development" },
    ],
  },
];

// Runs the typewriter sequence through COMMANDS ONCE on mount, then stops
// (only the cursor keeps a gentle blink). A finite animation reads as more
// deliberate than an endless loop, and avoids indefinitely re-rendering a
// component that's sitting in the hero above the fold.
export default function Hero() {
  const [resolvedLines, setResolvedLines] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [done, setDone] = useState(false);
  const reduceMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduceMotion.current) {
      // Skip the animation entirely — show everything immediately.
      setResolvedLines(COMMANDS);
      setDone(true);
      return;
    }

    let cancelled = false;
    const timers = [];

    async function runSequence() {
      for (let idx = 0; idx < COMMANDS.length; idx++) {
        const command = COMMANDS[idx];
        setTyped("");
        setShowOutput(false);

        // Type out the command character by character.
        await new Promise((resolve) => {
          let i = 0;
          const typeTimer = setInterval(() => {
            if (cancelled) {
              clearInterval(typeTimer);
              return resolve();
            }
            i += 1;
            setTyped(command.cmd.slice(0, i));
            if (i >= command.cmd.length) {
              clearInterval(typeTimer);
              resolve();
            }
          }, 38);
          timers.push(typeTimer);
        });

        if (cancelled) return;

        // Brief pause, then reveal this command's output.
        await new Promise((resolve) => {
          const t = setTimeout(resolve, 200);
          timers.push(t);
        });
        if (cancelled) return;
        setShowOutput(true);

        // Hold on the completed output before moving to the next command.
        await new Promise((resolve) => {
          const t = setTimeout(resolve, 900);
          timers.push(t);
        });
        if (cancelled) return;

        setResolvedLines((prev) => [...prev, command]);
        setStepIndex(idx + 1);
      }
      if (!cancelled) setDone(true);
    }

    runSequence();

    return () => {
      cancelled = true;
      timers.forEach((t) => {
        clearInterval(t);
        clearTimeout(t);
      });
    };
    // Runs once on mount — COMMANDS is a module-level constant.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = !done ? COMMANDS[stepIndex] : null;

  return (
    <section id="top" className="hero">
      <div className="grid-field" aria-hidden="true" />
      <div className="wrap">
        <div>
          <div className="profile-chip">
            <img
              src={profilePhoto}
              alt="Shrijan Pokharel"
              className="avatar"
              width="64"
              height="64"
            />
            <div>
              <div className="profile-name">Shrijan Pokharel</div>
              <div className="profile-role">Cybersecurity Specialist &amp; Programmer</div>
            </div>
          </div>

          <div className="hero-kicker">
            <span className="pulse" aria-hidden="true" />
            AVAILABLE FOR INTERNSHIPS &amp; FREELANCE WORK
          </div>

          <h1>
            Securing systems.
            <br />
            Building <span>the web.</span>
          </h1>

          <p className="hero-role">
            I'm <span className="accent">Shrijan Pokharel</span> — a CSIT student, programmer
            and Web3 enthusiast from Bhaktapur, Nepal. I work at the intersection of
            cybersecurity, AI and full-stack development, currently defending systems
            as a Junior Cyber Security Specialist at InteliATE.
          </p>

          <div className="hero-actions">
            <RouterLink className="btn btn-primary" to="/projects">
              View projects →
            </RouterLink>
            <RouterLink className="btn btn-ghost" to="/contact">
              Get in touch
            </RouterLink>
          </div>

          <div className="hero-meta">
            <div>
              <div className="num">2+ yrs</div>
              <div className="label">Cybersecurity experience</div>
            </div>
            <div>
              <div className="num">3</div>
              <div className="label">Shipped projects</div>
            </div>
            <div>
              <div className="num">2026</div>
              <div className="label">Latest certification</div>
            </div>
          </div>
        </div>

        <div className="terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span style={{ background: "#e2665a" }} />
            <span style={{ background: "#f2a65a" }} />
            <span style={{ background: "#35c7b3" }} />
            <span className="title">shrijan@bhaktapur:~</span>
          </div>
          <div className="terminal-body">
            {resolvedLines.map((c, idx) => (
              <div key={idx}>
                <div className="terminal-line">
                  <span className="prompt">➜</span>
                  <span className="cmd">{c.cmd}</span>
                </div>
                <div className="terminal-out">
                  {c.lines.map((l, li) => (
                    <div key={li}>
                      <span className="k">{l.k}:</span> {l.v}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {!done && current && (
              <>
                <div className="terminal-line">
                  <span className="prompt">➜</span>
                  <span className="cmd">
                    {typed}
                    <span className="caret" />
                  </span>
                </div>
                {showOutput && (
                  <div className="terminal-out">
                    {current.lines.map((l, li) => (
                      <div key={li}>
                        <span className="k">{l.k}:</span> {l.v}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {done && (
              <div className="terminal-line">
                <span className="prompt">➜</span>
                <span className="cmd">
                  <span className="caret" />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
