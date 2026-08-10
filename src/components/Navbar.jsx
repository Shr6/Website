import { useEffect, useState } from "react";
import { RouterLink, useRouter } from "../router.jsx";

const LINKS = [
  { to: "/about", label: "About", index: "01" },
  { to: "/experience", label: "Experience", index: "02" },
  { to: "/projects", label: "Projects", index: "03" },
  { to: "/skills", label: "Skills", index: "04" },
  { to: "/contact", label: "Contact", index: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { path } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu automatically whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap">
        <RouterLink to="/" className="brand">
          Shrijan<span style={{ color: "var(--text-faint)" }}>Pokharel</span>
        </RouterLink>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {LINKS.map((l) => (
            <RouterLink
              key={l.to}
              to={l.to}
              aria-current={path === l.to ? "page" : undefined}
              className={path === l.to ? "active" : undefined}
            >
              <span className="index">{l.index}</span>
              {l.label}
            </RouterLink>
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
