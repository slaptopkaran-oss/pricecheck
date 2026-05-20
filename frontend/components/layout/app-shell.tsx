export function AppShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen p-6">
      <header className="mb-6 border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </header>
      {children}
    </main>
  );
}
