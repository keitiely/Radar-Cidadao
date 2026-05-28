// =============================================================
// Top5Chart.jsx
// Gráfico Top 5 Regiões — Frame 2
// Gráfico de barras horizontais com os 5 bairros mais críticos
// =============================================================
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { fetchTop5Regioes } from '../../services/firebaseService.js';

const BAR_COLOR = '#E24B4A';

export default function Top5Chart() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTop5Regioes().then(data => {
      setDados(data.map(d => ({ name: d.bairro, total: d.total })));
      setLoading(false);
    });
  }, []);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: 'white', border: '1px solid #eee', padding: '8px 12px', fontSize: 13 }}>
          <span>{payload[0].payload.name}</span><br/>
          <strong>{payload[0].value} ocorrências</strong>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ background: 'white', border: '1px solid #eee', borderRadius: 8, padding: '1.25rem', marginTop: '1rem', minWidth: 0 }}>
      <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: '1rem' }}>Top 5 regiões</h3>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={dados} layout="vertical" margin={{ top: 4, right: 16, left: 10, bottom: 4 }}>
            <CartesianGrid horizontal={false} strokeDasharray="3 3" />
            <XAxis type="number" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 12, fill: '#333' }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="total" radius={[0, 4, 4, 0]}barSize={30}>
              {dados.map((_, index) => (
                <Cell key={`cell-${index}`} fill={BAR_COLOR} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}