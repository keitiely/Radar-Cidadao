// =============================================================
// Dashboard.jsx
// Página principal — une Frame 1 (Gustavo) e Frame 2 (Keity)
// =============================================================

// import Frame1Section from '../components/Frame1/Frame1Section'; // ← Gustavo adiciona isso
import Frame2Section from '../components/Frame2/Frame2Section';

export default function Dashboard() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-background-tertiary)' }}>

      {/* ── FRAME 1 ── Gustavo implementa aqui */}
      {/* <Frame1Section /> */}
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        background: 'var(--color-background-secondary)',
        borderBottom: '0.5px solid var(--color-border-tertiary)',
        fontSize: '14px',
        color: 'var(--color-text-secondary)'
      }}>
        Frame 1 — Painel de Inteligência Criminal (Gustavo)
      </div>

      {/* ── FRAME 2 ── Keity */}
      <Frame2Section />

    </main>
  );
}
