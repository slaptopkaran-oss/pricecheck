import { AppShell } from '@/components/layout/app-shell';

export default function FamilyDetailPage() {
  return (
    <AppShell title="Family Detail & Pricing Draft Engine">
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '2fr 1fr' }}>
        <section style={{ border: '1px solid #243045', borderRadius: 12, padding: 16 }}>
          <h3>Family Metadata</h3>
          <p><b>family_code:</b> x1504va_i3</p>
          <p><b>reference product:</b> SKU-X1504-I3-8-512</p>
          <p><b>market note:</b> Torob checked at 11:42 - closest competitor 31,900,000</p>

          <h3>Products in Family</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr>{['SKU', 'CPU', 'RAM', 'SSD', 'Current Price', 'Cost', 'Min Margin', 'Torob'].map((h) => <th key={h} style={{ textAlign: 'left', borderBottom: '1px solid #243045', padding: 8 }}>{h}</th>)}</tr></thead>
            <tbody>
              {[
                ['SKU-X1504-I3-8-512', 'i3', '8GB', '512GB', '31,500,000', '28,900,000', '6%', 'Open'],
                ['SKU-X1504-I3-8-1TB', 'i3', '8GB', '1TB', '33,200,000', '30,800,000', '6%', 'Open'],
                ['SKU-X1504-I3-16-512', 'i3', '16GB', '512GB', '34,100,000', '31,200,000', '6%', 'Open'],
              ].map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ borderBottom: '1px solid #1f2937', padding: 8 }}>{c}</td>)}</tr>)}
            </tbody>
          </table>
        </section>

        <aside style={{ border: '1px solid #243045', borderRadius: 12, padding: 16 }}>
          <h3>Create Pricing Draft</h3>
          <label>Draft Type</label>
          <select style={{ width: '100%', padding: 10, margin: '6px 0 10px', borderRadius: 8, background: '#0f172a', color: '#fff', border: '1px solid #243045' }}>
            <option>delta</option><option>rule</option>
          </select>
          <label>Delta Value (e.g. -1000000)</label>
          <input defaultValue={-1000000} style={{ width: '100%', padding: 10, margin: '6px 0 10px', borderRadius: 8, background: '#0f172a', color: '#fff', border: '1px solid #243045' }} />
          <label>Subset Filter</label>
          <select style={{ width: '100%', padding: 10, margin: '6px 0 10px', borderRadius: 8, background: '#0f172a', color: '#fff', border: '1px solid #243045' }}>
            <option>Entire family</option><option>RAM = 8GB</option><option>SSD = 1TB</option><option>Custom product selection</option>
          </select>

          <button style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #243045', background: '#2563eb', color: '#fff', marginBottom: 8 }}>Preview Impact</button>
          <button style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #243045', background: '#16a34a', color: '#fff', marginBottom: 8 }}>Approve Draft</button>
          <button style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #243045', background: '#dc2626', color: '#fff' }}>Reject Draft</button>
        </aside>
      </div>
    </AppShell>
  );
}
