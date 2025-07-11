import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient'; // Importa o cliente Supabase
import { useNavigate, Link} from 'react-router-dom';
// Importe 'bcryptjs' se for fazer hash de senhas no frontend (NÃO RECOMENDADO DIRETAMENTE NO CLIENTE)
// import bcrypt from 'bcryptjs';

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
      // *** IMPORTANTE: Em um cenário real, você FARIA O HASH da senha aqui ***
      // Por simplicidade e demonstração, vamos salvar a senha em texto puro por AGORA.
      // NUNCA FAÇA ISSO EM PRODUÇÃO! Use uma função de hash segura.
      // Ex: const hashedPassword = bcrypt.hashSync(password, 10);
      const hashedPassword = password; // APENAS PARA DEMONSTRAÇÃO!

      // Tentar inserir o novo usuário na tabela 'users'
      const { data, error: insertError } = await supabase
        .from('users')
        .insert({
          email: email,
          password: hashedPassword, // Lembre-se do risco de segurança!
        });

      if (insertError) {
        // Verifica se o erro é de e-mail já existente (ex: código de erro 23505 para unique_violation)
        if (insertError.code === '23505' && insertError.message.includes('unique_violation')) {
            setError('Este e-mail já está cadastrado.');
        } else {
            setError(insertError.message);
        }
      } else {
        alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
        navigate('/login'); // Redireciona para a página de login após o cadastro
      }
    } catch (err) {
      setError('Ocorreu um erro inesperado ao cadastrar.');
      console.error('Erro de cadastro:', err);
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