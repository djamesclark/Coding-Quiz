let startButtonEl = document.querySelector('.start-game');
let submitButtonEl = document.querySelector('.submitButton');
let timerEl = document.querySelector('.timer');
let mainEl = document.querySelector('#questionContainer');
let contentEl = document.querySelector('.content');
let gameOverEl = document.querySelector('#gameOverContainer');
let scoreListEl = document.querySelector('#scoreList');
let backButtonEl = document.querySelector('.backButton');
let clearButtonEl =document.querySelector('.clearButton');
let secondsLeft = 75;
let qIndex = 0;

var myQuestions = [
    {
        question: "Commonly used data items DO NOT include:",
        answers: ['1. strings',
            '2. booleans',
            '3. alerts',
            '4. numbers'],
        correctAnswer: '3. alerts'
    },
    {
        question: "The condition in an if/else statement is enclosed with ________.",
        answers: [
            '1. quotes',
            '2. curly brackets',
            '3. parenthesis',
            '4. square brackets'
        ]
        ,
        correctAnswer: '3. parenthesis'
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: [
            '1. numbers and strings',
            '2. other arrays',
            '3. booleans',
            '4. all of the above'
        ],
        correctAnswer: '4. all of the above'
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: [
            '1. commas',
            '2. curly brackets',
            '3. quotes',
            '4. parenthesis'
        ],
        correctAnswer: '3. quotes'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            '1. JavaScript',
            '2. terminal/bash',
            '3. for loops',
            '4. console.log'
        ],
        correctAnswer: '4. console.log'
    }
];

var timerInterval;
startButtonEl.addEventListener('click', function () {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = ("Time " + secondsLeft);

        if (secondsLeft === 0) {
            gameOver()
        }

    }, 1000);
    document.querySelector('.container').classList.add('hidden')
    mainEl.classList.remove('hidden')
    presentQuestion();
})

function presentQuestion() {
    mainEl.innerHTML = ''
    // create the element to display the question
    var title = document.createElement('h1')
    // add the question to the element
    title.textContent = myQuestions[qIndex].question;
    // create a container for our buttons
    var buttonContainer = document.createElement('div')
    // add the choices to EACH button

    for (let i = 0; i < myQuestions[qIndex].answers.length; i++) {

        // create button El
        // add
        // append
        let buttonAnswer = document.createElement('button')
        buttonAnswer.textContent = myQuestions[qIndex].answers[i]
        buttonAnswer.setAttribute('value', myQuestions[qIndex].answers[i])
        buttonAnswer.addEventListener('click', click)
        buttonContainer.append(buttonAnswer)
    }

    // append all created elements to the question container
    mainEl.append(title, buttonContainer)
}

function click() {
    console.log(this.value);
    if (this.value !== myQuestions[qIndex].correctAnswer) {
        secondsLeft -= 10;
        timerEl.textContent = ("Time " + secondsLeft);
    }
    qIndex++
    if (qIndex === myQuestions.length) {
        gameOver()
    } else {

        presentQuestion()
    }

}
let highScore = '';
function gameOver() {
    clearInterval(timerInterval);
    // hide the question container
    mainEl.classList.add("hidden");
    // show the final container
    gameOverEl.classList.remove("hidden");
    //add score
    let finalScore = document.querySelector(".finalScore");
    finalScore.textContent += "Your final score is " + secondsLeft + ". Enter initials below:";
    //store high score data
    
    submitButtonEl.addEventListener('click', function () {
        let highScore = document.querySelector(".highScore").value;
        console.log(highScore);
        localStorage.setItem('score', highScore)
        submitScore()
    })

    //add functionality to submit button - take to high score
    
}

function submitScore() {
    gameOverEl.classList.add("hidden");
    scoreListEl.classList.remove("hidden");
    let list = document.createElement('p');
    localStorage.getItem(highScore);
    list.textContent = highScore + secondsLeft;
    scoreListEl.append(list);
}