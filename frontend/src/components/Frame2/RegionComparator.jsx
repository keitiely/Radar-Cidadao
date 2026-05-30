// =============================================================
// RegionComparator.jsx
// Comparador de Regiões — Frame 2
// Permite selecionar problema principal e duas regiões para comparar
// =============================================================
// RegionComparator.jsx — agora recebe tudo via props
import { useEffect, useState } from 'react';
import { fetchResumoRegiao, listaBairros } from '../../services/firebaseService.js';

export default function RegionComparator({
  problema, setProblema, problemas,
  regiaoA, setRegiaoA,
  regiaoB, setRegiaoB,
}) {
  const [bairros, setBairros] = useState([]);
  const [dadosA, setDadosA] = useState(null);
  const [dadosB, setDadosB] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listaBairros().then(lista => setBairros(lista));
  }, []);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchResumoRegiao(regiaoA, problema),
      fetchResumoRegiao(regiaoB, problema),
    ]).then(([a, b]) => {
      setDadosA(a);
      setDadosB(b);
      setLoading(false);
    });
  }, [regiaoA, regiaoB, problema]);

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

  return (
    <div style={{ background: '#e8e8e8', borderRadius: 12, padding: '1.25rem' }}>
      <h2 style={{ fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
        Comparador de Regiões
      </h2>

      {/* Problema Principal */}
      <div style={{ marginBottom: '1.25rem' }}>
        <label style={{ fontSize: 12, color: '#555', display: 'block', marginBottom: 4 }}>
          Problema Principal
        </label>
        <select style={selectStyle} value={problema} onChange={e => setProblema(e.target.value)}>
          {problemas.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      {/* Regiões */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {[
          { regiao: regiaoA, dados: dadosA, setRegiao: setRegiaoA },
          { regiao: regiaoB, dados: dadosB, setRegiao: setRegiaoB },
        ].map((col, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <select style={selectStyle} value={col.regiao} onChange={e => col.setRegiao(e.target.value)}>
              {bairros.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            {loading ? <p style={{ fontSize: 13, color: '#888' }}>Carregando...</p> : col.dados ? (
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
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}