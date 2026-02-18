import Link from 'next/link';

type Props = {
  phone: string;
};

export function WhatsappCTA({ phone }: Props) {
  return (
    <Link
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-600"
      aria-label="Agendar no WhatsApp"
    >
      Agendar no WhatsApp
    </Link>
  );
}
