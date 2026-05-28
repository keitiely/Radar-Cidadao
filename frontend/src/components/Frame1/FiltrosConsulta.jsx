import React from 'react';

export function FiltrosConsulta() {
  return (
    // Estilizei com esse fundo azulado para puxar as cores que estão lá no Figma
    <div style={{ backgroundColor: '#dbe2ef', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#3f72af', display: 'flex', alignItems: 'center', gap: '5px' }}>
        Filtros de Consulta
      </h3>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* Dropdown de Categorias */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold', color: '#112d4e' }}>Categorias do Crime</label>
          <select style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
            <option>Todas</option>
            <option>Furto</option>
            <option>Roubo</option>
            <option>Homicídio</option>
          </select>
        </div>

        
        <div style={{ flex: 1, minWidth: '150px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold', color: '#112d4e' }}>Data Inicial</label>
          <input type="date" defaultValue="2024-01-01" style={{ width: '100%', padding: '7px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
        </div>

        <div style={{ flex: 1, minWidth: '150px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold', color: '#112d4e' }}>Data Final</label>
          <input type="date" defaultValue="2025-04-30" style={{ width: '100%', padding: '7px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
        </div>
      </div>
    </div>
  );
}