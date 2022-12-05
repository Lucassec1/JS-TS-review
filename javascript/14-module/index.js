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
  const oldButton = answersBox.querySelectorAll('button');
  oldButton.forEach(function(btn) {
    btn.remove();
  })

  // Change question text
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insert the alternatives
  questionText[i].answers.forEach(function(answer, i) {
    // Create the quiz button template
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // Remove hide and template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // Enter alternative on screen
    answersBox.appendChild(answerTemplate);

    // Enter a event click in button
    answerTemplate.addEventListener('click', function() {
      console.log(this);
    });
  });

  // Increment the question number
  actualQuestion++;
}

// Quizz startup
init();
