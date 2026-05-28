import React from 'react';


export function CardsResumo({ total, media, regiao, delito }) {
  
  
  const estiloCard = {
    flex: 1,
    minWidth: '160px',
    backgroundColor: '#f1f5f9',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  };

  const estiloTitulo = { display: 'block', color: '#64748b', fontSize: '12px', fontWeight: '600', marginBottom: '5px' };
  const estiloValor = { margin: 0, color: '#1e293b', fontSize: '22px', fontWeight: 'bold' };

  return (
    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '20px' }}>
      
      <div style={estiloCard}>
        <span style={estiloTitulo}>Total Geral</span>
        <h4 style={estiloValor}>{total}</h4>
      </div>

      <div style={estiloCard}>
        <span style={estiloTitulo}>Média Diária</span>
        <h4 style={estiloValor}>{media}</h4>
      </div>

      <div style={estiloCard}>
        <span style={estiloTitulo}>Região Crítica</span>
        <h4 style={estiloValor}>{regiao}</h4>
      </div>

      <div style={estiloCard}>
        <span style={estiloTitulo}>Principal Delito</span>
        <h4 style={estiloValor}>{delito}</h4>
      </div>

    </div>
  );
}