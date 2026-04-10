particlesJS("particles-js", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: { value: "#002fff" },
    shape: { type: "circle" },
    opacity: {
      value: 1.5,
      random: false,
    },
    size: {
      value: 4,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#484952",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});
const Quizzes = [
  {
    QuestionNumber: 1,
    Question: "What is the chemical symbol for Gold?",
    Answer: ["A) AU", "B) AG", "C) AF", "D) PB"],
    corecrtAnswer: "A) AU",
    notCorrect: [],
  },
  {
    QuestionNumber: 2,
    Question: "What is the result of 1 + '1' in JavaScript?",
    Answer: ["A) 2", "B) 2", "C) 11", "D) NaN"],
    corecrtAnswer: "C) 11",
    notCorrect: [],
  },
  {
    QuestionNumber: 3,
    Question: "What is the purpose of using let in JavaScript?",
    Answer: [
      "A) To declare a constant variable",
      "B) To declare an array",
      "C) To declare a block-scoped variable",
      "D) To declare function",
    ],
    corecrtAnswer: "C) To declare a block-scoped variable",
    notCorrect: [],
  },
  {
    QuestionNumber: 4,
    Question: "What is the result of typeof null in JavaScript",
    Answer: ["A) null", "B) number", "C) undefined", "D) object"],
    corecrtAnswer: "D) object",
    notCorrect: [],
  },
  {
    QuestionNumber: 5,
    Question: "What is the purpose of the map() method in JavaScript?",
    Answer: [
      "A) To transform an array",
      "B) To filter an array",
      "C) To reduce an array",
      "D) To sort an array",
    ],
    corecrtAnswer: "A) To transform an array",
    notCorrect: [],
  },
  {
    QuestionNumber: 6,
    Question:
      "What is the difference between null and undefined in JavaScript?",
    Answer: [
      "A) null represents a deliberate absence of value, while undefined represents an uninitialized variable",
      "B) null is a primitive value, while undefined is an object",
      "C) null is a global variable, while undefined is a keyword",
      "D) null is a string, while undefined is a number",
    ],
    corecrtAnswer:
      "A) null represents a deliberate absence of value, while undefined represents an uninitialized variable",
    notCorrect: [],
  },
  {
    QuestionNumber: 7,
    Question: "What is the purpose of using async/await in JavaScript?",
    Answer: [
      "A) To handle synchronous code",
      "B) To create a loop",
      "C) To declare a function",
      "D) To handle asynchronous code",
    ],
    corecrtAnswer: "D) To handle asynchronous code",
    notCorrect: [],
  },
  {
    QuestionNumber: 8,
    Question: "What is the result of [] == ![] in JavaScript?",
    Answer: ["A) false", "B) undefined", "C) true", "D) null"],
    corecrtAnswer: "C) true",
    notCorrect: [],
  },
  {
    QuestionNumber: 9,
    Question: "What is the purpose of the bind() method in JavaScript?",
    Answer: [
      "A) To create a new function",
      "B) To bind a variable to a value",
      "C) To call a function immediately",
      "D) To bind a function to an object",
    ],
    corecrtAnswer: "D) To bind a function to an object",
    notCorrect: [],
  },
  {
    QuestionNumber: 10,
    Question: "What is the difference between var and let in JavaScript?",
    Answer: [
      "A) var is used for constants, while let is used for variables",
      "B) var is used for variables, while let is used for functions",
      "C) var is function-scoped, while let is block-scoped",
      "D) var is block-scoped, while let is function-scoped",
    ],
    corecrtAnswer: "C) var is function-scoped, while let is block-scoped",
    notCorrect: [],
  },
  {
    QuestionNumber: 11,
    Question: "What is the purpose of using JSON.parse() in JavaScript?",
    Answer: [
      "A) To convert a JavaScript object to a JSON string",
      "B) To parse a URL",
      "C) To convert a JSON string to a JavaScript object",
      "D) To parse a HTML string",
    ],
    corecrtAnswer: "C) To convert a JSON string to a JavaScript object",
    notCorrect: [],
  },
];

const totalScoreQuiz = document.querySelector(".js-total-score");
const goback = document.querySelector(".js-go-back");
const pageScore = document.querySelector(".js-page-score");
const pageQuiz = document.querySelector(".main-Quiz");
const nextQuestions = document.querySelector(".next-Question");
const progressBar = document.querySelector(".js-progress-quiz");
const totalQuestion = document.querySelector(".js-total-Question");
const QuestionsQuiz = document.querySelector(".js-quesions");
const optionsQuiz = document.querySelector(".options");
let incrase = JSON.parse(localStorage.getItem("incrase")) || 0;
let totalScore = JSON.parse(localStorage.getItem("totalScore")) || 0;
function QuizApp(index) {
  nextQuestions.classList.add("is-pointer");
  progressBar.style.width = `${index * 10}%`;
  progressBar.style.transition = " width 0.3s linear";
  totalQuestion.innerHTML = `Question ${index + 1} / ${Quizzes.length}`;
  QuestionsQuiz.innerHTML = `<h1> ${Quizzes[index].Question}</h1`;
  optionsQuiz.innerHTML = "";
  Quizzes[index].Answer.forEach((answer) => {
    optionsQuiz.innerHTML += `<h4 class="answerQuiz">${answer}</h4>`;
  });

  let answers = document.querySelectorAll(".answerQuiz");
  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      nextQuestions.classList.remove("is-pointer");
      if (answer.textContent === Quizzes[index].corecrtAnswer) {
        answer.classList.add("is-corect");
        totalScore++;
      } else {
        answer.classList.add("is-not-corect");
        Quizzes[index].notCorrect +=
          ` <p class="not-correct">✕ ${answer.textContent} </p>`;
      }
      answers.forEach((option) => {
        option.classList.add("none");
      });
    });
  });
  localStorage.setItem("incrase", JSON.stringify(incrase));
  localStorage.setItem("totalScore", JSON.stringify(totalScore));
}

nextQuestions.addEventListener("click", () => {
  if (incrase < Quizzes.length - 1) {
    incrase++;
    progressBar.style.background = "blue";
    QuizApp(incrase);
  } else {
    progressBar.style.background = "greenyellow";
    let pageScoreHtml = "";
    Quizzes.forEach((Quizze) => {
      const html = ` <div class="total-quizze"> 
        <h4> ${Quizze.QuestionNumber}) Quesion: ${Quizze.Question}</h4>
        <p> The Correct Answer is:</p> 
        <p class= "correct-ansewr">✓ ${Quizze.corecrtAnswer}</p>
        <div class="js-not-correct">${Quizze.notCorrect}</div>
       </div>`;

      pageScoreHtml += html;
      pageScore.innerHTML = pageScoreHtml;
      goback.classList.add("is-back");
      goback.innerHTML = "Try again";
      totalScoreQuiz.innerHTML = `Total Score : ${totalScore}/ ${Quizzes.length}`;
      pageScore.style.display = "flex";
      pageQuiz.style.display = "none";
    });
    particlesJS("");
  }
});

goback.addEventListener("click", () => {
  incrase = 0;
  totalScore = 0;
  goback.classList.remove("is-back");
  totalScoreQuiz.innerHTML = "";
  goback.innerHTML = "";
  pageScore.style.display = "none";
  pageQuiz.style.display = "block";
  Quizzes.forEach((Quizz) => {
    Quizz.notCorrect = "";
  });
  QuizApp(incrase);
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: { value: "#002fff" },
      shape: { type: "circle" },
      opacity: {
        value: 1.5,
        random: false,
      },
      size: {
        value: 4,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#484952",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
});
QuizApp(incrase);
