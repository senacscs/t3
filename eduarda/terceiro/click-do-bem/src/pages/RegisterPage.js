import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient'; // Importa o cliente Supabase
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError('As senhas não coincidem!');
      setLoading(false);
      return;
    }

    try {
      // 1. Tentar registrar o usuário com o método de autenticação do Supabase
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (authError) {
        // Tratar erros de autenticação (email já existe, senha fraca, etc.)
        setError(authError.message);
        setLoading(false);
        return; // Sai da função se houver erro de autenticação
      }

      // Se o authData.user for null, pode ser que o Supabase exija confirmação de e-mail
      // antes de retornar o usuário logado. Isso depende das suas configurações de Auth no Supabase.
      if (!authData.user) {
        alert('Cadastro realizado! Por favor, verifique seu e-mail para confirmar a conta.');
        // Pode ser que você queira navegar para uma página de "Verificar Email"
        navigate('/check-email');
        setLoading(false);
        return;
      }

      // 2. Se a autenticação foi bem-sucedida e o usuário está disponível (não precisa de confirmação de email ou já confirmou):
      //    Agora, você pode inserir o perfil do usuário na sua tabela 'public.users'.
      //    É CRÍTICO que o ID da linha inserida seja o mesmo ID do usuário autenticado (authData.user.id).
      const { error: insertError } = await supabase
        .from('users')
        .insert([
          {
            id: authData.user.id, // O ID do usuário autenticado do Supabase Auth
            email: email,
            // Adicione outros campos iniciais que sua tabela 'users' precise, se houver
            // Por exemplo: name: 'Novo Usuário',
          },
        ]);

      if (insertError) {
        // Se houver um erro aqui, provavelmente é a política de RLS da sua tabela 'users'
        // ou algum conflito de chave primária/única.
        setError('Erro ao criar o perfil do usuário: ' + insertError.message);
        // Opcional: Se a inserção do perfil falhar mas a autenticação tiver sucesso,
        // talvez você queira reverter a autenticação (supabase.auth.signOut()) ou
        // registrar o erro para tratamento posterior.
        console.error('Erro ao inserir perfil:', insertError);
      } else {
        alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
        navigate('/login'); // Redireciona para a página de login após o cadastro
      }

    } catch (err) {
      setError('Ocorreu um erro inesperado ao cadastrar.');
      console.error('Erro de cadastro geral:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Cadastro Simples</h1>
      <form onSubmit={handleRegister}>
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
        <div>
          <label htmlFor="confirmPassword">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
      <p>
        Já tem uma conta? <Link to="/LoginPage">Faça login aqui</Link>
      </p>
    </div>
  );
}

export default RegisterPage;