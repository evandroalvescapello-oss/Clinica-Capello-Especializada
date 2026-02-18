import Link from 'next/link';
import { fallbackUnit } from '@/lib/mockData';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-default grid gap-6 py-10 md:grid-cols-3">
        <div>
          <p className="font-semibold text-brand-700">{fallbackUnit.clinicName}</p>
          <p className="text-sm text-slate-600">{fallbackUnit.address}</p>
          <p className="text-sm text-slate-600">CEP: {fallbackUnit.zipcode}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800">Contato</p>
          <p className="text-sm text-slate-600">Tel: {fallbackUnit.phone}</p>
          <p className="text-sm text-slate-600">Horário: {fallbackUnit.openingHours}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800">Compliance</p>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>
              <Link href="/politica-de-privacidade" className="hover:text-brand-700">Política de Privacidade</Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-brand-700">Política de Cookies</Link>
            </li>
            <li>
              <Link href="/lgpd" className="hover:text-brand-700">LGPD</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
