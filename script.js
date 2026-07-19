// targeting Elements
const MouthBox = document.querySelector('.mouth');
const webpageBody = document.body;
const goBackButtons = document.querySelectorAll('.goback1');

let hovertimer;
let clicksLeft = 15; //tracks total clicks for the struggle stage
let isGameActive = false;

// while user hovers the mouse over her mouth
MouthBox.addEventListener('mouseenter',function(){
    hovertimer = setTimeout(function(){
        webpageBody.classList.add('realm-active');
        webpageBody.classList.add('abyss-1');
        resetGameEngine();
        startGameSequence();
    }, 200);
});
MouthBox.addEventListener('mouseleave', function(){
    clearTimeout(hovertimer);
});
    goBackButtons.forEach(button =>{
    button.addEventListener('click', function(){
    isGameActive = false;
    webpageBody.className = '';
    resetGameEngine();
});
});

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
    
    webpageBody.classList.remove('abyss-1', 'abyss-2', 'abyss-3', 'abyss-4');
    const stages = ['stage0', 'stage1', 'stage2', 'stage3', 'stage4'];
    stages.forEach(id=> {
        const el = document.getElementById(id);
        if (el){
            if (id === 'stage0'){
                el.classList.add('ActiveStage');
            } else{
                el.classList.remove('ActiveStage');
            }
        }
    });
   
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
        if (counter){
        counter.innerText = `REMAINING: ${clicksLeft}`;
    }
        
    if (clicksLeft==0){
        changeStage('stage3','stage4');
        webpageBody.classList.remove('abyss-3');
        webpageBody.classList.add('abyss-4');
    }
}
}