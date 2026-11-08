import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Tags from "@/components/Tags";
import CTA from "@/components/CTA";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  return c ? { title: c.title, description: c.summary } : {};
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const idx = caseStudies.findIndex((x) => x.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <Reveal>
            <Link href="/case-studies" className="back-link">← All case studies</Link>
            <p className="eyebrow">{c.client} · {c.year}</p>
            <h1>{c.title}</h1>
            <p className="lead">{c.summary}</p>
          </Reveal>
        </div>
      </section>

      <div className="container">
        <Reveal className="case-cover">
          <Image src={c.image} alt={`${c.title} cover`} width={1200} height={700} priority />
        </Reveal>
      </div>

      <section className="section section--tight">
        <div className="container narrow">
          <Reveal as="dl" className="meta-grid">
            <div><dt>Client</dt><dd>{c.client}</dd></div>
            <div><dt>Role</dt><dd>{c.role}</dd></div>
            <div><dt>Duration</dt><dd>{c.duration}</dd></div>
            <div><dt>Stack</dt><dd><Tags items={c.tags} /></dd></div>
          </Reveal>

          <Reveal as="ul" className="mini-stats mini-stats--big">
            {c.results.map((r) => (
              <li key={r.label}><strong>{r.value}</strong><span>{r.label}</span></li>
            ))}
          </Reveal>

          <div className="prose">
            {c.sections.map((s) => (
              <Reveal key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>

          <Link href={`/case-studies/${next.slug}`} className="next-link">
            <span>Next case study</span>
            <strong>{next.title} →</strong>
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
