import Link from 'next/link';
import { AppShell } from '@/components/layout/app-shell';

const cards = [
  { label: 'Total Families', value: '124' },
  { label: 'Total Products', value: '1,842' },
  { label: 'Pending Reviews', value: '38' },
  { label: "Today's Approved", value: '12' },
  { label: "Today's Rejected", value: '3' },
  { label: 'High Priority Families', value: '9' },
  { label: 'Latest Updates', value: '27' },
  { label: 'Queue Health', value: '78%' },
];

export default function DashboardPage() {
  return (
    <AppShell title="Pricing Operations Dashboard">
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {cards.map((card) => (
          <div key={card.label} style={{ border: '1px solid #243045', background: 'linear-gradient(145deg, #151f31, #11192a)', borderRadius: 14, padding: 16 }}>
            <p style={{ margin: 0, color: '#93a4bf', fontSize: 13 }}>{card.label}</p>
            <p style={{ margin: '10px 0 0 0', fontSize: 30, fontWeight: 700 }}>{card.value}</p>
          </div>
        ))}
      </section>

      <section style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
        <div style={{ border: '1px solid #243045', borderRadius: 14, padding: 16 }}>
          <h3>Daily Workflow</h3>
          <ol>
            <li>Open review queue</li><li>Pick high priority family</li><li>Check Torob reference manually</li><li>Enter pricing delta</li><li>Preview impact + margin</li><li>Approve / reject</li><li>Push to Woo</li>
          </ol>
          <Link href="/queue" style={{ color: '#93c5fd' }}>Go to Review Queue →</Link>
        </div>
        <div style={{ border: '1px solid #243045', borderRadius: 14, padding: 16 }}>
          <h3>Quick Actions</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/families" style={{ color: '#93c5fd' }}>Manage families</Link>
            <Link href="/products" style={{ color: '#93c5fd' }}>Product catalog</Link>
            <Link href="/integration" style={{ color: '#93c5fd' }}>Woo sync console</Link>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
