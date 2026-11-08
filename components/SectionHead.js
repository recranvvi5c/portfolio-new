import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title }) {
  return (
    <Reveal className="section__head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </Reveal>
  );
}
