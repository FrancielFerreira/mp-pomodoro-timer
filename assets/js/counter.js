// Faça a lógica referente o cronômetro!

const counter = document.getElementById('counter');
const btnChangePomodoroMode = document.querySelectorAll(
  '.container-timer .modality',
);

function changePomodoroMode(event) {
  event.preventDefault();
  const btnActive = event.target;

  btnChangePomodoroMode.forEach((btn) => btn.classList.remove('active-button'));
  btnActive.classList.add('active-button');

  if (btnActive.innerText == 'Intervalo Curto') {
    counter.innerText = '05:00';
  } else {
    counter.innerText = '25:00';
  }
}

btnChangePomodoroMode.forEach((btn) =>
  btn.addEventListener('click', changePomodoroMode),
);

// countdown
const btnStartCounter = document.getElementById('start');
btnStartCounter.addEventListener('click', function startCountdown() {
  let min = 25;
  if (counter.innerText === '25:00') min = 25;
  else min = 5;

  var timerMinutes = 60 * min,
    display = document.getElementById('counter');
  handleCountdown(timerMinutes, display);
});

function handleCountdown(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  console.log(timer);
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function webSolution() {
  function startTimer(duration, display) {
    var timer = duration,
      minutes,
      seconds;
    console.log(timer);
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      display.textContent = minutes + ':' + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
  btnStartCounter.addEventListener('click', function () {
    let min = 25;
    if (counter.innerText === '25:00') min = 25;
    else min = 5;

    var timerMinutes = 60 * min,
      display = document.getElementById('counter');
    startTimer(timerMinutes, display);
  });
}
// webSolution();
