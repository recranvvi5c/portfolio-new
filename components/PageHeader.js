import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal className="page-hero__inner">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {text && <p className="lead">{text}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
