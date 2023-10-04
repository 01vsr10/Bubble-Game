var timer = 60;
var score = 0;
var hitRandomNo = 0;
var ballSize = 54;
var btm = document.querySelector(".pbtm");
const divWidth = btm.offsetWidth;
const divHeight = btm.clientHeight;
var columns = Math.floor(divWidth / ballSize)-2;
var rows = Math.floor(divHeight / ballSize)-2;
var totalBalls = columns*rows;
function increaseScore(){
    score += 10;
    document.querySelector(".scoreVal").textContent = score;
}

function getNewHit(){
    hitRandomNo = Math.floor(Math.random()*10);
    document.querySelector(".hitVal").textContent = hitRandomNo;
}

function makeBubble() {
    var clutter = "";
    for(var i = 1;i <= totalBalls ;i++){
        var randomNo = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${randomNo}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerVal = setInterval(function(){
        if(timer > 0) {
            timer--;
            document.querySelector(".timer").textContent = timer;
        }
        else {
            clearInterval(timerVal);
            document.querySelector(".pbtm").innerHTML = `<h1 class="scoreCard">Final Score: ${score}</h1>`;
        }
    },1000);
}

makeBubble();
runTimer();
getNewHit();

document.querySelector(".pbtm").addEventListener("click",function(e){
    var clickedNo = Number(e.target.textContent);
    if (clickedNo === hitRandomNo){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
