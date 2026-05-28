// =============================================================
// App.jsx — ponto de entrada da aplicação
// =============================================================
import React, { useState } from 'react';
import { HeaderPainel } from './components/Frame1/HeaderPainel';
import { FiltrosConsulta } from './components/Frame1/FiltrosConsulta';
import { CardsResumo } from './components/Frame1/CardsResumo';
import MapaCalor from './components/Frame1/MapaCalor';
import Frame2Section from './components/Frame2/Frame2Section';
import './App.css';

function App() {
  const [dadosPainel, setDadosPainel] = useState({
    totalGeral: 21,
    mediaDiaria: 0.2,
    regiaoCritica: "Ceilândia",
    principalDelito: "Furto",
    ocorrencias: [
      { id: 1, tipo: "Furto", lat: -15.811, lng: -48.082 },
      { id: 2, tipo: "Roubo", lat: -15.815, lng: -48.090 },
      { id: 3, tipo: "Furto", lat: -15.810, lng: -48.075 },
    ]
  });

  return (
    <div className="painel-main-container" style={{ padding: '20px' }}>
      <HeaderPainel />
      <FiltrosConsulta />
      <CardsResumo
        total={dadosPainel.totalGeral}
        media={dadosPainel.mediaDiaria}
        regiao={dadosPainel.regiaoCritica}
        delito={dadosPainel.principalDelito}
      />
      <MapaCalor pontos={dadosPainel.ocorrencias} />
      <Frame2Section />
    </div>
  );
}

export default App;