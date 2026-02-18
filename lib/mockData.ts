import { Banner, Faq, Post, Professional, Service, UnitContact } from './types';

export const fallbackUnit: UnitContact = {
  _id: 'unit-1',
  clinicName: 'Clínica Capello Especializada',
  address: 'Av. Saúde Integrada, 123 - Centro, São Paulo/SP',
  zipcode: '01000-000',
  phone: '(11) 3333-4444',
  whatsapp: '5511999998888',
  openingHours: 'Seg a Sex, 08h às 19h | Sáb 08h às 13h',
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=Paulista&output=embed',
  technicalDirection: 'Direção Técnica: Dra. Ana Silva - CRM 123456/SP',
};

export const fallbackBanners: Banner[] = [
  {
    _id: 'banner-1',
    title: 'Cuidado especializado e acolhedor para toda a família',
    subtitle: 'Equipe multiprofissional, exames modernos e atendimento humanizado.',
    ctaLabel: 'Agendar consulta no WhatsApp',
    ctaHref: '/agendamento',
  },
];

export const fallbackServices: Service[] = [
  { _id: 's1', title: 'Cardiologia Clínica', category: 'Especialidades', summary: 'Avaliação e acompanhamento cardiovascular.' },
  { _id: 's2', title: 'Dermatologia', category: 'Especialidades', summary: 'Prevenção e tratamento de condições da pele.' },
  { _id: 's3', title: 'Check-up Executivo', category: 'Exames e Diagnóstico', summary: 'Pacotes completos para monitoramento preventivo.' },
  { _id: 's4', title: 'Fisioterapia', category: 'Reabilitação', summary: 'Programas personalizados de recuperação funcional.' },
];

export const fallbackProfessionals: Professional[] = [
  {
    _id: 'p1',
    name: 'Dra. Ana Silva',
    role: 'Cardiologista',
    registration: 'CRM 123456/SP',
    rqe: 'RQE 44556',
    bio: 'Especialista em prevenção cardiovascular com foco em medicina baseada em evidências.',
  },
  {
    _id: 'p2',
    name: 'Dr. Carlos Souza',
    role: 'Dermatologista',
    registration: 'CRM 222333/SP',
    rqe: 'RQE 77889',
    bio: 'Atuação em dermatologia clínica, cirúrgica e estética.',
  },
];

export const fallbackPosts: Post[] = [
  {
    _id: 'post-1',
    title: 'Como se preparar para um check-up completo',
    slug: 'como-se-preparar-checkup',
    excerpt: 'Veja quais exames são indicados e como otimizar sua consulta.',
    content: 'Um check-up completo ajuda na prevenção e identificação precoce de doenças...',
    publishedAt: '2026-01-15',
  },
  {
    _id: 'post-2',
    title: 'Cinco hábitos para melhorar a saúde do coração',
    slug: 'habitos-saude-coracao',
    excerpt: 'Mudanças simples no dia a dia para proteger o sistema cardiovascular.',
    content: 'A saúde cardiovascular depende de escolhas consistentes: alimentação, sono, atividade física...',
    publishedAt: '2026-01-29',
  },
];

export const fallbackFaqs: Faq[] = [
  { _id: 'f1', question: 'Vocês atendem convênios?', answer: 'Sim, atendemos convênios selecionados e particular.' },
  { _id: 'f2', question: 'Como remarcar consulta?', answer: 'Remarcações podem ser feitas por telefone ou WhatsApp com até 24h de antecedência.' },
];
