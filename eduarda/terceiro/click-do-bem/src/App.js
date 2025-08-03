import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
// Importe outras páginas conforme for criando, mas elas não estarão no menu principal

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Cadastre-se</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* Outras rotas, como de doação, podem ser acessadas via Dashboard ou links internos */}
            {/* Exemplo: <Route path="/doar" element={<DonationPage />} /> */}
            {/* Exemplo: <Route path="/pontos-coleta" element={<CollectionPointsPage />} /> */}
          </Routes>
        </main>

        <footer>
          <p>© 2025 Click do Bem. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;