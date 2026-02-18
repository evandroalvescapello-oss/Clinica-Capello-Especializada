import { fallbackBanners, fallbackFaqs, fallbackPosts, fallbackProfessionals, fallbackServices, fallbackUnit } from './mockData';
import { Banner, Faq, Post, Professional, Service, UnitContact } from './types';

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-07-01';

const hasSanityConfig = Boolean(sanityProjectId && sanityDataset);

async function sanityFetch<T>(query: string, fallback: T): Promise<T> {
  if (!hasSanityConfig) return fallback;

  const encodedQuery = encodeURIComponent(query);
  const url = `https://${sanityProjectId}.api.sanity.io/v${sanityApiVersion}/data/query/${sanityDataset}?query=${encodedQuery}`;

  try {
    const response = await fetch(url, { next: { revalidate: 60 } });
    if (!response.ok) return fallback;
    const payload = (await response.json()) as { result?: T };
    return payload.result ?? fallback;
  } catch {
    return fallback;
  }
}

export const getUnitContact = () =>
  sanityFetch<UnitContact>(`*[_type == "unitContact"][0]{_id, clinicName, address, zipcode, phone, whatsapp, openingHours, googleMapsEmbedUrl, technicalDirection}`, fallbackUnit);

export const getBanners = () =>
  sanityFetch<Banner[]>(`*[_type == "banner"]{_id, title, subtitle, ctaLabel, ctaHref}`, fallbackBanners);

export const getServices = () =>
  sanityFetch<Service[]>(`*[_type == "service"]|order(category asc,title asc){_id,title,category,summary}`, fallbackServices);

export const getProfessionals = () =>
  sanityFetch<Professional[]>(`*[_type == "professional"]|order(name asc){_id,name,role,registration,rqe,bio}`, fallbackProfessionals);

export const getPosts = () =>
  sanityFetch<Post[]>(`*[_type == "post"]|order(publishedAt desc){_id,title,"slug":slug.current,excerpt,content,publishedAt}`, fallbackPosts);

export const getPostBySlug = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) ?? null;
};

export const getFaqs = () =>
  sanityFetch<Faq[]>(`*[_type == "faq"]|order(_createdAt desc){_id,question,answer}`, fallbackFaqs);
