"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, profile } from "@/data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

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
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo__mark">{profile.initials}</span>
          <span>{profile.name}</span>
        </Link>
        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "is-active" : ""}
              aria-current={isActive(l.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn--small" onClick={() => setOpen(false)}>
            Contact
          </Link>
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
