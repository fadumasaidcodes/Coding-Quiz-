// Initialize variables
let questionIndex = 0;
let score = 0;
let time = 30;
let timer;

// Get questions from questions.js
const questions = getQuestions();

// Start the quiz when the start button is clicked
document.getElementById("start").addEventListener("click", startQuiz);

function startQuiz() {
  // Hide the start screen and show the questions
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");

  // Start the timer
  timer = setInterval(updateTime, 1000);
  document.getElementById("time").textContent = time;

  // Display the first question
  displayQuestion();
}