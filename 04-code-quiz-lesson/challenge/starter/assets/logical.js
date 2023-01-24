import {getQuestions} from './questions.js';
const questions = getQuestions();

let questionIndex = 0;
let score = 0;
let time = 30;
let timer;




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


// Display the current question and choices
function displayQuestion() {
    const question = questions[questionIndex];
    document.getElementById("question-title").textContent = question.title;

    const choices = document.getElementById("choices");
    choices.innerHTML = "";

    question.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", checkAnswer);
        choices.appendChild(button);
    });
}

// Check if the answer is correct and update the score
function checkAnswer(event) {
    const answer = event.target.textContent;
    const correctAnswer = questions[questionIndex].answer;

    if (answer === correctAnswer) {
        score++;
        playSound("correct");
        displayFeedback("Correct!");
    } else {
        time -= 10;
        playSound("incorrect");
        displayFeedback("Incorrect!");
    }

    questionIndex++;

    // Check if the quiz is over
    if (questionIndex === questions.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
}

function displayFeedback(feedback) {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = feedback;
    feedbackElement.classList.remove("hide");
    if (feedback === "Correct!") {
        feedbackElement.classList.add("correct");
    } else {
        feedbackElement.classList.add("incorrect");
    }
    setTimeout(() => {
        feedbackElement.classList.remove("correct", "incorrect");
        feedbackElement.classList.add("hide");
    }, 1000);
}



// End the quiz and show the final score
function endQuiz() {
    clearInterval(timer);
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    document.getElementById("final-score").textContent = score;

  
    // Save the score to local storage
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials: "", score });
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }
  // Update the time displayed on the page
function updateTime() {
    time--;
    document.getElementById("time").textContent = time;
  
    if (time <= 0) {
      endQuiz();
    }
  }
// initilising the sound effect 
  const sfxCorrect = new Audio("04-code-quiz-lesson/challenge/starter/assets/sfx/correct.wav");
  const sfxIncorrect = new Audio("04-code-quiz-lesson/challenge/starter/assets/sfx/incorrect.wav");
  
 
     // Play a sound effect
function playSound(effect) {
    if (effect === "correct") {
        sfxCorrect.play();
    } else if (effect === "incorrect") {
        sfxIncorrect.play();
    }
}
