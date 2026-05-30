// =============================================================
// CategoryPieChart.jsx
// Gráfico por Categoria — Frame 2
// Gráfico de pizza com distribuição Ceilandia x Taguatinga
// =============================================================
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchDistribuicaoPorRegioes } from '../../services/firebaseService.js';

const COLORS = ['#5F5E5A', '#E24B4A'];

export default function CategoryPieChart({ regiaoA, regiaoB, problema }) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!regiaoA || !regiaoB || !problema) return;
    setLoading(true);
    fetchDistribuicaoPorRegioes(regiaoA, regiaoB, problema).then(data => {
      setDados(data);
      setLoading(false);
    });
  }, [regiaoA, regiaoB, problema]);

  return (
    <div style={{ background: 'white', border: '1px solid #eee', borderRadius: 8, padding: '1.25rem', marginTop: '1rem' }}>
      <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: '1rem' }}>Gráfico por cidade</h3>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={dados} cx="50%" cy="50%" outerRadius={80} paddingAngle={3} dataKey="value">
                {dados.map((entry, i) => (
                  <Cell key={entry.name} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
            {dados.map((entry, i) => (
              <div key={entry.name} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: COLORS[i % COLORS.length], display: 'inline-block' }} />
                {entry.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}