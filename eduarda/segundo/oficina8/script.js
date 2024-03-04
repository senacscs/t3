const currentDayDOM = document.getElementById("cur-day"),
  currentMonthDOM = document.getElementById("cur-month"),
  calenderMonthDOM = document.getElementById("cal-month"),
  currentDateDOM = document.getElementById("cur-date"),
  calenderYearDOM = document.getElementById("cal-year"),
  currentYearDOM = document.getElementById("current-year"),
  noteDateInPopup = document.getElementById("noteDate"),
  saveBtnInPopup = document.getElementById("add-post-it"),
  deleteBtnInPopup = document.getElementById("delete-button"),
  noteContentInput = document.querySelector(".note-content"),
  noteTitleInput = document.querySelector(".note-title"),
  verb = document.querySelector(".verb"),
  modal = document.querySelector(".modal"),
  colorModal = document.getElementById("fav-color"),
  popup = document.querySelector(".popup"),
  noteModal = document.getElementById("make-note");

document.querySelector(".fa-caret-left").addEventListener("click", nextMonth);
document.querySelector(".fa-caret-right").addEventListener("click", prevMonth);

const now = new Date();
//for testing purposes use 'let' instead of 'const'
const todayDay = now.getDay(),
  todayDate = now.getDate(),
  todayMonth = now.getMonth(),
  todayYear = now.getFullYear();

const state = {
  todayDay,
  todayDate,
  todayMonth,
  todayYear
};
const daysStr = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat"
};
const daysIndex = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6
};
const monthsStr = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec"
};
const monthsIndex = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
};
const color_data = [
  {
    id: 0,
    name: "blue",
    value: "#1B19CD"
  },
  {
    id: 1,
    name: "red",
    value: "#D01212"
  },
  {
    id: 2,
    name: "purple",
    value: "#721D89"
  },
  {
    id: 3,
    name: "green",
    value: "#158348"
  },
  {
    id: 4,
    name: "orange",
    value: "#EE742D"
  },
  {
    id: 5,
    name: "deep-orange",
    value: "#F13C26"
  },
  {
    id: 6,
    name: "baby-blue",
    value: "#31B2FC"
  },
  {
    id: 7,
    name: "cerise",
    value: "#EA3D69"
  },
  {
    id: 8,
    name: "lime",
    value: "#2ACC32"
  },
  {
    id: 9,
    name: "teal",
    value: "#2FCCB9"
  },
  {
    id: 10,
    name: "pink",
    value: "#F50D7A"
  },
  {
    id: 11,
    name: "black",
    value: "#212524"
  }
];

var currentColor;

let staticCurrentColor = {
  id: 0,
  name: color_data[0].name,
  value: color_data[0].value
};

var notes;
let staticNotes = [
  {
    id: 235684345,
    title: "running marathon",
    desc:
      "blah lbah lorem ipsum sodem qwerty oiuy lorem ipsum sodem qwerty oiuy",
    date: "2019 10 31"
  },
  {
    id: 784534534,
    title: "The Burger Chief opening event",
    desc: "lorem ipsum sodem qwerty oiuy lorem ipsum sodem qwerty oiuy",
    date: "2019 10 2"
  },
  {
    id: 345463516,
    title: "Jamal's Birthday",
    desc: "lorem ipsum sodem qwerty oiuy lorem ipsum sodem qwerty oiuy",
    date: "2019 11 22"
  }
];

let notesFound = localStorage.getItem("notes");
let colorsFound = localStorage.getItem("theme");

if (!notesFound) {
  console.log("notes not Found");
  localStorage.setItem("notes", JSON.stringify(staticNotes));
  notes = staticNotes;
} else {
  notes = JSON.parse(notesFound);
}

if (!colorsFound) {
  console.log("colors not Found:");
  localStorage.setItem("theme", JSON.stringify(staticCurrentColor));
  currentColor = staticCurrentColor;
} else {
  currentColor = JSON.parse(colorsFound);
  applyTheme();
}

//update local storage
function updateLocalStorage() {
  let currentNotes = notes;
  localStorage.setItem("notes", JSON.stringify(currentNotes));
  localStorage.setItem("theme", JSON.stringify(currentColor));
  applyTheme();
}

function applyTheme() {
  document.querySelector(
    "table"
  ).style.boxShadow = `0px 0px 149px -28px ${currentColor.value}`;

  document.querySelector(
    ".color"
  ).style.backgroundColor = `${currentColor.value}`;

  document.querySelector(
    ".border-color"
  ).style.backgroundColor = `${currentColor.value}`;

  for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".weekday")[
      i
    ].style.backgroundColor = `${currentColor.value}`;
  }
}

