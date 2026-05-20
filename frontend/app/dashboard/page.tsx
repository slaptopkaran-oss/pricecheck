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
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.label}
            style={{
              border: '1px solid #243045',
              background: 'linear-gradient(145deg, #151f31, #11192a)',
              borderRadius: 14,
              padding: 16,
              boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
            }}
          >
            <p style={{ margin: 0, color: '#93a4bf', fontSize: 13 }}>{card.label}</p>
            <p style={{ margin: '10px 0 0 0', fontSize: 30, fontWeight: 700 }}>{card.value}</p>
          </div>
        ))}
      </section>
    </AppShell>
  );
}
