import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { to: "/", label: "முகப்பு" },
  { to: "/about", label: "தமிழ்வாழ்வு" },
  { to: "/books", label: "நூல்கள்" },
  { to: "/articles", label: "கட்டுரைகள்" },
  { to: "/gallery", label: "வாழ்க்கைப் பயணம்" },
  { to: "/contact", label: "தொடர்புக்கு" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-line"></div>

      <div className="header-container">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-circle">த</span>
          <span className="brand-text">
            <strong>தமிழண்ணல்</strong>
            <small>மூதறிஞர் இராம. பெரியகருப்பன்</small>
          </span>
        </Link>

        <button
          className="menu-button"
          id="menuButton"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>

        <nav
          className={`navigation${open ? " show" : ""}`}
          id="navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
