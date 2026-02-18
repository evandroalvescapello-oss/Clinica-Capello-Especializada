import { Professional } from '@/lib/types';

export function ProfessionalCard({ professional }: { professional: Professional }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">{professional.name}</h3>
      <p className="text-sm text-brand-700">{professional.role}</p>
      <p className="mt-1 text-sm text-slate-600">{professional.registration}</p>
      {professional.rqe && <p className="text-sm text-slate-600">{professional.rqe}</p>}
      <p className="mt-3 text-sm text-slate-600">{professional.bio}</p>
    </article>
  );
}
