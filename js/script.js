const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milisecondsEl = document.querySelector("#miliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer)

function startTimer(){
    isPaused = false;
    clearInterval(interval);
    interval = setInterval(workCounter, 10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function workCounter() {
    if(!isPaused) {
        miliseconds += 10;

        if(miliseconds === 1000) {
            seconds++;
            miliseconds = 0;
        }

        if(seconds === 60) {
            minutes++;
            seconds = 0;
        }

        minutesEl.textContent = formatTime(minutes);
        secondsEl.textContent = formatTime(seconds);
        milisecondsEl.textContent = formatMilliSeconds(miliseconds);
    }
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    milisecondsEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";

}

function formatTime(time) {
    if(time < 10) {
        return '0' + time;
    }
    else{
        return time;
    }
}

function formatMilliSeconds(time){
    if(time < 100) {
        return time.toString.padStart(3, "0");
    }
    else{
        return time.toString();
    }
}
