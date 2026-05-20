import Link from 'next/link';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/families', label: 'Families' },
  { href: '/queue', label: 'Review Queue' },
  { href: '/products', label: 'Products' },
  { href: '/history', label: 'History' },
  { href: '/integration', label: 'Woo Sync' },
  { href: '/settings', label: 'Settings' },
  { href: '/users', label: 'Users' },
];

export function AppShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #0b1220 0%, #121a2a 100%)', color: '#e5e7eb', fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '100vh' }}>
        <aside style={{ borderRight: '1px solid #243045', padding: 20 }}>
          <h2 style={{ marginTop: 0 }}>PriceCheck</h2>
          <p style={{ opacity: 0.7, fontSize: 12 }}>Laptop Pricing Ops</p>
          <nav style={{ display: 'grid', gap: 8, marginTop: 24 }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{ padding: '10px 12px', border: '1px solid #243045', borderRadius: 10, color: '#dbeafe', textDecoration: 'none', fontSize: 14 }}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <section style={{ padding: 24 }}>
          <header style={{ marginBottom: 20, borderBottom: '1px solid #243045', paddingBottom: 12, display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{ margin: 0, fontSize: 28 }}>{title}</h1>
            <span style={{ opacity: 0.8 }}>Internal Enterprise Panel</span>
          </header>
          {children}
        </section>
      </div>
    </main>
  );
}
