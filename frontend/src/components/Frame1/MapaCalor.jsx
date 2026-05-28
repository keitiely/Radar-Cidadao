import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat'; // Importando a extensão de calor


function CamadaDeCalor({ pontos }) {
  const mapa = useMap(); 

  useEffect(() => {
    if (!mapa || !pontos) return;

    
    const pontosFormatados = pontos.map(p => [p.lat, p.lng, 0.9]); 

    
    const camadaCalor = L.heatLayer(pontosFormatados, {
      radius: 25,
      blur: 15,
      maxZoom: 15
    }).addTo(mapa); // Adiciono o borrão de calor por cima do mapa

    // Função de limpeza: se os filtros mudarem, apago o calor antigo para desenhar o novo
    return () => {
      mapa.removeLayer(camadaCalor);
    };
  }, [mapa, pontos]); // Executa de novo sempre que o mapa carregar ou os pontos mudarem

  return null; 
}

function MapaCalor({ pontos }) {
  // Coordenadas centrais de Brasília/DF para o mapa começar no lugar certo
  const posicaoCentral = [-15.793889, -47.882778];

  return (
    <MapContainer
      center={posicaoCentral}
      zoom={11} // Abaixei um pouco o zoom para dar para enxergar Ceilândia/Taguatinga na mesma tela se mudar a gente mudaa
      scrollWheelZoom={true}
      style={{ height: '400px', width: '100%', borderRadius: '8px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      
      <CamadaDeCalor pontos={pontos} />
    </MapContainer>
  );
}

export default MapaCalor;