// =============================================================
// Frame2Section.jsx
// Componente raiz do Frame 2 — une todos os sub-componentes
// Este é o arquivo que o Gustavo vai importar no Dashboard.jsx
// =============================================================
import { useState } from 'react';
import RegionComparator from './RegionComparator.jsx';
import Top5Chart from './Top5Chart.jsx';
import CategoryPieChart from './CategoryPieChart.jsx';
import DataFooter from './DataFooter.jsx';

const PROBLEMAS = [
  'Roubo a Pedestre',
  'Furto de Veículo',
  'Tráfico de Drogas',
];

export default function Frame2Section() {
  const [problema, setProblema] = useState(PROBLEMAS[0]);
  const [regiaoA, setRegiaoA] = useState('Ceilândia');
  const [regiaoB, setRegiaoB] = useState('Plano Piloto');

  return (
    <section style={{ background: 'white', padding: '1.5rem', fontFamily: 'sans-serif', marginTop: '2rem' }}>
      <RegionComparator
        problema={problema}
        setProblema={setProblema}
        regiaoA={regiaoA}
        setRegiaoA={setRegiaoA}
        regiaoB={regiaoB}
        setRegiaoB={setRegiaoB}
        problemas={PROBLEMAS}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <Top5Chart problema={problema} />
        <CategoryPieChart regiaoA={regiaoA} regiaoB={regiaoB} problema={problema} />
      </div>
      <DataFooter />
    </section>
  );
}