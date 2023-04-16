//tempo
const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milisecondsEl = document.querySelector("#miliseconds")
// tempo marcador
const minutesMark = document.querySelector('#minutesMark');
const secondsMark = document.querySelector('#secondsMark')
const milisecondsMark = document.querySelector('#millisecondsMark');

//botoes
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn");
const markBtn = document.querySelector("#markBtn");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

//verificador dos botoes
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer)
markBtn.addEventListener('click', markTimer);

markBtn.style.display = 'none';

function startTimer(){
    isPaused = false;
    clearInterval(interval);
    interval = setInterval(workCounter, 10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
    markBtn.style.display = 'block';
    resetBtn.style.display = 'block';
    
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

    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    milisecondsEl.textContent = '00';

    minutesMark.textContent = '00';
    secondsMark.textContent = '00';
    milisecondsMark.textContent = '00';

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
    markBtn.style.display = "none";
    resetBtn.style.display = 'none';

}

function markTimer()
{
    minutesMark.textContent = formatTime(minutes);
    secondsMark.textContent = formatTime(seconds);
    milisecondsMark.textContent = formatMilliSeconds(miliseconds);
    //alert('test');
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
        return time.toString().padStart(3, '0');
    }
}
