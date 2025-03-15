const sections = {
    introducao: '## Introdução\nNos últimos 20 anos, a tecnologia se tornou algo fundamental do nosso cotidiano, cada vez mais integrada com o nosso ser. Porém, mesmo que isso tenha acontecido, ainda existem pessoas de baixas classes sociais ou dificuldade de aprender sobre o assunto.\n\nO projeto tem o objetivo de entender mais as dificuldades dessas pessoas, e desenvolver um método para, além de ensinar a tecnologia para as pessoas, integrar ela com o dia a dia das mesmas. Manter todos em um pé de igualdade sobre o assunto é primordial para o avanço da sociedade e melhoria social.\n## Tema e área do conhecimento\n**Tema:** Educação sobre tecnologias atuais\n\n**Área:** Ciências humanas',
    problema: '## Problema\nComo explicar e incrementar a tecnologia no cotidiano de pessoas leigas no assunto?',
    justificativa: '## Justificativa\nHá a necessidade de desenvolver um método de ensino alternativo aos atuais para o ensino e implementação da tecnologia na vida de pessoas não inteiradas no assunto. Enquanto os métodos atuais estão ficando cada vez mais obsoletos, mais o conhecimento básico de tecnologias se torna necessário na sociedade.\n\nOs motivos para a dificuldade no aprendizado do assunto são diversos, muitas vezes relacionados a idade da pessoa, que não nasceu em uma geração com acesso constante a internet e dispositivos eletrônicos, ou sua classe social. Também existem motivos que partem da pessoa em si, como a falta de interesse no aprendizado de tecnologias e até mesmo a dificuldade de atualizar seus costumes, incrementando a tecnologia.\n\nAs tecnologias são profundamente integradas com o contexto contemporâneo. Seja no âmbito profissional ou pessoal, qualquer um pode tirar proveito do uso de eletrônicos e a internet no cotidiano. A tecnologia permite o desenvolvimento profissional mais eficiente e produtivo, e, em adição aos avanços profissionais, a comunicação com parentes distantes e o consumo de entretenimento são possíveis apenas com o conhecimento de como usar as tecnologias.\n\nAtualmente o método de ensino desses atributos não é eficiente, atrasando ou até impossibilitando o desenvolvimento do conhecimento das pessoas. O método que iremos desenvolver focaria exatamente em portar os conhecimentos que a pessoa já tem e associá-los a elementos da tecnologia atual. O método também focaria na incrementação do meio no dia a dia do indivíduo, modificando a rotina da pessoa. Essa forma seria mais eficiente de acordo com a teoria que sustenta a pesquisa.',
    objetivos: '## Objetivos\n**Objetivo Geral:**\nDesenvolver métodos de explicar e incrementar a tecnologia no cotidiano de pessoas leigas no assunto.\n\n**Objetivos específicos:**\n-  Identificar os fatores que mais atrapalham o aprendizado do uso de tecnologias.\n- Compilar métodos de ensino do uso de tecnologias.\n- Avaliar o método mais eficaz para ensinar o uso de tecnologias.\n- Criar uma aplicação web para material de assistência no processo de ensino.',
    referencial: '## Referêncial teórico\nBuscando concluir os objetivos de pesquisa para compreender da melhor maneira o tema geral da mesma visando organizá-la, foram realizadas diversas pesquisas sobre diferentes assuntos que a englobam, como a leitura e uso do suporte disponível pela Teoria Social Cognitiva, desenvolvida por Albert Bandura. Algumas de nossas fontes de pesquisa que irão auxiliar o desenvolvimento do método serão:\n- Contexto histórico\n- Metodologias de ensino já existentes\n- Características de design\n- Conceitos da psicologia',
    metodologia: '## Metodologia\nAo coletar informações relacionadas ao projeto, concluímos que o tipo de pesquisa deve ser abordado como bibliográfico e de campo, juntando teorias e dados pré-existentes e aplicando em um novo método, que corresponde ao procedimento a ser utilizado para implementação e comprovação de eficácia.\n\nDurante a coleta bibliográfica, foi considerado para seleção das leituras: Notícias que sustentem a justificativa do projeto, teorias que auxiliem no desenvolvimento e aplicação do projeto e obras que tratam sobre o assunto.\n\nPara suporte ao usuário, será desenvolvido um website de fácil acesso e simplificada para auxiliar no uso das tecnologias.',
    resultados: '## Resultados e discussões\nFoi formulado, com o auxílio de nossas fontes, que o processo de ensino da tecnologia deve ser separado em duas partes principais: o ensino da tecnologia e a aplicação no cotidiano.\n\nO ensino incrementaria diversas fontes e metodologias para fixar o conhecimento, como a Repetição espaçada e outras de uso mais geral. A aplicação da tecnologia no cotidiano, como sugere, busca entender a melhor forma de se incrementar recursos tecnológicos, como a internet e dispositivos móveis, na vida de uma pessoa a qual não usa.\n\nJunto aos resultados, iremos criar um método usando meios digitais para avaliar e regular automaticamente a forma de ensino, referente a cada pessoa. O método aplicaria os recursos do ensino relacionados a psicologia, junto a sugestões de maneiras de se incrementar a tecnologia no cotidiano.\n\nMuito se discute se a normalização da tecnologia no cotidiano será um bem benéfico para todas as faixas etárias, visto que muitas pessoas de idade têm problema para manusear a tecnologia. Talvez nunca chegue o dia em que a tecnologia mais recente tenha o impacto em todas as idades. Estamos sempre em constante evolução e, podemos perceber que hoje em dia, existem brasileiros com idade de 30 anos para cima que já estão ficando para trás nesse mundo digital.',
    referencias: '## Referências\n- THE FOURTH Industrial Revolution: what it means, how to respond: FOURTH INDUSTRIAL REVOLUTION. **World Economic Forum**, [s. l.], 14 jan. 2016. Disponível em: https://www.weforum.org/agenda/2016/01/the-fourth-industrial-revolution-what-it-means-and-how-to-respond/. Acesso em: 24 abr\n\n- MAIS de 33 milhões de brasileiros não têm acesso à internet, diz pesquisa: Segundo estudo do Instituto Locomotiva e da consultoria PwC, 71% da população com mais de 16 anos não consegue usar a internet todos os dias. Grupo é formado principalmente por pessoas negras, que estão nas classes C, D e E, e que são menos escolarizadas. **Tecnologia**, [s. l.], 21 mar. 2022. Disponível em: https://g1.globo.com/tecnologia/noticia/2022/03/21/mais-de-33-milhoes-de-brasileiros-nao-tem-acesso-a-internet-diz-pesquisa.ghtml. Acesso em: 17 abr. 2023.\n\n- BANDURA, Albert et al. **Teoria Social Cognitiva** Conceitos Básicos. [S. l.: s. n.], 2008. 86 p. ISBN 978-85-363-1117-3. E-book.\n\n- 10 Effective Study Techniques to Try This Year. **University of St. Augustine for Health Sciences**, [s. l.], 29 jan. 2020. Disponível em: https://www.usa.edu/blog/study-techniques/. Acesso em: 8 maio 2023.'
}

function renderContent(content) {
    const contentElement = document.getElementById('content')

    // Starts the fade animation
    contentElement.style.opacity = 0

    // Applies the content and returns the opacity after 200ms
    setTimeout(() => {
        contentElement.innerHTML = marked.parse(content)
        contentElement.style.opacity = 1
    }, 200);
}

function renderContentBySectionName(sectionName) {
    const section = sections[sectionName]
    renderContent(section)
}

function handleNavbar() {
    const buttons = document.querySelectorAll('nav button')

    // Handles every nav button when clicking
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            renderContentBySectionName(
                button.getAttribute('data-section')
            )

            setTimeout(() => {
                window.location.href = '#content'
            }, 200);
        })
    })
}

renderContent(sections.introducao)
handleNavbar()
