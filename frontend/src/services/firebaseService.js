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
  { bairro: 'Taguatinga',   tipo: 'Roubo a Pedestre',  total: 42 },
  { bairro: 'Águas Claras', tipo: 'Roubo a Pedestre',  total: 38 },
  { bairro: 'Santa Maria',  tipo: 'Roubo a Pedestre',  total: 34 },
  { bairro: 'Ceilândia',    tipo: 'Roubo a Pedestre',  total: 31 },
  { bairro: 'Gama',         tipo: 'Roubo a Pedestre',  total: 20 },
  { bairro: 'Plano Piloto', tipo: 'Roubo a Pedestre',  total: 18 },

  { bairro: 'Taguatinga',   tipo: 'Furto de Veículo',  total: 15 },
  { bairro: 'Ceilândia',    tipo: 'Furto de Veículo',  total: 22 },
  { bairro: 'Gama',         tipo: 'Furto de Veículo',  total: 10 },
  { bairro: 'Plano Piloto', tipo: 'Furto de Veículo',  total: 8  },
  { bairro: 'Águas Claras', tipo: 'Furto de Veículo',  total: 13 },
  { bairro: 'Santa Maria',  tipo: 'Furto de Veículo',  total: 9  },

  { bairro: 'Taguatinga',   tipo: 'Tráfico de Drogas', total: 7  },
  { bairro: 'Ceilândia',    tipo: 'Tráfico de Drogas', total: 19 },
  { bairro: 'Gama',         tipo: 'Tráfico de Drogas', total: 5  },
  { bairro: 'Plano Piloto', tipo: 'Tráfico de Drogas', total: 3  },
  { bairro: 'Águas Claras', tipo: 'Tráfico de Drogas', total: 6  },
  { bairro: 'Santa Maria',  tipo: 'Tráfico de Drogas', total: 11 },
];

// =============================================================
// listaBairros
// =============================================================
export function listaBairros() {
  const bairros = [...new Set(MOCK_OCORRENCIAS.map(d => d.bairro))].sort();
  return Promise.resolve(bairros);
}

// =============================================================
// fetchResumoRegiao
// Agora filtra pelo problema selecionado
// =============================================================
export function fetchResumoRegiao(bairro, problema) {
  // Filtra por bairro E pelo problema principal selecionado
  const filtrado = MOCK_OCORRENCIAS.filter(
    d => d.bairro === bairro && d.tipo === problema
  );

  const total = filtrado.reduce((sum, d) => sum + d.total, 0);

  // Total geral do problema em todos os bairros (para calcular representatividade)
  const totalProblema = MOCK_OCORRENCIAS
    .filter(d => d.tipo === problema)
    .reduce((sum, d) => sum + d.total, 0);

  const representatividade = totalProblema > 0
    ? ((total / totalProblema) * 100).toFixed(1)
    : '0.0';

  return Promise.resolve({ total, representatividade });
}

// =============================================================
// fetchTop5Regioes
// Agora filtra pelo problema selecionado
// =============================================================
export function fetchTop5Regioes(problema) {
  const fonte = problema
    ? MOCK_OCORRENCIAS.filter(d => d.tipo === problema)
    : MOCK_OCORRENCIAS;

  const agrupado = fonte.reduce((acc, item) => {
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
// Agora filtra pelo problema selecionado
// =============================================================
export function fetchDistribuicaoCategorias(problema) {
  const fonte = problema
    ? MOCK_OCORRENCIAS.filter(d => d.tipo === problema)
    : MOCK_OCORRENCIAS;

  const agrupado = fonte.reduce((acc, item) => {
    const categoria = item.tipo.startsWith('Roubo') ? 'Roubo' : 'Furto';
    acc[categoria] = (acc[categoria] || 0) + item.total;
    return acc;
  }, {});

  return Promise.resolve(
    Object.entries(agrupado).map(([name, value]) => ({ name, value }))
  );
}

// Retorna total por bairro para o gráfico de pizza das duas regiões comparadas
export function fetchDistribuicaoPorRegioes(bairroA, bairroB, problema) {
  const fonte = MOCK_OCORRENCIAS.filter(
    d => (d.bairro === bairroA || d.bairro === bairroB) && d.tipo === problema
  );

  const agrupado = fonte.reduce((acc, item) => {
    acc[item.bairro] = (acc[item.bairro] || 0) + item.total;
    return acc;
  }, {});

  return Promise.resolve(
    Object.entries(agrupado).map(([name, value]) => ({ name, value }))
  );
}
