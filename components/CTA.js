import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA({
  title = "Have a project in mind?",
  text = "Let's talk about what you're building and how I can help.",
  label = "Start a conversation",
  href = "/contact",
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta">
          <h2>{title}</h2>
          <p>{text}</p>
          <Link href={href} className="btn">{label}</Link>
        </Reveal>
      </div>
    </section>
  );
}
