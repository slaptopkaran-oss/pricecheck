const styles = {
  main: {
    minHeight: '100vh',
    padding: '24px',
    background: 'linear-gradient(180deg, #0b1220 0%, #121a2a 100%)',
    color: '#e5e7eb',
    fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
  } as const,
  header: {
    marginBottom: 20,
    borderBottom: '1px solid #243045',
    paddingBottom: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as const,
};

export function AppShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={{ margin: 0, fontSize: 28 }}>{title}</h1>
        <span style={{ opacity: 0.8 }}>PriceCheck Internal</span>
      </header>
      {children}
    </main>
  );
}
