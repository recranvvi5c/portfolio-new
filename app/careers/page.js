import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import Tags from "@/components/Tags";
import CTA from "@/components/CTA";
import { openings, perks, profile } from "@/data/content";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Work with me."
        text="I occasionally team up with designers and developers on client projects and open source. Here's what's open right now."
      />

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Why collaborate" title="What you can expect" />
          <div className="cards cards--3">
            {perks.map((p) => (
              <Reveal as="article" className="card" key={p.title}>
                <div className="card__icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Open roles" title="Current opportunities" />
          <div className="jobs">
            {openings.map((o) => (
              <Reveal as="article" className="job" key={o.title}>
                <div>
                  <h3>{o.title}</h3>
                  <p className="job__type">{o.type}</p>
                  <p>{o.text}</p>
                  <Tags items={o.skills} />
                </div>
                <a
                  className="btn btn--ghost"
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(`Application: ${o.title}`)}`}
                >
                  Apply
                </a>
              </Reveal>
            ))}
          </div>
          <p className="center-note">
            Don&apos;t see a fit? <Link href="/contact">Say hello anyway →</Link>
          </p>
        </div>
      </section>

      <CTA title="Want to team up?" text="Send a short intro and a link to your work." label="Get in touch" />
    </>
  );
}
