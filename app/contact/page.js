import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { faqs } from "@/data/content";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's work together."
        text="Tell me about your project, timeline and budget. I reply to every message within one business day."
      />
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
