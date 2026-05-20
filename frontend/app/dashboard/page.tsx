import { AppShell } from '@/components/layout/app-shell';

const cards = [
  'Total Families','Total Products','Pending Reviews','Today Approved','Today Rejected','High Priority Families','Latest Updates','Queue Health'
];

export default function DashboardPage() {
  return <AppShell title="Pricing Operations Dashboard"><section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">{cards.map((card) => <div key={card} className="rounded-xl border border-slate-800 bg-slate-900 p-4"><p className="text-sm text-slate-400">{card}</p><p className="mt-3 text-2xl font-bold">--</p></div>)}</section></AppShell>;
}
