import { AppShell } from '@/components/layout/app-shell';

export default function FamilyDetailPage() {
  return (
    <AppShell title="Family Detail">
      <div className="grid gap-4 lg:grid-cols-3">
        <section className="rounded-lg border border-slate-800 bg-slate-900 p-4 lg:col-span-2">Family metadata, products, reference selector, Torob link.</section>
        <aside className="rounded-lg border border-slate-800 bg-slate-900 p-4">Draft preview, delta input, approval controls.</aside>
      </div>
    </AppShell>
  );
}
