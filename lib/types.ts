export type Service = {
  _id: string;
  title: string;
  category: string;
  summary: string;
};

export type Professional = {
  _id: string;
  name: string;
  role: string;
  registration: string;
  rqe?: string;
  bio: string;
};

export type UnitContact = {
  _id: string;
  clinicName: string;
  address: string;
  zipcode: string;
  phone: string;
  whatsapp: string;
  openingHours: string;
  googleMapsEmbedUrl: string;
  technicalDirection: string;
};

export type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
};

export type Faq = {
  _id: string;
  question: string;
  answer: string;
};

export type Banner = {
  _id: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};
