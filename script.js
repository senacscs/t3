const students = [
  { name: "Andre", url: "andre" },
  { name: "Arthur", url: "arthur" },
  { name: "Augusto", url: "augusto" },
  { name: "Bianca", url: "bianca" },
  { name: "Brian", url: "brian" },
  { name: "Davi F.", url: "davif" },
  { name: "Davi M.", url: "davimohr" },
  { name: "Davi B.", url: "borba" },
  { name: "Eduarda", url: "eduarda" },
  { name: "Eduardo", url: "eduardo" },
  { name: "Francesco", url: "francesco" },
  { name: "Gabriel B.", url: "barcellos" },
  { name: "Gabriel L.", url: "dick" },
  { name: "Guilherme", url: "guilherme" },
  { name: "Gustavo O.", url: "gustavoo" },
  { name: "Gustavo F.", url: "faber" },
  { name: "Gustavo M.", url: "gustavom" },
  { name: "Isaac", url: "isaac" },
  { name: "Isadora", url: "isadora" },
  { name: "João", url: "joao" },
  { name: "Laura", url: "laura" },
  { name: "Lucas", url: "lucas" },
  { name: "Luciano", url: "luciano" },
  { name: "Marcos", url: "marcos" },
  { name: "Nicolas", url: "nicolas" },
  { name: "Nicole", url: "nicole" },
  { name: "Otaviano", url: "otaviano" },
  { name: "Pedro", url: "pedro" },
  { name: "Rodrigo", url: "rodrigo" },
  { name: "Sophia", url: "sophia" },
  { name: "Tito", url: "tito" },
  { name: "Tomás", url: "tomas" },
  { name: "Valentina", url: "valentina" },
  { name: "Vitor", url: "vitor" },
  { name: "Vittor", url: "vittor" },
];

grades = {
  primeiro: {
    name: 'Primeiro',
    url: 'primeiro',
    projects: [
      { name: 'Index', url: '' },
      { name: 'Indicações Front-End', url: 'indicacoesfront' },
      { name: 'Projeto de pesquisa', url: 'projetopp' },
      { name: 'Oficinas', url: 'oficinas' },
      { name: 'Carrinho de rolimã', url: 'carrinho' },
      { name: 'Fibonacci', url: 'fibonacci' },
      { name: 'Ods', url: 'ods' },
      { name: 'Deuses Egípcios', url: 'deusegipcio' },
      { name: 'LinkeMusic', url: 'linkemusic' },
      { name: 'Algoritmos em Javascript', url: 'ptjs' },
      { name: 'Jogo em Javascript', url: 'jogojs' },
    ]
  },
  segundo: {
    name: 'Segundo',
    url: 'segundo',
    projects: [
      { name: 'Index', url: '' },
      { name: 'Indicações Back-End', url: 'indicacoesback' }
    ]
  }
}

