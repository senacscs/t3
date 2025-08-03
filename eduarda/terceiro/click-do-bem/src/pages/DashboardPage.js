import React from 'react';
import { Link } from 'react-router-dom';

function DashboardPage() {
  // Futuramente, aqui você poderia buscar os dados do usuário logado do Supabase
  // e exibir informações como o nome, histórico de doações, etc.

  return (
    <div>
      <h1>Bem-vindo ao seu Dashboard, Doador!</h1>
      <p>Aqui você poderá ver suas doações, pontos acumulados e explorar mais opções.</p>
      <p>Explore as funcionalidades exclusivas para doadores:</p>
      <ul>
        <li><Link to="/doar">Registrar Nova Doação (Dinheiro ou Itens)</Link></li>
        <li><Link to="/pontos-coleta">Ver Pontos de Coleta de Itens</Link></li>
        <li><Link to="/meus-pontos">Meus Vale-Pontos</Link></li>
        <li><Link to="/historico-doacoes">Meu Histórico de Doações</Link></li> {/* Nova rota futura */}
      </ul>
      {/* Adicionar um botão de logout futuramente */}
    </div>
  );
}

export default DashboardPage;