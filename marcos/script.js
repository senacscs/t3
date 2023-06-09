const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const weekDay = date.getDay()
const day = date.getDate()

const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro'
]
const weekDays = [
    'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'
]
let monthWritten = months[month]
let weekDayWritten = weekDays[weekDay]

const dateDisplay = document.getElementById('date')

var text = `Senac Santa Cruz do Sul, ${weekDayWritten}, ${day} de ${monthWritten}, ${year}`;

dateDisplay.innerHTML = text

const articles = [
  {
    path: './indicacoesfront',
    title: 'Indicações Front-End',
    text: 'Depois de seu professor ter pedido a entrega de um trabalho relacionado à indicações sobre conteúdo front-end, o estudante de 16 anos desenvolveu uma página em HTML muito mal feita, e entregou para o professor, o qual apresentou para a turma toda. O trabalho foi produzido e entregue ao longo dos dias de 12 de Abril até 19 de abril. De acordo com testemunhas, a página ficou ruim em diversos sentidos, mas teve seus erros relevados pelo professor, o qual mesmo assim, devolveu com uma boa menção.',
    img: './assets/sample.jpg',
    month: '4',
  },
  {
    path: './projetopp',
    title: 'Projeto de Pesquisa',
    text: 'Em grupo, alunos do primeiro ano do ensino médio foram desafiados com a atividade da criação de um projeto de pesquisa completo, estruturado com todas as etapas padrões de uma pesquisa. O projeto foi feito por Marcos, Tito e Vitor e foi entregue dia 17/05/2022.',
    img: './assets/projetopp.png',
    month: '5',
  },
  {
    path: './oficinas',
    title: 'Oficinas do Técnico',
    text: 'Em vários grupos, os alunos do primeiro ano do ensino médio apresentaram oficinas, durante a aula do técnico. A tarefa teve o objetivo de ampliar o conhecimento técnico dos alunos através de workshops realizados pelos próprios, que durante um tempo determinado se auxiliaram e criaram projetos que estavam relacionados a alguma ferramenta ou conceito de programação, ligada à HTML, CSS e JS.',
    img: './assets/sample.jpg',
    month: '6',
  },
  {
    path: "../tito/carrinho/",
    title: "Carrinho de Rolimã",
    text: "Carrinho de Rolimã feito em grupo para o dia 24/06. Foi feito como uma atividade didática de idealização, produção e desenvolvimento do carrinho. Os integrantes do grupo eram: Rodrigo, Tito, Vitor, Marcos, Gabriel L e João.",
    img: "./assets/sample.jpg",
    month: "6",
  },
  {
    path: './fibonacci',
    text: "Em uma aula de tecnologia do Ensino Médio, um aluno teve de personalizar uma animação que representa a famosa Sequência de Fibonacci. Com seus conhecimentos técnicos, o estudante adicionou um toque especial à tarefa. Durante a aula de informática + matemática, os professores apresentaram aos alunos o conceito da Sequência de Fibonacci, um conjunto numérico no qual cada termo é a soma dos dois anteriores. Encorajando-os a explorar sua criatividade, o professor propôs que eles utilizassem ferramentas de animação para visualizar essa sequência matemática em ação.",
    title: 'Sequência de Fibonacci',
    img: './assets/sample.jpg',
    month: '7'
  },
  {
    path: './ods',
    text: "Nos componentes de Técnico e Projeto Profissional foi realizado uma atividade relacionado aos Objetivos de Desenvolvimento Sustentável, da ONU. A atividade foi composta de uma criação de um website para expor o conteúdo e um texto autoral sobre o assunto. Além disso foram pesquisados e anexados vídeos relacionados ao assunto.",
    title: "Objetivo de Desenvolvimento Sustentável",
    img: "./assets/sample.jpg",
    month: "7"
  }
];

articles.forEach((article) => {
  const pathElement = document.querySelector('.content')
  const art = document.createElement('article')
  const h2 = document.createElement('h2')
  const img = document.createElement('img')
  const p = document.createElement('p')
  
  console.log(article)
  art.classList.add('article')
  art.setAttribute("data-month", article.month)
  art.setAttribute('onclick', `window.location.href='${article.path}'`)

  const h2text = document.createTextNode(article.title)
  const ptext = document.createTextNode(article.text)
  h2.classList.add('title')
  h2.appendChild(h2text)
  p.appendChild(ptext)

  img.setAttribute('src', article.img)

  art.appendChild(h2)
  art.appendChild(img)
  art.appendChild(p)

  pathElement.appendChild(art)
})

const monthElements = document.querySelectorAll(".month");
const articleElements = document.querySelectorAll(".article");
const showAllButton = document.querySelector("#show-all");
  
monthElements.forEach((monthElement) => {
    monthElement.addEventListener("click", () => {
        monthElements.forEach((element) => {
            element.classList.remove('active');
        });
        monthElement.classList.add('active');

        const selectedMonth = monthElement.dataset.month;
      
        articleElements.forEach((articleElement) => {
        const articleMonth = articleElement.dataset.month;
        
        if (selectedMonth == articleMonth) {
          articleElement.style.display = "block";
        } else {
          articleElement.style.display = "none";
        }
      });
    });
  });
showAllButton.addEventListener("click", () => {
    articleElements.forEach((articleElement) => {
        articleElement.style.display = "block";
    });
  });
  

  