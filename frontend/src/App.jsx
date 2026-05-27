import React, { useState } from 'react';
import { HeaderPainel } from './components/Frame1/HeaderPainel';
import { FiltrosConsulta } from './components/Frame1/FiltrosConsulta';
import { CardsResumo } from './components/Frame1/CardsResumo';
import MapaCalor from './components/Frame1/MapaCalor'; // Meu mapa que já tá funcionando!
import './App.css';

function App() {
  // Criei esse estado temporário para simular o JSON que vai vir do Firebase.
  // Quando o João sem ser o baiano liberar a API com os dados tratados do Pandas pelokenas 
  // é só jogar o resultado do fetch aqui dentro do setDadosPainel.
  const [dadosPainel, setDadosPainel] = useState({
    totalGeral: 21,
    mediaDiaria: 0.2,
    regiaoCritica: "Ceilândia",
    principalDelito: "Furto",
    // Lista de pontos mockados para testar o calor do Leaflet
    ocorrencias: [
      { id: 1, tipo: "Furto", lat: -15.811, lng: -48.082 },
      { id: 2, tipo: "Roubo", lat: -15.815, lng: -48.090 },
      { id: 3, tipo: "Furto", lat: -15.810, lng: -48.075 },
    ]
  });

  return (
    <div className="painel-main-container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      
      <HeaderPainel />

      
      <FiltrosConsulta />

      
      <CardsResumo 
        total={dadosPainel.totalGeral}
        media={dadosPainel.mediaDiaria}
        regiao={dadosPainel.regiaoCritica}
        delito={dadosPainel.principalDelito}
      />

     
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h3 style={{ marginTop: 0, color: '#333', fontSize: '16px' }}>Visão Geográfica</h3>
       
        <MapaCalor pontos={dadosPainel.ocorrencias} />
      </div>
    </div>
  );
}

export default App;