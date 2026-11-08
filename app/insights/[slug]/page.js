import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <header className="page-hero">
          <div className="container narrow">
            <Link href="/insights" className="back-link">← All insights</Link>
            <p className="eyebrow">{post.category}</p>
            <h1>{post.title}</h1>
            <p className="post-meta">{formatDate(post.date)} · {post.minutes} min read</p>
          </div>
        </header>
        <div className="container narrow">
          {post.image && (
            <div className="case-cover">
              <Image src={post.image} alt="" width={1200} height={630} priority />
            </div>
          )}
          {/* Content comes from your own Markdown files in content/insights */}
          <div className="prose section--tight" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>
      <CTA title="Enjoyed this article?" text="I write about building fast, accessible products. Let's chat about yours." />
    </>
  );
}
