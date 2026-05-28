import React from 'react';

export function ExportarCSV() {
  // Criei essa lista falsa só para simular o download funcionando no navegador.
  
  const dadosParaDownload = [
    { crime: "Furto", data: "01/01/2024", regiao: "Ceilândia" },
    { crime: "Roubo", data: "02/01/2024", regiao: "Taguatinga" },
    { crime: "Furto", data: "03/01/2024", regiao: "Ceilândia" }
  ];

  
  const executarDownload = () => {
    let csvContent = "Categoria,Data,Regiao\n"; // Cabeçalho das colunas setiver mais temque adicionaar
    
    
    dadosParaDownload.forEach(item => {
      csvContent += `${item.crime},${item.data},${item.regiao}\n`;
    });

    // Código padrão para gerar o arquivo na memória do navegador e forçar o clique de download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    
    link.setAttribute("href", url);
    link.setAttribute("download", "dados_criminais.csv");
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={executarDownload}
      style={{ padding: '8px 16px', backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}
    >
      Baixar (CSV)
    </button>
  );
}