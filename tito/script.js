const activitiesStorage = [
  {
    name: "Indicações Front-End",
    subject: "Técnico",
    image: "indicacoes.svg",
    date: new Date(2023, 3, 24),
    url: "tito/indicacoesfront",
    instructions:
      "Criar um website sobre conteúdos relacionados a front-end, contendo: site de conteúdos, canal do Youtube, influenciador, tutorial e podcast.",
  },
  {
    name: "Projeto de Pesquisa",
    subject: "Projeto Profissional",
    image: "projeto.svg",
    date: new Date(2023, 5, 15),
    url: "tito/projetopp",
    instructions:
      "Criar um website para mostrar as diferentes seções da pesquisa.",
  },
  {
    name: "Oficinas",
    subject: "Técnico",
    image: "oficinas.svg",
    date: new Date(2023, 5, 29),
    url: "tito/oficinas",
    instructions: "Oficinas que pretendem desenvolver algum conceito relacionado ao desenvolvimento web.",
  },
  {
    name: "Carrinho de rolimã",
    subject: "Física",
    image: "carrinho.svg",
    date: new Date(2023, 6, 24),
    url: "tito/carrinho",
    instructions: "Site para mostrar o processo de criação do nosso carrinho de rolimã.",
  },
  {
    name: 'Fibonacci',
    subject: 'Matemática',
    image: 'fibonacci.svg',
    date: new Date(2023, 6, 30),
    url: "tito/fibonacci",
    instructions: "Demonstração do retângulo dourado usando apenas HTML e CSS.",
  },
  {
    name: 'ODS',
    subject: 'Projeto Profissional',
    image: 'ods.svg',
    date: new Date(2023, 8, 30),
    url: '/marcos/ods',
    instructions: "Site contando um pouco mais sobre a ODS 2 - Fome Zero e Agricultura Sustentável.",
  },
  {
    name: 'Anúbis',
    subject: 'História',
    image: 'anubis.svg',
    date: new Date(2023, 8, 29),
    url: '/bruno/anubis',
    instructions: "Informações e um quiz sobre o deus do Antigo Egito Anúbis.",
  },
  {
    name: 'LinkeMusic',
    subject: 'Técnico',
    image: 'linkemusic.svg',
    date: new Date(2023, 9, 19),
    url: '/tito/linkemusic/',
    instructions: "Protótipo para plataforma LinkeMusic.",
  },
  {
    name: 'Algoritmos em Javascript',
    subject: 'Técnico',
    image: 'ptjs.svg',
    date: new Date(2023, 9, 25),
    url: '/tito/ptjs/',
    instructions: "Algoritmos de Portugol adaptados para Javascript."
  },
  {
    name: 'Jogo da velha',
    subject: 'Técnico',
    image: 'jogojs.svg',
    date: new Date(2023, 10, 17),
    url: '/tito/jogojs/',
    instructions: "Implementação de jogo da velha feito em Javascript."
  },
  {
    name: 'Projeto de pesquisa',
    subject: 'Projeto Profissional',
    image: 'projeto.svg',
    date: new Date(2023, 11, 23),
    url: '/tito/projeto/',
    instructions: "Adaptação do projeto de pesquisa Análise de Satisfação de Clientes."
  },
  {
    name: 'Currículo',
    subject: 'Projeto Profissional',
    image: 'curriculo.svg',
    date: new Date(2023, 11, 27),
    url: '/tito/curriculo/',
    instructions: "Currículo feito com tecnologias front-end."
  },
];

const activitiesElement = document.getElementById("activities");

function createActivityElement(item) {
  // create the elements
  const activity = document.createElement("li");
  const meta = document.createElement("div");
  const image = document.createElement("img");
  const metaText = document.createElement("div");
  const name = document.createElement("h1");
  const link = document.createElement("a");
  const subject = document.createElement("span");
  const date = document.createElement("span");
  const content = document.createElement("div");
  const instructions = document.createElement("p");

  // Elements classes
  activity.classList.add("activity");
  meta.classList.add("activity-meta");
  image.classList.add("activity-image");
  metaText.classList.add("activity-meta-text");
  name.classList.add("activity-name");
  link.classList.add("activity-link");
  subject.classList.add("activity-subject");
  date.classList.add("activity-date");
  content.classList.add("activity-content");
  instructions.classList.add("activity-instructions");

  // Special properties
  link.href = `/t3/${item.url}`;
  link.tabIndex = 1;
  image.src = `./assets/${item.image}`;
  name.innerText = item.name;
  subject.innerText = item.subject;
  date.innerText = item.date.toLocaleString("pt-BR", { dateStyle: "long" });
  instructions.innerText = item.instructions;

  // Build the hierarchy
  metaText.appendChild(name);
  metaText.appendChild(subject);
  metaText.appendChild(date);
  meta.appendChild(image);
  meta.appendChild(metaText);
  link.appendChild(meta);
  link.appendChild(content);
  content.appendChild(instructions);
  activity.appendChild(link);

  return activity;
}

function loadContent() {
  activitiesStorage.forEach((activity) => {
    activitiesElement.appendChild(createActivityElement(activity));
  });
}

loadContent();
