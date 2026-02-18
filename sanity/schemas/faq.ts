export const faqSchema = {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'question', title: 'Pergunta', type: 'string' },
    { name: 'answer', title: 'Resposta', type: 'text' },
  ],
};
