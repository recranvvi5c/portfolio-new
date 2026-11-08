import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { stats, values, process } from "@/data/content";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Developer, designer at heart, problem solver by habit."
        text="I help startups and teams turn ideas into fast, reliable and accessible web products."
      >
        <ul className="stats stats--center">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>+<span>{s.label}</span>
            </li>
          ))}
        </ul>
      </PageHeader>

      <About />

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="What I believe" title="Values that guide my work" />
          <div className="cards">
            {values.map((v) => (
              <Reveal as="article" className="card" key={v.title}>
                <div className="card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="How I work" title="A simple, transparent process" />
          <div className="steps">
            {process.map((p) => (
              <Reveal className="step" key={p.step}>
                <span className="step__num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <Experience />
      <CTA />
    </>
  );
}
