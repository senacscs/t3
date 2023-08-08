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


const header = document.getElementById('header') 
const title = document.getElementById('title')
const dropdown = document.getElementById('dropdown')

function show() {
    console.log(header.className)
    if (title.className === 'active') {
        title.classList.remove('active')
        title.classList.add('hidden')

        dropdown.classList.add('active')
        dropdown.classList.remove('hidden')
    }
    else {
        title.classList.add('active')
        title.classList.remove('hidden')

        dropdown.classList.remove('active')
        dropdown.classList.add('hidden')
    }
}

const newsArticles =[
    {
      path: './indicacoesfront',
      title: 'Indicações Front-End',
      text: 'Depois de seu professor ter pedido a entrega de um trabalho relacionado à indicações sobre conteúdo front-end, o estudante de 16 anos desenvolveu uma página em HTML muito mal feita, e entregou para o professor, o qual apresentou para a turma toda. O trabalho foi produzido e entregue ao longo dos dias de 12 de Abril até 19 de abril. De acordo com testemunhas, a página ficou ruim em diversos sentidos, mas teve seus erros relevados pelo professor, o qual mesmo assim, devolveu com uma boa menção.',
      img: './assets/sample.jpg',
      month: '4',
      date: 'Abril de 2023'
    },
    {
      path: './projetopp',
      title: 'Projeto de Pesquisa',
      text: 'Em grupo, alunos do primeiro ano do ensino médio foram desafiados com a atividade da criação de um projeto de pesquisa completo, estruturado com todas as etapas padrões de uma pesquisa. O projeto foi feito por Marcos, Tito e Vitor e foi entregue dia 17/05/2022.',
      img: './assets/projetopp.png',
      month: '5',
      date: "Maio de 2023"
    },
    {
      path: './oficinas',
      title: 'Oficinas do Técnico',
      text: 'Em vários grupos, os alunos do primeiro ano do ensino médio apresentaram oficinas, durante a aula do técnico. A tarefa teve o objetivo de ampliar o conhecimento técnico dos alunos através de workshops realizados pelos próprios, que durante um tempo determinado se auxiliaram e criaram projetos que estavam relacionados a alguma ferramenta ou conceito de programação, ligada à HTML, CSS e JS.',
      img: './assets/sample.jpg',
      month: '6',
      date: 'Junho de 2023'
    },
    {
      path: "../tito/carrinho/",
      title: "Carrinho de Rolimã",
      text: "Carrinho de Rolimã feito em grupo para o dia 24/06. Foi feito como uma atividade didática de idealização, produção e desenvolvimento do carrinho. Os integrantes do grupo eram: Rodrigo, Tito, Vitor, Marcos, Gabriel L e João.",
      img: "./assets/sample.jpg",
      month: "6",
      date: "Junho de 2023"
    },
    {
      path: './fibonacci',
      text: "Em uma aula de tecnologia do Ensino Médio, um aluno teve de personalizar uma animação que representa a famosa Sequência de Fibonacci. Com seus conhecimentos técnicos, o estudante adicionou um toque especial à tarefa. Durante a aula de informática + matemática, os professores apresentaram aos alunos o conceito da Sequência de Fibonacci, um conjunto numérico no qual cada termo é a soma dos dois anteriores. Encorajando-os a explorar sua criatividade, o professor propôs que eles utilizassem ferramentas de animação para visualizar essa sequência matemática em ação.",
      title: 'Sequência de Fibonacci',
      img: './assets/sample.jpg',
      month: '7',
      date: "Julho de 2023"
    },
    {
      path: '../tito/ods/',
      text: "Nos componentes de Técnico e Projeto Profissional foi realizado uma atividade relacionado aos Objetivos de Desenvolvimento Sustentável, da ONU. A atividade foi composta de uma criação de um website para expor o conteúdo e um texto autoral sobre o assunto. Além disso foram pesquisados e anexados vídeos relacionados ao assunto.",
      title: "Objetivo de Desenvolvimento Sustentável",
      img: "./assets/sample.jpg",
      month: "8",
      date: "07 de Agosto de 2023"
    }
  ];

function getRandomSize(priority) {
    if (priority > 450){
        return "large"
    } 
    const sizes = ["small", "medium"];
    return sizes[Math.floor(Math.random() * sizes.length)];
}

function getRandomPosition() {
    const positions = ["left", "center", "right"];
    return positions[Math.floor(Math.random() * positions.length)];
}

function getRandomHighlight() {
    return Math.random() < 0.5 ? "highlight" : "";
}

function createNewspaperArticle(article) {
    const articlePriority = article.text.length
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");
    articleElement.classList.add(getRandomSize(articlePriority));
    articleElement.classList.add(getRandomPosition());

    const titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.innerText = article.title;

    const textElement = document.createElement("div");
    textElement.innerText = article.text;

    const dateElement = document.createElement("div");
    dateElement.classList.add("date");
    dateElement.innerText = article.date;

    const imageElement = document.createElement("img");
    imageElement.src = article.img;
    imageElement.alt = article.title;

    const month = article.month
    articleElement.setAttribute("data-month", month);

    const path = article.path
    articleElement.setAttribute("data-path", article.path);

    articleElement.appendChild(titleElement);
    // articleElement.appendChild(imageElement);
    articleElement.appendChild(textElement);
    articleElement.appendChild(dateElement);

    articleElement.addEventListener("click", () => {
        const path = articleElement.getAttribute("data-path");
        if (path) {
            window.location.href = path;
        }
    });

    return articleElement;
}
document.addEventListener("DOMContentLoaded", () => {
    const newspaperContainer = document.getElementById('container');

    newsArticles.forEach(article => {
        const newspaperArticle = createNewspaperArticle(article);
        newspaperContainer.appendChild(newspaperArticle);
    });
});



dropdown.addEventListener("change", (event) => {
    const articles = document.querySelectorAll('.article')
    const selectedMonth = event.target.value;
    console.log(selectedMonth)

    articles.forEach((articleElement) => {
        const articleMonth = articleElement.getAttribute('data-month'); // Use getAttribute para obter o valor do atributo
        
        
        if (selectedMonth === articleMonth || selectedMonth === 'all') {
            articleElement.style.display = "block";
        } else {
            articleElement.style.display = "none";
        }
    });
});


