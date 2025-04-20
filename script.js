let timerDisplay = document.getElementById("timerTxt");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let shortBreakBtn = document.getElementById("shortBreakBtn");
let longBreakBtn = document.getElementById("longBreakBtn");

let timer;
let timeLeft = 1500;
let running = false;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                running = false;
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    timeLeft = 1500;
    updateDisplay();
}

function ShortBreak() {
    clearInterval(timer);
    running = false;
    timeLeft = 300;
    updateDisplay();
}

function LongBreak() {
    clearInterval(timer);
    running = false;
    timeLeft = 900;
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
shortBreakBtn.addEventListener("click", ShortBreak);
longBreakBtn.addEventListener("click", LongBreak);
