// =============================================================
// CategoryPieChart.jsx
// Gráfico por Categoria — Frame 2
// Gráfico de pizza com distribuição Roubo x Furto
// =============================================================
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchDistribuicaoCategorias } from '../../services/firebaseService.js';

const COLORS = { Roubo: '#5F5E5A', Furto: '#E24B4A' };

export default function CategoryPieChart() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDistribuicaoCategorias().then(data => {
      setDados(data);
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ background: 'white', border: '1px solid #eee', borderRadius: 8, padding: '1.25rem', marginTop: '1rem' }}>
      <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: '1rem' }}>Gráfico por categoria</h3>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={dados} cx="50%" cy="50%" innerRadius={48} outerRadius={80} paddingAngle={3} dataKey="value">
                {dados.map(entry => (
                  <Cell key={entry.name} fill={COLORS[entry.name] || '#378ADD'} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
            {dados.map(entry => (
              <div key={entry.name} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: COLORS[entry.name] || '#378ADD', display: 'inline-block' }} />
                {entry.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}