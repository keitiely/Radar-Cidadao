import React from 'react';
import { ExportarCSV } from './ExportarCSV'; // Meu componente de download

export function HeaderPainel() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '15px' }}>
      <div>
        <h1 style={{ margin: 0, fontSize: '24px', color: '#1e293b' }}>Painel de Inteligência Criminal</h1>
        <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '14px' }}>Boletim de Ocorrências - Dados Abertos</p>
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        
        <button style={{ padding: '8px 16px', backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>
          Relatório (PDF)
        </button>
        
       
        <ExportarCSV />
      </div>
    </div>
  );
}