export default function AgendamentoPage() {
  return (
    <section className="container-default py-12">
      <h1 className="text-3xl font-bold">Agendamento</h1>
      <p className="mt-3 text-slate-700">Preencha o formulário e nossa equipe retornará rapidamente.</p>
      <form className="mt-6 grid max-w-xl gap-4 rounded-xl border border-slate-200 bg-white p-5">
        <input className="rounded border border-slate-300 px-3 py-2" placeholder="Nome" required />
        <input className="rounded border border-slate-300 px-3 py-2" placeholder="Telefone" required />
        <input className="rounded border border-slate-300 px-3 py-2" placeholder="E-mail" type="email" required />
        <textarea className="rounded border border-slate-300 px-3 py-2" placeholder="Mensagem" rows={4} />
        <label className="text-xs text-slate-600">
          Ao enviar, você concorda com o tratamento dos seus dados para contato e agendamento, conforme a LGPD e nossa Política de Privacidade.
        </label>
        <button className="rounded bg-brand-700 px-4 py-2 font-semibold text-white" type="submit">Enviar</button>
      </form>
    </section>
  );
}
