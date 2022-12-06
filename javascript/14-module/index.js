// Declaration of variables
const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

// Questions
const questions = [
  {
    "question": "PHP was developed for what purpose?",
    "answers": [
      {
          "answer": "back-end",
          "correct": true
      },
      {
          "answer": "front-end",
          "correct": false
      },
      {
          "answer": "operational system",
          "correct": false
      },
      {
          "answer": "database",
          "correct": false
      },
    ]
  },
  {
    "question": "A way to declare a variable in JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      },
    ]
  },
  {
    "question": "What is the id selector in CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      },
    ]
  },
]

// Quizz replacement for the first question
function init() {
  createQuestion(0);
}

// Create a question
function createQuestion(i) {
  // Clear the previous question
  const oldButtons = answersBox.querySelectorAll('button');
  oldButtons.forEach(function(btn) {
    btn.remove();
  })

  // Change question text
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insert the alternatives
  questions[i].answers.forEach(function(answer, i) {
    // Create the quiz button template
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // Remove hide and template class
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Enter alternative on screen
    answersBox.appendChild(answerTemplate);

    // Enter a event click in button
    answerTemplate.addEventListener("click", function() {
      checkAnswer(this);
    });
  });

  // Increment the question number
  actualQuestion++;
}

// Checking user response
function checkAnswer(btn) {
  const buttons = answersBox.querySelectorAll("button");

  // Checks if the answer is correct and adds button classes
  buttons.forEach(function(button) {
    if(button.getAttribute("correct-answer") === "true") {
      button.classList.add("correct-answer");

      // Check if the user got the question right
      if (btn === button) {
        // Increment of points
        points++;
      }
    } else {
      button.classList.add("wrong-answer");
    }
  });

  // Show next question
  nextQuestion();
}

// Show next quizz question
function nextQuestion() {
  // Timer for the user to see the answers
  setTimeout(function () {
    // Check if still have questions
    if(actualQuestion >= questions.length) {
      // Displays success message
      showSucessMessage();
      return;
    }
    createQuestion(actualQuestion);
  }, 700);
}

// Display the final screen
function showSucessMessage() {
  hideOrShowQuizz();

  // Exchange success screen data

  // Calculates the score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector("#display-score span");

  displayScore.textContent = score.toString();

  // Change the number of correct questions
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  // Change the total of questions
  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;
}

// Show or hide
function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

// Restart quizz
const restartBtn = document.querySelector('#restart');

restartBtn.addEventListener('click', function() {
  // Clear the game
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// Quizz startup
init();