currentDayDOM.innerHTML = daysStr[todayDay];
currentDateDOM.innerHTML = todayDate;
currentMonthDOM.innerHTML = monthsStr[state.todayMonth];
currentYearDOM.innerHTML = todayYear;
var currentFullYear = analyizYear(state.todayYear);
var currentFullMonth = currentFullYear.months[monthsStr[state.todayMonth]];

//run App
showCalenderInfo();

//exp: analyizYear(2019) will get you all months length,first day,last day with indexes
function analyizYear(year) {
  let counter = 0;
  const currentYear = {
    year: year,
    is_leap: false,
    months: {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11
    }
  };

  while (counter < 12) {
    Object.keys(currentYear.months).forEach((month) => {
      currentYear.months[month] = analyizMonth(month, year);
    });
    counter++;
  }
  if (currentYear.months["Feb"].days_length === 29) {
    currentYear.is_leap = true;
  }
  return currentYear;
}
//exp: run analyizMonth(String:'Dec',Int:2019) note:(must capitalize month like Sep,Nov)
function analyizMonth(month, year) {
  const testDays = 31;
  let counter = 0;

  const monthObj = {
    year: year,
    month: month,
    month_idx: monthsIndex[month],
    first_day: "",
    first_day_index: null,
    days_length: 0,
    last_day_index: null
  };

  while (counter < testDays) {
    counter++;
    const dateTest = `${counter} ${month} ${year}`;
    const dateArr = new Date(dateTest).toDateString().split(" ");
    if (dateArr[1] === month) {
      if (counter === 1) {
        monthObj.first_day = dateArr[0];
        monthObj.first_day_index = daysIndex[dateArr[0]];
      }
      monthObj.days_length++;
      monthObj.last_day = dateArr[0];
      monthObj.last_day_index = daysIndex[dateArr[0]];
    } else {
      return monthObj;
    }
  }
  return monthObj;
}

//get last month days in current month view
function makePrevMonthArr(firstDayIndex) {
  let prevMonthIdx;
  let prevMonthDays;
  if (state.todayMonth === 0) {
    prevMonthDays = analyizMonth("Dec", state.todayYear - 1).days_length;
  } else {
    prevMonthIdx = monthsIndex[currentFullMonth.month] - 1;
    prevMonthDays = currentFullYear.months[monthsStr[prevMonthIdx]].days_length;
  }
  let result = [];
  for (let i = 1; i <= firstDayIndex; i++) {
    const day = prevMonthDays - firstDayIndex + i;
    result.push({ day, state: "prevMonth" });
  }

  return result;
  //**** previous version of this code was returning just days without state
  //**** like [1,2,3] instead of day and its state like [{day:1,"prevMonth"}]
  // return Array.from(
  // 	{ length: firstDayIndex },
  // 	(_, i) => prevMonthDays - firstDayIndex + i
  // );
}
// this will print an array of with days of prev month and next month crosponds to the calender table
function calcMonthCalendar() {
  // Create array: [1, 2, 3, ..., 30, 31]
  const currMonth = Array.from(
    { length: currentFullMonth.days_length },
    (_, i) => ({ day: i + 1, state: "currMonth" })
  );

  const nextMonth = Array.from(
    { length: currentFullMonth.days_length },
    (_, i) => ({ day: i + 1, state: "nextMonth" })
  );

  // Create a flat array with leading zeros and trailing last week:
  // [0, 0, 0, 0, 1, 2, 3, ..., 30, 31, 1, 2, 3, 4, 5, 6, 7]
  const flatResultArr = [
    ...makePrevMonthArr(currentFullMonth.first_day_index),
    ...currMonth,
    ...nextMonth // this includes extra numbers that will be trimmed
  ].slice(0, 7 * 6); // 7 days/week * 6 weeks

  // Chunk the flat array into slices of 7:
  const resultArr = [];
  for (let i = 0; i < 7; i++) {
    resultArr.push(flatResultArr.slice(i * 7, (i + 1) * 7));
  }
  return resultArr;
}

