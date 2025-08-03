import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useNavigate, useLocation } from 'react-router-dom'; // Importe useLocation

function DonationPage() {
  const [donationType, setDonationType] = useState('Dinheiro'); // Default para dinheiro
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [targetOrg, setTargetOrg] = useState(''); // Nova variável para a organização/grupo alvo
  const [odsGoal, setOdsGoal] = useState(''); // Nova variável para o ODS
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation(); // Hook para acessar a URL e seus parâmetros

  // Efeito para preencher o formulário se vier da HomePage com parâmetros de ODS
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const odsParam = params.get('ods');
    const amountParam = params.get('amount');
    const destinyParam = params.get('destiny');

    if (odsParam) {
      setOdsGoal(odsParam);
      // Mapear número do ODS para um nome mais legível, se desejar
      const odsMap = {
        '1': 'Erradicação da Pobreza',
        '2': 'Fome Zero e Agricultura Sustentável',
        '3': 'Saúde e Bem-Estar',
        '4': 'Educação de Qualidade',
      };
      setDescription(`Doação para ODS ${odsParam}: ${odsMap[odsParam] || 'Não Especificado'}`);
    }
    if (amountParam) {
      setAmount(amountParam);
    }
    if (destinyParam) {
      setTargetOrg(destinyParam);
    }
  }, [location]); // Roda sempre que a URL muda

  const handleDonationSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Validar dados
    if (donationType === 'Dinheiro' && (parseFloat(amount) <= 0 || !targetOrg)) {
      setMessage({ type: 'error', text: 'Para doação em dinheiro, informe um valor válido e para qual ONG/Grupo.' });
      setLoading(false);
      return;
    }
    if (donationType === 'Itens' && !description) {
        setMessage({ type: 'error', text: 'Para doação de itens, por favor, descreva os itens.' });
        setLoading(false);
        return;
    }

    // Simular cálculo de pontos (você pode ajustar a lógica depois)
    let points = 0;
    if (donationType === 'Dinheiro') {
      points = Math.floor(parseFloat(amount) / 10); // Ex: 1 ponto a cada R$10
    } else if (donationType === 'Itens') { // Assumindo 'Itens' como tipo de doação para outros
      points = 5; // Ex: 5 pontos por doação de itens
    }

    try {
      // Em um cenário real, você buscaria o user_id do usuário logado
      // const { data: { user } } = await supabase.auth.getUser();
      // const userId = user ? user.id : null;
      // Por enquanto, vamos simular um userId ou deixar nulo se não houver autenticação "real" ainda
      const userId = null; // Ou um ID de teste temporário se quiser vincular

      const { error } = await supabase
        .from('donations')
        .insert({
          user_id: userId,
          type: donationType,
          amount: donationType === 'Dinheiro' ? parseFloat(amount) : null,
          description: description,
          target_organization: targetOrg, // Salvar a organização/grupo
          ods_goal: odsGoal, // Salvar o ODS associado
          points_earned: points,
          status: 'Pendente',
        });

      if (error) {
        setMessage({ type: 'error', text: 'Erro ao registrar doação: ' + error.message });
      } else {
        setMessage({ type: 'success', text: `Doação de ${donationType} registrada com sucesso! Você ganhou ${points} vale-pontos!` });
        // Limpar formulário
        setDonationType('Dinheiro'); // Volta ao padrão
        setAmount('');
        setDescription('');
        setTargetOrg('');
        setOdsGoal('');

        // Opcional: Redirecionar para dashboard ou página de sucesso
        // setTimeout(() => navigate('/dashboard'), 2000);
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Ocorreu um erro inesperado.' });
      console.error('Erro ao processar doação:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Realizar Doação</h1>
      <p>
        Use este formulário para registrar sua doação. Se for uma doação em dinheiro vinda dos ODS,
        os campos serão pré-preenchidos. Para doações de itens, escolha a opção adequada.
      </p>

      <form onSubmit={handleDonationSubmit}>
        <div>
          <label htmlFor="donationType">Tipo de Doação:</label>
          <select
            id="donationType"
            value={donationType}
            onChange={(e) => setDonationType(e.target.value)}
            required
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Itens">Itens (Alimentos, Roupas, etc.)</option>
          </select>
        </div>

        {donationType === 'Dinheiro' && (
          <>
            <div>
              <label htmlFor="amount">Valor (R$):</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Ex: 50.00"
                step="0.01"
                required
              />
            </div>
            <div>
              <label htmlFor="targetOrg">Para qual ONG/Grupo:</label>
              <input
                type="text"
                id="targetOrg"
                value={targetOrg}
                onChange={(e) => setTargetOrg(e.target.value)}
                placeholder="Nome da instituição ou campanha"
                required
              />
            </div>
            {odsGoal && (
                <div>
                    <label>ODS Associado:</label>
                    <p>{`ODS ${odsGoal}: ${
                        {
                            '1': 'Erradicação da Pobreza',
                            '2': 'Fome Zero e Agricultura Sustentável',
                            '3': 'Saúde e Bem-Estar',
                            '4': 'Educação de Qualidade',
                        }[odsGoal] || 'Não Especificado'
                    }`}</p>
                </div>
            )}
            {/* A descrição para doação em dinheiro será preenchida automaticamente com o ODS */}
            <input type="hidden" value={description} onChange={(e) => setDescription(e.target.value)} />
          </>
        )}

        {donationType === 'Itens' && (
            <>
                <div>
                    <label htmlFor="description">Descrição dos Itens:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Ex: 5kg de arroz, 3 camisas, cadernos..."
                        required
                    ></textarea>
                </div>
                <p>
                    Para doações de itens, você encontrará os pontos de coleta no seu Dashboard após o login.
                </p>
            </>
        )}

        {message && (
          <p style={{ color: message.type === 'error' ? 'red' : 'green' }}>
            {message.text}
          </p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Confirmar Doação'}
        </button>
      </form>

      {/* Links para outras páginas, se o usuário estiver logado */}
      {/* Este link será movido para o Dashboard para usuários logados */}
      {/* <p>
        <Link to="/pontos-coleta">Ver Pontos de Coleta</Link>
      </p> */}
    </div>
  );
}

export default DonationPage;