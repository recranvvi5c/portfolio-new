import Link from "next/link";
import { navLinks, profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link href="/" className="logo">
            <span className="logo__mark">{profile.initials}</span>
            <span>{profile.name}</span>
          </Link>
          <p className="footer__tag">{profile.role} building fast, accessible web products.</p>
        </div>
        <nav className="footer__links" aria-label="Footer">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="footer__links">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
