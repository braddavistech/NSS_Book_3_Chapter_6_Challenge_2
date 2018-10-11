const students = [
  {
      name: "Chris Miller",
      class: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      class: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      class: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      class: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      class: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      class: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      class: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      class: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      class: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      class: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
      name: "Tyler Bowman",
      class: "History",
      info: "When was the last time he attended class?",
      score: 48
  },
  {
      name: "Ray Medrano",
      class: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
  }
]

const h1 = (students,...extra) => {
  console.log(extra);
  console.log("Extra Array Element 1: " + extra[0] + "          Extra Array Element 2: " + extra[1]+ "          Extra Array Element 3: " + extra[2] );
  if (students.score >= 60){
    return `<div class ="student"><h1 class="xx-large passing">${students.name}</h1>`
  } else {
    return`<div class ="student"><h1 class="xx-large failing">${students.name}</h1>`
  }
};

const section = (students, ...extra) => {
  return `<section class="bordered dashed section--padder">${students.class}</section>`
};

const aside = (students, ...extra) => {
  return `<aside class="pushRight">${students.info}</aside></div>`
};



const studentCont = document.querySelector("#container");
individualStudent = [];
let a = 0;
let b = 1;
let c = 2;

for (let i = 0; i < students.length; i++){
  individualStudent.push(h1(students[i], a, b, c) + section(students[i], a, b, c) + aside(students[i], a, b, c));
};

studentCont.innerHTML = individualStudent.join("");