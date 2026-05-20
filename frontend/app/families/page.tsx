import Link from 'next/link';
import { AppShell } from '@/components/layout/app-shell';

const rows = [
  ['x1504va_i3', 'ASUS X1504VA i3 Family', '1', 'active', '2026-05-19 16:20', '2026-05-20 12:00', '3', '1'],
  ['x1504va_i5', 'ASUS X1504VA i5 Family', '2', 'active', '2026-05-18 14:10', '2026-05-20 14:00', '4', '1'],
  ['vivobook15_r5', 'VivoBook 15 Ryzen 5', '1', 'paused', '2026-05-14 11:00', '2026-05-22 10:00', '5', '1'],
];

export default function Page() {
  return <AppShell title="Families List">
    <div style={{border:'1px solid #243045', borderRadius:12, padding:16, marginBottom:16}}>
      <h3>Filters</h3>
      <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8}}>
        <input placeholder='Search family code/title' style={{padding:10,borderRadius:8,border:'1px solid #243045',background:'#0f172a',color:'#fff'}}/>
        <select style={{padding:10,borderRadius:8,border:'1px solid #243045',background:'#0f172a',color:'#fff'}}><option>All priorities</option></select>
        <select style={{padding:10,borderRadius:8,border:'1px solid #243045',background:'#0f172a',color:'#fff'}}><option>All statuses</option></select>
        <button style={{padding:10,borderRadius:8,border:'1px solid #243045',background:'#1d4ed8',color:'#fff'}}>Bulk Mark Reviewed</button>
      </div>
    </div>
    <table style={{width:'100%', borderCollapse:'collapse'}}><thead><tr>{['Family Code','Title','Priority','Status','Last Checked','Next Check','Products','Refs','Action'].map(h=><th key={h} style={{textAlign:'left',borderBottom:'1px solid #243045',padding:10}}>{h}</th>)}</tr></thead><tbody>{rows.map(r=><tr key={r[0]}>{r.map((c,i)=><td key={i} style={{padding:10,borderBottom:'1px solid #1f2937'}}>{c}</td>)}<td><Link href={`/families/${r[0]}`} style={{color:'#93c5fd'}}>Open</Link></td></tr>)}</tbody></table>
  </AppShell>;
}
