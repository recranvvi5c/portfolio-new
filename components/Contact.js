"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "@/data/content";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", msg: "" });

  // Demo only — connect to Formspree, Resend, Netlify Forms, etc.
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus({ type: "error", msg: "Please fill in all fields with a valid email." });
      return;
    }
    setStatus({ type: "ok", msg: "Thanks! Your message has been sent (demo)." });
    form.reset();
  };

  return (
    <section className="section section--alt" id="contact">
      <div className="container contact">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something great together.</h2>
          <p>Have a project in mind or just want to say hi? My inbox is always open.</p>
          <ul className="contact__list">
            <li>✉ <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li>⌖ {profile.location}</li>
          </ul>
          <div className="socials">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </Reveal>

        <Reveal as="form" className="form" onSubmit={onSubmit} noValidate>
          <label>Name<input type="text" name="name" required placeholder="Your name" /></label>
          <label>Email<input type="email" name="email" required placeholder="you@example.com" /></label>
          <label>
            Message
            <textarea name="message" rows={5} required placeholder="Tell me about your project" />
          </label>
          <button type="submit" className="btn">Send message</button>
          <p className={`form__note form__note--${status.type}`} role="status">{status.msg}</p>
        </Reveal>
      </div>
    </section>
  );
}
