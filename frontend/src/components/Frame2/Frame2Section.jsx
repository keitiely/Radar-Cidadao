// =============================================================
// Frame2Section.jsx
// Componente raiz do Frame 2 — une todos os sub-componentes
// Este é o arquivo que o Gustavo vai importar no Dashboard.jsx
// =============================================================
import RegionComparator from './RegionComparator.jsx';
import Top5Chart from './Top5Chart.jsx';
import CategoryPieChart from './CategoryPieChart.jsx';
import DataFooter from './DataFooter.jsx';

export default function Frame2Section() {
  return (
      <section style={{ background: 'white', padding: '1.5rem', fontFamily: 'sans-serif', marginTop: '2rem' }}>
        <RegionComparator />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <Top5Chart />
        <CategoryPieChart />
      </div>
      <DataFooter />
    </section>
  );
}