// print each cell its day number and color
function printMonthCalendarInDOM() {
  const monthArr = calcMonthCalendar();

  let currentMonthStarted = false;
  let currentMonthEnd = true;
  for (let i = 0; i < 6; i++) {
    let currentWeek = monthArr[i];
    //
    const week = document.querySelector("#table-body").children[i];
    for (let j = 0; j < 7; j++) {
      week.children[j].style.backgroundColor = "white";
      week.children[j].style.opacity = 1;
      // console.log(currentWeek[j].day);
      if (currentWeek[j].day === 1) {
        currentMonthStarted = true;
      }
      if (
        currentMonthEnd &&
        currentMonthStarted &&
        currentWeek[j].day === todayDate &&
        currentFullMonth.month_idx === todayMonth &&
        currentFullYear.year === todayYear
      ) {
        let todayFullDate =
          state.todayYear +
          " " +
          (state.todayMonth + 1) +
          " " +
          state.todayDate;
        let isTodayHasNotes = notes.filter(
          (note) => note.date === todayFullDate
        );
        let viewNote = "";
        if (isTodayHasNotes.length > 0) {
          viewNote = `
							
							<br>
							<div style="width:max-content;">
							<i class="fas fa-sticky-note"></i>
							</div>
							<span class="tooltip"> ${isTodayHasNotes[0].title}</span>
						
							`;
          week.children[j].classList.add("tooltip-container");
        }
        // week.children[j].innerHTML = viewNote;
        // week.children[j].id = notesFound.id;

        week.children[
          j
        ].innerHTML = `${currentWeek[j].day}<img  id="todayLogo" src='./img/alfinete.png'  /> ${viewNote}`;
        // week.children[j].innerHTML = currentWeek[j].day;
        week.children[j].id = "current-day";
        week.children[j].classList.add("currMonth");
        week.children[j].style.backgroundColor = "#e1e1e1";
        currentMonthStarted = false;
        currentMonthEnd = false;
      } else {
        week.children[j].style.cursor = "";
        week.children[j].style.backgroundColor = "white"; //.style.backgroundColor = "white";
        week.children[j].style.color = "black";
        week.children[j].innerHTML = currentWeek[j].day;
        week.children[j].removeAttribute("id");
        if (currentWeek[j].state !== "currMonth") {
          week.children[j].style.backgroundColor = currentColor.value;
          week.children[j].style.opacity = 0.6;
          week.children[j].style.color = "rgba(255, 255, 255,0.4)";
          week.children[j].style.cursor = "default";
          week.children[j].classList.remove("currMonth");
          week.children[j].classList.remove("tooltip-container");
        }
        if (currentWeek[j].state == "currMonth") {
          //exp 2019 10 24
          week.children[j].classList.add("currMonth");
          let currentFullDate =
            currentFullMonth.year +
            " " +
            (currentFullMonth.month_idx + 1) +
            " " +
            currentWeek[j].day;
          let notesFound = notes.filter(
            (note) => note.date === currentFullDate
          )[0];
          if (notesFound) {
            let viewNote = `
						<td>
						<span class="day">${currentWeek[j].day}</span>
						<br>
						<div style="width:max-content;">
						<i class="fas fa-sticky-note"></i>
						</div>
						<span class="tooltip"> ${notesFound.title}</span>
					</td>
						`;
            week.children[j].innerHTML = viewNote;
            week.children[j].classList.add("tooltip-container");
            week.children[j].id = notesFound.id;
          } else {
            week.children[j].classList.remove("tooltip-container");
          }
        }
      }
      // console.log("xZx: ", currentWeek[j]);
    }
  }
}

function nextMonth() {
  state.todayMonth += 1;
  if (state.todayMonth == 12) {
    state.todayYear += 1;
    currentFullYear = analyizYear(state.todayYear);
    state.todayMonth = 0;
  }
  currentFullMonth = currentFullYear.months[monthsStr[state.todayMonth]];
  showCalenderInfo();
}

function prevMonth() {
  state.todayMonth -= 1;
  if (state.todayMonth == 0) {
    state.todayYear -= 1;
    currentFullYear = analyizYear(state.todayYear);
    state.todayMonth = 11;
  }
  currentFullMonth = currentFullYear.months[monthsStr[state.todayMonth]];
  showCalenderInfo();
}

function showCalenderInfo() {
  calenderMonthDOM.innerHTML = monthsStr[state.todayMonth];
  calenderYearDOM.innerHTML = state.todayYear;
  printMonthCalendarInDOM();
}

// to change the year manually
calenderYearDOM.addEventListener("input", (e) => {
  let numberPattern = /\d+/g;
  let year = parseInt(e.target.innerHTML.match(numberPattern).join(""));
  if (
    e.target.innerHTML.match(numberPattern).join("").length > 3 &&
    typeof year === "number"
  ) {
    currentFullYear = analyizYear(year);
    currentFullMonth = currentFullYear.months[monthsStr[state.todayMonth]];
    state.todayYear = year;
    showCalenderInfo();
  }
});

