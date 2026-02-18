export const serviceSchema = {
  name: 'service',
  title: 'Serviço',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string' },
    { name: 'category', title: 'Categoria', type: 'string' },
    { name: 'summary', title: 'Resumo', type: 'text' },
  ],
};
