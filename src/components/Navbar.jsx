import { useEffect, useState } from "react";
import Icon from "./Icon";

const links = ["Work", "Resume", "About"];

// Theme starts from the saved choice, else the visitor's system setting
// (index.html sets it before first paint so there's no flash).
function initialTheme() {
  return document.documentElement.getAttribute("data-theme") || "light";
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) { /* storage blocked */ }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <header className="header">
      <nav className="nav">
        <a href="#top" className="brand">
          <span className="brand-icon">⬡</span>
          <span className="brand-name">Belise Ganza</span>
        </a>
        <div className="nav-right">
          <button
            className="theme-toggle"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            <Icon name={isDark ? "sun" : "moon"} size={18} />
          </button>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
        <div className={`nav-links${open ? " show" : ""}`}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </nav>
    </header>
  );
}
