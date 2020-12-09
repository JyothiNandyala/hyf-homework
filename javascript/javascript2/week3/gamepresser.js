"use strict"

const startButton=document.getElementById('button');
const inputElement=document.getElementById('number');
const sCount=document.getElementById('count_s')
const lCount=document.getElementById('count_l')
const winnerOfTheGame=document.getElementById('winner');
const resetElement=document.getElementById('reset_game');
const errorMessage=document.getElementById('error_message');
const messageForTimeUp=document.getElementById('timeupmessage');
const countDown=document.getElementById('count_down');



function showTheValue(){
    const inputValue=inputElement.value;
    //const inputValueSeconds=inputValue*1000;

if(inputValue===""){
        errorMessage.innerHTML="Please set the time first.";
    }
    else{
        let startingtime=inputValue;

const interval=setInterval(updateCountDown,1000)
function updateCountDown(){
    
    countDown.innerHTML=startingtime+" seconds";
    
    startingtime--;
    if(startingtime < 0){
    clearInterval(interval);
   gameWinner();
    }
}
//setTimeout(gameWinner,inputValueSeconds)
    }
//for countdown the time



}

    let countS=0;
    let countL=0;
function gamePresser(element){
    
    if(element.key==='S'||element.key==='s'){
        countS++;
        sCount.innerHTML=countS;
    }
    else if(element.key==='L'||element.key==='l'){
    countL++;
    lCount.innerHTML=countL;
}
}

function gameWinner(){
    messageForTimeUp.innerHTML="Time Up...!";
    
    if(countS>countL){
        
        winnerOfTheGame.innerHTML="Press S is the Winner";
        var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
        
    }
    else if(countL>countS){
        winnerOfTheGame.innerHTML="Press L is the Winner";
        var confettiSettings = { target: 'my-canvas1' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
    }
    else if(countL === 0 && countS === 0){
        winnerOfTheGame.innerHTML="Game is completed";
    }
    else{
        winnerOfTheGame.innerHTML="Draw The Game";
    }
    document.removeEventListener('keypress',gamePresser)
}

function restartTheGame(){
    document.location.href="";
    
}



startButton.addEventListener('click',showTheValue);
document.addEventListener('keypress',gamePresser)
resetElement.addEventListener('click',restartTheGame);