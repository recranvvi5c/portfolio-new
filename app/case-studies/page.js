import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Tags from "@/components/Tags";
import CTA from "@/components/CTA";
import { caseStudies } from "@/data/caseStudies";

export const metadata = { title: "Case studies" };

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Real problems, measurable results."
        text="A closer look at how I approach projects — from the first conversation to launch and beyond."
      />
      <section className="section section--tight">
        <div className="container case-list">
          {caseStudies.map((c, i) => (
            <Reveal as="article" className={`case-row ${i % 2 ? "case-row--flip" : ""}`} key={c.slug}>
              <Link href={`/case-studies/${c.slug}`} className="case-row__img">
                <Image src={c.image} alt={`${c.title} preview`} width={1200} height={700} />
              </Link>
              <div>
                <p className="eyebrow">{c.client} · {c.year}</p>
                <h2>{c.title}</h2>
                <p>{c.summary}</p>
                <ul className="mini-stats">
                  {c.results.map((r) => (
                    <li key={r.label}><strong>{r.value}</strong><span>{r.label}</span></li>
                  ))}
                </ul>
                <Tags items={c.tags} />
                <Link href={`/case-studies/${c.slug}`} className="btn btn--ghost case-row__btn">
                  Read case study →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
