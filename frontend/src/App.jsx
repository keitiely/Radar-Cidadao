import React from 'react';
import MapaCalor from './components/Frame1/MapaCalor'; // Ou o caminho que você ajustou
import './App.css';

function App() {
  return (
    <div className="container-painel">
      
      <header>
        {/*CSV/PDF */}
        <h1>RADAR CIDADÃO - TESTES </h1>
      </header>

      <main>
        {/* FILTROS E CARDSS */}
        
        {/* MAPAAAAA */}
        <MapaCalor />
      </main>
    </div>
  );
}

export default App;