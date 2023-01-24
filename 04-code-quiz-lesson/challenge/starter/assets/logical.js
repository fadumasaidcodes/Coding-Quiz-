var btn = document.querySelector("#start")
var startSection = document.querySelector('#start-screen')
var questionSection = document.querySelector('#questions')
function startQuiz() {
    console.log("click")
    // When button is clicked, we are going to hide the start game section and render the question section
    startSection.setAttribute('class', 'hide')
    questionSection.removeAttribute('class')
    console.log(question)
}

btn.addEventListener('click', startQuiz)