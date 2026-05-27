// =============================================================
// RegionComparator.jsx
// Comparador de Regiões — Frame 2
// Permite selecionar duas regiões e comparar seus indicadores
// =============================================================
import { useState, useEffect } from 'react';
import { listaBairros } from '../../services/firebaseService.js';

export default function RegionComparator() {
  const [bairros, setBairros] = useState([]);

  useEffect(() => {
    listaBairros().then(lista => setBairros(lista));
  }, []);

  return <div><h3>Bairros: {bairros.length}</h3></div>;
}