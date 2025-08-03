import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage-container">
      {/* Seção Sobre o Projeto */}
      <section className="about-us-section" style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Bem-vindo ao Click do Bem!</h1>
        <p>
          Faça o Bem com Apenas um Click! Nossa missão é facilitar e incentivar doações contínuas para auxiliar pessoas em situação de vulnerabilidade, garantindo a entrega eficiente de recursos.
          Nosso objetivo é transformar a maneira como as doações são feitas, tornando-as mais acessíveis, transparentes e impactantes. Através do Click do Bem, você pode apoiar diversas causas e contribuir para um mundo melhor.
        </p>
        <p>
          Junte-se a nós nesta jornada de solidariedade!
        </p>
      </section>

      <hr /> {/* Linha divisória */}

      {/* Seção Locais de Doações de Itens */}
      <section className="collection-points-info" style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Locais de Doações de Itens</h2>
        <p>
          Para doações de alimentos, roupas, materiais escolares e outros itens, contamos com uma rede de pontos de coleta parceiros. Você pode encontrar o local mais conveniente para deixar sua contribuição.
        </p>
        <p>
          **Para ver a lista completa de pontos de coleta e seus detalhes, por favor, <Link to="/login">faça login</Link> ou <Link to="/register">cadastre-se</Link> e acesse o Dashboard.**
          Nesse momento, para uma experiência mais completa e personalizada, a visualização dos pontos de coleta detalhados e a realização de doações de itens são funcionalidades disponíveis para usuários logados, onde você poderá acompanhar suas contribuições.
        </p>
      </section>

      <hr /> {/* Linha divisória */}

      {/* Seção Doações em Dinheiro por ODS */}
      <section className="ods-donations-section" style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Apoie uma Causa: Doações em Dinheiro por ODS</h2>
        <p>
          Sua doação em dinheiro impacta diretamente objetivos globais de desenvolvimento sustentável. Escolha um dos 4 ODSs abaixo e contribua para uma organização ou grupo que atua diretamente nessa área.
        </p>

        {/* ALTERAÇÃO AQUI: Estilos para 4 colunas */}
        <div className="ods-cards-container" style={{
          display: 'flex',
          justifyContent: 'center', // Centraliza os cards no contêiner
          flexWrap: 'wrap',
          gap: '20px', // Espaçamento entre os cards
          marginTop: '30px',
          padding: '0 10px' // Um pequeno padding horizontal para não colar nas bordas
        }}>

          {/* ODS 1: Erradicação da Pobreza */}
          <div className="ods-card" style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            width: 'calc(25% - 15px)', // Ajusta a largura para 4 colunas, subtraindo parte do gap
            minWidth: '250px', // Largura mínima para evitar que fiquem muito pequenos em telas menores
            boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
          }}>
            <img src="/images/ods1.png" alt="ODS 1 Erradicação da Pobreza" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
            <h3>ODS 1: Erradicação da Pobreza</h3>
            <p>
              Apoie iniciativas que visam acabar com a pobreza em todas as suas formas e em todos os lugares, garantindo acesso a recursos e oportunidades.
            </p>
             <form action="/doar" method="GET" style={{ marginTop: '15px' }}>
              <input type="hidden" name="ods" value="1" />
              <label htmlFor="ods1_amount" style={{ display: 'block', marginBottom: '5px' }}>Valor da Doação (R$):</label>
              <input type="number" id="ods1_amount" name="amount" placeholder="Ex: 50.00" step="0.01" min="1" required style={{ width: 'calc(100% - 20px)', padding: '8px', marginBottom: '10px' }} />
              <label htmlFor="ods1_destiny" style={{ display: 'block', marginBottom: '5px' }}>Para qual ONG/Grupo (ex: 'Instituição X' ou 'Campanha Y'):</label>
              <input type="text" id="ods1_destiny" name="destiny" placeholder="Nome da instituição ou campanha" required style={{ width: 'calc(100% - 20px)', padding: '8px', marginBottom: '10px' }} />
              <button type="submit" style={{ background: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Doar para ODS 1
              </button>
            </form>
          </div>

          {/* ODS 2: Fome Zero e Agricultura Sustentável */}
          <div className="ods-card" style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            width: 'calc(25% - 15px)', // Ajustado para 4 colunas
            minWidth: '250px',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
          }}>
            <img src="src/assets/ods2.svg" alt="ODS 2 Fome Zero" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
            <h3>ODS 2: Fome Zero</h3>
            <p>
              Sua doação ajuda a combater a fome, alcançar a segurança alimentar e melhorar a nutrição de muitas pessoas ao seu redor.
            </p>
            <form action="/doar" method="GET" style={{ marginTop: '15px' }}>
              <input type="hidden" name="ods" value="2" />
              <label htmlFor="ods2_amount" style={{ display: 'block', marginBottom: '5px' }}>Valor da Doação (R$):</label>
              <input type="number" id="ods2_amount" name="amount" placeholder="Ex: 50.00" step="0.01" min="1" required style={{ width: 'calc(100% - 20px)', padding: '8px', marginBottom: '10px' }} />
              <label htmlFor="ods2_destiny" style={{ display: 'block', marginBottom: '5px' }}>Para qual ONG/Grupo (ex: 'Instituição X' ou 'Campanha Y'):</label>
              <input type="text" id="ods2_destiny" name="destiny" placeholder="Nome da instituição ou campanha" required style={{ width: 'calc(100% - 20px)', padding: '8px', marginBottom: '10px' }} />
              <button type="submit" style={{ background: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Doar para ODS 2
              </button>
            </form>
          </div>

          {/* ODS 3: Saúde e Bem-Estar */}
          <div className="ods-card" style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            width: 'calc(25% - 15px)', // Ajustado para 4 colunas
            minWidth: '250px',
            boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <img src="/images/ods3.png" alt="ODS 3 Saúde e Bem-Estar" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
            <h3>ODS 3: Saúde e Bem-Estar</h3>
            <p>
              Contribua para promover o bem-estar e uma vida saudável para todos, em todas as idades, apoiando acesso à saúde e prevenção de doenças.
            </p>
             <form action="/doar" method="GET" style={{ marginTop: '15px' }}>
              <input type="hidden" name="ods" value="3" />
              <label htmlFor="ods3_amount" style={{ display: 'block', marginBottom: '5px' }}>Valor da Doação (R$):</label>
              <input type="number" id="ods3_amount" name="amount" placeholder="Ex: 50.00" step="0.01" min="1" required style={{ width: 'calc(100% - 20px)', padding: '8px', marginBottom: '10px' }} />
              <label htmlFor="ods3_destiny" style={{ display: 'block', marginBottom: '5px' }}>Para qual ONG/Grupo (ex: 'Instituição X' ou 'Campanha Y'):</label>
              <input type="text" id="ods3_destiny" name="destiny" placeholder="Nome da instituição ou campanha" required style={{ width: 'calc(100% - 20px)', padding: '8px', marginBottom: '10px' }} />
              <button type="submit" style={{ background: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Doar para ODS 3
              </button>
            </form>
          </div>

          {/* ODS 4: Educação de Qualidade */}
          <div className="ods-card" style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            width: 'calc(25% - 15px)', // Ajustado para 4 colunas
            minWidth: '250px',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
          }}>
            <img src="/images/ods4.png" alt="ODS 4 Educação de Qualidade" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
            <h3>ODS 4: Educação de Qualidade</h3>
            <p>
              Apoie o acesso à educação inclusiva, equitativa e de qualidade, e promova oportunidades de aprendizado ao longo da vida para todos.
            </p>
             <form action="/doar" method="GET" style={{ marginTop: '15px' }}>
              <input type="hidden" name="ods" value="4" />
              <label htmlFor="ods4_amount" style={{ display: 'block', marginBottom: '5px' }}>Valor da Doação (R$):</label>
              <input type="number" id="ods4_amount" name="amount" placeholder="Ex: 50.00" step="0.01" min="1" required style={{ width: 'calc(100% - 20px)', padding: '8px', marginBottom: '10px' }} />
              <label htmlFor="ods4_destiny" style={{ display: 'block', marginBottom: '5px' }}>Para qual ONG/Grupo (ex: 'Instituição X' ou 'Campanha Y'):</label>
              <input type="text" id="ods4_destiny" name="destiny" placeholder="Nome da instituição ou campanha" required style={{ width: 'calc(100% - 20px)', padding: '8px', marginBottom: '10px' }} />
              <button type="submit" style={{ background: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Doar para ODS 4
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;