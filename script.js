const startBtn = document.getElementById("start-btn");
const timer = document.getElementById("timer");
const inhaleSound = document.getElementById("inhale-sound");
const exhaleSound = document.getElementById("exhale-sound");
const congratulationsSound = document.getElementById("congratulations-sound");

let time = 600;
let inhale = true;

function startTimer() {
  console.log("Timer started!");
  startBtn.disabled = true;
  timer.classList.add("timer-red");
  timer.innerText = "10:00";
  inhaleSound.play();
  setTimeout(breathingCycle, 4000);
}

function breathingCycle() {
  if (time > 0) {
    inhale ? inhaleCycle() : exhaleCycle();
    inhale = !inhale;
    setTimeout(breathingCycle, 8000);
  } else {
    congratulationsSound.play();
    timer.innerText = "Congratulations!";
  }
}

function inhaleCycle() {
  timer.classList.remove("timer-blue");
  timer.classList.add("timer-red");
  timer.innerText = "Inhale";
  inhaleSound.play();
  setTimeout(() => timer.classList.remove("timer-red"), 4000);
}

function exhaleCycle() {
  timer.classList.remove("timer-red");
  timer.classList.add("timer-blue");
  timer.innerText = "Exhale";
  exhaleSound.play();
  setTimeout(() => timer.classList.remove("timer-blue"), 4000);
}

startBtn.addEventListener("click", startTimer);
