import Link from 'next/link';
import { getPosts } from '@/lib/sanity';

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <section className="container-default py-12">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <article className="rounded-xl border border-slate-200 bg-white p-5" key={post._id}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <Link className="mt-3 inline-block text-sm font-semibold text-brand-700" href={`/blog/${post.slug}`}>
              Ler post
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
