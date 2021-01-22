"use strict"

const startButton = document.getElementById('button');
const inputElement = document.getElementById('number');
const sCount = document.getElementById('count_s')
const lCount = document.getElementById('count_l')
const winnerOfTheGame = document.getElementById('winner');
const resetElement = document.getElementById('reset_game');
const errorMessage = document.getElementById('error_message');
const messageForTimeUp = document.getElementById('timeupmessage');
const countDown = document.getElementById('count-down');



function showTheScore() {
    const inputValue = inputElement.value;
    //const inputValueSeconds=inputValue*1000;

    if (inputValue === "") {
        errorMessage.innerHTML = "Please set the time first.";
    }
    else {
        let startingtime = inputValue;

        const interval = setInterval(updateCountDown, 1000)
        function updateCountDown() {

            countDown.innerHTML = startingtime + " seconds";

            startingtime--;
            if (startingtime < 0) {
                clearInterval(interval);
                gameWinner();
            }
        }
    }
}

let skeycount = 0;
let lkeycount = 0;
function gamePresser(element) {

    if (element.key.toLowerCase() === 's') {
        skeycount++;
        // @ts-ignore
        sCount.innerHTML = skeycount;
    }
    else if (element.key.toLowerCase() === 'l') {
        lkeycount++;
        lCount.innerHTML = lkeycount;
    }
}

function gameWinner() {
    messageForTimeUp.innerHTML = "Time Up...!";

    if (skeycount > lkeycount) {

        winnerOfTheGame.innerHTML = "Press S is the Winner";
        var confettiSettings = { target: 'my-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

    }
    else if (lkeycount > skeycount) {
        winnerOfTheGame.innerHTML = "Press L is the Winner";
        var confettiSettings = { target: 'my-canvas1' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }
    else if (lkeycount === 0 && skeycount === 0) {
        winnerOfTheGame.innerHTML = "Game is completed";
    }
    else {
        winnerOfTheGame.innerHTML = "Draw The Game";
    }
    document.removeEventListener('keypress', gamePresser)
}

function restartTheGame() {
    document.location.href = "";

}

startButton.addEventListener('click', showTheScore);
document.addEventListener('keypress', gamePresser)
resetElement.addEventListener('click', restartTheGame);