import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata = { title: "Insights" };

export default function InsightsPage() {
  const [featured, ...rest] = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes on building for the web."
        text="Practical articles on performance, accessibility, design and freelancing."
      />
      <section className="section section--tight">
        <div className="container">
          {featured && (
            <Reveal as="article" className="post-featured">
              <Link href={`/insights/${featured.slug}`} className="post-featured__img">
                <Image src={featured.image} alt="" width={1200} height={630} priority />
              </Link>
              <div>
                <p className="eyebrow">{featured.category} · Featured</p>
                <h2><Link href={`/insights/${featured.slug}`}>{featured.title}</Link></h2>
                <p>{featured.excerpt}</p>
                <p className="post-meta">{formatDate(featured.date)} · {featured.minutes} min read</p>
              </div>
            </Reveal>
          )}

          <div className="posts">
            {rest.map((p) => (
              <Reveal as="article" className="post-card" key={p.slug}>
                <Link href={`/insights/${p.slug}`} className="post-card__img">
                  <Image src={p.image} alt="" width={1200} height={630} />
                </Link>
                <div className="post-card__body">
                  <p className="eyebrow">{p.category}</p>
                  <h3><Link href={`/insights/${p.slug}`}>{p.title}</Link></h3>
                  <p>{p.excerpt}</p>
                  <p className="post-meta">{formatDate(p.date)} · {p.minutes} min read</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
