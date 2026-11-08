import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { faqs, profile } from "@/data/content";

export const metadata = { title: "Contact" };

const options = [
  {
    num: "01",
    label: "Book a call",
    title: "Book a free intro chat",
    text: "Grab a 20-minute slot that suits you. We'll talk goals, timeline and next steps.",
    cta: "See available times →",
    href: profile.calendarUrl,
    badge: "Recommended",
    variant: "primary",
  },
  {
    num: "02",
    label: "Send a message",
    title: "Tell me about your project",
    text: "Share a few details using the form below and I'll reply personally with ideas.",
    cta: "Jump to the form ↓",
    href: "#contact",
  },
  {
    num: "03",
    label: "Just browsing",
    title: "Explore my work first",
    text: "See how I've helped other teams, what I built and the results it delivered.",
    cta: "View case studies →",
    href: "/case-studies",
    variant: "dashed",
  },
];

export default function ContactPage() {
  const first = profile.name.split(" ")[0];

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero__top">
            <Reveal className="contact-hero__text">
              <p className="eyebrow">Contact</p>
              <h1>
                Let&apos;s turn your idea into <span className="gradient-text">something real.</span>
              </h1>
              <p className="lead">
                Whether you need a new product, a redesign or an extra pair of hands, pick the option that suits you
                best — I&apos;ll take it from there.
              </p>
            </Reveal>

            <Reveal className="status-card">
              <Image src={profile.portrait} alt="" width={52} height={52} />
              <div>
                <strong>You&apos;ll hear back from {first} directly</strong>
                <span className={`status-card__state ${profile.available ? "is-on" : ""}`}>
                  {profile.available ? "Open to new projects" : "Currently booked"} · {profile.replyTime.toLowerCase()}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="options">
            {options.map((o) => {
              const external = o.href.startsWith("http");
              const Tag = o.href.startsWith("/") ? Link : "a";
              return (
                <Reveal
                  as="article"
                  key={o.num}
                  className={`option ${o.variant ? `option--${o.variant}` : ""}`}
                >
                  {o.badge && <span className="option__badge">{o.badge}</span>}
                  <p className="option__label">{o.num} · {o.label}</p>
                  <h2>{o.title}</h2>
                  <p>{o.text}</p>
                  <Tag
                    href={o.href}
                    className="option__cta"
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {o.cta}
                  </Tag>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="FAQ" title="Common questions" />
          <div className="faq">
            {faqs.map((f) => (
              <Reveal as="details" className="faq__item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
