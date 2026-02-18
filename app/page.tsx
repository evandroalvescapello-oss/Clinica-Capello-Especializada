import Link from 'next/link';
import { getBanners, getServices } from '@/lib/sanity';
import { ServiceCard } from '@/components/ServiceCard';

export default async function HomePage() {
  const [banners, services] = await Promise.all([getBanners(), getServices()]);
  const banner = banners[0];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Clínica Capello Especializada',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Saúde Integrada, 123',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01000-000',
      addressCountry: 'BR',
    },
    telephone: '+55 11 3333-4444',
  };

  return (
    <div>
      <section className="container-default py-12">
        <h1 className="max-w-3xl text-4xl font-bold text-slate-900">{banner?.title}</h1>
        <p className="mt-4 max-w-2xl text-slate-600">{banner?.subtitle}</p>
        <div className="mt-6 flex gap-3">
          <Link href={banner?.ctaHref ?? '/agendamento'} className="rounded-lg bg-brand-700 px-5 py-3 text-white">
            {banner?.ctaLabel}
          </Link>
          <Link href="/servicos" className="rounded-lg border border-brand-700 px-5 py-3 text-brand-700">
            Ver serviços
          </Link>
        </div>
      </section>

      <section className="container-default py-8">
        <h2 className="text-2xl font-bold">Serviços em destaque</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {services.slice(0, 4).map((service) => (
            <ServiceCard service={service} key={service._id} />
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </div>
  );
}
