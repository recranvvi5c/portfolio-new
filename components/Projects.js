"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Tags from "./Tags";
import { projects, projectFilters } from "@/data/content";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead eyebrow="Selected work" title="Featured projects" />
        <div className="filters">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              className={`filter ${filter === f.id ? "is-active" : ""}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="projects">
          {visible.map((p) => (
            <Reveal as="article" className="project" key={p.title}>
              <div className="project__img">
                <Image src={p.image} alt={`${p.title} preview`} width={800} height={520} />
              </div>
              <div className="project__body">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <Tags items={p.tags} />
                <div className="project__links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href}>{l.label}</a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
