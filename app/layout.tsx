import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsappCTA } from '@/components/WhatsappCTA';
import { RegulatoryBar } from '@/components/RegulatoryBar';
import { fallbackUnit } from '@/lib/mockData';

export const metadata: Metadata = {
  title: {
    default: 'Clínica Capello Especializada | Saúde Integrada',
    template: '%s | Clínica Capello Especializada',
  },
  description: 'Clínica de saúde especializada com equipe multiprofissional, exames e atendimento humanizado.',
  keywords: ['clínica de saúde', 'consulta médica', 'exames', 'São Paulo'],
  openGraph: {
    title: 'Clínica Capello Especializada',
    description: 'Atendimento especializado e humanizado em São Paulo.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="pb-12">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappCTA phone={fallbackUnit.whatsapp} />
        <RegulatoryBar />
      </body>
    </html>
  );
}
