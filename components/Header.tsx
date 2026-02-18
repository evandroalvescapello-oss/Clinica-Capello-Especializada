import Link from 'next/link';

const links = [
  ['/', 'Home'],
  ['/sobre', 'Sobre'],
  ['/servicos', 'Serviços'],
  ['/equipe', 'Equipe'],
  ['/exames', 'Exames'],
  ['/agendamento', 'Agendamento'],
  ['/contato', 'Contato'],
  ['/blog', 'Blog'],
  ['/avaliacoes', 'Avaliações'],
  ['/lgpd', 'LGPD'],
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-default flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="text-lg font-bold text-brand-700">
          Clínica Capello
        </Link>
        <nav aria-label="Principal">
          <ul className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link className="hover:text-brand-700" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
