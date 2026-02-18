export const postSchema = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', title: 'Resumo', type: 'text' },
    { name: 'content', title: 'Conteúdo', type: 'text' },
    { name: 'publishedAt', title: 'Publicado em', type: 'datetime' },
  ],
};
