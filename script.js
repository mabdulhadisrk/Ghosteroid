// targeting Elements
const MouthBox = document.querySelector('.mouth');
const webpageBody = document.body;
const goBackBtn = document.querySelector('.goback1');

let hovertimer;

// while user hovers the mouse over her mouth
MouthBox.addEventListener('mouseenter',function(){
    hovertimer = setTimeout(function(){
        webpageBody.classList.add('realm-active');
    }, 200);
});
MouthBox.addEventListener('mouseleave', function(){
    clearTimeout(hovertimer);
});
goBackBtn.addEventListener('click', function(){
    webpageBody.classList.remove('realm-active');
});