const activitiesStorage = [
  {
    name: "Indicações Front-End",
    subject: "Técnico",
    image: "indicacoes.svg",
    date: new Date(2023, 3, 24),
    url: "tito/indicacoes",
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
    instructions: "Site contando um pouco mais sobre a ODS 2 - Fome Zero e Agricultura Sustentável",
  }
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
  link.href = item.url;
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
