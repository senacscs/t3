import React from 'react';
import { Link } from 'react-router-dom';

function DashboardPage() {
  // Futuramente, aqui você poderia buscar os dados do usuário logado do Supabase
  // e exibir informações como o nome, histórico de doações, etc.

  return (
    <div>
      <h1>Bem-vindo ao seu Dashboard, Doador!</h1>
      <p>Aqui você poderá ver suas doações, pontos acumulados e muito mais.</p>
      <p>Explore as opções:</p>
      <ul>
        <li><Link to="/doar">Fazer uma Doação</Link></li>
        <li><Link to="/meus-pontos">Meus Vale-Pontos</Link></li>
        <li><Link to="/pontos-coleta">Pontos de Coleta</Link></li>
      </ul>
      {/* Adicionar um botão de logout futuramente */}
    </div>
  );
}

export default DashboardPage;