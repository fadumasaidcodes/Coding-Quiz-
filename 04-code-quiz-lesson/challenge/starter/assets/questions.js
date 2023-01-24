// adding the  questions 

const questions = [
    {
        title: "What is the correct syntax for creating a string in JavaScript?",
        choices: ["string x", "var x = 'string'", "let x = 'string'", "const x = 'string'"],
        answer: "var x = 'string'"
    },
    {
        title: "What is the correct syntax for creating an array in JavaScript?",
        choices: ["array x", "var x = []", "let x = []", "const x = []"],
        answer: "var x = []"
    },
    {
        title: "What is the correct syntax for creating an object in JavaScript?",
        choices: ["object x", "var x = {}", "let x = {}", "const x = {}"],
        answer: "var x = {}"
    },
    {
        title: "What function is used to execute a code block after a specified time?",
        choices: ["setInterval()", "setTimeout()", "setAfter()", "setDelay()"],
        answer: "setTimeout()"
    },
    {
        title: "What function is used to execute a code block repeatedly at a specified interval?",
        choices: ["setInterval()", "setTimeout()", "setRepeat()", "setCycle()"],
        answer: "setInterval()"
    },
    {
        title: "What is the correct syntax for defining a function in JavaScript?",
        choices: ["function x()", "var x = function()", "let x = function()", "const x = function()"],
        answer: "function x()"
    },
    {
        title: "What is the correct syntax for calling a function in JavaScript?",
        choices: ["call x()", "x()", "run x()", "execute x()"],
        answer: "x()"
    },
    {
        title: "What is the correct syntax for passing an argument to a function in JavaScript?",
        choices: ["x(arg)", "x = arg", "function x(arg)", "x arg"],
        answer: "x(arg)"
    }
];

export function getQuestions() {
    return questions;
}
