var timeEl = document.getElementById('countDownTimer')

var interval;
var time = 60;
function updateTimer(){
interval = setInterval(function(){
    time--
    timeEl.textContent = time
    if(time <= 0){
        clearInterval(interval)
    }
}, 1000);
};

var qCounter = 1
var ulEl = document.getElementsByClassName("answers1");
for (var i = 0; i<ulEl.length; i++){
    ulEl[i].addEventListener('click', clickHandler)
}
function clickHandler(event){
    console.log(event)
    if(event.target.dataset.correct === "true"){
        console.log(true)
        qCounter++
        nextQuestion();
    }
    else{
        time-=10
        qCounter++
        nextQuestion()
    }
}


function nextQuestion(){
    if(qCounter === 2){
        document.querySelector(".Q-1").parentElement.classList.add("hide")
        document.querySelector(".Q-2").parentElement.classList.remove("hide")
    }
    else if(qCounter === 3){
    document.querySelector(".Q-2").parentElement.classList.add("hide")
    document.querySelector(".Q-3").parentElement.classList.remove("hide")
    }
}

updateTimer()
