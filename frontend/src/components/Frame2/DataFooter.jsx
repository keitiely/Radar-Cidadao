// =============================================================
// DataFooter.jsx
// Rodapé de Dados — Frame 2 (e geral do dashboard)
// Exibe fonte dos dados e data da última atualização (RF06)
// =============================================================

export default function DataFooter() {
  const ultimaAtualizacao = 'Abril / 2025';
  const fonte = 'Secretaria de Segurança Pública do Distrito Federal (SSP-DF)';

  return (
    <footer style={{ background: '#f5f4f0', borderTop: '1px solid #eee', padding: '1rem 1.5rem', marginTop: '1rem' }}>
      <p style={{ fontSize: 13, fontWeight: 500, margin: '0 0 6px 0' }}>Sobre os Dados</p>
      <p style={{ fontSize: 12, color: '#666', lineHeight: 1.6, margin: '0 0 6px 0' }}>
        Os dados exibidos neste painel são provenientes do Portal de Dados Abertos da{' '}
        <strong>{fonte}</strong>. Tratam-se de registros históricos de ocorrências criminais
        disponibilizados em formato tabular (CSV). Este sistema não exibe informações em tempo real.
      </p>
      <p style={{ fontSize: 11, color: '#999', margin: 0 }}>
        Última atualização do dataset: <strong>{ultimaAtualizacao}</strong>
        &nbsp;·&nbsp;
        Dados: uso exclusivamente público, sem identificação de vítimas ou autores.
      </p>
    </footer>
  );
}