import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-20 backdrop-blur border-b"
      style={{ borderColor: "var(--line)", backgroundColor: "rgba(231,233,238,0.85)" }}
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-10 flex items-center gap-1 sm:gap-2 h-14 font-mono text-xs tracking-wide">
        <NavLink to="/" className="flex items-center mr-2 shrink-0" aria-label="Home">
          <img src="/favicon.png" alt="" className="w-6 h-6 rounded" />
        </NavLink>
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `nav-tab px-3 py-1.5 border-b-2 ${isActive ? "active" : ""}`
            }
            style={{ borderColor: "transparent" }}
          >
            {link.label.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
