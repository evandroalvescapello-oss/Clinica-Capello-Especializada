export const bannerSchema = {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string' },
    { name: 'subtitle', title: 'Subtítulo', type: 'text' },
    { name: 'ctaLabel', title: 'Texto do CTA', type: 'string' },
    { name: 'ctaHref', title: 'Link do CTA', type: 'string' },
  ],
};