// Gets a random colors theme
function getRandomColor() {
  const colors = [
    'purple',
    'amber',
    'pink',
    'red',
    'blue',
    'green',
  ];

  // Generate a random index number between 0 and the length of the array
  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

const accentColor = getRandomColor();
const audio = document.getElementById("audio")
const filters = document.getElementById('filters')
const searchField = document.getElementById("search");

// parses all the projects in an unique array and add the grade to the url
const projectsWithGrade = Object.values(grades).map((grade, index) => {
  return grade.projects.map(project => ({
    ...project,
    grade: Object.keys(grades)[index]
  }))
}).flat(1)

const colorScheme = getRandomColor()
const defaultGrade = 'segundo'
let currentProject = projectsWithGrade.filter(project => project.grade === 'segundo')[0]

function createElementFromStudent(student) {
  // Create the elements to show the student
  const line = document.createElement("li");
  const anchor = document.createElement("a");

  // Anchor params
  anchor.target = "_blank";
  anchor.className = `bg-${colorScheme}-500 py-3 px-4 block shadow-2xl shadow-${colorScheme}-500/20`;

  if (currentProject.grade === 'segundo' && currentProject === 'Index') {
    anchor.href = `./${student.url}/`; // index é no começo
  } else {
    anchor.href = `./${student.url}/${currentProject.grade}/${currentProject.url}`;
  }

  anchor.innerText = student.name;

  // Animate the color when hovering the button
  let anchorAnimation = false;
  let anchorAnimationDegrees = 0;

  function animateAnchor() {
    if (!anchorAnimation) return (anchor.style.filter = `hue-rotate(0deg)`);
    anchorAnimationDegrees += 3;
    anchor.style.filter = `hue-rotate(${anchorAnimationDegrees}deg)`;
    requestAnimationFrame(animateAnchor);
  }

  // Setups the animation when hovering with the mouse
  anchor.addEventListener("mouseover", (e) => {
    anchorAnimation = true;
    animateAnchor();
  });
  anchor.addEventListener("mouseout", (e) => {
    anchorAnimation = false;
  });

  // Add the anchor to the line
  line.append(anchor);

  return line;
}

function updateStudentsList(students) {
  // Get the container for the students
  const studentsListElement = document.getElementById("students-list");

  // Clears the students
  studentsListElement.innerHTML = "";

  // Loads all the students from the list
  students.forEach((student) => {
    studentsListElement.append(createElementFromStudent(student));
  });
}

function openFilter() {
  filters.classList.remove('hidden')
}

function closeFilter() {
  filters.classList.add('hidden')
}

function createElementFromProject(project) {
  const label = document.createElement('label')
  const input = document.createElement('input')
  const span = document.createElement('span')

  input.type = 'radio'
  input.name = 'filter-param'
  input.defaultChecked = currentProject === project
  span.innerText = project.name
  label.appendChild(input)
  label.appendChild(span)
  input.addEventListener('change', (e) => {
    currentProject = project
    updateStudentsList(
      students.filter((student) =>
        student.name.toLowerCase().includes(searchField.value.toLowerCase())
      )
    );

    setTimeout(closeFilter, 500)
  })

  return label
}

function handleSearch() {
  // Handles when the input changes its content due to the user writing
  searchField.addEventListener("input", (e) => {
    // If the input has nothing in it, just show all the students
    if (e.target.value === "") {
      updateStudentsList(students);
      return;
    }

    // Update the students list with the students filtered by the search
    updateStudentsList(
      students.filter((student) =>
        student.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  });
}

function animateSpiderMan() {
  // Create an event to run when the cursor moves
  document.addEventListener("mousemove", (e) => {
    // Gets the square of the image
    const anchor = document.getElementById("miranha");
    const rekt = anchor.getBoundingClientRect();

    // Gets the point it is going to look the cursor
    const anchorX = rekt.left + rekt.width;
    const anchorY = rekt.top + rekt.height / 2;

    // Calculates the angle to apply to the image
    const angle =
      (Math.atan2(anchorY - e.clientY, anchorX + e.clientX) * -270) / Math.PI;

    anchor.style.transform = `rotate(${angle}deg)`;
  });
}

function showEminem() {
  const eminem = document.getElementById("eminem");

  eminem.classList.remove("hidden");
  eminem.classList.add("show");
  audio.play();
}

function closeEminem() {
  const eminem = document.getElementById("eminem");
  eminem.classList.add("hidden");
  eminem.classList.remove("show");
  audio.pause();
}

function handleFilter() {
  Object.values(grades).forEach((grade, index) => {
    const gradeName = document.createElement('span')
    gradeName.innerHTML = grade.name
    filters.appendChild(gradeName)
    gradeName.className = `font-medium text-${colorScheme}-200 my-2`

    projectsWithGrade.filter(project => project.grade === Object.keys(grades)[index]).forEach(project => {
      filters.appendChild(createElementFromProject(project))
    });
  })

  document.getElementById('filter-button').addEventListener('click', () => {
    const hidden = filters.classList.contains('hidden')

    if (hidden) {
      openFilter()
    } else {
      closeFilter()
    }
  });
}

function autoSelectSearch() {
  searchField.focus()
  searchField.select()
}

function rauber() {
  window.location.href = "./rauber"
}

function defineColorTheme() {
  // tito do futuro, isso aqui não faz sentido algum, não pense
  filters.className = filters.className.replace(/\bTHEME\b/g
    , colorScheme)

  document.querySelectorAll('*').forEach(element => {
    if (element.className) {
      element.className = element.className.replace(/\bTHEME\b/g
        , colorScheme)
    }
  })
}

updateStudentsList(students);
// animateSpiderMan();
handleSearch();
handleFilter();
autoSelectSearch()
defineColorTheme()