var questionData = [
    {
        question: "Commonly used data types do NOT Include:",
        correct: 2,
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers"]
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        correct: 1,
        answers: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"]
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        correct: 2,
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parenthesis"]
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        correct: 3,
        answers: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        correct: 3,
        answers: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"]
    }
]

var questCtr = 0;


function createStart() {
    $('main').html('<h1>Coding Quiz Challenge</h1>' +
        '<p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>');

    var start = $('<button>').attr('id', 'start').html('Start');

    $('main').append(start);
}

function nextQuestion() {
    if (questCtr == 0) {
        
        $('p').remove();
        $('button').remove();
        $("main").append($("<ol>"));
    }

    $('h1').text(questionData[questCtr].question);

    for (var i = 0; i < questionData[questCtr].answers.length; i++) {
        var li = $("<li>").attr('id', i).addClass("answer").text(questionData[questCtr].answers[i]);;

        $('ol').append(li);
    }
    questCtr++;

}

createStart();
$('#start').click(nextQuestion);



$('.answer').click(function answerQuestion(event) {

    if (event.target.id == questionData[questCtr].correct) {

    }
    else {

    }
    nextQuestion();
});
