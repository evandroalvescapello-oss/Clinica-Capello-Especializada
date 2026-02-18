import { Service } from '@/lib/types';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-brand-700">{service.category}</p>
      <h3 className="mt-1 text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
    </article>
  );
}
