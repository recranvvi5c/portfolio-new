import Image from "next/image";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { profile, stats } from "@/data/content";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <Reveal className="hero__text">
          {profile.available && (
            <p className="eyebrow">
              <span className="dot" /> Available for freelance work
            </p>
          )}
          <h1>
            I design &amp; build <span className="gradient-text">digital products</span> people love to use.
          </h1>
          <p className="lead">
            {profile.role} focused on clean interfaces, solid architecture and fast performance. Based in{" "}
            {profile.location.split(",")[0]}, working worldwide.
          </p>
          <div className="hero__cta">
            <a href="#projects" className="btn">View my work</a>
            <a href="#contact" className="btn btn--ghost">Get in touch</a>
          </div>
          <ul className="stats">
            {stats.map((s) => (
              <li key={s.label}>
                <Counter to={s.value} />+<span>{s.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="hero__visual">
          <div className="avatar-ring">
            <Image src={profile.portrait} alt="Sample portrait" width={480} height={480} priority />
          </div>
          <div className="code-card">
            <div className="code-card__bar"><i /><i /><i /></div>
            <pre>
              <code>
                <span className="k">const</span> dev = {"{\n"}
                {"  "}name: <span className="s">&quot;{profile.name}&quot;</span>,{"\n"}
                {"  "}stack: [<span className="s">&quot;React&quot;</span>, <span className="s">&quot;Next&quot;</span>,{" "}
                <span className="s">&quot;Node&quot;</span>],{"\n"}
                {"  "}coffee: <span className="n">Infinity</span>,{"\n"}
                {"};"}
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
