import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHead eyebrow="Career" title="Experience" />
        <ol className="timeline">
          {experience.map((e) => (
            <Reveal as="li" key={e.title}>
              <span className="timeline__date">{e.date}</span>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
