import { AppShell } from '@/components/layout/app-shell';

export default function Page() {
  return <AppShell title="Users"><div className="rounded-lg border border-slate-800 bg-slate-900 p-6">Users module with filters, tables, bulk actions, and audit-aware UX.</div></AppShell>;
}
