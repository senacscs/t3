import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient'; // Importa o cliente Supabase
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Consultar a tabela 'users' para encontrar o usuário pelo email
      const { data, error: selectError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single(); // Espera apenas um resultado

      if (selectError && selectError.code !== 'PGRST116') { // PGRST116 é "no rows found"
        setError('Erro ao buscar usuário: ' + selectError.message);
        setLoading(false);
        return;
      }

      if (!data) {
        setError('E-mail ou senha incorretos.');
        setLoading(false);
        return;
      }

      // *** IMPORTANTE: Em um cenário real, você COMPARARIA A SENHA HASH AQUI ***
      // Por simplicidade e demonstração, vamos comparar a senha em texto puro por AGORA.
      // NUNCA FAÇA ISSO EM PRODUÇÃO! Use uma função de comparação de hash segura.
      // Ex: const passwordMatch = await bcrypt.compare(password, data.password);
      const passwordMatch = (password === data.password); // APENAS PARA DEMONSTRAÇÃO!

      if (passwordMatch) {
        alert('Login realizado com sucesso!');
        // Em um sistema real, você guardaria o ID do usuário em um Context/State global
        // ou localStorage para manter o usuário logado.
        // Por agora, vamos apenas redirecionar.
        navigate('/dashboard'); // Redireciona para a página de dashboard
      } else {
        setError('E-mail ou senha incorretos.');
      }

    } catch (err) {
      setError('Ocorreu um erro inesperado ao fazer login.');
      console.error('Erro de login:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login Simples</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      <p>
        Não tem uma conta? <Link to="/RegisterPage">Cadastre-se aqui</Link>
      </p>
    </div>
  );
}

export default LoginPage;