var questions = [
    {
        question: "HTML Stands for ______________",
        options: ["HyeperTextingMailLanguage", "HiTextMailLanguage", "Hypertext Markup Language", "HyperloopTextMailLangugae"],
        correctAnswer: "Hypertext Markup Language",
    },
    {
        question: "CSS Stands for ______________",
        options: ["CascadStyleShoot", "CascadeStyleSize", "Cascading Style Sheet", "CascadeSheetStyle"],
        correctAnswer: "Cascading Style Sheet",
    },
    {
        question: "JS Stands for ______________",
        options: ["JavaSripted", "JavaScore", "JavaScript", "JavaSlip"],
        correctAnswer: "JavaScript",
    },
    {
        question: "RAM Stands for ______________",
        options: ["Random Accessed Memory", "Read Only Memory", "Random Access Memory", "RAM"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: "SQL Stands for ______________",
        options: [".SQL", "MYSQL", "Structured Query Language", "SQL"],
        correctAnswer: "Structured Query Language",
    },
    {
        question: "is HTML is Programming Language?",
        options: ["YES", "NO"],
        correctAnswer: "NO",
    },
];


var displayQuestion = document.getElementById("displayquestion");
var CurrentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionNumber = document.getElementById("totalQuestionNumber")
var optionsParent = document.getElementById("optionsParent")

var indexVal = 0;
var marks = 0;

function renderQuestion() {
    var que = questions[indexVal];
    displayQuestion.innerHTML = que.question;
    totalQuestionNumber.innerHTML = questions.length;
    CurrentQuestionNumber.innerHTML = indexVal + 1;

    optionsParent.innerHTML = "";

    for (var i = 0; i < que.options.length; i++) {
        optionsParent.innerHTML +=  `<div class="col-md-6">
        <button onclick="checkAns('${que.correctAnswer}','${que.options[i]}')" class="btn bg-info-subtle w-100 py-2 mb-3">
        ${que.options[i]}
        </button>
        </div>` }


}
function nextQue(){
    indexVal++;
    renderQuestion()
}

function checkAns(a, b) {
    console.log(a, b);
    if (a === b) {
        marks = marks + 1;
        console.log("Answer " + (indexVal + 1) + " is correct.");
    } else {
        console.log("Answer " + (indexVal + 1) + " is wrong.");
    }
    console.log("Total Marks: " + marks);
    nextQue();
}


renderQuestion();