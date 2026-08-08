import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About", index: "01" },
  { id: "experience", label: "Experience", index: "02" },
  { id: "projects", label: "Projects", index: "03" },
  { id: "skills", label: "Skills", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap">
        <a href="#top" className="brand">
          <span className="dot" aria-hidden="true" />
          shrijan<span style={{ color: "var(--text-faint)" }}>.pokharel</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={handleLinkClick}>
              <span className="index">{l.index}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="btn btn-ghost btn-sm"
            href="https://github.com/Shr6"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
