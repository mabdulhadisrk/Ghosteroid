// targeting Elements
const MouthBox = document.querySelector('.mouth');
const webpageBody = document.body;
const goBackButtons = document.querySelectorAll('.goback1');

let hovertimer;
let clicksLeft = 15; //tracks total clicks for the struggle stage

// while user hovers the mouse over her mouth
MouthBox.addEventListener('mouseenter',function(){
    hovertimer = setTimeout(function(){
        webpageBody.classList.add('realm-active');
        webpageBody.classList.add('abyss-1');
        resetGameEngine();
    }, 200);
});
MouthBox.addEventListener('mouseleave', function(){
    clearTimeout(hovertimer);
});
for (let i = 0; i < goBackButtons.length; i++){
    goBackButtons[i].addEventListener('click', function(){
    webpageBody.classList.remove('realm-active', 'abyss-1', 'abyss-2', 'abyss-3', 'abyss-4');
    resetGameEngine();
});
}

function changeStage(currentStageId, nextStageId) {
    const current = document.getElementById(currentStageId);
    const next = document.getElementById(nextStageId);

    if (current&&next){
        current.classList.remove('ActiveStage');
        next.classList.add('ActiveStage');
    }
}
function resetGameEngine() {
    clicksLeft = 15;
    const counter = document.getElementById('ClickCounter');
    if (counter){
    counter.innerText = "REMAINING: 15";
    }
    
    // resetting, so that only stage 1 is showing
    document.getElementById('stage0').classList.add('ActiveStage');
    document.getElementById('stage1').classList.remove('ActiveStage');
    document.getElementById('stage2').classList.remove('ActiveStage');
    document.getElementById('stage3').classList.remove('ActiveStage');
    document.getElementById('stage4').classList.remove('ActiveStage');
}

//stage 0

function startGameSequence(){
    changeStage('stage0', 'stage1');
    webpageBody.classList.add('abyss-1');
}
// Stage 1 --> 2
function InsertTape(){
    changeStage('stage1', 'stage2');
    webpageBody.classList.remove('abyss-1');
    webpageBody.classList.add('abyss-2');
}
// stage 2 --> 3
function answerPhone(){
    changeStage('stage2', 'stage3');
    webpageBody.classList.remove('abyss-2');
    webpageBody.classList.add('abyss-3');
}
// stage 3 --> 4
function struggleClick(){

    const counter = document.getElementById('ClickCounter');
    if (clicksLeft>0){
        clicksLeft--;
        counter.innerText = `REMAINING: ${clicksLeft}`;
    }
        
    if (clicksLeft==0){
        changeStage('stage3','stage4');
        webpageBody.classList.remove('abyss-3');
        webpageBody.classList.add('abyss-4');
    }
}