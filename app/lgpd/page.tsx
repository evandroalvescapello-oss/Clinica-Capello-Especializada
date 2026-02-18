import { getFaqs } from '@/lib/sanity';

export default async function LgpdPage() {
  const faqs = await getFaqs();

  return (
    <section className="container-default py-12">
      <h1 className="text-3xl font-bold">LGPD e Proteção de Dados</h1>
      <p className="mt-4 text-slate-700">Tratamos dados pessoais com transparência, segurança e finalidade assistencial/administrativa.</p>
      <h2 className="mt-8 text-xl font-semibold">FAQ</h2>
      <div className="mt-4 space-y-3">
        {faqs.map((faq) => (
          <details className="rounded-lg border border-slate-200 bg-white p-4" key={faq._id}>
            <summary className="cursor-pointer font-medium">{faq.question}</summary>
            <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
