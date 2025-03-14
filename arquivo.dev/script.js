const students = [
  { name: "Andre", url: "/andre" },
  { name: "Arthur", url: "/arthur" },
  { name: "Augusto", url: "/augusto" },
  { name: "Bianca", url: "/bianca" },
  { name: "Brian", url: "/brian" },
  { name: "Bruno", url: "/bruno" },
  { name: "Davi F.", url: "/froemming" },
  { name: "Davi M.", url: "/davimohr" },
  { name: "Davi B.", url: "/borba" },
  { name: "Eduarda", url: "/eduarda" },
  { name: "Eduardo", url: "/eduardo" },
  { name: "Francesco", url: "/francesco" },
  { name: "Gabriel B.", url: "/barcellos" },
  { name: "Gabriel L.", url: "/lopes" },
  { name: "Guilherme", url: "/guilherme" },
  { name: "Gustavo O.", url: "/oliveira" },
  { name: "Gustavo F.", url: "/faber" },
  { name: "Gustavo M.", url: "/mueller" },
  { name: "Henrique", url: "/henrique" },
  { name: "Isaac", url: "/isaac" },
  { name: "Isabella", url: "/isabella" },
  { name: "Isadora", url: "/isadora" },
  { name: "João", url: "/joao" },
  { name: "Laura", url: "/laura" },
  { name: "Lucas", url: "/lucas" },
  { name: "Luciano", url: "/luciano" },
  { name: "Marcos", url: "/marcos" },
  { name: "Mateus", url: "/mateus" },
  { name: "Nicolas", url: "/nicolas" },
  { name: "Nicole", url: "/nicole" },
  { name: "Otaviano", url: "/otaviano" },
  { name: "Pedro", url: "/pedro" },
  { name: "Rodrigo", url: "/rodrigo" },
  { name: "Sophia", url: "/sophia" },
  { name: "Tito", url: "/tito" },
  { name: "Tomás", url: "/tomas" },
  { name: "Valentina", url: "/valentina" },
  { name: "Vitor", url: "/vitor" },
  { name: "Vittor", url: "/vittor" },
];

// Gets a random colors theme
function getRandomColor() {
  const colors = [
    {
      text: "#0c819a",
      background: "#d4f8ff",
    },
    {
      text: "#0a8329",
      background: "#bcffcd",
    },
    {
      text: "#824707",
      background: "#ffdcb7",
    },
    {
      text: "#8e0855",
      background: "#ffc4e6",
    },
    {
      text: "#910707",
      background: "#ffc6c6",
    },
  ];

  // Generate a random index number between 0 and the length of the array
  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

const accentColor = getRandomColor();
const audio = document.getElementById("audio")

function createElementFromStudent(student) {
  // Create the elements to show the student
  const line = document.createElement("li");
  const anchor = document.createElement("a");

  // Anchor params
  anchor.target = "_blank";
  anchor.className = "student-link";
  anchor.href = `.${student.url}`;
  anchor.innerText = student.name;
  anchor.style.color = accentColor.text;
  anchor.style.borderColor = accentColor.border;
  anchor.style.backgroundColor = accentColor.background;

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

function handleSearch() {
  // Gets the input for the search
  const searchField = document.getElementById("search");

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

function handleEminem() {
  document.getElementById("eminem").addEventListener("click", closeEminem);
  document.getElementById("miranha").addEventListener("click", showEminem);
}

updateStudentsList(students);
animateSpiderMan();
handleSearch();
handleEminem();
