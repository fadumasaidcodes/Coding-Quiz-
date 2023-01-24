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
    } else {
        time -= 10;
        playSound("incorrect");
    }

    questionIndex++;

    // Check if the quiz is over
    if (questionIndex === questions.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
}

