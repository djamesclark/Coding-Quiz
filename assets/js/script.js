let startButtonEl = document.querySelector('.start-game');
let timerEl = document.querySelector('.timer');
let mainEl = document.querySelector('.main-title');
let contentEl = document.querySelector('.content');
let secondsLeft = 75;

var myQuestions = [
	{
		question: "Commonly used data items DO NOT include:",
		answers: {
			a: '1. strings',
			b: '2. booleans',
			c: '3. alerts',
            d: '4. numbers'
		},
		correctAnswer: 'c'
	},
	{
		question: "The condition in an if/else statement is enclosed with ________.",
		answers: {
			a: '1. quotes',
			b: '2. curly brackets',
			c: '3. parenthesis',
            d: '4. square brackets'
		},
		correctAnswer: 'c'
	},
    {
		question: "Arrays in JavaScript can be used to store ______.",
		answers: {
			a: '1. numbers and strings',
			b: '2. other arrays',
			c: '3. booleans',
            d: '4. all of the above'
		},
		correctAnswer: 'd'
	},
    {
		question: "String values must be enclosed within _____ when being assigned to variables.",
		answers: {
			a: '1. commas',
			b: '2. curly brackets',
			c: '3. quotes',
            d: '4. parenthesis'
		},
		correctAnswer: 'c'
	},
    {
		question: "A very useful tool used during development and debugging for printing content to the debugger is:",
		answers: {
			a: '1. JavaScript',
			b: '2. terminal/bash',
			c: '3. for loops',
            d: '4. console.log'
		},
		correctAnswer: 'd'
	}
];
startButtonEl.addEventListener('click', function () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = ("Time " + secondsLeft);
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);

        }
    
      }, 1000);
    presentQuestion();
})
    function presentQuestion() {
        mainEl.textContent = myQuestions[0].question;
        contentEl.textContent = myQuestions[0].answers;
    }
console.log(timerEl);