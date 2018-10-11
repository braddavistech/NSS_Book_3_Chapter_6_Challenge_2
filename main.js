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

const element = (...extra) => {
  return `<${extra[0]} class="${extra[1]}">${extra[2]}</${extra[0]}>`
};

const studentCont = document.querySelector("#container");
individualStudent = [];
let a = 0;
let b = 1;
let c = 2;
let passFail = "";

for (let i = 0; i < students.length; i++){
  if (students[i].score >= 60){
    passFail = "xx-large passing";
  } else {
    passFail = "xx-large failing";
  }
  individualStudent.push('<div class="student">' + element("h1", passFail, students[i].name, a, b, c) + element("section", "bordered dashed section--padder", students[i].class, a, b, c) + element("aside", "pushRight", students[i].info, a, b, c) + '</div>');
};

studentCont.innerHTML = individualStudent.join("");