document
  .getElementById("theme-landscape")
  .addEventListener("click", changeColorTheme);
document
  .getElementById("theme-portrait")
  .addEventListener("click", changeColorTheme);

let newColorPrefrence;
modal.addEventListener("click", (e) => {
  let ele = e.target.classList;

  if (ele[0] === "modal" || ele[0] === "fade-in") {
    closeModal();
  } else if (ele[0] === "color-preview") {
    const siblings = e.target.parentElement.parentElement;
    for (let i = 0; i < siblings.children.length; i++) {
      const element = siblings.children[i].firstElementChild;
      element.classList.remove("selectedColor");
    }
    if (e.target.parentElement.classList[0] === "color-option") {
      newColorPrefrence = e.target.id;
    }
    ele.add("selectedColor");
  }
});

let isModalOpen = false;

function openModal(isNote = false) {
  isModalOpen = true;
  popup.classList.remove("fade-out");
  modal.style.display = "block";

  isNote
    ? (noteModal.style.display = "flex")
    : (colorModal.style.display = "flex");
  popup.classList.add("fade-in");
}
closeModal();
function closeModal() {
  isModalOpen = false;
  popup.classList.remove("fade-in");
  popup.classList.add("fade-out");
  modal.style.display = "none";
  noteModal.style.display = "none";
  colorModal.style.display = "none";
  deleteBtnInPopup.style.display = "inline";
  noteTitleInput.value = "";
  noteContentInput.value = "";
  document.getElementById("warning").innerHTML = "";
}

function changeColorTheme() {
  openModal();
  seletectChosenColor();
}

seletectChosenColor();

function seletectChosenColor() {
  const colorsOptions = document.getElementById("color-options").children;
  for (let i = 0; i < colorsOptions.length; i++) {
    const currentChild = colorsOptions[i].firstElementChild;

    if (currentColor.name == currentChild.id) {
      currentChild.innerHTML = "<i class='fas fa-check checkmark'></i>";
    } else {
      currentChild.innerHTML = "";
    }
  }
}
document.getElementById("update-theme-button").addEventListener("click", () => {
  const chosenColor = color_data.filter(
    (color) => color.name === newColorPrefrence
  );
  currentColor = chosenColor[0];
  document.getElementById("theme-portrait").style.backgroundColor =
    currentColor.value;
  updateLocalStorage();
  printMonthCalendarInDOM();
  applyTheme();
  closeModal();
});

//Create,Read,Update Delete a Note!
//this is event delegation where we select a parent container that will have new cells
document.body.addEventListener("click", (e) => {
  let noteDate;
  let noteId;
  let note;
  let verbWord;
  if (e.target.parentElement.parentElement.id == "table-body") {
    if (e.target.classList.contains("tooltip-container")) {
      verbWord = "Edit";
      // deleteBtnInPopup.style.display = "display";
      noteId = e.target.id;
      console.log("noteId:", noteId);
      if (noteId == "current-day") {
        noteDate =
          state.todayYear +
          " " +
          (state.todayMonth + 1) +
          " " +
          state.todayDate;
        note = notes.filter((n) => n.date == noteDate);
      } else {
        note = notes.filter((n) => n.id == noteId);
      }
      console.log("note:", note);
      noteDate = note[0].date;
      openModal(true);
      fillNotePopup(note[0]);
      addNote(noteDate.split(" ")[2], noteId);
    } else if (e.target.classList.contains("currMonth")) {
      noteId = e.target.id;
      noteDate = e.target.innerHTML;
      if (noteId == "current-day") {
        noteDate = state.todayDate;
      }
      console.log("Add New Note");
      verbWord = "Create";
      //delete two below
      // noteDate =
      // 	currentFullMonth.year +
      // 	" " +
      // 	currentFullMonth.month +
      // 	" " +
      // 	e.target.innerHTML;
      console.log("zZz");

      openModal(true);
      addNote(noteDate, noteId);
      deleteBtnInPopup.style.display = "none";
    } else {
      console.log("Not Applicable for previous and next month");
    }
    noteDateInPopup.innerHTML = noteDate;
    verb.innerHTML = verbWord;
  } else if (e.target.classList.contains("fa-sticky-note")) {
    verbWord = "Edit";
    // deleteBtnInPopup.style.display = "display";

    console.log("edit note (sticky)");
    noteId = e.target.parentElement.parentElement.id;
    if (noteId == "current-day") {
      noteDate =
        state.todayYear + " " + (state.todayMonth + 1) + " " + state.todayDate;
      note = notes.filter((n) => n.date == noteDate);
    } else {
      note = notes.filter((n) => n.id == noteId);
    }
    // note = notes.filter(n => n.id == noteId);
    noteDate = note[0].date;
    console.log("note:", note);
    openModal(true);
    fillNotePopup(note[0]);
    noteDateInPopup.innerHTML = noteDate;
    verb.innerHTML = verbWord;

    console.log("xXx");
    addNote(noteDate.split(" ")[2], noteId);
  }
});

