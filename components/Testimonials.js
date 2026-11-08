import Image from "next/image";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionHead eyebrow="Kind words" title="What clients say" />
        <div className="quotes">
          {testimonials.map((t) => (
            <Reveal as="figure" className="quote" key={t.name}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <Image src={t.avatar} alt="" width={44} height={44} />
                <span>
                  <strong>{t.name}</strong>
                  <br />
                  {t.role}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
