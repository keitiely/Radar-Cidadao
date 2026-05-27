// =============================================================
// firebaseService.js
// Ponto de integração com o Firebase / Cloud Firestore
// ---------------------------------------------------------------
// INSTRUÇÕES PARA O BACKEND (João Pedro):
//   1. Instale: npm install firebase
//   2. Substitua o objeto firebaseConfig com as credenciais do projeto
//   3. Descomente as funções reais abaixo e remova os dados mock
// =============================================================

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "SUA_API_KEY",
//   authDomain: "SEU_PROJETO.firebaseapp.com",
//   projectId: "SEU_PROJETO_ID",
//   storageBucket: "SEU_PROJETO.appspot.com",
//   messagingSenderId: "SEU_SENDER_ID",
//   appId: "SEU_APP_ID"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// =============================================================
// DADOS MOCK — usados enquanto o backend não está pronto
// Substitua por chamadas reais ao Firestore quando disponível
// =============================================================

const MOCK_OCORRENCIAS = [
  { bairro: 'Taguatinga', tipo: 'Roubo', total: 42 },
  { bairro: 'Águas Claras', tipo: 'Roubo', total: 38 },
  { bairro: 'Santa Maria', tipo: 'Furto', total: 34 },
  { bairro: 'Ceilândia', tipo: 'Roubo a Pedestre', total: 31 },
  { bairro: 'Gama', tipo: 'Furto', total: 20 },
  { bairro: 'Plano Piloto', tipo: 'Furto de Veículo', total: 18 },
  { bairro: 'Ceilândia', tipo: 'Roubo', total: 10 },
  { bairro: 'Plano Piloto', tipo: 'Roubo', total: 3 },
];

// =============================================================
// listaBairros
// Retorna lista de bairros disponíveis para os dropdowns
// =============================================================
export function listaBairros() {
  // TODO (João Pedro): substituir por query Firestore
  const bairros = [...new Set(MOCK_OCORRENCIAS.map(d => d.bairro))].sort();
  return Promise.resolve(bairros);
}

// =============================================================
// fetchResumoRegiao
// Retorna total e problema principal de uma região específica
// =============================================================
export function fetchResumoRegiao(bairro) {
  // TODO (João Pedro): substituir por query Firestore filtrando por bairro
  const daBairro = MOCK_OCORRENCIAS.filter(d => d.bairro === bairro);
  const total = daBairro.reduce((sum, d) => sum + d.total, 0);
  const totalGeral = MOCK_OCORRENCIAS.reduce((sum, d) => sum + d.total, 0);
  const representatividade = totalGeral > 0 ? ((total / totalGeral) * 100).toFixed(1) : '0.0';
  const problemaPrincipal = [...daBairro].sort((a, b) => b.total - a.total)[0]?.tipo || '—';
  return Promise.resolve({ total, representatividade, problemaPrincipal });
}

// =============================================================
// fetchTop5Regioes
// Retorna os 5 bairros com mais ocorrências no período filtrado
// =============================================================
export function fetchTop5Regioes() {
  // TODO (João Pedro): substituir por query Firestore com agregação
  const agrupado = MOCK_OCORRENCIAS.reduce((acc, item) => {
    acc[item.bairro] = (acc[item.bairro] || 0) + item.total;
    return acc;
  }, {});
  return Promise.resolve(
    Object.entries(agrupado)
      .map(([bairro, total]) => ({ bairro, total }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 5)
  );
}

// =============================================================
// fetchDistribuicaoCategorias
// Retorna totais por tipo de crime para o gráfico de pizza
// =============================================================
export function fetchDistribuicaoCategorias() {
  // TODO (João Pedro): substituir por query Firestore agrupando por categoria
  const agrupado = MOCK_OCORRENCIAS.reduce((acc, item) => {
    const categoria = item.tipo.startsWith('Roubo') ? 'Roubo' : 'Furto';
    acc[categoria] = (acc[categoria] || 0) + item.total;
    return acc;
  }, {});
  return Promise.resolve(
    Object.entries(agrupado).map(([name, value]) => ({ name, value }))
  );
}