"use client";

import { useState } from "react";
import { navLinks, profile } from "@/data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="logo">
          <span className="logo__mark">{profile.initials}</span>
          <span>{profile.name}</span>
        </a>
        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--small" onClick={() => setOpen(false)}>
            Hire me
          </a>
        </nav>
        <div className="nav__actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle color theme">
            ◐
          </button>
          <button
            className="icon-btn nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
