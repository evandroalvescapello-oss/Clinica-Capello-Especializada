import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/sanity';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="container-default py-12">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-3 text-sm text-slate-500">Publicado em {new Date(post.publishedAt).toLocaleDateString('pt-BR')}</p>
      <div className="prose mt-6 max-w-none text-slate-700">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