function fillNotePopup(note) {
  noteTitleInput.value = note.title;
  noteContentInput.value = note.desc;
}

var getSelectedNoteDay;
var getSelectedNoteId;

function addNote(noteDateDay, noteDateId) {
  getSelectedNoteDay = noteDateDay;
  getSelectedNoteId = noteDateId;
}

saveBtnInPopup.addEventListener("click", () => {
  const noteDate =
    currentFullMonth.year +
    " " +
    (currentFullMonth.month_idx + 1) +
    " " +
    getSelectedNoteDay;
  let oldNote = notes.filter((note) => note.date == noteDate)[0];
  if (oldNote) {
    notes = notes.filter((note) => oldNote.id !== note.id);
  }

  const newNote = {
    id: Math.random(),
    title: noteTitleInput.value,
    desc: noteContentInput.value,
    date: noteDate
  };

  if (
    noteTitleInput.value.trim() !== "" &&
    noteTitleInput.value.trim() !== " " &&
    noteContentInput.value.trim() !== "" &&
    noteContentInput.value.trim() !== " "
  ) {
    console.log("newNote:", newNote);
    notes.push(newNote);
    closeModal(true);
    printMonthCalendarInDOM();
    updateLocalStorage();
  } else {
    document.getElementById("warning").innerHTML = "Please fill all fields";
  }
});

// delete note
deleteBtnInPopup.addEventListener("click", () => {
  if (getSelectedNoteId == "current-day") {
    noteDate =
      state.todayYear + " " + (state.todayMonth + 1) + " " + state.todayDate;
    notes = notes.filter((note) => note.date !== noteDate);
    document
      .getElementById("current-day")
      .classList.remove("tooltip-container");
  } else {
    notes = notes.filter((note) => note.id !== parseFloat(getSelectedNoteId));
  }
  updateLocalStorage();
  closeModal(true);
  printMonthCalendarInDOM();
});

//mini clock 12 and 24 timing
let is24hours = true;
let intervalState;
function makeClockTikTok() {
  intervalState = setInterval(() => {
    let hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    // console.log("seconds:", seconds);
    let in12hours = 12;
    let dayState = "AM";

    if (hours > 0 && hours < 12) {
      in12hours = hours;
    } else if (hours !== 0) {
      if (hours === 12) {
        hours += 12;
      }
      in12hours = hours - 12;
      dayState = "PM";
    }

    if (is24hours) {
      hours = in12hours;
    }
    const timeTemplate = `
		<span>${hours > 9 ? hours : "0" + hours} </span>:
		<span>${minutes > 9 ? minutes : "0" + minutes} </span>:
		<span>${seconds > 9 ? seconds : "0" + seconds}</span>
		<span>${is24hours ? dayState : ""}</span>
		`;
    document.querySelector(".time").innerHTML = timeTemplate;
  }, 1000);
}
document
  .querySelector(".time")
  .addEventListener(
    "click",
    () => ((is24hours = !is24hours), makeClockTikTok())
  );

//to stop the calculating time if it is on orientation mode
var mql = window.matchMedia("(orientation: portrait)");
//if the user launched this app while on portrait mode
if (!mql.matches) {
  makeClockTikTok();
}

// Add a media query change listener
mql.addListener(function (m) {
  if (m.matches) {
    // Changed to portrait
    console.log("portrait mode");
    clearInterval(intervalState);
  } else {
    // Changed to landscape
    console.log("landscape mode");
    makeClockTikTok();
  }
});

//things i regret about this project:
//1- i didnt use a design pattern !
//2- i used date object as a string instead of date formate in notes
//3- as the feauters progress i end up with a spagheti code ! sorry :(
// FACT: it wouldn't be possible without the builtin date object "new Date()" thanks javascript !