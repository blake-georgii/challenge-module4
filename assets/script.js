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
var scoreCtr = 0;

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

    $('li').remove();
    for (var i = 0; i < questionData[questCtr].answers.length; i++) {
        var li = $("<li>").attr('id', i).addClass("answer").text(questionData[questCtr].answers[i]);;

        $('ol').append(li);
    }
    questCtr++;

    $('.answer').click(function answerQuestion(event) {
        $('h3').remove();

        if (questCtr < 5) {
            if (event.target.id == questionData[questCtr].correct) {
                $('<h3>').text('Correct!').appendTo($('main'));
                scoreCtr++;
            }
            else {
                $('<h3>').text('Wrong!').appendTo($('main'));
            }
            nextQuestion();
        }
        else {
            enterInitials();
        }

    });
}

function enterInitials() {
    var finalScore = scoreCtr / questCtr * 100;
    $('h1').text('High scores');
    $('ol').remove();
    $('<h2>').text('Your final score is ' + finalScore + '.').appendTo($('main'));

    var div = $('<div>').addClass('row');
    var h2 = $('<h2>').text('Enter initials:').addClass('col-3');
    var textarea = $('<textarea>').addClass('col-7');
    var button = $('<button>').text('Submit').addClass('col-2');

    div.append(h2, textarea, button);

    $('main').append(div);

}

createStart();
$('#start').click(nextQuestion);
