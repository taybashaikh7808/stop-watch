const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")
const start = document.getElementById("start").onclick = function(){
    timer = setInterval(clock,1000)
} 
const stop = document.getElementById("stop").onclick = function(){
    clearInterval(timer)
}
const reset = document.getElementById("reset").onclick = function(){
    clearInterval(timer)
    seconds = "00";
    minutes = "00";
    hours = "00";
    sec.innerHTML = seconds;
    min.innerHTML = minutes;
    hour.innerHTML = hours;
    document.getElementById("lapsContainer").innerHTML = '';
}
const laps = document.getElementById("laps").onclick = function() {
    const lapstime = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = `LAP TIME: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    lapstime.appendChild(p);
    lapsContainer.appendChild(lapstime);
};
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;
function clock(){
    seconds++
    if(seconds === 60){
        seconds = 0
        minutes++
    }
    if(minutes === 60){
        minutes = 0
        hours++
    }
    if(hours == 24){
        hours = 0
    }
    sec.innerText = String(seconds).padStart(2, '0');
    min.innerText = String(minutes).padStart(2, '0');
    hour.innerText = String(hours).padStart(2, '0');

}



