import { getUnitContact } from '@/lib/sanity';

export default async function ContatoPage() {
  const unit = await getUnitContact();
  return (
    <section className="container-default py-12">
      <h1 className="text-3xl font-bold">Contato</h1>
      <p className="mt-4 text-slate-700">{unit.address}</p>
      <p className="text-slate-700">Tel: {unit.phone}</p>
      <p className="text-slate-700">Horário: {unit.openingHours}</p>
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
        <iframe
          title="Google Maps da clínica"
          src={unit.googleMapsEmbedUrl}
          width="100%"
          height="320"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
