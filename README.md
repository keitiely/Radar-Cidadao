# Radar Cidadão

Sistema web para visualização e análise espacial de dados criminais abertos do Distrito Federal através de mapas de calor, gráficos interativos e dashboards analíticos.

---

## 📌 Sobre o Projeto

O projeto **Radar Cidadão** surgiu com o objetivo de transformar dados públicos complexos da segurança pública em informações acessíveis para a população.

Atualmente, órgãos como a SSP-DF disponibilizam ocorrências criminais em arquivos CSV extensos e de difícil interpretação. O Radar Cidadão busca resolver esse problema convertendo esses dados em visualizações intuitivas e interativas.

A plataforma permite:

- Visualização de mapas de calor (Heatmaps)
- Filtragem por tipo de crime
- Filtragem temporal
- Dashboard com indicadores
- Exportação de dados tratados
- Análise geográfica das ocorrências

---

## 🎯 Objetivo

Facilitar o acesso e a compreensão dos dados de segurança pública do Distrito Federal através de uma interface moderna, responsiva e acessível.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React
- JavaScript
- HTML5
- CSS3

### Backend / Processamento
- Python
- Pandas

### Banco de Dados
- Firebase
- Cloud Firestore

### Bibliotecas Auxiliares
- Geopy
- Shapely

---

## 🏗️ Arquitetura

O sistema utiliza uma arquitetura baseada em MVC adaptado em camadas:

### ETL (Pipeline de Dados)
Responsável por:
- Extração dos CSVs
- Limpeza de dados
- Remoção de dados sensíveis
- Tratamento geográfico
- Geração dos dados otimizados

### Backend
Utiliza Firebase/Firestore como camada de persistência e consulta dos dados.

### Frontend
Aplicação React responsável pela renderização:
- Mapas de calor
- Cards informativos
- Gráficos interativos
- Filtros dinâmicos

---

## 🔒 Regras de Segurança e Privacidade

O sistema:

- NÃO armazena dados pessoais
- NÃO exibe nomes, CPFs ou endereços
- NÃO utiliza dados em tempo real
- Utiliza apenas bases oficiais e públicas
- Descarta coordenadas inválidas automaticamente

---

## 📊 Funcionalidades

- [x] Leitura de arquivos CSV
- [x] Limpeza automática de dados
- [x] Filtros por tipo de crime
- [x] Filtros por período
- [x] Heatmap interativo
- [x] Dashboard analítico
- [x] Exportação de dados
- [x] Interface responsiva

---

## 📁 Estrutura Sugerida do Projeto

```bash
RadarCidadao/
│
├── backend/
│   ├── etl/
│   ├── services/
│   └── utils/
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── components/
│
├── data/
│   ├── raw/
│   └── processed/
│
├── docs/
│
├── .gitignore
├── README.md
└── requirements.txt
