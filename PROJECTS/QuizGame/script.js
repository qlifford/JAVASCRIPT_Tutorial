console.log("Hey")

const startScreen = document.querySelector('#start-screen');
const quizScreen = document.querySelector('#quiz-screen');
const startBtn = document.querySelector('#start-btn');
const restartBtn = document.querySelector('#restart-btn');
const totalQuiz = document.querySelector('#total-quiz');



startBtn.addEventListener('click', startQuiz)
restartBtn.addEventListener('click', restartQuiz)

function startQuiz(){
  console.log('quiz started')
  startScreen.classList.remove('active')
  quizScreen.classList.add('active')
}

function restartQuiz(){
  console.log('quiz restarted')
}