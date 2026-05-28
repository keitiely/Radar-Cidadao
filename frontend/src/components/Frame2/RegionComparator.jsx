// =============================================================
// RegionComparator.jsx
// Comparador de Regiões — Frame 2
// Permite selecionar duas regiões e comparar seus indicadores
// =============================================================
import { useState, useEffect } from 'react';
import { fetchResumoRegiao, listaBairros } from '../../services/firebaseService.js';

export default function RegionComparator() {
  const [bairros, setBairros] = useState([]);
  const [regiaoA, setRegiaoA] = useState('Ceilândia');
  const [regiaoB, setRegiaoB] = useState('Plano Piloto');
  const [dadosA, setDadosA] = useState(null);
  const [dadosB, setDadosB] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listaBairros().then(lista => setBairros(lista));
  }, []);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchResumoRegiao(regiaoA), fetchResumoRegiao(regiaoB)])
      .then(([a, b]) => { setDadosA(a); setDadosB(b); setLoading(false); });
  }, [regiaoA, regiaoB]);

  const cardStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem',
  };

  const selectStyle = {
    width: '100%',
    padding: '8px 12px',
    fontSize: 14,
    fontWeight: 600,
    border: '1px solid #ccc',
    borderRadius: 8,
    background: 'white',
    cursor: 'pointer',
  };

  const problemaBoxStyle = {
    background: 'white',
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: '8px 12px',
  };

  return (
    <div style={{ background: '#e8e8e8', borderRadius: 12, padding: '1.25rem' }}>
      <h2 style={{ fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
        Comparador de Regiões
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {[{ regiao: regiaoA, dados: dadosA, setRegiao: setRegiaoA }, { regiao: regiaoB, dados: dadosB, setRegiao: setRegiaoB }].map((col, i) => (
          <div key={i} style={cardStyle}>
            <select style={selectStyle} value={col.regiao} onChange={e => col.setRegiao(e.target.value)}>
              {bairros.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            {loading ? <p>Carregando...</p> : col.dados ? (
              <>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div>
                    <div style={{ fontSize: 12, color: '#555' }}>Total no Período</div>
                    <div style={{ fontSize: 28, fontWeight: 700 }}>{col.dados.total}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: '#555' }}>Representatividade</div>
                    <div style={{ fontSize: 28, fontWeight: 700 }}>{col.dados.representatividade}%</div>
                  </div>
                </div>
                <div style={problemaBoxStyle}>
                  <div style={{ fontSize: 11, color: '#888' }}>Problema Principal</div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{col.dados.problemaPrincipal}</div>
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}