import { getProfessionals } from '@/lib/sanity';
import { ProfessionalCard } from '@/components/ProfessionalCard';

export default async function EquipePage() {
  const professionals = await getProfessionals();
  return (
    <section className="container-default py-12">
      <h1 className="text-3xl font-bold">Equipe</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {professionals.map((person) => <ProfessionalCard key={person._id} professional={person} />)}
      </div>
    </section>
  );
}
