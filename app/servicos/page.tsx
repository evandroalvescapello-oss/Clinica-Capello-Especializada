import { getServices } from '@/lib/sanity';
import { ServiceCard } from '@/components/ServiceCard';

export default async function ServicosPage() {
  const services = await getServices();
  const grouped = services.reduce<Record<string, typeof services>>((acc, service) => {
    acc[service.category] = [...(acc[service.category] ?? []), service];
    return acc;
  }, {});

  return (
    <section className="container-default py-12">
      <h1 className="text-3xl font-bold">Serviços por categoria</h1>
      <div className="mt-8 space-y-8">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold text-brand-700">{category}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {items.map((service) => <ServiceCard key={service._id} service={service} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
