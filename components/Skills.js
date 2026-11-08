import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Tags from "./Tags";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionHead eyebrow="What I do" title="Skills & services" />
        <div className="cards">
          {skills.map((s) => (
            <Reveal as="article" className="card" key={s.title}>
              <div className="card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Tags items={s.tags} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
