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
    }];

var questCtr = 0;
var timer = 120;

function nextQuestion() {
    if (questCtr == 0) {
        $('p').remove();
        $('button').remove();
        $("main").append($("<ol>").addClass('row'));
        window.timerFunc = setInterval(function () {
            timer--;
            if (timer <= 0) {
                clearInterval(timerFunc);
                enterInitials();
            }
            $('#timer').text('Time: ' + timer);
        }, 1000)
    }

    $('h1').text(questionData[questCtr].question);
    
    $('li').remove();
    for (var i = 0; i < questionData[questCtr].answers.length; i++) {
        var li = $("<li>").addClass('col-12 btn btn-color answer').attr('id', i).text(questionData[questCtr].answers[i]);;

        $('ol').append(li);
    }
    questCtr++;
    $('.answer').click(function (event) {
        $('h3').remove();

        if (questCtr < 5) {
            if (event.target.id == questionData[questCtr-1].correct) {
                $('<h3>').text('Correct!').appendTo($('main'));
            }
            else {
                $('<h3>').text('Wrong!').appendTo($('main'));
                timer -= 15;
            }
            nextQuestion();
        }
        else {
            if (event.target.id != questionData[questCtr-1].correct) {
                timer -= 15;
            }
            enterInitials();
        }

    });
    
}

function enterInitials() {
    clearInterval(window.timerFunc);

    $('#timer').text('Time: ' + timer);
    $('h1').text('High scores');
    $('ol').remove();
    $('<h2>').text('Your final score is ' + timer + '.').appendTo($('main'));

    var div = $('<div>').addClass('row');
    var h2 = $('<h2>').text('Enter initials:').addClass('col-3');
    var textarea = $('<textarea>').addClass('col-7');
    var button = $('<a>').addClass('col-2 btn btn-color submit').text('Submit').attr('role', 'button').attr('href', './assets/highscore.html');

    div.append(h2, textarea, button);

    $('main').append(div);

    $('.submit').click(function (event) {
        localStorage.setItem($(event.target).siblings('textarea').val(), timer);

    })
}


$('#start').click(nextQuestion);