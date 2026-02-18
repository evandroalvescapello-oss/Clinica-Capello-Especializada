import Link from 'next/link';

export default function AvaliacoesPage() {
  return (
    <section className="container-default py-12">
      <h1 className="text-3xl font-bold">Avaliações de Pacientes</h1>
      <p className="mt-4 text-slate-700">Confira opiniões no Google e compartilhe sua experiência.</p>
      <Link
        href="https://g.page/r/CXEXEMPLO/review"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block rounded bg-brand-700 px-5 py-3 text-white"
      >
        Ver avaliações no Google
      </Link>
    </section>
  );
}
